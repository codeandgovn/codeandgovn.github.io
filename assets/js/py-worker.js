/* Code&Go — runs learner Python in a Web Worker via Pyodide.
   A worker (not the main thread) so a runaway `while True: pass` can be
   killed by terminating the worker, instead of freezing the whole page. */

importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");

let pyodideReadyPromise = null;

async function getPyodide() {
  if (!pyodideReadyPromise) {
    pyodideReadyPromise = loadPyodide();
  }
  return pyodideReadyPromise;
}

self.onmessage = async (event) => {
  const { id, code } = event.data;
  try {
    const pyodide = await getPyodide();
    const result = await pyodide.runPythonAsync(code);
    self.postMessage({ id, ok: true, result: String(result) });
  } catch (err) {
    self.postMessage({ id, ok: false, error: err && err.message ? err.message : String(err) });
  }
};
