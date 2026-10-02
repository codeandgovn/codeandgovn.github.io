/* Code&Go — manages the Pyodide worker and turns a room's {functionName, testCases}
   plus the learner's own code into a pass/fail report. */

let _pyWorker = null;
let _pyMsgId = 0;
const _pyPending = new Map();

function getPyWorker() {
  if (!_pyWorker) {
    _pyWorker = new Worker("assets/js/py-worker.js");
    _pyWorker.onmessage = (event) => {
      const { id, ok, result, error } = event.data;
      const pending = _pyPending.get(id);
      if (!pending) return;
      _pyPending.delete(id);
      if (ok) pending.resolve(result);
      else pending.reject(new Error(error));
    };
  }
  return _pyWorker;
}

function killPyWorker() {
  if (_pyWorker) {
    _pyWorker.terminate();
    _pyWorker = null;
  }
  // Anything still waiting on the killed worker will never hear back.
  _pyPending.forEach(p => p.reject(new Error("Execution timed out or was interrupted.")));
  _pyPending.clear();
}

/* Runs arbitrary Python in the worker, with a hard timeout that kills and
   rebuilds the worker if the code hangs (e.g. an infinite loop). */
function runPython(code, timeoutMs) {
  timeoutMs = timeoutMs || 10000;
  const worker = getPyWorker();
  const id = ++_pyMsgId;

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      killPyWorker();
      reject(new Error("Your code took too long to run (possible infinite loop) and was stopped."));
    }, timeoutMs);

    _pyPending.set(id, {
      resolve: (v) => { clearTimeout(timer); resolve(v); },
      reject: (e) => { clearTimeout(timer); reject(e); }
    });

    worker.postMessage({ id, code });
  });
}

/* Pre-warms the worker (starts the Pyodide download/init) without running
   any learner code yet, so the first real "Run" feels fast. Safe to call
   more than once; failures are silently ignored (next real run will retry). */
function prewarmPython() {
  runPython("1 + 1", 60000).catch(() => {});
}

function pyStringLiteral(jsValue) {
  // JSON string escaping and Python double-quoted string escaping are
  // compatible for the escapes we need (\\, \", \n, \t, \uXXXX), so a
  // JSON-stringified string is valid pasted as a Python string literal.
  return JSON.stringify(JSON.stringify(jsValue));
}

/* Builds the full Python source: a tiny JSON-based test harness, the
   learner's own code, then a call that runs every test case against
   their function and returns a JSON report as the script's value. */
function buildHarness(learnerCode, functionName, testCases) {
  return `
import json

__test_cases__ = json.loads(${pyStringLiteral(testCases)})

def __run_cases__(fn, cases):
    results = []
    all_ok = True
    for case in cases:
        args = case.get("args", [])
        try:
            got = fn(*args)
            ok = got == case["expected"]
            got_repr = repr(got)
        except Exception as e:
            ok = False
            got_repr = type(e).__name__ + ": " + str(e)
        if not ok:
            all_ok = False
        results.append({
            "args": [repr(a) for a in args],
            "expected": repr(case["expected"]),
            "got": got_repr,
            "ok": ok
        })
    return {"all_passed": all_ok, "cases": results}

${learnerCode}

json.dumps(__run_cases__(${functionName}, __test_cases__))
`;
}

/* Runs the learner's code against a task's test cases.
   Returns { allPassed, cases: [{args, expected, got, ok}] } or throws on a
   genuine execution problem (syntax error, timeout, etc.) — the caller
   should show that as a runtime error, not a "tests failed" result. */
async function runCodeTask(learnerCode, functionName, testCases) {
  const source = buildHarness(learnerCode, functionName, testCases);
  const resultJson = await runPython(source);
  const parsed = JSON.parse(resultJson);
  return { allPassed: parsed.all_passed, cases: parsed.cases };
}
