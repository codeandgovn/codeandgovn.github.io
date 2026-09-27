/* Code&Go — Room & Path content
   Each room mimics a TryHackMe-style room: a set of tasks, some
   informational, some with a short "flag"-like answer to submit. */

const ROOMS = [
  {
    id: "python-basics",
    title: "Python Basics",
    icon: "🐍",
    difficulty: "Easy",
    tags: ["fundamentals", "beginner"],
    description: "Set up your Python environment and learn variables, data types, and your first program.",
    tasks: [
      {
        title: "Welcome to Python",
        points: 0,
        content: `
          <p>Python is a high-level, readable programming language used for web apps, automation,
          data science, and more. In this room you'll write your first lines of Python and learn
          the building blocks every program needs: values, variables, and output.</p>
          <p>Every task in this room (and every room on Code&amp;Go) works the same way: read the
          explanation, try the code yourself, then answer the short question to earn points and
          unlock the next task.</p>
          <pre>print("Hello, Code&amp;Go!")</pre>
          <p>Click <b>Complete Task</b> below when you're ready to continue.</p>
        `
      },
      {
        title: "print() and comments",
        points: 10,
        content: `
          <p><code class="inline">print()</code> writes text to the screen. Anything inside quotes
          is called a <b>string</b>.</p>
          <pre>print("Learning Python with Code&amp;Go")
# This is a comment — Python ignores it
print('Single quotes work too')</pre>
          <p>Comments start with <code class="inline">#</code> and are used to leave notes in your code.</p>
        `,
        question: "Which function prints text to the screen in Python?",
        answer: "print",
        hint: "It's the word you just used above, without the parentheses."
      },
      {
        title: "Variables",
        points: 10,
        content: `
          <p>Variables store values so you can reuse them later. Python doesn't require you to
          declare a type — it figures it out automatically.</p>
          <pre>name = "Ada"
age = 30
is_coder = True

print(name, age, is_coder)</pre>
          <p>Variable names are case-sensitive and can't start with a number.</p>
        `,
        question: "Which symbol is used to assign a value to a variable in Python?",
        answer: "=",
        hint: "It's a single character, not '=='."
      },
      {
        title: "Data types",
        points: 15,
        content: `
          <p>Python's core built-in types:</p>
          <ul>
            <li><code class="inline">int</code> — whole numbers: <code class="inline">42</code></li>
            <li><code class="inline">float</code> — decimals: <code class="inline">3.14</code></li>
            <li><code class="inline">str</code> — text: <code class="inline">"hello"</code></li>
            <li><code class="inline">bool</code> — <code class="inline">True</code> / <code class="inline">False</code></li>
          </ul>
          <p>Use the built-in <code class="inline">type()</code> function to check a value's type:</p>
          <pre>&gt;&gt;&gt; type(3.14)
&lt;class 'float'&gt;</pre>
        `,
        question: "What type would type(3.14) return? (just the word, e.g. int)",
        answer: "float",
        hint: "3.14 has a decimal point."
      },
      {
        title: "Taking input",
        points: 15,
        content: `
          <p>The <code class="inline">input()</code> function pauses your program and waits for
          the user to type something. It always returns a <b>string</b>, even if they type a number.</p>
          <pre>name = input("What's your name? ")
print("Hello, " + name + "!")

age = int(input("How old are you? "))
print("Next year you'll be", age + 1)</pre>
          <p>Notice we had to wrap <code class="inline">input()</code> in <code class="inline">int()</code>
          to convert the text into a number before doing math on it.</p>
        `,
        question: "Which function converts a string into an integer?",
        answer: "int",
        hint: "Same name as the data type for whole numbers."
      }
    ]
  },

  {
    id: "control-flow",
    title: "Control Flow",
    icon: "🔀",
    difficulty: "Easy",
    tags: ["fundamentals", "logic"],
    description: "Make decisions with if/elif/else and repeat actions with for and while loops.",
    tasks: [
      {
        title: "if, elif, else",
        points: 0,
        content: `
          <p>Conditionals let your program make decisions. Python uses indentation (whitespace)
          instead of curly braces to define blocks of code.</p>
          <pre>age = 20

if age >= 18:
    print("You can vote")
elif age >= 13:
    print("You're a teenager")
else:
    print("You're a child")</pre>
        `
      },
      {
        title: "Comparison operators",
        points: 10,
        content: `
          <p>Common comparison operators: <code class="inline">==</code> (equal),
          <code class="inline">!=</code> (not equal), <code class="inline">&gt;</code>,
          <code class="inline">&lt;</code>, <code class="inline">&gt;=</code>, <code class="inline">&lt;=</code>.</p>
          <pre>&gt;&gt;&gt; 5 == 5
True
&gt;&gt;&gt; 5 != 4
True</pre>
        `,
        question: "Which operator checks if two values are equal (not assignment)?",
        answer: "==",
        hint: "It uses the assignment symbol, but twice."
      },
      {
        title: "for loops",
        points: 15,
        content: `
          <p>A <code class="inline">for</code> loop repeats code for each item in a sequence,
          such as a <code class="inline">range()</code> of numbers.</p>
          <pre>for i in range(5):
    print(i)
# prints 0 1 2 3 4</pre>
          <p><code class="inline">range(5)</code> generates numbers from 0 up to, but not
          including, 5.</p>
        `,
        question: "How many numbers does range(5) generate?",
        answer: "5",
        hint: "It starts counting at 0."
      },
      {
        title: "while loops",
        points: 15,
        content: `
          <p>A <code class="inline">while</code> loop repeats as long as a condition is true.
          Be careful — forgetting to update the condition creates an infinite loop!</p>
          <pre>count = 0
while count &lt; 3:
    print("Counting:", count)
    count += 1</pre>
          <p><code class="inline">count += 1</code> is shorthand for
          <code class="inline">count = count + 1</code>.</p>
        `,
        question: "What keyword starts a loop that runs while a condition stays true?",
        answer: "while",
        hint: "It's in the task title."
      },
      {
        title: "break and continue",
        points: 15,
        content: `
          <p><code class="inline">break</code> exits a loop immediately.
          <code class="inline">continue</code> skips to the next iteration.</p>
          <pre>for i in range(10):
    if i == 5:
        break
    if i % 2 == 0:
        continue
    print(i)
# prints 1 3</pre>
        `,
        question: "Which keyword immediately exits a loop entirely?",
        answer: "break",
        hint: "The opposite of continuing."
      }
    ]
  },

  {
    id: "data-structures",
    title: "Data Structures",
    icon: "🧺",
    difficulty: "Medium",
    tags: ["fundamentals", "collections"],
    description: "Store and organize data using lists, tuples, dictionaries, and sets.",
    tasks: [
      {
        title: "Lists",
        points: 0,
        content: `
          <p>A <b>list</b> is an ordered, changeable collection of items.</p>
          <pre>fruits = ["apple", "banana", "cherry"]
fruits.append("date")
print(fruits[0])   # apple
print(len(fruits)) # 4</pre>
        `
      },
      {
        title: "List indexing & slicing",
        points: 10,
        content: `
          <p>Indexing starts at 0. Negative indexes count from the end. Slicing grabs a range
          with <code class="inline">list[start:end]</code>.</p>
          <pre>nums = [10, 20, 30, 40, 50]
print(nums[0])    # 10
print(nums[-1])   # 50
print(nums[1:3])  # [20, 30]</pre>
        `,
        question: "What does nums[-1] return for nums = [10, 20, 30, 40, 50]?",
        answer: "50",
        hint: "Negative one means the last item."
      },
      {
        title: "Tuples",
        points: 10,
        content: `
          <p>A <b>tuple</b> is like a list, but <b>immutable</b> — it can't be changed after
          creation. Use tuples for fixed data like coordinates.</p>
          <pre>point = (3, 4)
print(point[0])  # 3
# point[0] = 9  # This would raise an error!</pre>
        `,
        question: "What word describes a tuple that cannot be modified after creation?",
        answer: "immutable",
        hint: "The opposite of 'mutable'."
      },
      {
        title: "Dictionaries",
        points: 15,
        content: `
          <p>A <b>dictionary</b> stores <code class="inline">key: value</code> pairs, letting you
          look up data by name instead of position.</p>
          <pre>user = {"name": "Grace", "role": "admin"}
print(user["name"])      # Grace
user["age"] = 32
print(user.get("email", "not set"))</pre>
          <p><code class="inline">.get()</code> safely returns a default value if the key
          doesn't exist, instead of raising an error.</p>
        `,
        question: "What method safely gets a value with a fallback default if the key is missing?",
        answer: "get",
        hint: "user.____(\"email\", \"not set\")"
      },
      {
        title: "Sets",
        points: 15,
        content: `
          <p>A <b>set</b> is an unordered collection of <b>unique</b> values — duplicates are
          automatically removed.</p>
          <pre>nums = {1, 2, 2, 3, 3, 3}
print(nums)  # {1, 2, 3}</pre>
        `,
        question: "How many items are in the set {1, 2, 2, 3, 3, 3}?",
        answer: "3",
        hint: "Sets remove duplicate values."
      }
    ]
  },

  {
    id: "functions",
    title: "Functions",
    icon: "🧩",
    difficulty: "Medium",
    tags: ["fundamentals", "logic"],
    description: "Write reusable blocks of code with def, parameters, return values, and lambdas.",
    tasks: [
      {
        title: "Defining a function",
        points: 0,
        content: `
          <p>Functions bundle code into a reusable, named block using <code class="inline">def</code>.</p>
          <pre>def greet(name):
    return "Hello, " + name + "!"

print(greet("World"))  # Hello, World!</pre>
        `
      },
      {
        title: "Parameters & default values",
        points: 10,
        content: `
          <p>Parameters can have default values, used when the caller doesn't provide one.</p>
          <pre>def greet(name="friend"):
    return "Hi, " + name

print(greet())          # Hi, friend
print(greet("Nadia"))   # Hi, Nadia</pre>
        `,
        question: "What does greet() print if name has a default value of \"friend\" and no argument is passed? (Hi, ___)",
        answer: "friend",
        hint: "It uses the default parameter value."
      },
      {
        title: "return vs print",
        points: 15,
        content: `
          <p><code class="inline">return</code> sends a value back to whoever called the function,
          so it can be stored or reused. <code class="inline">print()</code> just displays text —
          it doesn't give the value back to your program.</p>
          <pre>def add(a, b):
    return a + b

result = add(2, 3)
print(result * 10)  # 50</pre>
        `,
        question: "What is the value of result * 10 in the example above?",
        answer: "50",
        hint: "add(2, 3) returns 5."
      },
      {
        title: "*args and **kwargs",
        points: 15,
        content: `
          <p><code class="inline">*args</code> collects extra positional arguments into a tuple.
          <code class="inline">**kwargs</code> collects extra keyword arguments into a dict.</p>
          <pre>def total(*args):
    return sum(args)

print(total(1, 2, 3, 4))  # 10</pre>
        `,
        question: "What does total(1, 2, 3, 4) return?",
        answer: "10",
        hint: "sum() adds every value in args together."
      },
      {
        title: "Lambda functions",
        points: 15,
        content: `
          <p>A <b>lambda</b> is a small, anonymous, single-expression function — handy for short
          throwaway logic like sorting keys.</p>
          <pre>square = lambda x: x * x
print(square(6))  # 36

nums = [3, 1, 2]
print(sorted(nums, key=lambda n: -n))  # [3, 2, 1]</pre>
        `,
        question: "What keyword creates an anonymous function in Python?",
        answer: "lambda",
        hint: "It's in the task title."
      }
    ]
  },

  {
    id: "strings",
    title: "String Manipulation",
    icon: "🔤",
    difficulty: "Medium",
    tags: ["fundamentals", "text"],
    description: "Slice, format, and transform text using Python's string methods and f-strings.",
    tasks: [
      {
        title: "String basics & slicing",
        points: 0,
        content: `
          <p>Strings behave like lists of characters — you can index and slice them.</p>
          <pre>word = "Python"
print(word[0])     # P
print(word[-1])    # n
print(word[0:3])   # Pyt</pre>
        `
      },
      {
        title: "Common string methods",
        points: 10,
        content: `
          <pre>s = "  Hello, Code&amp;Go!  "
print(s.strip())        # "Hello, Code&amp;Go!"
print(s.lower())
print(s.upper())
print(s.strip().replace("Hello", "Hey"))</pre>
          <p><code class="inline">.strip()</code> removes leading/trailing whitespace.
          <code class="inline">.replace(old, new)</code> swaps substrings.</p>
        `,
        question: "Which method removes leading and trailing whitespace from a string?",
        answer: "strip",
        hint: "s.____()"
      },
      {
        title: "f-strings",
        points: 15,
        content: `
          <p>f-strings (formatted string literals) let you embed expressions directly inside a
          string using curly braces.</p>
          <pre>name = "Zed"
score = 97
print(f"{name} scored {score} points!")
print(f"Doubled: {score * 2}")</pre>
        `,
        question: "What prefix letter turns a normal string into an f-string?",
        answer: "f",
        hint: "It comes right before the opening quote."
      },
      {
        title: "split() and join()",
        points: 15,
        content: `
          <pre>sentence = "python is fun"
words = sentence.split(" ")
print(words)              # ['python', 'is', 'fun']

joined = "-".join(words)
print(joined)              # python-is-fun</pre>
          <p><code class="inline">.split()</code> breaks a string into a list;
          <code class="inline">.join()</code> does the reverse.</p>
        `,
        question: "What does '-'.join(['a', 'b', 'c']) return?",
        answer: "a-b-c",
        hint: "Join the list items with a dash between each."
      },
      {
        title: "Checking substrings",
        points: 10,
        content: `
          <pre>text = "Code&amp;Go teaches Python"
print("Python" in text)      # True
print(text.startswith("Code"))  # True
print(text.find("teaches"))     # index of the match</pre>
        `,
        question: "What keyword checks if a substring exists inside another string (returns True/False)?",
        answer: "in",
        hint: "\"Python\" ____ text"
      }
    ]
  },

  {
    id: "errors-files",
    title: "Errors & File Handling",
    icon: "📁",
    difficulty: "Medium",
    tags: ["intermediate", "files"],
    description: "Handle exceptions gracefully with try/except and read & write files.",
    tasks: [
      {
        title: "try / except",
        points: 0,
        content: `
          <p>Errors (exceptions) crash your program unless you handle them. Wrap risky code in
          <code class="inline">try</code> and catch failures in <code class="inline">except</code>.</p>
          <pre>try:
    result = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")</pre>
        `
      },
      {
        title: "Catching specific exceptions",
        points: 10,
        content: `
          <pre>try:
    age = int("not a number")
except ValueError:
    print("That's not a valid number")
except Exception as e:
    print("Something else went wrong:", e)</pre>
          <p>Catching specific exception types first makes your error handling more precise.</p>
        `,
        question: "What exception type is raised when int() fails to convert text to a number?",
        answer: "ValueError",
        hint: "It's the exception name right after the first except."
      },
      {
        title: "finally",
        points: 10,
        content: `
          <pre>try:
    f = open("data.txt")
except FileNotFoundError:
    print("File missing")
finally:
    print("This always runs, error or not")</pre>
        `,
        question: "Which block always runs whether or not an exception occurred?",
        answer: "finally",
        hint: "It's the last keyword in the example."
      },
      {
        title: "Writing to a file",
        points: 15,
        content: `
          <p>Use <code class="inline">with open(...)</code> so the file is automatically closed
          when you're done — this is called a <b>context manager</b>.</p>
          <pre>with open("notes.txt", "w") as f:
    f.write("Learning Python with Code&amp;Go\\n")</pre>
          <p>Mode <code class="inline">"w"</code> creates/overwrites the file. Use
          <code class="inline">"a"</code> to append instead.</p>
        `,
        question: "Which file mode appends to a file instead of overwriting it?",
        answer: "a",
        hint: "One letter, short for 'append'."
      },
      {
        title: "Reading a file",
        points: 15,
        content: `
          <pre>with open("notes.txt", "r") as f:
    content = f.read()
    print(content)

with open("notes.txt", "r") as f:
    for line in f:
        print(line.strip())</pre>
        `,
        question: "Which method reads the entire file contents into a single string?",
        answer: "read",
        hint: "f.____()"
      }
    ]
  },

  {
    id: "oop-basics",
    title: "OOP Basics",
    icon: "🏗️",
    difficulty: "Hard",
    tags: ["intermediate", "classes"],
    description: "Model real-world things with classes, objects, attributes, methods, and inheritance.",
    tasks: [
      {
        title: "Classes and objects",
        points: 0,
        content: `
          <p>A <b>class</b> is a blueprint. An <b>object</b> (or instance) is something built
          from that blueprint. <code class="inline">__init__</code> runs automatically when you
          create a new object.</p>
          <pre>class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        return self.name + " says Woof!"

rex = Dog("Rex")
print(rex.bark())  # Rex says Woof!</pre>
        `
      },
      {
        title: "self and attributes",
        points: 10,
        content: `
          <p><code class="inline">self</code> refers to the specific instance calling the
          method — it's how each object keeps track of its own data.</p>
          <pre>class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count += 1

c = Counter()
c.increment()
c.increment()
print(c.count)  # 2</pre>
        `,
        question: "What is c.count after calling c.increment() twice, starting from 0?",
        answer: "2",
        hint: "Each call adds 1."
      },
      {
        title: "Class methods vs instance data",
        points: 15,
        content: `
          <pre>class Account:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self.balance

acc = Account(100)
print(acc.deposit(50))  # 150</pre>
        `,
        question: "What does acc.deposit(50) return if the account started with a balance of 100?",
        answer: "150",
        hint: "100 + 50"
      },
      {
        title: "Inheritance",
        points: 20,
        content: `
          <p>A class can <b>inherit</b> from another, reusing and extending its behavior.</p>
          <pre>class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return self.name + " makes a sound"

class Cat(Animal):
    def speak(self):
        return self.name + " says Meow!"

a = Animal("Generic")
c = Cat("Whiskers")
print(a.speak())  # Generic makes a sound
print(c.speak())  # Whiskers says Meow!</pre>
          <p><code class="inline">Cat</code> overrides the <code class="inline">speak</code>
          method — this is called <b>method overriding</b>.</p>
        `,
        question: "What is the parent class of Cat in the example above?",
        answer: "Animal",
        hint: "class Cat(____):"
      },
      {
        title: "Dunder methods",
        points: 15,
        content: `
          <p>"Dunder" (double underscore) methods let objects work with built-in Python syntax,
          like <code class="inline">print()</code> or <code class="inline">len()</code>.</p>
          <pre>class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x}, {self.y})"

p = Point(3, 4)
print(p)  # (3, 4)</pre>
        `,
        question: "Which dunder method controls what print() displays for an object?",
        answer: "__str__",
        hint: "Two underscores, the word 'str', two more underscores."
      }
    ]
  }
];

const PATHS = [
  {
    id: "python-fundamentals",
    title: "Python Fundamentals",
    icon: "🐍",
    description: "Go from zero to confident with Python's core syntax — variables, control flow, data structures, and functions.",
    rooms: ["python-basics", "control-flow", "data-structures", "functions"]
  },
  {
    id: "practical-python",
    title: "Practical Python",
    icon: "🛠️",
    description: "Build on the fundamentals with strings, error handling, file I/O, and object-oriented programming.",
    rooms: ["strings", "errors-files", "oop-basics"]
  }
];

/* ---- Helpers to look up content ---- */
function getRoom(id) {
  return ROOMS.find(r => r.id === id);
}
function getPath(id) {
  return PATHS.find(p => p.id === id);
}
function roomTotalPoints(room) {
  return room.tasks.reduce((sum, t) => sum + (t.points || 0), 0);
}
