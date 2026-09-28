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
  },

  /* ---- batch-01.js ---- */
  {
  id: "operators-precedence",
  title: "Operators & Precedence",
  icon: "🧮",
  difficulty: "Easy",
  tags: ["language", "fundamentals", "operators"],
  description: "Learn arithmetic, comparison, and logical operators in Python, and discover the precedence rules that decide which one runs first.",
  tasks: [
    {
      title: "Categories of Operators",
      points: 0,
      content: `
        <p>Python expressions can combine arithmetic operators (<code class="inline">+ - * / // % **</code>), comparison operators (<code class="inline">== != &lt; &gt; &lt;= &gt;=</code>), and logical operators (<code class="inline">and or not</code>). When several operators appear in one expression, Python evaluates them in a fixed order called <b>operator precedence</b>.</p>
        <p>Operators with higher precedence run first. You can always add parentheses to make the intended order explicit and easier to read.</p>
        <pre>a = 2 + 3 * 4
b = (2 + 3) * 4
print(a, b)</pre>
      `
    },
    {
      title: "Arithmetic Precedence",
      points: 10,
      content: `
        <p>Multiplication, division, and the modulo operator all bind tighter than addition and subtraction, so they run first unless parentheses say otherwise.</p>
        <pre>result = 10 + 2 * 5
print(result)</pre>
      `,
      question: "What is the value of 10 + 2 * 5?",
      answer: "20",
      hint: "Multiplication happens before addition."
    },
    {
      title: "Exponents and Unary Minus",
      points: 10,
      content: `
        <p>Exponentiation (<code class="inline">**</code>) has higher precedence than a unary minus sign, so Python computes the power first and then negates the result.</p>
        <pre>value = -2 ** 2
print(value)</pre>
      `,
      question: "What does -2 ** 2 evaluate to?",
      answer: "-4",
      hint: "The exponent is applied before the negative sign."
    },
    {
      title: "Logical Operator Precedence",
      points: 10,
      content: `
        <p>Among the logical operators, <code class="inline">not</code> has the highest precedence, followed by <code class="inline">and</code>, and then <code class="inline">or</code>.</p>
        <pre>x = True
y = False
z = not x and y or True
print(z)</pre>
      `,
      question: "Among not, and, and or, which operator has the highest precedence?",
      answer: "not",
      hint: "It's applied to a single value before the others combine values."
    }
  ]
},
{
  id: "number-systems",
  title: "Number Systems",
  icon: "🔢",
  difficulty: "Easy",
  tags: ["language", "fundamentals", "number-systems"],
  description: "Explore binary, octal, and hexadecimal number systems, and learn how to convert values between decimal and each of these bases.",
  tasks: [
    {
      title: "Binary, Octal, and Hex",
      points: 0,
      content: `
        <p>Python can represent whole numbers in different number systems: binary (base 2, prefix <code class="inline">0b</code>), octal (base 8, prefix <code class="inline">0o</code>), and hexadecimal (base 16, prefix <code class="inline">0x</code>). Internally they are all just integers.</p>
        <p>The built-in functions <code class="inline">bin()</code>, <code class="inline">oct()</code>, and <code class="inline">hex()</code> convert an integer into its string representation in each system.</p>
        <pre>n = 42
print(bin(n))
print(oct(n))
print(hex(n))</pre>
      `
    },
    {
      title: "Converting Back to Decimal",
      points: 10,
      content: `
        <p>The <code class="inline">int()</code> function can convert a string written in another base back into a regular integer, when you pass the base as a second argument.</p>
        <pre>value = int('101', 2)
print(value)</pre>
      `,
      question: "What integer does int('101', 2) return?",
      answer: "5",
      hint: "Read the string as a base-2 (binary) number."
    },
    {
      title: "Formatting Hexadecimal",
      points: 10,
      content: `
        <p><code class="inline">hex()</code> converts an integer into a string starting with <code class="inline">0x</code>, using lowercase letters a-f for digits above 9.</p>
        <pre>print(hex(255))</pre>
      `,
      question: "What string does hex(255) return?",
      answer: "0xff",
      hint: "255 needs two hexadecimal digits."
    },
    {
      title: "Octal Literals",
      points: 10,
      content: `
        <p>You can write numbers directly in another base inside your source code, using the matching prefix before the digits.</p>
        <pre>number = 0o17
print(number)</pre>
      `,
      question: "Which prefix marks an octal literal in Python source code?",
      answer: "0o",
      hint: "It's zero followed by a lowercase letter, not the digit zero twice."
    }
  ]
},
{
  id: "type-casting",
  title: "Type Casting & Conversion",
  icon: "🔄",
  difficulty: "Easy",
  tags: ["language", "fundamentals", "type-casting"],
  description: "Convert values explicitly between int, float, str, and bool, and understand what happens when a conversion loses information.",
  tasks: [
    {
      title: "Explicit Conversion Functions",
      points: 0,
      content: `
        <p>Python figures out a value's type automatically, but sometimes you need to convert a value explicitly from one type to another. The built-in functions <code class="inline">int()</code>, <code class="inline">float()</code>, <code class="inline">str()</code>, and <code class="inline">bool()</code> do exactly that.</p>
        <pre>age = int('25')
price = float('9.99')
label = str(100)
print(age, price, label)</pre>
      `
    },
    {
      title: "String to Integer",
      points: 10,
      content: `
        <p>Passing a numeric string to <code class="inline">int()</code> converts it to a whole number so you can use it in arithmetic. Passing an invalid string raises a ValueError.</p>
        <pre>count = int('42')
print(count + 8)</pre>
      `,
      question: "Which built-in function converts the string '42' into the integer 42?",
      answer: "int()",
      hint: "It's named after the type it produces."
    },
    {
      title: "Float to Integer Truncation",
      points: 10,
      content: `
        <p>Converting a float to an int with <code class="inline">int()</code> truncates toward zero -- it cuts off the decimal part instead of rounding.</p>
        <pre>print(int(3.9))
print(int(-3.9))</pre>
      `,
      question: "What does int(3.9) return?",
      answer: "3",
      hint: "int() truncates rather than rounding."
    },
    {
      title: "Converting to Boolean",
      points: 10,
      content: `
        <p><code class="inline">bool()</code> converts a value to True or False based on whether Python considers it truthy or falsy. An empty string is falsy.</p>
        <pre>print(bool(''))
print(bool('hello'))</pre>
      `,
      question: "What does bool('') return?",
      answer: "False",
      hint: "An empty string is one of Python's falsy values."
    }
  ]
},
{
  id: "boolean-logic",
  title: "Boolean Logic & Truthiness",
  icon: "✅",
  difficulty: "Easy",
  tags: ["language", "fundamentals", "booleans"],
  description: "Understand Python's True and False values, the and, or, and not operators, and which values Python treats as truthy or falsy.",
  tasks: [
    {
      title: "True, False, and Truthiness",
      points: 0,
      content: `
        <p>Python's <code class="inline">bool</code> type has only two values: <code class="inline">True</code> and <code class="inline">False</code>. The logical operators <code class="inline">and</code>, <code class="inline">or</code>, and <code class="inline">not</code> combine or invert boolean values.</p>
        <p>Every value in Python is also considered either truthy or falsy when used in a boolean context, even if it isn't literally True or False.</p>
        <pre>is_ready = True
count = 0
print(is_ready and count &gt; 0)</pre>
      `
    },
    {
      title: "Falsy Values",
      points: 10,
      content: `
        <p>Values like <code class="inline">0</code>, <code class="inline">0.0</code>, an empty string, an empty list, an empty dict, and <code class="inline">None</code> are all falsy. Nearly everything else is truthy.</p>
        <pre>print(bool([]))
print(bool([0]))</pre>
      `,
      question: "What does bool([]) return?",
      answer: "False",
      hint: "An empty list is one of the falsy values."
    },
    {
      title: "Short-Circuit or",
      points: 10,
      content: `
        <p>The <code class="inline">or</code> operator returns the first truthy value it finds, or the last value if none are truthy -- it doesn't always return True or False.</p>
        <pre>result = 0 or 5
print(result)</pre>
      `,
      question: "What value does 0 or 5 evaluate to?",
      answer: "5",
      hint: "or short-circuits at the first truthy operand."
    },
    {
      title: "Inverting with not",
      points: 10,
      content: `
        <p><code class="inline">not</code> simply flips a boolean value: True becomes False and vice versa.</p>
        <pre>print(not True)</pre>
      `,
      question: "What does not True evaluate to?",
      answer: "False",
      hint: "It's the direct opposite."
    }
  ]
},
{
  id: "multiple-assignment",
  title: "Multiple Assignment & Unpacking",
  icon: "📦",
  difficulty: "Easy",
  tags: ["language", "fundamentals", "assignment"],
  description: "Assign several variables in a single statement and unpack sequences directly into multiple names at once.",
  tasks: [
    {
      title: "Assigning Several Variables at Once",
      points: 0,
      content: `
        <p>Python lets you assign several variables in a single statement. You can assign each one a different value, or the same value to all of them at once.</p>
        <pre>a, b, c = 1, 2, 3
print(a, b, c)

x = y = z = 0
print(x, y, z)</pre>
      `
    },
    {
      title: "Chained Assignment",
      points: 10,
      content: `
        <p>In a chained assignment, all the names on the left end up bound to the same initial value.</p>
        <pre>a = b = c = 5
b = 10
print(a, c)</pre>
      `,
      question: "After a = b = c = 5, what is the value of a?",
      answer: "5",
      hint: "All three names start out equal."
    },
    {
      title: "Star Unpacking",
      points: 10,
      content: `
        <p>Star unpacking lets one variable soak up any number of remaining items from a sequence, collecting them into a list.</p>
        <pre>first, *rest = [1, 2, 3, 4]
print(rest)</pre>
      `,
      question: "What list does rest hold after first, *rest = [1, 2, 3, 4]?",
      answer: "[2, 3, 4]",
      hint: "The star grabs everything after the first item."
    },
    {
      title: "Unpacking Mismatches",
      points: 10,
      content: `
        <p>Without a star, the number of variables on the left must exactly match the number of items being unpacked, or Python raises an error.</p>
        <pre>try:
    a, b = [1, 2, 3]
except ValueError as e:
    print('error:', e)</pre>
      `,
      question: "What exception is raised when the number of unpacking targets doesn't match the sequence length?",
      answer: "ValueError",
      hint: "It's the same exception family used for invalid numeric conversions."
    }
  ]
},
{
  id: "string-formatting",
  title: "String Formatting Deep Dive",
  icon: "📝",
  difficulty: "Medium",
  tags: ["language", "fundamentals", "strings"],
  description: "Compare Python's three string formatting styles -- percent formatting, str.format(), and f-strings -- for building readable output.",
  tasks: [
    {
      title: "Three Ways to Format",
      points: 0,
      content: `
        <p>Python has three ways to build formatted strings: old-style <code class="inline">%</code>-formatting, the <code class="inline">str.format()</code> method, and modern f-strings. All three can produce the same kind of output.</p>
        <pre>name = 'Ada'
print('Hello, %s!' % name)
print('Hello, {}!'.format(name))
print(f'Hello, {name}!')</pre>
      `
    },
    {
      title: "Percent Formatting",
      points: 15,
      content: `
        <p>%-formatting uses conversion specifiers like <code class="inline">%s</code> for strings, <code class="inline">%d</code> for integers, and <code class="inline">%f</code> for floats.</p>
        <pre>count = 3
print('Items: %d' % count)</pre>
      `,
      question: "Which conversion specifier represents an integer in %-formatting?",
      answer: "%d",
      hint: "The letter stands for 'decimal'."
    },
    {
      title: "The format Method",
      points: 15,
      content: `
        <p><code class="inline">str.format()</code> uses curly-brace placeholders, which can be filled by position or by name.</p>
        <pre>print('{0} is {1} years old'.format('Ada', 30))</pre>
      `,
      question: "Which string method uses curly-brace placeholders like {0} and {1}?",
      answer: "format",
      hint: "It's called directly on the string."
    },
    {
      title: "F-Strings",
      points: 15,
      content: `
        <p>F-strings let you embed expressions directly inside curly braces within the string, prefixed with the letter f before the opening quote.</p>
        <pre>value = 7
print(f'Double is {value * 2}')</pre>
      `,
      question: "Which letter prefix marks an f-string?",
      answer: "f",
      hint: "It sits right before the opening quote mark."
    },
    {
      title: "Format Specs",
      points: 15,
      content: `
        <p>Inside an f-string, a colon after the expression introduces a format spec. For example, <code class="inline">:.2f</code> rounds a float to two decimal places.</p>
        <pre>pi = 3.14159
print(f'{pi:.2f}')</pre>
      `,
      question: "What does the format spec :.2f do inside an f-string?",
      answer: "rounds to 2 decimal places",
      hint: "The digit before the f tells you how many decimals to keep."
    }
  ]
},
{
  id: "escape-sequences",
  title: "Escape Sequences",
  icon: "⌨️",
  difficulty: "Easy",
  tags: ["language", "fundamentals", "strings"],
  description: "Use escape sequences such as newline, tab, and backslash characters to represent special characters inside Python strings.",
  tasks: [
    {
      title: "What Escape Sequences Are",
      points: 0,
      content: `
        <p>Escape sequences let you include special characters inside a string using a backslash followed by another character. Common ones include <code class="inline">\\n</code> for a newline, <code class="inline">\\t</code> for a tab, and <code class="inline">\\\\</code> for a literal backslash.</p>
        <pre>text = 'Line1\\nLine2\\tTabbed'
print(text)</pre>
      `
    },
    {
      title: "Newline",
      points: 10,
      content: `
        <p>The <code class="inline">\\n</code> escape sequence inserts a newline, moving the following text onto a new line when printed.</p>
        <pre>print('First line\\nSecond line')</pre>
      `,
      question: "Which escape sequence inserts a newline inside a string?",
      answer: "\\n",
      hint: "Think of the letter used for 'newline'."
    },
    {
      title: "Tab",
      points: 10,
      content: `
        <p>The <code class="inline">\\t</code> escape sequence inserts a horizontal tab, adding visual spacing between values.</p>
        <pre>print('Name:\\tAda')</pre>
      `,
      question: "Which escape sequence inserts a tab character?",
      answer: "\\t",
      hint: "Think of the letter used for 'tab'."
    },
    {
      title: "Escaping a Backslash",
      points: 10,
      content: `
        <p>To include an actual backslash character in a string, escape it with another backslash. This matters especially in Windows-style file paths.</p>
        <pre>path = 'C:\\\\Users\\\\Ada'
print(path)</pre>
      `,
      question: "Which escape sequence produces a single literal backslash character?",
      answer: "\\\\",
      hint: "Escape the backslash with itself."
    }
  ]
},
{
  id: "naming-conventions",
  title: "Constants & Naming Conventions",
  icon: "🏷️",
  difficulty: "Easy",
  tags: ["language", "fundamentals", "style"],
  description: "Follow Python's naming conventions, using snake_case for variables and functions and UPPER_CASE for constants.",
  tasks: [
    {
      title: "Why Naming Conventions Matter",
      points: 0,
      content: `
        <p>Consistent naming makes code easier to read. Variables and function names conventionally use lowercase words separated by underscores (<code class="inline">snake_case</code>), while constants use all capital letters (<code class="inline">UPPER_CASE</code>).</p>
        <pre>MAX_RETRIES = 5
user_name = 'ada'

def calculate_total():
    pass</pre>
      `
    },
    {
      title: "Naming Constants",
      points: 10,
      content: `
        <p>A constant is a value that's not meant to change while the program runs. Python doesn't enforce this, but by convention constants are written in UPPER_CASE with underscores between words.</p>
        <pre>PI = 3.14159
GRAVITY = 9.81</pre>
      `,
      question: "What naming convention is used for constants by convention in Python?",
      answer: "UPPER_CASE",
      hint: "All capital letters with underscores between words."
    },
    {
      title: "Naming Variables and Functions",
      points: 10,
      content: `
        <p>Regular variables and function names use lowercase words joined by underscores, a style commonly called snake_case.</p>
        <pre>def get_full_name(first, last):
    return first + ' ' + last</pre>
      `,
      question: "What is the conventional naming style for variables and functions called?",
      answer: "snake_case",
      hint: "Lowercase words joined by underscores."
    },
    {
      title: "Identifier Rules",
      points: 10,
      content: `
        <p>Identifier names have hard rules too: they can't start with a digit, and they can't be one of Python's reserved keywords like class or for.</p>
        <pre>_score = 100
score2 = 50
print(_score, score2)</pre>
      `,
      question: "Can a Python variable name start with a digit?",
      answer: "No",
      hint: "The first character must be a letter or underscore."
    }
  ]
},
{
  id: "walrus-operator",
  title: "The Walrus Operator",
  icon: "🔗",
  difficulty: "Medium",
  tags: ["language", "fundamentals", "operators"],
  description: "Assign and use a value within a single expression using Python's walrus operator, introduced in Python 3.8.",
  tasks: [
    {
      title: "Assignment Inside an Expression",
      points: 0,
      content: `
        <p>The walrus operator, written <code class="inline">:=</code>, assigns a value to a name and produces that value as part of a larger expression, all in one step. It was introduced in Python 3.8.</p>
        <pre>data = [1, 2, 3, 4, 5]
if (n := len(data)) &gt; 3:
    print(f'List is long: {n} items')</pre>
      `
    },
    {
      title: "Avoiding Repeated Work",
      points: 15,
      content: `
        <p>Without the walrus operator you'd often compute something once to check it, then compute it again to use it. The walrus operator lets you do both in a single expression.</p>
        <pre>while (line := input('Enter text: ')) != 'quit':
    print(line)</pre>
      `,
      question: "Which operator symbol performs assignment inside a larger expression?",
      answer: ":=",
      hint: "It's a colon immediately followed by an equals sign."
    },
    {
      title: "Where It Came From",
      points: 15,
      content: `
        <p>The walrus operator was added to the language by PEP 572, which landed in a specific Python release.</p>
        <pre>import sys
print(sys.version_info)</pre>
      `,
      question: "Which Python version introduced the walrus operator?",
      answer: "3.8",
      hint: "It arrived via PEP 572."
    },
    {
      title: "Walrus in Comprehensions",
      points: 15,
      content: `
        <p>The walrus operator is also handy inside comprehensions, letting you reuse a computed value in the filter condition without calling the function twice.</p>
        <pre>numbers = [1, 2, 3, 4, 5, 6]
results = [y for x in numbers if (y := x * x) &gt; 10]
print(results)</pre>
      `,
      question: "In the comprehension above, what does the variable y represent?",
      answer: "the square of x",
      hint: "Look at what expression is assigned to y before the condition is checked."
    }
  ]
},
{
  id: "ternary-expressions",
  title: "Ternary Expressions",
  icon: "🔀",
  difficulty: "Easy",
  tags: ["language", "fundamentals", "conditionals"],
  description: "Write compact conditional expressions on a single line using Python's if-else ternary syntax.",
  tasks: [
    {
      title: "A Conditional in One Line",
      points: 0,
      content: `
        <p>A ternary expression writes a simple if/else as a single line: <code class="inline">value_if_true if condition else value_if_false</code>.</p>
        <pre>age = 20
status = 'adult' if age &gt;= 18 else 'minor'
print(status)</pre>
      `
    },
    {
      title: "Reading the Order",
      points: 10,
      content: `
        <p>The parts always appear in the same order: the true-value first, then the keyword if, then the condition, then else, then the false-value.</p>
        <pre>n = 7
label = 'even' if n % 2 == 0 else 'odd'
print(label)</pre>
      `,
      question: "Which keyword comes right after the true-value in a ternary expression?",
      answer: "if",
      hint: "It introduces the condition being tested."
    },
    {
      title: "Chaining Ternaries",
      points: 10,
      content: `
        <p>Ternary expressions can be chained to check several conditions, though long chains quickly become hard to read.</p>
        <pre>score = 85
grade = 'A' if score &gt;= 90 else 'B' if score &gt;= 80 else 'C'
print(grade)</pre>
      `,
      question: "What grade does the code above print when score is 85?",
      answer: "B",
      hint: "85 doesn't reach 90 but does reach 80."
    }
  ]
},
{
  id: "chained-comparisons",
  title: "Chained Comparisons",
  icon: "⛓️",
  difficulty: "Easy",
  tags: ["language", "fundamentals", "operators"],
  description: "Combine multiple comparisons into a single readable expression, such as checking that a value falls within a range.",
  tasks: [
    {
      title: "Combining Comparisons",
      points: 0,
      content: `
        <p>Python allows chained comparisons like <code class="inline">0 &lt; x &lt; 10</code>, which checks both conditions at once and is equivalent to writing them separately with <code class="inline">and</code>.</p>
        <pre>x = 5
print(0 &lt; x &lt; 10)</pre>
      `
    },
    {
      title: "The Equivalent and Expression",
      points: 10,
      content: `
        <p>A chained comparison is shorthand for combining two comparisons with <code class="inline">and</code>, but each middle value is only evaluated once.</p>
        <pre>x = 15
result = 0 &lt; x &lt; 10
same = (0 &lt; x) and (x &lt; 10)
print(result, same)</pre>
      `,
      question: "Which logical operator is a chained comparison equivalent to writing explicitly?",
      answer: "and",
      hint: "Both individual comparisons must be true."
    },
    {
      title: "Chained Equality",
      points: 10,
      content: `
        <p>Chained comparisons also work with equality, checking that every value in the chain matches its neighbor.</p>
        <pre>a = b = c = 4
print(a == b == c)</pre>
      `,
      question: "What does a == b == c evaluate to when a, b, and c are all 4?",
      answer: "True",
      hint: "Every pair in the chain must match."
    }
  ]
},
{
  id: "packing-unpacking",
  title: "Packing & Unpacking Arguments",
  icon: "🎒",
  difficulty: "Medium",
  tags: ["language", "fundamentals", "functions"],
  description: "Use star and double-star packing and unpacking to handle variable numbers of positional and keyword arguments.",
  tasks: [
    {
      title: "Packing Extra Arguments",
      points: 0,
      content: `
        <p><code class="inline">*args</code> collects any extra positional arguments a function receives into a tuple, and <code class="inline">**kwargs</code> collects extra keyword arguments into a dict. The same star symbols can also unpack a sequence or dict when calling a function.</p>
        <pre>def greet(*args, **kwargs):
    print(args)
    print(kwargs)

greet(1, 2, name='Ada')</pre>
      `
    },
    {
      title: "args as a Tuple",
      points: 15,
      content: `
        <p>Inside a function definition, <code class="inline">*args</code> gathers every extra positional argument into a single tuple you can loop over or pass to functions like sum().</p>
        <pre>def total(*numbers):
    return sum(numbers)

print(total(1, 2, 3, 4))</pre>
      `,
      question: "What data type does *args collect the extra positional arguments into?",
      answer: "tuple",
      hint: "It's an ordered, immutable sequence."
    },
    {
      title: "kwargs as a Dict",
      points: 15,
      content: `
        <p><code class="inline">**kwargs</code> gathers every extra keyword argument into a dict, mapping each argument name to its value.</p>
        <pre>def describe(**details):
    for key, value in details.items():
        print(key, value)

describe(name='Ada', age=30)</pre>
      `,
      question: "What data type does **kwargs collect the extra keyword arguments into?",
      answer: "dict",
      hint: "It stores key-value pairs."
    },
    {
      title: "Unpacking a List into Arguments",
      points: 15,
      content: `
        <p>A single star can also unpack an existing list or tuple when calling a function, spreading its items out as separate positional arguments.</p>
        <pre>def add(a, b, c):
    return a + b + c

nums = [1, 2, 3]
print(add(*nums))</pre>
      `,
      question: "What symbol unpacks a list into separate positional arguments when calling a function?",
      answer: "*",
      hint: "The same symbol used to pack *args."
    },
    {
      title: "Unpacking a Dict",
      points: 15,
      content: `
        <p>Two stars unpack a dictionary's key-value pairs, which is a handy way to merge dictionaries or pass many keyword arguments at once.</p>
        <pre>defaults = {'color': 'red', 'size': 'M'}
overrides = {'size': 'L'}
merged = {**defaults, **overrides}
print(merged)</pre>
      `,
      question: "Which symbol unpacks a dictionary's key-value pairs?",
      answer: "**",
      hint: "Two of the symbol used for multiplication."
    }
  ]
},
{
  id: "swapping-variables",
  title: "Swapping Variables",
  icon: "🔃",
  difficulty: "Easy",
  tags: ["language", "fundamentals", "variables"],
  description: "Swap two variables' values without a temporary variable, using Python's tuple packing and unpacking.",
  tasks: [
    {
      title: "The One-Line Swap",
      points: 0,
      content: `
        <p>Python can swap the values of two variables in a single line, without needing a temporary variable, by packing and unpacking a tuple.</p>
        <pre>a = 1
b = 2
a, b = b, a
print(a, b)</pre>
      `
    },
    {
      title: "How the Swap Works",
      points: 10,
      content: `
        <p>Python first builds a tuple from the right-hand side using the original values, then unpacks that tuple into the names on the left.</p>
        <pre>x = 'first'
y = 'second'
x, y = y, x
print(x, y)</pre>
      `,
      question: "What does x hold after x, y = y, x if x started as 'first' and y as 'second'?",
      answer: "second",
      hint: "The two values trade places."
    },
    {
      title: "Swapping More Than Two",
      points: 10,
      content: `
        <p>This same technique works for rotating more than two variables at once, not just swapping a pair.</p>
        <pre>a, b, c = 1, 2, 3
a, b, c = c, a, b
print(a, b, c)</pre>
      `,
      question: "How many variables can this rotate-swap technique support at once?",
      answer: "any number",
      hint: "It isn't limited to just two."
    }
  ]
},
{
  id: "none-and-falsy",
  title: "None & Falsy Values",
  icon: "🚫",
  difficulty: "Easy",
  tags: ["language", "fundamentals", "booleans"],
  description: "Understand Python's None value and learn which values Python treats as falsy in a boolean context.",
  tasks: [
    {
      title: "The Absence of a Value",
      points: 0,
      content: `
        <p><code class="inline">None</code> is a special value representing the absence of a value. Many values also count as falsy in a boolean context, including 0, 0.0, an empty string, an empty list or dict, and None itself.</p>
        <pre>result = None
print(result is None)</pre>
      `
    },
    {
      title: "Checking for None",
      points: 10,
      content: `
        <p>Because None is a singleton -- there is only ever one None object -- checking for it with <code class="inline">is</code> is preferred over <code class="inline">==</code>.</p>
        <pre>value = None
if value is None:
    print('No value set')</pre>
      `,
      question: "Which comparison operator is recommended for checking whether a variable is None?",
      answer: "is",
      hint: "None is a singleton object, so identity comparison is preferred."
    },
    {
      title: "Falsy Containers",
      points: 10,
      content: `
        <p>Empty containers of any kind -- lists, tuples, dicts, and sets -- are falsy, even though they aren't None.</p>
        <pre>values = [0, 1, '', 'a', [], [1], None]
for v in values:
    print(v, bool(v))</pre>
      `,
      question: "Is an empty tuple () truthy or falsy?",
      answer: "falsy",
      hint: "Empty containers are falsy."
    },
    {
      title: "Functions Without a Return",
      points: 10,
      content: `
        <p>A function that doesn't explicitly return anything automatically returns None.</p>
        <pre>def do_nothing():
    pass

print(do_nothing())</pre>
      `,
      question: "What does a function return if it has no return statement?",
      answer: "None",
      hint: "It's Python's way of saying there's nothing here."
    }
  ]
},
{
  id: "identity-vs-equality",
  title: "Identity vs Equality",
  icon: "🪞",
  difficulty: "Medium",
  tags: ["language", "fundamentals", "operators"],
  description: "Learn the difference between is and == when comparing objects, and when each comparison is the right choice.",
  tasks: [
    {
      title: "Equal Values vs the Same Object",
      points: 0,
      content: `
        <p><code class="inline">==</code> checks whether two values are equal, while <code class="inline">is</code> checks whether two names refer to the exact same object in memory. Two equal values aren't always the same object.</p>
        <pre>a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)
print(a is b)</pre>
      `
    },
    {
      title: "Same Object, Same Identity",
      points: 15,
      content: `
        <p>When one name is simply assigned from another, both names point to the same underlying object, so <code class="inline">is</code> returns True.</p>
        <pre>a = [1, 2, 3]
b = a
print(a is b)</pre>
      `,
      question: "What does a is b return when b = a for a list?",
      answer: "True",
      hint: "Both names reference the same object."
    },
    {
      title: "A Common Pitfall",
      points: 15,
      content: `
        <p>CPython sometimes reuses small integers and short strings internally, which can make <code class="inline">is</code> behave unexpectedly for them. Relying on that behavior is a mistake -- use <code class="inline">==</code> to compare values.</p>
        <pre>x = 256
y = 256
print(x is y)</pre>
      `,
      question: "Which operator should you use to compare values for equality rather than identity?",
      answer: "==",
      hint: "It compares contents, not memory location."
    },
    {
      title: "When is Is Correct",
      points: 15,
      content: `
        <p>The main place <code class="inline">is</code> is genuinely the right tool is when comparing against Python's singleton objects: None, True, and False.</p>
        <pre>flag = True
if flag is True:
    print('explicitly true')</pre>
      `,
      question: "For which special values is using is instead of == considered best practice?",
      answer: "None, True, and False",
      hint: "These are Python's singleton objects."
    }
  ]
},
{
  id: "mutable-vs-immutable",
  title: "Mutable vs Immutable Types",
  icon: "🔐",
  difficulty: "Medium",
  tags: ["language", "fundamentals", "data-types"],
  description: "Understand which built-in Python types can be changed in place and which always produce a new object instead.",
  tasks: [
    {
      title: "Two Kinds of Types",
      points: 0,
      content: `
        <p>Some Python types are mutable, meaning they can be changed in place after creation -- lists, dicts, and sets. Others are immutable -- ints, floats, strings, and tuples -- so any change actually creates a brand new object.</p>
        <pre>my_list = [1, 2, 3]
my_list.append(4)
print(my_list)

my_str = 'hello'
new_str = my_str.upper()
print(my_str, new_str)</pre>
      `
    },
    {
      title: "Modifying a List in Place",
      points: 15,
      content: `
        <p>Calling a method like <code class="inline">append()</code> on a list modifies that same list object in place -- no new object is created.</p>
        <pre>numbers = [1, 2, 3]
original_id = id(numbers)
numbers.append(4)
print(id(numbers) == original_id)</pre>
      `,
      question: "Does appending to a list create a new list object or modify it in place?",
      answer: "modifies it in place",
      hint: "Compare id() before and after the append."
    },
    {
      title: "Strings Never Change",
      points: 15,
      content: `
        <p>Strings are immutable, so a method like <code class="inline">upper()</code> returns a brand new string rather than changing the original.</p>
        <pre>text = 'hello'
text.upper()
print(text)</pre>
      `,
      question: "After calling text.upper() without reassigning it, does the original string text change?",
      answer: "No",
      hint: "Strings can't be modified in place."
    },
    {
      title: "Tuples with Mutable Contents",
      points: 15,
      content: `
        <p>Tuples themselves are immutable -- you can't add or remove elements -- but if a tuple holds a mutable object like a list, that inner object can still be changed.</p>
        <pre>point = (1, [2, 3])
point[1].append(4)
print(point)</pre>
      `,
      question: "Which built-in sequence type is immutable: list or tuple?",
      answer: "tuple",
      hint: "One of them supports append(), the other doesn't."
    }
  ]
},
{
  id: "shallow-deep-copy",
  title: "Shallow vs Deep Copy",
  icon: "📑",
  difficulty: "Medium",
  tags: ["language", "fundamentals", "data-types"],
  description: "Learn the difference between a shallow copy and a deep copy, and when each one matters for nested data.",
  tasks: [
    {
      title: "Two Ways to Copy",
      points: 0,
      content: `
        <p>The <code class="inline">copy</code> module offers two ways to duplicate a container. <code class="inline">copy.copy()</code> makes a shallow copy -- a new outer object whose nested objects are still shared with the original. <code class="inline">copy.deepcopy()</code> recursively copies everything, nested objects included.</p>
        <pre>import copy

original = [1, [2, 3]]
shallow = copy.copy(original)
deep = copy.deepcopy(original)</pre>
      `
    },
    {
      title: "Shared Nested Objects",
      points: 15,
      content: `
        <p>Because a shallow copy still shares its nested objects with the original, modifying a nested list through the copy also affects the original.</p>
        <pre>import copy
original = [1, [2, 3]]
shallow = copy.copy(original)
shallow[1].append(99)
print(original)</pre>
      `,
      question: "After appending to shallow's nested list, does the original list's nested list also change?",
      answer: "Yes",
      hint: "Shallow copies still share references to nested objects."
    },
    {
      title: "Fully Independent Copies",
      points: 15,
      content: `
        <p><code class="inline">copy.deepcopy()</code> avoids that sharing by recursively duplicating every nested object too, so changes to the copy never touch the original.</p>
        <pre>import copy
original = [1, [2, 3]]
deep = copy.deepcopy(original)
deep[1].append(99)
print(original)</pre>
      `,
      question: "Which copy module function creates fully independent nested objects?",
      answer: "deepcopy",
      hint: "It's the opposite of shallow."
    },
    {
      title: "Assignment Is Not a Copy",
      points: 15,
      content: `
        <p>Plain assignment with <code class="inline">=</code> doesn't copy anything at all -- it just gives the same object a second name.</p>
        <pre>original = [1, 2, 3]
alias = original
alias.append(4)
print(original)</pre>
      `,
      question: "Does writing alias = original create a copy of the list?",
      answer: "No",
      hint: "Both names refer to the exact same object."
    }
  ]
},
{
  id: "variable-scope-legb",
  title: "Variable Scope (LEGB Rule)",
  icon: "🗺️",
  difficulty: "Medium",
  tags: ["language", "fundamentals", "scope"],
  description: "Understand the Local, Enclosing, Global, and Built-in scope resolution order Python uses to look up variable names.",
  tasks: [
    {
      title: "The LEGB Rule",
      points: 0,
      content: `
        <p>Python looks up a name using the <b>LEGB</b> rule: <b>L</b>ocal scope first, then any <b>E</b>nclosing function's scope, then the <b>G</b>lobal (module) scope, and finally the <b>B</b>uilt-in scope.</p>
        <pre>x = 'global'

def outer():
    x = 'enclosing'
    def inner():
        x = 'local'
        print(x)
    inner()

outer()</pre>
      `
    },
    {
      title: "Local Shadows Global",
      points: 15,
      content: `
        <p>By default, assigning to a variable inside a function creates a new local variable, even if a variable with the same name exists outside the function -- it doesn't affect the outer one.</p>
        <pre>count = 10

def modify():
    count = 20
    print(count)

modify()
print(count)</pre>
      `,
      question: "What does the final print(count) output after calling modify()?",
      answer: "10",
      hint: "The count inside modify() is a separate local variable."
    },
    {
      title: "The global Keyword",
      points: 15,
      content: `
        <p>The <code class="inline">global</code> keyword tells Python that an assignment inside a function should modify the module-level variable instead of creating a local one.</p>
        <pre>count = 10

def modify():
    global count
    count = 20

modify()
print(count)</pre>
      `,
      question: "Which keyword lets a function reassign a global variable instead of creating a local one?",
      answer: "global",
      hint: "It's the same word as the scope it refers to."
    },
    {
      title: "The nonlocal Keyword",
      points: 15,
      content: `
        <p>The <code class="inline">nonlocal</code> keyword is similar, but targets a variable in an enclosing function's scope rather than the global scope.</p>
        <pre>def outer():
    x = 'original'
    def inner():
        nonlocal x
        x = 'changed'
    inner()
    print(x)

outer()</pre>
      `,
      question: "Which keyword allows a nested function to modify a variable in its enclosing function's scope?",
      answer: "nonlocal",
      hint: "It's distinct from global and used for the enclosing scope."
    }
  ]
},

  /* ---- batch-02.js ---- */
  {
  id: "list-methods",
  title: "List Methods Deep Dive",
  icon: "📋",
  difficulty: "Easy",
  tags: ["lists", "methods", "collections"],
  description: "Master append, insert, remove, pop, and extend to manipulate Python lists in place like a pro.",
  tasks: [
    {
      title: "A Tour of List Methods",
      points: 0,
      content: `
        <p>Lists are mutable, ordered collections in Python, and they come with a set of
        built-in methods for adding, removing, and rearranging items in place.</p>
        <p>Here's a quick tour of some of the most common ones:</p>
        <pre>fruits = ["apple", "banana"]
fruits.append("cherry")
fruits.insert(1, "kiwi")
fruits.remove("banana")
last = fruits.pop()

print(fruits)
print(last)</pre>
        <p>Because these methods work in place, most of them return <code class="inline">None</code>
        rather than a new list.</p>
      `
    },
    {
      title: "append() vs insert()",
      points: 10,
      content: `
        <p><code class="inline">append()</code> always adds an item to the end of a list.
        <code class="inline">insert()</code> lets you choose exactly where the new item goes
        by giving it an index first.</p>
        <pre>numbers = [1, 2, 3]
numbers.append(4)
print(numbers)

numbers.insert(0, 0)
print(numbers)</pre>
      `,
      question: "Which list method adds an item at a specific index rather than at the end?",
      answer: "insert",
      hint: "It takes two arguments: a position and a value."
    },
    {
      title: "remove() vs pop()",
      points: 10,
      content: `
        <p><code class="inline">remove()</code> deletes the first item that matches a given
        value. <code class="inline">pop()</code> deletes an item by index and returns it,
        removing the last item if no index is given.</p>
        <pre>colors = ["red", "green", "blue", "green"]
colors.remove("green")
print(colors)

removed = colors.pop(0)
print(removed, colors)</pre>
      `,
      question: "Which list method removes an item by its value instead of its index?",
      answer: "remove",
      hint: "Its name describes getting rid of a value you specify, not a position."
    },
    {
      title: "extend() vs append()",
      points: 12,
      content: `
        <p><code class="inline">extend()</code> adds every item from an iterable individually
        to a list. <code class="inline">append()</code> would instead add that whole iterable
        as one single, nested item.</p>
        <pre>a = [1, 2]
b = [3, 4]

a.append(b)
print(a)

c = [1, 2]
c.extend(b)
print(c)</pre>
      `,
      question: "If you use append() to add a list to another list, what does the resulting item become?",
      answer: "a nested list",
      hint: "append() adds its argument as a single element, whatever type it is."
    }
  ]
},
{
  id: "list-comprehensions",
  title: "List Comprehensions",
  icon: "🔁",
  difficulty: "Medium",
  tags: ["lists", "comprehensions", "collections"],
  description: "Learn to build lists concisely in a single line using comprehension syntax, filters, and conditional expressions.",
  tasks: [
    {
      title: "Basic Comprehension Syntax",
      points: 0,
      content: `
        <p>List comprehensions let you build a new list from an iterable in a single,
        readable line, instead of writing an explicit for loop with append calls.</p>
        <pre>squares = [n ** 2 for n in range(6)]
print(squares)</pre>
        <p>The pattern is <code class="inline">[expression for item in iterable]</code>,
        and it always produces a brand new list.</p>
      `
    },
    {
      title: "Filtering with if",
      points: 15,
      content: `
        <p>Adding an <code class="inline">if</code> clause at the end of a comprehension
        filters out items that don't satisfy a condition.</p>
        <pre>numbers = list(range(10))
evens = [n for n in numbers if n % 2 == 0]
print(evens)</pre>
      `,
      question: "In a list comprehension, which keyword filters out items that do not match a condition?",
      answer: "if",
      hint: "It goes at the end of the comprehension, after the for clause."
    },
    {
      title: "Conditional Expressions",
      points: 15,
      content: `
        <p>You can also transform each item differently depending on a condition, by placing
        an if/else conditional expression before the for clause.</p>
        <pre>numbers = [1, 2, 3, 4, 5]
labels = ["even" if n % 2 == 0 else "odd" for n in numbers]
print(labels)</pre>
      `,
      question: "In a list comprehension, does the if/else conditional expression go before or after the for clause?",
      answer: "before",
      hint: "It replaces the expression part at the very start of the comprehension."
    },
    {
      title: "Nested Loops in a Comprehension",
      points: 18,
      content: `
        <p>A comprehension can include more than one for clause, which behaves like nested
        loops. This is handy for flattening a list of lists into a single flat list.</p>
        <pre>matrix = [[1, 2], [3, 4], [5, 6]]
flat = [value for row in matrix for value in row]
print(flat)</pre>
      `,
      question: "How many for clauses appear in the comprehension above that flattens matrix?",
      answer: "2",
      hint: "One for clause walks the outer list, another walks each inner list."
    }
  ]
},
{
  id: "nested-lists",
  title: "Nested Lists & Matrices",
  icon: "🧮",
  difficulty: "Medium",
  tags: ["lists", "matrices", "collections"],
  description: "Explore lists of lists to represent grids and matrices, and learn to access, modify, and transpose them.",
  tasks: [
    {
      title: "Lists of Lists",
      points: 0,
      content: `
        <p>A nested list is a list whose items are themselves lists. This makes it a natural
        way to represent a grid or matrix, where each inner list is a row.</p>
        <pre>grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(grid[1][2])</pre>
        <p>The first index selects the row (an inner list), and the second index selects
        a value within that row.</p>
      `
    },
    {
      title: "Modifying a Nested Element",
      points: 15,
      content: `
        <p>To change a single value inside a nested list, index into the outer list first,
        then the inner list, and assign a new value.</p>
        <pre>grid = [[1, 2], [3, 4]]
grid[0][1] = 99
print(grid)</pre>
      `,
      question: "After running grid[0][1] = 99 above, what is the value of grid[0][1]?",
      answer: "99",
      hint: "Assignment through nested indexing changes just that one element."
    },
    {
      title: "Iterating with Nested Loops",
      points: 15,
      content: `
        <p>To visit every element in a 2D nested list, you typically use one loop for the
        rows and another loop inside it for the values within each row.</p>
        <pre>grid = [[1, 2], [3, 4]]

for row in grid:
    for value in row:
        print(value, end=" ")</pre>
      `,
      question: "To visit every element of a 2D nested list, how many for loops do you typically need?",
      answer: "2",
      hint: "One loop for the rows, one loop for the values inside each row."
    },
    {
      title: "Transposing a Matrix",
      points: 20,
      content: `
        <p>You can transpose a matrix (swap its rows and columns) by combining the
        <code class="inline">zip()</code> function with the * unpacking operator.</p>
        <pre>grid = [[1, 2, 3], [4, 5, 6]]
transposed = [list(row) for row in zip(*grid)]
print(transposed)</pre>
      `,
      question: "Which built-in function, combined with the * unpacking operator, is used to transpose a matrix like this?",
      answer: "zip",
      hint: "It pairs up items from each row at the same position."
    }
  ]
},
{
  id: "dict-comprehensions",
  title: "Dictionary Comprehensions",
  icon: "🗂️",
  difficulty: "Medium",
  tags: ["dictionaries", "comprehensions", "collections"],
  description: "Build dictionaries concisely from iterables using comprehension syntax, including filtering and swapping keys with values.",
  tasks: [
    {
      title: "Basic Dict Comprehension Syntax",
      points: 0,
      content: `
        <p>Dictionary comprehensions build a new dict in one line, using the pattern
        <code class="inline">key_expr: value_expr for item in iterable</code>.</p>
        <pre>squares = {n: n ** 2 for n in range(5)}
print(squares)</pre>
      `
    },
    {
      title: "Filtering with if",
      points: 15,
      content: `
        <p>Just like list comprehensions, you can add an if clause to keep only the
        key-value pairs that match a condition.</p>
        <pre>prices = {"apple": 1.2, "bread": 3.5, "milk": 0.9}
cheap = {item: cost for item, cost in prices.items() if cost &lt; 2}
print(cheap)</pre>
      `,
      question: "Which dictionary method do you call to get key-value pairs to loop over in a comprehension?",
      answer: "items",
      hint: "It's the method that returns both keys and values together, as tuples."
    },
    {
      title: "Swapping Keys and Values",
      points: 15,
      content: `
        <p>You can build a reversed dictionary, where the original values become keys and
        the original keys become values, useful for reverse lookups.</p>
        <pre>original = {"a": 1, "b": 2, "c": 3}
reversed_dict = {value: key for key, value in original.items()}
print(reversed_dict)</pre>
      `,
      question: "In the comprehension above, which part of original.items() becomes the new dictionary keys?",
      answer: "value",
      hint: "The comprehension swaps key and value on the left side of the colon."
    },
    {
      title: "Building a Dict with zip()",
      points: 18,
      content: `
        <p>Combine a dict comprehension with <code class="inline">zip()</code> to build a
        dictionary out of two parallel lists, one for keys and one for values.</p>
        <pre>names = ["Ada", "Grace", "Alan"]
scores = [95, 88, 91]

grades = {name: score for name, score in zip(names, scores)}
print(grades)</pre>
      `,
      question: "Which function pairs up corresponding items from two separate lists so a dict comprehension can use them?",
      answer: "zip",
      hint: "Its name suggests fastening two things together side by side."
    }
  ]
},
{
  id: "dict-methods",
  title: "Dictionary Methods Deep Dive",
  icon: "📖",
  difficulty: "Easy",
  tags: ["dictionaries", "methods", "collections"],
  description: "Master keys(), values(), items(), get(), update(), and pop() to work confidently with Python dictionaries.",
  tasks: [
    {
      title: "Reading a Dict's Contents",
      points: 0,
      content: `
        <p>Dictionaries have built-in methods for inspecting their contents.
        <code class="inline">keys()</code>, <code class="inline">values()</code>, and
        <code class="inline">items()</code> give you views over a dict's keys, values, and
        key-value pairs.</p>
        <pre>person = {"name": "Ada", "age": 30}

print(person.keys())
print(person.values())
print(person.items())</pre>
      `
    },
    {
      title: "Safe Lookups with get()",
      points: 10,
      content: `
        <p><code class="inline">get()</code> avoids a KeyError by returning a default value
        when a key is missing, instead of crashing your program.</p>
        <pre>person = {"name": "Ada"}
age = person.get("age", "unknown")
print(age)</pre>
      `,
      question: "What does dict.get() return when the key is missing and no default is given?",
      answer: "None",
      hint: "Without a second argument, get() falls back to Python's null value."
    },
    {
      title: "Merging with update()",
      points: 10,
      content: `
        <p><code class="inline">update()</code> merges another dictionary's keys and values
        into an existing one, overwriting any keys that already exist.</p>
        <pre>person = {"name": "Ada", "age": 30}
person.update({"age": 31, "city": "London"})
print(person)</pre>
      `,
      question: "Which dict method merges the contents of another dictionary into an existing one?",
      answer: "update",
      hint: "It's the same word used for applying a patch or a new version."
    },
    {
      title: "Removing Items with pop() and popitem()",
      points: 12,
      content: `
        <p><code class="inline">pop(key)</code> removes a specific key and returns its value.
        <code class="inline">popitem()</code> instead removes and returns the most recently
        inserted key-value pair, with no arguments needed.</p>
        <pre>person = {"name": "Ada", "age": 30}
age = person.pop("age")
print(age, person)</pre>
      `,
      question: "Which dict method removes and returns the most recently inserted key-value pair, with no arguments needed?",
      answer: "popitem",
      hint: "It's like pop() but named for removing a whole pair."
    }
  ]
},
{
  id: "nested-dictionaries",
  title: "Nested Dictionaries",
  icon: "🪆",
  difficulty: "Medium",
  tags: ["dictionaries", "nested-data", "collections"],
  description: "Represent and navigate complex, nested dictionary structures for modeling hierarchical, real-world data.",
  tasks: [
    {
      title: "Dictionaries Inside Dictionaries",
      points: 0,
      content: `
        <p>A dict's values can themselves be dictionaries, letting you model structured,
        hierarchical data such as a collection of user records.</p>
        <pre>users = {
    "ada": {"age": 30, "role": "engineer"},
    "grace": {"age": 45, "role": "admiral"}
}

print(users["ada"]["role"])</pre>
      `
    },
    {
      title: "Safe Nested Lookups",
      points: 15,
      content: `
        <p>Chaining <code class="inline">get()</code> calls lets you look up a nested value
        without risking a KeyError if an outer or inner key is missing.</p>
        <pre>users = {"ada": {"age": 30}}
role = users.get("ada", {}).get("role", "unknown")
print(role)</pre>
      `,
      question: "What does users.get(\'ada\', {}) return if the key ada is missing?",
      answer: "an empty dict",
      hint: "The second argument to get() is the fallback value."
    },
    {
      title: "Updating Nested Values",
      points: 15,
      content: `
        <p>To change or add a value deep inside a nested dict, index all the way down to
        the right level before assigning.</p>
        <pre>users = {"ada": {"age": 30}}
users["ada"]["age"] = 31
users["ada"]["city"] = "London"
print(users)</pre>
      `,
      question: "To change a value nested two levels deep, how many pairs of square brackets do you typically chain together?",
      answer: "2",
      hint: "One bracket selects the outer key, the next selects the inner key."
    },
    {
      title: "Iterating a Nested Dictionary",
      points: 20,
      content: `
        <p>Use nested for loops together with <code class="inline">items()</code> to walk
        through every outer key and every inner key-value pair.</p>
        <pre>users = {
    "ada": {"age": 30, "role": "engineer"},
    "grace": {"age": 45, "role": "admiral"}
}

for name, info in users.items():
    for field, value in info.items():
        print(name, field, value)</pre>
      `,
      question: "Which dict method do you call in both loops to get key-value pairs together?",
      answer: "items",
      hint: "The same method name works for the outer dict and each inner dict."
    }
  ]
},
{
  id: "set-operations",
  title: "Set Operations",
  icon: "🔗",
  difficulty: "Medium",
  tags: ["sets", "collections", "data-structures"],
  description: "Use union, intersection, difference, and symmetric difference to combine and compare Python sets.",
  tasks: [
    {
      title: "Sets and Their Operations",
      points: 0,
      content: `
        <p>A set is an unordered collection of unique, hashable items. Sets support
        mathematical operations like combining or comparing two collections.</p>
        <pre>a = {1, 2, 3}
b = {3, 4, 5}

print(a.union(b))
print(a.intersection(b))</pre>
        <p>Sets automatically drop duplicate values and don't preserve insertion order.</p>
      `
    },
    {
      title: "Combining Sets with union()",
      points: 15,
      content: `
        <p><code class="inline">union()</code>, or the | operator, combines all unique items
        from both sets into one new set.</p>
        <pre>a = {1, 2, 3}
b = {3, 4, 5}
print(a.union(b))
print(a | b)</pre>
      `,
      question: "Which single character is the operator equivalent of the union() method?",
      answer: "|",
      hint: "It's the same symbol used for bitwise OR."
    },
    {
      title: "Finding Common Items with intersection()",
      points: 15,
      content: `
        <p><code class="inline">intersection()</code> returns only the items that appear in
        both sets.</p>
        <pre>a = {1, 2, 3}
b = {2, 3, 4}
print(a.intersection(b))</pre>
      `,
      question: "What does a.intersection(b) return when a and b have no elements in common?",
      answer: "an empty set",
      hint: "Think about what's left when nothing matches."
    },
    {
      title: "difference() vs symmetric_difference()",
      points: 18,
      content: `
        <p><code class="inline">difference()</code> returns items in the first set but not
        the second. <code class="inline">symmetric_difference()</code> returns items in
        either set but not both.</p>
        <pre>a = {1, 2, 3}
b = {2, 3, 4}

print(a.difference(b))
print(a.symmetric_difference(b))</pre>
      `,
      question: "Which set method returns items that are in exactly one of the two sets, but not both?",
      answer: "symmetric_difference",
      hint: "Its name suggests a two-way version of difference."
    }
  ]
},
{
  id: "set-comprehensions",
  title: "Set Comprehensions",
  icon: "✨",
  difficulty: "Medium",
  tags: ["sets", "comprehensions", "collections"],
  description: "Build sets concisely using comprehension syntax, combining transformations and filters while automatically removing duplicates.",
  tasks: [
    {
      title: "Basic Set Comprehension Syntax",
      points: 0,
      content: `
        <p>Set comprehensions use the pattern <code class="inline">{expression for item in
        iterable}</code>, and automatically remove any duplicate results.</p>
        <pre>words = ["apple", "banana", "apple", "cherry"]
lengths = {len(word) for word in words}
print(lengths)</pre>
      `
    },
    {
      title: "Filtering with if",
      points: 15,
      content: `
        <p>Just like list comprehensions, add an if clause at the end to keep only the
        items that match a condition.</p>
        <pre>numbers = range(10)
odd_squares = {n ** 2 for n in numbers if n % 2 != 0}
print(odd_squares)</pre>
      `,
      question: "Which bracket type distinguishes a set comprehension from a list comprehension?",
      answer: "curly braces",
      hint: "Sets use the same brackets as dict literals."
    },
    {
      title: "Deduping Data While Transforming It",
      points: 15,
      content: `
        <p>Since sets never contain duplicates, a comprehension is a quick way to
        transform items and remove duplicates in a single step.</p>
        <pre>words = ["Cat", "cat", "Dog", "DOG"]
unique_lower = {word.lower() for word in words}
print(unique_lower)</pre>
      `,
      question: "How many items are in unique_lower after running the code above?",
      answer: "2",
      hint: "Sets never store duplicate values, and the transformation lowercases everything first."
    },
    {
      title: "Combining Filtering and Transformation",
      points: 18,
      content: `
        <p>A single set comprehension can both transform each item and filter out ones
        that don't meet a condition, all in one line.</p>
        <pre>words = ["Cat", "cat", "Dog", "fish", "Fish"]
short_unique = {w.lower() for w in words if len(w) &lt;= 3}
print(short_unique)</pre>
      `,
      question: "In the comprehension above, filtering on length is combined with which other feature?",
      answer: "transformation",
      hint: "The lower() call changes each item before it's added to the set."
    }
  ]
},
{
  id: "named-tuples",
  title: "Tuples & Named Tuples",
  icon: "🏷️",
  difficulty: "Medium",
  tags: ["tuples", "namedtuple", "collections"],
  description: "Use tuples and collections.namedtuple to create lightweight, readable structured data without writing a full class.",
  tasks: [
    {
      title: "Tuples Are Immutable Sequences",
      points: 0,
      content: `
        <p>A tuple is an ordered, immutable sequence, useful for fixed collections of
        values that shouldn't change after creation.</p>
        <pre>point = (3, 4)
print(point[0], point[1])

x, y = point
print(x, y)</pre>
      `
    },
    {
      title: "Unpacking Tuples",
      points: 15,
      content: `
        <p>You can assign multiple variables from a tuple in one line, and even use * to
        collect any remaining items into a list.</p>
        <pre>data = (1, 2, 3, 4, 5)
first, *middle, last = data
print(first, middle, last)</pre>
      `,
      question: "In the unpacking above, what type of object does middle become?",
      answer: "a list",
      hint: "The star operator collects the remaining items into one container."
    },
    {
      title: "Creating a namedtuple",
      points: 18,
      content: `
        <p><code class="inline">collections.namedtuple</code> creates a tuple subclass where
        fields can be accessed by name instead of only by position.</p>
        <pre>from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)

print(p.x, p.y)
print(p[0], p[1])</pre>
      `,
      question: "Which module in the standard library provides the namedtuple function?",
      answer: "collections",
      hint: "It's the same module that provides Counter and deque."
    },
    {
      title: "Creating Modified Copies with _replace()",
      points: 15,
      content: `
        <p>Namedtuples are still immutable, so to change a value you use
        <code class="inline">._replace()</code>, which returns a brand new instance with
        that field changed.</p>
        <pre>from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
p2 = p._replace(x=10)

print(p)
print(p2)</pre>
      `,
      question: "Does the _replace() method modify the original namedtuple, or return a new one?",
      answer: "return a new one",
      hint: "Namedtuples are immutable, just like regular tuples."
    }
  ]
},
{
  id: "collections-counter",
  title: "collections.Counter",
  icon: "🔢",
  difficulty: "Medium",
  tags: ["counter", "collections", "data-structures"],
  description: "Count hashable items quickly and find the most common ones with the Counter class.",
  tasks: [
    {
      title: "Counting Items with Counter",
      points: 0,
      content: `
        <p><code class="inline">Counter</code> is a dict subclass built specifically for
        counting hashable items in an iterable.</p>
        <pre>from collections import Counter

letters = Counter("mississippi")
print(letters)</pre>
      `
    },
    {
      title: "Finding the Most Common Items",
      points: 15,
      content: `
        <p><code class="inline">most_common(n)</code> returns the n most frequent items as
        (item, count) tuples, sorted from most to least frequent.</p>
        <pre>from collections import Counter

votes = Counter(["a", "b", "a", "c", "a", "b"])
print(votes.most_common(2))</pre>
      `,
      question: "What data type is each entry returned inside the list from most_common()?",
      answer: "a tuple",
      hint: "Each entry pairs an item with its count."
    },
    {
      title: "Counter Arithmetic",
      points: 15,
      content: `
        <p>Counters support + and - operators to combine or subtract counts between two
        Counter objects.</p>
        <pre>from collections import Counter

a = Counter(x=3, y=1)
b = Counter(x=1, y=2)

print(a + b)
print(a - b)</pre>
      `,
      question: "When subtracting Counters with a minus operator, what happens to results that would be zero or negative?",
      answer: "they are dropped",
      hint: "Counter subtraction never shows counts of zero or below."
    },
    {
      title: "Adding More Counts with update()",
      points: 18,
      content: `
        <p><code class="inline">Counter.update()</code> adds counts from another iterable
        or mapping without replacing existing counts, unlike a regular dict's update().</p>
        <pre>from collections import Counter

c = Counter(["a", "b"])
c.update(["a", "a", "c"])
print(c)</pre>
      `,
      question: "Does Counter.update() replace existing counts or add to them?",
      answer: "add to them",
      hint: "This is different from how dict.update() overwrites values for matching keys."
    }
  ]
},
{
  id: "collections-defaultdict",
  title: "collections.defaultdict",
  icon: "🧰",
  difficulty: "Medium",
  tags: ["defaultdict", "collections", "dictionaries"],
  description: "Avoid KeyError by using dictionaries that automatically supply a default value for missing keys.",
  tasks: [
    {
      title: "Dictionaries with Automatic Defaults",
      points: 0,
      content: `
        <p><code class="inline">defaultdict</code> avoids a KeyError by auto-creating a
        default value for a missing key, using a factory function you provide.</p>
        <pre>from collections import defaultdict

scores = defaultdict(int)
scores["alice"] += 5
print(scores["alice"])
print(scores["bob"])</pre>
      `
    },
    {
      title: "Grouping Items with defaultdict(list)",
      points: 15,
      content: `
        <p><code class="inline">defaultdict(list)</code> is a common pattern for grouping
        items under keys, without first checking whether the key already exists.</p>
        <pre>from collections import defaultdict

groups = defaultdict(list)
pairs = [("fruit", "apple"), ("veg", "carrot"), ("fruit", "banana")]

for category, item in pairs:
    groups[category].append(item)

print(dict(groups))</pre>
      `,
      question: "What factory function do you pass to defaultdict so that missing keys start as empty lists?",
      answer: "list",
      hint: "It's the built-in type constructor for lists, passed without parentheses."
    },
    {
      title: "Counting with defaultdict(int)",
      points: 15,
      content: `
        <p><code class="inline">defaultdict(int)</code> is useful for counting occurrences,
        since calling <code class="inline">int()</code> with no arguments returns 0.</p>
        <pre>from collections import defaultdict

text = "banana"
counts = defaultdict(int)

for letter in text:
    counts[letter] += 1

print(dict(counts))</pre>
      `,
      question: "What value does int() return with no arguments, which is why defaultdict(int) works well for counting?",
      answer: "0",
      hint: "It's the same value a fresh counter should start at."
    },
    {
      title: "Reading Creates the Key Too",
      points: 18,
      content: `
        <p>A key difference from a normal dict is that simply reading a missing key on a
        defaultdict creates that key with the default value, which can matter when you're
        checking membership.</p>
        <pre>from collections import defaultdict

d = defaultdict(list)
print("x" in d)
d["x"]
print("x" in d)</pre>
      `,
      question: "After simply reading d[\'x\'] on a defaultdict, does the key x now exist in d?",
      answer: "yes",
      hint: "Even reading, not just assigning, a missing key triggers the default factory."
    }
  ]
},
{
  id: "collections-deque",
  title: "collections.deque",
  icon: "↔️",
  difficulty: "Medium",
  tags: ["deque", "collections", "data-structures"],
  description: "Use a double-ended queue for fast appends and pops from both ends of a sequence.",
  tasks: [
    {
      title: "A Double-Ended Queue",
      points: 0,
      content: `
        <p><code class="inline">deque</code> supports fast appends and pops from both ends,
        unlike a list, where inserting at the front is slow.</p>
        <pre>from collections import deque

d = deque([1, 2, 3])
d.append(4)
d.appendleft(0)

print(d)</pre>
      `
    },
    {
      title: "Working from the Left End",
      points: 15,
      content: `
        <p>Use <code class="inline">appendleft()</code> and <code class="inline">popleft()</code>
        to add or remove items from the front of a deque in constant time.</p>
        <pre>from collections import deque

d = deque([1, 2, 3])
first = d.popleft()
print(first, d)</pre>
      `,
      question: "Which deque method removes and returns an item from the left end?",
      answer: "popleft",
      hint: "It's named the same way as pop, but it specifies which end."
    },
    {
      title: "Rotating a Deque",
      points: 15,
      content: `
        <p><code class="inline">rotate(n)</code> shifts all elements to the right by n
        steps, wrapping the ones that fall off back around to the other end.</p>
        <pre>from collections import deque

d = deque([1, 2, 3, 4, 5])
d.rotate(2)
print(d)</pre>
      `,
      question: "What happens to a deque's elements when you call rotate() with a negative number?",
      answer: "they rotate left",
      hint: "Positive numbers rotate right, so negative goes the other way."
    },
    {
      title: "A Bounded Deque with maxlen",
      points: 18,
      content: `
        <p>Creating a deque with <code class="inline">maxlen</code> makes it automatically
        discard items from the opposite end once it's full, useful for a fixed-size
        history buffer.</p>
        <pre>from collections import deque

history = deque(maxlen=3)
for i in range(5):
    history.append(i)
    print(history)</pre>
      `,
      question: "When a deque with maxlen is full and you append a new item, which end loses an item?",
      answer: "the opposite end",
      hint: "If you keep appending on the right, items are dropped from the left."
    }
  ]
},
{
  id: "collections-chainmap",
  title: "collections.ChainMap",
  icon: "🗺️",
  difficulty: "Hard",
  tags: ["chainmap", "collections", "dictionaries"],
  description: "Combine multiple dictionaries into a single, searchable, and updatable view without merging them into one.",
  tasks: [
    {
      title: "A Single View Over Several Dicts",
      points: 0,
      content: `
        <p><code class="inline">ChainMap</code> groups multiple dicts into a single view,
        searching each mapping in order without merging them into a brand new dict.</p>
        <pre>from collections import ChainMap

defaults = {"color": "blue", "size": "M"}
overrides = {"size": "L"}

settings = ChainMap(overrides, defaults)
print(settings["size"])
print(settings["color"])</pre>
      `
    },
    {
      title: "Lookup Order and Priority",
      points: 20,
      content: `
        <p>When the same key exists in more than one mapping, ChainMap returns the value
        from the first mapping in the chain that contains it.</p>
        <pre>from collections import ChainMap

a = {"x": 1}
b = {"x": 2, "y": 3}

cm = ChainMap(a, b)
print(cm["x"])</pre>
      `,
      question: "In ChainMap(a, b), if both a and b have the key x, whose value wins?",
      answer: "a's value",
      hint: "The mappings are searched in the order they were passed in, left to right."
    },
    {
      title: "Adding a Scope with new_child()",
      points: 22,
      content: `
        <p><code class="inline">new_child()</code> returns a brand new ChainMap with an
        extra mapping inserted at the front, handy for creating a nested scope without
        touching the originals.</p>
        <pre>from collections import ChainMap

base = ChainMap({"x": 1})
scoped = base.new_child({"x": 2})

print(scoped["x"])
print(base["x"])</pre>
      `,
      question: "Does calling new_child() modify the original ChainMap, or create a new one?",
      answer: "create a new one",
      hint: "It returns a fresh ChainMap with one extra mapping added at the front."
    },
    {
      title: "Writes Always Hit the First Mapping",
      points: 25,
      content: `
        <p>When you assign or delete a key through a ChainMap, the change only ever affects
        the first mapping in the chain. The other mappings stay untouched.</p>
        <pre>from collections import ChainMap

a = {"x": 1}
b = {"y": 2}

cm = ChainMap(a, b)
cm["z"] = 99

print(a)
print(b)</pre>
      `,
      question: "After cm[\'z\'] = 99 in the example above, which underlying dict gains the new key z?",
      answer: "a",
      hint: "Writes through a ChainMap always land in the first mapping in the chain."
    }
  ]
},
{
  id: "sorting-data",
  title: "Sorting Data with sorted()",
  icon: "📶",
  difficulty: "Medium",
  tags: ["sorting", "collections", "data-structures"],
  description: "Sort sequences with sorted() and the key argument to control both order and comparison logic.",
  tasks: [
    {
      title: "sorted() Returns a New List",
      points: 0,
      content: `
        <p><code class="inline">sorted()</code> returns a brand new sorted list from any
        iterable, leaving the original unchanged, unlike <code class="inline">list.sort()</code>,
        which sorts in place.</p>
        <pre>numbers = [5, 2, 8, 1]
result = sorted(numbers)

print(result)
print(numbers)</pre>
      `
    },
    {
      title: "Reversing the Sort Order",
      points: 15,
      content: `
        <p>Pass <code class="inline">reverse=True</code> to sort in descending order,
        instead of writing custom comparison logic yourself.</p>
        <pre>numbers = [5, 2, 8, 1]
print(sorted(numbers, reverse=True))</pre>
      `,
      question: "Which keyword argument to sorted() reverses the sort order to descending?",
      answer: "reverse",
      hint: "It's set to True or False."
    },
    {
      title: "Custom Sort Order with key",
      points: 18,
      content: `
        <p>The <code class="inline">key</code> argument takes a function applied to each
        item before comparing, letting you sort by something other than an item's natural
        order, like its length.</p>
        <pre>words = ["banana", "kiwi", "fig", "apple"]
by_length = sorted(words, key=len)

print(by_length)</pre>
      `,
      question: "Which built-in function is passed as the key argument above to sort words by length?",
      answer: "len",
      hint: "It's the same function you'd use to check how many characters a string has."
    },
    {
      title: "Sorting Dict Items by Value",
      points: 20,
      content: `
        <p>To sort a dict by its values, sort its <code class="inline">items()</code> using
        a lambda that returns the value part of each pair.</p>
        <pre>scores = {"ada": 91, "grace": 88, "alan": 95}
ranked = sorted(scores.items(), key=lambda pair: pair[1])

print(ranked)</pre>
      `,
      question: "In the lambda above, which index of each pair selects the value rather than the key?",
      answer: "1",
      hint: "Index 0 is the key, so the value comes right after it."
    }
  ]
},
{
  id: "sorting-custom-objects",
  title: "Sorting Custom Objects",
  icon: "🧭",
  difficulty: "Medium",
  tags: ["sorting", "objects", "collections"],
  description: "Sort lists of custom objects using key functions, lambdas, and operator.attrgetter for clean, readable code.",
  tasks: [
    {
      title: "Sorting Objects Needs a Key",
      points: 0,
      content: `
        <p><code class="inline">sorted()</code> can't compare custom objects directly
        unless you tell it what to compare with a key function.</p>
        <pre>class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

people = [Person("Bob", 35), Person("Ada", 30)]
ranked = sorted(people, key=lambda p: p.age)

for person in ranked:
    print(person.name, person.age)</pre>
      `
    },
    {
      title: "A Lambda for One Attribute",
      points: 15,
      content: `
        <p>The simplest way to sort objects by one attribute is a lambda that returns
        that attribute for each item.</p>
        <pre>class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price

items = [Item("pen", 1.5), Item("book", 12.0), Item("mug", 6.0)]
cheapest_first = sorted(items, key=lambda item: item.price)

for i in cheapest_first:
    print(i.name)</pre>
      `,
      question: "What type of function do you commonly write inline to extract the sort attribute, without giving it a name?",
      answer: "a lambda",
      hint: "It's a small anonymous function defined with the lambda keyword."
    },
    {
      title: "operator.attrgetter",
      points: 18,
      content: `
        <p><code class="inline">operator.attrgetter('attr')</code> is a faster, more
        readable alternative to a lambda when sorting by an attribute name.</p>
        <pre>from operator import attrgetter

class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price

items = [Item("pen", 1.5), Item("book", 12.0)]
ranked = sorted(items, key=attrgetter("price"))

for i in ranked:
    print(i.name)</pre>
      `,
      question: "Which standard library module provides the attrgetter function?",
      answer: "operator",
      hint: "The same module also provides itemgetter for sorting by index or dict key."
    },
    {
      title: "Sorting by Multiple Keys",
      points: 20,
      content: `
        <p>Returning a tuple from the key function sorts by more than one attribute at
        once, where earlier tuple elements take priority over later ones.</p>
        <pre>class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

people = [Person("Ada", 30), Person("Bob", 30), Person("Cy", 25)]
ranked = sorted(people, key=lambda p: (p.age, p.name))

for p in ranked:
    print(p.name, p.age)</pre>
      `,
      question: "When sorting by a tuple key like (p.age, p.name), which attribute is compared first?",
      answer: "age",
      hint: "Tuple comparison checks elements left to right, so the first item has priority."
    }
  ]
},
{
  id: "zip-and-enumerate",
  title: "zip() and enumerate()",
  icon: "🤐",
  difficulty: "Easy",
  tags: ["iteration", "collections", "loops"],
  description: "Iterate over multiple sequences together with zip() and track index positions cleanly with enumerate().",
  tasks: [
    {
      title: "Pairing and Indexing While You Loop",
      points: 0,
      content: `
        <p><code class="inline">zip()</code> pairs up items from multiple iterables at the
        same position. <code class="inline">enumerate()</code> pairs each item with its
        index.</p>
        <pre>names = ["Ada", "Grace"]
scores = [95, 88]

for name, score in zip(names, scores):
    print(name, score)

for index, name in enumerate(names):
    print(index, name)</pre>
      `
    },
    {
      title: "zip() with Mismatched Lengths",
      points: 10,
      content: `
        <p>When zipping iterables of different lengths, <code class="inline">zip()</code>
        stops as soon as the shortest iterable runs out of items.</p>
        <pre>a = [1, 2, 3, 4]
b = ["x", "y"]

print(list(zip(a, b)))</pre>
      `,
      question: "How many pairs does list(zip(a, b)) produce when a has 4 items and b has 2?",
      answer: "2",
      hint: "zip() stops at the length of the shortest input."
    },
    {
      title: "enumerate() Basics",
      points: 12,
      content: `
        <p><code class="inline">enumerate()</code> returns (index, item) pairs, saving you
        from manually tracking a counter variable in a loop.</p>
        <pre>colors = ["red", "green", "blue"]

for i, color in enumerate(colors):
    print(i, color)</pre>
      `,
      question: "What type of object does each item from enumerate() come as, pairing index and value?",
      answer: "a tuple",
      hint: "You typically unpack it into two loop variables."
    },
    {
      title: "Starting the Count Elsewhere",
      points: 12,
      content: `
        <p>Pass a <code class="inline">start</code> argument to
        <code class="inline">enumerate()</code> to begin counting from a number other than
        zero.</p>
        <pre>colors = ["red", "green", "blue"]

for i, color in enumerate(colors, start=1):
    print(i, color)</pre>
      `,
      question: "Which keyword argument to enumerate() changes the number the index counting begins from?",
      answer: "start",
      hint: "Without it, indexing always begins at 0."
    }
  ]
},

  /* ---- batch-03.js ---- */
  {
  id: "recursion-basics",
  title: "Recursion Basics",
  icon: "🔁",
  difficulty: "Medium",
  tags: ["functions", "recursion", "functional"],
  description: "Learn how to write functions that call themselves, breaking a problem down into smaller versions of itself.",
  tasks: [
    {
      title: "What is Recursion?",
      points: 0,
      content: `
        <p>Recursion is a technique where a function solves a problem by calling <b>itself</b> with
        a smaller version of that same problem. Every recursive function needs two parts: a
        <b>base case</b> that stops the recursion, and a <b>recursive case</b> that breaks the
        problem down and calls the function again.</p>
        <p>A classic example is calculating a factorial, where n! equals n multiplied by (n-1)!,
        down to the base case of 0! being 1.</p>
        <pre>def factorial(n):
    if n == 0:          # base case
        return 1
    return n * factorial(n - 1)   # recursive case

print(factorial(5))  # 120</pre>
      `
    },
    {
      title: "Base Cases",
      points: 15,
      content: `
        <p>The <b>base case</b> is the condition that tells a recursive function when to stop
        calling itself. Without one, the function would keep calling itself forever, eventually
        crashing with a <code class="inline">RecursionError</code>.</p>
        <p>Every recursive call should move closer to the base case, usually by shrinking the input.</p>
        <pre>def countdown(n):
    if n &lt;= 0:          # base case
        print("Liftoff!")
        return
    print(n)
    countdown(n - 1)   # recursive case, moves toward the base case

countdown(3)</pre>
      `,
      question: "What do we call the condition that stops a recursive function from calling itself again?",
      answer: "base case",
      hint: "Two words describing the stopping condition."
    },
    {
      title: "Recursive Cases",
      points: 15,
      content: `
        <p>The <b>recursive case</b> is the part of the function where it calls itself, usually
        with a smaller or simpler input. Each recursive call should bring the problem closer to
        the base case.</p>
        <p>Here's a function that sums a list recursively, by adding the first element to the sum
        of the rest.</p>
        <pre>def total(numbers):
    if not numbers:        # base case: empty list
        return 0
    return numbers[0] + total(numbers[1:])  # recursive case

print(total([1, 2, 3, 4]))  # 10</pre>
      `,
      question: "In the factorial definition where 0! is 1, what value does factorial(0) return?",
      answer: "1",
      hint: "It's the base case's return value."
    },
    {
      title: "Recursion Depth",
      points: 20,
      content: `
        <p>Every recursive call adds a new frame to the <b>call stack</b>. If a function recurses
        too many times without reaching its base case, Python runs out of stack space and raises
        an error.</p>
        <pre>def broken(n):
    return broken(n + 1)  # no base case!

broken(1)
# Eventually raises: RecursionError: maximum recursion depth exceeded</pre>
        <p>Python's default recursion limit is usually 1000 calls, though it can be checked or
        changed with the <code class="inline">sys</code> module.</p>
      `,
      question: "What error does Python raise when a function recurses too deeply without ever reaching a base case?",
      answer: "RecursionError",
      hint: "It's a specific built-in exception name."
    }
  ]
},
{
  id: "recursion-practice",
  title: "Recursion Practice",
  icon: "🔂",
  difficulty: "Medium",
  tags: ["functions", "recursion", "functional"],
  description: "Practice recursion with classic problems like summing a list, counting down, reversing text, and Fibonacci.",
  tasks: [
    {
      title: "Warming Up",
      points: 0,
      content: `
        <p>Now that you know the two parts of every recursive function, let's practice writing
        a few classic ones. Each example below follows the same pattern: check the base case
        first, then call the function again on a smaller piece of the problem.</p>
        <pre>def sum_list(numbers):
    if not numbers:
        return 0
    return numbers[0] + sum_list(numbers[1:])

print(sum_list([10, 20, 30]))  # 60</pre>
      `
    },
    {
      title: "Countdown",
      points: 15,
      content: `
        <p>A countdown function prints each number from n down to 0, then stops. It's a simple
        way to practice matching the base case to the exact value you want to stop at.</p>
        <pre>def countdown(n):
    if n &lt; 0:
        return
    print(n)
    countdown(n - 1)

countdown(3)  # prints 3, 2, 1, 0</pre>
      `,
      question: "What is the last number countdown(3) prints before it stops?",
      answer: "0",
      hint: "It's the base case value in this version."
    },
    {
      title: "Reversing a String",
      points: 15,
      content: `
        <p>Recursion works well on strings too, since slicing a string produces a smaller string
        you can recurse on. Here's a function that reverses a string by moving its first
        character to the end of the reversed rest.</p>
        <pre>def reverse_string(text):
    if len(text) &lt;= 1:
        return text
    return reverse_string(text[1:]) + text[0]

print(reverse_string("abc"))</pre>
      `,
      question: "What does reverse_string('abc') return?",
      answer: "cba",
      hint: "Just spell the letters backwards."
    },
    {
      title: "Fibonacci",
      points: 20,
      content: `
        <p>The Fibonacci sequence is defined recursively: each number is the sum of the two
        before it, with fib(0) = 0 and fib(1) = 1 as base cases.</p>
        <pre>def fib(n):
    if n &lt;= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(5))</pre>
        <p>This naive version recalculates the same values many times, making it slow for large
        n — a problem you'll fix later with caching.</p>
      `,
      question: "Using fib(0)=0 and fib(1)=1, what is fib(5)?",
      answer: "5",
      hint: "The sequence goes 0, 1, 1, 2, 3, 5."
    }
  ]
},
{
  id: "map-filter-reduce",
  title: "map(), filter(), reduce()",
  icon: "🗺️",
  difficulty: "Medium",
  tags: ["functions", "functional", "iterables"],
  description: "Apply functions across iterables without writing explicit loops, using map, filter, and reduce.",
  tasks: [
    {
      title: "Functions Over Iterables",
      points: 0,
      content: `
        <p>Python provides built-in functions that apply another function across an entire
        iterable, so you don't have to write an explicit loop. The two most common are
        <code class="inline">map()</code> and <code class="inline">filter()</code>.</p>
        <p><code class="inline">map()</code> applies a function to every item and returns a new
        iterator of results. Because it returns a lazy iterator, you often wrap it in
        <code class="inline">list()</code> to see the values.</p>
        <pre>numbers = ["1", "2", "3"]
as_ints = map(int, numbers)

print(list(as_ints))  # [1, 2, 3]</pre>
      `
    },
    {
      title: "map()",
      points: 15,
      content: `
        <p><code class="inline">map(function, iterable)</code> calls <code class="inline">function</code>
        once for every item in <code class="inline">iterable</code> and yields the results one by
        one. It's often paired with a <code class="inline">lambda</code> for short throwaway functions.</p>
        <pre>numbers = [1, 2, 3, 4]
squares = map(lambda x: x ** 2, numbers)

print(list(squares))  # [1, 4, 9, 16]</pre>
      `,
      question: "What built-in function do you wrap around a map object to turn it into a list you can print or index?",
      answer: "list",
      hint: "It's a built-in type constructor, also used to build lists."
    },
    {
      title: "filter()",
      points: 15,
      content: `
        <p><code class="inline">filter(function, iterable)</code> keeps only the items for which
        <code class="inline">function</code> returns a truthy value, discarding the rest. Like
        <code class="inline">map()</code>, it returns a lazy iterator.</p>
        <pre>numbers = [1, 2, 3, 4, 5, 6]
evens = filter(lambda x: x % 2 == 0, numbers)

print(list(evens))  # [2, 4, 6]</pre>
      `,
      question: "What must the function passed to filter() return for an item to be kept?",
      answer: "True",
      hint: "Any truthy value works, but this is the simplest one."
    },
    {
      title: "reduce()",
      points: 20,
      content: `
        <p><code class="inline">reduce()</code> combines all items of an iterable into a single
        value by repeatedly applying a function to an accumulator and the next item. Unlike
        <code class="inline">map()</code> and <code class="inline">filter()</code>, it lives in
        the <code class="inline">functools</code> module.</p>
        <pre>from functools import reduce

numbers = [1, 2, 3, 4]
product = reduce(lambda acc, x: acc * x, numbers)

print(product)  # 24</pre>
      `,
      question: "Which module must you import to use reduce()?",
      answer: "functools",
      hint: "It's not a builtin like map and filter."
    }
  ]
},
{
  id: "closures",
  title: "Closures",
  icon: "🔒",
  difficulty: "Medium",
  tags: ["functions", "closures", "functional"],
  description: "Understand functions that remember variables from their enclosing scope, even after that scope has returned.",
  tasks: [
    {
      title: "What is a Closure?",
      points: 0,
      content: `
        <p>A <b>closure</b> is an inner function that remembers variables from its enclosing
        function's scope, even after the outer function has finished running. This lets you
        create customized functions on the fly.</p>
        <pre>def make_multiplier(factor):
    def multiply(x):
        return x * factor   # 'factor' is remembered from the outer scope
    return multiply

double = make_multiplier(2)
print(double(5))  # 10</pre>
      `
    },
    {
      title: "Captured Variables",
      points: 15,
      content: `
        <p>The variables a closure remembers from its enclosing scope are sometimes called
        <b>free variables</b>. They aren't copied at creation time — the inner function keeps a
        reference to the enclosing scope itself.</p>
        <pre>def make_greeter(greeting):
    def greet(name):
        return f"{greeting}, {name}!"
    return greet

hello = make_greeter("Hello")
print(hello("Ada"))  # Hello, Ada!</pre>
      `,
      question: "What term describes the variables a closure remembers from its enclosing function?",
      answer: "free variables",
      hint: "Two words, both starting with the same letter."
    },
    {
      title: "Modifying with nonlocal",
      points: 15,
      content: `
        <p>By default, an inner function can read a variable from the enclosing scope but not
        reassign it. To modify it, you need the <code class="inline">nonlocal</code> keyword.</p>
        <pre>def make_counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter = make_counter()
print(counter())  # 1
print(counter())  # 2</pre>
      `,
      question: "Which keyword lets an inner function modify a variable from its enclosing scope?",
      answer: "nonlocal",
      hint: "Not global — this one is for enclosing scopes."
    },
    {
      title: "Closures in Practice",
      points: 20,
      content: `
        <p>Closures are useful for generating specialized functions without repeating code, such
        as building a family of power functions.</p>
        <pre>def make_power(exponent):
    def power(base):
        return base ** exponent
    return power

cube = make_power(3)
print(cube(2))  # 8</pre>
      `,
      question: "What does make_power(3)(2) return?",
      answer: "8",
      hint: "2 raised to the power of 3."
    }
  ]
},
{
  id: "decorators-basics",
  title: "Decorators Basics",
  icon: "🎀",
  difficulty: "Hard",
  tags: ["functions", "decorators", "functional"],
  description: "Wrap functions to add extra behavior around them using the @decorator syntax.",
  tasks: [
    {
      title: "What is a Decorator?",
      points: 0,
      content: `
        <p>A <b>decorator</b> is a function that wraps another function to add extra behavior,
        without changing the original function's source code. Decorators rely on the fact that
        functions are objects that can be passed around and returned.</p>
        <pre>def shout(func):
    def wrapper():
        result = func()
        return result.upper()
    return wrapper

def greet():
    return "hello"

greet = shout(greet)   # manual decoration
print(greet())  # HELLO</pre>
      `
    },
    {
      title: "The @ Syntax",
      points: 20,
      content: `
        <p>Instead of manually reassigning a function like <code class="inline">greet = shout(greet)</code>,
        Python lets you apply a decorator with the <code class="inline">@</code> symbol directly
        above a function definition.</p>
        <pre>def shout(func):
    def wrapper():
        return func().upper()
    return wrapper

@shout
def greet():
    return "hello"

print(greet())  # HELLO</pre>
      `,
      question: "What syntax do you place directly above a function definition to apply a decorator named shout?",
      answer: "@shout",
      hint: "Starts with the at symbol, followed by the decorator's name."
    },
    {
      title: "Passing Arguments Through",
      points: 20,
      content: `
        <p>Most real functions take arguments, so a decorator's inner wrapper needs to accept and
        forward them using <code class="inline">*args</code> and <code class="inline">**kwargs</code>,
        and return whatever the original function returns.</p>
        <pre>def shout(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@shout
def greet(name):
    return f"hello {name}"

print(greet("Ada"))  # HELLO ADA</pre>
      `,
      question: "Inside a decorator's wrapper function, what must it do with the wrapped function's result for the decorator to behave transparently?",
      answer: "return it",
      hint: "Two words: what the wrapper needs to do with the result."
    },
    {
      title: "Stacking Decorators",
      points: 25,
      content: `
        <p>You can apply more than one decorator to the same function by stacking
        <code class="inline">@</code> lines. They apply from the bottom up — the decorator closest
        to the function wraps it first.</p>
        <pre>@shout
@exclaim
def greet():
    return "hello"
# equivalent to: greet = shout(exclaim(greet))</pre>
      `,
      question: "When two decorators are stacked, which one wraps the function first: the one closest to the function, or the one furthest away?",
      answer: "closest",
      hint: "Decorators apply starting from the function outward."
    }
  ]
},
{
  id: "decorators-with-arguments",
  title: "Decorators with Arguments",
  icon: "🎁",
  difficulty: "Hard",
  tags: ["functions", "decorators", "functional"],
  description: "Write decorator factories that themselves accept configuration arguments before decorating a function.",
  tasks: [
    {
      title: "Configurable Decorators",
      points: 0,
      content: `
        <p>Sometimes you want a decorator that can be configured, like repeating a function call
        a certain number of times. This requires a <b>decorator factory</b>: a function that
        takes configuration arguments and returns a decorator.</p>
        <pre>def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def say_hi():
    print("hi")

say_hi()  # prints "hi" three times</pre>
      `
    },
    {
      title: "Three Levels of Nesting",
      points: 20,
      content: `
        <p>A decorator that accepts its own arguments typically needs three nested functions: the
        outer <b>factory</b> (takes the config arguments), the middle <b>decorator</b> (takes the
        function to wrap), and the inner <b>wrapper</b> (takes the function's own arguments).</p>
        <pre>def repeat(times):        # 1: factory, takes config
    def decorator(func):  # 2: decorator, takes the function
        def wrapper(*a, **kw):  # 3: wrapper, takes the call's args
            for _ in range(times):
                result = func(*a, **kw)
            return result
        return wrapper
    return decorator</pre>
      `,
      question: "How many levels of nested functions does a decorator that accepts its own configuration arguments typically need?",
      answer: "3",
      hint: "Factory, decorator, wrapper."
    },
    {
      title: "Calling the Decorated Function",
      points: 20,
      content: `
        <p>When you write <code class="inline">@repeat(3)</code>, Python first calls
        <code class="inline">repeat(3)</code> to get back the actual decorator, then applies that
        decorator to the function below it.</p>
        <pre>@repeat(3)
def say_hi():
    print("hi")

say_hi()</pre>
      `,
      question: "If a function is decorated with @repeat(3) and called once, how many times does the original function body actually run?",
      answer: "3",
      hint: "Match it to the argument passed to repeat."
    },
    {
      title: "Recognizing a Decorator Factory",
      points: 25,
      content: `
        <p>The extra parentheses right after the decorator's name are what tell you it's a
        factory being called to produce a decorator, rather than a plain decorator being applied
        directly.</p>
        <pre># Plain decorator, no configuration:
@shout
def greet(): ...

# Decorator factory, takes configuration:
@repeat(3)
def say_hi(): ...</pre>
      `,
      question: "What part of the syntax in @repeat(3) makes it a factory call rather than a plain decorator?",
      answer: "parentheses",
      hint: "It's the punctuation that calls the factory function."
    }
  ]
},
{
  id: "functools-wraps",
  title: "functools.wraps",
  icon: "🧵",
  difficulty: "Hard",
  tags: ["functions", "decorators", "functional"],
  description: "Preserve a wrapped function's original name and docstring when writing decorators, using functools.wraps.",
  tasks: [
    {
      title: "The Metadata Problem",
      points: 0,
      content: `
        <p>When you wrap a function with a decorator, the wrapper function replaces the original
        in the namespace — which means it also replaces the original's metadata, like its name
        and docstring. This can confuse debugging tools and documentation generators.</p>
        <pre>def shout(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@shout
def greet(name):
    """Say hello to someone."""
    return f"hello {name}"

print(greet.__name__)  # wrapper  (not "greet"!)
print(greet.__doc__)   # None</pre>
      `
    },
    {
      title: "Fixing It with @wraps",
      points: 20,
      content: `
        <p>The <code class="inline">functools.wraps</code> decorator copies over the original
        function's <code class="inline">__name__</code>, <code class="inline">__doc__</code>, and
        other metadata onto the wrapper, so the decorated function still looks like itself from
        the outside.</p>
        <pre>from functools import wraps

def shout(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@shout
def greet(name):
    """Say hello to someone."""
    return f"hello {name}"

print(greet.__name__)  # greet</pre>
      `,
      question: "What do you import from functools to preserve a decorated function's original name and docstring?",
      answer: "wraps",
      hint: "It's a single word, also the name of the decorator you apply to the wrapper."
    },
    {
      title: "What Gets Lost Without It",
      points: 20,
      content: `
        <p>Without <code class="inline">@wraps</code>, the decorated function's identity is
        effectively replaced by the inner wrapper function, since that's the object Python
        actually keeps a reference to.</p>
        <pre>def shout(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@shout
def greet(name):
    return f"hello {name}"

print(greet.__name__)</pre>
      `,
      question: "Without functools.wraps, what does a decorated function's __name__ attribute become?",
      answer: "wrapper",
      hint: "It takes on the inner function's own name."
    },
    {
      title: "Preserving Docstrings",
      points: 25,
      content: `
        <p>Documentation tools rely on a function's docstring to generate help text.
        <code class="inline">functools.wraps</code> makes sure that docstring survives
        decoration.</p>
        <pre>from functools import wraps

def logged(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

@logged
def add(a, b):
    """Return the sum of a and b."""
    return a + b

print(add.__doc__)  # Return the sum of a and b.</pre>
      `,
      question: "Which dunder attribute of a function stores its docstring, which wraps also preserves?",
      answer: "__doc__",
      hint: "It starts and ends with double underscores."
    }
  ]
},
{
  id: "functools-lru-cache",
  title: "functools.lru_cache",
  icon: "⚡",
  difficulty: "Medium",
  tags: ["functions", "functional", "performance"],
  description: "Speed up expensive, pure functions by automatically caching their results with functools.lru_cache.",
  tasks: [
    {
      title: "Automatic Caching",
      points: 0,
      content: `
        <p><code class="inline">functools.lru_cache</code> is a decorator that automatically
        remembers the results of previous calls to a function, so repeated calls with the same
        arguments return instantly instead of recomputing.</p>
        <p>It's especially useful for expensive, pure functions — functions whose output only
        depends on their input.</p>
        <pre>from functools import lru_cache

@lru_cache
def fib(n):
    if n &lt;= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(30))  # fast, thanks to caching</pre>
      `
    },
    {
      title: "Hashable Arguments",
      points: 15,
      content: `
        <p>Internally, <code class="inline">lru_cache</code> stores results in a dictionary-like
        cache keyed by the function's arguments. That means every argument passed to a cached
        function must be <b>hashable</b> — lists and dicts won't work.</p>
        <pre>from functools import lru_cache

@lru_cache
def total(numbers):   # numbers must be hashable, e.g. a tuple
    return sum(numbers)

print(total((1, 2, 3)))  # works
# total([1, 2, 3]) would raise TypeError: unhashable type</pre>
      `,
      question: "What type of arguments must a function decorated with lru_cache accept, since they become cache keys?",
      answer: "hashable",
      hint: "Think of what dictionary keys must be."
    },
    {
      title: "Controlling maxsize",
      points: 15,
      content: `
        <p>By default, <code class="inline">lru_cache</code> keeps only the 128 most recently used
        results, discarding the oldest ones once that limit is reached (hence 'LRU' — least
        recently used). You can change this with the <code class="inline">maxsize</code> argument.</p>
        <pre>from functools import lru_cache

@lru_cache(maxsize=None)   # unlimited cache size
def square(x):
    return x * x

print(square(5))</pre>
      `,
      question: "What value do you pass to maxsize to make an lru_cache store an unlimited number of results?",
      answer: "None",
      hint: "It's a Python keyword, not a number."
    },
    {
      title: "Inspecting the Cache",
      points: 20,
      content: `
        <p>A cached function gains extra methods you can use to inspect or reset its cache:
        <code class="inline">cache_info()</code> reports hits and misses, and
        <code class="inline">cache_clear()</code> empties the cache.</p>
        <pre>from functools import lru_cache

@lru_cache
def square(x):
    return x * x

square(2)
square(2)
print(square.cache_info())
# CacheInfo(hits=1, misses=1, maxsize=128, currsize=1)</pre>
      `,
      question: "Which method on a cached function reports hits and misses?",
      answer: "cache_info",
      hint: "It's called as a method with no arguments."
    }
  ]
},
{
  id: "generators",
  title: "Generators & yield",
  icon: "🌀",
  difficulty: "Hard",
  tags: ["functions", "generators", "functional"],
  description: "Produce values lazily, one at a time, by writing generator functions with the yield keyword.",
  tasks: [
    {
      title: "What is a Generator?",
      points: 0,
      content: `
        <p>A <b>generator</b> is a special kind of function that produces a sequence of values
        lazily, one at a time, instead of computing and returning them all at once. You create one
        by using <code class="inline">yield</code> instead of <code class="inline">return</code>.</p>
        <pre>def count_up_to(n):
    i = 1
    while i &lt;= n:
        yield i
        i += 1

for number in count_up_to(3):
    print(number)  # 1, then 2, then 3</pre>
      `
    },
    {
      title: "Pulling Values with next()",
      points: 20,
      content: `
        <p>Calling a generator function doesn't run its body immediately — it returns a
        <b>generator object</b>. You retrieve values from it one at a time by calling the
        built-in <code class="inline">next()</code> function.</p>
        <pre>def count_up_to(n):
    i = 1
    while i &lt;= n:
        yield i
        i += 1

gen = count_up_to(2)
print(next(gen))  # 1
print(next(gen))  # 2</pre>
      `,
      question: "What built-in function do you call on a generator object to retrieve its next value?",
      answer: "next",
      hint: "It's also used with iterators generally."
    },
    {
      title: "Running Out of Values",
      points: 20,
      content: `
        <p>When a generator function's body finishes — either by reaching the end or hitting a
        <code class="inline">return</code> — the next call to <code class="inline">next()</code>
        raises a special exception. A <code class="inline">for</code> loop catches this exception
        automatically to know when to stop.</p>
        <pre>def count_up_to(n):
    i = 1
    while i &lt;= n:
        yield i
        i += 1

gen = count_up_to(1)
print(next(gen))  # 1
print(next(gen))  # raises StopIteration</pre>
      `,
      question: "What exception is raised, and normally caught automatically by a for loop, when a generator has no more values?",
      answer: "StopIteration",
      hint: "One word, camel case, describes the iteration ending."
    },
    {
      title: "Generators Keep Their State",
      points: 25,
      content: `
        <p>Unlike a regular function, a generator function's local variables are preserved between
        calls to <code class="inline">next()</code>. Execution pauses at each
        <code class="inline">yield</code> and resumes right where it left off.</p>
        <pre>def running_total(numbers):
    total = 0
    for n in numbers:
        total += n
        yield total

for t in running_total([1, 2, 3]):
    print(t)  # 1, 3, 6</pre>
      `,
      question: "Between calls to next(), does a generator function's local variables reset or keep their values?",
      answer: "keep their values",
      hint: "This is what makes generators stateful."
    }
  ]
},
{
  id: "generator-expressions",
  title: "Generator Expressions",
  icon: "💧",
  difficulty: "Medium",
  tags: ["functions", "generators", "functional"],
  description: "Create memory-efficient generators with comprehension-like syntax by swapping brackets for parentheses.",
  tasks: [
    {
      title: "Lazy, Comprehension-Like Syntax",
      points: 0,
      content: `
        <p>A <b>generator expression</b> looks like a list comprehension but produces values
        lazily instead of building the whole list in memory at once. This makes it much more
        memory-efficient for large or infinite sequences.</p>
        <pre>squares = (x * x for x in range(5))

print(squares)         # a generator object, not a list
print(list(squares))   # [0, 1, 4, 9, 16]</pre>
      `
    },
    {
      title: "Parentheses Instead of Brackets",
      points: 15,
      content: `
        <p>The only syntax difference between a list comprehension and a generator expression is
        the enclosing punctuation: square brackets build a list right away, while parentheses
        build a lazy generator.</p>
        <pre>list_comp = [x * 2 for x in range(3)]   # a real list: [0, 2, 4]
gen_exp   = (x * 2 for x in range(3))   # a generator object</pre>
      `,
      question: "Which punctuation mark encloses a generator expression instead of the square brackets used by list comprehensions?",
      answer: "parentheses",
      hint: "Round brackets, not square ones."
    },
    {
      title: "One-Time Use",
      points: 15,
      content: `
        <p>A generator expression can only be iterated over once. After its values have all been
        produced, iterating it again yields nothing at all.</p>
        <pre>gen = (x for x in range(3))

print(list(gen))  # [0, 1, 2]
print(list(gen))  # [] -- already exhausted</pre>
      `,
      question: "If you iterate over an already-exhausted generator expression a second time, how many items do you get?",
      answer: "0",
      hint: "Think of it as zero, none at all."
    },
    {
      title: "Passing Directly Into a Function",
      points: 20,
      content: `
        <p>When a generator expression is the only argument being passed to a function call, you
        can drop the extra parentheses that would normally enclose it.</p>
        <pre>total = sum(x * x for x in range(5))  # no extra parentheses needed
print(total)  # 30</pre>
      `,
      question: "When a generator expression is the sole argument to a function call, do you need an extra pair of parentheses around it?",
      answer: "no",
      hint: "One word: yes or no."
    }
  ]
},
{
  id: "first-class-functions",
  title: "First-Class Functions",
  icon: "🥇",
  difficulty: "Medium",
  tags: ["functions", "functional"],
  description: "Pass functions around as values, store them in data structures, and treat them like any other object.",
  tasks: [
    {
      title: "Functions Are Objects",
      points: 0,
      content: `
        <p>In Python, functions are <b>first-class objects</b> — just like numbers or strings,
        they can be assigned to variables, stored in data structures, and passed around your
        program.</p>
        <pre>def greet():
    return "hello"

say_hello = greet   # assign the function itself, no parentheses
print(say_hello())  # hello</pre>
      `
    },
    {
      title: "Storing Functions",
      points: 15,
      content: `
        <p>Because functions are objects, you can store them in lists, tuples, or dictionaries,
        just like any other value.</p>
        <pre>def plus(a, b):
    return a + b

def minus(a, b):
    return a - b

operations = {"plus": plus, "minus": minus}
print(operations["plus"](2, 3))  # 5</pre>
      `,
      question: "What data structure did the example above use to map string names to their corresponding functions?",
      answer: "dict",
      hint: "It maps keys to values."
    },
    {
      title: "Functions as Arguments",
      points: 15,
      content: `
        <p>Since functions are first-class, you can pass one function into another as an ordinary
        argument.</p>
        <pre>def apply_twice(func, value):
    return func(func(value))

def increment(x):
    return x + 1

print(apply_twice(increment, 5))  # 7</pre>
      `,
      question: "Since functions are first-class objects in Python, can you pass a function to another function as an argument?",
      answer: "yes",
      hint: "This is a defining feature of first-class functions."
    },
    {
      title: "Reference vs. Call",
      points: 20,
      content: `
        <p>Writing a function's name without parentheses refers to the function object itself.
        Writing it with parentheses actually calls it and refers to its return value instead.</p>
        <pre>def my_func():
    return 42

print(my_func)    # &lt;function my_func at 0x...&gt;
print(my_func())  # 42</pre>
      `,
      question: "Which of these refers to the function object itself rather than calling it: my_func or my_func()?",
      answer: "my_func",
      hint: "The one without parentheses."
    }
  ]
},
{
  id: "higher-order-functions",
  title: "Higher-Order Functions",
  icon: "🧩",
  difficulty: "Medium",
  tags: ["functions", "functional"],
  description: "Write functions that accept other functions as arguments or return new functions as their result.",
  tasks: [
    {
      title: "Functions That Work with Functions",
      points: 0,
      content: `
        <p>A <b>higher-order function</b> is a function that either takes one or more functions
        as arguments, returns a function as its result, or both. They let you write flexible,
        reusable code by treating behavior itself as a parameter.</p>
        <pre>def apply_operation(func, x, y):
    return func(x, y)

def add(a, b):
    return a + b

print(apply_operation(add, 3, 4))  # 7</pre>
      `
    },
    {
      title: "Functions Accepting Functions",
      points: 15,
      content: `
        <p>Many built-in functions are higher-order. <code class="inline">sorted()</code> accepts
        a <code class="inline">key</code> argument — a function used to compute a custom sort
        value for each item.</p>
        <pre>words = ["banana", "kiwi", "apple"]
by_length = sorted(words, key=len)

print(by_length)  # ['kiwi', 'apple', 'banana']</pre>
      `,
      question: "What argument name does sorted() use for the function that customizes how items are compared?",
      answer: "key",
      hint: "It's a single lowercase word."
    },
    {
      title: "Functions Returning Functions",
      points: 15,
      content: `
        <p>A higher-order function can also build and return a brand-new function, customized by
        the arguments it was given.</p>
        <pre>def make_adder(n):
    def adder(x):
        return x + n
    return adder

add5 = make_adder(5)
print(add5(10))  # 15</pre>
      `,
      question: "What do we call a function that returns another function as its result?",
      answer: "higher-order function",
      hint: "Same phrase as the topic of this room."
    },
    {
      title: "Built-in Examples",
      points: 20,
      content: `
        <p>Several of Python's own built-ins are higher-order functions, including
        <code class="inline">map()</code>, <code class="inline">filter()</code>, and
        <code class="inline">sorted()</code> — each one takes a function and an iterable.</p>
        <pre>numbers = [1, 2, 3, 4]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)  # [2, 4, 6, 8]</pre>
      `,
      question: "Name one of Python's built-in higher-order functions that takes a function and an iterable as arguments.",
      answer: "map",
      hint: "filter and sorted also work, but this one applies a function to every item."
    }
  ]
},
{
  id: "partial-functions",
  title: "Partial Functions",
  icon: "✂️",
  difficulty: "Medium",
  tags: ["functions", "functional"],
  description: "Pre-fill some of a function's arguments to create simpler, specialized callables using functools.partial.",
  tasks: [
    {
      title: "Pre-Filling Arguments",
      points: 0,
      content: `
        <p><code class="inline">functools.partial</code> creates a new callable by pre-filling
        some of a function's arguments, so you can call the result with only the remaining ones.</p>
        <pre>from functools import partial

def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
print(square(5))  # 25</pre>
      `
    },
    {
      title: "Importing partial",
      points: 15,
      content: `
        <p>Like <code class="inline">reduce()</code>, <code class="inline">partial()</code> lives
        in the <code class="inline">functools</code> module and must be imported before use.</p>
        <pre>from functools import partial

def greet(greeting, name):
    return f"{greeting}, {name}!"

say_hello = partial(greet, "Hello")
print(say_hello("Ada"))  # Hello, Ada!</pre>
      `,
      question: "What must you import from the functools module to create a partial function?",
      answer: "partial",
      hint: "It's the name of the function itself."
    },
    {
      title: "Fixing Positional Arguments",
      points: 15,
      content: `
        <p>When you supply positional arguments to <code class="inline">partial()</code>, they
        fill in the target function's parameters starting from the <b>first</b> one, left to
        right.</p>
        <pre>from functools import partial

def power(base, exponent):
    return base ** exponent

cube_of = partial(power, exponent=3)  # fixes the second parameter by name
square_base_2 = partial(power, 2)     # fixes 'base' since it's positional

print(square_base_2(10))  # 1024, since exponent=10</pre>
      `,
      question: "In functools.partial(func, a), does the argument a get applied to func's first parameter or its last parameter?",
      answer: "first parameter",
      hint: "Partial fills positional arguments from the left."
    },
    {
      title: "A Practical Use Case",
      points: 20,
      content: `
        <p>Partial functions are handy for creating specialized shortcuts around a general-purpose
        function, like always converting from binary.</p>
        <pre>from functools import partial

from_binary = partial(int, base=2)
print(from_binary("101"))  # 5</pre>
      `,
      question: "What does partial(int, base=2)('101') evaluate to?",
      answer: "5",
      hint: "Convert the binary string 101 to a decimal integer."
    }
  ]
},
{
  id: "type-hints",
  title: "Function Annotations & Type Hints",
  icon: "🏷️",
  difficulty: "Medium",
  tags: ["functions", "type-hints", "functional"],
  description: "Document expected argument and return types with type hints, without changing how the code actually runs.",
  tasks: [
    {
      title: "Annotating Functions",
      points: 0,
      content: `
        <p><b>Type hints</b> let you annotate a function's expected parameter types and return
        type. They're optional and not enforced by the interpreter at runtime, but they make code
        easier to read and let tools like editors and type checkers catch mistakes early.</p>
        <pre>def greet(name: str) -&gt; str:
    return f"Hello, {name}!"

print(greet("Ada"))</pre>
      `
    },
    {
      title: "Not Enforced at Runtime",
      points: 15,
      content: `
        <p>Type hints are purely informational as far as the interpreter is concerned — Python
        will happily run code that violates them, since they aren't checked automatically.</p>
        <pre>def add(a: int, b: int) -&gt; int:
    return a + b

print(add("2", "3"))  # runs fine, prints "23" (string concatenation)</pre>
      `,
      question: "Do Python type hints get enforced by the interpreter at runtime?",
      answer: "no",
      hint: "They're mainly for readability and static analysis tools."
    },
    {
      title: "Return Type Hints",
      points: 15,
      content: `
        <p>To annotate a function's return type, you write an arrow after the closing parenthesis
        of the parameter list, followed by the expected type.</p>
        <pre>def is_even(n: int) -&gt; bool:
    return n % 2 == 0

print(is_even(4))  # True</pre>
      `,
      question: "What arrow symbol do you use to annotate a function's return type?",
      answer: "->",
      hint: "Two characters: a dash followed by a greater-than sign."
    },
    {
      title: "Optional Values",
      points: 20,
      content: `
        <p>Sometimes a function might return a value or nothing at all. The
        <code class="inline">typing</code> module's <code class="inline">Optional</code> expresses
        that possibility clearly.</p>
        <pre>from typing import Optional

def find_index(items: list, target: int) -&gt; Optional[int]:
    if target in items:
        return items.index(target)
    return None</pre>
      `,
      question: "What does Optional[int] mean for a return type hint?",
      answer: "int or None",
      hint: "It means the value could be an integer or absent."
    }
  ]
},
{
  id: "scope-in-closures",
  title: "Variable Scope in Closures",
  icon: "🔬",
  difficulty: "Hard",
  tags: ["functions", "closures", "functional"],
  description: "Understand nonlocal and the common pitfalls that happen when closures capture loop variables.",
  tasks: [
    {
      title: "Capture by Reference",
      points: 0,
      content: `
        <p>Closures capture variables from their enclosing scope by <b>reference</b>, not by the
        value that variable held at the moment the closure was created. This distinction causes a
        famous bug when closures are created inside a loop.</p>
        <pre>functions = []
for i in range(3):
    functions.append(lambda: i)

print([f() for f in functions])
# [2, 2, 2]  -- not [0, 1, 2] as you might expect!</pre>
      `
    },
    {
      title: "nonlocal, Revisited",
      points: 20,
      content: `
        <p>Recall that an inner function needs the <code class="inline">nonlocal</code> keyword to
        reassign (not just read) a variable from an enclosing function's scope. This becomes
        especially important once you're deliberately managing shared state in closures.</p>
        <pre>def make_accumulator():
    total = 0
    def add(amount):
        nonlocal total
        total += amount
        return total
    return add

acc = make_accumulator()
print(acc(10))  # 10
print(acc(5))   # 15</pre>
      `,
      question: "What keyword must an inner function use to reassign a variable defined in an enclosing function's scope?",
      answer: "nonlocal",
      hint: "Same keyword you learned in the closures room."
    },
    {
      title: "Why the Loop Bug Happens",
      points: 20,
      content: `
        <p>All the lambdas created inside the loop share the exact same variable
        <code class="inline">i</code>, because closures capture the variable itself, not a
        snapshot of its value at creation time. By the time any lambda is called, the loop has
        already finished and <code class="inline">i</code> holds its final value.</p>
        <pre>functions = []
for i in range(3):
    functions.append(lambda: i)

print(functions[0]())  # 2, not 0!</pre>
      `,
      question: "In the loop-variable closure bug, do all the created functions share the SAME variable or each get their OWN separate copy?",
      answer: "same variable",
      hint: "This is why they all print the final loop value."
    },
    {
      title: "Fixing It with a Default Argument",
      points: 25,
      content: `
        <p>A common fix is to capture the current value immediately using a parameter's default
        value, since default values are evaluated once, at function definition time — not each
        time the function is called.</p>
        <pre>functions = []
for i in range(3):
    functions.append(lambda i=i: i)  # i=i captures the current value now

print([f() for f in functions])
# [0, 1, 2]  -- fixed!</pre>
      `,
      question: "What technique fixes the loop-variable closure bug by capturing the current value immediately, using a parameter's default value?",
      answer: "default argument",
      hint: "Two words describing a parameter=value trick, like lambda i=i:"
    }
  ]
},

  /* ---- batch-04.js ---- */
  {
  id: "class-vs-instance-attrs",
  title: "Class vs Instance Attributes",
  icon: "🏷️",
  difficulty: "Medium",
  tags: ["oop", "classes", "attributes"],
  description: "Understand attributes shared by all instances versus attributes unique to one, and the pitfalls of mixing the two.",
  tasks: [
    {
      title: "Two Kinds of Attributes",
      points: 0,
      content: `
        <p>A <b>class attribute</b> is defined directly inside the class body and is shared by
        every instance of that class. An <b>instance attribute</b> is defined inside a method
        (usually <code class="inline">__init__</code>) using <code class="inline">self</code>, and
        belongs only to that one object.</p>
        <pre>class Dog:
    species = "Canis familiaris"  # class attribute

    def __init__(self, name):
        self.name = name  # instance attribute

rex = Dog("Rex")
fido = Dog("Fido")

print(rex.species, fido.species)  # both share the same value
print(rex.name, fido.name)        # each has its own value</pre>
        <p>Class attributes are useful for values that should be the same across all instances,
        like a species name or a default configuration.</p>
      `
    },
    {
      title: "Shadowing a Class Attribute",
      points: 15,
      content: `
        <p>If you assign to <code class="inline">self.attribute</code> inside a method, Python
        creates a new instance attribute that <b>shadows</b> the class attribute of the same name
        for that object only. The class attribute itself is unchanged.</p>
        <pre>class Dog:
    species = "Canis familiaris"

rex = Dog()
print(rex.species)      # "Canis familiaris" (from the class)

rex.species = "Wolf"    # creates an instance attribute
print(rex.species)      # "Wolf" (instance attribute)
print(Dog.species)      # "Canis familiaris" (class attribute unchanged)</pre>
        <p>Python looks up <code class="inline">rex.species</code> on the instance first, and
        only falls back to the class if it isn't found there.</p>
      `,
      question: "After rex.species = \'Wolf\', what value does Dog.species still hold?",
      answer: "Canis familiaris",
      hint: "Assigning through an instance never changes the class itself."
    },
    {
      title: "The Mutable Default Trap",
      points: 15,
      content: `
        <p>A common bug happens when a class attribute is a mutable object, like a list or dict.
        Because it is shared, mutating it through one instance affects every instance.</p>
        <pre>class ShoppingCart:
    items = []  # DANGER: shared by all carts

    def add(self, item):
        self.items.append(item)

cart1 = ShoppingCart()
cart2 = ShoppingCart()
cart1.add("apple")

print(cart2.items)  # ["apple"] -- leaked into cart2 too!</pre>
        <p>The fix is to create the list inside <code class="inline">__init__</code> so each
        instance gets its own:</p>
        <pre>class ShoppingCart:
    def __init__(self):
        self.items = []</pre>
      `,
      question: "Where should a mutable attribute be created so each instance gets its own copy?",
      answer: "__init__",
      hint: "It is the method that runs once per new object."
    },
    {
      title: "Changing a Class Attribute for Everyone",
      points: 15,
      content: `
        <p>To actually change the value shared by all instances, assign to the attribute through
        the class name, not through an instance.</p>
        <pre>class Dog:
    species = "Canis familiaris"

Dog.species = "Canis lupus familiaris"

rex = Dog()
fido = Dog()
print(rex.species, fido.species)  # both updated</pre>
        <p>This is different from assigning through an instance, which only affects that one
        object as shown earlier.</p>
      `,
      question: "What must you use as the target of the assignment to update a class attribute for every instance?",
      answer: "the class name",
      hint: "Not self, and not an existing instance variable."
    }
  ]
},
{
  id: "classmethods-staticmethods",
  title: "Class Methods & Static Methods",
  icon: "🧰",
  difficulty: "Medium",
  tags: ["oop", "classes", "methods"],
  description: "Learn when to use @classmethod and @staticmethod instead of an ordinary instance method.",
  tasks: [
    {
      title: "Three Kinds of Methods",
      points: 0,
      content: `
        <p>Python classes support three kinds of methods. A regular <b>instance method</b> takes
        <code class="inline">self</code> and operates on one object. A <b>class method</b>,
        marked with <code class="inline">@classmethod</code>, takes <code class="inline">cls</code>
        instead and operates on the class itself. A <b>static method</b>, marked with
        <code class="inline">@staticmethod</code>, takes neither and is just a regular function
        that happens to live inside the class.</p>
        <pre>class Pizza:
    def __init__(self, size):
        self.size = size

    def describe(self):          # instance method
        return f"A {self.size} inch pizza"

    @classmethod
    def small(cls):              # class method
        return cls(size=8)

    @staticmethod
    def is_valid_size(size):     # static method
        return size > 0

p = Pizza.small()
print(p.describe())
print(Pizza.is_valid_size(8))</pre>
      `
    },
    {
      title: "Alternative Constructors",
      points: 15,
      content: `
        <p>The most common use of <code class="inline">@classmethod</code> is to build
        alternative constructors: extra ways to create an instance besides the normal
        <code class="inline">__init__</code>. Because <code class="inline">cls</code> refers to
        the class, calling <code class="inline">cls(...)</code> creates a new instance.</p>
        <pre>class Pizza:
    def __init__(self, toppings):
        self.toppings = toppings

    @classmethod
    def margherita(cls):
        return cls(["tomato", "mozzarella"])

    @classmethod
    def from_csv(cls, csv_string):
        return cls(csv_string.split(","))

p1 = Pizza.margherita()
p2 = Pizza.from_csv("ham,mushroom")
print(p1.toppings, p2.toppings)</pre>
      `,
      question: "What is the conventional name of the first parameter of a classmethod?",
      answer: "cls",
      hint: "It plays the role self plays for instance methods, but for the class."
    },
    {
      title: "Static Methods for Utility Logic",
      points: 15,
      content: `
        <p>Use <code class="inline">@staticmethod</code> when a method's logic is related to the
        class conceptually, but doesn't need access to the instance or the class itself. It's
        essentially a plain function namespaced inside the class.</p>
        <pre>class TemperatureUtils:
    @staticmethod
    def celsius_to_fahrenheit(c):
        return c * 9 / 5 + 32

print(TemperatureUtils.celsius_to_fahrenheit(100))  # 212.0</pre>
        <p>Notice that <code class="inline">celsius_to_fahrenheit</code> never references
        <code class="inline">self</code> or <code class="inline">cls</code> -- a sign it should be
        static.</p>
      `,
      question: "Which decorator marks a method that needs neither self nor cls?",
      answer: "@staticmethod",
      hint: "It's the second of the two decorators introduced in this room."
    },
    {
      title: "Calling Through the Instance",
      points: 15,
      content: `
        <p>Both classmethods and staticmethods can be called on an instance too, not just on the
        class. Python still resolves them correctly because the decorator changes how the method
        is bound, regardless of how you access it.</p>
        <pre>class Pizza:
    @classmethod
    def small(cls):
        return cls()

p = Pizza()
p2 = p.small()      # works even though called on an instance
print(type(p2))</pre>
        <p>Even when called via <code class="inline">p.small()</code>, <code class="inline">cls</code>
        is still bound to the <code class="inline">Pizza</code> class, not to <code class="inline">p</code>.</p>
      `,
      question: "When p.small() is called, what does cls refer to inside the classmethod?",
      answer: "the class",
      hint: "Not the instance p -- classmethods always bind to the class."
    }
  ]
},
{
  id: "encapsulation-properties",
  title: "Encapsulation & Property Decorators",
  icon: "🔒",
  difficulty: "Medium",
  tags: ["oop", "encapsulation", "properties"],
  description: "Control how attributes are read and written using naming conventions and the @property decorator.",
  tasks: [
    {
      title: "Hiding Internal State",
      points: 0,
      content: `
        <p><b>Encapsulation</b> means keeping an object's internal details hidden and exposing a
        controlled interface to the outside. Python has no true private attributes, but uses
        naming conventions: a single leading underscore (<code class="inline">_balance</code>)
        signals "internal, please don't touch", and a double leading underscore
        (<code class="inline">__balance</code>) triggers <b>name mangling</b>, making it harder to
        access accidentally from outside the class.</p>
        <pre>class Account:
    def __init__(self, balance):
        self._balance = balance  # convention: internal use only

acc = Account(100)
print(acc._balance)  # still accessible, but discouraged</pre>
      `
    },
    {
      title: "Reading With @property",
      points: 15,
      content: `
        <p>The <code class="inline">@property</code> decorator turns a method into something that
        is accessed like a plain attribute, without parentheses. This lets you compute a value on
        the fly or add logic behind what looks like a simple attribute read.</p>
        <pre>class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def area(self):
        return 3.14159 * self._radius ** 2

c = Circle(2)
print(c.area)  # called like an attribute, no parentheses</pre>
      `,
      question: "Do you write parentheses when accessing a property, like c.area()?",
      answer: "no",
      hint: "A property is read exactly like a plain attribute."
    },
    {
      title: "Validating With a Setter",
      points: 15,
      content: `
        <p>Pairing a property with <code class="inline">@name.setter</code> lets you validate or
        transform a value before it's stored, while callers still just use plain assignment
        syntax.</p>
        <pre>class Circle:
    def __init__(self, radius):
        self.radius = radius  # goes through the setter below

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value &lt;= 0:
            raise ValueError("radius must be positive")
        self._radius = value

c = Circle(5)
c.radius = 10   # runs the validation
c.radius = -1   # raises ValueError</pre>
      `,
      question: "Which decorator do you write above a method to make it the setter for a property named radius?",
      answer: "@radius.setter",
      hint: "It pairs the property's name with the word setter, joined by a dot."
    },
    {
      title: "Read-Only Properties",
      points: 15,
      content: `
        <p>If you define a <code class="inline">@property</code> but never add a matching setter,
        the attribute becomes effectively read-only from outside the class -- attempting to
        assign to it raises an <code class="inline">AttributeError</code>.</p>
        <pre>class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def diameter(self):
        return self._radius * 2

c = Circle(3)
print(c.diameter)  # 6
c.diameter = 10    # AttributeError: can't set attribute</pre>
      `,
      question: "What exception is raised when you try to assign to a property that has no setter?",
      answer: "AttributeError",
      hint: "It's the same exception Python raises for any missing or unassignable attribute."
    }
  ]
},
{
  id: "multiple-inheritance-mro",
  title: "Multiple Inheritance & MRO",
  icon: "🧬",
  difficulty: "Hard",
  tags: ["oop", "inheritance", "mro"],
  description: "Understand how Python resolves method calls across multiple parent classes using the method resolution order.",
  tasks: [
    {
      title: "Inheriting From More Than One Class",
      points: 0,
      content: `
        <p>Python lets a class inherit from more than one parent, listed in the class definition
        separated by commas. The new class gains attributes and methods from every parent.</p>
        <pre>class Flyer:
    def move(self):
        return "flies through the air"

class Swimmer:
    def move(self):
        return "swims through water"

class Duck(Flyer, Swimmer):
    pass

d = Duck()
print(d.move())  # "flies through the air"</pre>
        <p>Because both parents define <code class="inline">move</code>, Python has to decide
        which one wins -- that decision follows the <b>Method Resolution Order</b> (MRO).</p>
      `
    },
    {
      title: "Reading the MRO",
      points: 20,
      content: `
        <p>Every class has an MRO: an ordered list of classes Python searches, in order, when
        looking up a method or attribute. You can inspect it directly with the
        <code class="inline">mro()</code> method or the <code class="inline">__mro__</code>
        attribute.</p>
        <pre>class Flyer:
    def move(self):
        return "flies"

class Swimmer:
    def move(self):
        return "swims"

class Duck(Flyer, Swimmer):
    pass

print(Duck.mro())
# [&lt;class Duck&gt;, &lt;class Flyer&gt;, &lt;class Swimmer&gt;, &lt;class object&gt;]</pre>
        <p>Because <code class="inline">Flyer</code> comes before <code class="inline">Swimmer</code>
        in <code class="inline">class Duck(Flyer, Swimmer)</code>, its version of
        <code class="inline">move</code> is found first.</p>
      `,
      question: "Which method or attribute lets you inspect the ordered list of classes Python searches for a lookup?",
      answer: "mro()",
      hint: "It can be called on the class, or read as the __mro__ attribute."
    },
    {
      title: "Cooperative super()",
      points: 20,
      content: `
        <p>Calling <code class="inline">super()</code> doesn't just call "the parent class" --
        it calls the <i>next</i> class in the MRO. In multiple inheritance, this lets every
        class's method run in turn, instead of only the first match winning.</p>
        <pre>class Base:
    def greet(self):
        print("Base greet")

class A(Base):
    def greet(self):
        print("A greet")
        super().greet()

class B(Base):
    def greet(self):
        print("B greet")
        super().greet()

class C(A, B):
    def greet(self):
        print("C greet")
        super().greet()

C().greet()
# C greet
# A greet
# B greet
# Base greet</pre>
        <p>Each <code class="inline">super().greet()</code> call moves to the next class in
        <code class="inline">C.mro()</code>, not necessarily to a direct parent.</p>
      `,
      question: "In cooperative multiple inheritance, does super() call the direct parent or the next class in the MRO?",
      answer: "the next class in the MRO",
      hint: "It's not always the same as the direct parent class."
    },
    {
      title: "The Diamond Problem",
      points: 20,
      content: `
        <p>A <b>diamond</b> shape happens when two classes both inherit from the same base class,
        and a fourth class inherits from both of them. Python's C3 linearization algorithm builds
        an MRO that visits each class exactly once, and always keeps a subclass before its
        parents.</p>
        <pre>class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "Woof"

class Cat(Animal):
    def speak(self):
        return "Meow"

class DogCatHybrid(Dog, Cat):
    pass

print(DogCatHybrid.mro())
# [DogCatHybrid, Dog, Cat, Animal, object]
print(DogCatHybrid().speak())  # "Woof"</pre>
        <p>Even though both <code class="inline">Dog</code> and <code class="inline">Cat</code>
        inherit from <code class="inline">Animal</code>, <code class="inline">Animal</code>
        appears only once in the MRO.</p>
      `,
      question: "In the diamond above, how many times does Animal appear in DogCatHybrid.mro()?",
      answer: "once",
      hint: "C3 linearization guarantees each class appears exactly one time."
    }
  ]
},
{
  id: "abstract-base-classes",
  title: "Abstract Base Classes",
  icon: "📐",
  difficulty: "Hard",
  tags: ["oop", "abc", "interfaces"],
  description: "Define interfaces that subclasses are required to implement using the abc module and @abstractmethod.",
  tasks: [
    {
      title: "Defining an Interface",
      points: 0,
      content: `
        <p>An <b>abstract base class</b> defines a set of methods that subclasses must implement,
        without providing a full implementation itself. Python provides this through the
        <code class="inline">abc</code> module: inherit from <code class="inline">ABC</code> and
        mark required methods with <code class="inline">@abstractmethod</code>.</p>
        <pre>from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side ** 2

    def perimeter(self):
        return self.side * 4

s = Square(4)
print(s.area(), s.perimeter())</pre>
      `
    },
    {
      title: "You Cannot Instantiate an Abstract Class",
      points: 20,
      content: `
        <p>If a class inherits from <code class="inline">ABC</code> and still has at least one
        unimplemented <code class="inline">@abstractmethod</code>, Python refuses to create
        instances of it. This enforces the interface instead of just documenting it.</p>
        <pre>from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

shape = Shape()
# TypeError: Can't instantiate abstract class Shape
# with abstract method area</pre>
      `,
      question: "What exception is raised when you try to instantiate a class that still has unimplemented abstract methods?",
      answer: "TypeError",
      hint: "It's the same exception Python raises for other construction errors."
    },
    {
      title: "Subclasses Must Implement Every Abstract Method",
      points: 20,
      content: `
        <p>A subclass only becomes instantiable once it overrides <b>every</b> abstract method
        from its parent. Missing even one keeps the subclass abstract too.</p>
        <pre>from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Circle(Shape):
    def __init__(self, r):
        self.r = r

    def area(self):
        return 3.14159 * self.r ** 2
    # perimeter() is missing!

c = Circle(2)
# TypeError: Can't instantiate abstract class Circle
# with abstract method perimeter</pre>
      `,
      question: "How many of Shape\'s abstract methods must Circle override before it can be instantiated?",
      answer: "all of them",
      hint: "Overriding only some of the abstract methods still leaves the subclass abstract."
    },
    {
      title: "ABCs Document Intent, Not Just Enforce It",
      points: 20,
      content: `
        <p>Beyond enforcement, an ABC communicates a contract: anything claiming to be a
        <code class="inline">Shape</code> promises to support <code class="inline">area()</code>
        and <code class="inline">perimeter()</code>. Code that works with shapes can rely on that
        promise without checking each concrete type.</p>
        <pre>def total_area(shapes):
    return sum(shape.area() for shape in shapes)

shapes = [Square(4), Circle(2)]
print(total_area(shapes))  # works for any Shape subclass</pre>
        <p>This is what lets <code class="inline">total_area</code> stay simple even as new shape
        subclasses are added later.</p>
      `,
      question: "What decorator, imported from abc, marks a method that subclasses must override?",
      answer: "@abstractmethod",
      hint: "It's applied above the method definition, alongside inheriting from ABC."
    }
  ]
},
{
  id: "polymorphism",
  title: "Polymorphism",
  icon: "🎭",
  difficulty: "Medium",
  tags: ["oop", "polymorphism"],
  description: "Let different classes respond to the same method call or function in their own way.",
  tasks: [
    {
      title: "Same Call, Different Behavior",
      points: 0,
      content: `
        <p><b>Polymorphism</b> means objects of different classes can be used through the same
        interface, each responding to the same method call in its own way. In Python this
        typically means several classes define a method with the same name but different bodies.</p>
        <pre>class Cat:
    def speak(self):
        return "Meow"

class Dog:
    def speak(self):
        return "Woof"

for animal in [Cat(), Dog()]:
    print(animal.speak())
# Meow
# Woof</pre>
        <p>The calling code doesn't need to know which exact class it has -- it just calls
        <code class="inline">speak()</code> and trusts each object to do the right thing.</p>
      `
    },
    {
      title: "Polymorphism Through a Common Base",
      points: 15,
      content: `
        <p>Polymorphism is often paired with inheritance: a base class declares a method, and each
        subclass overrides it with its own behavior. Code written against the base class works
        for any subclass without modification.</p>
        <pre>class Shape:
    def area(self):
        raise NotImplementedError

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w, self.h = w, h

    def area(self):
        return self.w * self.h

class Triangle(Shape):
    def __init__(self, base, height):
        self.base, self.height = base, height

    def area(self):
        return 0.5 * self.base * self.height

for shape in [Rectangle(3, 4), Triangle(3, 4)]:
    print(shape.area())</pre>
      `,
      question: "Do the Rectangle and Triangle classes need identical method bodies to be treated polymorphically?",
      answer: "no",
      hint: "Polymorphism is about a shared method name, not identical implementations."
    },
    {
      title: "Duck Typing",
      points: 15,
      content: `
        <p>Python's polymorphism doesn't require a shared base class at all. If an object has the
        method a piece of code expects, that's enough -- this is called <b>duck typing</b>: "if
        it walks like a duck and quacks like a duck, treat it as a duck."</p>
        <pre>class Duck:
    def quack(self):
        return "Quack!"

class Person:
    def quack(self):
        return "I'm quacking!"

def make_it_quack(thing):
    print(thing.quack())

make_it_quack(Duck())
make_it_quack(Person())  # works too, no shared base class needed</pre>
      `,
      question: "What is the informal name for relying on an object having the right method, regardless of its class?",
      answer: "duck typing",
      hint: "It comes from a saying about how you identify a duck."
    },
    {
      title: "Built-in Functions Are Polymorphic Too",
      points: 15,
      content: `
        <p>Many built-in functions are polymorphic: <code class="inline">len()</code> works on
        strings, lists, dicts, and any custom class that defines <code class="inline">__len__</code>.
        The function itself doesn't change -- it just calls whatever <code class="inline">__len__</code>
        the object provides.</p>
        <pre>class Playlist:
    def __init__(self, songs):
        self.songs = songs

    def __len__(self):
        return len(self.songs)

p = Playlist(["a", "b", "c"])
print(len(p))          # 3, using our __len__
print(len("hello"))    # 5, using str's own __len__</pre>
      `,
      question: "Which dunder method must a class define so that len() works on its instances?",
      answer: "__len__",
      hint: "Its name matches the built-in function it powers."
    }
  ]
},
{
  id: "operator-overloading",
  title: "Operator Overloading",
  icon: "➕",
  difficulty: "Hard",
  tags: ["oop", "operators", "dunder-methods"],
  description: "Customize how operators like plus, minus, and multiplication behave for your own classes using dunder methods.",
  tasks: [
    {
      title: "Operators Are Just Method Calls",
      points: 0,
      content: `
        <p>When Python sees <code class="inline">a + b</code>, it actually calls
        <code class="inline">a.__add__(b)</code> behind the scenes. By defining these special
        "dunder" (double underscore) methods on your own class, you decide what an operator means
        for your objects.</p>
        <pre>class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)  # Vector(4, 6)</pre>
      `
    },
    {
      title: "Overloading Subtraction and Multiplication",
      points: 20,
      content: `
        <p>Each operator maps to its own dunder method: <code class="inline">-</code> uses
        <code class="inline">__sub__</code>, and <code class="inline">*</code> uses
        <code class="inline">__mul__</code>. You can define as many of these as make sense for
        your class.</p>
        <pre>class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)

    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(5, 5)
v2 = Vector(2, 1)
print(v1 - v2)   # Vector(3, 4)
print(v1 * 2)    # Vector(10, 10)</pre>
      `,
      question: "Which dunder method is called when you write v1 * 2?",
      answer: "__mul__",
      hint: "It matches the multiplication symbol used in the example."
    },
    {
      title: "Comparison Operators",
      points: 20,
      content: `
        <p>Comparison operators are overloadable too: <code class="inline">&lt;</code> uses
        <code class="inline">__lt__</code>, <code class="inline">&lt;=</code> uses
        <code class="inline">__le__</code>, and so on. This lets custom objects be sorted or
        compared meaningfully.</p>
        <pre>class Money:
    def __init__(self, amount):
        self.amount = amount

    def __lt__(self, other):
        return self.amount &lt; other.amount

    def __repr__(self):
        return f"Money({self.amount})"

prices = [Money(30), Money(10), Money(20)]
print(sorted(prices))  # [Money(10), Money(20), Money(30)]</pre>
        <p><code class="inline">sorted()</code> works here because it relies on
        <code class="inline">__lt__</code> to decide ordering.</p>
      `,
      question: "Which dunder method does sorted() rely on to compare two Money objects?",
      answer: "__lt__",
      hint: "It corresponds to the less-than operator."
    },
    {
      title: "Overloading len() and Indexing",
      points: 20,
      content: `
        <p>Operator overloading extends past arithmetic: <code class="inline">__len__</code> makes
        <code class="inline">len(obj)</code> work, and <code class="inline">__getitem__</code>
        makes <code class="inline">obj[index]</code> work, letting a custom class feel like a
        built-in sequence.</p>
        <pre>class Playlist:
    def __init__(self, songs):
        self.songs = songs

    def __len__(self):
        return len(self.songs)

    def __getitem__(self, index):
        return self.songs[index]

p = Playlist(["Intro", "Verse", "Chorus"])
print(len(p))     # 3
print(p[1])       # "Verse"</pre>
      `,
      question: "Which dunder method must be defined so that p[1] works on a custom object?",
      answer: "__getitem__",
      hint: "Its name describes exactly what square-bracket indexing does: getting an item."
    }
  ]
},
{
  id: "eq-and-hash",
  title: "__eq__ and __hash__",
  icon: "🔑",
  difficulty: "Hard",
  tags: ["oop", "dunder-methods", "equality"],
  description: "Control equality comparisons for custom objects and learn what it takes to use them safely as dictionary keys.",
  tasks: [
    {
      title: "Default Equality Is Identity",
      points: 0,
      content: `
        <p>By default, two instances of a custom class are only equal if they are literally the
        same object in memory, because the default <code class="inline">__eq__</code> inherited
        from <code class="inline">object</code> compares identity, not contents.</p>
        <pre>class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y

p1 = Point(1, 2)
p2 = Point(1, 2)
print(p1 == p2)  # False, even though the data matches
print(p1 == p1)  # True, same object</pre>
      `
    },
    {
      title: "Comparing By Value With __eq__",
      points: 20,
      content: `
        <p>Overriding <code class="inline">__eq__</code> lets you define equality based on an
        object's data instead of its identity. Python calls this method whenever
        <code class="inline">==</code> is used between two instances.</p>
        <pre>class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __eq__(self, other):
        if not isinstance(other, Point):
            return NotImplemented
        return self.x == other.x and self.y == other.y

p1 = Point(1, 2)
p2 = Point(1, 2)
print(p1 == p2)  # True now</pre>
      `,
      question: "Which dunder method does Python call when you write p1 == p2?",
      answer: "__eq__",
      hint: "Its name is short for equals."
    },
    {
      title: "Hashability and Dictionary Keys",
      points: 20,
      content: `
        <p>Defining <code class="inline">__eq__</code> without also defining
        <code class="inline">__hash__</code> makes your objects <b>unhashable</b> -- Python sets
        <code class="inline">__hash__</code> to <code class="inline">None</code> automatically in
        that case, so the object can no longer be used as a dict key or put in a set.</p>
        <pre>class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __eq__(self, other):
        return isinstance(other, Point) and (self.x, self.y) == (other.x, other.y)

p = Point(1, 2)
d = {p: "origin-ish"}
# TypeError: unhashable type: 'Point'</pre>
        <p>The fix is to also define <code class="inline">__hash__</code>, usually based on the
        same fields used in <code class="inline">__eq__</code>:</p>
        <pre>    def __hash__(self):
        return hash((self.x, self.y))</pre>
      `,
      question: "What exception is raised when you try to use an unhashable object as a dict key?",
      answer: "TypeError",
      hint: "It's the same category of error raised for other type mismatches."
    },
    {
      title: "The Equal Objects, Equal Hash Rule",
      points: 20,
      content: `
        <p>Python requires that if two objects are equal (<code class="inline">==</code>), they
        must have the same hash value. Breaking this rule causes subtle bugs: equal objects could
        end up in different "buckets" of a set or dict, so lookups silently fail.</p>
        <pre>class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __eq__(self, other):
        return isinstance(other, Point) and (self.x, self.y) == (other.x, other.y)

    def __hash__(self):
        return hash((self.x, self.y))  # matches the fields used in __eq__

points = {Point(1, 2), Point(1, 2)}
print(len(points))  # 1 -- treated as duplicates, as expected</pre>
      `,
      question: "If two objects are equal, what must be true about their hash values?",
      answer: "they must be equal",
      hint: "It's the core rule linking __eq__ and __hash__."
    }
  ]
},
{
  id: "repr-vs-str",
  title: "__repr__ vs __str__",
  icon: "🖨️",
  difficulty: "Medium",
  tags: ["oop", "dunder-methods", "strings"],
  description: "Understand the difference between the developer-facing and user-facing string representations of an object.",
  tasks: [
    {
      title: "Two Ways to Turn an Object Into Text",
      points: 0,
      content: `
        <p>Python has two dunder methods for converting an object to a string.
        <code class="inline">__str__</code> is meant to be readable, used by
        <code class="inline">print()</code> and <code class="inline">str()</code>.
        <code class="inline">__repr__</code> is meant to be unambiguous and precise, aimed at
        developers, and is used by the interactive shell and <code class="inline">repr()</code>.</p>
        <pre>class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __str__(self):
        return f"({self.x}, {self.y})"

    def __repr__(self):
        return f"Point(x={self.x}, y={self.y})"

p = Point(1, 2)
print(p)        # ( 1, 2 ) -- uses __str__
print(repr(p))  # Point(x=1, y=2) -- uses __repr__</pre>
      `
    },
    {
      title: "__str__ for Humans",
      points: 15,
      content: `
        <p><code class="inline">__str__</code> should give a clean, human-friendly summary, the
        kind you'd want to show directly to a user. It's called implicitly whenever the object is
        passed to <code class="inline">print()</code> or converted with <code class="inline">str()</code>.</p>
        <pre>class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius

    def __str__(self):
        return f"{self.celsius}°C"

t = Temperature(24)
print(t)             # 24°C
print(f"It's {t} outside")  # uses __str__ inside the f-string too</pre>
      `,
      question: "Which built-in function implicitly calls __str__ on an object?",
      answer: "print()",
      hint: "It's the most common way objects end up displayed to a user."
    },
    {
      title: "__repr__ for Developers",
      points: 15,
      content: `
        <p><code class="inline">__repr__</code> should ideally be precise enough that, if
        possible, you could paste it back into Python to recreate the object. It's what you see
        when you type a variable name alone in the interactive interpreter, or when an object
        appears inside a list being printed.</p>
        <pre>class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __repr__(self):
        return f"Point(x={self.x}, y={self.y})"

points = [Point(1, 2), Point(3, 4)]
print(points)  # [Point(x=1, y=2), Point(x=3, y=4)] -- uses __repr__ for each item</pre>
      `,
      question: "When a list of custom objects is printed, which dunder method is used to render each item?",
      answer: "__repr__",
      hint: "Containers display their elements using this one, not __str__."
    },
    {
      title: "The Fallback Rule",
      points: 15,
      content: `
        <p>If a class defines <code class="inline">__repr__</code> but not
        <code class="inline">__str__</code>, Python falls back to using
        <code class="inline">__repr__</code> whenever <code class="inline">__str__</code> would be
        needed. The reverse is not true: defining only <code class="inline">__str__</code> does
        not give you a nice <code class="inline">__repr__</code> for free.</p>
        <pre>class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y

    def __repr__(self):
        return f"Point(x={self.x}, y={self.y})"

p = Point(1, 2)
print(p)  # Point(x=1, y=2) -- falls back to __repr__, no __str__ defined</pre>
      `,
      question: "If a class defines only __repr__, what does print(obj) display?",
      answer: "the __repr__ output",
      hint: "Python falls back to the developer-facing representation."
    }
  ]
},
{
  id: "composition-vs-inheritance",
  title: "Composition vs Inheritance",
  icon: "🧩",
  difficulty: "Medium",
  tags: ["oop", "design", "composition"],
  description: "Decide when to build a class from smaller parts versus extending a parent class, and recognize the tradeoffs of each.",
  tasks: [
    {
      title: "Is-A Versus Has-A",
      points: 0,
      content: `
        <p><b>Inheritance</b> models an "is-a" relationship: a <code class="inline">Car</code> is
        a <code class="inline">Vehicle</code>. <b>Composition</b> models a "has-a" relationship: a
        <code class="inline">Car</code> has an <code class="inline">Engine</code>. Composition
        builds a class out of other objects as attributes, rather than inheriting from them.</p>
        <pre>class Engine:
    def start(self):
        return "Engine started"

class Car:
    def __init__(self):
        self.engine = Engine()  # Car HAS an Engine

    def start(self):
        return self.engine.start()

c = Car()
print(c.start())</pre>
      `
    },
    {
      title: "Building With Composition",
      points: 15,
      content: `
        <p>With composition, a class delegates part of its behavior to another object it holds as
        an attribute. This keeps each class focused, and lets you swap out a part (like the
        engine) without changing the rest.</p>
        <pre>class ElectricEngine:
    def start(self):
        return "Silent electric hum"

class Car:
    def __init__(self, engine):
        self.engine = engine  # injected, could be any engine-like object

    def start(self):
        return self.engine.start()

tesla = Car(ElectricEngine())
print(tesla.start())  # "Silent electric hum"</pre>
      `,
      question: "In composition, is the related object stored as an attribute or inherited from as a parent class?",
      answer: "as an attribute",
      hint: "Composition is about holding another object, not extending it."
    },
    {
      title: "Building With Inheritance",
      points: 15,
      content: `
        <p>Inheritance is appropriate when a subclass genuinely <b>is a</b> more specific version
        of its parent, and should share the parent's interface and behavior directly.</p>
        <pre>class Vehicle:
    def __init__(self, wheels):
        self.wheels = wheels

    def describe(self):
        return f"A vehicle with {self.wheels} wheels"

class Car(Vehicle):
    def __init__(self):
        super().__init__(wheels=4)

class Motorcycle(Vehicle):
    def __init__(self):
        super().__init__(wheels=2)

print(Car().describe())
print(Motorcycle().describe())</pre>
      `,
      question: "Which relationship word describes when inheritance is the right choice: is-a or has-a?",
      answer: "is-a",
      hint: "It's the relationship that justifies a subclass extending a parent."
    },
    {
      title: "Why Composition Is Often Preferred",
      points: 15,
      content: `
        <p>A well-known design guideline is <b>"favor composition over inheritance"</b>.
        Inheritance creates a tight, permanent coupling between parent and child classes, and deep
        inheritance chains become hard to change safely. Composition is more flexible: you can
        swap a part at runtime, and each class stays smaller and easier to test in isolation.</p>
        <pre># Swapping behavior at runtime is easy with composition:
car.engine = ElectricEngine()  # change behavior without touching Car's class</pre>
        <p>Inheritance still has its place -- especially for narrow, stable "is-a" relationships
        -- but composition is usually the safer default for combining behaviors.</p>
      `,
      question: "What is the well-known guideline: favor what, over inheritance?",
      answer: "composition",
      hint: "It's the concept introduced in the first task of this room."
    }
  ]
},
{
  id: "mixins",
  title: "Mixins",
  icon: "🧵",
  difficulty: "Hard",
  tags: ["oop", "inheritance", "mixins"],
  description: "Add small, reusable, focused behaviors to classes without building deep inheritance chains.",
  tasks: [
    {
      title: "What Is a Mixin",
      points: 0,
      content: `
        <p>A <b>mixin</b> is a small class designed to add one specific piece of behavior to other
        classes through multiple inheritance, without being meant to stand on its own. Mixins
        usually don't define <code class="inline">__init__</code> and are never instantiated
        directly -- they're always combined with a "real" base class.</p>
        <pre>class SerializableMixin:
    def to_dict(self):
        return self.__dict__

class User(SerializableMixin):
    def __init__(self, name, age):
        self.name = name
        self.age = age

u = User("Ada", 30)
print(u.to_dict())  # {"name": "Ada", "age": 30}</pre>
      `
    },
    {
      title: "One Mixin, Many Classes",
      points: 20,
      content: `
        <p>The value of a mixin is reuse: the same small behavior can be dropped into many
        unrelated classes, each gaining that capability without duplicating code.</p>
        <pre>class SerializableMixin:
    def to_dict(self):
        return self.__dict__

class User(SerializableMixin):
    def __init__(self, name):
        self.name = name

class Product(SerializableMixin):
    def __init__(self, price):
        self.price = price

print(User("Ada").to_dict())
print(Product(9.99).to_dict())</pre>
      `,
      question: "Is a mixin typically meant to be instantiated on its own?",
      answer: "no",
      hint: "It's designed to be combined with another class, not used alone."
    },
    {
      title: "Combining a Mixin With a Base Class",
      points: 20,
      content: `
        <p>A class can combine one real base class with one or more mixins, listing the mixin
        after or before the base depending on the desired method resolution order.</p>
        <pre>class LoggingMixin:
    def log(self, message):
        print(f"[LOG] {message}")

class Animal:
    def __init__(self, name):
        self.name = name

class Dog(LoggingMixin, Animal):
    def bark(self):
        self.log(f"{self.name} is barking")

d = Dog("Rex")
d.bark()  # [LOG] Rex is barking</pre>
        <p><code class="inline">Dog</code> gets logging behavior "for free" from
        <code class="inline">LoggingMixin</code>, on top of the real
        <code class="inline">Animal</code> behavior.</p>
      `,
      question: "Can a single class combine more than one mixin at the same time?",
      answer: "yes",
      hint: "Python's multiple inheritance allows listing several parent classes."
    },
    {
      title: "Naming Convention and Focus",
      points: 20,
      content: `
        <p>By convention, mixin class names often end in <code class="inline">Mixin</code> to
        signal their role at a glance. Good mixins stay narrow and focused on a single piece of
        behavior -- this keeps them easy to combine safely with many different base classes.</p>
        <pre>class ComparableMixin:
    def __lt__(self, other):
        return self.value &lt; other.value

class Score(ComparableMixin):
    def __init__(self, value):
        self.value = value

print(Score(10) &lt; Score(20))  # True</pre>
      `,
      question: "What suffix do mixin class names conventionally end with?",
      answer: "Mixin",
      hint: "It's the word used throughout this room's title and examples."
    }
  ]
},
{
  id: "dataclasses",
  title: "Dataclasses",
  icon: "📦",
  difficulty: "Medium",
  tags: ["oop", "dataclasses", "classes"],
  description: "Reduce boilerplate in classes that mainly hold data by using the @dataclass decorator.",
  tasks: [
    {
      title: "Less Boilerplate for Data-Holding Classes",
      points: 0,
      content: `
        <p>Classes that mainly exist to store a few named values usually need an
        <code class="inline">__init__</code>, a <code class="inline">__repr__</code>, and
        sometimes <code class="inline">__eq__</code> -- all repetitive to write by hand. The
        <code class="inline">@dataclass</code> decorator from the
        <code class="inline">dataclasses</code> module generates all of that automatically from
        type-annotated class attributes.</p>
        <pre>from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

p1 = Point(1, 2)
p2 = Point(1, 2)
print(p1)          # Point(x=1, y=2) -- __repr__ generated
print(p1 == p2)    # True -- __eq__ generated</pre>
      `
    },
    {
      title: "Auto-Generated __init__ and __repr__",
      points: 15,
      content: `
        <p>Notice that no <code class="inline">__init__</code> was written at all, yet
        <code class="inline">Point(1, 2)</code> works, using the annotated fields in order as the
        constructor's parameters. The generated <code class="inline">__repr__</code> is also far
        more readable than the default one from a plain class.</p>
        <pre>from dataclasses import dataclass

@dataclass
class Book:
    title: str
    pages: int

b = Book("Python 101", 250)
print(b.title, b.pages)
print(b)  # Book(title='Python 101', pages=250)</pre>
      `,
      question: "What must you add above the class annotations to trigger the automatic generation?",
      answer: "@dataclass",
      hint: "It's the decorator name introduced at the start of this room."
    },
    {
      title: "Default Values",
      points: 15,
      content: `
        <p>Fields can be given default values directly, just like in a normal function signature.
        For mutable defaults like lists, use <code class="inline">field(default_factory=list)</code>
        instead of writing <code class="inline">= []</code> directly, to avoid the shared-mutable
        pitfall.</p>
        <pre>from dataclasses import dataclass, field

@dataclass
class Task:
    name: str
    done: bool = False
    tags: list = field(default_factory=list)

t = Task("Write report")
print(t)  # Task(name='Write report', done=False, tags=[])</pre>
      `,
      question: "What function, used with default_factory, gives a dataclass field a safe mutable default like an empty list?",
      answer: "field()",
      hint: "It's imported from the dataclasses module alongside @dataclass."
    },
    {
      title: "Making a Dataclass Immutable",
      points: 15,
      content: `
        <p>Passing <code class="inline">frozen=True</code> to the decorator makes instances
        immutable -- attempting to assign a new value to any field after creation raises an
        error, similar to a namedtuple.</p>
        <pre>from dataclasses import dataclass

@dataclass(frozen=True)
class Point:
    x: int
    y: int

p = Point(1, 2)
p.x = 5
# dataclasses.FrozenInstanceError: cannot assign to field 'x'</pre>
      `,
      question: "Which keyword argument to @dataclass makes its instances immutable?",
      answer: "frozen",
      hint: "It is set to True inside the decorator's parentheses."
    }
  ]
},
{
  id: "enums",
  title: "Enums",
  icon: "🔢",
  difficulty: "Medium",
  tags: ["oop", "enum", "constants"],
  description: "Define a fixed, readable set of named constants using the enum module instead of plain strings or numbers.",
  tasks: [
    {
      title: "Naming a Fixed Set of Values",
      points: 0,
      content: `
        <p>An <b>enum</b> (enumeration) defines a fixed group of named constants. Instead of
        scattering magic strings like <code class="inline">"pending"</code> or magic numbers
        through your code, you group related values into one class that inherits from
        <code class="inline">enum.Enum</code>.</p>
        <pre>from enum import Enum

class Status(Enum):
    PENDING = 1
    ACTIVE = 2
    DONE = 3

order_status = Status.ACTIVE
print(order_status)        # Status.ACTIVE
print(order_status.name)   # "ACTIVE"
print(order_status.value)  # 2</pre>
      `
    },
    {
      title: "Names and Values",
      points: 15,
      content: `
        <p>Every enum member has a <code class="inline">.name</code> (the identifier you wrote)
        and a <code class="inline">.value</code> (whatever was assigned to it). You can also look
        up a member by its value using <code class="inline">Status(2)</code>.</p>
        <pre>from enum import Enum

class Status(Enum):
    PENDING = 1
    ACTIVE = 2
    DONE = 3

s = Status(2)
print(s)         # Status.ACTIVE
print(s.name)    # "ACTIVE"
print(s.value)   # 2</pre>
      `,
      question: "Which attribute of an enum member gives back the underlying assigned value, like 2?",
      answer: ".value",
      hint: "It's paired with .name, which instead gives the identifier text."
    },
    {
      title: "Iterating and Comparing",
      points: 15,
      content: `
        <p>Enum classes are iterable, listing every member in definition order, and members
        compare with <code class="inline">==</code> or <code class="inline">is</code> by identity,
        never by accident matching a plain number or string.</p>
        <pre>from enum import Enum

class Status(Enum):
    PENDING = 1
    ACTIVE = 2
    DONE = 3

for status in Status:
    print(status)

print(Status.ACTIVE == Status.ACTIVE)  # True
print(Status.ACTIVE == 2)              # False -- not the same type</pre>
      `,
      question: "Does Status.ACTIVE == 2 evaluate to True or False?",
      answer: "False",
      hint: "An enum member is not automatically equal to its raw underlying value."
    },
    {
      title: "Auto-Numbering With auto()",
      points: 15,
      content: `
        <p>When the actual numeric value doesn't matter, <code class="inline">auto()</code> from
        the same module assigns increasing integers automatically, so you don't have to pick
        values by hand.</p>
        <pre>from enum import Enum, auto

class Color(Enum):
    RED = auto()
    GREEN = auto()
    BLUE = auto()

print(Color.RED.value)    # 1
print(Color.GREEN.value)  # 2
print(Color.BLUE.value)   # 3</pre>
      `,
      question: "Which function, imported alongside Enum, auto-assigns increasing values to members?",
      answer: "auto()",
      hint: "Its name describes exactly what it does: automatic numbering."
    }
  ]
},
{
  id: "slots",
  title: "__slots__",
  icon: "🗜️",
  difficulty: "Hard",
  tags: ["oop", "memory", "slots"],
  description: "Save memory and restrict which attributes instances can have by defining __slots__ on a class.",
  tasks: [
    {
      title: "The Hidden Cost of __dict__",
      points: 0,
      content: `
        <p>By default, every instance of a Python class carries its own <code class="inline">__dict__</code>,
        a dictionary that stores its instance attributes. This is flexible -- you can add new
        attributes at any time -- but it uses more memory than strictly necessary when you create
        millions of small objects.</p>
        <pre>class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
print(p.__dict__)  # {"x": 1, "y": 2}
p.z = 3             # works fine, __dict__ grows
print(p.__dict__)  # {"x": 1, "y": 2, "z": 3}</pre>
      `
    },
    {
      title: "Declaring __slots__",
      points: 20,
      content: `
        <p>Defining <code class="inline">__slots__</code> as a list of attribute names tells
        Python to skip creating a <code class="inline">__dict__</code> for instances, and instead
        allocate a fixed, more compact structure for just those attributes.</p>
        <pre>class Point:
    __slots__ = ("x", "y")

    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
print(p.x, p.y)
print(p.__dict__)
# AttributeError: 'Point' object has no attribute '__dict__'</pre>
      `,
      question: "What class-level name do you assign a tuple or list of attribute names to, to enable slots?",
      answer: "__slots__",
      hint: "It's the exact name used as this room's title."
    },
    {
      title: "Attributes Not in __slots__ Are Rejected",
      points: 20,
      content: `
        <p>Once <code class="inline">__slots__</code> is defined, trying to set an attribute that
        wasn't listed raises an <code class="inline">AttributeError</code>, even though it would
        have worked fine on a regular class.</p>
        <pre>class Point:
    __slots__ = ("x", "y")

    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
p.z = 3
# AttributeError: 'Point' object has no attribute 'z'</pre>
        <p>This restriction is exactly what saves memory: Python no longer needs a flexible
        dictionary per instance.</p>
      `,
      question: "What exception is raised when you try to set an attribute not listed in __slots__?",
      answer: "AttributeError",
      hint: "It's the same exception raised for any missing attribute."
    },
    {
      title: "Slots and Inheritance",
      points: 20,
      content: `
        <p>If a subclass doesn't also define <code class="inline">__slots__</code>, it gets a
        <code class="inline">__dict__</code> again anyway, undoing the memory savings. To keep the
        benefit through an inheritance chain, every class in the chain needs its own
        <code class="inline">__slots__</code>.</p>
        <pre>class Base:
    __slots__ = ("x",)

class Derived(Base):
    __slots__ = ("y",)  # must declare its own slots too

d = Derived()
d.x = 1
d.y = 2
print(d.x, d.y)</pre>
      `,
      question: "If a subclass omits its own __slots__, does it get a __dict__ back?",
      answer: "yes",
      hint: "Only defining __slots__ at every level of the hierarchy preserves the savings."
    }
  ]
},
{
  id: "custom-exceptions",
  title: "Custom Exceptions",
  icon: "🚨",
  difficulty: "Medium",
  tags: ["oop", "exceptions", "error-handling"],
  description: "Define your own exception classes to make error handling in your programs clearer and more specific.",
  tasks: [
    {
      title: "Subclassing Exception",
      points: 0,
      content: `
        <p>You can define your own exception types by creating a class that inherits from
        <code class="inline">Exception</code> (or one of its subclasses). This lets you raise and
        catch errors specific to your own program's logic, instead of relying only on generic
        built-in exceptions.</p>
        <pre>class InsufficientFundsError(Exception):
    pass

def withdraw(balance, amount):
    if amount &gt; balance:
        raise InsufficientFundsError("Not enough funds")
    return balance - amount

withdraw(100, 500)
# InsufficientFundsError: Not enough funds</pre>
      `
    },
    {
      title: "Raising and Catching Custom Exceptions",
      points: 15,
      content: `
        <p>Custom exceptions are raised and caught exactly like built-in ones, with
        <code class="inline">raise</code> and <code class="inline">try</code>/<code class="inline">except</code>.
        Being specific about the exception type lets calling code handle different failures
        differently.</p>
        <pre>class InsufficientFundsError(Exception):
    pass

def withdraw(balance, amount):
    if amount &gt; balance:
        raise InsufficientFundsError("Not enough funds")
    return balance - amount

try:
    withdraw(100, 500)
except InsufficientFundsError as e:
    print("Caught:", e)</pre>
      `,
      question: "Which keyword do you use to trigger a custom exception?",
      answer: "raise",
      hint: "It's the same keyword used for any built-in exception."
    },
    {
      title: "Adding Extra Data to an Exception",
      points: 15,
      content: `
        <p>A custom exception can define its own <code class="inline">__init__</code> to carry
        extra information beyond a plain message, such as the amount that was missing.</p>
        <pre>class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        message = f"Tried to withdraw {amount}, only {balance} available"
        super().__init__(message)

try:
    raise InsufficientFundsError(100, 500)
except InsufficientFundsError as e:
    print(e.balance, e.amount)
    print(e)</pre>
        <p>Calling <code class="inline">super().__init__(message)</code> still sets up the normal
        string representation of the exception.</p>
      `,
      question: "Which method do custom exceptions call with super() to set up the standard message text?",
      answer: "__init__",
      hint: "It's the same constructor method used by every Python class."
    },
    {
      title: "Building an Exception Hierarchy",
      points: 15,
      content: `
        <p>You can create a family of related custom exceptions by having them share a common
        parent, so calling code can catch them broadly or specifically as needed.</p>
        <pre>class AppError(Exception):
    pass

class InsufficientFundsError(AppError):
    pass

class InvalidAccountError(AppError):
    pass

try:
    raise InsufficientFundsError("Not enough funds")
except AppError as e:
    print("Caught something app-related:", e)</pre>
        <p>Catching <code class="inline">AppError</code> here works even though the raised
        exception was the more specific <code class="inline">InsufficientFundsError</code>.</p>
      `,
      question: "In the hierarchy above, what is the shared parent class of both specific exceptions?",
      answer: "AppError",
      hint: "It's the class both InsufficientFundsError and InvalidAccountError inherit from."
    }
  ]
},
{
  id: "singleton-pattern",
  title: "Singleton Pattern",
  icon: "🧿",
  difficulty: "Hard",
  tags: ["oop", "design-patterns", "singleton"],
  description: "Ensure a class has only one instance across a whole program, and understand a few different ways to implement it in Python.",
  tasks: [
    {
      title: "Only One Instance, Ever",
      points: 0,
      content: `
        <p>The <b>Singleton pattern</b> restricts a class to having exactly one instance for the
        entire life of a program, and provides a single global point of access to it. It's often
        used for things like configuration objects, logging, or a shared connection pool, where
        having two separate instances would cause inconsistency.</p>
        <pre>class Config:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

a = Config()
b = Config()
print(a is b)  # True -- same object</pre>
      `
    },
    {
      title: "Controlling Creation With __new__",
      points: 20,
      content: `
        <p>While <code class="inline">__init__</code> initializes an already-created object,
        <code class="inline">__new__</code> is the method that actually creates it. Overriding
        <code class="inline">__new__</code> lets a class intercept object creation itself and
        return an existing instance instead of building a new one.</p>
        <pre>class Config:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            print("Creating the one and only instance")
            cls._instance = super().__new__(cls)
        return cls._instance

a = Config()  # prints the message
b = Config()  # does not print -- reuses the existing instance</pre>
      `,
      question: "Which dunder method is overridden to control whether a brand new object gets created at all?",
      answer: "__new__",
      hint: "It runs before __init__ and is responsible for allocating the object."
    },
    {
      title: "A Simpler Alternative: the Module Itself",
      points: 20,
      content: `
        <p>Because a Python module is only ever imported once and then cached, module-level
        objects act as natural singletons without any special class logic at all. Many real
        Python codebases use this instead of a __new__-based singleton class.</p>
        <pre># settings.py
class _Settings:
    def __init__(self):
        self.debug = False

settings = _Settings()  # created once, when the module is first imported

# other_file.py
from settings import settings
settings.debug = True  # every importer sees the same shared object</pre>
      `,
      question: "How many times is a given module actually executed across a running program, no matter how many files import it?",
      answer: "once",
      hint: "Python caches modules the first time they're imported."
    },
    {
      title: "A Word of Caution",
      points: 20,
      content: `
        <p>Singletons introduce global, shared state, which can make code harder to test -- tests
        can accidentally affect each other through the same shared instance -- and they aren't
        automatically safe across multiple threads without extra locking. Many designers treat the
        singleton pattern as a tool to reach for sparingly, and prefer passing a single shared
        instance explicitly (dependency injection) when possible.</p>
        <pre># explicit sharing instead of a hidden singleton:
def process(data, config):
    if config.debug:
        print("Processing:", data)

shared_config = Config()
process([1, 2, 3], shared_config)</pre>
      `,
      question: "Does a naive __new__-based singleton automatically protect against issues across multiple threads?",
      answer: "no",
      hint: "Thread safety needs extra handling, such as a lock, on top of the basic pattern."
    }
  ]
},

  /* ---- batch-05.js ---- */
  {
  id: "exception-chaining",
  title: "Exception Chaining",
  icon: "🔗",
  difficulty: "Hard",
  tags: ["errors", "debugging", "exceptions"],
  description: "Learn how raise ... from preserves the original exception as context when you wrap and re-raise a new, more descriptive error.",
  tasks: [
    {
      title: "Implicit Exception Chaining",
      points: 0,
      content: `
    <p>When an exception occurs while handling another exception, Python automatically links them together. This is called <b>implicit exception chaining</b>, and it happens whenever you raise a new exception inside an except block.</p>
    <pre>try:
    1 / 0
except ZeroDivisionError:
    raise ValueError('something went wrong')</pre>
    <p>The traceback will show both errors, with a message like 'During handling of the above exception, another exception occurred', so you never lose the original cause.</p>
  `
    },
    {
      title: "Explicit Chaining with raise ... from",
      points: 20,
      content: `
    <p>You can make the link between two exceptions explicit with the <code class="inline">raise ... from ...</code> syntax. This tells Python exactly which exception caused the new one, which is clearer than relying on implicit chaining.</p>
    <pre>try:
    int('not a number')
except ValueError as err:
    raise RuntimeError('failed to parse input') from err</pre>
    <p>The traceback now shows 'The above exception was the direct cause of the following exception', pointing straight at the real root cause.</p>
  `,
      question: "Which keyword follows 'raise NewError()' to explicitly link it to the original exception?",
      answer: "from",
      hint: "It's the same word used in import statements."
    },
    {
      title: "Suppressing Context with from None",
      points: 20,
      content: `
    <p>Sometimes the original exception is just noise, for example a low-level detail the caller doesn't need to see. You can hide it entirely by chaining from <code class="inline">None</code>.</p>
    <pre>try:
    1 / 0
except ZeroDivisionError:
    raise ValueError('bad input') from None</pre>
    <p>This suppresses the 'During handling of...' message, producing a clean traceback that only shows the new exception.</p>
  `,
      question: "What do you chain from to completely hide the original exception in the traceback?",
      answer: "None",
      hint: "It's a Python built-in singleton, not a string."
    },
    {
      title: "Inspecting __cause__ and __context__",
      points: 25,
      content: `
    <p>Every exception object stores its chaining information as attributes. <code class="inline">__cause__</code> holds the exception passed explicitly via <code class="inline">from</code>, while <code class="inline">__context__</code> holds whatever exception was active implicitly.</p>
    <pre>try:
    try:
        1 / 0
    except ZeroDivisionError as e:
        raise ValueError('wrapped') from e
except ValueError as final:
    print(final.__cause__)</pre>
    <p>Inspecting these attributes lets you write logging code that reports the full chain of failures, not just the outermost one.</p>
  `,
      question: "Which attribute holds the exception explicitly given after from?",
      answer: "__cause__",
      hint: "It starts and ends with double underscores."
    }
  ]
},
{
  id: "context-managers",
  title: "Context Managers (with statement)",
  icon: "🔧",
  difficulty: "Medium",
  tags: ["debugging", "errors", "context-managers"],
  description: "Understand how the with statement automatically manages setup and teardown, closing files and releasing resources even when errors occur.",
  tasks: [
    {
      title: "The with Statement",
      points: 0,
      content: `
    <p>The <code class="inline">with</code> statement wraps a block of code with automatic setup and teardown logic, most commonly used for closing files safely even if an error occurs.</p>
    <pre>with open('data.txt', 'w') as f:
    f.write('hello')
print(f.closed)</pre>
    <p>Once the block ends, the file is closed automatically, whether the code inside succeeded or raised an exception.</p>
  `
    },
    {
      title: "Why with Beats Manual Cleanup",
      points: 15,
      content: `
    <p>Without <code class="inline">with</code>, you must remember to call <code class="inline">close()</code> yourself, and an exception between opening and closing would skip that call entirely.</p>
    <pre>f = open('data.txt', 'w')
try:
    f.write('hello')
finally:
    f.close()</pre>
    <p>The <code class="inline">with</code> statement replaces this entire try/finally pattern with a single, safer line.</p>
  `,
      question: "What does 'with open(...) as f' assign to f?",
      answer: "the file object",
      hint: "It's the return value of open()."
    },
    {
      title: "Multiple Context Managers",
      points: 15,
      content: `
    <p>You can open multiple resources in a single <code class="inline">with</code> statement by separating them with commas. Each one is properly closed when the block exits.</p>
    <pre>with open('in.txt') as src, open('out.txt', 'w') as dst:
    dst.write(src.read())</pre>
    <p>This avoids nesting several separate with blocks when you need more than one resource at once.</p>
  `,
      question: "What character separates multiple context managers on the same with line?",
      answer: ",",
      hint: "It's the same character used to separate list items."
    },
    {
      title: "Beyond Files",
      points: 20,
      content: `
    <p>The <code class="inline">with</code> statement isn't just for files. Many objects, like thread locks or database connections, support it too, automatically acquiring and releasing a resource.</p>
    <pre>import threading

lock = threading.Lock()

with lock:
    print('critical section')</pre>
    <p>Whatever object follows with must implement the context manager protocol, which you'll build yourself in the next room.</p>
  `,
      question: "Which module provides the Lock class used in this example?",
      answer: "threading",
      hint: "It's also used for running code concurrently."
    }
  ]
},
{
  id: "custom-context-managers",
  title: "Writing Your Own Context Manager",
  icon: "🛠️",
  difficulty: "Hard",
  tags: ["debugging", "errors", "context-managers"],
  description: "Build your own context managers with __enter__ and __exit__, or the simpler contextlib.contextmanager decorator, to manage custom resources.",
  tasks: [
    {
      title: "The __enter__/__exit__ Protocol",
      points: 0,
      content: `
    <p>A context manager is any object that implements two special methods: <code class="inline">__enter__</code>, which runs at the start of the with block, and <code class="inline">__exit__</code>, which runs at the end, even if an exception occurred.</p>
    <pre>class Timer:
    def __enter__(self):
        print('starting')
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print('stopping')

with Timer():
    print('doing work')</pre>
    <p>The value returned by <code class="inline">__enter__</code> is what gets bound to the 'as' variable, if one is used.</p>
  `
    },
    {
      title: "Suppressing Exceptions",
      points: 20,
      content: `
    <p>The <code class="inline">__exit__</code> method receives the exception type, value, and traceback if an error occurred inside the block. Returning <code class="inline">True</code> from it tells Python to suppress that exception.</p>
    <pre>class IgnoreErrors:
    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, tb):
        return True

with IgnoreErrors():
    raise ValueError('this will be swallowed')

print('still running')</pre>
    <p>Be careful with this, since silently swallowing exceptions can hide real bugs.</p>
  `,
      question: "What value must __exit__ return to suppress an exception?",
      answer: "True",
      hint: "It's a Python boolean."
    },
    {
      title: "contextlib.contextmanager",
      points: 20,
      content: `
    <p>The <code class="inline">contextlib</code> module lets you write a context manager as a generator function instead of a class. Code before <code class="inline">yield</code> runs on entry, and code after it runs on exit.</p>
    <pre>from contextlib import contextmanager

@contextmanager
def timer():
    print('starting')
    yield
    print('stopping')

with timer():
    print('doing work')</pre>
    <p>This is often shorter than writing a full class with __enter__ and __exit__.</p>
  `,
      question: "Which keyword marks the point where control passes to the with block's body?",
      answer: "yield",
      hint: "It's the same keyword used in generator functions."
    },
    {
      title: "Guaranteeing Cleanup",
      points: 25,
      content: `
    <p>To guarantee cleanup even when the with block raises an exception, wrap the <code class="inline">yield</code> in a try/finally inside your generator-based context manager.</p>
    <pre>from contextlib import contextmanager

@contextmanager
def timer():
    print('starting')
    try:
        yield
    finally:
        print('stopping, always')

with timer():
    raise ValueError('boom')</pre>
    <p>The finally block still runs even though the exception propagates out of the with statement.</p>
  `,
      question: "Which block guarantees cleanup code runs whether or not an exception occurred?",
      answer: "finally",
      hint: "It's the clause in a try statement that comes after except."
    }
  ]
},
{
  id: "assert-debugging",
  title: "assert & Debugging Basics",
  icon: "✅",
  difficulty: "Easy",
  tags: ["debugging", "errors", "testing"],
  description: "Use assert statements to catch programming mistakes early, learning the basic mindset that guides effective debugging in Python.",
  tasks: [
    {
      title: "The assert Statement",
      points: 0,
      content: `
    <p>The <code class="inline">assert</code> statement checks that a condition is true, and raises an <code class="inline">AssertionError</code> immediately if it isn't. It's a quick way to catch bugs early, during development.</p>
    <pre>def divide(a, b):
    assert b != 0, 'b must not be zero'
    return a / b

print(divide(10, 2))</pre>
    <p>If the condition after assert is false, the program stops right there instead of continuing with bad data.</p>
  `
    },
    {
      title: "Adding a Failure Message",
      points: 10,
      content: `
    <p>You can add an optional message after the condition, separated by a comma. That message is shown if the assertion fails, making it easier to understand what went wrong.</p>
    <pre>age = -5
assert age &gt;= 0, 'age cannot be negative'</pre>
    <p>Running this raises <code class="inline">AssertionError: age cannot be negative</code>, which is much clearer than a bare failure.</p>
  `,
      question: "What exception type does a failed assert statement raise?",
      answer: "AssertionError",
      hint: "It ends in 'Error', like most built-in exceptions."
    },
    {
      title: "Why Not to Rely on assert",
      points: 15,
      content: `
    <p>Assertions are meant for catching programmer mistakes during development, not for validating user input in production. When Python runs with the <code class="inline">-O</code> (optimize) flag, all assert statements are stripped out entirely.</p>
    <pre>def set_password(pw):
    assert len(pw) &gt;= 8
    return pw

# Never rely on assert for security or input validation!</pre>
    <p>Because assertions can be disabled, use regular if/raise checks for anything that must always run.</p>
  `,
      question: "Which command-line flag disables all assert statements?",
      answer: "-O",
      hint: "It's a single capital letter, meaning 'optimize'."
    }
  ]
},
{
  id: "python-debugger-pdb",
  title: "The Python Debugger (pdb)",
  icon: "🐞",
  difficulty: "Medium",
  tags: ["debugging", "errors", "tools"],
  description: "Step through code interactively with pdb, Python's built-in debugger, to inspect variables and find bugs line by line.",
  tasks: [
    {
      title: "Starting a Debug Session",
      points: 0,
      content: `
    <p>The <code class="inline">pdb</code> module is Python's built-in interactive debugger. It lets you pause execution, inspect variables, and step through code line by line instead of guessing what went wrong.</p>
    <pre>import pdb

def buggy(x):
    pdb.set_trace()
    return x * 2

buggy(5)</pre>
    <p>When execution reaches <code class="inline">pdb.set_trace()</code>, you get an interactive prompt right there in your terminal.</p>
  `
    },
    {
      title: "Common pdb Commands",
      points: 15,
      content: `
    <p>Once inside the debugger prompt, a handful of commands cover most of what you need: <code class="inline">n</code> (next line), <code class="inline">s</code> (step into a function call), <code class="inline">c</code> (continue running), and <code class="inline">p</code> (print a variable).</p>
    <pre>(Pdb) p x
5
(Pdb) n
(Pdb) c</pre>
    <p>These commands let you walk through your program exactly as it executes, watching values change in real time.</p>
  `,
      question: "Which single-letter pdb command prints the value of a variable?",
      answer: "p",
      hint: "It shares its first letter with the word 'print'."
    },
    {
      title: "The breakpoint() Built-in",
      points: 15,
      content: `
    <p>Since Python 3.7, you don't need to import pdb manually. The built-in <code class="inline">breakpoint()</code> function drops you into the debugger at that exact line.</p>
    <pre>def buggy(x):
    breakpoint()
    return x * 2

buggy(5)</pre>
    <p>This is now the preferred way to start a debugging session, since it also respects the PYTHONBREAKPOINT environment variable.</p>
  `,
      question: "Which built-in function, needing no import, starts a debugging session at that line?",
      answer: "breakpoint()",
      hint: "It was introduced in Python 3.7, and it takes no arguments."
    },
    {
      title: "Post-Mortem Debugging",
      points: 20,
      content: `
    <p>If your program already crashed and you didn't set a breakpoint, you can still debug it after the fact. Running <code class="inline">python -m pdb myscript.py</code>, or calling <code class="inline">pdb.pm()</code> right after a crash in an interactive session, opens the debugger at the point of failure.</p>
    <pre>import pdb

try:
    1 / 0
except ZeroDivisionError:
    pdb.pm()</pre>
    <p>This is called post-mortem debugging, and it's especially useful for investigating crashes you can't easily reproduce.</p>
  `,
      question: "What is this technique called, of debugging a program after it has already crashed?",
      answer: "post-mortem debugging",
      hint: "Its first word also describes an autopsy."
    }
  ]
},
{
  id: "logging-basics",
  title: "Logging Basics",
  icon: "📝",
  difficulty: "Medium",
  tags: ["debugging", "errors", "logging"],
  description: "Replace scattered print statements with the logging module to record events at different severity levels throughout a program.",
  tasks: [
    {
      title: "Introducing logging",
      points: 0,
      content: `
    <p>The <code class="inline">logging</code> module lets you record messages about your program's execution, with different severity levels, instead of scattering print statements everywhere.</p>
    <pre>import logging

logging.basicConfig(level=logging.INFO)
logging.info('Application started')
logging.warning('Disk space is low')</pre>
    <p>Unlike print, logging messages can be filtered by severity, sent to files, and turned off entirely without editing your code.</p>
  `
    },
    {
      title: "Log Levels",
      points: 15,
      content: `
    <p>Logging defines five standard severity levels, from least to most severe: <code class="inline">DEBUG</code>, <code class="inline">INFO</code>, <code class="inline">WARNING</code>, <code class="inline">ERROR</code>, and <code class="inline">CRITICAL</code>. Only messages at or above the configured level are shown.</p>
    <pre>import logging

logging.basicConfig(level=logging.WARNING)
logging.debug('this will not show')
logging.error('this will show')</pre>
    <p>Setting the level to WARNING hides both DEBUG and INFO messages, which is useful for quieting noisy logs in production.</p>
  `,
      question: "Which log level sits between INFO and ERROR in severity?",
      answer: "WARNING",
      hint: "It's the level configured in the example above."
    },
    {
      title: "Named Loggers",
      points: 15,
      content: `
    <p>Instead of using the root logger directly, it's best practice to create a named logger per module using <code class="inline">logging.getLogger(__name__)</code>. This makes it easy to tell where each message came from.</p>
    <pre>import logging

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)
logger.info('Processing started')</pre>
    <p>Using <code class="inline">__name__</code> automatically names the logger after the current module, which keeps large projects organized.</p>
  `,
      question: "What special variable is commonly passed to getLogger to name a module's logger?",
      answer: "__name__",
      hint: "It also holds the string '__main__' when a script is run directly."
    },
    {
      title: "Logging Exceptions",
      points: 20,
      content: `
    <p>Inside an except block, <code class="inline">logging.exception()</code> logs your message at ERROR level and automatically includes the full traceback, saving you from formatting it yourself.</p>
    <pre>import logging

logging.basicConfig(level=logging.INFO)

try:
    1 / 0
except ZeroDivisionError:
    logging.exception('Division failed')</pre>
    <p>This is the standard way to log unexpected errors while still letting the program continue running.</p>
  `,
      question: "Which logging function automatically attaches a traceback to an error message?",
      answer: "logging.exception()",
      hint: "Its name matches exactly what it's meant to record."
    }
  ]
},
{
  id: "logging-handlers",
  title: "Logging Handlers & Formatters",
  icon: "📤",
  difficulty: "Hard",
  tags: ["debugging", "errors", "logging"],
  description: "Route log messages to files and consoles at once, and control their exact layout using custom handlers and formatters.",
  tasks: [
    {
      title: "What Handlers Do",
      points: 0,
      content: `
    <p>A logging <b>handler</b> decides where log messages go, for example the console or a file. A logger can have multiple handlers attached, each sending records to a different destination at once.</p>
    <pre>import logging

logger = logging.getLogger('app')
logger.setLevel(logging.DEBUG)

console = logging.StreamHandler()
logger.addHandler(console)

logger.debug('Hello from the console handler')</pre>
    <p>Without any handler attached, log messages have nowhere to go, so they effectively vanish, aside from the root logger's default behavior.</p>
  `
    },
    {
      title: "Writing Logs to a File",
      points: 20,
      content: `
    <p>A <code class="inline">FileHandler</code> writes log records to a file on disk instead of the console, which is essential for keeping a permanent record of what your application did.</p>
    <pre>import logging

logger = logging.getLogger('app')
logger.setLevel(logging.INFO)

file_handler = logging.FileHandler('app.log')
logger.addHandler(file_handler)

logger.info('Saved to a file')</pre>
    <p>You can attach both a StreamHandler and a FileHandler to the same logger, so messages appear on screen and are saved permanently.</p>
  `,
      question: "Which handler class writes log records to a file?",
      answer: "FileHandler",
      hint: "Its name describes exactly what it writes to."
    },
    {
      title: "Formatting Log Output",
      points: 20,
      content: `
    <p>A <code class="inline">Formatter</code> controls the exact text layout of each log record, including things like the timestamp, logger name, and severity level.</p>
    <pre>import logging

handler = logging.StreamHandler()
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)

logger = logging.getLogger('app')
logger.addHandler(handler)
logger.setLevel(logging.INFO)
logger.info('Formatted message')</pre>
    <p>Placeholder names like <code class="inline">%(levelname)s</code> and <code class="inline">%(message)s</code> are filled in automatically for every log record.</p>
  `,
      question: "Which method attaches a Formatter to a handler?",
      answer: "setFormatter()",
      hint: "Its name mirrors the class it accepts."
    },
    {
      title: "Per-Handler Levels",
      points: 25,
      content: `
    <p>Handlers can each have their own level, independent of the logger's level. This lets you, for example, show INFO and above on the console but only save ERROR and above to a file.</p>
    <pre>import logging

logger = logging.getLogger('app')
logger.setLevel(logging.DEBUG)

console = logging.StreamHandler()
console.setLevel(logging.INFO)

file_handler = logging.FileHandler('errors.log')
file_handler.setLevel(logging.ERROR)

logger.addHandler(console)
logger.addHandler(file_handler)</pre>
    <p>The logger's own level acts as the first filter; each handler's level filters further, only for messages passed through to it.</p>
  `,
      question: "Which method sets the minimum severity a handler will process?",
      answer: "setLevel()",
      hint: "The same method name exists on both loggers and handlers."
    }
  ]
},
{
  id: "warnings-module",
  title: "The warnings Module",
  icon: "⚠️",
  difficulty: "Medium",
  tags: ["debugging", "errors", "warnings"],
  description: "Signal non-fatal issues like deprecated features to users of your code using Python's built-in warnings module.",
  tasks: [
    {
      title: "Raising a Warning",
      points: 0,
      content: `
    <p>The <code class="inline">warnings</code> module lets you signal that something is questionable, like using a deprecated feature, without stopping the program the way an exception would.</p>
    <pre>import warnings

def old_function():
    warnings.warn('old_function is deprecated, use new_function instead', DeprecationWarning)
    return 42

old_function()</pre>
    <p>By default, warnings are printed to stderr once per location, letting the program continue running normally.</p>
  `
    },
    {
      title: "Warning Categories",
      points: 15,
      content: `
    <p>Warnings come in different categories, similar to exception types. Common ones include <code class="inline">DeprecationWarning</code>, <code class="inline">UserWarning</code> (the default), and <code class="inline">RuntimeWarning</code>.</p>
    <pre>import warnings

warnings.warn('low memory detected', RuntimeWarning)</pre>
    <p>Choosing the right category helps tools and other developers filter warnings by what kind of issue they represent.</p>
  `,
      question: "Which warning category is used by default if none is specified?",
      answer: "UserWarning",
      hint: "Its name suggests it's meant for general-purpose alerts."
    },
    {
      title: "Filtering Warnings",
      points: 15,
      content: `
    <p>You can control how warnings are handled using <code class="inline">warnings.simplefilter()</code>, for example turning them into errors so tests catch them, or ignoring them entirely.</p>
    <pre>import warnings

warnings.simplefilter('error')

warnings.warn('this will now raise', UserWarning)</pre>
    <p>Setting the filter to 'error' converts every matching warning into an actual exception, which is great for catching deprecated usage in a test suite.</p>
  `,
      question: "What string do you pass to simplefilter to turn warnings into exceptions?",
      answer: "error",
      hint: "It's the same word used for actual runtime failures."
    },
    {
      title: "Capturing Warnings for Testing",
      points: 20,
      content: `
    <p>To test that a warning was raised without letting it clutter your output, use the <code class="inline">warnings.catch_warnings()</code> context manager to capture warnings into a list.</p>
    <pre>import warnings

with warnings.catch_warnings(record=True) as caught:
    warnings.simplefilter('always')
    warnings.warn('deprecated!', DeprecationWarning)
    print(len(caught))</pre>
    <p>Recording warnings this way is a common pattern in unit tests that verify deprecated code paths still emit the right warning.</p>
  `,
      question: "Which keyword argument to catch_warnings makes it collect warnings into a list?",
      answer: "record",
      hint: "It's passed as record=True."
    }
  ]
},
{
  id: "traceback-module",
  title: "The traceback Module",
  icon: "🧵",
  difficulty: "Medium",
  tags: ["debugging", "errors", "tracebacks"],
  description: "Inspect, format, and work with exception tracebacks as data using the traceback module, instead of only seeing them printed.",
  tasks: [
    {
      title: "Printing a Traceback",
      points: 0,
      content: `
    <p>The <code class="inline">traceback</code> module lets you work with exception tracebacks programmatically, instead of only seeing them printed automatically when a program crashes.</p>
    <pre>import traceback

try:
    1 / 0
except ZeroDivisionError:
    traceback.print_exc()</pre>
    <p>This prints the same kind of traceback Python shows by default, but you can call it explicitly, for example inside a logging or error-reporting function.</p>
  `
    },
    {
      title: "Getting a Traceback as a String",
      points: 15,
      content: `
    <p>Instead of printing directly, <code class="inline">traceback.format_exc()</code> returns the traceback as a string, which you can save to a file, send in an email, or log.</p>
    <pre>import traceback

try:
    1 / 0
except ZeroDivisionError:
    error_text = traceback.format_exc()
    print(type(error_text))</pre>
    <p>This is especially useful for error reporting systems that need the traceback as data, not just printed output.</p>
  `,
      question: "Which function returns the traceback as a string instead of printing it?",
      answer: "format_exc()",
      hint: "Its name starts with 'format', unlike print_exc()."
    },
    {
      title: "Extracting Frame Information",
      points: 20,
      content: `
    <p>For finer control, <code class="inline">traceback.extract_tb()</code> returns a list of frame summaries, each with the filename, line number, function name, and the line of code itself.</p>
    <pre>import traceback
import sys

try:
    1 / 0
except ZeroDivisionError:
    tb = sys.exc_info()[2]
    frames = traceback.extract_tb(tb)
    print(frames[0].lineno)</pre>
    <p>Working with structured frame data lets you build custom error reports that highlight exactly which line failed.</p>
  `,
      question: "Which attribute of a frame summary gives the line number where the error occurred?",
      answer: "lineno",
      hint: "It's accessed as frames[0].lineno in the example."
    },
    {
      title: "Full Exception Details",
      points: 20,
      content: `
    <p>When you need the entire traceback plus the exception type and message as a list of strings, <code class="inline">traceback.format_exception()</code> gives you all three pieces together.</p>
    <pre>import traceback
import sys

try:
    1 / 0
except ZeroDivisionError:
    exc_type, exc_value, exc_tb = sys.exc_info()
    lines = traceback.format_exception(exc_type, exc_value, exc_tb)
    print(''.join(lines))</pre>
    <p>This is the same information Python prints automatically when a program crashes uncaught, just handed to you as data instead.</p>
  `,
      question: "Which built-in function returns the current exception's type, value, and traceback as a tuple?",
      answer: "sys.exc_info()",
      hint: "It lives in the sys module, not traceback."
    }
  ]
},
{
  id: "regex-basics",
  title: "Regular Expressions Basics",
  icon: "🔍",
  difficulty: "Medium",
  tags: ["strings", "text", "regex"],
  description: "Match patterns in text with Python's re module, covering character classes, quantifiers, and compiled patterns for reuse.",
  tasks: [
    {
      title: "Your First Pattern Match",
      points: 0,
      content: `
    <p>Regular expressions are patterns used to match text. Python's <code class="inline">re</code> module lets you search for, extract, and replace text that matches a pattern, far more flexibly than plain string methods.</p>
    <pre>import re

text = 'My phone number is 555-1234'
match = re.search(r'\\d{3}-\\d{4}', text)
print(match.group())</pre>
    <p>The <code class="inline">r</code> prefix before the string creates a raw string, which prevents Python from interpreting backslashes as escape sequences.</p>
  `
    },
    {
      title: "Character Classes and Quantifiers",
      points: 15,
      content: `
    <p>Regex patterns combine character classes like <code class="inline">\\d</code> (digit), <code class="inline">\\w</code> (word character), and <code class="inline">\\s</code> (whitespace) with quantifiers like <code class="inline">*</code>, <code class="inline">+</code>, and <code class="inline">{n}</code> to describe how many times something repeats.</p>
    <pre>import re

text = 'cat, cats, and caterpillar'
matches = re.findall(r'cats?', text)
print(matches)</pre>
    <p>The <code class="inline">?</code> quantifier makes the preceding character optional, so 'cats?' matches both 'cat' and 'cats'.</p>
  `,
      question: "Which character class matches any single digit?",
      answer: "\\d",
      hint: "It's a backslash followed by the letter d."
    },
    {
      title: "Compiling Patterns for Reuse",
      points: 20,
      content: `
    <p>If you use the same pattern many times, compiling it once with <code class="inline">re.compile()</code> is more efficient and lets you reuse the resulting pattern object.</p>
    <pre>import re

pattern = re.compile(r'\\d+')
print(pattern.findall('I have 3 cats and 12 fish'))</pre>
    <p>Compiled patterns support the same methods as the module-level functions, like <code class="inline">search</code>, <code class="inline">match</code>, and <code class="inline">findall</code>.</p>
  `,
      question: "Which function compiles a regex pattern into a reusable pattern object?",
      answer: "re.compile()",
      hint: "It's called once, before you use the pattern repeatedly."
    },
    {
      title: "Anchoring a Match",
      points: 15,
      content: `
    <p>Anchors don't match characters themselves, they match positions. <code class="inline">^</code> matches the start of a string (or line), and <code class="inline">$</code> matches the end.</p>
    <pre>import re

text = 'hello world'
print(bool(re.match(r'^hello', text)))
print(bool(re.search(r'world$', text)))</pre>
    <p>Anchors are essential when you need to validate that an entire string matches a pattern, not just a piece of it somewhere in the middle.</p>
  `,
      question: "Which anchor character matches the end of a string?",
      answer: "$",
      hint: "In many shells it also represents a variable, but here it means 'end'."
    }
  ]
},
{
  id: "regex-groups",
  title: "Regex Groups & Lookarounds",
  icon: "🎯",
  difficulty: "Hard",
  tags: ["strings", "text", "regex"],
  description: "Capture parts of a regex match using groups, and use lookahead and lookbehind assertions to match based on surrounding context.",
  tasks: [
    {
      title: "Capturing Groups",
      points: 0,
      content: `
    <p>Parentheses in a regex pattern create <b>groups</b>, which let you capture and extract specific parts of a match instead of the whole thing.</p>
    <pre>import re

text = 'Name: Alice, Age: 30'
match = re.search(r'Name: (\\w+), Age: (\\d+)', text)
print(match.group(1))
print(match.group(2))</pre>
    <p>Group 0 is always the entire match, while group 1, 2, and so on refer to each parenthesized part in order.</p>
  `
    },
    {
      title: "Named Groups",
      points: 20,
      content: `
    <p>Instead of referring to groups by number, you can name them with <code class="inline">(?P&lt;name&gt;...)</code>, which makes your code much easier to read, especially with many groups.</p>
    <pre>import re

text = 'Name: Alice, Age: 30'
match = re.search(r'Name: (?P&lt;name&gt;\\w+), Age: (?P&lt;age&gt;\\d+)', text)
print(match.group('name'))
print(match.group('age'))</pre>
    <p>Named groups also show up as keys in the dictionary returned by <code class="inline">match.groupdict()</code>.</p>
  `,
      question: "Which method returns all named groups as a dictionary?",
      answer: "groupdict()",
      hint: "Its name combines 'group' with the data structure it returns."
    },
    {
      title: "Positive Lookahead",
      points: 20,
      content: `
    <p>A <b>lookahead</b> checks that a pattern follows the current position without including it in the match. Positive lookahead is written <code class="inline">(?=...)</code>.</p>
    <pre>import re

text = 'price: 100 dollars, weight: 100 kg'
matches = re.findall(r'\\d+(?= kg)', text)
print(matches)</pre>
    <p>Here, only the number followed by ' kg' is captured, while the number before 'dollars' is skipped entirely.</p>
  `,
      question: "What symbol sequence starts a positive lookahead group?",
      answer: "(?=",
      hint: "It's three characters: an open parenthesis, a question mark, and an equals sign."
    },
    {
      title: "Positive Lookbehind",
      points: 25,
      content: `
    <p>A <b>lookbehind</b> checks that a pattern precedes the current position, without consuming it. Positive lookbehind is written <code class="inline">(?&lt;=...)</code>.</p>
    <pre>import re

text = 'price: $100, weight: 100kg'
matches = re.findall(r'(?&lt;=\\$)\\d+', text)
print(matches)</pre>
    <p>This matches numbers only when they're immediately preceded by a dollar sign, without including the dollar sign itself in the result.</p>
  `,
      question: "What symbol sequence starts a positive lookbehind group?",
      answer: "(?<=",
      hint: "It's the same as lookahead but with a less-than sign added after the question mark."
    }
  ]
},
{
  id: "re-module-functions",
  title: "The re Module Functions",
  icon: "🧩",
  difficulty: "Medium",
  tags: ["strings", "text", "regex"],
  description: "Learn when to use match, search, findall, and sub, the core functions the re module provides for working with patterns.",
  tasks: [
    {
      title: "The Core Functions",
      points: 0,
      content: `
    <p>The <code class="inline">re</code> module offers several core functions, each suited to a different job: <code class="inline">match</code> checks the start of a string, <code class="inline">search</code> finds the first match anywhere, <code class="inline">findall</code> collects every match, and <code class="inline">sub</code> replaces matches.</p>
    <pre>import re

text = 'cats and dogs and cats'
print(re.search(r'dogs', text).group())
print(re.findall(r'cats', text))</pre>
    <p>Picking the right function for the job makes your code both correct and easy to read.</p>
  `
    },
    {
      title: "match vs search",
      points: 15,
      content: `
    <p><code class="inline">re.match()</code> only checks for a match at the very beginning of the string, while <code class="inline">re.search()</code> scans the whole string for the first match anywhere.</p>
    <pre>import re

text = 'hello world'
print(re.match(r'world', text))
print(re.search(r'world', text).group())</pre>
    <p><code class="inline">re.match</code> returns <code class="inline">None</code> here because 'world' isn't at the start, while <code class="inline">re.search</code> finds it further along.</p>
  `,
      question: "Which function only matches at the beginning of the string, match or search?",
      answer: "match",
      hint: "Its name is the shorter of the two."
    },
    {
      title: "findall with Groups",
      points: 15,
      content: `
    <p>When your pattern contains groups, <code class="inline">re.findall()</code> returns the captured groups instead of the full match, as tuples if there's more than one group.</p>
    <pre>import re

text = 'Alice:30, Bob:25'
pairs = re.findall(r'(\\w+):(\\d+)', text)
print(pairs)</pre>
    <p>This makes findall especially handy for pulling structured pairs of data straight out of text.</p>
  `,
      question: "What data type does findall return when the pattern has two groups?",
      answer: "tuple",
      hint: "Each match becomes one of these, inside a list."
    },
    {
      title: "Replacing with sub",
      points: 20,
      content: `
    <p><code class="inline">re.sub()</code> replaces every match of a pattern with a replacement string, and can even use backreferences to reuse captured groups in the replacement.</p>
    <pre>import re

text = 'Alice:30, Bob:25'
result = re.sub(r'(\\w+):(\\d+)', r'\\1 is \\2 years old', text)
print(result)</pre>
    <p>Here, <code class="inline">\\1</code> and <code class="inline">\\2</code> refer back to the first and second captured groups from the pattern.</p>
  `,
      question: "Which function replaces all matches of a pattern with new text?",
      answer: "re.sub()",
      hint: "Its name is short for 'substitute'."
    }
  ]
},
{
  id: "string-encoding",
  title: "String Encoding (Unicode & Bytes)",
  icon: "🔤",
  difficulty: "Medium",
  tags: ["strings", "text", "unicode"],
  description: "Understand the difference between str and bytes in Python 3, and convert between them safely with encode and decode.",
  tasks: [
    {
      title: "str vs bytes",
      points: 0,
      content: `
    <p>In Python 3, <code class="inline">str</code> represents text as Unicode characters, while <code class="inline">bytes</code> represents raw binary data. You convert between them with <code class="inline">encode()</code> and <code class="inline">decode()</code>.</p>
    <pre>text = 'café'
data = text.encode('utf-8')
print(data)
print(data.decode('utf-8'))</pre>
    <p>Encoding turns readable text into bytes suitable for storage or network transmission; decoding turns those bytes back into text.</p>
  `
    },
    {
      title: "How UTF-8 Uses Multiple Bytes",
      points: 15,
      content: `
    <p>UTF-8 is the most common text encoding, and it represents each character using between one and four bytes. Characters outside the basic ASCII range take up more than one byte.</p>
    <pre>text = 'café'
print(len(text))
print(len(text.encode('utf-8')))</pre>
    <p>The string has 4 characters, but its UTF-8 encoding takes 5 bytes, because the accented 'é' needs two bytes.</p>
  `,
      question: "Which method converts a str into bytes?",
      answer: "encode()",
      hint: "The opposite operation is called decode()."
    },
    {
      title: "Handling Decode Errors",
      points: 15,
      content: `
    <p>Decoding bytes with the wrong encoding, or bytes that aren't valid at all, raises a <code class="inline">UnicodeDecodeError</code>. You can control this behavior with the <code class="inline">errors</code> parameter.</p>
    <pre>data = b'\\xff\\xfe'
try:
    data.decode('utf-8')
except UnicodeDecodeError:
    print(data.decode('utf-8', errors='replace'))</pre>
    <p>Passing <code class="inline">errors='replace'</code> substitutes invalid bytes with a placeholder character instead of raising an exception.</p>
  `,
      question: "Which exception is raised when bytes can't be decoded with the given encoding?",
      answer: "UnicodeDecodeError",
      hint: "It's the counterpart to UnicodeEncodeError."
    },
    {
      title: "Bytes Literals",
      points: 20,
      content: `
    <p>A <code class="inline">bytes</code> literal is written with a <code class="inline">b</code> prefix, and unlike strings, indexing into it returns an integer, the byte's numeric value, not a single-character string.</p>
    <pre>data = b'ABC'
print(data[0])
print(chr(data[0]))</pre>
    <p>Here <code class="inline">data[0]</code> gives 65, the ASCII code for 'A', and <code class="inline">chr()</code> converts that number back into a character.</p>
  `,
      question: "What prefix letter marks a bytes literal in Python?",
      answer: "b",
      hint: "It's placed right before the opening quote."
    }
  ]
},
{
  id: "text-alignment",
  title: "Text Alignment & Padding",
  icon: "📐",
  difficulty: "Easy",
  tags: ["strings", "text", "formatting"],
  description: "Align and pad text output to a fixed width using ljust, rjust, center, and zfill for neatly formatted results.",
  tasks: [
    {
      title: "Aligning and Padding Text",
      points: 0,
      content: `
    <p>String methods let you align and pad text to a fixed width, which is useful for producing neatly formatted tables or reports in plain text.</p>
    <pre>word = 'cat'
print(word.ljust(10, '-'))
print(word.rjust(10, '-'))
print(word.center(10, '-'))</pre>
    <p>Each method takes a total width and an optional fill character, defaulting to a space if none is given.</p>
  `
    },
    {
      title: "ljust and rjust",
      points: 10,
      content: `
    <p><code class="inline">ljust()</code> pads a string on the right so it's left-aligned within the given width, while <code class="inline">rjust()</code> pads on the left so it's right-aligned.</p>
    <pre>name = 'Al'
print(name.rjust(6) + '|')</pre>
    <p>This prints four spaces followed by 'Al' and a pipe character, showing the text pushed to the right edge of the field.</p>
  `,
      question: "Which method pads a string on the left so the text ends up right-aligned?",
      answer: "rjust()",
      hint: "The 'r' stands for 'right'."
    },
    {
      title: "Zero-Padding Numbers",
      points: 15,
      content: `
    <p><code class="inline">zfill()</code> pads a string with leading zeros until it reaches the given width, which is commonly used for formatting numbers like invoice IDs or timestamps.</p>
    <pre>num = '42'
print(num.zfill(5))</pre>
    <p>This prints '00042', padding the string with zeros so it's always five characters long.</p>
  `,
      question: "Which method pads a string with leading zeros to a given width?",
      answer: "zfill()",
      hint: "Its name is short for 'zero fill'."
    }
  ]
},
{
  id: "template-strings",
  title: "Template Strings",
  icon: "🧾",
  difficulty: "Medium",
  tags: ["strings", "text", "templates"],
  description: "Substitute placeholders into text safely using string.Template, a simpler alternative to f-strings for untrusted templates.",
  tasks: [
    {
      title: "Introducing string.Template",
      points: 0,
      content: `
    <p>The <code class="inline">string.Template</code> class provides a simpler, safer way to substitute placeholders into text than f-strings, especially when the template comes from an untrusted source like user input.</p>
    <pre>from string import Template

t = Template('Hello, $name! You have $count new messages.')
result = t.substitute(name='Ada', count=3)
print(result)</pre>
    <p>Placeholders are written with a dollar sign, and values are filled in by keyword using the <code class="inline">substitute()</code> method.</p>
  `
    },
    {
      title: "substitute vs safe_substitute",
      points: 15,
      content: `
    <p>If a placeholder in the template has no matching value, <code class="inline">substitute()</code> raises a <code class="inline">KeyError</code>. <code class="inline">safe_substitute()</code> instead leaves missing placeholders untouched.</p>
    <pre>from string import Template

t = Template('Hello, $name! Your role is $role.')
result = t.safe_substitute(name='Ada')
print(result)</pre>
    <p>This prints 'Hello, Ada! Your role is $role.', leaving the unmatched placeholder as-is instead of crashing.</p>
  `,
      question: "Which method fills in a template without raising an error for missing keys?",
      answer: "safe_substitute()",
      hint: "Its name starts with the word 'safe'."
    },
    {
      title: "Custom Delimiters",
      points: 15,
      content: `
    <p>You can customize a Template's delimiter character by subclassing it and setting the <code class="inline">delimiter</code> class attribute, useful when dollar signs already appear naturally in your text.</p>
    <pre>from string import Template

class PercentTemplate(Template):
    delimiter = '%'

t = PercentTemplate('Total: %amount USD')
print(t.substitute(amount=50))</pre>
    <p>Here the placeholder marker changes from $ to %, so the template can safely contain literal dollar signs elsewhere.</p>
  `,
      question: "Which class attribute controls the placeholder marker character?",
      answer: "delimiter",
      hint: "Its default value is the dollar sign."
    },
    {
      title: "Listing Placeholder Names",
      points: 20,
      content: `
    <p>Before substituting, you can inspect which placeholder names a template expects using <code class="inline">get_identifiers()</code> (Python 3.11+), which helps validate input data ahead of time.</p>
    <pre>from string import Template

t = Template('Hello, $name! You are $age years old.')
print(t.get_identifiers())</pre>
    <p>This returns a list of the placeholder names found in the template, without needing to actually perform the substitution.</p>
  `,
      question: "Which method lists all placeholder names found in a template?",
      answer: "get_identifiers()",
      hint: "It was added in Python 3.11."
    }
  ]
},
{
  id: "textwrap-module",
  title: "The textwrap Module",
  icon: "📄",
  difficulty: "Easy",
  tags: ["strings", "text", "formatting"],
  description: "Wrap and fill paragraphs of text to a fixed width, or shorten them with a placeholder, using the textwrap module.",
  tasks: [
    {
      title: "Wrapping Long Text",
      points: 0,
      content: `
    <p>The <code class="inline">textwrap</code> module reformats long blocks of text so each line fits within a fixed width, which is handy for terminal output or plain-text reports.</p>
    <pre>import textwrap

text = 'This is a fairly long sentence that needs to be wrapped nicely.'
print(textwrap.fill(text, width=20))</pre>
    <p><code class="inline">fill()</code> returns a single string with newline characters inserted, ready to print directly.</p>
  `
    },
    {
      title: "wrap() Returns a List",
      points: 10,
      content: `
    <p><code class="inline">textwrap.wrap()</code> works like <code class="inline">fill()</code>, but instead of returning one string with newlines, it returns a list of individual line strings.</p>
    <pre>import textwrap

text = 'This is a fairly long sentence that needs to be wrapped nicely.'
lines = textwrap.wrap(text, width=20)
print(lines)</pre>
    <p>Getting a list can be more convenient when you want to process or number each line separately.</p>
  `,
      question: "Which function returns wrapped text as a list of lines instead of one string?",
      answer: "wrap()",
      hint: "Its name matches the module's purpose exactly."
    },
    {
      title: "Shortening Text",
      points: 15,
      content: `
    <p><code class="inline">textwrap.shorten()</code> collapses whitespace and truncates text to fit a maximum width, adding a placeholder like '...' if anything was cut off.</p>
    <pre>import textwrap

text = 'This is a fairly long sentence that needs shortening.'
print(textwrap.shorten(text, width=30, placeholder='...'))</pre>
    <p>This is useful for generating previews or summaries that must never exceed a certain length.</p>
  `,
      question: "Which parameter of shorten sets the text shown when content is cut off?",
      answer: "placeholder",
      hint: "Its default value is a square bracket containing an ellipsis."
    }
  ]
},
{
  id: "difflib-module",
  title: "The difflib Module",
  icon: "🔬",
  difficulty: "Medium",
  tags: ["strings", "text", "comparison"],
  description: "Compare sequences and text to find differences, similarity scores, and close matches using Python's difflib module.",
  tasks: [
    {
      title: "Measuring Similarity",
      points: 0,
      content: `
    <p>The <code class="inline">difflib</code> module compares sequences, like strings or lists of lines, and reports how similar they are or exactly what changed between them.</p>
    <pre>import difflib

matcher = difflib.SequenceMatcher(None, 'kitten', 'sitting')
print(matcher.ratio())</pre>
    <p>The <code class="inline">ratio()</code> method returns a similarity score between 0 and 1, where 1 means the sequences are identical.</p>
  `
    },
    {
      title: "Finding Close Matches",
      points: 15,
      content: `
    <p><code class="inline">difflib.get_close_matches()</code> finds the entries in a list that most closely resemble a given word, which is great for suggesting corrections like 'did you mean...?'.</p>
    <pre>import difflib

options = ['apple', 'banana', 'grape', 'orange']
print(difflib.get_close_matches('appel', options))</pre>
    <p>This returns the closest matches ranked by similarity, defaulting to at most three results.</p>
  `,
      question: "Which function suggests the closest matching strings from a list of options?",
      answer: "get_close_matches()",
      hint: "Its name describes exactly what it returns."
    },
    {
      title: "Unified Diffs",
      points: 20,
      content: `
    <p><code class="inline">difflib.unified_diff()</code> produces output in the same style as the Unix <code class="inline">diff</code> tool, showing added and removed lines with + and - markers.</p>
    <pre>import difflib

before = ['line one\\n', 'line two\\n']
after = ['line one\\n', 'line two changed\\n']

diff = difflib.unified_diff(before, after)
print(''.join(diff))</pre>
    <p>This is exactly how many code review tools display changes between two versions of a file.</p>
  `,
      question: "Which character marks a newly added line in unified diff output?",
      answer: "+",
      hint: "The opposite marker, for removed lines, is a minus sign."
    }
  ]
},
{
  id: "string-algorithms-palindrome",
  title: "Palindrome Algorithms",
  icon: "🔄",
  difficulty: "Medium",
  tags: ["strings", "text", "algorithms"],
  description: "Check whether strings read the same forwards and backwards, from simple slicing to a memory-efficient two-pointer approach.",
  tasks: [
    {
      title: "The Simplest Check",
      points: 0,
      content: `
    <p>A palindrome is a string that reads the same forwards and backwards, like 'level' or 'racecar'. The simplest way to check this in Python is to compare a string with its reverse.</p>
    <pre>def is_palindrome(s):
    return s == s[::-1]

print(is_palindrome('racecar'))
print(is_palindrome('hello'))</pre>
    <p>The slice <code class="inline">s[::-1]</code> reverses the string by stepping backwards through it.</p>
  `
    },
    {
      title: "Normalizing Before Comparing",
      points: 15,
      content: `
    <p>Real-world palindrome checks, like phrases, usually need to ignore case, spaces, and punctuation first. You can normalize the string before comparing it to its reverse.</p>
    <pre>def is_palindrome(s):
    cleaned = ''.join(ch.lower() for ch in s if ch.isalnum())
    return cleaned == cleaned[::-1]

print(is_palindrome('A man, a plan, a canal: Panama'))</pre>
    <p>Filtering with <code class="inline">isalnum()</code> strips out spaces and punctuation before the comparison happens.</p>
  `,
      question: "Which string method checks whether a character is a letter or digit?",
      answer: "isalnum()",
      hint: "It combines the words 'alphabetic' and 'numeric'."
    },
    {
      title: "The Two-Pointer Approach",
      points: 20,
      content: `
    <p>Instead of creating a reversed copy, you can check a palindrome with two pointers moving toward the middle from each end, which uses less memory for very long strings.</p>
    <pre>def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left &lt; right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

print(is_palindrome('level'))</pre>
    <p>This approach stops as soon as it finds a mismatch, without ever building a full reversed string.</p>
  `,
      question: "In the two-pointer approach, what does the function do as soon as a mismatch is found?",
      answer: "it returns False",
      hint: "It exits the function immediately, without finishing the loop."
    }
  ]
},
{
  id: "anagram-detection",
  title: "Anagram Detection",
  icon: "🔡",
  difficulty: "Medium",
  tags: ["strings", "text", "algorithms"],
  description: "Determine whether two strings are rearrangements of each other using sorting, character counting, and text normalization.",
  tasks: [
    {
      title: "Sorting Letters to Compare",
      points: 0,
      content: `
    <p>Two strings are anagrams if one can be rearranged to form the other, using all the same letters exactly once. The simplest check is to sort the letters of both and compare.</p>
    <pre>def is_anagram(a, b):
    return sorted(a) == sorted(b)

print(is_anagram('listen', 'silent'))
print(is_anagram('hello', 'world'))</pre>
    <p>Sorting both strings puts their letters in the same order if, and only if, they contain exactly the same characters.</p>
  `
    },
    {
      title: "Counting with Counter",
      points: 15,
      content: `
    <p><code class="inline">collections.Counter</code> counts how many times each character appears, giving a faster alternative to sorting for checking anagrams.</p>
    <pre>from collections import Counter

def is_anagram(a, b):
    return Counter(a) == Counter(b)

print(is_anagram('listen', 'silent'))</pre>
    <p>Two Counter objects compare equal only if they hold exactly the same characters with exactly the same counts.</p>
  `,
      question: "Which class from the collections module counts character frequencies?",
      answer: "Counter",
      hint: "It's imported with 'from collections import Counter'."
    },
    {
      title: "Normalizing Case and Spaces",
      points: 20,
      content: `
    <p>Just like with palindromes, real anagram checks, for example comparing phrases, usually need to ignore case and spaces before comparing letter counts.</p>
    <pre>from collections import Counter

def is_anagram(a, b):
    clean_a = a.lower().replace(' ', '')
    clean_b = b.lower().replace(' ', '')
    return Counter(clean_a) == Counter(clean_b)

print(is_anagram('Dormitory', 'Dirty Room'))</pre>
    <p>Normalizing both strings the same way ensures the comparison only reflects actual letter content, not formatting differences.</p>
  `,
      question: "Which string method converts all characters to lowercase?",
      answer: "lower()",
      hint: "Its opposite is upper()."
    }
  ]
},
{
  id: "caesar-cipher",
  title: "Building a Caesar Cipher",
  icon: "🔐",
  difficulty: "Medium",
  tags: ["strings", "text", "algorithms"],
  description: "Shift letters through the alphabet to encode and decode simple messages by building a Caesar cipher from scratch.",
  tasks: [
    {
      title: "Shifting Letters",
      points: 0,
      content: `
    <p>A Caesar cipher shifts each letter in a message by a fixed number of positions in the alphabet. It's one of the oldest and simplest encryption techniques, named after Julius Caesar.</p>
    <pre>def encode(text, shift):
    result = ''
    for ch in text:
        if ch.isalpha():
            base = ord('A') if ch.isupper() else ord('a')
            result += chr((ord(ch) - base + shift) % 26 + base)
        else:
            result += ch
    return result

print(encode('hello', 3))</pre>
    <p>The <code class="inline">ord()</code> and <code class="inline">chr()</code> functions convert between characters and their numeric codes, which is how the shifting math works.</p>
  `
    },
    {
      title: "Wrapping Around the Alphabet",
      points: 15,
      content: `
    <p>The <code class="inline">% 26</code> operation is what makes the shift wrap around, so shifting 'z' forward doesn't go past 'z' into unrelated characters, it loops back to 'a'.</p>
    <pre>base = ord('a')
ch = 'z'
shift = 3
new_ch = chr((ord(ch) - base + shift) % 26 + base)
print(new_ch)</pre>
    <p>Without the modulo, shifting 'z' by 3 would produce a character code well past 'z', outside the alphabet entirely.</p>
  `,
      question: "How many letters are in the English alphabet, the number used in the modulo operation?",
      answer: "26",
      hint: "It's the same number as the length of string.ascii_lowercase."
    },
    {
      title: "Decoding a Message",
      points: 15,
      content: `
    <p>Decoding a Caesar cipher is just encoding with the negative of the original shift, since shifting backwards undoes shifting forwards.</p>
    <pre>def decode(text, shift):
    return encode(text, -shift)

encoded = encode('hello', 3)
print(decode(encoded, 3))</pre>
    <p>Because the modulo operation handles negative numbers correctly in Python, passing a negative shift reverses the encoding cleanly.</p>
  `,
      question: "What shift value, relative to the original, decodes a Caesar-encoded message?",
      answer: "the negative of it",
      hint: "If you encoded with shift 3, what value do you decode with?"
    },
    {
      title: "Cracking It by Brute Force",
      points: 20,
      content: `
    <p>Since a Caesar cipher only has 26 possible shifts, you can crack an unknown message just by trying every single one and reading which result makes sense.</p>
    <pre>def crack(text):
    for shift in range(26):
        print(shift, decode(text, shift))

crack('khoor')</pre>
    <p>This kind of exhaustive search is called a <b>brute-force attack</b>, and it works here only because the space of possible keys is so small.</p>
  `,
      question: "What is this technique called, of trying every possible shift value?",
      answer: "brute-force",
      hint: "Two words, describing an attack that just tries everything."
    }
  ]
},
{
  id: "word-frequency-counter",
  title: "Word Frequency Counter",
  icon: "📊",
  difficulty: "Medium",
  tags: ["strings", "text", "algorithms"],
  description: "Count how often each word appears in a block of text, moving from a plain dictionary to Counter's built-in tools.",
  tasks: [
    {
      title: "Counting with a Dictionary",
      points: 0,
      content: `
    <p>Counting how often each word appears in a block of text starts with splitting it into individual words, then tallying them up in a dictionary.</p>
    <pre>text = 'the cat sat on the mat the cat ran'
words = text.split()

counts = {}
for word in words:
    counts[word] = counts.get(word, 0) + 1

print(counts)</pre>
    <p><code class="inline">dict.get(word, 0)</code> returns 0 for a word seen for the first time, so the counter starts at zero without a separate check.</p>
  `
    },
    {
      title: "Using Counter",
      points: 15,
      content: `
    <p>The <code class="inline">collections.Counter</code> class does this counting for you in a single line, and comes with handy extras like <code class="inline">most_common()</code>.</p>
    <pre>from collections import Counter

text = 'the cat sat on the mat the cat ran'
counts = Counter(text.split())
print(counts.most_common(2))</pre>
    <p><code class="inline">most_common(2)</code> returns the two most frequent words as (word, count) tuples, sorted from most to least frequent.</p>
  `,
      question: "Which Counter method returns the most frequent items, sorted by count?",
      answer: "most_common()",
      hint: "You can pass it a number to limit how many results come back."
    },
    {
      title: "Cleaning Text First",
      points: 20,
      content: `
    <p>Real text usually has punctuation and mixed capitalization, which would otherwise make 'Cat', 'cat,' and 'cat' count as three different words. Cleaning the text first fixes this.</p>
    <pre>import string
from collections import Counter

text = 'The cat sat. The cat ran, fast!'
cleaned = text.lower().translate(str.maketrans('', '', string.punctuation))
counts = Counter(cleaned.split())
print(counts)</pre>
    <p><code class="inline">str.maketrans('', '', string.punctuation)</code> builds a translation table that deletes every punctuation character.</p>
  `,
      question: "Which module provides the string.punctuation constant used here?",
      answer: "string",
      hint: "It's the same module that provides ascii_lowercase."
    }
  ]
},
{
  id: "csv-string-parsing",
  title: "CSV Parsing with Strings",
  icon: "📋",
  difficulty: "Medium",
  tags: ["strings", "text", "csv"],
  description: "Split and rebuild comma-separated text by hand with string methods, before reaching for Python's built-in csv module.",
  tasks: [
    {
      title: "Splitting a Single Row",
      points: 0,
      content: `
    <p>CSV (comma-separated values) is a simple text format for tabular data. Before reaching for the csv module, it helps to understand what it's doing under the hood, starting with a plain <code class="inline">split(',')</code>.</p>
    <pre>line = 'Ada,30,Engineer'
fields = line.split(',')
print(fields)</pre>
    <p>This works for simple rows, splitting the line into a list of its comma-separated fields.</p>
  `
    },
    {
      title: "Parsing Multiple Rows",
      points: 15,
      content: `
    <p>A full CSV document is just multiple lines, each split the same way. Splitting on newlines first, then commas, turns the whole text into a list of rows.</p>
    <pre>data = 'Ada,30,Engineer\\nGrace,45,Admiral'
rows = [line.split(',') for line in data.split('\\n')]
print(rows)</pre>
    <p>Each inner list represents one row's fields, ready to be processed further, for example converting numeric fields to int.</p>
  `,
      question: "Which string method splits text into a list wherever a separator occurs?",
      answer: "split()",
      hint: "It's used twice in the example, once for lines and once for fields."
    },
    {
      title: "Cleaning Up Whitespace",
      points: 20,
      content: `
    <p>Real CSV data often has extra spaces around commas. Calling <code class="inline">strip()</code> on each field after splitting removes that stray whitespace before you use the data.</p>
    <pre>line = 'Ada , 30 , Engineer'
fields = [field.strip() for field in line.split(',')]
print(fields)</pre>
    <p>Cleaning each field this way avoids subtle bugs where '30' and ' 30' would otherwise compare as different strings.</p>
  `,
      question: "Which string method removes leading and trailing whitespace from a field?",
      answer: "strip()",
      hint: "It doesn't remove whitespace in the middle of a string, only at the edges."
    }
  ]
},

  /* ---- batch-06.js ---- */
  {
  id: "pathlib-basics",
  title: "Working with Paths (pathlib)",
  icon: "📁",
  difficulty: "Medium",
  tags: ["files", "io", "paths"],
  description: "Learn to build, inspect, and manipulate filesystem paths in a cross-platform, object-oriented way using Python's modern pathlib module.",
  tasks: [
    {
      title: "Working with Paths (pathlib)",
      points: 0,
      content: `
        <p>The <code class="inline">pathlib</code> module represents filesystem paths as objects instead of
        plain strings, which makes path manipulation cleaner and works the same way on Windows, macOS, and
        Linux.</p>
        <p>The core class is <code class="inline">Path</code>. You build paths by joining pieces with the
        <code class="inline">/</code> operator, and the resulting object has useful attributes and methods.</p>
        <pre>from pathlib import Path

p = Path("data") / "report.txt"
print(p)
print(p.name)
print(p.suffix)
print(p.parent)</pre>
      `
    },
    {
      title: "Joining path segments",
      points: 15,
      content: `
        <p>Instead of gluing strings together with slashes, pathlib lets you build a path by dividing
        pieces with the <code class="inline">/</code> operator. Each piece can be a string or another
        Path.</p>
        <pre>from pathlib import Path

base = Path("/home/user")
config = base / "app" / "settings.json"
print(config)</pre>
        <p>This produces a properly formatted path regardless of the operating system running the code.</p>
      `,
      question: "Which operator do you use to join two Path segments together?",
      answer: "/",
      hint: "It is the same symbol used for division."
    },
    {
      title: "Checking existence and reading files",
      points: 15,
      content: `
        <p>A Path object can check whether it exists on disk and what kind of thing it is, without
        needing a separate module.</p>
        <pre>from pathlib import Path

p = Path("notes.txt")
if p.exists() and p.is_file():
    text = p.read_text()
    print(text)
else:
    print("File not found")</pre>
        <p><code class="inline">read_text()</code> opens the file, reads its contents, and closes it
        automatically.</p>
      `,
      question: "Which Path method returns True only when the path points to an existing regular file?",
      answer: "is_file()",
      hint: "It is a method call that answers 'is this specifically a file'."
    },
    {
      title: "Searching with glob",
      points: 20,
      content: `
        <p>To find files matching a pattern inside a directory, use the <code class="inline">glob()</code>
        method. It supports wildcards like <code class="inline">*</code> and <code class="inline">**</code>
        for recursive searches.</p>
        <pre>from pathlib import Path

folder = Path("logs")
for file in folder.glob("*.log"):
    print(file)

for file in folder.glob("**/*.py"):
    print(file)</pre>
      `,
      question: "Which Path method searches a directory using wildcard patterns such as star dot txt?",
      answer: "glob",
      hint: "Think of the classic wildcard-matching function name."
    }
  ]
},
{
  id: "os-module-basics",
  title: "The os Module Basics",
  icon: "🖥️",
  difficulty: "Medium",
  tags: ["files", "io", "system"],
  description: "Interact with the operating system in Python by manipulating paths, reading environment variables, and managing files with the os module.",
  tasks: [
    {
      title: "The os Module Basics",
      points: 0,
      content: `
        <p>The <code class="inline">os</code> module gives you low-level access to operating system
        features: listing directories, joining paths, reading environment variables, and running
        processes.</p>
        <p>Before pathlib existed, path work in Python was done with <code class="inline">os.path</code>,
        and you will still see it in a lot of existing code.</p>
        <pre>import os

print(os.getcwd())
print(os.listdir("."))
print(os.path.join("data", "file.txt"))</pre>
      `
    },
    {
      title: "Joining and checking paths",
      points: 15,
      content: `
        <p><code class="inline">os.path.join()</code> combines path pieces using the correct separator
        for the current operating system, and <code class="inline">os.path.exists()</code> checks
        whether a path is present on disk.</p>
        <pre>import os

path = os.path.join("data", "images", "logo.png")
print(path)
print(os.path.exists(path))</pre>
      `,
      question: "Which os.path function checks whether a given path exists on disk?",
      answer: "exists",
      hint: "Full call looks like os.path.dot_something(path)."
    },
    {
      title: "Environment variables",
      points: 15,
      content: `
        <p>The <code class="inline">os.environ</code> mapping lets you read environment variables such
        as configuration values or secrets passed in from outside the program.</p>
        <pre>import os

home = os.environ.get("HOME", "/default/home")
print(home)

os.environ["DEBUG"] = "1"</pre>
        <p>Using <code class="inline">.get()</code> with a default avoids a crash if the variable isn't
        set.</p>
      `,
      question: "Which object do you read environment variables from in the os module?",
      answer: "os.environ",
      hint: "It behaves like a dictionary of the process's environment."
    },
    {
      title: "Renaming and removing files",
      points: 15,
      content: `
        <p>The os module can also rename and delete files directly.</p>
        <pre>import os

os.rename("old_name.txt", "new_name.txt")
os.remove("temp.txt")</pre>
        <p>Be careful: <code class="inline">os.remove()</code> deletes permanently, with no recycle
        bin.</p>
      `,
      question: "Which os function permanently deletes a file?",
      answer: "os.remove()",
      hint: "Its name is a synonym for delete."
    }
  ]
},
{
  id: "csv-files",
  title: "Reading & Writing CSV Files",
  icon: "📊",
  difficulty: "Medium",
  tags: ["files", "io", "csv"],
  description: "Use Python's built-in csv module to read tabular data from CSV files and write new rows back out correctly.",
  tasks: [
    {
      title: "Reading & Writing CSV Files",
      points: 0,
      content: `
        <p>CSV (comma-separated values) is a simple text format for tabular data, where each line is a
        row and commas separate the columns. Python's <code class="inline">csv</code> module handles
        quoting and edge cases for you, so you shouldn't parse CSV by splitting on commas manually.</p>
        <pre>import csv

with open("people.csv", newline="") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)</pre>
      `
    },
    {
      title: "Reading rows as lists",
      points: 15,
      content: `
        <p><code class="inline">csv.reader()</code> gives you each row as a list of strings, in the
        order the columns appear in the file.</p>
        <pre>import csv

with open("people.csv", newline="") as f:
    reader = csv.reader(f)
    header = next(reader)
    for row in reader:
        print(row[0], row[1])</pre>
        <p><code class="inline">next(reader)</code> pulls off the header row so it isn't treated as
        data.</p>
      `,
      question: "What type of object does each row from csv.reader come back as?",
      answer: "list",
      hint: "It is Python's ordered, square-bracket collection type."
    },
    {
      title: "Reading rows as dictionaries",
      points: 15,
      content: `
        <p><code class="inline">csv.DictReader</code> uses the first row as column names and returns
        each row as a dictionary, which is often easier to work with than positional indexes.</p>
        <pre>import csv

with open("people.csv", newline="") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], row["age"])</pre>
      `,
      question: "Which csv class reads each row as a dictionary keyed by column name?",
      answer: "DictReader",
      hint: "Its name combines dictionary and reader."
    },
    {
      title: "Writing CSV files",
      points: 20,
      content: `
        <p>To write CSV data, open a file for writing and use <code class="inline">csv.writer()</code>
        to add rows.</p>
        <pre>import csv

rows = [["name", "age"], ["Ada", 30], ["Grace", 45]]

with open("out.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(rows)</pre>
        <p>Passing <code class="inline">newline=""</code> when opening avoids extra blank lines on some
        systems.</p>
      `,
      question: "Which csv.writer method writes several rows at once from a list of lists?",
      answer: "writerows",
      hint: "It is the plural version of writerow."
    }
  ]
},
{
  id: "json-files",
  title: "Reading & Writing JSON",
  icon: "🧾",
  difficulty: "Medium",
  tags: ["files", "io", "json"],
  description: "Serialize Python data structures into JSON text and load JSON data back into native Python objects with the json module.",
  tasks: [
    {
      title: "Reading & Writing JSON",
      points: 0,
      content: `
        <p>JSON (JavaScript Object Notation) is a lightweight text format for structured data, widely
        used for config files and web APIs. Python's <code class="inline">json</code> module converts
        between JSON text and native Python objects like dicts and lists.</p>
        <pre>import json

data = {"name": "Ada", "age": 30, "skills": ["Python", "math"]}

text = json.dumps(data)
print(text)

back = json.loads(text)
print(back["name"])</pre>
      `
    },
    {
      title: "Writing JSON to a file",
      points: 15,
      content: `
        <p><code class="inline">json.dumps()</code> converts a Python object into a JSON string in
        memory, while <code class="inline">json.dump()</code> writes that JSON straight into an open
        file.</p>
        <pre>import json

data = {"score": 95, "passed": True}

with open("result.json", "w") as f:
    json.dump(data, f)</pre>
      `,
      question: "Which json function writes JSON data directly to an open file object?",
      answer: "json.dump()",
      hint: "It is the version without the trailing s."
    },
    {
      title: "Loading JSON from a file",
      points: 15,
      content: `
        <p>To read JSON back from disk, open the file and pass it to <code class="inline">json.load()</code>,
        which returns native Python objects.</p>
        <pre>import json

with open("result.json") as f:
    data = json.load(f)

print(data["score"])</pre>
      `,
      question: "Which json function reads and parses JSON directly from an open file object?",
      answer: "json.load()",
      hint: "It is the reading counterpart to json.dump."
    },
    {
      title: "Pretty-printing JSON",
      points: 15,
      content: `
        <p>Passing <code class="inline">indent</code> to <code class="inline">json.dumps()</code> or
        <code class="inline">json.dump()</code> produces nicely formatted, human-readable output instead
        of one long line.</p>
        <pre>import json

data = {"name": "Ada", "skills": ["Python", "math"]}
print(json.dumps(data, indent=2))</pre>
      `,
      question: "Which keyword argument makes json.dumps produce indented, readable output?",
      answer: "indent",
      hint: "It controls how many spaces are used for nesting."
    }
  ]
},
{
  id: "pickle-serialization",
  title: "Pickle & Serialization",
  icon: "🥒",
  difficulty: "Medium",
  tags: ["files", "io", "serialization"],
  description: "Save arbitrary Python objects to disk and restore them later using pickle's binary serialization format.",
  tasks: [
    {
      title: "Pickle & Serialization",
      points: 0,
      content: `
        <p>Serialization means converting an in-memory object into a form that can be stored or
        transmitted, then reconstructed later. Python's <code class="inline">pickle</code> module can
        serialize almost any Python object, unlike json which only handles simple data types.</p>
        <pre>import pickle

data = {"name": "Ada", "scores": [90, 85, 92]}

with open("data.pkl", "wb") as f:
    pickle.dump(data, f)</pre>
      `
    },
    {
      title: "Loading pickled data",
      points: 15,
      content: `
        <p>To restore a pickled object, open the file in binary read mode and call
        <code class="inline">pickle.load()</code>.</p>
        <pre>import pickle

with open("data.pkl", "rb") as f:
    data = pickle.load(f)

print(data["name"])</pre>
        <p>Notice the file mode uses <code class="inline">"rb"</code> and <code class="inline">"wb"</code>
        because pickle stores binary data, not plain text.</p>
      `,
      question: "Which file mode string opens a file for binary writing?",
      answer: "wb",
      hint: "It combines write with binary."
    },
    {
      title: "Pickling custom objects",
      points: 20,
      content: `
        <p>Pickle can serialize instances of your own classes too, as long as the class definition is
        importable when you unpickle the data.</p>
        <pre>import pickle

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(3, 4)
with open("point.pkl", "wb") as f:
    pickle.dump(p, f)

with open("point.pkl", "rb") as f:
    loaded = pickle.load(f)
print(loaded.x, loaded.y)</pre>
      `,
      question: "What must be importable when you unpickle an object of a custom class?",
      answer: "the class definition",
      hint: "Pickle stores the data, not the class code itself."
    },
    {
      title: "A security warning",
      points: 15,
      content: `
        <p>Never unpickle data from an untrusted source: a crafted pickle file can execute arbitrary
        code when loaded. For data you'll share with other systems or don't fully trust, prefer
        <code class="inline">json</code> instead.</p>
        <pre>import json

with open("data.json", "w") as f:
    json.dump({"name": "Ada"}, f)</pre>
      `,
      question: "Which module is the safer choice for untrusted data: json or pickle?",
      answer: "json",
      hint: "It only supports simple data types, which limits what can go wrong."
    }
  ]
},
{
  id: "binary-files",
  title: "Working with Binary Files",
  icon: "🧬",
  difficulty: "Hard",
  tags: ["files", "io", "binary"],
  description: "Read and write raw bytes directly to files, and use the struct module to pack and unpack fixed binary layouts.",
  tasks: [
    {
      title: "Working with Binary Files",
      points: 0,
      content: `
        <p>Not every file is text. Images, audio, and custom formats store raw bytes, and Python lets
        you work with them directly by opening files in binary mode using <code class="inline">"rb"</code>
        or <code class="inline">"wb"</code>. In binary mode you get and give
        <code class="inline">bytes</code> objects instead of <code class="inline">str</code>.</p>
        <pre>with open("image.bin", "rb") as f:
    header = f.read(4)
    print(header)</pre>
      `
    },
    {
      title: "Bytes objects",
      points: 20,
      content: `
        <p>Binary mode returns a <code class="inline">bytes</code> object, a sequence of integers from
        0 to 255. You can inspect or build one directly.</p>
        <pre>data = bytes([72, 101, 108, 108, 111])
print(data)
print(data.decode("ascii"))

raw = b"Hello"
print(list(raw))</pre>
      `,
      question: "What built-in type does reading a file in rb mode return?",
      answer: "bytes",
      hint: "It is the immutable sequence type for raw binary data."
    },
    {
      title: "Packing fixed layouts with struct",
      points: 25,
      content: `
        <p>The <code class="inline">struct</code> module packs Python values into a precise binary
        layout, and unpacks them back, which is useful for binary file formats and network
        protocols.</p>
        <pre>import struct

packed = struct.pack("&gt;IH", 1000, 25)
print(packed)

number, small = struct.unpack("&gt;IH", packed)
print(number, small)</pre>
        <p>The format string describes byte order and field types, here a big-endian unsigned int
        followed by an unsigned short.</p>
      `,
      question: "Which struct function converts Python values into packed binary bytes?",
      answer: "struct.pack()",
      hint: "The opposite operation is struct.unpack."
    },
    {
      title: "Reading large files in chunks",
      points: 20,
      content: `
        <p>For large binary files, read fixed-size chunks in a loop instead of loading the whole file
        into memory at once.</p>
        <pre>chunk_size = 1024
collected = bytearray()

with open("big_file.bin", "rb") as f:
    while True:
        chunk = f.read(chunk_size)
        if not chunk:
            break
        collected.extend(chunk)

print(len(collected))</pre>
      `,
      question: "What does f.read(chunk_size) return once the end of the file is reached?",
      answer: "an empty bytes object",
      hint: "It is falsy, which is why the loop checks 'if not chunk'."
    }
  ]
},
{
  id: "temporary-files",
  title: "Temporary Files",
  icon: "🗑️",
  difficulty: "Medium",
  tags: ["files", "io", "tempfile"],
  description: "Create scratch files and directories with the tempfile module that clean themselves up automatically when you're done.",
  tasks: [
    {
      title: "Temporary Files",
      points: 0,
      content: `
        <p>Programs often need scratch space: a file to hold intermediate results that nobody needs
        afterward. The <code class="inline">tempfile</code> module creates these safely, with unique
        names and automatic cleanup, instead of you inventing your own throwaway filenames.</p>
        <pre>import tempfile

with tempfile.TemporaryFile() as f:
    f.write(b"scratch data")
    f.seek(0)
    print(f.read())</pre>
      `
    },
    {
      title: "Named temporary files",
      points: 15,
      content: `
        <p><code class="inline">NamedTemporaryFile</code> creates a temporary file that has a real path
        on disk, which is useful when another program or function needs a filename rather than a file
        object.</p>
        <pre>import tempfile

with tempfile.NamedTemporaryFile(delete=False) as f:
    f.write(b"logs")
    print(f.name)</pre>
      `,
      question: "Which tempfile class creates a temp file that also has an accessible filesystem path?",
      answer: "NamedTemporaryFile",
      hint: "The name of the class describes exactly what it adds."
    },
    {
      title: "Temporary directories",
      points: 15,
      content: `
        <p><code class="inline">TemporaryDirectory()</code> creates a whole temporary folder, and
        removes it and everything inside it automatically when the with block ends.</p>
        <pre>import tempfile
import os

with tempfile.TemporaryDirectory() as tmp_dir:
    path = os.path.join(tmp_dir, "scratch.txt")
    with open(path, "w") as f:
        f.write("hello")
    print(os.listdir(tmp_dir))</pre>
      `,
      question: "Which tempfile class creates a temporary directory that is removed automatically afterward?",
      answer: "TemporaryDirectory",
      hint: "It mirrors NamedTemporaryFile but for a whole folder."
    },
    {
      title: "Guaranteed cleanup",
      points: 20,
      content: `
        <p>Using tempfile objects as context managers (with the <code class="inline">with</code>
        statement) guarantees cleanup even if an exception happens partway through, which is safer than
        deleting files manually at the end of a script.</p>
        <pre>import tempfile

try:
    with tempfile.TemporaryDirectory() as tmp_dir:
        raise ValueError("something went wrong")
except ValueError:
    print("handled, and tmp_dir is already gone")</pre>
      `,
      question: "What Python statement guarantees a temporary resource is cleaned up even after an error?",
      answer: "with",
      hint: "It is the keyword that opens a context manager block."
    }
  ]
},
{
  id: "directory-walking",
  title: "Directory Walking (os.walk)",
  icon: "🌳",
  difficulty: "Medium",
  tags: ["files", "io", "directories"],
  description: "Traverse an entire directory tree recursively with os.walk to find and process every file inside it.",
  tasks: [
    {
      title: "Directory Walking (os.walk)",
      points: 0,
      content: `
        <p><code class="inline">os.walk()</code> visits a directory and all of its subdirectories,
        giving you the current folder path, its subfolders, and its files at each step. It saves you
        from writing your own recursive folder-crawling code.</p>
        <pre>import os

for root, dirs, files in os.walk("project"):
    print("Folder:", root)
    for name in files:
        print("  File:", name)</pre>
      `
    },
    {
      title: "Unpacking the walk tuple",
      points: 15,
      content: `
        <p>Each iteration of <code class="inline">os.walk()</code> yields a 3-item tuple: the current
        directory path, a list of subdirectory names, and a list of filenames in that directory.</p>
        <pre>import os

for root, dirs, files in os.walk("project"):
    print(root, "has", len(dirs), "subfolders and", len(files), "files")</pre>
      `,
      question: "How many items are in the tuple that each step of os.walk yields?",
      answer: "3",
      hint: "Path, subdirectories, and files."
    },
    {
      title: "Filtering by extension",
      points: 15,
      content: `
        <p>Combine <code class="inline">os.walk()</code> with a simple string check to find only files
        that match a pattern, such as all Python files in a project.</p>
        <pre>import os

python_files = []
for root, dirs, files in os.walk("project"):
    for name in files:
        if name.endswith(".py"):
            python_files.append(os.path.join(root, name))

print(python_files)</pre>
      `,
      question: "Which string method checks if a filename ends with a given suffix like dot py?",
      answer: "endswith",
      hint: "Its opposite checks the beginning instead."
    },
    {
      title: "The pathlib alternative: rglob",
      points: 20,
      content: `
        <p>pathlib offers a similar recursive search with <code class="inline">Path.rglob()</code>,
        which can be more concise for simple pattern matching.</p>
        <pre>from pathlib import Path

for file in Path("project").rglob("*.py"):
    print(file)</pre>
      `,
      question: "Which Path method recursively searches all subdirectories for a matching pattern?",
      answer: "rglob",
      hint: "Its name is the recursive version of glob."
    }
  ]
},
{
  id: "shutil-operations",
  title: "shutil & File Operations",
  icon: "🚚",
  difficulty: "Medium",
  tags: ["files", "io", "shutil"],
  description: "Copy, move, and remove files and entire directory trees programmatically using the high-level shutil module.",
  tasks: [
    {
      title: "shutil & File Operations",
      points: 0,
      content: `
        <p>The <code class="inline">shutil</code> module (shell utilities) provides high-level file
        operations that the os module doesn't cover directly, like copying a file's contents or deleting
        an entire directory tree at once.</p>
        <pre>import shutil

shutil.copy("report.txt", "backup/report.txt")</pre>
      `
    },
    {
      title: "Copying files and trees",
      points: 15,
      content: `
        <p><code class="inline">shutil.copy()</code> copies a single file, while
        <code class="inline">shutil.copytree()</code> copies an entire directory and everything inside
        it, recreating the folder structure at the destination.</p>
        <pre>import shutil

shutil.copy("notes.txt", "archive/notes.txt")
shutil.copytree("project", "project_backup")</pre>
      `,
      question: "Which shutil function copies an entire directory tree to a new location?",
      answer: "copytree",
      hint: "Its name combines copy with the tree structure it duplicates."
    },
    {
      title: "Moving files",
      points: 15,
      content: `
        <p><code class="inline">shutil.move()</code> moves a file or directory to a new location,
        which also works for simple renaming when the destination is in the same folder.</p>
        <pre>import shutil

shutil.move("draft.txt", "final/draft.txt")</pre>
      `,
      question: "Which shutil function relocates a file or folder to a new destination?",
      answer: "move",
      hint: "It is one short verb, the opposite of staying put."
    },
    {
      title: "Removing a directory tree",
      points: 15,
      content: `
        <p>To delete a non-empty directory, use <code class="inline">shutil.rmtree()</code>, since the
        plain <code class="inline">os.rmdir()</code> only works on empty folders.</p>
        <pre>import shutil

shutil.rmtree("old_backup")</pre>
        <p>Use this carefully: it deletes permanently and cannot be undone.</p>
      `,
      question: "Which shutil function deletes a directory even if it still contains files?",
      answer: "rmtree",
      hint: "Its name mirrors os.rmdir but works on a whole tree of contents."
    }
  ]
},
{
  id: "zip-files",
  title: "Working with Zip Files",
  icon: "🗜️",
  difficulty: "Medium",
  tags: ["files", "io", "zipfile"],
  description: "Create, inspect, and extract zip archives programmatically using Python's built-in zipfile module without any external tools.",
  tasks: [
    {
      title: "Working with Zip Files",
      points: 0,
      content: `
        <p>The <code class="inline">zipfile</code> module lets you create and read zip archives without
        shelling out to an external program. Archives are opened as objects you can add files to or
        extract from.</p>
        <pre>import zipfile

with zipfile.ZipFile("archive.zip", "w") as zf:
    zf.write("report.txt")
    zf.write("data.csv")</pre>
      `
    },
    {
      title: "Listing archive contents",
      points: 15,
      content: `
        <p>Opening a zip file in read mode lets you inspect what's inside without extracting anything,
        using <code class="inline">namelist()</code>.</p>
        <pre>import zipfile

with zipfile.ZipFile("archive.zip", "r") as zf:
    print(zf.namelist())</pre>
      `,
      question: "Which ZipFile method returns a list of the names of every file inside the archive?",
      answer: "namelist",
      hint: "The method name is a direct description: a list of names."
    },
    {
      title: "Extracting an archive",
      points: 15,
      content: `
        <p>To pull the contents out onto disk, use <code class="inline">extractall()</code> for
        everything or <code class="inline">extract()</code> for a single member.</p>
        <pre>import zipfile

with zipfile.ZipFile("archive.zip", "r") as zf:
    zf.extractall("output_folder")</pre>
      `,
      question: "Which ZipFile method extracts every file in the archive at once?",
      answer: "extractall",
      hint: "Its name combines extract with a word meaning everything."
    },
    {
      title: "Enabling compression",
      points: 20,
      content: `
        <p>By default zipfile stores files uncompressed. Pass
        <code class="inline">compression=zipfile.ZIP_DEFLATED</code> to actually shrink the files, which
        is the format most zip tools use.</p>
        <pre>import zipfile

with zipfile.ZipFile("archive.zip", "w", compression=zipfile.ZIP_DEFLATED) as zf:
    zf.write("report.txt")</pre>
      `,
      question: "Which constant enables standard deflate compression when writing a zip file?",
      answer: "ZIP_DEFLATED",
      hint: "It is an all-caps constant from the zipfile module."
    }
  ]
},
{
  id: "importing-modules",
  title: "Importing Modules",
  icon: "📦",
  difficulty: "Easy",
  tags: ["modules", "tooling"],
  description: "Reuse code across files with import, from...import, and aliases, and learn where Python looks for modules.",
  tasks: [
    {
      title: "Importing Modules",
      points: 0,
      content: `
        <p>A module is just a Python file full of reusable code: functions, classes, and variables.
        The <code class="inline">import</code> statement brings a module's contents into your current
        file so you can use them.</p>
        <pre>import math

print(math.sqrt(16))
print(math.pi)</pre>
      `
    },
    {
      title: "Importing specific names",
      points: 10,
      content: `
        <p><code class="inline">from module import name</code> pulls a specific function or value
        directly into your namespace, so you can use it without the module prefix.</p>
        <pre>from math import sqrt, pi

print(sqrt(16))
print(pi)</pre>
      `,
      question: "Which keyword lets you import just one specific name from a module?",
      answer: "from",
      hint: "It comes right before the module name in the statement."
    },
    {
      title: "Aliasing with as",
      points: 10,
      content: `
        <p>The <code class="inline">as</code> keyword renames an import, which is handy for long module
        names or to follow common conventions, like importing pandas as pd.</p>
        <pre>import statistics as stats

print(stats.mean([1, 2, 3, 4]))</pre>
      `,
      question: "Which keyword do you use to give an imported module a shorter alias?",
      answer: "as",
      hint: "It is a two-letter keyword placed right after the module name."
    },
    {
      title: "Importing your own file",
      points: 15,
      content: `
        <p>You can import any .py file sitting in the same folder (or on the import path) just like a
        built-in module, using its filename without the .py extension.</p>
        <pre># helpers.py
def greet(name):
    return "Hello, " + name

# main.py
import helpers

print(helpers.greet("Ada"))</pre>
      `,
      question: "What file extension do you leave off when importing a local Python file?",
      answer: ".py",
      hint: "It's the standard extension for Python source files."
    }
  ]
},
{
  id: "creating-modules",
  title: "Creating Your Own Module",
  icon: "🧩",
  difficulty: "Easy",
  tags: ["modules", "tooling"],
  description: "Turn a plain script into a reusable module that other files can import functions and classes from.",
  tasks: [
    {
      title: "Creating Your Own Module",
      points: 0,
      content: `
        <p>Any Python file can be a module: there's no special syntax required. If you save some
        functions in <code class="inline">geometry.py</code>, another file can import that file by name
        and use them.</p>
        <pre># geometry.py
def area_circle(radius):
    return 3.14159 * radius * radius

def area_square(side):
    return side * side</pre>
      `
    },
    {
      title: "Using your module elsewhere",
      points: 10,
      content: `
        <p>As long as <code class="inline">geometry.py</code> is in the same folder (or on the Python
        path), another script can import it directly.</p>
        <pre># main.py
import geometry

print(geometry.area_circle(3))
print(geometry.area_square(4))</pre>
      `,
      question: "What must be true about a module's location for a simple import to find it?",
      answer: "it must be on the Python path",
      hint: "The simplest case is just being in the same folder as the importing script."
    },
    {
      title: "The __name__ guard",
      points: 10,
      content: `
        <p>A module often contains code meant only for testing it directly, not for when it's imported.
        The <code class="inline">if __name__ == "__main__":</code> guard runs that code only when the
        file is executed directly, not when imported.</p>
        <pre># geometry.py
def area_square(side):
    return side * side

if __name__ == "__main__":
    print(area_square(5))</pre>
      `,
      question: "What value does __name__ hold when a file is run directly rather than imported?",
      answer: "__main__",
      hint: "It's the same string used on the right side of the guard's comparison."
    },
    {
      title: "Module docstrings",
      points: 10,
      content: `
        <p>Adding a string as the very first line of a module documents what it does, and tools like
        <code class="inline">help()</code> can display it.</p>
        <pre># geometry.py
"""Functions for computing areas of simple shapes."""

def area_square(side):
    return side * side</pre>
      `,
      question: "Where in a module file should its docstring be placed?",
      answer: "at the top",
      hint: "It must come before any other code in the file."
    }
  ]
},
{
  id: "packages-init",
  title: "Packages & __init__.py",
  icon: "🗂️",
  difficulty: "Medium",
  tags: ["modules", "packages", "tooling"],
  description: "Learn to group related Python modules into a single package using a folder structure and an __init__.py file.",
  tasks: [
    {
      title: "Packages & __init__.py",
      points: 0,
      content: `
        <p>A package is a folder containing related modules, plus a special file called
        <code class="inline">__init__.py</code> that marks the folder as importable. Packages let you
        organize larger projects into logical groups instead of one flat pile of files.</p>
        <pre># shapes/circle.py
def area(radius):
    return 3.14159 * radius * radius

# main.py
from shapes import circle

print(circle.area(3))</pre>
      `
    },
    {
      title: "Importing from a package",
      points: 15,
      content: `
        <p>Once a folder has <code class="inline">__init__.py</code>, you can import its modules using
        dotted paths.</p>
        <pre>from shapes import circle
from shapes.square import area

print(circle.area(3))
print(area(4))</pre>
      `,
      question: "What character separates a package name from a module name in an import statement?",
      answer: ".",
      hint: "It's the same dot used for attribute access."
    },
    {
      title: "What __init__.py can hold",
      points: 15,
      content: `
        <p><code class="inline">__init__.py</code> can be empty, or it can run setup code and expose
        selected names, so users can import directly from the package instead of digging into
        submodules.</p>
        <pre># shapes/__init__.py
from .circle import area as circle_area
from .square import area as square_area</pre>
        <p>Now callers can simply write <code class="inline">from shapes import circle_area</code>.</p>
      `,
      question: "What special filename marks a folder as a Python package?",
      answer: "__init__.py",
      hint: "It uses double underscores on both sides of the word init."
    },
    {
      title: "Relative imports",
      points: 20,
      content: `
        <p>Inside a package, a leading dot in an import means relative to the current package, which
        lets modules within the same package refer to each other without spelling out the full package
        name.</p>
        <pre># shapes/square.py
from .circle import area as circle_area

def compare(side, radius):
    return side * side - circle_area(radius)</pre>
      `,
      question: "What symbol at the start of an import path makes it relative to the current package?",
      answer: ".",
      hint: "A single character placed right before the module name."
    }
  ]
},
{
  id: "pip-and-pypi",
  title: "pip & PyPI",
  icon: "📦",
  difficulty: "Easy",
  tags: ["modules", "tooling", "pip"],
  description: "Install, upgrade, and remove third-party packages from the Python Package Index using the pip command-line tool.",
  tasks: [
    {
      title: "pip & PyPI",
      points: 0,
      content: `
        <p>PyPI (the Python Package Index) hosts hundreds of thousands of open-source packages.
        <code class="inline">pip</code> is the command-line tool that downloads and installs them into
        your Python environment.</p>
        <pre>pip install requests</pre>
        <p>After installing, you can import the package in your code exactly like a built-in module.</p>
        <pre>import requests

response = requests.get("https://example.com")
print(response.status_code)</pre>
      `
    },
    {
      title: "Installing a specific version",
      points: 10,
      content: `
        <p>You can pin an exact version by adding two equals signs and a version number, which keeps
        your project reproducible even if a newer version changes behavior.</p>
        <pre>pip install requests==2.31.0</pre>
      `,
      question: "Which two characters separate a package name from its exact version when installing with pip?",
      answer: "==",
      hint: "It's the same symbol pair used for equality comparisons in Python."
    },
    {
      title: "Listing and removing packages",
      points: 10,
      content: `
        <p><code class="inline">pip uninstall</code> removes a package, and
        <code class="inline">pip list</code> shows everything currently installed in the
        environment.</p>
        <pre>pip uninstall requests
pip list</pre>
      `,
      question: "Which pip subcommand shows every package installed in the current environment?",
      answer: "list",
      hint: "The full command is pip followed by this one word."
    },
    {
      title: "Upgrading packages",
      points: 15,
      content: `
        <p>Adding the <code class="inline">--upgrade</code> flag tells pip to fetch the newest available
        version of a package instead of skipping it because it's already installed.</p>
        <pre>pip install --upgrade requests</pre>
      `,
      question: "Which flag tells pip to install the newest version even if one is already present?",
      answer: "--upgrade",
      hint: "It's a double-dash option, not a subcommand."
    }
  ]
},
{
  id: "virtual-environments",
  title: "Virtual Environments (venv)",
  icon: "🧪",
  difficulty: "Medium",
  tags: ["modules", "tooling", "venv"],
  description: "Isolate a project's dependencies from the rest of your system using Python's built-in venv module.",
  tasks: [
    {
      title: "Virtual Environments (venv)",
      points: 0,
      content: `
        <p>A virtual environment is an isolated Python installation just for one project, so its
        dependencies don't clash with another project's or with packages installed system-wide. The
        most common way to create one is from the command line, but the same thing can be done with
        Python code through the <code class="inline">venv</code> module.</p>
        <pre>import venv

venv.create("myenv", with_pip=True)</pre>
        <p>This creates a folder called myenv containing its own Python interpreter and package storage,
        just like running <code class="inline">python -m venv myenv</code> from the terminal.</p>
      `
    },
    {
      title: "Activating an environment",
      points: 15,
      content: `
        <p>Creating the environment isn't enough: you must activate it so your shell uses its Python and
        pip instead of the system ones.</p>
        <pre># On macOS / Linux
source myenv/bin/activate

# On Windows
myenv\\Scripts\\activate</pre>
      `,
      question: "Which command word turns on a virtual environment so its interpreter is used by the shell?",
      answer: "activate",
      hint: "It's the script name you run inside the environment's folder."
    },
    {
      title: "Installing into the environment",
      points: 15,
      content: `
        <p>Once activated, any <code class="inline">pip install</code> command installs into that
        environment only, keeping the project's dependencies separate from other projects.</p>
        <pre>source myenv/bin/activate
pip install requests</pre>
      `,
      question: "Once a virtual environment is active, where do pip install commands place new packages?",
      answer: "inside that environment",
      hint: "Not system-wide, just in the isolated folder created by venv."
    },
    {
      title: "Deactivating",
      points: 15,
      content: `
        <p>To leave the virtual environment and return to the system Python, simply run
        <code class="inline">deactivate</code>, which is available automatically once an environment is
        active.</p>
        <pre>deactivate</pre>
      `,
      question: "Which single command exits an active virtual environment?",
      answer: "deactivate",
      hint: "It's the opposite of the command used to turn the environment on."
    }
  ]
},
{
  id: "requirements-txt",
  title: "requirements.txt",
  icon: "📋",
  difficulty: "Easy",
  tags: ["modules", "tooling", "pip"],
  description: "Record a project's exact dependencies in a requirements.txt file so anyone can reproduce the same environment.",
  tasks: [
    {
      title: "requirements.txt",
      points: 0,
      content: `
        <p>A <code class="inline">requirements.txt</code> file lists every package a project depends
        on, usually with pinned versions, so a teammate (or a server) can install the exact same setup
        with a single command. A typical file looks like this:</p>
        <pre>requests==2.31.0
flask==3.0.0
pytest==7.4.0</pre>
        <p>Since it's just plain text, Python can read it like any other file:</p>
        <pre>with open("requirements.txt") as f:
    packages = [line.strip() for line in f]

print(packages)</pre>
      `
    },
    {
      title: "Generating it automatically",
      points: 10,
      content: `
        <p>Rather than typing it by hand, you can generate the file from your active environment's
        currently installed packages with <code class="inline">pip freeze</code>.</p>
        <pre>pip freeze &gt; requirements.txt</pre>
      `,
      question: "Which pip subcommand lists installed packages in a format suitable for a requirements file?",
      answer: "freeze",
      hint: "The full command is pip followed by this one word."
    },
    {
      title: "Installing from the file",
      points: 10,
      content: `
        <p>To recreate an environment from a requirements file, pass it to
        <code class="inline">pip install</code> with the <code class="inline">-r</code> flag.</p>
        <pre>pip install -r requirements.txt</pre>
      `,
      question: "Which flag tells pip to install every package listed inside a file?",
      answer: "-r",
      hint: "It stands for requirements, and it's a single dash flag."
    },
    {
      title: "Pinning versions",
      points: 15,
      content: `
        <p>Pinning exact versions with <code class="inline">==</code> avoids surprises when a package
        releases a new version that changes behavior; some teams instead use a minimum version with a
        range so they still get safe updates.</p>
        <pre>requests&gt;=2.28.0,&lt;3.0.0</pre>
      `,
      question: "Which pair of characters pins a package to one exact version in a requirements file?",
      answer: "==",
      hint: "Same symbol used for equality checks in Python code."
    }
  ]
},
{
  id: "argparse-cli",
  title: "Command-Line Arguments with argparse",
  icon: "⌨️",
  difficulty: "Medium",
  tags: ["modules", "tooling", "cli"],
  description: "Build command-line tools that accept flags, options, and positional arguments using the argparse module.",
  tasks: [
    {
      title: "Command-Line Arguments with argparse",
      points: 0,
      content: `
        <p>The <code class="inline">argparse</code> module builds a full command-line interface for
        your script: it parses arguments, generates helpful usage messages, and reports errors for bad
        input automatically.</p>
        <pre>import argparse

parser = argparse.ArgumentParser(description="Greet someone")
parser.add_argument("name")
args = parser.parse_args()

print("Hello,", args.name)</pre>
      `
    },
    {
      title: "Optional flags",
      points: 15,
      content: `
        <p>Arguments starting with dashes are optional flags. Add
        <code class="inline">action="store_true"</code> for a simple on/off switch that needs no
        value.</p>
        <pre>import argparse

parser = argparse.ArgumentParser()
parser.add_argument("name")
parser.add_argument("--shout", action="store_true")
args = parser.parse_args()

greeting = "Hello, " + args.name
print(greeting.upper() if args.shout else greeting)</pre>
      `,
      question: "Which action value turns a flag into a simple True or False switch?",
      answer: "store_true",
      hint: "It's the value passed to the action keyword argument."
    },
    {
      title: "Typed arguments",
      points: 20,
      content: `
        <p>By default all arguments come in as strings. Pass <code class="inline">type=int</code> (or
        another type) so argparse converts and validates the value for you.</p>
        <pre>import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--count", type=int, default=1)
args = parser.parse_args()

print(args.count * 2)</pre>
      `,
      question: "Which keyword argument tells add_argument to convert input to a specific Python type?",
      answer: "type",
      hint: "It's set to something like int, float, or str."
    },
    {
      title: "Automatic help",
      points: 15,
      content: `
        <p>argparse automatically supports a <code class="inline">-h</code> flag that prints usage
        information built from your argument definitions, without any extra code from you.</p>
        <pre>python script.py -h</pre>
      `,
      question: "Which single flag does argparse automatically add to print usage help?",
      answer: "-h",
      hint: "It stands for help, and works with no extra setup."
    }
  ]
},
{
  id: "sys-module",
  title: "The sys Module",
  icon: "🛠️",
  difficulty: "Medium",
  tags: ["modules", "tooling", "system"],
  description: "Access command-line arguments, control exit codes, and inspect the module search path using the sys module.",
  tasks: [
    {
      title: "The sys Module",
      points: 0,
      content: `
        <p>The <code class="inline">sys</code> module exposes interpreter-level details: the raw
        command-line arguments a script was started with, where Python looks for modules, and how to
        exit with a specific status code.</p>
        <pre>import sys

print(sys.argv)
print(sys.version)</pre>
      `
    },
    {
      title: "Reading command-line arguments",
      points: 15,
      content: `
        <p><code class="inline">sys.argv</code> is a list of strings: the script name followed by
        whatever arguments were typed after it on the command line.</p>
        <pre># script.py
import sys

print("Script name:", sys.argv[0])
print("Arguments:", sys.argv[1:])</pre>
        <p>Running <code class="inline">python script.py hello world</code> would print those two extra
        words as a list.</p>
      `,
      question: "Which index of sys.argv always holds the script's own filename?",
      answer: "0",
      hint: "It's the very first position in the list."
    },
    {
      title: "Exiting with a status code",
      points: 15,
      content: `
        <p><code class="inline">sys.exit()</code> stops the program immediately with an optional exit
        code. A code of 0 means success, and any nonzero value signals an error to whatever called the
        script.</p>
        <pre>import sys

if len(sys.argv) &lt; 2:
    print("Missing argument")
    sys.exit(1)</pre>
      `,
      question: "Which exit code conventionally signals that a program finished successfully?",
      answer: "0",
      hint: "Any nonzero value usually means something went wrong instead."
    },
    {
      title: "The module search path",
      points: 20,
      content: `
        <p><code class="inline">sys.path</code> is the list of directories Python searches through when
        you import a module. You can inspect it, or even append a folder to it at runtime.</p>
        <pre>import sys

print(sys.path)
sys.path.append("/custom/modules")</pre>
      `,
      question: "Which sys attribute is a list of directories searched when importing modules?",
      answer: "sys.path",
      hint: "Its name matches the environment variable PATH conceptually."
    }
  ]
},
{
  id: "stdlib-tour",
  title: "The Python Standard Library Tour",
  icon: "🧰",
  difficulty: "Easy",
  tags: ["modules", "tooling", "stdlib"],
  description: "Survey a handful of useful standard library modules for dates, randomness, math, and counting that you'll reach for often.",
  tasks: [
    {
      title: "The Python Standard Library Tour",
      points: 0,
      content: `
        <p>Python ships with a huge standard library: modules that are always available with no
        installation needed. Knowing what's in there saves you from installing (or writing) something
        that already exists.</p>
        <pre>import random
import datetime

print(random.randint(1, 6))
print(datetime.date.today())</pre>
      `
    },
    {
      title: "Counting with collections",
      points: 10,
      content: `
        <p><code class="inline">collections</code> provides handy data structures beyond the built-in
        list and dict, like <code class="inline">Counter</code> for tallying items.</p>
        <pre>from collections import Counter

votes = ["red", "blue", "red", "green", "red", "blue"]
tally = Counter(votes)
print(tally.most_common(1))</pre>
      `,
      question: "Which collections class counts how many times each item appears in a sequence?",
      answer: "Counter",
      hint: "Its name is a direct description of what it does."
    },
    {
      title: "Dates with datetime",
      points: 10,
      content: `
        <p><code class="inline">datetime</code> represents dates and times and supports arithmetic
        between them, such as finding how many days are between two dates.</p>
        <pre>from datetime import date

start = date(2026, 1, 1)
end = date(2026, 3, 1)
print((end - start).days)</pre>
      `,
      question: "What attribute of a timedelta gives the number of whole days it represents?",
      answer: "days",
      hint: "It's a plain attribute, not a method call."
    },
    {
      title: "Math functions",
      points: 10,
      content: `
        <p><code class="inline">math</code> provides common mathematical functions and constants that
        go beyond basic arithmetic operators.</p>
        <pre>import math

print(math.floor(4.7))
print(math.ceil(4.2))
print(math.pi)</pre>
      `,
      question: "Which math function rounds a number down to the nearest whole number?",
      answer: "floor",
      hint: "It's the opposite of ceil."
    }
  ]
},

  /* ---- batch-07.js ---- */
  {
  id: "big-o-notation",
  title: "Big-O Notation",
  icon: "📈",
  difficulty: "Medium",
  tags: ["algorithms", "complexity", "big-o"],
  description: "Understand how to describe an algorithm's running time using Big-O notation, comparing constant, linear, quadratic, and logarithmic growth.",
  tasks: [
    {
      title: "What Is Big-O?",
      points: 0,
      content: `
        <p>Big-O notation describes how an algorithm's running time (or memory use) grows as the
        input size grows. It ignores hardware speed and constant factors, focusing only on the
        shape of the growth curve.</p>
        <p>Common classes, from fastest to slowest growth, include O(1), O(log n), O(n),
        O(n log n), and O(n^2). The larger the input gets, the more these differences matter.</p>
        <pre>def sum_list(n):
    total = 0
    for i in range(n):
        total += i
    return total

print(sum_list(5))
print(sum_list(10))</pre>
        <p>This function does one unit of work per element, so its running time grows linearly
        with n - it is O(n).</p>
      `
    },
    {
      title: "Constant Time: O(1)",
      points: 15,
      content: `
        <p>An operation is O(1), or constant time, when it takes the same amount of work no
        matter how large the input is. Indexing into a list or looking up a key in a dict are
        classic examples.</p>
        <pre>def get_first(items):
    return items[0]

data = [10, 20, 30, 40]
print(get_first(data))</pre>
        <p>Whether data has 4 items or 4 million, grabbing the first element takes the same
        single step.</p>
      `,
      question: "What is the Big-O time complexity of accessing an element by index in a Python list?",
      answer: "O(1)",
      hint: "Indexing doesn't require looping through the list."
    },
    {
      title: "Linear Time: O(n)",
      points: 15,
      content: `
        <p>An algorithm is O(n) when its running time grows in direct proportion to the input
        size. A single loop that checks every element is the most common example.</p>
        <pre>def contains_value(items, target):
    for item in items:
        if item == target:
            return True
    return False

print(contains_value([1, 2, 3, 4, 5], 4))</pre>
        <p>In the worst case this function must look at every item once, so doubling the list
        size roughly doubles the work.</p>
      `,
      question: "What is the Big-O of a function that loops through all n elements exactly once?",
      answer: "O(n)",
      hint: "The work grows in direct proportion to input size."
    },
    {
      title: "Quadratic Time: O(n^2)",
      points: 20,
      content: `
        <p>Nested loops that each run roughly n times produce O(n^2) behavior. This shows up
        often when comparing every element against every other element.</p>
        <pre>def has_duplicate_pair(items):
    for i in range(len(items)):
        for j in range(len(items)):
            if i != j and items[i] == items[j]:
                return True
    return False

print(has_duplicate_pair([1, 2, 3, 2]))</pre>
        <p>For each of the n outer iterations, the inner loop also runs n times, giving n times n
        total operations.</p>
      `,
      question: "What is the Big-O of two nested loops that each run n times?",
      answer: "O(n^2)",
      hint: "Multiply the cost of the outer loop by the cost of the inner loop."
    },
    {
      title: "Logarithmic Time: O(log n)",
      points: 20,
      content: `
        <p>An algorithm is O(log n) when each step reduces the problem size by a constant
        fraction, usually by half. This is why binary search is so much faster than checking
        every item.</p>
        <pre>def power_of_two_steps(n):
    steps = 0
    while n &gt; 1:
        n = n // 2
        steps += 1
    return steps

print(power_of_two_steps(16))</pre>
        <p>Each loop iteration halves n, so the number of iterations grows very slowly even for
        huge inputs.</p>
      `,
      question: "What value does power_of_two_steps(16) return?",
      answer: "4",
      hint: "Each iteration divides n by 2 - count how many times until n reaches 1."
    }
  ]
},
{
  id: "arrays-vs-lists",
  title: "Arrays vs Lists",
  icon: "🧮",
  difficulty: "Easy",
  tags: ["data-structures", "arrays", "lists"],
  description: "Compare Python's flexible, dynamically-typed list to fixed-type arrays, and learn when each data structure fits the job best.",
  tasks: [
    {
      title: "Lists vs Arrays",
      points: 0,
      content: `
        <p>A Python <code class="inline">list</code> is a dynamic array of references - it can
        hold mixed types and grows automatically as you add items. A true fixed-type array, from
        the <code class="inline">array</code> module or a library like NumPy, stores raw values
        of a single type and is more memory-efficient.</p>
        <pre>import array

numbers = array.array("i", [1, 2, 3, 4])
python_list = [1, "two", 3.0, True]

print(numbers)
print(python_list)</pre>
        <p>Both support indexing and iteration, but only the list can freely mix types.</p>
      `
    },
    {
      title: "Indexing Cost",
      points: 10,
      content: `
        <p>Whether you use a Python list or a typed array, accessing an element by its position
        takes the same, constant amount of time because both store elements in contiguous
        memory.</p>
        <pre>data = [10, 20, 30, 40, 50]
print(data[2])</pre>
        <p>Python jumps straight to the memory location for index 2 - no searching required.</p>
      `,
      question: "What is the time complexity of accessing an element at a given index in a Python list?",
      answer: "O(1)",
      hint: "Lists store elements in contiguous memory, so indexing is direct."
    },
    {
      title: "Typed Arrays",
      points: 10,
      content: `
        <p>The <code class="inline">array</code> module restricts its contents to a single
        declared type, given by a typecode such as "i" for signed integers. This saves memory
        compared to a list of full Python objects, but sacrifices flexibility.</p>
        <pre>import array

nums = array.array("i", [1, 2, 3])
nums.append(4)
print(nums)
# nums.append("five") would raise a TypeError</pre>
        <p>Trying to append a value of the wrong type raises an error immediately.</p>
      `,
      question: "Which built-in module provides a typed, memory-efficient array in Python?",
      answer: "array",
      hint: "It's imported with import ___, and takes a typecode like i for integers."
    },
    {
      title: "Growing a List",
      points: 15,
      content: `
        <p>Python lists are dynamic arrays: when you append beyond their current capacity,
        Python allocates a larger block of memory behind the scenes and copies the existing
        items over. This happens automatically and rarely, so appending stays fast on average.</p>
        <pre>items = []
for i in range(5):
    items.append(i * i)

print(items)</pre>
        <p>You never need to declare a size up front - the list resizes itself as needed.</p>
      `,
      question: "Which list method adds a single item to the end of a Python list?",
      answer: "append",
      hint: "It's the most common way to grow a list one item at a time."
    }
  ]
},
{
  id: "stacks",
  title: "Stacks",
  icon: "📚",
  difficulty: "Medium",
  tags: ["data-structures", "stacks", "algorithms"],
  description: "Implement a last-in-first-out stack using a Python list, and use it to solve real problems like matching brackets.",
  tasks: [
    {
      title: "The Stack Data Structure",
      points: 0,
      content: `
        <p>A stack is a last-in-first-out (LIFO) structure: the most recently added item is the
        first one removed. Think of a stack of plates - you add and remove from the top.</p>
        <p>Python's built-in list already supports stack behavior through
        <code class="inline">append</code> (push) and <code class="inline">pop</code> (pop from
        the end).</p>
        <pre>stack = []
stack.append(1)
stack.append(2)
stack.append(3)

print(stack.pop())
print(stack)</pre>
        <p>The last value pushed, 3, is the first one popped, leaving [1, 2] behind.</p>
      `
    },
    {
      title: "Pushing Items",
      points: 15,
      content: `
        <p>Pushing means adding a new item to the top of the stack. With a Python list used as a
        stack, the "top" is simply the end of the list.</p>
        <pre>stack = []
stack.append("first")
stack.append("second")
print(stack)</pre>
        <p>Each push adds to the end, so the most recent item is always last in the underlying
        list.</p>
      `,
      question: "Which list method is used to push an item onto a stack built from a Python list?",
      answer: "append",
      hint: "It's the same method used to grow any list."
    },
    {
      title: "Peeking at the Top",
      points: 15,
      content: `
        <p>Sometimes you want to look at the top item without removing it - this is called
        peeking. With a list-based stack, negative indexing gives you the last element directly.</p>
        <pre>stack = [10, 20, 30]
top = stack[-1]
print(top)</pre>
        <p>stack[-1] always refers to the most recently pushed item.</p>
      `,
      question: "What expression returns the top item of a stack implemented as a list, without removing it?",
      answer: "stack[-1]",
      hint: "Negative indexing accesses elements from the end of the list."
    },
    {
      title: "Balanced Brackets",
      points: 20,
      content: `
        <p>Stacks are perfect for matching pairs, like checking whether brackets in an expression
        are balanced. Each opening bracket is pushed, and each closing bracket must match the
        most recently pushed opener.</p>
        <pre>def is_balanced(expression):
    stack = []
    pairs = {")": "(", "]": "[", "}": "{"}
    for char in expression:
        if char in "([{":
            stack.append(char)
        elif char in ")]}":
            if not stack or stack.pop() != pairs[char]:
                return False
    return not stack

print(is_balanced("([{}])"))
print(is_balanced("([)]"))</pre>
        <p>The second expression closes the round bracket before the square bracket that was
        opened after it, so the match fails.</p>
      `,
      question: "What does is_balanced('([)]') return?",
      answer: "False",
      hint: "Trace the stack - does the last opened bracket match the closing bracket at that point?"
    },
    {
      title: "Stack Time Complexity",
      points: 15,
      content: `
        <p>Push and pop from the end of a Python list are both O(1) on average (amortized),
        since no other elements need to shift - this is what makes lists a good stack
        implementation.</p>
        <pre>stack = list(range(100000))
stack.append(100000)
stack.pop()
print(len(stack))</pre>
        <p>Even with 100,000 items already in the stack, pushing and popping one more is just as
        fast as with a stack of size 1.</p>
      `,
      question: "What is the time complexity of push and pop operations on a stack implemented with a Python list?",
      answer: "O(1)",
      hint: "Both operations happen at the end of the list, with no shifting required."
    }
  ]
},
{
  id: "queues",
  title: "Queues",
  icon: "📬",
  difficulty: "Medium",
  tags: ["data-structures", "queues", "algorithms"],
  description: "Implement a first-in-first-out queue using collections.deque, and see why a plain list makes a poor queue.",
  tasks: [
    {
      title: "The Queue Data Structure",
      points: 0,
      content: `
        <p>A queue is a first-in-first-out (FIFO) structure: the first item added is the first
        one removed, just like a line at a store. Python's <code class="inline">collections.deque</code>
        is built for this - it supports fast additions and removals from both ends.</p>
        <pre>from collections import deque

queue = deque()
queue.append("a")
queue.append("b")
queue.append("c")

print(queue.popleft())
print(queue)</pre>
        <p>"a" was added first, so it's the first one removed by popleft, leaving deque(['b', 'c']).</p>
      `
    },
    {
      title: "Enqueueing Items",
      points: 15,
      content: `
        <p>Enqueueing adds a new item to the back of the queue. With a deque, this is the same
        <code class="inline">append</code> method used with lists and stacks - the difference is
        which end you remove from.</p>
        <pre>from collections import deque

queue = deque()
queue.append("first")
queue.append("second")
print(queue)</pre>
        <p>Both items sit at the back of the queue, waiting to be served in the order they
        arrived.</p>
      `,
      question: "Which deque method adds an item to the back of a queue?",
      answer: "append",
      hint: "It's the same method name used to grow a list."
    },
    {
      title: "Dequeueing Items",
      points: 15,
      content: `
        <p>Dequeueing removes and returns the item at the front of the queue - the item that has
        been waiting the longest. A deque's <code class="inline">popleft</code> does exactly
        this in constant time.</p>
        <pre>from collections import deque

queue = deque([1, 2, 3])
first_out = queue.popleft()
print(first_out)</pre>
        <p>Item 1 was added first, so it's the first one served.</p>
      `,
      question: "Which deque method removes and returns the item at the front of the queue?",
      answer: "popleft",
      hint: "It's the opposite end from append."
    },
    {
      title: "Why Not Just Use a List?",
      points: 20,
      content: `
        <p>A plain Python list can technically act as a queue using
        <code class="inline">pop(0)</code>, but this is slow: removing the first element forces
        every remaining element to shift one position to the left.</p>
        <pre>queue = [1, 2, 3, 4, 5]
first = queue.pop(0)
print(first)
print(queue)</pre>
        <p>For a large queue, that shifting cost adds up quickly - this is exactly what deque
        avoids.</p>
      `,
      question: "What is the time complexity of queue.pop(0) on a Python list?",
      answer: "O(n)",
      hint: "Removing the first element forces every remaining element to shift left."
    }
  ]
},
{
  id: "linked-lists",
  title: "Linked Lists",
  icon: "🔗",
  difficulty: "Hard",
  tags: ["data-structures", "linked-lists", "algorithms"],
  description: "Build a singly linked list from scratch using node objects, then insert, search, and delete values by hand.",
  tasks: [
    {
      title: "Building a Linked List",
      points: 0,
      content: `
        <p>A linked list stores its elements in separate node objects, where each node holds a
        value and a reference (a "pointer") to the next node. Unlike a list's contiguous memory,
        nodes can live anywhere in memory - they're connected only by these references.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            return
        current = self.head
        while current.next is not None:
            current = current.next
        current.next = new_node

    def print_list(self):
        current = self.head
        values = []
        while current is not None:
            values.append(str(current.value))
            current = current.next
        print(" -&gt; ".join(values))

linked_list = LinkedList()
linked_list.append(10)
linked_list.append(20)
linked_list.append(30)
linked_list.print_list()</pre>
        <p>The list keeps only a reference to the first node, the head - everything else is
        reached by following next pointers.</p>
      `
    },
    {
      title: "Inserting at the Head",
      points: 20,
      content: `
        <p>Inserting a new node at the front of a linked list is fast: you just point the new
        node's next at the old head, and make the new node the head. No shifting of other nodes
        is required.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def insert_at_head(head, value):
    new_node = Node(value)
    new_node.next = head
    return new_node

head = Node(20)
head = insert_at_head(head, 10)
print(head.value, head.next.value)</pre>
        <p>The new node (10) now sits before the original head (20).</p>
      `,
      question: "What is the time complexity of inserting a new node at the head of a singly linked list?",
      answer: "O(1)",
      hint: "You only need to update one pointer - no traversal is required."
    },
    {
      title: "Searching a Linked List",
      points: 20,
      content: `
        <p>Unlike a list with index-based access, a linked list has no shortcut to a middle
        element - you must start at the head and follow next pointers until you find the value
        or reach the end.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def contains(head, target):
    current = head
    while current is not None:
        if current.value == target:
            return True
        current = current.next
    return False

n3 = Node(30)
n2 = Node(20)
n1 = Node(10)
n1.next = n2
n2.next = n3

print(contains(n1, 20))
print(contains(n1, 99))</pre>
        <p>20 is found partway through the list, while 99 causes the search to reach the end
        without a match.</p>
      `,
      question: "What is the worst-case time complexity of searching for a value in a singly linked list?",
      answer: "O(n)",
      hint: "In the worst case you must visit every node before finding, or missing, the target."
    },
    {
      title: "Deleting a Node",
      points: 25,
      content: `
        <p>Deleting a node by value means finding the node just before it and re-linking that
        node's next pointer to skip over the one being removed.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def delete_value(head, target):
    if head is None:
        return None
    if head.value == target:
        return head.next
    current = head
    while current.next is not None:
        if current.next.value == target:
            current.next = current.next.next
            return head
        current = current.next
    return head

n1 = Node(10)
n2 = Node(20)
n3 = Node(30)
n1.next = n2
n2.next = n3

new_head = delete_value(n1, 20)
print(new_head.value, new_head.next.value)</pre>
        <p>Node 20 is removed by pointing node 10's next directly at node 30.</p>
      `,
      question: "After deleting the node with value 20, what does new_head.next.value equal?",
      answer: "30",
      hint: "Deleting a node means re-linking its previous node directly to its next node."
    },
    {
      title: "Counting the Length",
      points: 20,
      content: `
        <p>Because a linked list has no built-in length tracking (unless you add one), computing
        its length means walking every node and counting as you go - another O(n) operation, and
        a reminder that singly linked lists only support forward traversal.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def length(head):
    count = 0
    current = head
    while current is not None:
        count += 1
        current = current.next
    return count

n3 = Node(30)
n2 = Node(20)
n1 = Node(10)
n1.next = n2
n2.next = n3

print(length(n1))</pre>
        <p>The loop advances through all three nodes before current becomes None.</p>
      `,
      question: "What does length(n1) return for this linked list of three nodes?",
      answer: "3",
      hint: "Count how many times the loop advances current before it becomes None."
    }
  ]
},
{
  id: "doubly-linked-lists",
  title: "Doubly Linked Lists",
  icon: "⛓️",
  difficulty: "Hard",
  tags: ["data-structures", "linked-lists", "algorithms"],
  description: "Extend linked lists with backward-pointing links, enabling efficient two-way traversal and simpler node removal.",
  tasks: [
    {
      title: "Building a Doubly Linked List",
      points: 0,
      content: `
        <p>A doubly linked list gives each node two pointers instead of one: <code class="inline">next</code>
        points forward and <code class="inline">prev</code> points backward. This lets you
        traverse in either direction and makes some operations, like removing a node, much
        simpler.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
            return
        new_node.prev = self.tail
        self.tail.next = new_node
        self.tail = new_node

dll = DoublyLinkedList()
dll.append(10)
dll.append(20)
dll.append(30)

print(dll.head.value, dll.tail.value)</pre>
        <p>The list tracks both ends, head and tail, so appending to the back stays O(1).</p>
      `
    },
    {
      title: "Traversing Backward",
      points: 20,
      content: `
        <p>Because every node keeps a prev pointer, you can start at the tail and walk backward
        through the whole list - something a singly linked list cannot do without extra work.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

def build_list(values):
    head = None
    tail = None
    for value in values:
        node = Node(value)
        if head is None:
            head = node
            tail = node
        else:
            node.prev = tail
            tail.next = node
            tail = node
    return head, tail

head, tail = build_list([1, 2, 3, 4])

current = tail
values = []
while current is not None:
    values.append(current.value)
    current = current.prev

print(values)</pre>
        <p>Starting from the tail and following prev pointers visits the nodes in reverse
        order.</p>
      `,
      question: "What list does the backward traversal print for build_list([1, 2, 3, 4])?",
      answer: "[4, 3, 2, 1]",
      hint: "Starting at the tail and following prev pointers reverses the order."
    },
    {
      title: "Inserting in the Middle",
      points: 20,
      content: `
        <p>Inserting after a known node means splicing the new node between it and whatever came
        next, updating both neighbors' pointers so the chain stays connected in both
        directions.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

def insert_after(node, value):
    new_node = Node(value)
    new_node.prev = node
    new_node.next = node.next
    if node.next is not None:
        node.next.prev = new_node
    node.next = new_node

a = Node(1)
b = Node(2)
a.next = b
b.prev = a

insert_after(a, 99)
print(a.next.value, a.next.next.value)</pre>
        <p>The new node (99) sits directly after a, and node b now follows it.</p>
      `,
      question: "What does insert_after(a, 99) result in when printing a.next.value and a.next.next.value?",
      answer: "99 2",
      hint: "The new node is spliced in directly after a, pointing forward to what used to be a's next node."
    },
    {
      title: "Removing a Node",
      points: 25,
      content: `
        <p>Removing a node from a doubly linked list only needs a reference to that node itself -
        both its neighbors can be re-linked directly using its own prev and next pointers,
        without searching for the node before it.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

def remove(node):
    if node.prev is not None:
        node.prev.next = node.next
    if node.next is not None:
        node.next.prev = node.prev

a = Node(1)
b = Node(2)
c = Node(3)
a.next = b
b.prev = a
b.next = c
c.prev = b

remove(b)
print(a.next.value, c.prev.value)</pre>
        <p>After removing b, a and c point directly at each other.</p>
      `,
      question: "After remove(b), what do a.next.value and c.prev.value equal?",
      answer: "3 1",
      hint: "Removing a middle node reconnects its previous and next neighbors directly to each other."
    }
  ]
},
{
  id: "binary-trees",
  title: "Binary Trees",
  icon: "🌳",
  difficulty: "Hard",
  tags: ["data-structures", "trees", "algorithms"],
  description: "Build a binary tree from node objects with up to two children each, then measure its height and size.",
  tasks: [
    {
      title: "Building a Binary Tree",
      points: 0,
      content: `
        <p>A binary tree is made of nodes, where each node holds a value and references to at
        most two children, conventionally called left and right. Trees start from a single root
        node and branch outward.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print(root.left.left.value)</pre>
        <p>This builds a small five-node tree, and root.left.left navigates two steps down to
        reach the node holding 4.</p>
      `
    },
    {
      title: "Measuring Height",
      points: 20,
      content: `
        <p>The height of a tree is the number of edges on the longest path from the root down to
        a leaf. It's naturally computed with recursion: a node's height is one more than the
        taller of its two subtrees.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def height(node):
    if node is None:
        return 0
    return 1 + max(height(node.left), height(node.right))

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)

print(height(root))</pre>
        <p>The path from root to node 4 passes through two extra levels, giving a height of 3.</p>
      `,
      question: "What does height(root) return for this tree (root with children 2 and 3, where 2 has a left child 4)?",
      answer: "3",
      hint: "Count the levels from the root down to the deepest node, including the root's own level."
    },
    {
      title: "Counting All Nodes",
      points: 20,
      content: `
        <p>Counting every node in a tree also follows a simple recursive pattern: count the
        current node, plus however many nodes live in each subtree.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def count_nodes(node):
    if node is None:
        return 0
    return 1 + count_nodes(node.left) + count_nodes(node.right)

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print(count_nodes(root))</pre>
        <p>This tree has five nodes in total: 1, 2, 3, 4, and 5.</p>
      `,
      question: "What does count_nodes(root) return for this five-node tree?",
      answer: "5",
      hint: "Each recursive call adds 1 for the current node plus the counts of both subtrees."
    },
    {
      title: "Counting Leaves",
      points: 20,
      content: `
        <p>A leaf is a node with no children at all. Counting leaves means recursing down the
        tree and adding 1 only when both a node's left and right are None.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def count_leaves(node):
    if node is None:
        return 0
    if node.left is None and node.right is None:
        return 1
    return count_leaves(node.left) + count_leaves(node.right)

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print(count_leaves(root))</pre>
        <p>Nodes 3, 4, and 5 have no children, so they're the leaves of this tree.</p>
      `,
      question: "How many leaf nodes (nodes with no children) does this tree have?",
      answer: "3",
      hint: "A leaf is a node whose left and right children are both None."
    }
  ]
},
{
  id: "binary-search-trees",
  title: "Binary Search Trees",
  icon: "🌲",
  difficulty: "Hard",
  tags: ["data-structures", "trees", "binary-search-tree"],
  description: "Keep a binary tree ordered so that searching, inserting, and deleting values all stay efficient on average.",
  tasks: [
    {
      title: "Inserting Into a BST",
      points: 0,
      content: `
        <p>A binary search tree (BST) keeps a special ordering rule: every value in a node's left
        subtree is smaller than the node, and every value in its right subtree is larger. This
        ordering is what makes searching fast.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def insert(root, value):
    if root is None:
        return Node(value)
    if value &lt; root.value:
        root.left = insert(root.left, value)
    else:
        root.right = insert(root.right, value)
    return root

root = None
for value in [50, 30, 70, 20, 40]:
    root = insert(root, value)

print(root.value, root.left.value, root.right.value)</pre>
        <p>50 becomes the root, 30 (smaller) goes left, and 70 (larger) goes right.</p>
      `
    },
    {
      title: "Searching a BST",
      points: 20,
      content: `
        <p>Searching takes advantage of the ordering rule: at each node, compare the target to
        the current value and only go left or right, never both - this is what makes BST search
        much faster than checking every node.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def insert(root, value):
    if root is None:
        return Node(value)
    if value &lt; root.value:
        root.left = insert(root.left, value)
    else:
        root.right = insert(root.right, value)
    return root

def search(root, target):
    if root is None:
        return False
    if root.value == target:
        return True
    if target &lt; root.value:
        return search(root.left, target)
    return search(root.right, target)

root = None
for value in [50, 30, 70, 20, 40]:
    root = insert(root, value)

print(search(root, 40))
print(search(root, 60))</pre>
        <p>40 was inserted and is found, while 60 was never inserted and the search runs off the
        end of the tree.</p>
      `,
      question: "What does search(root, 60) return for a BST built from [50, 30, 70, 20, 40]?",
      answer: "False",
      hint: "60 is not one of the inserted values, so the search reaches a missing branch."
    },
    {
      title: "Finding the Minimum",
      points: 20,
      content: `
        <p>Because smaller values always live to the left, the minimum value in a BST is found by
        following left pointers as far as possible, without needing to compare every node.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def insert(root, value):
    if root is None:
        return Node(value)
    if value &lt; root.value:
        root.left = insert(root.left, value)
    else:
        root.right = insert(root.right, value)
    return root

def find_min(root):
    current = root
    while current.left is not None:
        current = current.left
    return current.value

root = None
for value in [50, 30, 70, 20, 40]:
    root = insert(root, value)

print(find_min(root))</pre>
        <p>Following left pointers from 50 leads to 30, then to 20, which has no further left
        child.</p>
      `,
      question: "What does find_min(root) return for a BST built from [50, 30, 70, 20, 40]?",
      answer: "20",
      hint: "In a BST, the minimum value is always found by following left pointers as far as possible."
    },
    {
      title: "Unbalanced Trees",
      points: 25,
      content: `
        <p>BST operations average O(log n), but that assumes the tree is roughly balanced. If
        values are inserted in already-sorted order, every new node becomes a right child of the
        last one, producing a long chain instead of a branching tree.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def insert(root, value):
    if root is None:
        return Node(value)
    if value &lt; root.value:
        root.left = insert(root.left, value)
    else:
        root.right = insert(root.right, value)
    return root

root = None
for value in [1, 2, 3, 4, 5]:
    root = insert(root, value)

print(root.value, root.right.right.right.right.value)</pre>
        <p>Inserting 1 through 5 in order creates a single rightward chain, no different in shape
        from a linked list.</p>
      `,
      question: "What is the worst-case time complexity of search, insert, and delete in an unbalanced binary search tree like this one?",
      answer: "O(n)",
      hint: "Inserting sorted values in order creates a chain that behaves like a linked list."
    }
  ]
},
{
  id: "tree-traversals",
  title: "Tree Traversals",
  icon: "🧭",
  difficulty: "Hard",
  tags: ["data-structures", "trees", "traversal"],
  description: "Visit every node in a tree using pre-order, in-order, post-order, and level-order traversal strategies.",
  tasks: [
    {
      title: "Three Ways to Walk a Tree",
      points: 0,
      content: `
        <p>There are several standard orders for visiting every node in a tree. Pre-order visits
        the root first, then the left subtree, then the right. In-order visits left, then root,
        then right. Post-order visits left, then right, then root last.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def preorder(node, result):
    if node is not None:
        result.append(node.value)
        preorder(node.left, result)
        preorder(node.right, result)

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

pre_result = []
preorder(root, pre_result)
print(pre_result)</pre>
        <p>Pre-order records the root (1) immediately, then dives into the left subtree before
        the right.</p>
      `
    },
    {
      title: "Pre-order Traversal",
      points: 20,
      content: `
        <p>Pre-order visits a node before either of its children, making it useful for copying a
        tree's structure or exporting it, since the root always comes first.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def preorder(node, result):
    if node is not None:
        result.append(node.value)
        preorder(node.left, result)
        preorder(node.right, result)

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

result = []
preorder(root, result)
print(result)</pre>
        <p>Trace it level by level: root first, then all of the left subtree, then the right.</p>
      `,
      question: "What is the pre-order traversal output of this tree (root 1, left child 2 with children 4 and 5, right child 3)?",
      answer: "[1, 2, 4, 5, 3]",
      hint: "Pre-order visits the root first, then the entire left subtree, then the entire right subtree."
    },
    {
      title: "In-order Traversal",
      points: 20,
      content: `
        <p>In-order visits the left subtree, then the current node, then the right subtree. For a
        binary search tree, this always produces the values in sorted order.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def inorder(node, result):
    if node is not None:
        inorder(node.left, result)
        result.append(node.value)
        inorder(node.right, result)

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

result = []
inorder(root, result)
print(result)</pre>
        <p>The traversal fully explores the left side (4, then 2, then 5) before ever visiting
        the root (1) and finally the right side (3).</p>
      `,
      question: "What is the in-order traversal output of this same tree?",
      answer: "[4, 2, 5, 1, 3]",
      hint: "In-order visits left subtree, then root, then right subtree."
    },
    {
      title: "Post-order Traversal",
      points: 20,
      content: `
        <p>Post-order visits both children before the node itself, which makes it useful for
        safely deleting a tree bottom-up, since children are always processed before their
        parent.</p>
        <pre>class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def postorder(node, result):
    if node is not None:
        postorder(node.left, result)
        postorder(node.right, result)
        result.append(node.value)

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

result = []
postorder(root, result)
print(result)</pre>
        <p>Every child is recorded before its parent, and the root (1) is recorded last of all.</p>
      `,
      question: "What is the post-order traversal output of this same tree?",
      answer: "[4, 5, 2, 3, 1]",
      hint: "Post-order visits both children before visiting the root itself."
    },
    {
      title: "Level-order Traversal",
      points: 25,
      content: `
        <p>The three traversals above are all depth-first - they follow one branch deep before
        backtracking. Level-order traversal instead visits nodes top to bottom, left to right,
        one whole level at a time, using a queue.</p>
        <pre>from collections import deque

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def level_order(root):
    result = []
    queue = deque([root])
    while queue:
        node = queue.popleft()
        result.append(node.value)
        if node.left is not None:
            queue.append(node.left)
        if node.right is not None:
            queue.append(node.right)
    return result

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print(level_order(root))</pre>
        <p>Level one is just the root, level two is 2 and 3, and level three is 4 and 5.</p>
      `,
      question: "What does level_order(root) return for this same tree?",
      answer: "[1, 2, 3, 4, 5]",
      hint: "Level-order visits nodes top to bottom, left to right, one level at a time."
    }
  ]
},
{
  id: "heaps-priority-queues",
  title: "Heaps & Priority Queues",
  icon: "🗻",
  difficulty: "Hard",
  tags: ["data-structures", "heaps", "algorithms"],
  description: "Always access the smallest or largest item efficiently using Python's heapq module and priority queues.",
  tasks: [
    {
      title: "Introducing Heaps",
      points: 0,
      content: `
        <p>A heap is a tree-shaped structure that keeps one guarantee: in a min-heap, every
        parent is smaller than or equal to its children, so the smallest item is always at the
        root. Python's <code class="inline">heapq</code> module implements a min-heap on top of
        an ordinary list.</p>
        <pre>import heapq

numbers = [5, 1, 8, 3, 9]
heapq.heapify(numbers)

print(numbers)
print(numbers[0])</pre>
        <p><code class="inline">heapify</code> rearranges the list in place so it satisfies the
        heap property, and the smallest value always ends up at index 0.</p>
      `
    },
    {
      title: "The Heap Property",
      points: 20,
      content: `
        <p>No matter how many items are pushed or popped, heapq maintains one invariant: the
        smallest element in the heap is always found at the very front of the underlying list.</p>
        <pre>import heapq

numbers = [5, 1, 8, 3, 9]
heapq.heapify(numbers)
print(numbers[0])</pre>
        <p>Regardless of the internal arrangement of the rest of the list, this position always
        holds the minimum.</p>
      `,
      question: "In a min-heap built with heapq, which index always holds the smallest element?",
      answer: "0",
      hint: "heapq keeps the smallest item at the very start of the list."
    },
    {
      title: "Pushing and Popping",
      points: 20,
      content: `
        <p><code class="inline">heappush</code> adds a new item while keeping the heap property
        intact, and <code class="inline">heappop</code> removes and returns the current smallest
        item, then restores the property for what remains.</p>
        <pre>import heapq

heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 1)
heapq.heappush(heap, 8)
heapq.heappush(heap, 3)

print(heapq.heappop(heap))
print(heapq.heappop(heap))</pre>
        <p>The first pop removes the overall smallest value, and the second pop removes the
        smallest of what's left.</p>
      `,
      question: "What are the first two values popped from this heap, in order?",
      answer: "1, 3",
      hint: "heappop always removes and returns the current smallest element."
    },
    {
      title: "Priority Queues With Tuples",
      points: 20,
      content: `
        <p>A common use for heaps is a priority queue, where each item is paired with a priority
        number in a tuple. heapq compares tuples element by element, so the lowest priority
        number always comes out first.</p>
        <pre>import heapq

tasks = []
heapq.heappush(tasks, (2, "wash dishes"))
heapq.heappush(tasks, (1, "put out fire"))
heapq.heappush(tasks, (3, "check email"))

priority, task = heapq.heappop(tasks)
print(task)</pre>
        <p>Priority 1 is the lowest number, so that task comes out of the heap first.</p>
      `,
      question: "What task string does heapq.heappop(tasks) return first?",
      answer: "put out fire",
      hint: "heapq compares tuples element by element, so the lowest priority number comes out first."
    },
    {
      title: "Simulating a Max-Heap",
      points: 25,
      content: `
        <p>heapq only implements a min-heap directly. A common trick for a max-heap is to negate
        every value before pushing, then negate the result again after popping - the smallest
        negative number corresponds to the largest original value.</p>
        <pre>import heapq

numbers = [5, 1, 8, 3, 9]
max_heap = [-n for n in numbers]
heapq.heapify(max_heap)

largest = -heapq.heappop(max_heap)
print(largest)</pre>
        <p>Negating [5, 1, 8, 3, 9] gives [-5, -1, -8, -3, -9]; the smallest of those is -9, and
        negating it back gives the true largest value.</p>
      `,
      question: "What does this code print as the largest value from [5, 1, 8, 3, 9]?",
      answer: "9",
      hint: "Negating values turns the smallest negative number into the largest original number."
    }
  ]
},
{
  id: "hash-tables-internals",
  title: "Hash Tables Under the Hood",
  icon: "🔑",
  difficulty: "Hard",
  tags: ["data-structures", "hash-tables", "algorithms"],
  description: "Understand how Python's dict uses hashing and buckets under the hood to achieve fast average-case lookups.",
  tasks: [
    {
      title: "How dict Works Internally",
      points: 0,
      content: `
        <p>A Python <code class="inline">dict</code> is a hash table: each key is passed through
        a hash function to compute an index (a "bucket") where its value is stored. Looking up a
        key later means hashing it again and going straight to that bucket, instead of scanning
        every entry.</p>
        <pre>data = {"apple": 1, "banana": 2, "cherry": 3}

print(hash("apple"))
print(data["banana"])</pre>
        <p>The exact hash value can vary between runs, but it's always used the same way: to
        locate where a key's entry lives.</p>
      `
    },
    {
      title: "Hash Collisions",
      points: 20,
      content: `
        <p>Sometimes two different keys hash to the same bucket - this is called a collision.
        Python's dict resolves collisions internally so lookups still work correctly, but a poor
        hash function that causes many collisions can hurt performance.</p>
        <pre>class BadHash:
    def __init__(self, value):
        self.value = value

    def __hash__(self):
        return 1

    def __eq__(self, other):
        return self.value == other.value

a = BadHash(1)
b = BadHash(2)

print(hash(a) == hash(b))
print(a == b)</pre>
        <p>Both objects always hash to 1, forcing a collision, even though their values are
        different.</p>
      `,
      question: "What does hash(a) == hash(b) print, given that both objects hash to the same fixed value?",
      answer: "True",
      hint: "__hash__ always returns 1 here, no matter the object's value."
    },
    {
      title: "Average-Case Lookup Speed",
      points: 20,
      content: `
        <p>With a well-distributed hash function and few collisions, looking up a key in a dict
        takes the same small amount of time regardless of how many keys the dict holds.</p>
        <pre>lookup_dict = {i: i * i for i in range(100000)}
print(lookup_dict[99999])</pre>
        <p>Even with 100,000 entries, this lookup goes straight to the right bucket instead of
        scanning through prior keys.</p>
      `,
      question: "What is the average-case time complexity of looking up a key in a Python dict?",
      answer: "O(1)",
      hint: "A good hash function spreads keys evenly across buckets, so lookup doesn't depend on the number of keys."
    },
    {
      title: "Custom Objects as Keys",
      points: 20,
      content: `
        <p>To use your own objects as dict keys, you need to define both
        <code class="inline">__hash__</code> and <code class="inline">__eq__</code> consistently:
        equal objects must produce equal hashes, or the dict will fail to find matching keys.</p>
        <pre>class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __hash__(self):
        return hash((self.x, self.y))

    def __eq__(self, other):
        return (self.x, self.y) == (other.x, other.y)

locations = {}
locations[Point(1, 2)] = "Treasure"

print(locations[Point(1, 2)])</pre>
        <p>Even though this is a brand new Point object, it hashes and compares equal to the one
        used as the key, so the lookup succeeds.</p>
      `,
      question: "What does locations[Point(1, 2)] print, even though it is a different Point object than the one used as the key?",
      answer: "Treasure",
      hint: "Two objects with equal __hash__ and __eq__ results are treated as the same dictionary key."
    },
    {
      title: "Worst-Case Lookup Speed",
      points: 25,
      content: `
        <p>If a hash function causes many keys to collide into the same bucket, the dict must
        check each colliding entry one by one, and lookup speed degrades away from its usual fast
        case.</p>
        <p>This is why Python's built-in hash functions are designed to spread keys evenly, and
        why custom __hash__ implementations should avoid always returning the same value.</p>
      `,
      question: "What is the worst-case time complexity of a dict lookup when many keys collide into the same bucket?",
      answer: "O(n)",
      hint: "With enough collisions, the dict degrades toward checking every colliding key one by one."
    }
  ]
},
{
  id: "graphs-intro",
  title: "Introduction to Graphs",
  icon: "🕸️",
  difficulty: "Medium",
  tags: ["data-structures", "graphs", "algorithms"],
  description: "Represent networks of connected nodes using adjacency lists, and learn the difference between directed and undirected graphs.",
  tasks: [
    {
      title: "Representing a Graph",
      points: 0,
      content: `
        <p>A graph is a set of nodes (vertices) connected by edges. Graphs model things like
        social networks, road maps, and dependencies between tasks. The most common
        representation in code is an adjacency list: a dict mapping each node to a list of its
        neighbors.</p>
        <pre>graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A"],
    "D": ["B"],
}

print(graph["B"])</pre>
        <p>Node B is connected to both A and D, so those appear in its list of neighbors.</p>
      `
    },
    {
      title: "Adding Edges",
      points: 15,
      content: `
        <p>In an undirected graph, an edge between two nodes goes both ways, so adding an edge
        means updating both nodes' neighbor lists at once.</p>
        <pre>graph = {}

def add_edge(graph, u, v):
    graph.setdefault(u, []).append(v)
    graph.setdefault(v, []).append(u)

add_edge(graph, "A", "B")
add_edge(graph, "A", "C")

print(graph["A"])</pre>
        <p>A is connected to both B and C after these two calls.</p>
      `,
      question: "What does graph['A'] print after these two add_edge calls?",
      answer: "['B', 'C']",
      hint: "Each add_edge call appends the neighbor to both nodes' lists for an undirected graph."
    },
    {
      title: "Directed Graphs",
      points: 15,
      content: `
        <p>In a directed graph, an edge points in only one direction. A points to B, but that
        doesn't automatically mean B points back to A - the two relationships are tracked
        separately.</p>
        <pre>graph = {
    "A": ["B"],
    "B": [],
}

print(graph["B"])</pre>
        <p>B's neighbor list is empty, showing that there's no edge from B back to A.</p>
      `,
      question: "In this directed graph, does graph['B'] show any edge pointing back to A?",
      answer: "No",
      hint: "A directed edge only appears in the list of the node it starts from."
    },
    {
      title: "Adjacency Matrix Alternative",
      points: 20,
      content: `
        <p>Another way to represent a graph is an adjacency matrix: a grid where row i, column j
        holds a 1 if there's an edge between node i and node j, and 0 otherwise. Checking for a
        specific edge is O(1), but the matrix uses O(V^2) space even for sparse graphs.</p>
        <pre>size = 4
matrix = [[0] * size for _ in range(size)]

matrix[0][1] = 1
matrix[1][0] = 1

print(matrix[0])</pre>
        <p>Only position 1 in row 0 was set, showing a single edge between node 0 and node 1.</p>
      `,
      question: "What does matrix[0] print after setting matrix[0][1] = 1?",
      answer: "[0, 1, 0, 0]",
      hint: "Only the second position (index 1) was changed from its default of 0."
    }
  ]
},
{
  id: "graph-bfs",
  title: "Graph Traversal: BFS",
  icon: "🌊",
  difficulty: "Hard",
    premium: true,
  tags: ["algorithms", "graphs", "bfs"],
  description: "Explore a graph level by level using breadth-first search, and see why it finds the shortest unweighted path.",
  tasks: [
    {
      title: "Breadth-First Search",
      points: 0,
      content: `
        <p>Breadth-first search (BFS) explores a graph one level at a time: it visits all of a
        node's direct neighbors before moving on to their neighbors. It uses a queue to keep
        track of which nodes to visit next, and a visited set to avoid repeating nodes.</p>
        <pre>from collections import deque

graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C"],
}

def bfs(graph, start):
    visited = {start}
    queue = deque([start])
    order = []
    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return order

print(bfs(graph, "A"))</pre>
        <p>Starting from A, BFS visits its neighbors B and C before reaching D, which is one step
        further away.</p>
      `
    },
    {
      title: "Tracing BFS Order",
      points: 20,
      content: `
        <p>Following the queue step by step shows exactly why BFS produces the order it does:
        each node's unvisited neighbors are queued up before the search moves further out.</p>
        <pre>from collections import deque

graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C"],
}

def bfs(graph, start):
    visited = {start}
    queue = deque([start])
    order = []
    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return order

print(bfs(graph, "A"))</pre>
        <p>A is visited first, then its neighbors B and C, and finally D, reached through either
        B or C.</p>
      `,
      question: "What order does bfs(graph, 'A') visit nodes in for this graph?",
      answer: "['A', 'B', 'C', 'D']",
      hint: "BFS explores all neighbors of a node before moving on to the next level."
    },
    {
      title: "Shortest Paths With BFS",
      points: 25,
      content: `
        <p>Because BFS explores level by level, the first time it reaches a target node, it has
        done so using the fewest possible edges - making BFS ideal for shortest-path problems in
        unweighted graphs.</p>
        <pre>from collections import deque

graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C"],
}

def shortest_path(graph, start, target):
    visited = {start}
    queue = deque([[start]])
    while queue:
        path = queue.popleft()
        node = path[-1]
        if node == target:
            return path
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(path + [neighbor])
    return None

print(shortest_path(graph, "A", "D"))</pre>
        <p>The path through B reaches D one step sooner in the queue than the path through C, so
        it's returned first.</p>
      `,
      question: "What shortest path does shortest_path(graph, 'A', 'D') return?",
      answer: "['A', 'B', 'D']",
      hint: "BFS explores level by level, so the first time it reaches the target is via the fewest edges."
    },
    {
      title: "BFS Time Complexity",
      points: 20,
      content: `
        <p>BFS visits every vertex exactly once and examines every edge exactly once (or twice,
        for undirected graphs), giving it a time complexity that scales with the total size of
        the graph.</p>
      `,
      question: "What is the time complexity of BFS on a graph with V vertices and E edges?",
      answer: "O(V + E)",
      hint: "Every vertex is visited once and every edge is examined once."
    }
  ]
},
{
  id: "graph-dfs",
  title: "Graph Traversal: DFS",
  icon: "🕳️",
  difficulty: "Hard",
    premium: true,
  tags: ["algorithms", "graphs", "dfs"],
  description: "Explore a graph as deep as possible along each branch before backtracking, using both recursive and iterative depth-first search.",
  tasks: [
    {
      title: "Depth-First Search",
      points: 0,
      content: `
        <p>Depth-first search (DFS) explores as far as possible down one branch before
        backtracking to try another. It's naturally expressed with recursion: visit a node, then
        recursively visit each unvisited neighbor.</p>
        <pre>graph = {
    "A": ["B", "C"],
    "B": ["D", "E"],
    "C": ["F"],
    "D": [],
    "E": [],
    "F": [],
}

def dfs(graph, node, visited=None, order=None):
    if visited is None:
        visited = set()
        order = []
    visited.add(node)
    order.append(node)
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited, order)
    return order

print(dfs(graph, "A"))</pre>
        <p>DFS follows A to B, then keeps going deeper into B's branch before ever returning to
        try C.</p>
      `
    },
    {
      title: "Tracing DFS Order",
      points: 20,
      content: `
        <p>Following the recursive calls shows how DFS commits fully to one branch before
        backtracking: it goes from A down through B's children before finally visiting C's
        branch.</p>
        <pre>graph = {
    "A": ["B", "C"],
    "B": ["D", "E"],
    "C": ["F"],
    "D": [],
    "E": [],
    "F": [],
}

def dfs(graph, node, visited=None, order=None):
    if visited is None:
        visited = set()
        order = []
    visited.add(node)
    order.append(node)
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited, order)
    return order

print(dfs(graph, "A"))</pre>
        <p>A leads to B, B leads to D then E, and only after B's whole branch is exhausted does
        the search return to visit C, then F.</p>
      `,
      question: "What order does dfs(graph, 'A') visit nodes in for this graph (A connects to B and C; B connects to D and E; C connects to F)?",
      answer: "['A', 'B', 'D', 'E', 'C', 'F']",
      hint: "DFS goes as deep as possible down one branch before backtracking to try the next."
    },
    {
      title: "Iterative DFS With a Stack",
      points: 25,
      content: `
        <p>DFS can also be written iteratively using an explicit stack instead of recursive
        function calls, which avoids Python's recursion depth limit on very deep graphs.</p>
        <pre>graph = {
    "A": ["B", "C"],
    "B": ["D", "E"],
    "C": ["F"],
    "D": [],
    "E": [],
    "F": [],
}

def dfs_iterative(graph, start):
    visited = set()
    stack = [start]
    order = []
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            order.append(node)
            for neighbor in reversed(graph[node]):
                if neighbor not in visited:
                    stack.append(neighbor)
    return order

print(dfs_iterative(graph, "A"))</pre>
        <p>Pushing neighbors in reversed order keeps the visiting order identical to the
        recursive version.</p>
      `,
      question: "What order does dfs_iterative(graph, 'A') produce, using an explicit stack instead of recursion?",
      answer: "['A', 'B', 'D', 'E', 'C', 'F']",
      hint: "Pushing neighbors in reversed order onto the stack preserves the same visiting order as the recursive version."
    },
    {
      title: "DFS Time Complexity",
      points: 20,
      content: `
        <p>Like BFS, DFS visits every vertex exactly once and inspects every edge exactly once,
        giving it the same overall time complexity, even though the order it visits nodes in is
        very different.</p>
      `,
      question: "What is the time complexity of DFS on a graph with V vertices and E edges?",
      answer: "O(V + E)",
      hint: "Like BFS, DFS visits every vertex once and inspects every edge once."
    }
  ]
},
{
  id: "linear-search",
  title: "Linear Search",
  icon: "🔍",
  difficulty: "Easy",
  tags: ["algorithms", "searching"],
  description: "Find a target value in an unsorted list by checking every item in order, one at a time.",
  tasks: [
    {
      title: "Searching One Item at a Time",
      points: 0,
      content: `
        <p>Linear search is the simplest search algorithm: check each item in the list, in
        order, until you find the target or run out of items. It works on any list, sorted or
        not.</p>
        <pre>def linear_search(items, target):
    for index, value in enumerate(items):
        if value == target:
            return index
    return -1

numbers = [4, 2, 9, 7, 5]
print(linear_search(numbers, 7))</pre>
        <p>7 is found at index 3, after checking three earlier values first.</p>
      `
    },
    {
      title: "Tracing a Search",
      points: 10,
      content: `
        <p>Linear search returns the index of the first match it finds, checking each position in
        order starting from index 0.</p>
        <pre>def linear_search(items, target):
    for index, value in enumerate(items):
        if value == target:
            return index
    return -1

numbers = [4, 2, 9, 7, 5]
print(linear_search(numbers, 9))</pre>
        <p>9 sits at position 2, after 4 and 2 are checked and rejected.</p>
      `,
      question: "What index does linear_search(numbers, 9) return for numbers = [4, 2, 9, 7, 5]?",
      answer: "2",
      hint: "Count from index 0 - how many items come before the value 9?"
    },
    {
      title: "Value Not Found",
      points: 10,
      content: `
        <p>When the target isn't in the list at all, linear search must check every single item
        before concluding it isn't there, and returns a sentinel value to signal failure.</p>
        <pre>def linear_search(items, target):
    for index, value in enumerate(items):
        if value == target:
            return index
    return -1

numbers = [4, 2, 9, 7, 5]
print(linear_search(numbers, 100))</pre>
        <p>100 never appears in the list, so the loop finishes without returning early.</p>
      `,
      question: "What does linear_search return when the target value isn't found in the list?",
      answer: "-1",
      hint: "This is a common sentinel value meaning not found."
    },
    {
      title: "Linear Search Complexity",
      points: 15,
      content: `
        <p>In the worst case - when the target is the last item, or isn't present at all -
        linear search must examine every one of the n items, making its running time grow
        directly with the size of the list.</p>
      `,
      question: "What is the worst-case time complexity of linear search on a list of n items?",
      answer: "O(n)",
      hint: "In the worst case, the target is the last item checked, or isn't present at all."
    }
  ]
},
{
  id: "binary-search",
  title: "Binary Search",
  icon: "🎯",
  difficulty: "Medium",
  tags: ["algorithms", "searching", "binary-search"],
  description: "Find a target value in a sorted sequence in logarithmic time by repeatedly halving the search range.",
  tasks: [
    {
      title: "Halving the Search Range",
      points: 0,
      content: `
        <p>Binary search works on a sorted list by comparing the target to the middle element,
        then discarding the half of the list that can't possibly contain it. This repeats until
        the target is found or the range is empty.</p>
        <pre>def binary_search(items, target):
    low = 0
    high = len(items) - 1
    while low &lt;= high:
        mid = (low + high) // 2
        if items[mid] == target:
            return mid
        elif items[mid] &lt; target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

numbers = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(numbers, 7))</pre>
        <p>7 happens to be the middle element of this seven-item list, so it's found on the very
        first comparison, at index 3.</p>
      `
    },
    {
      title: "Tracing Binary Search",
      points: 15,
      content: `
        <p>Each comparison either finds the target or eliminates half of the remaining range,
        moving the low or high boundary inward.</p>
        <pre>def binary_search(items, target):
    low = 0
    high = len(items) - 1
    while low &lt;= high:
        mid = (low + high) // 2
        if items[mid] == target:
            return mid
        elif items[mid] &lt; target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

numbers = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(numbers, 13))</pre>
        <p>The first check (index 3, value 7) is too small, so the search narrows to the upper
        half, eventually landing on 13 at the last index.</p>
      `,
      question: "What index does binary_search(numbers, 13) return for numbers = [1, 3, 5, 7, 9, 11, 13]?",
      answer: "6",
      hint: "13 is the last element in a 7-item list - what index is that?"
    },
    {
      title: "Binary Search Complexity",
      points: 15,
      content: `
        <p>Because each comparison eliminates roughly half of the remaining items, the number of
        comparisons needed grows very slowly as the list gets larger.</p>
      `,
      question: "What is the time complexity of binary search on a sorted list of n items?",
      answer: "O(log n)",
      hint: "Each comparison eliminates roughly half of the remaining items."
    },
    {
      title: "Binary Search Requires Sorted Data",
      points: 20,
      content: `
        <p>Binary search's halving logic assumes the list is sorted. On unsorted data, comparing
        against the midpoint can send the search in the wrong direction entirely, silently
        producing an incorrect result instead of an error.</p>
        <pre>def binary_search(items, target):
    low = 0
    high = len(items) - 1
    while low &lt;= high:
        mid = (low + high) // 2
        if items[mid] == target:
            return mid
        elif items[mid] &lt; target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

unsorted_numbers = [9, 3, 7, 1, 5]
print(binary_search(unsorted_numbers, 1))</pre>
        <p>Even though 1 is present at index 3, the unsorted ordering causes the search to
        discard the wrong half and miss it entirely.</p>
      `,
      question: "What does binary_search(unsorted_numbers, 1) incorrectly return, even though 1 is present in the list?",
      answer: "-1",
      hint: "Binary search assumes the list is sorted - on unsorted data its halving logic can skip right past the target."
    }
  ]
},
{
  id: "bubble-sort",
  title: "Bubble Sort",
  icon: "🫧",
  difficulty: "Easy",
  tags: ["algorithms", "sorting"],
  description: "Sort a list by repeatedly comparing and swapping adjacent out-of-order elements until everything settles into place.",
  tasks: [
    {
      title: "Bubbling Elements Into Place",
      points: 0,
      content: `
        <p>Bubble sort repeatedly steps through a list, comparing each pair of adjacent elements
        and swapping them if they're out of order. After each full pass, the largest unsorted
        value has "bubbled" to its correct position at the end.</p>
        <pre>def bubble_sort(items):
    n = len(items)
    for i in range(n):
        for j in range(n - i - 1):
            if items[j] &gt; items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
    return items

numbers = [5, 2, 4, 1, 3]
print(bubble_sort(numbers))</pre>
        <p>After enough passes, every out-of-order pair gets swapped and the list ends up fully
        sorted.</p>
      `
    },
    {
      title: "Tracing One Pass",
      points: 10,
      content: `
        <p>During a single pass, each adjacent pair is compared once, from left to right. Any
        pair found out of order gets swapped immediately.</p>
        <pre>def bubble_sort_one_pass(items):
    n = len(items)
    for j in range(n - 1):
        if items[j] &gt; items[j + 1]:
            items[j], items[j + 1] = items[j + 1], items[j]
    return items

numbers = [5, 2, 4, 1, 3]
print(bubble_sort_one_pass(numbers))</pre>
        <p>Following each comparison: 5 and 2 swap, then 5 and 4 swap, then 5 and 1 swap, then 5
        and 3 swap - the value 5 bubbles all the way to the end.</p>
      `,
      question: "What does the list look like after a single pass of bubble sort over [5, 2, 4, 1, 3]?",
      answer: "[2, 4, 1, 3, 5]",
      hint: "One pass bubbles the largest unsorted value all the way to the end."
    },
    {
      title: "Bubble Sort Complexity",
      points: 10,
      content: `
        <p>Bubble sort uses two nested loops - an outer loop that runs roughly n times and an
        inner loop that also runs roughly n times - giving it quadratic growth in the average and
        worst case.</p>
      `,
      question: "What is the time complexity of bubble sort in the average and worst case?",
      answer: "O(n^2)",
      hint: "There are two nested loops, each roughly proportional to n."
    },
    {
      title: "Early Exit Optimization",
      points: 15,
      content: `
        <p>A simple optimization tracks whether any swap happened during a pass. If a full pass
        makes no swaps, the list is already sorted, and the algorithm can stop early instead of
        running all remaining passes.</p>
        <pre>def bubble_sort_optimized(items):
    n = len(items)
    for i in range(n):
        swapped = False
        for j in range(n - i - 1):
            if items[j] &gt; items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
                swapped = True
        if not swapped:
            break
    return items

numbers = [1, 2, 3, 4, 5]
print(bubble_sort_optimized(numbers))</pre>
        <p>Since the list starts already sorted, no adjacent pair is ever out of order.</p>
      `,
      question: "For an already-sorted list, what value does swapped hold at the end of the first pass, causing the loop to break early?",
      answer: "False",
      hint: "No adjacent pair is out of order, so no swap ever happens."
    }
  ]
},
{
  id: "selection-sort",
  title: "Selection Sort",
  icon: "🔢",
  difficulty: "Easy",
  tags: ["algorithms", "sorting"],
  description: "Sort a list by repeatedly scanning for the smallest remaining element and moving it into position.",
  tasks: [
    {
      title: "Selecting the Minimum",
      points: 0,
      content: `
        <p>Selection sort divides the list into a sorted portion at the front and an unsorted
        portion at the back. On each pass, it scans the entire unsorted portion for the smallest
        value and swaps it into the next sorted position.</p>
        <pre>def selection_sort(items):
    n = len(items)
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            if items[j] &lt; items[min_index]:
                min_index = j
        items[i], items[min_index] = items[min_index], items[i]
    return items

numbers = [5, 2, 4, 1, 3]
print(selection_sort(numbers))</pre>
        <p>Each pass grows the sorted front portion by exactly one correctly placed element.</p>
      `
    },
    {
      title: "Finding the Minimum Index",
      points: 10,
      content: `
        <p>The inner loop's job is simply to track the index of the smallest value seen so far in
        the unsorted portion.</p>
        <pre>numbers = [5, 2, 4, 1, 3]
min_index = 0
for j in range(1, len(numbers)):
    if numbers[j] &lt; numbers[min_index]:
        min_index = j

print(min_index)</pre>
        <p>Scanning through the list, 2 first looks smallest, but 1 later replaces it as the new
        minimum.</p>
      `,
      question: "What is the value of min_index after this loop scans [5, 2, 4, 1, 3] for the smallest element?",
      answer: "3",
      hint: "Index 3 holds the value 1, the smallest number in the list."
    },
    {
      title: "Selection Sort Complexity",
      points: 10,
      content: `
        <p>Unlike bubble sort, selection sort always scans the entire remaining unsorted portion
        on every pass to find the minimum, regardless of whether the list is already sorted -
        so its time complexity never improves for easy inputs.</p>
      `,
      question: "What is the time complexity of selection sort, even when the input list is already sorted?",
      answer: "O(n^2)",
      hint: "Selection sort always scans the remaining unsorted portion to find the minimum, no matter the input order."
    },
    {
      title: "Counting Swaps",
      points: 15,
      content: `
        <p>Selection sort performs at most one swap per outer loop iteration - and no swap at
        all when the minimum is already in the correct position. This makes it use far fewer
        writes than bubble sort on the same input.</p>
        <pre>def selection_sort_count_swaps(items):
    n = len(items)
    swaps = 0
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            if items[j] &lt; items[min_index]:
                min_index = j
        if min_index != i:
            items[i], items[min_index] = items[min_index], items[i]
            swaps += 1
    return swaps

numbers = [5, 2, 4, 1, 3]
print(selection_sort_count_swaps(numbers))</pre>
        <p>Tracing it through: the minimum is swapped into place three separate times before the
        list becomes fully sorted.</p>
      `,
      question: "How many swaps does selection_sort_count_swaps perform while sorting [5, 2, 4, 1, 3]?",
      answer: "3",
      hint: "Selection sort swaps at most once per outer loop iteration, only when the minimum isn't already in place."
    }
  ]
},
{
  id: "insertion-sort",
  title: "Insertion Sort",
  icon: "🗂️",
  difficulty: "Easy",
  tags: ["algorithms", "sorting"],
  description: "Sort a list by building up a sorted portion one element at a time, inserting each into its correct spot.",
  tasks: [
    {
      title: "Inserting Into a Sorted Portion",
      points: 0,
      content: `
        <p>Insertion sort builds a sorted portion at the front of the list one item at a time.
        For each new element, it shifts larger elements in the sorted portion to the right until
        it finds the new element's correct spot.</p>
        <pre>def insertion_sort(items):
    for i in range(1, len(items)):
        key = items[i]
        j = i - 1
        while j &gt;= 0 and items[j] &gt; key:
            items[j + 1] = items[j]
            j -= 1
        items[j + 1] = key
    return items

numbers = [5, 2, 4, 1, 3]
print(insertion_sort(numbers))</pre>
        <p>It works much like sorting a hand of playing cards - picking up each new card and
        sliding it into its proper place among the ones already sorted.</p>
      `
    },
    {
      title: "Tracing One Insertion",
      points: 10,
      content: `
        <p>Each step takes the next unsorted element (the key) and shifts every larger element in
        the sorted portion one position to the right, then drops the key into the gap left
        behind.</p>
        <pre>numbers = [2, 5, 4, 1, 3]
i = 2
key = numbers[i]
j = i - 1
while j &gt;= 0 and numbers[j] &gt; key:
    numbers[j + 1] = numbers[j]
    j -= 1
numbers[j + 1] = key

print(numbers)</pre>
        <p>The key, 4, is smaller than 5, so 5 shifts right and 4 takes its place - 2 stays put
        since it's already smaller than 4.</p>
      `,
      question: "What does the list look like after inserting the element at index 2 (value 4) into its correct position among [2, 5, 4, 1, 3]?",
      answer: "[2, 4, 5, 1, 3]",
      hint: "The sorted portion is just the first two elements - shift larger ones right to make room for 4."
    },
    {
      title: "Best-Case Complexity",
      points: 10,
      content: `
        <p>If the input list is already sorted, every element being inserted is already in its
        correct position, so the inner while loop never needs to shift anything - each pass does
        only a single comparison.</p>
      `,
      question: "What is the best-case time complexity of insertion sort, when the input list is already sorted?",
      answer: "O(n)",
      hint: "If every element is already in its correct place, the inner loop never shifts anything."
    },
    {
      title: "Worst-Case Complexity",
      points: 15,
      content: `
        <p>If the input list is in reverse order, every new element must shift past all of the
        previously sorted elements before finding its spot, giving insertion sort the same
        quadratic worst case as bubble and selection sort.</p>
      `,
      question: "What is the worst-case time complexity of insertion sort, when the input list is in reverse order?",
      answer: "O(n^2)",
      hint: "Every new element must shift past all previously sorted elements before it."
    }
  ]
},
{
  id: "merge-sort",
  title: "Merge Sort",
  icon: "🔀",
  difficulty: "Hard",
  tags: ["algorithms", "sorting", "recursion"],
  description: "Sort a list by recursively splitting it in half, sorting each half, and merging the sorted results back together.",
  tasks: [
    {
      title: "Divide and Conquer Sorting",
      points: 0,
      content: `
        <p>Merge sort splits the list in half, recursively sorts each half, and then merges the
        two sorted halves back into one sorted list. The key work happens in the merge step,
        which walks both halves together, always taking the smaller current element.</p>
        <pre>def merge(left, right):
    result = []
    i = j = 0
    while i &lt; len(left) and j &lt; len(right):
        if left[i] &lt;= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

def merge_sort(items):
    if len(items) &lt;= 1:
        return items
    mid = len(items) // 2
    left = merge_sort(items[:mid])
    right = merge_sort(items[mid:])
    return merge(left, right)

numbers = [5, 2, 4, 1, 3]
print(merge_sort(numbers))</pre>
        <p>Splitting continues down to single-element lists, which are trivially sorted, and
        merging then rebuilds the full sorted list on the way back up.</p>
      `
    },
    {
      title: "Tracing the Merge Step",
      points: 20,
      content: `
        <p>Given two already-sorted lists, merge walks through both at once with two pointers,
        always taking whichever current element is smaller, until one list runs out.</p>
        <pre>def merge(left, right):
    result = []
    i = j = 0
    while i &lt; len(left) and j &lt; len(right):
        if left[i] &lt;= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

print(merge([1, 4, 7], [2, 3, 8]))</pre>
        <p>Comparing 1 and 2 takes 1, then 4 and 2 takes 2, then 4 and 3 takes 3, then 4 and 8
        takes 4, then 7 and 8 takes 7 - leaving only 8 to append at the end.</p>
      `,
      question: "What does merge([1, 4, 7], [2, 3, 8]) return?",
      answer: "[1, 2, 3, 4, 7, 8]",
      hint: "Walk through both lists together, always taking the smaller of the two current elements."
    },
    {
      title: "Merge Sort Complexity",
      points: 20,
      content: `
        <p>The list is split in half roughly log n times, and merging all the pieces back
        together at each level costs O(n) total - multiplying those gives merge sort its
        consistent performance in every case.</p>
      `,
      question: "What is the time complexity of merge sort in all cases (best, average, and worst)?",
      answer: "O(n log n)",
      hint: "The list is split in half log n times, and merging at each level costs O(n)."
    },
    {
      title: "Merge Sort's Space Cost",
      points: 20,
      content: `
        <p>Unlike bubble, selection, and insertion sort, which rearrange elements within the
        original list, merge sort's merge step builds brand new lists to hold the merged results
        - so it needs extra memory proportional to the input size.</p>
      `,
      question: "What is the additional space complexity of the typical merge sort implementation shown above?",
      answer: "O(n)",
      hint: "The merge step builds new lists rather than sorting within the original array."
    },
    {
      title: "Merge Sort Is Stable",
      points: 25,
      content: `
        <p>A sorting algorithm is stable if elements that compare equal keep their original
        relative order. Because merge uses <code class="inline">&lt;=</code> rather than
        <code class="inline">&lt;</code>, ties always favor whichever element came from the left
        list first.</p>
        <pre>def merge(left, right):
    result = []
    i = j = 0
    while i &lt; len(left) and j &lt; len(right):
        if left[i][0] &lt;= right[j][0]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

left = [(1, "a")]
right = [(1, "b")]
print(merge(left, right))</pre>
        <p>Both tuples have the same first value, so the tie-breaking rule decides which one
        appears first in the merged result.</p>
      `,
      question: "When two elements are equal, which one does this merge function place first in the result?",
      answer: "the one from the left list",
      hint: "The comparison favors the left side when values are equal, using less-than-or-equal rather than strictly less-than - this is what makes merge sort stable."
    }
  ]
},
{
  id: "quick-sort",
  title: "Quick Sort",
  icon: "⚡",
  difficulty: "Hard",
  tags: ["algorithms", "sorting", "recursion"],
  description: "Sort a list by choosing a pivot, partitioning elements around it, and recursively sorting each partition.",
  tasks: [
    {
      title: "Partitioning Around a Pivot",
      points: 0,
      content: `
        <p>Quick sort picks a pivot value, then rearranges the list so everything smaller than
        the pivot ends up before it and everything larger ends up after it - this is called
        partitioning. It then recursively sorts each side of the pivot.</p>
        <pre>def partition(items, low, high):
    pivot = items[high]
    i = low - 1
    for j in range(low, high):
        if items[j] &lt;= pivot:
            i += 1
            items[i], items[j] = items[j], items[i]
    items[i + 1], items[high] = items[high], items[i + 1]
    return i + 1

def quick_sort(items, low=0, high=None):
    if high is None:
        high = len(items) - 1
    if low &lt; high:
        pivot_index = partition(items, low, high)
        quick_sort(items, low, pivot_index - 1)
        quick_sort(items, pivot_index + 1, high)
    return items

numbers = [5, 2, 4, 1, 3]
print(quick_sort(numbers))</pre>
        <p>After each partition step, the pivot lands in its final sorted position, splitting the
        problem into two smaller ones.</p>
      `
    },
    {
      title: "Tracing a Partition",
      points: 20,
      content: `
        <p>This partition scheme uses the last element as the pivot, then walks through the rest
        of the list swapping any element smaller than or equal to the pivot into the growing
        "smaller" region.</p>
        <pre>def partition(items, low, high):
    pivot = items[high]
    i = low - 1
    for j in range(low, high):
        if items[j] &lt;= pivot:
            i += 1
            items[i], items[j] = items[j], items[i]
    items[i + 1], items[high] = items[high], items[i + 1]
    return i + 1

numbers = [5, 2, 4, 1, 3]
pivot_index = partition(numbers, 0, 4)
print(pivot_index, numbers)</pre>
        <p>The pivot, 3, ends up at index 2, with the smaller values 2 and 1 before it and the
        larger values 5 and 4 after it.</p>
      `,
      question: "What pivot_index and resulting list does partition(numbers, 0, 4) produce for numbers = [5, 2, 4, 1, 3], using the last element as pivot?",
      answer: "2, [2, 1, 3, 5, 4]",
      hint: "The pivot (3) ends up at its final sorted position, with smaller elements before it and larger ones after."
    },
    {
      title: "Average-Case Complexity",
      points: 20,
      content: `
        <p>On average, a randomly chosen pivot splits the list into two roughly equal halves each
        time, giving quick sort the same overall growth rate as merge sort in typical cases.</p>
      `,
      question: "What is the average-case time complexity of quick sort?",
      answer: "O(n log n)",
      hint: "On average, each partition step splits the list into two roughly equal halves."
    },
    {
      title: "Worst-Case Complexity",
      points: 20,
      content: `
        <p>If the pivot always turns out to be the smallest or largest remaining element, each
        partition only removes one element from consideration instead of splitting the list in
        half - this happens on already-sorted input when the pivot is always the first or last
        element.</p>
      `,
      question: "What is the worst-case time complexity of quick sort, which occurs when the pivot is always the smallest or largest remaining element?",
      answer: "O(n^2)",
      hint: "This happens on already-sorted input when you always pick the first or last element as the pivot."
    },
    {
      title: "Space Complexity",
      points: 25,
      content: `
        <p>Unlike merge sort, quick sort rearranges elements within the original list rather than
        building new ones, so its extra memory use comes only from the recursive call stack, not
        from copying data.</p>
      `,
      question: "What is the typical additional space complexity of an in-place quick sort implementation, counting recursion stack depth?",
      answer: "O(log n)",
      hint: "Unlike merge sort, quick sort sorts within the original list - the extra space comes only from recursive calls."
    }
  ]
},
{
  id: "dynamic-programming-intro",
  title: "Dynamic Programming Intro",
  icon: "🧩",
  difficulty: "Hard",
    premium: true,
  tags: ["algorithms", "dynamic-programming"],
  description: "Solve problems efficiently by breaking them into overlapping subproblems and caching results with memoization and tabulation.",
  tasks: [
    {
      title: "Overlapping Subproblems",
      points: 0,
      content: `
        <p>Dynamic programming (DP) applies when a problem can be broken into smaller
        subproblems that overlap - the same subproblem gets solved over and over in a naive
        recursive solution. A classic example is computing Fibonacci numbers.</p>
        <pre>def fib_naive(n):
    if n &lt;= 1:
        return n
    return fib_naive(n - 1) + fib_naive(n - 2)

print(fib_naive(10))</pre>
        <p>This works, but fib_naive(n - 2) gets recomputed from scratch many times across the
        recursive calls, wasting a huge amount of work for larger n.</p>
      `
    },
    {
      title: "The Cost of Naive Recursion",
      points: 20,
      content: `
        <p>Without any caching, each call to fib_naive branches into two more calls, and the same
        smaller values get recomputed repeatedly - the number of calls roughly doubles with each
        increase in n.</p>
      `,
      question: "What is the time complexity of the naive recursive Fibonacci function, without memoization?",
      answer: "O(2^n)",
      hint: "Each call branches into two more calls, repeating the same subproblems many times."
    },
    {
      title: "Memoization: Caching Results",
      points: 20,
      content: `
        <p>Memoization is a top-down DP technique: store each subproblem's result the first time
        it's computed, and reuse it instantly the next time the same subproblem comes up, instead
        of recomputing it.</p>
        <pre>def fib_memo(n, cache=None):
    if cache is None:
        cache = {}
    if n &lt;= 1:
        return n
    if n in cache:
        return cache[n]
    cache[n] = fib_memo(n - 1, cache) + fib_memo(n - 2, cache)
    return cache[n]

print(fib_memo(30))</pre>
        <p>Even fib_memo(30), which would take an enormous number of calls without caching,
        returns almost instantly.</p>
      `,
      question: "What is the time complexity of the memoized Fibonacci function, where each subproblem is only computed once?",
      answer: "O(n)",
      hint: "Caching results means every value from 0 to n is computed exactly once."
    },
    {
      title: "Tabulation: Building Bottom-Up",
      points: 20,
      content: `
        <p>Tabulation is the bottom-up counterpart to memoization: instead of recursing downward
        from n, it builds a table of results starting from the smallest subproblems and working
        up to the answer.</p>
        <pre>def fib_tabulation(n):
    table = [0] * (n + 1)
    table[1] = 1
    for i in range(2, n + 1):
        table[i] = table[i - 1] + table[i - 2]
    return table[n]

print(fib_tabulation(10))</pre>
        <p>Each entry in the table is built directly from the two entries before it, with no
        recursion at all.</p>
      `,
      question: "What does fib_tabulation(10) return?",
      answer: "55",
      hint: "This builds the same Fibonacci sequence bottom-up instead of top-down."
    },
    {
      title: "Applying DP: Climbing Stairs",
      points: 25,
      content: `
        <p>The same pattern shows up in many other problems. Counting the number of distinct ways
        to climb n stairs, taking either 1 or 2 steps at a time, follows the exact same recurrence
        as Fibonacci: the ways to reach step n is the sum of the ways to reach the two steps
        before it.</p>
        <pre>def climb_stairs(n):
    if n &lt;= 2:
        return n
    ways = [0] * (n + 1)
    ways[1] = 1
    ways[2] = 2
    for i in range(3, n + 1):
        ways[i] = ways[i - 1] + ways[i - 2]
    return ways[n]

print(climb_stairs(5))</pre>
        <p>Building the table step by step: 1, 2, 3, 5, 8 - each value is the sum of the two
        before it.</p>
      `,
      question: "How many distinct ways are there to climb 5 stairs, taking 1 or 2 steps at a time, according to climb_stairs(5)?",
      answer: "8",
      hint: "This follows the same recurrence as Fibonacci - each step count is the sum of the previous two."
    }
  ]
},

  /* ---- batch-08.js ---- */
  {
  id: "intro-to-testing",
  title: "Intro to Testing",
  icon: "🧪",
  difficulty: "Easy",
  tags: ["testing", "quality", "basics"],
  description: "Understand why automated tests matter, how they are structured, and how the Arrange-Act-Assert pattern keeps them readable.",
  tasks: [
    {
      title: "Why Automate Testing",
      points: 0,
      content: `
        <p>Software testing means checking that your code behaves the way you expect. You can do
        this manually by running the program and poking at it, but manual testing is slow and easy
        to forget. <b>Automated tests</b> are small programs that check your code for you, every
        time you run them.</p>
        <p>A test typically calls a piece of code with known input and checks that the output
        matches what you expect. If it doesn't, the test fails and tells you exactly what broke.</p>
        <pre>def add(a, b):
    return a + b

def test_add():
    result = add(2, 3)
    assert result == 5, "add(2, 3) should equal 5"

test_add()
print("Test passed!")</pre>
        <p>Here <code class="inline">assert</code> checks a condition and raises an error if it's
        false. Real test frameworks build on this same idea but add much more structure.</p>
      `
    },
    {
      title: "Types of Tests",
      points: 10,
      content: `
        <p>Not all tests check the same thing. A <b>unit test</b> checks one small piece of code —
        usually a single function — in isolation from the rest of the system. An
        <b>integration test</b> checks that several pieces work correctly together, such as a
        function that reads from a database. An <b>end-to-end test</b> checks an entire workflow
        from the user's point of view.</p>
        <p>Most projects have many unit tests, fewer integration tests, and only a handful of
        end-to-end tests, since the bigger tests are slower and more fragile.</p>
        <pre>def test_unit_example():
    assert add(1, 1) == 2  # checks one function alone

def test_integration_example():
    save_user_to_db("Ada")
    assert get_user_from_db("Ada") is not None  # checks db + function together</pre>
      `,
      question: "What type of test checks a single function in isolation from the rest of the system?",
      answer: "unit test",
      hint: "It tests the smallest possible piece of code on its own."
    },
    {
      title: "Assertions",
      points: 10,
      content: `
        <p>Most testing in Python starts with the <code class="inline">assert</code> statement.
        It checks that a condition is true, and if it isn't, it raises an
        <code class="inline">AssertionError</code> and stops execution.</p>
        <pre>def test_multiply():
    assert 3 * 4 == 12
    assert 3 * 4 != 13

test_multiply()
print("All assertions passed")</pre>
        <p>You can also add an optional message that's shown when the assertion fails, which makes
        debugging failed tests much faster.</p>
      `,
      question: "Which Python keyword raises an AssertionError when a condition is false?",
      answer: "assert",
      hint: "It's the same word used to check conditions inside a test."
    },
    {
      title: "Arrange, Act, Assert",
      points: 10,
      content: `
        <p>A common way to structure a test is the <b>Arrange-Act-Assert</b> pattern. First you
        <b>arrange</b> the data and objects you need, then you <b>act</b> by calling the code
        you're testing, and finally you <b>assert</b> that the result is what you expected.</p>
        <pre>def test_discount():
    # Arrange
    price = 100
    discount_percent = 20

    # Act
    final_price = price - (price * discount_percent / 100)

    # Assert
    assert final_price == 80</pre>
        <p>Splitting a test into these three clear steps makes it much easier to read and maintain.</p>
      `,
      question: "In the Arrange-Act-Assert pattern, which step calls the code being tested?",
      answer: "Act",
      hint: "It comes second, right after setting things up."
    }
  ]
},
{
  id: "unittest-basics",
  title: "unittest Basics",
  icon: "🔧",
  difficulty: "Medium",
  tags: ["testing", "unittest", "standard-library"],
  description: "Write test cases using Python's built-in unittest framework, including assertions, setup, teardown, and exception checks.",
  tasks: [
    {
      title: "The unittest Module",
      points: 0,
      content: `
        <p>Python's standard library includes a built-in testing framework called
        <code class="inline">unittest</code>. Tests are written as methods inside a class that
        inherits from <code class="inline">unittest.TestCase</code>, and each test method's name
        must start with <code class="inline">test_</code>.</p>
        <pre>import unittest

class TestMath(unittest.TestCase):
    def test_addition(self):
        self.assertEqual(1 + 1, 2)

    def test_subtraction(self):
        self.assertEqual(5 - 3, 2)

if __name__ == "__main__":
    unittest.main()</pre>
        <p>Running this file executes every method starting with <code class="inline">test_</code>
        and reports which ones passed or failed.</p>
      `
    },
    {
      title: "Assertion Methods",
      points: 15,
      content: `
        <p>Instead of plain <code class="inline">assert</code>, unittest gives you methods like
        <code class="inline">assertEqual</code>, <code class="inline">assertTrue</code>, and
        <code class="inline">assertRaises</code>. These produce clearer failure messages that show
        exactly what was expected versus what was received.</p>
        <pre>import unittest

class TestString(unittest.TestCase):
    def test_upper(self):
        self.assertEqual("hello".upper(), "HELLO")

    def test_is_digit(self):
        self.assertTrue("123".isdigit())
        self.assertFalse("abc".isdigit())</pre>
      `,
      question: "Which unittest method checks that two values are exactly equal?",
      answer: "assertEqual",
      hint: "Its name literally describes what it checks."
    },
    {
      title: "setUp and tearDown",
      points: 15,
      content: `
        <p>When several tests need the same starting data, repeating that setup in every method is
        wasteful. A <code class="inline">TestCase</code> can define a
        <code class="inline">setUp</code> method that runs automatically before every test, and a
        <code class="inline">tearDown</code> method that runs after each one to clean up.</p>
        <pre>import unittest

class TestList(unittest.TestCase):
    def setUp(self):
        self.numbers = [1, 2, 3]

    def test_length(self):
        self.assertEqual(len(self.numbers), 3)

    def test_append(self):
        self.numbers.append(4)
        self.assertEqual(self.numbers, [1, 2, 3, 4])</pre>
      `,
      question: "Which method runs automatically before every single test in a TestCase?",
      answer: "setUp",
      hint: "It's spelled with a lowercase s and capital U."
    },
    {
      title: "Testing for Exceptions",
      points: 15,
      content: `
        <p>Sometimes the correct behavior is for code to raise an exception, and you need to test
        that it actually does. <code class="inline">assertRaises</code> is used as a context
        manager: the test passes only if the given exception is raised inside the block.</p>
        <pre>import unittest

def divide(a, b):
    if b == 0:
        raise ValueError("cannot divide by zero")
    return a / b

class TestDivide(unittest.TestCase):
    def test_divide_by_zero(self):
        with self.assertRaises(ValueError):
            divide(10, 0)</pre>
      `,
      question: "Which unittest method or context manager checks that a specific exception is raised?",
      answer: "assertRaises",
      hint: "It's used with a with-statement around the risky code."
    }
  ]
},
{
  id: "pytest-basics",
  title: "pytest Basics",
  icon: "✅",
  difficulty: "Medium",
  tags: ["testing", "pytest"],
  description: "Write simpler, more readable tests using the popular pytest framework, from plain asserts to fixtures and parametrized tests.",
  tasks: [
    {
      title: "Why pytest",
      points: 0,
      content: `
        <p><code class="inline">pytest</code> is a popular third-party testing framework that
        favors plain functions over classes and plain <code class="inline">assert</code>
        statements over special assertion methods. Any function whose name starts with
        <code class="inline">test_</code> in a file named like <code class="inline">test_*.py</code>
        is automatically discovered and run.</p>
        <pre># test_math.py
def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5

def test_add_negative():
    assert add(-1, -1) == -2</pre>
        <p>Running <code class="inline">pytest</code> in the terminal finds this file automatically
        and reports each test's result, along with a detailed diff when a plain assert fails.</p>
      `
    },
    {
      title: "Plain Asserts",
      points: 15,
      content: `
        <p>Unlike unittest, pytest needs no special assertion methods — you write a plain
        <code class="inline">assert</code> and pytest inspects it to build a helpful failure
        message on its own, showing the actual values involved.</p>
        <pre>def test_list_contents():
    numbers = [1, 2, 3]
    assert 4 in numbers</pre>
        <p>If this test fails, pytest prints the full list and points out that 4 was missing,
        without you having to write any extra code.</p>
      `,
      question: "What single statement does pytest use to check conditions in a test, with no special method needed?",
      answer: "assert",
      hint: "It's the same plain Python keyword, not a method call."
    },
    {
      title: "Fixtures",
      points: 15,
      content: `
        <p>Pytest <b>fixtures</b> provide reusable setup code. You write a function decorated with
        <code class="inline">@pytest.fixture</code>, and any test that wants that setup simply
        takes it as a parameter with the same name.</p>
        <pre>import pytest

@pytest.fixture
def sample_list():
    return [1, 2, 3]

def test_length(sample_list):
    assert len(sample_list) == 3

def test_sum(sample_list):
    assert sum(sample_list) == 6</pre>
      `,
      question: "Which decorator marks a function as reusable setup code in pytest?",
      answer: "@pytest.fixture",
      hint: "It starts with the at-sign and names the module."
    },
    {
      title: "Parametrizing Tests",
      points: 15,
      content: `
        <p>Testing the same function with many different inputs usually means writing many
        near-identical test functions. <code class="inline">@pytest.mark.parametrize</code> lets
        you supply a list of input and expected-output pairs and runs the same test body once for
        each pair.</p>
        <pre>import pytest

def square(x):
    return x * x

@pytest.mark.parametrize("value, expected", [
    (2, 4),
    (3, 9),
    (-2, 4),
])
def test_square(value, expected):
    assert square(value) == expected</pre>
      `,
      question: "Which pytest decorator runs one test function multiple times with different input values?",
      answer: "parametrize",
      hint: "Its full name is @pytest.mark.parametrize."
    }
  ]
},
{
  id: "mocking",
  title: "Mocking in Tests",
  icon: "🎭",
  difficulty: "Hard",
  tags: ["testing", "mocking", "unittest"],
  description: "Replace real dependencies like networks and databases with fakes using unittest.mock, so tests stay fast and reliable.",
  tasks: [
    {
      title: "What is Mocking",
      points: 0,
      content: `
        <p>Some code depends on things that are slow, unreliable, or have side effects in tests —
        network requests, databases, or the current time. <b>Mocking</b> means replacing those real
        dependencies with fake stand-ins so your tests stay fast and predictable.</p>
        <p>Python's <code class="inline">unittest.mock</code> module provides a
        <code class="inline">Mock</code> object that can pretend to be almost anything. It records
        how it was called and lets you decide what it returns.</p>
        <pre>from unittest.mock import Mock

fake_response = Mock()
fake_response.status_code = 200
fake_response.json.return_value = {"result": "ok"}

print(fake_response.status_code)
print(fake_response.json())</pre>
        <p>Nothing here made a real network call — the mock simply returned whatever we told it to.</p>
      `
    },
    {
      title: "Patching a Dependency",
      points: 20,
      content: `
        <p><code class="inline">unittest.mock.patch</code> temporarily replaces an object — often a
        function that makes a real network call — with a mock for the duration of a test, then
        restores the original afterward automatically.</p>
        <pre>from unittest.mock import patch
import requests

def get_status(url):
    response = requests.get(url)
    return response.status_code

def test_get_status():
    with patch("requests.get") as mock_get:
        mock_get.return_value.status_code = 200
        assert get_status("https://example.com") == 200</pre>
        <p>No real HTTP request happens; <code class="inline">requests.get</code> is swapped out
        just inside the with-block.</p>
      `,
      question: "Which unittest.mock function temporarily replaces a real object with a mock during a test?",
      answer: "patch",
      hint: "It's often used as a context manager or decorator."
    },
    {
      title: "Controlling Mock Behavior",
      points: 20,
      content: `
        <p>A mock's <code class="inline">return_value</code> sets what it gives back every time
        it's called. <code class="inline">side_effect</code> is more flexible: it can be a
        function, an exception to raise, or a list of values returned one after another on
        successive calls.</p>
        <pre>from unittest.mock import Mock

mock_fn = Mock(side_effect=[1, 2, 3])
print(mock_fn())  # 1
print(mock_fn())  # 2
print(mock_fn())  # 3

error_mock = Mock(side_effect=ValueError("boom"))
try:
    error_mock()
except ValueError as e:
    print("caught:", e)</pre>
      `,
      question: "Which mock attribute lets you make a mock raise an exception when called?",
      answer: "side_effect",
      hint: "The same attribute can also return a different value on each call."
    },
    {
      title: "Asserting Mock Calls",
      points: 20,
      content: `
        <p>Besides controlling what a mock returns, you can check <b>how</b> it was used —
        whether it was called at all, how many times, and with what arguments. This confirms your
        code actually talked to its dependency correctly.</p>
        <pre>from unittest.mock import Mock

def save_user(db, name):
    db.insert(name)

fake_db = Mock()
save_user(fake_db, "Ada")

fake_db.insert.assert_called_once_with("Ada")</pre>
        <p>If <code class="inline">insert</code> had been called with different arguments, or not
        called at all, this assertion would fail with a clear error.</p>
      `,
      question: "Which mock method checks that a mock was called exactly once with specific arguments?",
      answer: "assert_called_once_with",
      hint: "It combines checking the call count and the arguments in one method."
    }
  ]
},
{
  id: "tdd-concepts",
  title: "Test-Driven Development",
  icon: "🔁",
  difficulty: "Medium",
  tags: ["testing", "tdd", "workflow"],
  description: "Practice test-driven development by writing a failing test before the code that makes it pass, then refactoring safely.",
  tasks: [
    {
      title: "The Red-Green-Refactor Cycle",
      points: 0,
      content: `
        <p><b>Test-Driven Development</b> (TDD) flips the usual order of writing code: instead of
        writing a function and then testing it, you write a failing test first that describes the
        behavior you want, then write just enough code to make it pass.</p>
        <p>The cycle has three steps, often called <b>red-green-refactor</b>: write a test that
        fails (red), write the simplest code that makes it pass (green), then clean up the code
        while keeping the test passing (refactor).</p>
        <pre># Step 1: red - write the test first, before the function exists
def test_square():
    assert square(4) == 16

# Step 2: green - write the minimum code to pass
def square(x):
    return x * x</pre>
      `
    },
    {
      title: "Red: A Failing Test",
      points: 15,
      content: `
        <p>The first step in TDD is deliberately writing a test for code that doesn't exist yet,
        and watching it fail. This confirms the test actually tests something — a test that
        passes before you've written any code isn't testing anything real.</p>
        <pre>def test_is_even():
    assert is_even(4) is True
    assert is_even(3) is False

# Running this now fails with NameError: is_even is not defined</pre>
      `,
      question: "In red-green-refactor, what color represents the step where the test fails because the code does not exist yet?",
      answer: "red",
      hint: "It's the same word used for a failing test in most test runners' output."
    },
    {
      title: "Green: Make It Pass",
      points: 15,
      content: `
        <p>Once you have a failing test, you write the smallest amount of code needed to make it
        pass — no extra features, no premature optimization. The goal is just to turn the test
        green as quickly as possible.</p>
        <pre>def is_even(n):
    return n % 2 == 0

def test_is_even():
    assert is_even(4) is True
    assert is_even(3) is False

test_is_even()
print("Test passes now")</pre>
      `,
      question: "In TDD, what is the term for the step where you write the minimum code needed to pass the test?",
      answer: "green",
      hint: "It's the opposite color of the failing step."
    },
    {
      title: "Refactor: Clean It Up",
      points: 15,
      content: `
        <p>With a passing test in place, you're free to improve the code's structure, naming, or
        performance without changing its behavior. The test suite acts as a safety net — if
        refactoring breaks something, a test will fail immediately.</p>
        <pre>def is_even(n):
    return not n % 2  # refactored, still passes the same test

def test_is_even():
    assert is_even(4) is True
    assert is_even(3) is False</pre>
      `,
      question: "What is the final step of the TDD cycle, where working code is cleaned up without changing its behavior?",
      answer: "refactor",
      hint: "It's the third word in 'red-green-refactor'."
    }
  ]
},
{
  id: "pep8-style",
  title: "Code Style & PEP 8",
  icon: "📏",
  difficulty: "Easy",
  tags: ["style", "pep8", "quality"],
  description: "Follow Python's official style guide, PEP 8, to write consistently formatted, readable code that other developers can follow easily.",
  tasks: [
    {
      title: "What is PEP 8",
      points: 0,
      content: `
        <p><b>PEP 8</b> is Python's official style guide. It doesn't change how your code runs,
        but following it makes code easier for other people — and your future self — to read.
        Most Python projects and tools expect PEP 8 style by default.</p>
        <pre># PEP 8 style
def calculate_total(price, tax_rate):
    return price + (price * tax_rate)

total_amount = calculate_total(100, 0.2)
print(total_amount)</pre>
        <p>Notice the lowercase, underscore-separated names and the spaces around operators —
        both are core PEP 8 conventions.</p>
      `
    },
    {
      title: "Naming Conventions",
      points: 10,
      content: `
        <p>PEP 8 recommends <code class="inline">snake_case</code> (lowercase words separated by
        underscores) for variable and function names, and <code class="inline">CapWords</code>
        (also called PascalCase) for class names.</p>
        <pre># Good
user_name = "Ada"

class ShoppingCart:
    pass

# Not PEP 8 style
UserName = "Ada"

class shopping_cart:
    pass</pre>
      `,
      question: "What naming style does PEP 8 recommend for ordinary variable and function names?",
      answer: "snake_case",
      hint: "Lowercase words joined with underscores."
    },
    {
      title: "Line Length and Indentation",
      points: 10,
      content: `
        <p>PEP 8 recommends limiting lines to <b>79 characters</b> and using <b>4 spaces</b> per
        indentation level — never tabs mixed with spaces. Consistent indentation is especially
        important in Python since it defines code blocks.</p>
        <pre>def greet(name):
    if name:
        print("Hello, " + name)
    else:
        print("Hello, stranger")</pre>
      `,
      question: "How many spaces does PEP 8 recommend for each level of indentation?",
      answer: "4",
      hint: "It's a single-digit number, and never mixed with tab characters."
    },
    {
      title: "Whitespace Rules",
      points: 10,
      content: `
        <p>PEP 8 also covers whitespace: put a single space around binary operators like
        <code class="inline">=</code>, <code class="inline">+</code>, and
        <code class="inline">==</code>, but don't add spaces just inside parentheses or before a
        function call's opening parenthesis.</p>
        <pre># PEP 8 style
result = (1 + 2) * 3
print(result)

# Not PEP 8 style
result=( 1+2 )*3
print (result)</pre>
      `,
      question: "According to PEP 8, should you put a space between a function name and its opening parenthesis when calling it?",
      answer: "no",
      hint: "Think of how print( is normally written versus print (."
    }
  ]
},
{
  id: "type-checking-mypy",
  title: "Type Checking with mypy",
  icon: "🏷️",
  difficulty: "Medium",
  tags: ["typing", "mypy", "static-analysis"],
  description: "Catch type errors before your code ever runs by adding type hints and checking them with the mypy tool.",
  tasks: [
    {
      title: "Type Hints and mypy",
      points: 0,
      content: `
        <p>Python is dynamically typed, but you can add optional <b>type hints</b> to document
        what types a function expects and returns. On their own, type hints don't stop your code
        from running with the wrong type — Python ignores them at runtime.</p>
        <p><b>mypy</b> is a separate tool that reads your type hints and checks your code for type
        errors before you ever run it.</p>
        <pre>def add(a: int, b: int) -> int:
    return a + b

print(add(2, 3))       # fine
print(add("2", "3"))   # runs fine at runtime, but mypy would flag this</pre>
        <p>Running <code class="inline">mypy your_file.py</code> in the terminal analyzes the file
        and reports any type mismatches it finds.</p>
      `
    },
    {
      title: "Basic Type Hints",
      points: 15,
      content: `
        <p>A type hint follows a variable or parameter name after a colon, and a function's return
        type is written after an arrow. These are just hints — annotations that tools like mypy
        read, but that don't change how the function executes.</p>
        <pre>def greet(name: str) -> str:
    return "Hello, " + name

age: int = 30
price: float = 9.99</pre>
      `,
      question: "Which symbol is written between a function's parameter list and its return type hint?",
      answer: "->",
      hint: "It looks like a small arrow made of a dash and a greater-than sign."
    },
    {
      title: "Optional Values",
      points: 15,
      content: `
        <p>When a value might be a certain type or might be <code class="inline">None</code>,
        mypy expects you to say so explicitly using <code class="inline">Optional</code> from the
        <code class="inline">typing</code> module, or the newer union syntax.</p>
        <pre>from typing import Optional

def find_user(user_id: int) -> Optional[str]:
    if user_id == 1:
        return "Ada"
    return None</pre>
        <p>Without <code class="inline">Optional</code>, mypy would complain that a function
        declared to return <code class="inline">str</code> sometimes returns
        <code class="inline">None</code> instead.</p>
      `,
      question: "Which typing construct marks a value as being either a given type or None?",
      answer: "Optional",
      hint: "It comes from the typing module and wraps another type."
    },
    {
      title: "Running the Checker",
      points: 15,
      content: `
        <p>mypy's real value is catching mistakes before they reach production, such as passing
        the wrong type into a function that expects something else. Running it as part of your
        workflow turns these into an error message you see immediately, instead of a bug a user
        finds later.</p>
        <pre>def double(n: int) -> int:
    return n * 2

result = double("5")  # mypy error: Argument 1 has incompatible type "str"; expected "int"</pre>
      `,
      question: "What command-line tool would you run on a .py file to check its type hints before running it?",
      answer: "mypy",
      hint: "It's also the name of this room's topic."
    }
  ]
},
{
  id: "threading-basics",
  title: "Threading Basics",
  icon: "🧵",
  difficulty: "Hard",
  tags: ["concurrency", "threading"],
  description: "Run multiple tasks concurrently in a single process using Python's threading module, and learn where threads help most.",
  tasks: [
    {
      title: "Creating Threads",
      points: 0,
      content: `
        <p>The <code class="inline">threading</code> module lets a Python program run multiple
        pieces of code seemingly at the same time, inside the same process. This is especially
        useful for tasks that spend a lot of time waiting, such as network requests.</p>
        <pre>import threading
import time

def worker(name):
    print(name, "starting")
    time.sleep(1)
    print(name, "finished")

thread = threading.Thread(target=worker, args=("Thread-1",))
thread.start()
thread.join()
print("Main program done")</pre>
        <p><code class="inline">start()</code> begins running the thread, and
        <code class="inline">join()</code> makes the main program wait for it to finish before
        continuing.</p>
      `
    },
    {
      title: "Running Several Threads",
      points: 20,
      content: `
        <p>You can start several threads and have them run concurrently. Each thread runs
        independently, so the order in which they print output isn't guaranteed — it depends on
        how the operating system schedules them.</p>
        <pre>import threading
import time

def worker(number):
    time.sleep(0.5)
    print("Worker", number, "done")

threads = []
for i in range(3):
    t = threading.Thread(target=worker, args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()

print("All workers finished")</pre>
      `,
      question: "Which Thread method blocks the calling code until that thread has finished running?",
      answer: "join",
      hint: "It's called on the thread object, and its name suggests waiting to reconnect."
    },
    {
      title: "I/O-Bound Work",
      points: 20,
      content: `
        <p>Threading shines for <b>I/O-bound</b> tasks — work that spends most of its time waiting
        on something external, like a file, a network response, or a database. While one thread
        waits, another can make progress, which reduces total wall-clock time.</p>
        <pre>import threading
import time

def download(name):
    print(name, "waiting for network...")
    time.sleep(1)  # stands in for a real network call
    print(name, "done")

threads = [threading.Thread(target=download, args=("file" + str(i),)) for i in range(3)]
for t in threads:
    t.start()
for t in threads:
    t.join()</pre>
      `,
      question: "What term describes tasks that spend most of their time waiting on external operations rather than using the CPU?",
      answer: "I/O-bound",
      hint: "It's about waiting on input or output, not on computation."
    },
    {
      title: "Daemon Threads",
      points: 20,
      content: `
        <p>By default, Python waits for every thread to finish before the program exits. A
        <b>daemon thread</b> is marked to run in the background and is killed automatically when
        the main program exits, without needing to finish first — useful for background tasks like
        periodic logging.</p>
        <pre>import threading
import time

def background_task():
    while True:
        time.sleep(1)

t = threading.Thread(target=background_task, daemon=True)
t.start()
print("Main program exits immediately, daemon thread is killed")</pre>
      `,
      question: "Which Thread constructor keyword argument marks a thread as a background thread killed on program exit?",
      answer: "daemon",
      hint: "Set it to True when creating the Thread object."
    }
  ]
},
{
  id: "multiprocessing-basics",
  title: "Multiprocessing Basics",
  icon: "🖥️",
  difficulty: "Hard",
  tags: ["concurrency", "multiprocessing", "performance"],
  description: "Run tasks in true parallel across multiple CPU cores using Python's multiprocessing module, ideal for heavy computation.",
  tasks: [
    {
      title: "Creating Processes",
      points: 0,
      content: `
        <p>The <code class="inline">multiprocessing</code> module runs code in separate
        <b>processes</b> instead of threads. Each process has its own Python interpreter and its
        own memory, so multiple processes can genuinely run on different CPU cores at the same
        time.</p>
        <pre>import multiprocessing
import time

def worker(name):
    print(name, "starting")
    time.sleep(1)
    print(name, "finished")

if __name__ == "__main__":
    p = multiprocessing.Process(target=worker, args=("Process-1",))
    p.start()
    p.join()
    print("Main program done")</pre>
        <p>This looks a lot like threading's API, but under the hood each process is a fully
        separate program.</p>
      `
    },
    {
      title: "CPU-Bound Work",
      points: 20,
      content: `
        <p>Multiprocessing is the right tool for <b>CPU-bound</b> work — heavy computation like
        number crunching or image processing — because separate processes can truly run in
        parallel on multiple cores, unlike threads in standard Python.</p>
        <pre>import multiprocessing

def square(n):
    return n * n

if __name__ == "__main__":
    with multiprocessing.Pool(processes=4) as pool:
        results = pool.map(square, [1, 2, 3, 4, 5])
        print(results)</pre>
      `,
      question: "What term describes tasks that spend most of their time doing heavy computation rather than waiting?",
      answer: "CPU-bound",
      hint: "It's the opposite of I/O-bound."
    },
    {
      title: "Using a Pool",
      points: 20,
      content: `
        <p>Creating a process manually for every piece of work is tedious. A
        <code class="inline">multiprocessing.Pool</code> manages a fixed group of worker processes
        and can spread a list of tasks across them automatically with
        <code class="inline">map</code>.</p>
        <pre>import multiprocessing

def cube(n):
    return n ** 3

if __name__ == "__main__":
    with multiprocessing.Pool(processes=2) as pool:
        results = pool.map(cube, range(6))
        print(results)  # [0, 1, 8, 27, 64, 125]</pre>
      `,
      question: "Which multiprocessing class manages a fixed group of worker processes for you?",
      answer: "Pool",
      hint: "It's used like: multiprocessing.Pool(processes=4)."
    },
    {
      title: "Processes Don't Share Memory",
      points: 20,
      content: `
        <p>Unlike threads, processes don't share memory by default — each has its own separate
        copy of variables. Changing a variable in one process has no effect on another process.
        To share data between processes, you need special tools like
        <code class="inline">multiprocessing.Value</code> or a
        <code class="inline">Queue</code>.</p>
        <pre>import multiprocessing

def try_increment(counter):
    counter += 1  # only changes this process's local copy
    print("Inside process:", counter)

if __name__ == "__main__":
    shared_counter = 0
    p = multiprocessing.Process(target=try_increment, args=(shared_counter,))
    p.start()
    p.join()
    print("In main process:", shared_counter)  # unchanged</pre>
      `,
      question: "Do separate processes created with multiprocessing share memory by default?",
      answer: "no",
      hint: "That's exactly why special tools like Queue or Value exist."
    }
  ]
},
{
  id: "gil-explained",
  title: "The GIL Explained",
  icon: "🔒",
  difficulty: "Medium",
  tags: ["concurrency", "gil", "internals"],
  description: "Understand why Python's Global Interpreter Lock stops threads from giving true CPU parallelism, and when it does not matter.",
  tasks: [
    {
      title: "What is the GIL",
      points: 0,
      content: `
        <p>The <b>Global Interpreter Lock</b> (GIL) is a lock inside the standard Python
        interpreter (CPython) that allows only <b>one thread</b> to execute Python bytecode at a
        time, even on a multi-core machine. It exists mainly to keep Python's internal memory
        management simple and safe.</p>
        <pre>import threading

def count_up():
    total = 0
    for _ in range(10000000):
        total += 1
    return total

# Even with multiple threads, only one runs Python bytecode at any instant
t1 = threading.Thread(target=count_up)
t2 = threading.Thread(target=count_up)
t1.start()
t2.start()
t1.join()
t2.join()</pre>
        <p>This is why CPU-heavy Python threads don't run truly in parallel, even though they
        appear to run at the same time.</p>
      `
    },
    {
      title: "The GIL and CPU-Bound Threads",
      points: 15,
      content: `
        <p>Because of the GIL, adding more threads to a CPU-bound task in standard Python usually
        doesn't make it faster — the threads still take turns using the CPU one at a time, and
        switching between them even adds a little overhead.</p>
        <pre>import threading
import time

def busy_work():
    total = 0
    for _ in range(20000000):
        total += 1

start = time.time()
t1 = threading.Thread(target=busy_work)
t2 = threading.Thread(target=busy_work)
t1.start(); t2.start()
t1.join(); t2.join()
print("Time:", time.time() - start)  # not roughly half of running busy_work() twice in a row</pre>
      `,
      question: "For CPU-bound work, does adding more threads in standard Python usually make it run in true parallel?",
      answer: "no",
      hint: "The GIL only lets one thread run Python bytecode at a time."
    },
    {
      title: "The GIL and I/O-Bound Threads",
      points: 15,
      content: `
        <p>The GIL is released while a thread waits on I/O, such as a network call or reading a
        file. This means threading still helps a lot for I/O-bound work, even though it doesn't
        help for CPU-bound work.</p>
        <pre>import threading
import time

def download():
    time.sleep(1)  # GIL is released during this wait

threads = [threading.Thread(target=download) for _ in range(5)]
start = time.time()
for t in threads:
    t.start()
for t in threads:
    t.join()
print("Total time:", time.time() - start)  # close to 1 second, not 5</pre>
      `,
      question: "Is the GIL released while a thread is waiting on I/O, such as time.sleep or a network call?",
      answer: "yes",
      hint: "That's exactly why threading still speeds up I/O-bound programs."
    },
    {
      title: "Working Around the GIL",
      points: 15,
      content: `
        <p>To get true CPU parallelism in Python, you generally need to sidestep the GIL entirely
        by using <b>separate processes</b> instead of threads, since each process gets its own
        interpreter and its own GIL.</p>
        <pre>import multiprocessing

def busy_work():
    total = 0
    for _ in range(20000000):
        total += 1

if __name__ == "__main__":
    p1 = multiprocessing.Process(target=busy_work)
    p2 = multiprocessing.Process(target=busy_work)
    p1.start(); p2.start()
    p1.join(); p2.join()</pre>
      `,
      question: "Which standard-library module sidesteps the GIL by running code in separate processes?",
      answer: "multiprocessing",
      hint: "It's named in this task's example code."
    }
  ]
},
{
  id: "asyncio-basics",
  title: "asyncio Basics",
  icon: "🔄",
  difficulty: "Hard",
  tags: ["concurrency", "asyncio"],
  description: "Write concurrent code using an event loop instead of threads, with Python's built-in asyncio module for I/O-bound tasks.",
  tasks: [
    {
      title: "The Event Loop",
      points: 0,
      content: `
        <p><code class="inline">asyncio</code> is a standard-library module for writing concurrent
        code using a single thread and an <b>event loop</b>, instead of using multiple threads or
        processes. It's especially good for programs that juggle many I/O-bound tasks, like
        network requests, at once.</p>
        <pre>import asyncio

async def say_hello():
    print("Hello")
    await asyncio.sleep(1)
    print("World")

asyncio.run(say_hello())</pre>
        <p><code class="inline">asyncio.run</code> creates an event loop, runs the given coroutine
        until it completes, and then closes the loop.</p>
      `
    },
    {
      title: "Coroutines",
      points: 20,
      content: `
        <p>A function defined with <code class="inline">async def</code> is a <b>coroutine
        function</b>. Calling it doesn't run its body immediately — instead it returns a coroutine
        object that must be awaited or scheduled on the event loop to actually run.</p>
        <pre>import asyncio

async def greet(name):
    print("Hello,", name)

async def main():
    coro = greet("Ada")   # not run yet
    await coro            # now it actually runs

asyncio.run(main())</pre>
      `,
      question: "What keyword pair is used to define a coroutine function in Python?",
      answer: "async def",
      hint: "It's two words, and the second one is the normal way to define any function."
    },
    {
      title: "Running Tasks Together",
      points: 20,
      content: `
        <p>Awaiting coroutines one after another runs them sequentially. To run several
        coroutines concurrently, wrap them with <code class="inline">asyncio.gather</code>, which
        schedules them all and waits for every one to finish.</p>
        <pre>import asyncio

async def fetch(name, delay):
    await asyncio.sleep(delay)
    print(name, "done")
    return name

async def main():
    results = await asyncio.gather(
        fetch("A", 1),
        fetch("B", 1),
        fetch("C", 1),
    )
    print(results)

asyncio.run(main())  # takes about 1 second total, not 3</pre>
      `,
      question: "Which asyncio function runs multiple coroutines concurrently and waits for them all to finish?",
      answer: "gather",
      hint: "Its full name is asyncio.gather."
    },
    {
      title: "Sleeping Without Blocking",
      points: 20,
      content: `
        <p>Inside async code, use <code class="inline">await asyncio.sleep(...)</code> instead of
        <code class="inline">time.sleep(...)</code>. The regular version blocks the entire thread,
        freezing the whole event loop, while <code class="inline">asyncio.sleep</code> pauses only
        the current coroutine and lets other tasks run in the meantime.</p>
        <pre>import asyncio
import time

async def bad_pause():
    time.sleep(1)  # blocks everything, defeats the purpose of asyncio

async def good_pause():
    await asyncio.sleep(1)  # lets other coroutines run during the wait</pre>
      `,
      question: "Which function should you await inside a coroutine so other tasks can keep running during a pause?",
      answer: "asyncio.sleep",
      hint: "Its regular, blocking counterpart lives in the time module."
    }
  ]
},
{
  id: "async-await-syntax",
  title: "async/await Syntax",
  icon: "⏳",
  difficulty: "Hard",
    premium: true,
  tags: ["concurrency", "async-await"],
  description: "Define and run coroutines with async def and await, and learn to schedule them so they run concurrently.",
  tasks: [
    {
      title: "async and await Together",
      points: 0,
      content: `
        <p>The <code class="inline">async</code> and <code class="inline">await</code> keywords
        work together to define and run asynchronous code. <code class="inline">async def</code>
        marks a function as a coroutine, and <code class="inline">await</code> pauses that
        coroutine until another awaitable finishes, without blocking the whole program.</p>
        <pre>import asyncio

async def fetch_data():
    print("Fetching...")
    await asyncio.sleep(1)
    print("Got data!")
    return {"status": "ok"}

async def main():
    result = await fetch_data()
    print(result)

asyncio.run(main())</pre>
        <p><code class="inline">await</code> can only be used inside a function defined with
        <code class="inline">async def</code>.</p>
      `
    },
    {
      title: "Where await is Allowed",
      points: 20,
      content: `
        <p>Trying to use <code class="inline">await</code> outside a coroutine function is a
        syntax error. This is Python's way of ensuring awaiting only happens somewhere the event
        loop can actually pause and resume.</p>
        <pre>import asyncio

async def wait_a_bit():
    await asyncio.sleep(1)
    return "done"

def normal_function():
    # await asyncio.sleep(1)  # SyntaxError: await outside async function
    pass

asyncio.run(wait_a_bit())</pre>
      `,
      question: "Inside what kind of function is the await keyword allowed to appear?",
      answer: "async def",
      hint: "It's the same two words used to define a coroutine."
    },
    {
      title: "Sequential vs Concurrent Awaits",
      points: 20,
      content: `
        <p>Writing several <code class="inline">await</code> calls one after another runs them in
        sequence, each waiting for the previous one to finish. To run them concurrently instead,
        you must explicitly schedule them together, for example with
        <code class="inline">asyncio.gather</code> or by creating separate tasks.</p>
        <pre>import asyncio

async def task(name):
    await asyncio.sleep(1)
    print(name, "finished")

async def sequential():
    await task("A")  # waits 1 second
    await task("B")  # then waits another second

async def concurrent():
    await asyncio.gather(task("A"), task("B"))  # both run together</pre>
      `,
      question: "Does writing two await calls one after another run them sequentially or concurrently by default?",
      answer: "sequentially",
      hint: "Each await pauses until that one specific thing finishes before moving on."
    },
    {
      title: "Background Tasks",
      points: 20,
      content: `
        <p><code class="inline">asyncio.create_task</code> schedules a coroutine to start running
        in the background immediately, without pausing the current coroutine. You can then do
        other work and <code class="inline">await</code> the task later to get its result.</p>
        <pre>import asyncio

async def slow_job():
    await asyncio.sleep(2)
    return "job finished"

async def main():
    task = asyncio.create_task(slow_job())  # starts running now
    print("Doing other work while job runs...")
    result = await task  # wait for it to finish
    print(result)

asyncio.run(main())</pre>
      `,
      question: "Which asyncio function schedules a coroutine to start running immediately in the background?",
      answer: "create_task",
      hint: "Its full name is asyncio.create_task."
    }
  ]
},
{
  id: "race-conditions",
  title: "Race Conditions",
  icon: "⚠️",
  difficulty: "Hard",
    premium: true,
  tags: ["concurrency", "bugs"],
  description: "Recognize and prevent race conditions, the subtle bugs caused by unsynchronized access to shared state across threads.",
  tasks: [
    {
      title: "What is a Race Condition",
      points: 0,
      content: `
        <p>A <b>race condition</b> happens when two or more threads (or processes) access shared
        data at the same time, and the final result depends on unpredictable timing of which one
        runs first. These bugs are notoriously hard to reproduce because they may only show up
        occasionally.</p>
        <pre>import threading

counter = 0

def increment():
    global counter
    for _ in range(100000):
        counter += 1

t1 = threading.Thread(target=increment)
t2 = threading.Thread(target=increment)
t1.start(); t2.start()
t1.join(); t2.join()

print(counter)  # often NOT 200000, due to the race condition</pre>
        <p>Even though <code class="inline">counter += 1</code> looks like one simple step, it's
        actually read-modify-write — and two threads can interleave those steps and lose an
        update.</p>
      `
    },
    {
      title: "Lost Updates",
      points: 20,
      content: `
        <p><code class="inline">counter += 1</code> is really three separate steps: read the
        current value, add one, and write the new value back. If two threads both read the same
        value before either writes back, one thread's update gets silently overwritten by the
        other's — this is called a <b>lost update</b>.</p>
        <pre># Thread A reads counter (0)
# Thread B reads counter (0)
# Thread A computes 0 + 1 = 1, writes 1
# Thread B computes 0 + 1 = 1, writes 1
# Final value is 1, even though two increments happened</pre>
      `,
      question: "What term describes an operation that cannot be interrupted partway through, like a single CPU instruction?",
      answer: "atomic",
      hint: "The task explains that counter += 1 is not this."
    },
    {
      title: "Using a Lock",
      points: 20,
      content: `
        <p>A <code class="inline">threading.Lock</code> ensures only one thread at a time can run
        the code between acquiring and releasing it — or, more simply, the code inside a
        <code class="inline">with lock:</code> block. This prevents the interleaving that causes
        race conditions.</p>
        <pre>import threading

counter = 0
lock = threading.Lock()

def safe_increment():
    global counter
    for _ in range(100000):
        with lock:
            counter += 1

t1 = threading.Thread(target=safe_increment)
t2 = threading.Thread(target=safe_increment)
t1.start(); t2.start()
t1.join(); t2.join()

print(counter)  # reliably 200000</pre>
      `,
      question: "Which threading class ensures only one thread can execute a block of code at a time?",
      answer: "Lock",
      hint: "It's used with a with-statement to protect shared data."
    },
    {
      title: "The Critical Section",
      points: 20,
      content: `
        <p>The specific piece of code that accesses shared data and must not be run by more than
        one thread at a time is called the <b>critical section</b>. Keeping critical sections as
        small as possible reduces how much time threads spend waiting for each other, without
        sacrificing correctness.</p>
        <pre>import threading

lock = threading.Lock()
shared_list = []

def add_item(item):
    with lock:
        # This is the critical section
        shared_list.append(item)</pre>
      `,
      question: "What is the term for the section of code that accesses shared data and must run one thread at a time?",
      answer: "critical section",
      hint: "It's two words, and it's exactly what a lock protects."
    }
  ]
},
{
  id: "profiling-python",
  title: "Profiling Python Code",
  icon: "📊",
  difficulty: "Medium",
  tags: ["performance", "profiling"],
  description: "Measure where your program actually spends its time using Python's timing tools and the built-in cProfile profiler.",
  tasks: [
    {
      title: "Measuring Before Optimizing",
      points: 0,
      content: `
        <p>Before speeding up code, you need to know <b>where</b> it's actually slow — guessing is
        unreliable, and the slow part is often not where you'd expect. <b>Profiling</b> means
        measuring how much time, or memory, each part of your program actually uses.</p>
        <pre>import time

start = time.time()

total = 0
for i in range(1000000):
    total += i

elapsed = time.time() - start
print("Elapsed:", elapsed, "seconds")</pre>
        <p>This simple timing check is a basic form of profiling. Python also ships with a proper
        built-in profiler for more detailed measurements.</p>
      `
    },
    {
      title: "Timing Code",
      points: 15,
      content: `
        <p>The simplest way to measure a piece of code is to record the time before and after it
        runs and subtract. This works fine for rough checks, though it can be noisy for very fast
        code since it's affected by whatever else the computer is doing.</p>
        <pre>import time

def slow_function():
    total = 0
    for i in range(5000000):
        total += i
    return total

start = time.time()
slow_function()
end = time.time()
print("Took", end - start, "seconds")</pre>
      `,
      question: "Which standard-library module provides the time function used to measure elapsed wall-clock time?",
      answer: "time",
      hint: "It's imported with a single short word."
    },
    {
      title: "Detailed Breakdowns with cProfile",
      points: 15,
      content: `
        <p>For a detailed, function-by-function breakdown of where time goes, Python includes the
        <code class="inline">cProfile</code> module. It reports how many times each function was
        called and how much total time was spent inside it.</p>
        <pre>import cProfile

def compute():
    total = 0
    for i in range(1000000):
        total += i * i
    return total

cProfile.run("compute()")</pre>
        <p>The output lists every function called during <code class="inline">compute()</code>,
        sorted with timing details for each one.</p>
      `,
      question: "Which built-in module gives a detailed, function-by-function timing breakdown of a program?",
      answer: "cProfile",
      hint: "Its name combines a c prefix with the word Profile."
    },
    {
      title: "Finding the Bottleneck",
      points: 15,
      content: `
        <p>A profiler's report usually reveals a <b>bottleneck</b> — the one function or section
        responsible for most of the runtime. Optimization efforts are almost always better spent
        fixing the bottleneck than making small improvements everywhere else.</p>
        <pre># Simplified cProfile output
#    ncalls  tottime  percall  cumtime  function
#         1    0.001    0.001    2.450  compute
#   1000000    2.400    0.000    2.400  slow_helper
#
# slow_helper is clearly the bottleneck here</pre>
      `,
      question: "What term describes the single part of a program responsible for most of its runtime?",
      answer: "bottleneck",
      hint: "It's named after the narrow part of a bottle that slows everything passing through."
    }
  ]
},
{
  id: "optimizing-performance",
  title: "Optimizing Python Performance",
  icon: "🚀",
  difficulty: "Medium",
  tags: ["performance", "optimization"],
  description: "Apply practical, measured techniques to speed up slow Python code, from list comprehensions to smarter built-in functions.",
  tasks: [
    {
      title: "Measure First",
      points: 0,
      content: `
        <p>Optimizing Python code means making it run faster or use less memory, without changing
        what it does. The most important rule is to measure first: guessing at what's slow often
        leads to wasted effort optimizing code that wasn't the real problem.</p>
        <pre>import time

def slow_way():
    result = []
    for i in range(100000):
        result.append(i * i)
    return result

def fast_way():
    return [i * i for i in range(100000)]

start = time.time()
fast_way()
print("List comprehension:", time.time() - start)</pre>
        <p>Once you know where time actually goes, small, targeted changes can make a big
        difference.</p>
      `
    },
    {
      title: "List Comprehensions",
      points: 15,
      content: `
        <p>List comprehensions are usually both more concise and faster than building a list with
        a manual loop and repeated <code class="inline">append</code> calls, because the loop runs
        in optimized C code internally rather than through the regular Python bytecode loop.</p>
        <pre>numbers = range(1000000)

# Slower
squares = []
for n in numbers:
    squares.append(n * n)

# Faster
squares = [n * n for n in numbers]</pre>
      `,
      question: "What Python feature builds a list in a single, faster expression instead of a manual append loop?",
      answer: "list comprehension",
      hint: "It's written in square brackets with a for clause inside."
    },
    {
      title: "Avoiding Repeated Lookups",
      points: 15,
      content: `
        <p>Looking up an attribute or a dictionary key repeatedly inside a tight loop adds up.
        Storing the result in a local variable once, before the loop starts, avoids redoing that
        lookup every single iteration.</p>
        <pre>import math

# Slower: looks up math.sqrt every iteration
results = []
for n in range(100000):
    results.append(math.sqrt(n))

# Faster: look it up once
sqrt = math.sqrt
results = [sqrt(n) for n in range(100000)]</pre>
      `,
      question: "According to this technique, where should an expensive lookup that does not change be moved to avoid repeating it every iteration?",
      answer: "outside the loop",
      hint: "Do it once before the loop starts, not inside it."
    },
    {
      title: "Using Built-in Functions",
      points: 15,
      content: `
        <p>Built-in functions like <code class="inline">sum</code>, <code class="inline">min</code>,
        and <code class="inline">max</code> are implemented in C and are almost always faster than
        an equivalent hand-written Python loop.</p>
        <pre>numbers = list(range(1000000))

# Slower
total = 0
for n in numbers:
    total += n

# Faster
total = sum(numbers)</pre>
      `,
      question: "Which built-in function adds up all the numbers in an iterable, faster than a manual loop?",
      answer: "sum",
      hint: "It's a very short, commonly used built-in name."
    }
  ]
},
{
  id: "caching-strategies",
  title: "Caching Strategies",
  icon: "🗄️",
  difficulty: "Medium",
  tags: ["performance", "caching"],
  description: "Avoid repeated expensive work by storing computed results, from simple dictionaries to functools' lru_cache decorator.",
  tasks: [
    {
      title: "Why Cache Results",
      points: 0,
      content: `
        <p><b>Caching</b> means storing the result of an expensive computation so that the next
        time you need it, you can reuse the stored result instead of recomputing it from
        scratch. This trades a bit of memory for a lot of saved time.</p>
        <pre>cache = {}

def expensive_square(n):
    if n in cache:
        return cache[n]
    print("Computing...")
    result = n * n
    cache[n] = result
    return result

print(expensive_square(5))  # Computing... 25
print(expensive_square(5))  # 25, no Computing... printed</pre>
        <p>The second call skips the expensive work entirely because the answer was already
        stored.</p>
      `
    },
    {
      title: "Manual Caching with a Dict",
      points: 15,
      content: `
        <p>The simplest cache is just a dictionary that maps each input to its already-computed
        result. Before doing the real work, you check whether the answer is already stored.</p>
        <pre>fib_cache = {}

def fib(n):
    if n in fib_cache:
        return fib_cache[n]
    if n &lt;= 1:
        return n
    result = fib(n - 1) + fib(n - 2)
    fib_cache[n] = result
    return result

print(fib(30))</pre>
      `,
      question: "What simple built-in data structure is commonly used to build a manual cache mapping inputs to results?",
      answer: "dictionary",
      hint: "It maps keys to values, just like a cache maps inputs to results."
    },
    {
      title: "functools.lru_cache",
      points: 15,
      content: `
        <p>Instead of writing caching logic by hand, the <code class="inline">functools</code>
        module provides <code class="inline">@lru_cache</code>, a decorator that automatically
        caches a function's return values based on its arguments.</p>
        <pre>from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n &lt;= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(30))</pre>
        <p>Calling <code class="inline">fib</code> again with the same argument returns the cached
        result instantly instead of recomputing it.</p>
      `,
      question: "Which functools decorator automatically caches a function's results based on its arguments?",
      answer: "lru_cache",
      hint: "Its name stands for least recently used cache."
    },
    {
      title: "Cache Invalidation",
      points: 15,
      content: `
        <p>A cache is only correct as long as its stored data still matches reality. When the
        underlying data changes, a cached result can become stale and wrong. Deciding when to
        clear or update cached values is known as <b>cache invalidation</b>, and it's famously
        one of the trickier problems in programming.</p>
        <pre>from functools import lru_cache

@lru_cache(maxsize=None)
def get_price(product_id):
    return lookup_price_from_database(product_id)  # may become outdated

# When the price changes in the database, the cache must be cleared:
get_price.cache_clear()</pre>
      `,
      question: "What is the term for clearing or updating cached data once it no longer matches reality?",
      answer: "cache invalidation",
      hint: "It's two words, the second one meaning made invalid."
    }
  ]
},

  /* ---- batch-09.js ---- */
  {
  id: "intro-to-numpy",
  title: "Intro to NumPy",
  icon: "🔢",
  difficulty: "Medium",
  tags: ["numpy", "arrays", "data-science"],
  description: "Get started with NumPy, Python's core library for fast, multi-dimensional numeric arrays.",
  tasks: [
    {
      title: "What is NumPy?",
      points: 0,
      content: `
        <p>NumPy (Numerical Python) is a library for working with arrays of numbers. Unlike a
        plain Python list, a NumPy array stores its elements in a compact block of memory and
        can perform math on every element at once, which makes it much faster than looping in
        pure Python.</p>
        <p>Almost every data science library in Python (Pandas, Matplotlib, scikit-learn) is
        built on top of NumPy, so it's the natural starting point.</p>
        <pre>import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr)
print(type(arr))</pre>
        <p>By convention, NumPy is almost always imported as <code class="inline">np</code>.</p>
      `
    },
    {
      title: "Creating Arrays",
      points: 15,
      content: `
        <p>Besides wrapping a list with <code class="inline">np.array()</code>, NumPy has
        helper functions to build arrays quickly.</p>
        <pre>import numpy as np

a = np.arange(0, 10, 2)      # start, stop, step
b = np.zeros(3)              # array of zeros
c = np.ones((2, 3))          # 2x3 array of ones
d = np.linspace(0, 1, 5)     # 5 evenly spaced points

print(a)</pre>
        <p><code class="inline">np.arange()</code> works like Python's <code class="inline">range()</code>
        but returns an array, and the stop value is never included.</p>
      `,
      question: "How many elements are in the array produced by np.arange(0, 10, 2)?",
      answer: "5",
      hint: "List them out: 0, 2, 4, 6, 8 - the stop value 10 is excluded."
    },
    {
      title: "Array Attributes",
      points: 15,
      content: `
        <p>Every NumPy array has attributes that describe its layout: <code class="inline">shape</code>
        (its dimensions), <code class="inline">ndim</code> (number of dimensions), and
        <code class="inline">size</code> (total number of elements).</p>
        <pre>import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr.shape)   # (2, 3)
print(arr.ndim)    # 2
print(arr.size)    # 6</pre>
        <p>The shape is a tuple: rows first, then columns.</p>
      `,
      question: "What is the value of arr.shape for a 2x3 array like the one above?",
      answer: "(2, 3)",
      hint: "It's a tuple written as (rows, columns)."
    },
    {
      title: "Indexing and Slicing",
      points: 20,
      content: `
        <p>NumPy arrays support the same square-bracket indexing and slicing as Python lists,
        including negative indices and step values.</p>
        <pre>import numpy as np

arr = np.array([10, 20, 30, 40, 50])
print(arr[1:4])
print(arr[-1])</pre>
        <p>As with list slicing, the start index is included and the end index is excluded.</p>
      `,
      question: "What does arr[1:4] output for arr = np.array([10, 20, 30, 40, 50])?",
      answer: "[20 30 40]",
      hint: "Index 1 up to (not including) index 4: that's positions 1, 2 and 3."
    }
  ]
},
{
  id: "numpy-arrays",
  title: "NumPy Arrays & Operations",
  icon: "➕",
  difficulty: "Medium",
  tags: ["numpy", "arrays", "data-science"],
  description: "Learn to perform vectorized math, broadcasting, and boolean filtering across whole NumPy arrays at once.",
  tasks: [
    {
      title: "Vectorized Operations",
      points: 0,
      content: `
        <p>NumPy's biggest advantage is <b>vectorization</b>: applying an operation to an
        entire array at once instead of writing a loop. This is both shorter to write and much
        faster to run.</p>
        <pre>import numpy as np

a = np.array([1, 2, 3])
b = np.array([10, 20, 30])

print(a + b)
print(a * 2)</pre>
        <p>The operation is applied element by element, matching up positions in each array.</p>
      `
    },
    {
      title: "Element-wise Arithmetic",
      points: 15,
      content: `
        <p>When two arrays have the same shape, arithmetic operators (<code class="inline">+</code>,
        <code class="inline">-</code>, <code class="inline">*</code>, <code class="inline">/</code>)
        combine them position by position.</p>
        <pre>import numpy as np

a = np.array([2, 4, 6])
b = np.array([1, 2, 3])

print(a - b)
print(a / b)</pre>
      `,
      question: "What is the result of np.array([2, 4, 6]) / np.array([1, 2, 3])?",
      answer: "[2. 2. 2.]",
      hint: "Divide matching positions: 2/1, 4/2, 6/3. Division always gives floats."
    },
    {
      title: "Broadcasting",
      points: 15,
      content: `
        <p>Broadcasting lets NumPy combine arrays of different shapes, such as an array and a
        single number. The scalar is conceptually 'stretched' to match the array's shape.</p>
        <pre>import numpy as np

arr = np.array([1, 2, 3])
print(arr + 10)</pre>
        <p>Here 10 is added to every element of arr without writing a loop.</p>
      `,
      question: "What does np.array([1, 2, 3]) + 10 produce?",
      answer: "[11 12 13]",
      hint: "Add 10 to each element in turn."
    },
    {
      title: "Aggregation Functions",
      points: 20,
      content: `
        <p>Arrays have built-in methods that reduce all their values down to a single number,
        such as <code class="inline">sum()</code>, <code class="inline">mean()</code>,
        <code class="inline">max()</code>, and <code class="inline">min()</code>.</p>
        <pre>import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr.sum())
print(arr.mean())
print(arr.max())</pre>
      `,
      question: "What is arr.mean() for arr = np.array([1, 2, 3, 4, 5])?",
      answer: "3.0",
      hint: "Add all the values and divide by how many there are: (1+2+3+4+5)/5."
    },
    {
      title: "Boolean Masking",
      points: 20,
      content: `
        <p>Comparing an array to a value produces a boolean array of the same shape. You can
        then use that boolean array inside square brackets to keep only the matching elements
        - this is called a <b>mask</b>.</p>
        <pre>import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6])
mask = arr % 2 == 0
print(arr[mask])</pre>
      `,
      question: "What does arr[arr % 2 == 0] return for arr = np.array([1, 2, 3, 4, 5, 6])?",
      answer: "[2 4 6]",
      hint: "The mask keeps only the elements where the remainder after dividing by 2 is zero."
    }
  ]
},
{
  id: "intro-to-pandas",
  title: "Intro to Pandas",
  icon: "🐼",
  difficulty: "Medium",
  tags: ["pandas", "dataframes", "data-science"],
  description: "Load, explore, and understand tabular data using Pandas Series and DataFrames.",
  tasks: [
    {
      title: "What is Pandas?",
      points: 0,
      content: `
        <p>Pandas is a library for working with labeled, tabular data - think spreadsheets or
        SQL tables, but manipulated with Python code. Its two core structures are the
        <code class="inline">Series</code> (a single labeled column) and the
        <code class="inline">DataFrame</code> (a full table made of many columns).</p>
        <pre>import pandas as pd

data = {"name": ["Ada", "Grace", "Alan"], "age": [36, 85, 41]}
df = pd.DataFrame(data)
print(df)</pre>
        <p>Pandas is usually imported under the alias <code class="inline">pd</code>.</p>
      `
    },
    {
      title: "The Series Object",
      points: 15,
      content: `
        <p>A Series is a one-dimensional labeled array. Each value has an associated label
        called its <b>index</b>, which defaults to 0, 1, 2, ... but can be set to anything,
        including strings.</p>
        <pre>import pandas as pd

s = pd.Series([10, 20, 30], index=["a", "b", "c"])
print(s["b"])</pre>
      `,
      question: "What does s['b'] return for s = pd.Series([10, 20, 30], index=['a', 'b', 'c'])?",
      answer: "20",
      hint: "Match the label 'b' to its position in the index list."
    },
    {
      title: "Exploring a DataFrame",
      points: 15,
      content: `
        <p>Once you have a DataFrame, a few methods and attributes let you get a quick feel for
        the data: <code class="inline">head()</code> shows the first rows,
        <code class="inline">info()</code> summarizes columns and types, and
        <code class="inline">shape</code> gives the dimensions as (rows, columns).</p>
        <pre>import pandas as pd

df = pd.DataFrame({"name": ["Ada", "Grace", "Alan"], "age": [36, 85, 41]})
print(df.head(2))
print(df.shape)</pre>
      `,
      question: "What does df.shape return for a DataFrame with 3 rows and 2 columns?",
      answer: "(3, 2)",
      hint: "It's a tuple in the order (number of rows, number of columns)."
    },
    {
      title: "Selecting a Column",
      points: 20,
      content: `
        <p>You can pull a single column out of a DataFrame using square brackets with the
        column name. This returns a Series, not a DataFrame.</p>
        <pre>import pandas as pd

df = pd.DataFrame({"name": ["Ada", "Grace", "Alan"], "age": [36, 85, 41]})
ages = df["age"]
print(ages)
print(type(ages))</pre>
      `,
      question: "What data type is returned when you select a single column like df['age']?",
      answer: "Series",
      hint: "It's the same one-dimensional pandas object you saw earlier in this room."
    }
  ]
},
{
  id: "pandas-dataframes",
  title: "Pandas DataFrames",
  icon: "📊",
  difficulty: "Medium",
  tags: ["pandas", "dataframes", "data-science"],
  description: "Select, add, modify, and remove columns and rows in a Pandas DataFrame.",
  tasks: [
    {
      title: "Working with DataFrames",
      points: 0,
      content: `
        <p>A DataFrame isn't just for reading data - you can add new columns, change existing
        values, and reshape the table entirely using ordinary Python operations combined with
        Pandas methods.</p>
        <pre>import pandas as pd

df = pd.DataFrame({"name": ["Ada", "Grace", "Alan"], "age": [36, 85, 41]})
df["is_adult"] = df["age"] &gt;= 18
print(df)</pre>
      `
    },
    {
      title: "Adding a New Column",
      points: 15,
      content: `
        <p>Assigning to a new column name creates that column, often computed from an existing
        one. Comparisons like <code class="inline">&gt;</code> applied to a column produce a
        column of booleans.</p>
        <pre>import pandas as pd

df = pd.DataFrame({"name": ["Ada", "Grace", "Alan"], "age": [36, 85, 41]})
df["senior"] = df["age"] &gt; 50
print(df["senior"])</pre>
      `,
      question: "What value does the new 'senior' column hold for the row where age is 85?",
      answer: "True",
      hint: "Is 85 greater than 50?"
    },
    {
      title: "Modifying Values with .loc",
      points: 15,
      content: `
        <p>The <code class="inline">.loc</code> accessor selects rows and columns by their
        labels, and can be used to both read and overwrite specific cells.</p>
        <pre>import pandas as pd

df = pd.DataFrame({"name": ["Ada", "Grace", "Alan"], "age": [36, 85, 41]})
df.loc[0, "age"] = 37
print(df.loc[0, "age"])</pre>
      `,
      question: "Which pandas accessor selects rows and columns by label, as in df.loc[0, 'age']?",
      answer: ".loc",
      hint: "It starts with a dot and is spelled with three letters."
    },
    {
      title: "Dropping Columns",
      points: 20,
      content: `
        <p>The <code class="inline">drop()</code> method removes rows or columns. To drop a
        column by name, pass it through the <code class="inline">columns</code> keyword
        argument (or use <code class="inline">axis=1</code>).</p>
        <pre>import pandas as pd

df = pd.DataFrame({"name": ["Ada", "Grace", "Alan"], "age": [36, 85, 41]})
df2 = df.drop(columns=["age"])
print(df2)</pre>
      `,
      question: "Which keyword argument lets you drop by column name in df.drop()?",
      answer: "columns",
      hint: "It's the same word as the plural of what a table's vertical fields are called."
    },
    {
      title: "Renaming Columns",
      points: 20,
      content: `
        <p>To give columns clearer names, use <code class="inline">rename()</code> with a
        dictionary mapping old names to new ones.</p>
        <pre>import pandas as pd

df = pd.DataFrame({"name": ["Ada", "Grace", "Alan"], "age": [36, 85, 41]})
df2 = df.rename(columns={"age": "years"})
print(df2.columns.tolist())</pre>
      `,
      question: "Which method renames columns in a DataFrame?",
      answer: "rename",
      hint: "The method name describes exactly what it does to labels."
    }
  ]
},
{
  id: "filtering-with-pandas",
  title: "Filtering Data with Pandas",
  icon: "🔍",
  difficulty: "Medium",
  tags: ["pandas", "filtering", "data-science"],
  description: "Select the rows you care about by building boolean masks and combining conditions.",
  tasks: [
    {
      title: "Boolean Masks",
      points: 0,
      content: `
        <p>Filtering a DataFrame works the same way as filtering a NumPy array: you write a
        condition, which produces a column of True/False values, then use it inside square
        brackets to keep only the matching rows.</p>
        <pre>import pandas as pd

df = pd.DataFrame({"name": ["Ada", "Grace", "Alan", "Kai"], "age": [36, 85, 41, 29]})
adults = df[df["age"] &gt; 40]
print(adults)</pre>
      `
    },
    {
      title: "Filtering on One Condition",
      points: 15,
      content: `
        <p>Any comparison operator can build a mask: <code class="inline">&gt;</code>,
        <code class="inline">&lt;</code>, <code class="inline">&gt;=</code>,
        <code class="inline">&lt;=</code>, <code class="inline">==</code>, and
        <code class="inline">!=</code> all work on a column.</p>
        <pre>import pandas as pd

df = pd.DataFrame({"name": ["Ada", "Grace", "Alan", "Kai"], "age": [36, 85, 41, 29]})
result = df[df["age"] &gt;= 40]
print(len(result))</pre>
      `,
      question: "How many rows are returned by df[df['age'] >= 40] for ages [36, 85, 41, 29]?",
      answer: "2",
      hint: "Check each age against 40: only two of the four values qualify."
    },
    {
      title: "Combining Conditions",
      points: 15,
      content: `
        <p>To filter on more than one condition, wrap each one in parentheses and join them
        with <code class="inline">&amp;</code> (and) or <code class="inline">|</code> (or).
        Regular Python <code class="inline">and</code>/<code class="inline">or</code> won't
        work on whole columns.</p>
        <pre>import pandas as pd

df = pd.DataFrame({"name": ["Ada", "Grace", "Alan", "Kai"], "age": [36, 85, 41, 29]})
result = df[(df["age"] &gt; 30) &amp; (df["age"] &lt; 50)]
print(result["name"].tolist())</pre>
      `,
      question: "Which operator combines two conditions with logical AND when filtering a DataFrame?",
      answer: "&",
      hint: "It's a single punctuation character, not the English word."
    },
    {
      title: "Filtering with isin()",
      points: 20,
      content: `
        <p>To check whether a column's value is one of several options, use
        <code class="inline">isin()</code> with a list, instead of chaining several
        <code class="inline">==</code> comparisons with <code class="inline">|</code>.</p>
        <pre>import pandas as pd

df = pd.DataFrame({"name": ["Ada", "Grace", "Alan", "Kai"], "age": [36, 85, 41, 29]})
result = df[df["name"].isin(["Ada", "Alan"])]
print(result)</pre>
      `,
      question: "Which method checks whether each value in a column is in a given list?",
      answer: "isin",
      hint: "The name is a contraction of 'is in'."
    }
  ]
},
{
  id: "groupby-pandas",
  title: "GroupBy in Pandas",
  icon: "🗂️",
  difficulty: "Hard",
  tags: ["pandas", "groupby", "data-science"],
  description: "Split data into groups and aggregate each one separately using the powerful groupby() method.",
  tasks: [
    {
      title: "Split, Apply, Combine",
      points: 0,
      content: `
        <p><code class="inline">groupby()</code> follows the 'split-apply-combine' pattern:
        it splits the DataFrame into groups based on a column's values, applies an aggregation
        (like mean or sum) to each group separately, then combines the results into a single
        object.</p>
        <pre>import pandas as pd

df = pd.DataFrame({
    "dept": ["eng", "eng", "sales", "sales"],
    "salary": [70000, 80000, 50000, 60000]
})
print(df.groupby("dept")["salary"].mean())</pre>
      `
    },
    {
      title: "Grouping and Averaging",
      points: 20,
      content: `
        <p>Calling <code class="inline">groupby("col")</code> on a DataFrame, then selecting a
        column and calling <code class="inline">.mean()</code>, computes the average of that
        column separately for each distinct group.</p>
        <pre>import pandas as pd

df = pd.DataFrame({
    "dept": ["eng", "eng", "sales", "sales"],
    "salary": [70000, 80000, 50000, 60000]
})
print(df.groupby("dept")["salary"].mean())</pre>
      `,
      question: "What is the mean salary for the 'eng' group given salaries 70000 and 80000?",
      answer: "75000.0",
      hint: "Add the two salaries and divide by two - the result is a float."
    },
    {
      title: "Multiple Aggregations with agg()",
      points: 20,
      content: `
        <p>Sometimes you want several statistics at once. The <code class="inline">agg()</code>
        method accepts a list of function names and applies each one to every group.</p>
        <pre>import pandas as pd

df = pd.DataFrame({
    "dept": ["eng", "eng", "sales", "sales"],
    "salary": [70000, 80000, 50000, 60000]
})
print(df.groupby("dept")["salary"].agg(["mean", "max"]))</pre>
      `,
      question: "Which method lets you apply several aggregation functions at once, like agg(['mean', 'max'])?",
      answer: "agg",
      hint: "It's a short abbreviation of the word 'aggregate'."
    },
    {
      title: "Counting Rows per Group",
      points: 20,
      content: `
        <p>To find out how many rows fall into each group, without aggregating any particular
        column, use <code class="inline">.size()</code> on the grouped object.</p>
        <pre>import pandas as pd

df = pd.DataFrame({
    "dept": ["eng", "eng", "sales", "sales"],
    "salary": [70000, 80000, 50000, 60000]
})
print(df.groupby("dept").size())</pre>
      `,
      question: "Which groupby method returns the number of rows in each group?",
      answer: "size",
      hint: "It answers the question 'how big is each group?'."
    },
    {
      title: "Sorting Grouped Results",
      points: 25,
      content: `
        <p>The output of a groupby aggregation is itself a Series (or DataFrame), so you can
        chain <code class="inline">sort_values()</code> onto it to see the highest or lowest
        groups first.</p>
        <pre>import pandas as pd

df = pd.DataFrame({
    "dept": ["eng", "eng", "sales", "sales"],
    "salary": [70000, 80000, 50000, 60000]
})
result = df.groupby("dept")["salary"].mean().sort_values(ascending=False)
print(result)</pre>
      `,
      question: "Which method sorts the resulting Series by its values?",
      answer: "sort_values",
      hint: "It's named after what it sorts by - not the index, the actual values."
    }
  ]
},
{
  id: "reading-csv-pandas",
  title: "Reading CSV with Pandas",
  icon: "📄",
  difficulty: "Easy",
  tags: ["pandas", "csv", "data-science"],
  description: "Load CSV files directly into a Pandas DataFrame and write your results back out.",
  tasks: [
    {
      title: "Loading a CSV File",
      points: 0,
      content: `
        <p>CSV (comma-separated values) files are one of the most common ways data is shared.
        Pandas can load one straight into a DataFrame with a single function call, treating
        the first line as column headers by default.</p>
        <pre>import pandas as pd

df = pd.read_csv("sales.csv")
print(df.head())</pre>
      `
    },
    {
      title: "The read_csv Function",
      points: 10,
      content: `
        <p><code class="inline">pd.read_csv()</code> takes a file path (or URL) and returns a
        full DataFrame, automatically inferring column names and data types.</p>
        <pre>import pandas as pd

df = pd.read_csv("students.csv")
print(df.columns.tolist())</pre>
      `,
      question: "Which pandas function reads a CSV file into a DataFrame?",
      answer: "read_csv",
      hint: "It's named after the file format it reads, with an underscore."
    },
    {
      title: "Custom Delimiters",
      points: 10,
      content: `
        <p>Not every file uses commas. The <code class="inline">sep</code> parameter lets you
        tell <code class="inline">read_csv()</code> what character separates values, such as a
        tab character for a .tsv file.</p>
        <pre>import pandas as pd

df = pd.read_csv("data.tsv", sep="\t")
print(df.head())</pre>
      `,
      question: "Which parameter of read_csv() lets you specify a different delimiter, like a tab?",
      answer: "sep",
      hint: "It's short for 'separator'."
    },
    {
      title: "Writing Back to CSV",
      points: 15,
      content: `
        <p>The reverse operation is <code class="inline">to_csv()</code>. By default it also
        writes the DataFrame's index as its own column, which you usually don't want - pass
        <code class="inline">index=False</code> to skip it.</p>
        <pre>import pandas as pd

df = pd.read_csv("sales.csv")
df.to_csv("output.csv", index=False)</pre>
      `,
      question: "Which argument prevents pandas from writing the row index into the output CSV file?",
      answer: "index=False",
      hint: "You need to set the index-related keyword argument to the boolean False."
    }
  ]
},
{
  id: "data-cleaning-basics",
  title: "Data Cleaning Basics",
  icon: "🧹",
  difficulty: "Medium",
  tags: ["pandas", "data-cleaning", "data-science"],
  description: "Detect and handle missing values, duplicate rows, and other inconsistencies in real-world data.",
  tasks: [
    {
      title: "Why Clean Data?",
      points: 0,
      content: `
        <p>Real-world data is rarely perfect - it often has missing values, duplicate entries,
        or inconsistent formatting. Before analyzing a dataset, it's important to check for and
        fix these problems.</p>
        <pre>import pandas as pd
import numpy as np

df = pd.DataFrame({
    "name": ["Ada", "Grace", None, "Alan"],
    "age": [36, np.nan, 41, 41]
})
print(df.isnull().sum())</pre>
      `
    },
    {
      title: "Detecting Missing Values",
      points: 15,
      content: `
        <p><code class="inline">isna()</code> (an alias of <code class="inline">isnull()</code>)
        returns a same-shaped DataFrame of booleans marking where values are missing. Chaining
        <code class="inline">.sum()</code> counts them per column.</p>
        <pre>import pandas as pd
import numpy as np

df = pd.DataFrame({"age": [36, np.nan, 41, 41]})
print(df["age"].isna())
print(df["age"].isna().sum())</pre>
      `,
      question: "Which method returns True for each missing value in a DataFrame or Series?",
      answer: "isna",
      hint: "It reads almost like the phrase 'is not available', shortened."
    },
    {
      title: "Filling Missing Values",
      points: 15,
      content: `
        <p>Instead of discarding rows with missing data, you can replace them with a sensible
        default, such as the column's mean, using <code class="inline">fillna()</code>.</p>
        <pre>import pandas as pd
import numpy as np

df = pd.DataFrame({"age": [36, np.nan, 41, 41]})
df["age"] = df["age"].fillna(df["age"].mean())
print(df["age"])</pre>
      `,
      question: "Which method fills missing values with a specified or computed value?",
      answer: "fillna",
      hint: "It's 'fill' plus the abbreviation for 'not a number'."
    },
    {
      title: "Dropping Missing Rows",
      points: 15,
      content: `
        <p>When a row has too much missing data to be useful, <code class="inline">dropna()</code>
        removes any row (or column) that contains at least one missing value.</p>
        <pre>import pandas as pd
import numpy as np

df = pd.DataFrame({"age": [36, np.nan, 41, 41]})
clean = df.dropna()
print(clean)</pre>
      `,
      question: "Which method removes rows containing missing values?",
      answer: "dropna",
      hint: "It's 'drop' plus the abbreviation for 'not a number'."
    },
    {
      title: "Removing Duplicate Rows",
      points: 20,
      content: `
        <p>Duplicate rows can skew analysis, especially counts and averages.
        <code class="inline">drop_duplicates()</code> keeps only the first occurrence of each
        unique row by default.</p>
        <pre>import pandas as pd

df = pd.DataFrame({"name": ["Ada", "Ada", "Alan"], "age": [36, 36, 41]})
clean = df.drop_duplicates()
print(len(clean))</pre>
      `,
      question: "Which method removes duplicate rows from a DataFrame?",
      answer: "drop_duplicates",
      hint: "It's two words joined with an underscore, describing exactly what it removes."
    }
  ]
},
{
  id: "intro-to-matplotlib",
  title: "Intro to Matplotlib",
  icon: "📈",
  difficulty: "Medium",
  tags: ["matplotlib", "visualization", "data-science"],
  description: "Create your first chart using Matplotlib, the most common plotting library in Python.",
  tasks: [
    {
      title: "Your First Plot",
      points: 0,
      content: `
        <p>Matplotlib's <code class="inline">pyplot</code> module gives you a simple, MATLAB-like
        interface for drawing charts. You build a plot step by step, then display it with
        <code class="inline">show()</code>.</p>
        <pre>import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 20, 25, 30]

plt.plot(x, y)
plt.title("Growth")
plt.xlabel("Day")
plt.ylabel("Value")
plt.show()</pre>
      `
    },
    {
      title: "Labeling Axes",
      points: 15,
      content: `
        <p>A chart without labels is hard to interpret. <code class="inline">xlabel()</code>
        and <code class="inline">ylabel()</code> set the text under and beside the axes, while
        <code class="inline">title()</code> labels the whole figure.</p>
        <pre>import matplotlib.pyplot as plt

x = [1, 2, 3]
y = [5, 7, 4]

plt.plot(x, y)
plt.xlabel("Week")
plt.ylabel("Score")
plt.show()</pre>
      `,
      question: "Which function sets the label for the x-axis in matplotlib?",
      answer: "xlabel",
      hint: "It's plt. followed by the axis letter and the word 'label'."
    },
    {
      title: "Saving a Figure",
      points: 15,
      content: `
        <p>Instead of (or in addition to) calling <code class="inline">show()</code>, you can
        save the current figure to an image file with <code class="inline">savefig()</code>,
        which infers the format from the file extension.</p>
        <pre>import matplotlib.pyplot as plt

x = [1, 2, 3]
y = [5, 7, 4]

plt.plot(x, y)
plt.savefig("chart.png")</pre>
      `,
      question: "Which function saves the current figure to an image file?",
      answer: "savefig",
      hint: "It's 'save' plus a short word for a chart or figure."
    },
    {
      title: "Multiple Lines with a Legend",
      points: 20,
      content: `
        <p>You can call <code class="inline">plot()</code> more than once on the same figure to
        draw multiple lines. Giving each a <code class="inline">label</code> and then calling
        <code class="inline">legend()</code> displays a key identifying each one.</p>
        <pre>import matplotlib.pyplot as plt

x = [1, 2, 3]
a = [5, 7, 4]
b = [2, 3, 5]

plt.plot(x, a, label="Team A")
plt.plot(x, b, label="Team B")
plt.legend()
plt.show()</pre>
      `,
      question: "Which function displays a legend identifying each labeled line on the plot?",
      answer: "legend",
      hint: "It's the same word used for the key on a map."
    }
  ]
},
{
  id: "plotting-basic-charts",
  title: "Plotting Basic Charts",
  icon: "📊",
  difficulty: "Medium",
  tags: ["matplotlib", "visualization", "data-science"],
  description: "Build line, bar, scatter, and histogram charts from data using Matplotlib.",
  tasks: [
    {
      title: "Choosing a Chart Type",
      points: 0,
      content: `
        <p>Different chart types suit different questions: line charts show trends over time,
        bar charts compare categories, scatter plots reveal relationships between two
        variables, and histograms show the distribution of a single variable.</p>
        <pre>import matplotlib.pyplot as plt

categories = ["A", "B", "C"]
values = [10, 25, 15]

plt.bar(categories, values)
plt.show()</pre>
      `
    },
    {
      title: "Bar Charts",
      points: 15,
      content: `
        <p><code class="inline">plt.bar()</code> draws a bar for each category, with height
        equal to its value. It's ideal for comparing discrete groups.</p>
        <pre>import matplotlib.pyplot as plt

categories = ["Mon", "Tue", "Wed"]
values = [10, 25, 15]

plt.bar(categories, values)
plt.show()</pre>
      `,
      question: "Which matplotlib function creates a bar chart?",
      answer: "bar",
      hint: "It's a very short, literal name for the chart type."
    },
    {
      title: "Scatter Plots",
      points: 15,
      content: `
        <p><code class="inline">plt.scatter()</code> plots individual points rather than
        connecting them with a line, which makes it useful for spotting patterns or clusters
        between two numeric variables.</p>
        <pre>import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 5, 4, 6]

plt.scatter(x, y)
plt.show()</pre>
      `,
      question: "Which matplotlib function creates a scatter plot?",
      answer: "scatter",
      hint: "It's the literal name for a plot made of scattered points."
    },
    {
      title: "Histograms",
      points: 20,
      content: `
        <p>A histogram groups numeric data into ranges called <b>bins</b> and shows how many
        values fall into each range. The <code class="inline">bins</code> parameter controls
        how many groups are used.</p>
        <pre>import matplotlib.pyplot as plt

data = [1, 2, 2, 3, 3, 3, 4, 4, 5]

plt.hist(data, bins=5)
plt.show()</pre>
      `,
      question: "Which parameter of plt.hist() controls how many bars the data is divided into?",
      answer: "bins",
      hint: "Each bar in a histogram represents one range, and that range has a name."
    },
    {
      title: "Customizing Colors",
      points: 20,
      content: `
        <p>Most plotting functions accept a <code class="inline">color</code> keyword argument
        to control the appearance of lines, bars, or points, using a name like 'red' or a hex
        code.</p>
        <pre>import matplotlib.pyplot as plt

x = [1, 2, 3]
y = [5, 7, 4]

plt.plot(x, y, color="red")
plt.show()</pre>
      `,
      question: "Which keyword argument sets the color of a plotted element in matplotlib?",
      answer: "color",
      hint: "It's simply the English word for what you're changing."
    }
  ]
},
{
  id: "datetime-module",
  title: "Working with Dates (datetime)",
  icon: "📅",
  difficulty: "Medium",
  tags: ["datetime", "dates", "data-science"],
  description: "Parse, format, and perform arithmetic on dates and times using Python's datetime module.",
  tasks: [
    {
      title: "The datetime Module",
      points: 0,
      content: `
        <p>The built-in <code class="inline">datetime</code> module represents points in time
        as objects, letting you do arithmetic (like adding days) instead of manipulating raw
        strings.</p>
        <pre>from datetime import datetime, timedelta

now = datetime.now()
print(now)

future = now + timedelta(days=7)
print(future)</pre>
      `
    },
    {
      title: "Creating Specific Dates",
      points: 15,
      content: `
        <p>You can build a <code class="inline">datetime</code> for an exact moment by passing
        year, month, day (and optionally hour, minute, second) directly to the constructor.</p>
        <pre>from datetime import datetime

d = datetime(2026, 1, 15)
print(d.year, d.month, d.day)</pre>
      `,
      question: "What is d.month for d = datetime(2026, 1, 15)?",
      answer: "1",
      hint: "The arguments to datetime() go in the order year, month, day."
    },
    {
      title: "Formatting with strftime",
      points: 15,
      content: `
        <p><code class="inline">strftime()</code> converts a datetime object into a string
        using format codes: <code class="inline">%Y</code> for a 4-digit year,
        <code class="inline">%m</code> for a zero-padded month, and <code class="inline">%d</code>
        for a zero-padded day.</p>
        <pre>from datetime import datetime

d = datetime(2026, 3, 5)
print(d.strftime("%Y-%m-%d"))</pre>
      `,
      question: "What does d.strftime('%Y-%m-%d') output for d = datetime(2026, 3, 5)?",
      answer: "2026-03-05",
      hint: "The month and day are zero-padded to two digits each."
    },
    {
      title: "Date Arithmetic",
      points: 20,
      content: `
        <p>Subtracting one datetime from another gives you a <code class="inline">timedelta</code>
        object representing the difference, whose <code class="inline">days</code> attribute
        gives the whole number of days between them.</p>
        <pre>from datetime import datetime

d1 = datetime(2026, 1, 1)
d2 = datetime(2026, 1, 10)
diff = d2 - d1
print(diff.days)</pre>
      `,
      question: "What is diff.days for d2 - d1 when d1 = datetime(2026, 1, 1) and d2 = datetime(2026, 1, 10)?",
      answer: "9",
      hint: "Count the days from January 1st to January 10th."
    },
    {
      title: "Parsing Strings into Dates",
      points: 20,
      content: `
        <p>Going the other direction, <code class="inline">strptime()</code> parses a string
        into a datetime object, given a format string that describes how the text is laid
        out.</p>
        <pre>from datetime import datetime

d = datetime.strptime("2026-07-04", "%Y-%m-%d")
print(d.year)</pre>
      `,
      question: "Which datetime classmethod converts a string into a datetime object using a format string?",
      answer: "strptime",
      hint: "It's the mirror image of strftime, ending in 'time' rather than starting with 'str'."
    }
  ]
},
{
  id: "random-module",
  title: "The random Module & Simulations",
  icon: "🎲",
  difficulty: "Easy",
  tags: ["random", "simulation", "data-science"],
  description: "Use Python's random module to generate randomness for games, sampling, and simple simulations.",
  tasks: [
    {
      title: "Generating Randomness",
      points: 0,
      content: `
        <p>The built-in <code class="inline">random</code> module generates pseudo-random
        numbers, useful for games, simulations, and randomly sampling data. Calling
        <code class="inline">random.seed()</code> makes the sequence of 'random' values
        reproducible, which is handy for testing.</p>
        <pre>import random

random.seed(42)
print(random.random())</pre>
        <p><code class="inline">random.random()</code> always returns a float between 0.0
        (inclusive) and 1.0 (exclusive).</p>
      `
    },
    {
      title: "Random Integers",
      points: 10,
      content: `
        <p>To get a whole number instead of a float, use <code class="inline">randint(a, b)</code>,
        which returns an integer N such that a &lt;= N &lt;= b - both endpoints can appear.</p>
        <pre>import random

roll = random.randint(1, 6)
print(roll)</pre>
      `,
      question: "Which random module function returns a random integer between two bounds, inclusive of both?",
      answer: "randint",
      hint: "It's 'rand' plus the type of number it returns."
    },
    {
      title: "Picking a Random Element",
      points: 10,
      content: `
        <p><code class="inline">choice()</code> picks a single random element from any
        sequence, such as a list of strings.</p>
        <pre>import random

colors = ["red", "blue", "green"]
pick = random.choice(colors)
print(pick)</pre>
      `,
      question: "Which function picks a single random element from a sequence?",
      answer: "choice",
      hint: "It's simply the English word for making a selection."
    },
    {
      title: "Shuffling a List",
      points: 15,
      content: `
        <p><code class="inline">shuffle()</code> randomly reorders the elements of a list
        <b>in place</b> - it modifies the original list and returns None, so don't try to
        assign its result to a variable.</p>
        <pre>import random

deck = [1, 2, 3, 4, 5]
random.shuffle(deck)
print(deck)</pre>
      `,
      question: "Which function randomly reorders the elements of a list in place?",
      answer: "shuffle",
      hint: "Think of shuffling a deck of cards."
    },
    {
      title: "Sampling Without Replacement",
      points: 15,
      content: `
        <p><code class="inline">sample(population, k)</code> returns a new list of k unique
        elements chosen from the population, without picking the same element twice - unlike
        calling <code class="inline">choice()</code> repeatedly.</p>
        <pre>import random

lottery_numbers = list(range(1, 50))
winners = random.sample(lottery_numbers, 6)
print(winners)</pre>
      `,
      question: "Which function returns k unique elements chosen from a population without replacement?",
      answer: "sample",
      hint: "It's the same word used for taking a small sample of a larger group."
    }
  ]
},
{
  id: "statistics-module",
  title: "The statistics Module",
  icon: "📉",
  difficulty: "Easy",
  tags: ["statistics", "data-science"],
  description: "Compute mean, median, mode, and standard deviation with Python's built-in statistics module.",
  tasks: [
    {
      title: "Built-in Statistics",
      points: 0,
      content: `
        <p>For simple numeric summaries, you don't always need NumPy or Pandas - the standard
        library's <code class="inline">statistics</code> module covers the basics: mean,
        median, mode, and standard deviation.</p>
        <pre>import statistics as stats

data = [2, 4, 4, 4, 5, 5, 7, 9]
print(stats.mean(data))
print(stats.median(data))
print(stats.mode(data))</pre>
      `
    },
    {
      title: "Computing the Mean",
      points: 10,
      content: `
        <p><code class="inline">mean()</code> adds up all the values and divides by how many
        there are - the familiar average.</p>
        <pre>import statistics as stats

data = [10, 20, 30, 40]
print(stats.mean(data))</pre>
      `,
      question: "What does statistics.mean([10, 20, 30, 40]) return?",
      answer: "25",
      hint: "Add the four numbers together and divide by four."
    },
    {
      title: "Computing the Median",
      points: 10,
      content: `
        <p><code class="inline">median()</code> returns the middle value once the data is
        sorted. With an odd number of values, it's the single middle one; with an even number,
        it's the average of the two middle values.</p>
        <pre>import statistics as stats

data = [1, 3, 3, 6, 7, 8, 9]
print(stats.median(data))</pre>
      `,
      question: "What does statistics.median([1, 3, 3, 6, 7, 8, 9]) return?",
      answer: "6",
      hint: "There are 7 values already sorted - find the one right in the middle."
    },
    {
      title: "Computing the Mode",
      points: 15,
      content: `
        <p><code class="inline">mode()</code> returns the most frequently occurring value in
        the data.</p>
        <pre>import statistics as stats

data = [1, 2, 2, 3, 3, 3, 4]
print(stats.mode(data))</pre>
      `,
      question: "What does statistics.mode([1, 2, 2, 3, 3, 3, 4]) return?",
      answer: "3",
      hint: "Count how many times each number appears - one appears more than any other."
    },
    {
      title: "Measuring Spread with stdev",
      points: 15,
      content: `
        <p>The mean and median describe the 'center' of the data, but
        <code class="inline">stdev()</code> measures how spread out the values are around that
        center - a small standard deviation means the values are clustered close together.</p>
        <pre>import statistics as stats

data = [2, 4, 4, 4, 5, 5, 7, 9]
print(stats.stdev(data))</pre>
      `,
      question: "Which statistics module function computes the sample standard deviation?",
      answer: "stdev",
      hint: "It's a shortened spelling of 'standard deviation'."
    }
  ]
},

  /* ---- batch-10.js ---- */
  {
  id: "http-basics",
  title: "HTTP Basics",
  icon: "🌐",
  difficulty: "Easy",
  tags: ["web", "networking", "http"],
  description: "Understand how the web actually talks: HTTP requests, responses, methods, and status codes explained from the ground up.",
  tasks: [
    {
      title: "What Is HTTP?",
      points: 0,
      content: `
        <p>HTTP (HyperText Transfer Protocol) is the protocol that powers the web. A client
        (like a browser or a Python script) sends a <b>request</b> to a server, and the server
        sends back a <b>response</b>. Every request has a method, a URL, headers, and sometimes
        a body.</p>
        <p>Here's what a raw HTTP request looks like:</p>
        <pre>GET /api/users HTTP/1.1
Host: example.com
Accept: application/json</pre>
        <p>The response includes a status code, headers, and a body with the actual content.</p>
      `
    },
    {
      title: "HTTP Methods",
      points: 10,
      content: `
        <p>HTTP defines several methods (also called verbs) that describe what action you want
        to perform:</p>
        <ul>
          <li><code class="inline">GET</code> - retrieve data</li>
          <li><code class="inline">POST</code> - submit new data</li>
          <li><code class="inline">PUT</code> - replace existing data</li>
          <li><code class="inline">DELETE</code> - remove data</li>
        </ul>
        <p>Browsers use GET by default when you visit a page. Forms often use POST to submit data.</p>
        <pre>POST /login HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded

username=alice&amp;password=secret</pre>
      `,
      question: "Which HTTP method is used to fetch data without submitting a body?",
      answer: "GET",
      hint: "It's the default method used when you type a URL into a browser."
    },
    {
      title: "Status Codes",
      points: 10,
      content: `
        <p>Every HTTP response includes a three-digit status code that tells you what happened:</p>
        <ul>
          <li>2xx - success (200 OK)</li>
          <li>3xx - redirection (301 Moved Permanently)</li>
          <li>4xx - client error (404 Not Found)</li>
          <li>5xx - server error (500 Internal Server Error)</li>
        </ul>
        <pre>HTTP/1.1 404 Not Found
Content-Type: text/html</pre>
      `,
      question: "What status code means the requested resource couldn't be found?",
      answer: "404",
      hint: "It's a 4xx client error, and probably the most famous status code."
    },
    {
      title: "Headers",
      points: 15,
      content: `
        <p>Headers carry metadata about a request or response, separate from the actual body.
        Common ones include <code class="inline">Content-Type</code>,
        <code class="inline">Content-Length</code>, and <code class="inline">Authorization</code>.</p>
        <pre>HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 42

{"status": "ok"}</pre>
        <p>The Content-Type header tells the client how to interpret the body - as HTML, JSON,
        plain text, and so on.</p>
      `,
      question: "Which header tells the client what format the response body is in?",
      answer: "Content-Type",
      hint: "It often has a value like application/json or text/html."
    }
  ]
},
{
  id: "requests-library",
  title: "The requests Library",
  icon: "📡",
  difficulty: "Medium",
  tags: ["web", "networking", "requests"],
  description: "Make real HTTP requests from Python using the requests library, from simple GETs to JSON POST bodies.",
  tasks: [
    {
      title: "Your First Request",
      points: 0,
      content: `
        <p>The <code class="inline">requests</code> library is the standard way to make HTTP
        calls from Python. It wraps the messy details of sockets and headers into a simple,
        readable API.</p>
        <pre>import requests

response = requests.get("https://api.github.com")
print(response.status_code)
print(response.text[:100])</pre>
        <p>The <code class="inline">response</code> object holds everything you need: the status
        code, headers, and body.</p>
      `
    },
    {
      title: "The Response Object",
      points: 15,
      content: `
        <p>Every response object exposes useful attributes. <code class="inline">status_code</code>
        gives you the numeric HTTP status, <code class="inline">text</code> gives you the raw
        body as a string, and <code class="inline">json()</code> parses a JSON body into a
        Python dict.</p>
        <pre>import requests

r = requests.get("https://api.github.com/users/octocat")
data = r.json()
print(data["login"])
print(r.status_code)</pre>
      `,
      question: "Which response method converts a JSON body into a Python dictionary?",
      answer: "json()",
      hint: "It's a method call, not an attribute - don't forget the parentheses."
    },
    {
      title: "Query Params and Headers",
      points: 15,
      content: `
        <p>You can pass query string parameters using the <code class="inline">params</code>
        keyword instead of building the URL by hand, and custom headers with the
        <code class="inline">headers</code> keyword.</p>
        <pre>import requests

params = {"q": "python", "sort": "stars"}
headers = {"User-Agent": "my-app/1.0"}

r = requests.get("https://api.github.com/search/repositories",
                  params=params, headers=headers)
print(r.url)</pre>
      `,
      question: "Which keyword argument lets you attach query string parameters to a GET request?",
      answer: "params",
      hint: "It takes a dictionary of key-value pairs appended to the URL."
    },
    {
      title: "Sending JSON with POST",
      points: 20,
      content: `
        <p>To send data, use <code class="inline">requests.post()</code> with a
        <code class="inline">json</code> keyword to automatically encode a dict as a JSON body
        and set the right header.</p>
        <pre>import requests

payload = {"title": "New post", "body": "Hello world"}
r = requests.post("https://httpbin.org/post", json=payload)
r.raise_for_status()
print(r.json()["json"])</pre>
        <p>Calling <code class="inline">raise_for_status()</code> raises an exception
        automatically if the response was a 4xx or 5xx error, which saves you from silently
        ignoring failures.</p>
      `,
      question: "Which keyword argument automatically sends a Python dict as a JSON request body?",
      answer: "json",
      hint: "It's shorter than manually calling json.dumps and setting headers yourself."
    }
  ]
},
{
  id: "consuming-rest-api",
  title: "Consuming a REST API",
  icon: "📥",
  difficulty: "Medium",
  tags: ["web", "networking", "api"],
  description: "Interact with a real-world style REST API: fetch resources, follow nested endpoints, and create new data.",
  tasks: [
    {
      title: "What Is a REST API?",
      points: 0,
      content: `
        <p>A REST API exposes data as <b>resources</b>, each identified by a URL. You interact
        with resources using standard HTTP methods: GET to read, POST to create, PUT/PATCH to
        update, DELETE to remove.</p>
        <pre>import requests

base_url = "https://jsonplaceholder.typicode.com"
r = requests.get(base_url + "/users/1")
user = r.json()
print(user["name"], user["email"])</pre>
        <p>Most REST APIs return JSON, use predictable URL patterns, and rely on status codes
        to signal success or failure.</p>
      `
    },
    {
      title: "Fetching a Collection",
      points: 15,
      content: `
        <p>Many endpoints return a list of resources instead of a single one. When you GET a
        collection, the JSON body is usually a list of dicts.</p>
        <pre>import requests

r = requests.get("https://jsonplaceholder.typicode.com/posts")
posts = r.json()
print(len(posts))
for post in posts[:3]:
    print(post["id"], post["title"])</pre>
      `,
      question: "What Python data type does a JSON list of objects usually decode into?",
      answer: "list",
      hint: "It's the same type you'd get from square brackets []."
    },
    {
      title: "Path Parameters",
      points: 20,
      content: `
        <p>REST APIs often encode which resource you want directly in the URL path, like
        <code class="inline">/users/1/posts</code>, rather than as a query parameter. This is
        called a path parameter.</p>
        <pre>import requests

user_id = 1
r = requests.get(f"https://jsonplaceholder.typicode.com/users/{user_id}/posts")
posts = r.json()
print(f"User {user_id} has {len(posts)} posts")</pre>
      `,
      question: "In a URL like /users/1/posts, is the number 1 a path parameter or a query parameter?",
      answer: "path parameter",
      hint: "It's embedded directly in the URL's path, not after a question mark."
    },
    {
      title: "Creating a Resource",
      points: 20,
      content: `
        <p>Creating a new resource is typically done with POST, and a well-behaved REST API
        responds with status code 201 Created along with the new resource (often including its
        assigned id).</p>
        <pre>import requests

new_post = {"title": "Hello", "body": "My first post", "userId": 1}
r = requests.post("https://jsonplaceholder.typicode.com/posts", json=new_post)
print(r.status_code)
print(r.json()["id"])</pre>
      `,
      question: "What status code does a REST API typically return after successfully creating a resource?",
      answer: "201",
      hint: "It's a 2xx success code, but not the plain 200 used for GET requests."
    }
  ]
},
{
  id: "json-apis",
  title: "Working with JSON APIs",
  icon: "🧾",
  difficulty: "Medium",
  tags: ["web", "json", "api"],
  description: "Parse, build, and safely navigate JSON payloads, the data format that powers nearly every modern web API.",
  tasks: [
    {
      title: "JSON and Python",
      points: 0,
      content: `
        <p>JSON (JavaScript Object Notation) is the most common format for exchanging data with
        web APIs. It maps closely onto Python's own dicts, lists, strings, numbers, and
        booleans.</p>
        <pre>import json

data = {"name": "Ada", "age": 30, "active": True}
text = json.dumps(data)
print(text)

parsed = json.loads(text)
print(parsed["name"])</pre>
        <p><code class="inline">json.dumps()</code> converts a Python object to a JSON string,
        and <code class="inline">json.loads()</code> does the reverse.</p>
      `
    },
    {
      title: "Nested Data",
      points: 15,
      content: `
        <p>JSON objects can nest dicts and lists inside each other, mirroring how APIs
        represent related data. You navigate them the same way you would any nested Python
        structure.</p>
        <pre>import json

text = '{"user": {"name": "Ada", "roles": ["admin", "editor"]}}'
data = json.loads(text)
print(data["user"]["roles"][0])</pre>
      `,
      question: "Which module function parses a JSON string into a Python object?",
      answer: "json.loads",
      hint: "It stands for 'load string' - compare it to json.dumps."
    },
    {
      title: "Handling Missing Keys",
      points: 15,
      content: `
        <p>Real-world API responses don't always include every field. Using square brackets on
        a missing key raises a <code class="inline">KeyError</code>, but
        <code class="inline">.get()</code> lets you supply a default instead.</p>
        <pre>import json

text = '{"name": "Ada"}'
data = json.loads(text)
print(data.get("email", "no email provided"))</pre>
      `,
      question: "Which dict method lets you fetch a key with a fallback default instead of raising an error?",
      answer: ".get()",
      hint: "It takes the key and an optional second argument for the default."
    },
    {
      title: "Writing JSON to Files",
      points: 20,
      content: `
        <p>You can write JSON straight to a file with <code class="inline">json.dump()</code>,
        which is handy for caching an API response or building a request body to send later.</p>
        <pre>import json

data = {"title": "Report", "items": [1, 2, 3]}
with open("data.json", "w") as f:
    json.dump(data, f)</pre>
        <p>Note the difference: <code class="inline">dump</code>/<code class="inline">load</code>
        work with files, while <code class="inline">dumps</code>/<code class="inline">loads</code>
        work with strings.</p>
      `,
      question: "Which function writes a Python object as JSON directly to an open file object?",
      answer: "json.dump",
      hint: "It has no trailing s, unlike the string version."
    }
  ]
},
{
  id: "web-scraping-basics",
  title: "Web Scraping Basics",
  icon: "🕸️",
  difficulty: "Medium",
  tags: ["web", "scraping", "html"],
  description: "Extract data from real HTML pages using requests and BeautifulSoup, from single elements to lists of links.",
  tasks: [
    {
      title: "Fetching and Parsing HTML",
      points: 0,
      content: `
        <p>Web scraping means downloading a page's HTML and extracting the data you care about
        programmatically, instead of copying it by hand. The
        <code class="inline">BeautifulSoup</code> library (from the <code class="inline">bs4</code>
        package) makes parsing HTML straightforward.</p>
        <pre>import requests
from bs4 import BeautifulSoup

r = requests.get("https://example.com")
soup = BeautifulSoup(r.text, "html.parser")
print(soup.title.text)</pre>
        <p>First you fetch the raw HTML with <code class="inline">requests</code>, then hand it
        to BeautifulSoup to turn it into a searchable tree.</p>
      `
    },
    {
      title: "Finding Elements",
      points: 15,
      content: `
        <p><code class="inline">find()</code> returns the first matching tag, while
        <code class="inline">find_all()</code> returns a list of every matching tag. Both can
        search by tag name.</p>
        <pre>from bs4 import BeautifulSoup

html = """
&lt;ul&gt;
  &lt;li&gt;Apples&lt;/li&gt;
  &lt;li&gt;Bananas&lt;/li&gt;
&lt;/ul&gt;
"""
soup = BeautifulSoup(html, "html.parser")
items = soup.find_all("li")
for item in items:
    print(item.text)</pre>
      `,
      question: "Which BeautifulSoup method returns a list of every matching tag, instead of just the first one?",
      answer: "find_all()",
      hint: "Its name hints that it grabs every match, not a single one."
    },
    {
      title: "Filtering by Class",
      points: 20,
      content: `
        <p>Elements often carry <code class="inline">class</code> or <code class="inline">id</code>
        attributes you can filter on. Pass <code class="inline">class_</code> (with a trailing
        underscore, since <code class="inline">class</code> is a Python keyword) or use CSS
        selectors with <code class="inline">select()</code>.</p>
        <pre>from bs4 import BeautifulSoup

html = """
&lt;div class="price"&gt;$19.99&lt;/div&gt;
&lt;div class="price"&gt;$24.50&lt;/div&gt;
"""
soup = BeautifulSoup(html, "html.parser")
prices = soup.select(".price")
for p in prices:
    print(p.text)</pre>
      `,
      question: "Why does BeautifulSoup use the keyword class_ instead of class when filtering by class name?",
      answer: "class is a reserved keyword",
      hint: "Think about what 'class' already means in Python syntax."
    },
    {
      title: "Extracting Attributes",
      points: 20,
      content: `
        <p>To pull an attribute's value instead of the text, treat the tag like a dictionary.
        This is the standard way to collect links from a page.</p>
        <pre>from bs4 import BeautifulSoup

html = """
&lt;a href="https://example.com/page1"&gt;Page 1&lt;/a&gt;
&lt;a href="https://example.com/page2"&gt;Page 2&lt;/a&gt;
"""
soup = BeautifulSoup(html, "html.parser")
links = soup.find_all("a")
for link in links:
    print(link["href"])</pre>
      `,
      question: "How do you access a tag's href attribute once you have the tag object?",
      answer: "link['href']",
      hint: "Treat the tag like a dictionary and index it by the attribute name."
    }
  ]
},
{
  id: "intro-to-flask",
  title: "Intro to Flask",
  icon: "🧪",
  difficulty: "Medium",
  tags: ["web", "flask", "framework"],
  description: "Build your very first Flask web application, from a single route to a working local development server.",
  tasks: [
    {
      title: "Hello, Flask",
      points: 0,
      content: `
        <p>Flask is a lightweight Python web framework. It lets you turn a handful of Python
        functions into a running website, with no boilerplate required to get started.</p>
        <pre>from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(debug=True)</pre>
        <p>Running this script starts a local development server, usually at
        http://127.0.0.1:5000, where visiting the homepage prints "Hello, World!".</p>
      `
    },
    {
      title: "Routes and View Functions",
      points: 15,
      content: `
        <p>The <code class="inline">@app.route()</code> decorator maps a URL path to a Python
        function, called a <b>view function</b>. You can define as many routes as your app
        needs.</p>
        <pre>from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Welcome!"

@app.route("/about")
def about():
    return "This is the about page."</pre>
      `,
      question: "Which decorator connects a URL path to a Python function in Flask?",
      answer: "@app.route",
      hint: "It's applied directly above the function definition."
    },
    {
      title: "Debug Mode",
      points: 15,
      content: `
        <p>Passing <code class="inline">debug=True</code> to <code class="inline">app.run()</code>
        turns on Flask's development mode: the server automatically reloads when you edit code,
        and errors show a detailed interactive traceback in the browser instead of a plain
        crash.</p>
        <pre>if __name__ == "__main__":
    app.run(debug=True, port=5000)</pre>
        <p>Debug mode should never be enabled in production, since it can leak sensitive
        information.</p>
      `,
      question: "Which keyword argument to app.run() enables auto-reload and detailed error pages?",
      answer: "debug",
      hint: "Set it to True, and never do this in a real deployed app."
    },
    {
      title: "Custom Status Codes",
      points: 20,
      content: `
        <p>A view function can return more than a plain string. Returning a tuple of (body,
        status_code) lets you control the HTTP status Flask sends back.</p>
        <pre>from flask import Flask

app = Flask(__name__)

@app.route("/missing")
def missing():
    return "Not found here", 404</pre>
        <p>Flask automatically wraps whatever you return into a proper HTTP response.</p>
      `,
      question: "What do you return from a Flask view to send a custom status code along with the body?",
      answer: "a tuple",
      hint: "It's (body, status_code) - two values together."
    }
  ]
},
{
  id: "flask-routes",
  title: "Flask Routes & Views",
  icon: "🛣️",
  difficulty: "Medium",
  tags: ["web", "flask", "routing"],
  description: "Define dynamic URL routes with variables, type converters, and query parameters to build flexible Flask views.",
  tasks: [
    {
      title: "Dynamic Routes",
      points: 0,
      content: `
        <p>Flask routes can include variable segments in the URL, letting one view function
        handle many different paths. Variables are written with angle brackets in the route
        string.</p>
        <pre>from flask import Flask

app = Flask(__name__)

@app.route("/users/&lt;username&gt;")
def show_user(username):
    return f"Profile page for {username}"</pre>
        <p>Whatever value appears in that part of the URL gets passed to the function as an
        argument with the matching name.</p>
      `
    },
    {
      title: "Type Converters",
      points: 15,
      content: `
        <p>You can restrict a URL variable to a specific type using a converter prefix, like
        <code class="inline">int:</code> or <code class="inline">float:</code>. Flask then
        converts the URL segment automatically and rejects non-matching requests with a 404.</p>
        <pre>from flask import Flask

app = Flask(__name__)

@app.route("/posts/&lt;int:post_id&gt;")
def show_post(post_id):
    return f"Post number {post_id}"</pre>
      `,
      question: "Which converter prefix restricts a Flask route variable to whole numbers only?",
      answer: "int:",
      hint: "It goes right before the variable name inside the angle brackets."
    },
    {
      title: "Query String Parameters",
      points: 20,
      content: `
        <p>Query string parameters (the part after a <code class="inline">?</code> in a URL) are
        available through <code class="inline">request.args</code>, a dict-like object. Use
        <code class="inline">.get()</code> to read a value safely, with an optional default.</p>
        <pre>from flask import Flask, request

app = Flask(__name__)

@app.route("/search")
def search():
    query = request.args.get("q", "")
    return f"Searching for: {query}"</pre>
      `,
      question: "Which Flask object holds the query string parameters of the current request?",
      answer: "request.args",
      hint: "It behaves like a dictionary and comes from the flask.request object."
    },
    {
      title: "Restricting Methods",
      points: 20,
      content: `
        <p>By default a route only accepts GET requests. To handle other methods, list them
        explicitly in the <code class="inline">methods</code> argument of
        <code class="inline">@app.route()</code>.</p>
        <pre>from flask import Flask, request

app = Flask(__name__)

@app.route("/submit", methods=["GET", "POST"])
def submit():
    if request.method == "POST":
        return "Form submitted!"
    return "Show the form"</pre>
      `,
      question: "Which keyword argument to @app.route specifies which HTTP methods a view accepts?",
      answer: "methods",
      hint: "It takes a list, like ['GET', 'POST']."
    }
  ]
},
{
  id: "flask-templates",
  title: "Flask Templates",
  icon: "📄",
  difficulty: "Medium",
  tags: ["web", "flask", "templates"],
  description: "Render dynamic HTML pages in Flask using Jinja2 templates, variables, loops, and template inheritance.",
  tasks: [
    {
      title: "Rendering Templates",
      points: 0,
      content: `
        <p>Instead of returning raw strings from every view, Flask uses the Jinja2 templating
        engine to render full HTML pages from template files, usually stored in a folder named
        <code class="inline">templates</code>.</p>
        <pre>from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")</pre>
        <p>A minimal templates/index.html file might just contain plain HTML, but the real
        power comes from mixing in dynamic values.</p>
      `
    },
    {
      title: "Passing Variables",
      points: 15,
      content: `
        <p>You pass data into a template as keyword arguments to
        <code class="inline">render_template()</code>. Inside the template, double curly braces
        output a value.</p>
        <pre>from flask import Flask, render_template

app = Flask(__name__)

@app.route("/hello/&lt;name&gt;")
def hello(name):
    return render_template("hello.html", name=name)</pre>
        <p>Inside templates/hello.html you would write something like: Hello, {{ name }}!</p>
      `,
      question: "What syntax does Jinja2 use to output a variable's value inside a template?",
      answer: "{{ }}",
      hint: "It's double curly braces, wrapped around the variable name."
    },
    {
      title: "Loops and Conditionals",
      points: 15,
      content: `
        <p>Jinja2 also supports control structures like loops and conditionals, written inside
        <code class="inline">{% %}</code> tags rather than <code class="inline">{{ }}</code>.</p>
        <pre>&lt;ul&gt;
{% for item in items %}
  &lt;li&gt;{{ item }}&lt;/li&gt;
{% endfor %}
&lt;/ul&gt;</pre>
        <p>Every <code class="inline">{% for %}</code> block must be closed with a matching
        <code class="inline">{% endfor %}</code>.</p>
      `,
      question: "Which curly-brace-and-percent syntax wraps Jinja2 logic like loops and if statements?",
      answer: "{% %}",
      hint: "It looks like {{ }} but uses percent signs instead of a second brace."
    },
    {
      title: "Template Inheritance",
      points: 20,
      content: `
        <p>Rather than repeating the same header and footer in every template, Jinja2 supports
        inheritance. A base template defines named <code class="inline">block</code> sections,
        and child templates extend it and fill those blocks in.</p>
        <pre>&lt;!-- base.html --&gt;
&lt;html&gt;
&lt;body&gt;
  {% block content %}{% endblock %}
&lt;/body&gt;
&lt;/html&gt;

&lt;!-- page.html --&gt;
{% extends "base.html" %}
{% block content %}
  &lt;p&gt;Page-specific content goes here.&lt;/p&gt;
{% endblock %}</pre>
      `,
      question: "Which Jinja2 tag does a child template use to inherit from a base template?",
      answer: "extends",
      hint: "It's used like {% extends 'base.html' %} at the top of the child template."
    }
  ]
},
{
  id: "building-simple-api",
  title: "Building a Simple API",
  icon: "🛠️",
  difficulty: "Hard",
  tags: ["web", "api", "flask"],
  description: "Design and build a small but complete JSON API with Flask, covering GET, POST, error handling, and status codes.",
  tasks: [
    {
      title: "JSON Responses",
      points: 0,
      content: `
        <p>A JSON API is just a Flask app whose views return JSON instead of HTML. Flask's
        <code class="inline">jsonify()</code> helper converts a Python dict into a proper JSON
        response, with the correct Content-Type header already set.</p>
        <pre>from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/status")
def status():
    return jsonify({"status": "ok", "version": 1})</pre>
        <p>Using <code class="inline">jsonify()</code> everywhere lets you control status codes
        and headers explicitly, rather than returning a bare dict.</p>
      `
    },
    {
      title: "Listing a Resource",
      points: 20,
      content: `
        <p>A typical API endpoint reads from some data source (a database, a file, or here just
        an in-memory list) and returns it as JSON.</p>
        <pre>from flask import Flask, jsonify

app = Flask(__name__)

books = [
    {"id": 1, "title": "Dune"},
    {"id": 2, "title": "Foundation"},
]

@app.route("/api/books")
def get_books():
    return jsonify(books)</pre>
      `,
      question: "Which Flask function converts a Python list or dict into a JSON HTTP response?",
      answer: "jsonify()",
      hint: "It comes from the flask package, alongside Flask itself."
    },
    {
      title: "Fetching a Single Item",
      points: 20,
      content: `
        <p>When a client asks for a specific resource by id, you need to handle the case where
        it doesn't exist by returning a 404 instead of crashing or returning an empty success.</p>
        <pre>from flask import Flask, jsonify, abort

app = Flask(__name__)

books = [{"id": 1, "title": "Dune"}]

@app.route("/api/books/&lt;int:book_id&gt;")
def get_book(book_id):
    for book in books:
        if book["id"] == book_id:
            return jsonify(book)
    abort(404)</pre>
      `,
      question: "Which Flask function immediately stops the view and returns a given HTTP error status?",
      answer: "abort()",
      hint: "It takes the status code as its argument, like abort(404)."
    },
    {
      title: "Creating Resources",
      points: 25,
      content: `
        <p>To let clients create resources, add a route that accepts POST and reads the
        incoming JSON body with <code class="inline">request.get_json()</code>.</p>
        <pre>from flask import Flask, jsonify, request

app = Flask(__name__)
books = []
next_id = 1

@app.route("/api/books", methods=["POST"])
def create_book():
    global next_id
    data = request.get_json()
    book = {"id": next_id, "title": data["title"]}
    books.append(book)
    next_id += 1
    return jsonify(book), 201</pre>
      `,
      question: "Which method on the request object parses the incoming request body as JSON?",
      answer: "get_json()",
      hint: "It's called on the request object, and returns a Python dict."
    },
    {
      title: "Consistent Error Responses",
      points: 25,
      content: `
        <p>By default, Flask's error pages are HTML, which is unhelpful for an API client
        expecting JSON. A custom error handler lets you return consistent JSON errors instead.</p>
        <pre>from flask import Flask, jsonify

app = Flask(__name__)

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "resource not found"}), 404</pre>
        <p>Now every 404 across the whole app, including ones triggered by
        <code class="inline">abort(404)</code>, returns clean JSON instead of an HTML page.</p>
      `,
      question: "Which decorator registers a custom handler for a specific HTTP error code in Flask?",
      answer: "@app.errorhandler",
      hint: "It takes the status code as its argument, like @app.errorhandler(404)."
    }
  ]
},
{
  id: "sockets-basics",
  title: "Sockets Basics",
  icon: "🔌",
  difficulty: "Hard",
  tags: ["web", "networking", "sockets"],
  description: "Get hands-on with raw network sockets in Python: connecting, sending bytes, and building a minimal TCP server.",
  tasks: [
    {
      title: "What Is a Socket?",
      points: 0,
      content: `
        <p>A socket is a low-level endpoint for sending and receiving data over a network. Every
        HTTP request you've made through <code class="inline">requests</code> ultimately happens
        over a socket underneath - the <code class="inline">socket</code> module lets you work
        at that raw level directly.</p>
        <pre>import socket

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("example.com", 80))
sock.sendall(b"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n")
response = sock.recv(4096)
print(response[:100])
sock.close()</pre>
        <p>Here we connect to port 80 (the standard HTTP port) and manually send a raw HTTP
        request as bytes.</p>
      `
    },
    {
      title: "Address Families and Types",
      points: 20,
      content: `
        <p><code class="inline">socket.AF_INET</code> specifies that we're using IPv4 addresses,
        and <code class="inline">socket.SOCK_STREAM</code> specifies a TCP socket, which
        guarantees ordered, reliable delivery of bytes. This combination is by far the most
        common for network programming.</p>
        <pre>import socket

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print(sock.family, sock.type)</pre>
      `,
      question: "Which socket type constant selects TCP instead of UDP?",
      answer: "SOCK_STREAM",
      hint: "It contrasts with SOCK_DGRAM, which is used for UDP."
    },
    {
      title: "Building a Server",
      points: 20,
      content: `
        <p>A server socket follows a specific sequence: <code class="inline">bind()</code> to an
        address and port, <code class="inline">listen()</code> to start waiting for connections,
        and <code class="inline">accept()</code> to block until a client connects.</p>
        <pre>import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("localhost", 9999))
server.listen(1)
print("Waiting for a connection...")

conn, addr = server.accept()
print("Connected by", addr)
data = conn.recv(1024)
conn.sendall(b"Message received")
conn.close()</pre>
      `,
      question: "Which socket method blocks until a client connects and returns a new connection object?",
      answer: "accept()",
      hint: "It's called after bind() and listen(), and it returns a tuple of (connection, address)."
    },
    {
      title: "Sending and Receiving Bytes",
      points: 25,
      content: `
        <p>Sockets only work with raw bytes, not strings. You must <code class="inline">.encode()</code>
        a string before sending it and <code class="inline">.decode()</code> whatever bytes you
        receive back into a readable string.</p>
        <pre>import socket

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 9999))
sock.sendall("Hello server".encode())
reply = sock.recv(1024)
print(reply.decode())
sock.close()</pre>
      `,
      question: "Which string method converts text into bytes before sending it over a socket?",
      answer: ".encode()",
      hint: "Its opposite is .decode(), used on the bytes you receive."
    },
    {
      title: "Cleaning Up Properly",
      points: 25,
      content: `
        <p>Sockets are a limited system resource, so it's important to close them when you're
        done. Sockets support the context manager protocol, so wrapping them in a
        <code class="inline">with</code> statement closes them automatically, even if an error
        occurs.</p>
        <pre>import socket

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
    sock.connect(("example.com", 80))
    sock.sendall(b"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n")
    print(sock.recv(200))</pre>
      `,
      question: "Which Python statement automatically closes a socket for you, even if an exception is raised inside it?",
      answer: "with",
      hint: "It's the same keyword you use for automatically closing files."
    }
  ]
},
{
  id: "url-parsing",
  title: "URL Parsing",
  icon: "🔗",
  difficulty: "Easy",
  tags: ["web", "networking", "urllib"],
  description: "Break URLs down into their components and build them back up again using Python's urllib.parse module.",
  tasks: [
    {
      title: "Breaking Down a URL",
      points: 0,
      content: `
        <p>A URL is made of several distinct parts: scheme, host, path, query string, and more.
        The <code class="inline">urllib.parse</code> module can split a URL string into these
        pieces without you writing any regular expressions.</p>
        <pre>from urllib.parse import urlparse

url = "https://example.com/products?id=42&amp;sort=price"
parts = urlparse(url)
print(parts.scheme)
print(parts.netloc)
print(parts.path)
print(parts.query)</pre>
        <p>This gives you a structured object instead of a single unwieldy string.</p>
      `
    },
    {
      title: "Scheme and Netloc",
      points: 10,
      content: `
        <p>The <code class="inline">scheme</code> is the protocol (like <code class="inline">http</code>
        or <code class="inline">https</code>), and <code class="inline">netloc</code> is the
        network location - typically the hostname, and sometimes a port.</p>
        <pre>from urllib.parse import urlparse

parts = urlparse("https://api.example.com:8080/data")
print(parts.scheme)
print(parts.netloc)</pre>
      `,
      question: "Which urlparse attribute holds the hostname (and port, if given) of a URL?",
      answer: "netloc",
      hint: "It's short for 'network location'."
    },
    {
      title: "Parsing Query Strings",
      points: 10,
      content: `
        <p>The query string part of a URL can itself be parsed into a dictionary of lists using
        <code class="inline">parse_qs()</code>, which handles keys that appear more than once.</p>
        <pre>from urllib.parse import parse_qs

query = "id=42&amp;tag=python&amp;tag=web"
result = parse_qs(query)
print(result)</pre>
        <p>Notice that the value for <code class="inline">tag</code> comes back as a list, since
        the key appeared twice.</p>
      `,
      question: "Which urllib.parse function turns a query string into a dictionary of lists?",
      answer: "parse_qs",
      hint: "The 'qs' in the name stands for 'query string'."
    },
    {
      title: "Building URLs",
      points: 15,
      content: `
        <p>Going the other direction, <code class="inline">urlencode()</code> turns a
        dictionary into a properly escaped query string, and <code class="inline">urljoin()</code>
        combines a base URL with a relative path.</p>
        <pre>from urllib.parse import urlencode, urljoin

params = {"q": "hello world", "page": 2}
print(urlencode(params))

base = "https://example.com/blog/"
print(urljoin(base, "post-1"))</pre>
      `,
      question: "Which urllib.parse function safely combines a base URL with a relative link?",
      answer: "urljoin",
      hint: "Think of it as joining a base and a relative path, like os.path.join for URLs."
    }
  ]
},
{
  id: "web-scraping-ethics",
  title: "Web Scraping Ethics & robots.txt",
  icon: "🤖",
  difficulty: "Easy",
  tags: ["web", "ethics", "scraping"],
  description: "Understand what's okay to scrape, how robots.txt works, and the etiquette expected of any well-behaved crawler.",
  tasks: [
    {
      title: "Respecting robots.txt",
      points: 0,
      content: `
        <p>Before scraping any website, it's worth checking whether it wants to be scraped at
        all. Most sites publish a <code class="inline">robots.txt</code> file at their root,
        describing which parts of the site automated tools are allowed to visit.</p>
        <pre>User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /</pre>
        <p>This file is a convention, not a technical lock - your scraper can ignore it, but
        doing so is considered bad practice and can violate a site's terms of service.</p>
      `
    },
    {
      title: "Checking Rules in Python",
      points: 10,
      content: `
        <p>Python's standard library includes <code class="inline">urllib.robotparser</code>,
        which can fetch and interpret a site's robots.txt for you, so you don't have to parse
        the rules by hand.</p>
        <pre>from urllib.robotparser import RobotFileParser

rp = RobotFileParser()
rp.set_url("https://example.com/robots.txt")
rp.read()

can_fetch = rp.can_fetch("*", "https://example.com/private/data")
print(can_fetch)</pre>
      `,
      question: "Which method of RobotFileParser tells you whether a given URL is allowed to be crawled?",
      answer: "can_fetch",
      hint: "It takes a user-agent string and a URL, and returns True or False."
    },
    {
      title: "Being a Good Citizen",
      points: 15,
      content: `
        <p>Being a good scraping citizen also means not hammering a server with requests. Adding
        a delay between requests, setting a descriptive <code class="inline">User-Agent</code>
        header, and caching results you've already fetched all reduce load on the site you're
        visiting.</p>
        <pre>import time
import requests

headers = {"User-Agent": "MyScraperBot/1.0 (contact: me@example.com)"}

for page in range(1, 4):
    r = requests.get(f"https://example.com/page/{page}", headers=headers)
    print(r.status_code)
    time.sleep(2)</pre>
      `,
      question: "Which Python function pauses execution for a given number of seconds, useful for rate-limiting requests?",
      answer: "time.sleep",
      hint: "It comes from the time module and takes the number of seconds as its argument."
    }
  ]
},

  /* ---- batch-11.js ---- */
  {
  id: "intro-to-sql",
  title: "Intro to SQL",
  icon: "🗄️",
  difficulty: "Easy",
  tags: ["databases", "sql"],
  description: "Learn the fundamentals of SQL by writing SELECT, INSERT, UPDATE, and DELETE statements to manage data in a table.",
  tasks: [
    {
      title: "What is SQL?",
      points: 0,
      content: `
        <p>SQL (Structured Query Language) is how you talk to a relational database. Data is
        stored in <b>tables</b> made of rows and columns, and SQL lets you create, read,
        update, and delete that data with simple statements.</p>
        <p>Here is a table called <code class="inline">users</code> and a query that reads
        from it:</p>
        <pre>-- users table
-- id | name    | age
-- 1  | Alice   | 30
-- 2  | Bob     | 25

SELECT name, age FROM users;</pre>
        <p>The four core operations you'll learn are often called <b>CRUD</b>: Create, Read,
        Update, and Delete.</p>
      `
    },
    {
      title: "SELECT",
      points: 10,
      content: `
        <p>The <code class="inline">SELECT</code> statement reads data from a table. You choose
        which columns to return, and optionally filter rows with
        <code class="inline">WHERE</code>.</p>
        <pre>SELECT name FROM users WHERE age &gt; 26;</pre>
        <p>Use <code class="inline">*</code> to select every column instead of naming each one.</p>
      `,
      question: "Which keyword selects every column in a table?",
      answer: "*",
      hint: "It's a single wildcard character, not a word."
    },
    {
      title: "INSERT",
      points: 10,
      content: `
        <p><code class="inline">INSERT</code> adds a new row to a table. You list the columns
        you're filling in and the values in the same order.</p>
        <pre>INSERT INTO users (name, age) VALUES ('Charlie', 22);</pre>
        <p>If you skip a column, it will use its default value or
        <code class="inline">NULL</code>.</p>
      `,
      question: "Which keyword do you use to add a new row to a table?",
      answer: "INSERT",
      hint: "It's the first word of the statement."
    },
    {
      title: "UPDATE",
      points: 15,
      content: `
        <p><code class="inline">UPDATE</code> changes existing rows. Always pair it with
        <code class="inline">WHERE</code>, or every row in the table will be changed.</p>
        <pre>UPDATE users SET age = 31 WHERE name = 'Alice';</pre>
      `,
      question: "What clause limits which rows an UPDATE affects?",
      answer: "WHERE",
      hint: "The same clause you use to filter a SELECT."
    },
    {
      title: "DELETE",
      points: 15,
      content: `
        <p><code class="inline">DELETE</code> removes rows from a table. Like UPDATE,
        forgetting <code class="inline">WHERE</code> deletes every row.</p>
        <pre>DELETE FROM users WHERE name = 'Bob';</pre>
      `,
      question: "Which statement removes rows from a table?",
      answer: "DELETE",
      hint: "It's the opposite of INSERT."
    }
  ]
},
{
  id: "sqlite3-basics",
  title: "sqlite3 in Python",
  icon: "💾",
  difficulty: "Medium",
  tags: ["databases", "sqlite", "python"],
  description: "Connect to a SQLite database from Python using the built-in sqlite3 module, then run queries and read back results.",
  tasks: [
    {
      title: "Connecting with sqlite3",
      points: 0,
      content: `
        <p>Python's built-in <code class="inline">sqlite3</code> module lets you talk to a
        SQLite database file without installing anything extra. SQLite stores an entire
        database in a single file on disk.</p>
        <pre>import sqlite3

conn = sqlite3.connect('example.db')
cursor = conn.cursor()
cursor.execute('SELECT sqlite_version();')
print(cursor.fetchone())

conn.close()</pre>
        <p>A <b>connection</b> represents the open database file, and a <b>cursor</b> is used
        to execute SQL statements and fetch results.</p>
      `
    },
    {
      title: "Creating a table",
      points: 15,
      content: `
        <p>Use <code class="inline">execute()</code> to run any SQL statement, including
        <code class="inline">CREATE TABLE</code>. The table only needs to be created once.</p>
        <pre>import sqlite3

conn = sqlite3.connect('example.db')
cursor = conn.cursor()
cursor.execute('''
    CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY,
        text TEXT
    )
''')
conn.commit()</pre>
      `,
      question: "Which method on a cursor runs a SQL statement?",
      answer: "execute",
      hint: "Same word you'd use to 'run' code."
    },
    {
      title: "Fetching rows",
      points: 15,
      content: `
        <p>After a <code class="inline">SELECT</code>, use <code class="inline">fetchone()</code>
        for a single row, or <code class="inline">fetchall()</code> to get every matching row
        as a list of tuples.</p>
        <pre>cursor.execute('SELECT id, text FROM notes')
rows = cursor.fetchall()
for row in rows:
    print(row)</pre>
      `,
      question: "Which cursor method returns all matching rows as a list?",
      answer: "fetchall",
      hint: "It's the plural version of fetchone."
    },
    {
      title: "Parameterized queries",
      points: 20,
      content: `
        <p>Never build SQL with string formatting when a value comes from a user — it opens
        the door to SQL injection. Instead, pass values separately using a
        <code class="inline">?</code> placeholder.</p>
        <pre>name = 'Ada'
cursor.execute('SELECT * FROM notes WHERE text = ?', (name,))</pre>
      `,
      question: "What placeholder character does sqlite3 use for parameterized values?",
      answer: "?",
      hint: "It's a single punctuation character."
    },
    {
      title: "Committing changes",
      points: 15,
      content: `
        <p>Changes made through <code class="inline">execute()</code> aren't saved to disk
        until you call <code class="inline">conn.commit()</code>. Always close the connection
        when you're done.</p>
        <pre>cursor.execute('INSERT INTO notes (text) VALUES (?)', ('hello',))
conn.commit()
conn.close()</pre>
      `,
      question: "Which method permanently saves changes to a SQLite database?",
      answer: "commit",
      hint: "It's called on the connection object, not the cursor."
    }
  ]
},
{
  id: "crud-with-sqlite",
  title: "CRUD with sqlite3",
  icon: "🔄",
  difficulty: "Medium",
  tags: ["databases", "sqlite", "crud"],
  description: "Practice the full CRUD cycle in sqlite3 by creating, reading, updating, and deleting rows in a real Python-managed database.",
  tasks: [
    {
      title: "CRUD and sqlite3",
      points: 0,
      content: `
        <p>CRUD stands for Create, Read, Update, and Delete — the four basic operations you
        perform on stored data. In sqlite3, each maps directly to a SQL statement executed
        through a cursor.</p>
        <pre>import sqlite3

conn = sqlite3.connect(':memory:')
cursor = conn.cursor()
cursor.execute('CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT, done INTEGER)')
conn.commit()</pre>
        <p>Note the <code class="inline">:memory:</code> path — it creates a temporary database
        that lives only in RAM, which is handy for testing.</p>
      `
    },
    {
      title: "Create",
      points: 15,
      content: `
        <p>To add rows, use <code class="inline">INSERT</code> with parameterized values.</p>
        <pre>cursor.execute(
    'INSERT INTO tasks (title, done) VALUES (?, ?)',
    ('Buy milk', 0)
)
conn.commit()</pre>
      `,
      question: "Which SQL keyword creates a new row?",
      answer: "INSERT",
      hint: "Same keyword as in plain SQL."
    },
    {
      title: "Read",
      points: 15,
      content: `
        <p>To read rows back, run a <code class="inline">SELECT</code> and fetch the
        results.</p>
        <pre>cursor.execute('SELECT id, title, done FROM tasks')
for row in cursor.fetchall():
    print(row)</pre>
      `,
      question: "Which method fetches a single row from the last query?",
      answer: "fetchone",
      hint: "Singular, not plural."
    },
    {
      title: "Update",
      points: 20,
      content: `
        <p>To change a row, run an <code class="inline">UPDATE</code> and commit the
        change.</p>
        <pre>cursor.execute(
    'UPDATE tasks SET done = ? WHERE title = ?',
    (1, 'Buy milk')
)
conn.commit()</pre>
      `,
      question: "What must you call after an UPDATE for the change to be saved?",
      answer: "commit",
      hint: "A method on the connection object."
    },
    {
      title: "Delete",
      points: 15,
      content: `
        <p>To remove a row entirely, use <code class="inline">DELETE</code>.</p>
        <pre>cursor.execute('DELETE FROM tasks WHERE title = ?', ('Buy milk',))
conn.commit()</pre>
      `,
      question: "Which SQL statement removes a row from a table?",
      answer: "DELETE",
      hint: "It's the last letter of the CRUD acronym."
    }
  ]
},
{
  id: "orm-concepts",
  title: "ORM Concepts",
  icon: "🧩",
  difficulty: "Medium",
  tags: ["databases", "orm"],
  description: "Understand how object-relational mappers translate Python classes into database tables, rows, and queries without raw SQL.",
  tasks: [
    {
      title: "What is an ORM?",
      points: 0,
      content: `
        <p>An <b>ORM</b> (Object-Relational Mapper) lets you work with database rows as normal
        Python objects instead of writing raw SQL. Each class maps to a table, and each
        instance maps to a row.</p>
        <pre>from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String)

engine = create_engine('sqlite:///app.db')
Base.metadata.create_all(engine)</pre>
        <p>Once mapped, you can create a <code class="inline">User(name='Ada')</code> object
        and save it without writing a single <code class="inline">INSERT</code> statement.</p>
      `
    },
    {
      title: "Mapping classes to tables",
      points: 15,
      content: `
        <p>Each class attribute becomes a column, and its type (<code class="inline">Integer</code>,
        <code class="inline">String</code>, etc.) becomes the column's SQL type. The
        <code class="inline">__tablename__</code> attribute names the underlying table.</p>
        <pre>class Book(Base):
    __tablename__ = 'books'
    id = Column(Integer, primary_key=True)
    title = Column(String)</pre>
      `,
      question: "Which class attribute names the table a model maps to?",
      answer: "__tablename__",
      hint: "It starts and ends with double underscores."
    },
    {
      title: "Sessions",
      points: 20,
      content: `
        <p>A <b>session</b> tracks objects you add, change, or delete, and translates that
        work into SQL only when you commit. It's the ORM's equivalent of a database connection
        plus a transaction.</p>
        <pre>from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=engine)
session = Session()

session.add(User(name='Grace'))
session.commit()</pre>
      `,
      question: "Which object tracks pending changes before they're written to the database?",
      answer: "session",
      hint: "It's created from a sessionmaker."
    },
    {
      title: "Querying through the ORM",
      points: 15,
      content: `
        <p>Instead of writing <code class="inline">SELECT</code> statements, you query using
        Python methods that the ORM translates into SQL for you.</p>
        <pre>users = session.query(User).filter(User.name == 'Grace').all()</pre>
      `,
      question: "Which method starts a query against a mapped class?",
      answer: "query",
      hint: "It's called on the session."
    },
    {
      title: "Models, benefits, and tradeoffs",
      points: 20,
      content: `
        <p>ORMs save time and reduce SQL injection risk since values are handled for you, but
        they can hide the actual SQL being run and add overhead compared to raw queries.
        Knowing both SQL and your ORM makes you far more effective.</p>
        <pre># raw SQL
cursor.execute('SELECT * FROM users WHERE name = ?', ('Grace',))

# ORM equivalent
session.query(User).filter(User.name == 'Grace').all()</pre>
      `,
      question: "What term describes a class that represents a database table in an ORM?",
      answer: "model",
      hint: "SQLAlchemy calls these mapped classes this word."
    }
  ]
},
{
  id: "database-design-basics",
  title: "Database Design Basics",
  icon: "📐",
  difficulty: "Medium",
  tags: ["databases", "design"],
  description: "Design simple, normalized tables with primary keys, foreign keys, and relationships that keep your data consistent.",
  tasks: [
    {
      title: "Splitting data into tables",
      points: 0,
      content: `
        <p>Good database design starts with splitting data into tables that each represent
        one kind of thing, then linking them together instead of repeating data. A
        <b>primary key</b> uniquely identifies each row, and a <b>foreign key</b> points to a
        primary key in another table.</p>
        <pre>-- customers table
-- id | name
-- 1  | Ada

-- orders table
-- id | customer_id | item
-- 1  | 1           | Book</pre>
        <p>Here, <code class="inline">orders.customer_id</code> is a foreign key referencing
        <code class="inline">customers.id</code>, linking each order to its customer.</p>
      `
    },
    {
      title: "Primary keys",
      points: 15,
      content: `
        <p>A primary key must be unique for every row and never change. Most designs use an
        auto-incrementing integer id rather than a natural value like an email address.</p>
        <pre>CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    name TEXT
);</pre>
      `,
      question: "What is a column called that uniquely identifies each row in a table?",
      answer: "primary key",
      hint: "Two words, the first one meaning 'main'."
    },
    {
      title: "Foreign keys and relationships",
      points: 15,
      content: `
        <p>A foreign key stores another table's primary key value, creating a link between
        rows. This is how you model relationships like 'a customer has many orders'.</p>
        <pre>CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    item TEXT,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);</pre>
      `,
      question: "What is a column called that references a primary key in another table?",
      answer: "foreign key",
      hint: "Two words; the opposite of 'primary'."
    },
    {
      title: "Normalization",
      points: 20,
      content: `
        <p><b>Normalization</b> means organizing tables so each piece of data is stored only
        once, avoiding duplication and the bugs it causes when copies get out of sync.</p>
        <ul>
          <li>Bad: repeating a customer's name in every order row</li>
          <li>Good: storing the name once in customers, and linking via customer_id</li>
        </ul>
      `,
      question: "What is the term for organizing tables to avoid duplicate data?",
      answer: "normalization",
      hint: "It shares a root with the word normal."
    },
    {
      title: "One-to-many relationships",
      points: 15,
      content: `
        <p>A one-to-many relationship, like one customer having many orders, is modeled by
        putting the foreign key on the 'many' side — the orders table, not the customers
        table.</p>
        <pre>SELECT customers.name, orders.item
FROM customers
JOIN orders ON customers.id = orders.customer_id;</pre>
      `,
      question: "Which SQL keyword combines rows from two related tables?",
      answer: "JOIN",
      hint: "It's what links customers to their orders in a query."
    }
  ]
},
{
  id: "transactions-commits",
  title: "Transactions & Commits",
  icon: "🔁",
  difficulty: "Medium",
  tags: ["databases", "transactions"],
  description: "Understand how database transactions use commit and rollback to keep related changes safe, consistent, and all-or-nothing.",
  tasks: [
    {
      title: "What is a transaction?",
      points: 0,
      content: `
        <p>A <b>transaction</b> groups several database changes so they succeed or fail
        together. If anything goes wrong partway through, you can
        <code class="inline">rollback</code> to undo everything since the transaction started,
        instead of leaving the data half-changed.</p>
        <pre>import sqlite3

conn = sqlite3.connect('bank.db')
cursor = conn.cursor()
try:
    cursor.execute('UPDATE accounts SET balance = balance - 100 WHERE id = 1')
    cursor.execute('UPDATE accounts SET balance = balance + 100 WHERE id = 2')
    conn.commit()
except Exception:
    conn.rollback()</pre>
        <p>This pattern keeps a money transfer from ever leaving one account debited without
        the other being credited.</p>
      `
    },
    {
      title: "Commit",
      points: 15,
      content: `
        <p><code class="inline">commit()</code> makes every change since the last commit
        permanent. Until you call it, changes exist only in the current session and other
        connections won't see them.</p>
        <pre>cursor.execute('INSERT INTO logs (message) VALUES (?)', ('started',))
conn.commit()</pre>
      `,
      question: "Which method makes pending database changes permanent?",
      answer: "commit",
      hint: "Same word as saving a change in version control."
    },
    {
      title: "Rollback",
      points: 15,
      content: `
        <p><code class="inline">rollback()</code> undoes every change made since the last
        commit, restoring the database to how it was before the transaction began. Use it
        inside an <code class="inline">except</code> block to recover from errors safely.</p>
        <pre>try:
    cursor.execute('DELETE FROM accounts WHERE id = 1')
    raise ValueError('something went wrong')
    conn.commit()
except ValueError:
    conn.rollback()</pre>
      `,
      question: "Which method undoes uncommitted changes in a transaction?",
      answer: "rollback",
      hint: "The opposite of commit."
    },
    {
      title: "Atomicity",
      points: 20,
      content: `
        <p>A transaction is <b>atomic</b>: all of its statements happen, or none of them do.
        This matters most when several updates depend on each other, like transferring money
        between two accounts.</p>
        <pre># both updates commit together, or neither does
cursor.execute('UPDATE accounts SET balance = balance - 50 WHERE id = 1')
cursor.execute('UPDATE accounts SET balance = balance + 50 WHERE id = 2')
conn.commit()</pre>
      `,
      question: "What property guarantees a transaction's statements all succeed or all fail together?",
      answer: "atomicity",
      hint: "It shares a root with the word atom, meaning indivisible."
    },
    {
      title: "Transactions as context managers",
      points: 15,
      content: `
        <p>sqlite3 connections support use as a context manager: the block commits
        automatically on success or rolls back automatically if an exception is raised.</p>
        <pre>with conn:
    cursor.execute('UPDATE accounts SET balance = balance - 20 WHERE id = 1')
    cursor.execute('UPDATE accounts SET balance = balance + 20 WHERE id = 2')</pre>
      `,
      question: "Which Python keyword lets a connection auto-commit or auto-rollback a block?",
      answer: "with",
      hint: "It's used to enter a context manager."
    }
  ]
},
{
  id: "hashing-hashlib",
  title: "Hashing with hashlib",
  icon: "🔒",
  difficulty: "Medium",
  tags: ["security", "hashing"],
  description: "Generate cryptographic hashes of data and files using Python's hashlib module, and understand what hashes are used for.",
  tasks: [
    {
      title: "What is hashing?",
      points: 0,
      content: `
        <p>A <b>hash function</b> takes any input and produces a fixed-size string of
        characters called a <b>hash</b> or <b>digest</b>. The same input always produces the
        same hash, but even a tiny change in the input produces a completely different one.
        Python's built-in <code class="inline">hashlib</code> module provides several hash
        algorithms.</p>
        <pre>import hashlib

data = b'hello world'
digest = hashlib.sha256(data).hexdigest()
print(digest)</pre>
        <p>Hashes are one-way: you can't reverse a hash back into the original data.</p>
      `
    },
    {
      title: "Choosing an algorithm",
      points: 15,
      content: `
        <p><code class="inline">hashlib</code> supports several algorithms, including
        <code class="inline">md5</code>, <code class="inline">sha1</code>, and
        <code class="inline">sha256</code>. MD5 and SHA-1 are considered broken for security
        purposes; SHA-256 or better is the safe default today.</p>
        <pre>import hashlib

print(hashlib.sha256(b'data').hexdigest())
print(hashlib.sha512(b'data').hexdigest())</pre>
      `,
      question: "Which hashlib algorithm is a safe modern default over MD5 or SHA-1?",
      answer: "sha256",
      hint: "It produces a 256-bit digest."
    },
    {
      title: "Hashing files",
      points: 20,
      content: `
        <p>To hash a large file without loading it all into memory, read it in chunks and feed
        each chunk to the hash object with <code class="inline">update()</code>.</p>
        <pre>import hashlib

hasher = hashlib.sha256()
with open('report.pdf', 'rb') as f:
    for chunk in iter(lambda: f.read(4096), b''):
        hasher.update(chunk)

print(hasher.hexdigest())</pre>
      `,
      question: "Which method feeds additional data into an existing hash object?",
      answer: "update",
      hint: "It's called repeatedly as you read chunks."
    },
    {
      title: "Verifying integrity",
      points: 15,
      content: `
        <p>Hashes are often published alongside downloads so users can verify a file wasn't
        corrupted or tampered with — you hash the file yourself and compare it to the
        published value.</p>
        <pre>expected = 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e'
actual = hashlib.sha256(b'hello world').hexdigest()

print(actual == expected)</pre>
      `,
      question: "What do we call a published hash used to confirm a file was not altered?",
      answer: "checksum",
      hint: "Also called an integrity hash."
    },
    {
      title: "hexdigest vs digest",
      points: 15,
      content: `
        <p><code class="inline">digest()</code> returns the hash as raw bytes, while
        <code class="inline">hexdigest()</code> returns the same value as a readable
        hexadecimal string — the form you'll usually want to print, store, or compare.</p>
        <pre>h = hashlib.sha256(b'data')
print(type(h.digest()))
print(type(h.hexdigest()))</pre>
      `,
      question: "Which method returns a hash as a readable string instead of raw bytes?",
      answer: "hexdigest",
      hint: "It has 'hex' in its name."
    }
  ]
},
{
  id: "password-hashing",
  title: "Password Hashing Best Practices",
  icon: "🔑",
  difficulty: "Medium",
  tags: ["security", "passwords"],
  description: "Understand why storing a plain password hash is not enough, and how salting and slow algorithms protect stored passwords.",
  tasks: [
    {
      title: "Why plain hashing isn't enough",
      points: 0,
      content: `
        <p>Hashing a password with a fast algorithm like SHA-256 is not enough to protect it.
        Fast hashes let attackers try billions of guesses per second against leaked hashes, and
        identical passwords produce identical hashes, revealing who shares a password.</p>
        <pre># insecure: fast hash, no salt
import hashlib
bad_hash = hashlib.sha256(b'password123').hexdigest()</pre>
        <p>Proper password storage needs two things: a unique <b>salt</b> per password, and a
        deliberately <b>slow</b> hashing algorithm designed for passwords.</p>
      `
    },
    {
      title: "Salting",
      points: 15,
      content: `
        <p>A <b>salt</b> is random data added to a password before hashing, so two users with
        the same password get completely different hashes. The salt is stored alongside the
        hash — it doesn't need to be secret, just unique.</p>
        <pre>import hashlib, os

salt = os.urandom(16)
password = b'password123'
hashed = hashlib.sha256(salt + password).hexdigest()</pre>
      `,
      question: "What is random data called that is mixed into a password before hashing?",
      answer: "salt",
      hint: "It's a kitchen seasoning word."
    },
    {
      title: "Slow hashing algorithms",
      points: 20,
      content: `
        <p>Password hashing needs to be intentionally slow, so guessing many passwords is
        expensive. Algorithms like <code class="inline">bcrypt</code>,
        <code class="inline">scrypt</code>, and <code class="inline">PBKDF2</code> add
        configurable work, unlike fast general-purpose hashes.</p>
        <pre>import hashlib

# PBKDF2 with many iterations, built into hashlib
key = hashlib.pbkdf2_hmac('sha256', b'password123', b'somesalt', 200000)</pre>
      `,
      question: "Which hashlib function implements a slow, iteration-based key derivation for passwords?",
      answer: "pbkdf2_hmac",
      hint: "It takes a password, salt, and iteration count."
    },
    {
      title: "Never store plain passwords",
      points: 15,
      content: `
        <p>Passwords should never be stored in plain text, even temporarily in logs. If your
        database is ever leaked, a properly salted and slow-hashed password is far harder to
        recover than a reversible or plaintext one.</p>
        <pre># never do this
users = {'ada': 'password123'}  # plaintext, do not do this</pre>
      `,
      question: "What should never be stored directly in a database for a password?",
      answer: "plaintext",
      hint: "It means unencrypted, unhashed text."
    },
    {
      title: "Verifying a login",
      points: 15,
      content: `
        <p>To check a login attempt, hash the submitted password with the same salt and
        algorithm used originally, then compare the result to the stored hash — never decrypt
        the stored hash.</p>
        <pre>attempt = b'password123'
check = hashlib.pbkdf2_hmac('sha256', attempt, b'somesalt', 200000)
print(check == key)</pre>
      `,
      question: "When checking a login, do you decrypt the stored hash or re-hash the attempt?",
      answer: "re-hash the attempt",
      hint: "Hashing is one-way, so decrypting isn't possible."
    }
  ]
},
{
  id: "secrets-module",
  title: "The secrets Module",
  icon: "🎲",
  difficulty: "Easy",
  tags: ["security", "random"],
  description: "Generate cryptographically strong random tokens, numbers, and comparisons safely using Python's built-in secrets module.",
  tasks: [
    {
      title: "Why not random?",
      points: 0,
      content: `
        <p>Python's <code class="inline">random</code> module is fast but predictable — it's
        designed for simulations and games, not security. The
        <code class="inline">secrets</code> module generates values suitable for tokens,
        passwords, and other security-sensitive uses.</p>
        <pre>import secrets

token = secrets.token_hex(16)
print(token)</pre>
        <p>Use <code class="inline">secrets</code> anywhere you need randomness that an
        attacker must not be able to predict.</p>
      `
    },
    {
      title: "Generating tokens",
      points: 10,
      content: `
        <p><code class="inline">secrets.token_hex(n)</code> returns a random string of
        <code class="inline">2 * n</code> hex characters, useful for things like password
        reset links or API tokens.</p>
        <pre>import secrets

reset_link_token = secrets.token_hex(32)
print(reset_link_token)</pre>
      `,
      question: "Which secrets function returns a random hexadecimal string?",
      answer: "token_hex",
      hint: "It's named after the base it returns."
    },
    {
      title: "Random numbers safely",
      points: 10,
      content: `
        <p><code class="inline">secrets.randbelow(n)</code> returns a random integer between 0
        and <code class="inline">n - 1</code>, safe to use for things like generating a
        one-time PIN code.</p>
        <pre>import secrets

pin = secrets.randbelow(1000000)
print(f'{pin:06d}')</pre>
      `,
      question: "Which secrets function returns a random integer below a given value?",
      answer: "randbelow",
      hint: "It takes an upper bound as its argument."
    },
    {
      title: "Comparing secrets safely",
      points: 15,
      content: `
        <p><code class="inline">secrets.compare_digest()</code> compares two strings in
        constant time, preventing timing attacks where an attacker measures how fast a
        comparison fails to guess a secret character by character.</p>
        <pre>import secrets

is_valid = secrets.compare_digest(submitted_token, real_token)</pre>
      `,
      question: "Which secrets function safely compares two secret values without timing leaks?",
      answer: "compare_digest",
      hint: "It's named after the digest values it's meant to compare."
    }
  ]
},
{
  id: "input-validation",
  title: "Input Validation & Sanitization",
  icon: "🛡️",
  difficulty: "Medium",
  tags: ["security", "validation"],
  description: "Defensively validate and sanitize untrusted input before your program trusts it, using type checks, whitelists, and patterns.",
  tasks: [
    {
      title: "Never trust input",
      points: 0,
      content: `
        <p>Any data coming from outside your program — user input, a file, a network request
        — should be treated as untrusted until you've checked it. <b>Validation</b> confirms
        data is in the shape you expect; <b>sanitization</b> cleans or rejects data that
        isn't.</p>
        <pre>def get_age(raw):
    if not raw.isdigit():
        raise ValueError('Age must be a number')
    age = int(raw)
    if not (0 &lt;= age &lt;= 120):
        raise ValueError('Age out of range')
    return age

print(get_age('30'))</pre>
        <p>Never assume input matches the format your code expects — always check it first.</p>
      `
    },
    {
      title: "Whitelisting vs blacklisting",
      points: 15,
      content: `
        <p>A <b>whitelist</b> approach only allows known-good values and rejects everything
        else. A <b>blacklist</b> tries to block known-bad values, but it's easy to miss one.
        Whitelisting is almost always safer.</p>
        <pre>allowed_roles = {'admin', 'editor', 'viewer'}

def set_role(role):
    if role not in allowed_roles:
        raise ValueError('Invalid role')
    return role</pre>
      `,
      question: "Which approach only allows known-good values: whitelisting or blacklisting?",
      answer: "whitelisting",
      hint: "Think of it as an allow list."
    },
    {
      title: "Type and range checks",
      points: 15,
      content: `
        <p>Beyond checking that a value is the right type, check that it falls within a
        sensible range. A negative quantity or an absurdly large number is often a sign of bad
        or malicious input.</p>
        <pre>def validate_quantity(qty):
    if not isinstance(qty, int):
        raise TypeError('Quantity must be an integer')
    if qty &lt; 1 or qty &gt; 1000:
        raise ValueError('Quantity out of allowed range')
    return qty</pre>
      `,
      question: "Besides checking a value's type, what else should you check about its value?",
      answer: "range",
      hint: "It's about upper and lower bounds."
    },
    {
      title: "Escaping output",
      points: 15,
      content: `
        <p>Validation isn't only about rejecting bad input — when you later display or embed
        user-provided text, escape special characters so they can't be misread as code or
        markup.</p>
        <pre>import html

comment = 'user said: cool site!'
safe_comment = html.escape(comment)
print(safe_comment)</pre>
      `,
      question: "Which module provides an escape function for safely displaying untrusted text as HTML?",
      answer: "html",
      hint: "It's a Python standard library module named after the format it escapes for."
    },
    {
      title: "Checking a format with regular expressions",
      points: 20,
      content: `
        <p>The <code class="inline">re</code> module can confirm input matches an expected
        pattern, like a five-digit zip code, before you use it.</p>
        <pre>import re

def looks_like_zip_code(text):
    return re.fullmatch(r'[0-9]{5}', text) is not None

print(looks_like_zip_code('90210'))</pre>
      `,
      question: "Which module lets you check that input matches a pattern using regular expressions?",
      answer: "re",
      hint: "It's a two-letter standard library module name."
    }
  ]
},
{
  id: "secure-file-handling",
  title: "Secure File Handling",
  icon: "📁",
  difficulty: "Medium",
  tags: ["security", "files"],
  description: "Avoid common pitfalls like path traversal when reading paths and files that come from untrusted user input.",
  tasks: [
    {
      title: "The path traversal risk",
      points: 0,
      content: `
        <p>When your program opens a file whose name comes from user input, an attacker might
        supply a path like <code class="inline">../../etc/passwd</code> to escape the folder
        you intended and read files they shouldn't. This is called <b>path traversal</b>.</p>
        <pre>import os

def safe_open(base_dir, filename):
    full_path = os.path.normpath(os.path.join(base_dir, filename))
    if not full_path.startswith(os.path.abspath(base_dir)):
        raise ValueError('Invalid file path')
    return open(full_path, 'r')</pre>
        <p>Always resolve and check a path before opening it, rather than trusting the input
        directly.</p>
      `
    },
    {
      title: "Validating file extensions",
      points: 15,
      content: `
        <p>If your program only expects certain file types, check the extension before
        processing a file, rejecting anything unexpected.</p>
        <pre>ALLOWED_EXTENSIONS = ('.txt', '.csv')

def is_allowed(filename):
    return filename.lower().endswith(ALLOWED_EXTENSIONS)

print(is_allowed('report.csv'))</pre>
      `,
      question: "What is the term for an attack that uses ../ to escape an intended folder?",
      answer: "path traversal",
      hint: "Two words describing moving across the file system."
    },
    {
      title: "Using pathlib safely",
      points: 20,
      content: `
        <p><code class="inline">pathlib.Path.resolve()</code> turns a path into its absolute
        form, following any parent-directory segments, so you can compare it against the
        directory you meant to allow.</p>
        <pre>from pathlib import Path

base = Path('/srv/uploads').resolve()
requested = (base / 'photo.png').resolve()

print(base in requested.parents or requested == base)</pre>
      `,
      question: "Which pathlib method converts a path to its absolute, fully resolved form?",
      answer: "resolve",
      hint: "It's named after resolving relative parts of a path."
    },
    {
      title: "Closing files properly",
      points: 15,
      content: `
        <p>Always use a <code class="inline">with</code> block when opening files. It
        guarantees the file is closed even if an error happens while you're reading or writing
        it.</p>
        <pre>with open('data.txt', 'r') as f:
    contents = f.read()
# file is automatically closed here</pre>
      `,
      question: "Which Python keyword ensures a file is automatically closed after use?",
      answer: "with",
      hint: "It's used to create a context manager block."
    },
    {
      title: "Avoiding arbitrary file writes",
      points: 20,
      content: `
        <p>If a program lets users choose where output gets written, validate that
        destination just as strictly as an input path — otherwise an attacker could overwrite
        files like configuration or startup scripts.</p>
        <pre>def safe_write(base_dir, filename, content):
    if '..' in filename or filename.startswith('/'):
        raise ValueError('Invalid filename')
    path = base_dir + '/' + filename
    with open(path, 'w') as f:
        f.write(content)</pre>
      `,
      question: "What risk arises if an attacker controls the output file path?",
      answer: "arbitrary file overwrite",
      hint: "Think about what an unchecked write path lets an attacker target."
    }
  ]
},
{
  id: "env-secrets-management",
  title: "Managing Secrets with Environment Variables",
  icon: "🗝️",
  difficulty: "Medium",
  tags: ["security", "secrets"],
  description: "Keep API keys and passwords out of your source code by managing them safely through environment variables.",
  tasks: [
    {
      title: "Why not hardcode secrets",
      points: 0,
      content: `
        <p>Hardcoding an API key or password directly in your source code means it ends up in
        version control, visible to anyone with repository access — including if the
        repository becomes public by accident. <b>Environment variables</b> keep secrets
        outside your code, set by the operating system or deployment environment instead.</p>
        <pre>import os

api_key = os.environ.get('API_KEY')
print('Key loaded:', api_key is not None)</pre>
        <p>The value itself lives outside the file, so it never gets committed alongside your
        code.</p>
      `
    },
    {
      title: "Reading environment variables",
      points: 15,
      content: `
        <p><code class="inline">os.environ.get()</code> reads a variable and returns
        <code class="inline">None</code> (or a default you provide) if it isn't set, avoiding
        a crash if a secret is missing.</p>
        <pre>import os

db_password = os.environ.get('DB_PASSWORD', 'not-set')
print(db_password)</pre>
      `,
      question: "Which os.environ method safely reads a variable with a fallback default?",
      answer: "get",
      hint: "Same method dictionaries use to avoid a KeyError."
    },
    {
      title: ".env files and .gitignore",
      points: 15,
      content: `
        <p>Many projects store local secrets in a file named <code class="inline">.env</code>,
        loaded into environment variables at startup. That file must be listed in
        <code class="inline">.gitignore</code> so it's never committed to version control.</p>
        <pre># .env
API_KEY=abc123
DB_PASSWORD=hunter2</pre>
        <pre># .gitignore
.env</pre>
      `,
      question: "Which file should list .env so it is never committed to version control?",
      answer: ".gitignore",
      hint: "Git reads this file to know what to exclude from commits."
    },
    {
      title: "Never logging secrets",
      points: 15,
      content: `
        <p>Even after moving secrets out of your source code, avoid printing or logging them,
        since logs are often stored, shared, or shipped to third-party monitoring tools.</p>
        <pre>import os

api_key = os.environ.get('API_KEY')
print('Loaded API key: [redacted]')  # never print api_key itself</pre>
      `,
      question: "What should you print instead of a secret value when logging that it was loaded?",
      answer: "redacted",
      hint: "A word meaning hidden or blacked out."
    },
    {
      title: "Separate secrets per environment",
      points: 20,
      content: `
        <p>Use different secrets for development, testing, and production, so a leaked
        development key never grants access to production systems. Environment variables make
        this easy — each environment simply sets its own values.</p>
        <pre>import os

environment = os.environ.get('APP_ENV', 'development')
api_key = os.environ.get(f'API_KEY_{environment.upper()}')</pre>
      `,
      question: "What principle says dev and production should never share the same secrets?",
      answer: "isolation",
      hint: "A single word meaning keeping environments separate."
    }
  ]
},
{
  id: "basic-python-ctf",
  title: "Basic Python CTF-Style Challenge",
  icon: "🚩",
  difficulty: "Hard",
    premium: true,
  tags: ["security", "ctf", "encoding"],
  description: "Decode obfuscated strings using Base64, ROT13, and hex encoding in a fun, beginner-friendly CTF-style puzzle room.",
  tasks: [
    {
      title: "Encodings, not encryption",
      points: 0,
      content: `
        <p>CTF (Capture The Flag) challenges often hide a message behind one or more layers of
        encoding. This isn't encryption — encodings like <b>Base64</b> and <b>ROT13</b> are
        fully reversible by anyone who knows the scheme, so the 'security' is really just
        obscurity used for puzzles, not real protection.</p>
        <pre>import base64

encoded = base64.b64encode(b'hello ctf').decode()
print(encoded)

decoded = base64.b64decode(encoded).decode()
print(decoded)</pre>
        <p>In this room, you'll practice decoding messages using Python's standard library.</p>
      `
    },
    {
      title: "Decoding Base64",
      points: 20,
      content: `
        <p>Base64 turns bytes into a text-safe alphabet of letters, digits,
        <code class="inline">+</code>, and <code class="inline">/</code>. To reverse it,
        decode the string back into bytes and then into text.</p>
        <pre>import base64

secret = 'ZmxhZw=='
message = base64.b64decode(secret).decode()
print(message)</pre>
      `,
      question: "What word does this Base64 string decode to?",
      answer: "flag",
      hint: "Run base64.b64decode on the secret string."
    },
    {
      title: "ROT13",
      points: 20,
      content: `
        <p>ROT13 shifts each letter 13 places through the alphabet, wrapping back to A after Z.
        Applying ROT13 twice returns the original text, which makes it a popular (very weak)
        obfuscation trick in puzzles.</p>
        <pre>import codecs

secret = 'clguba'
message = codecs.encode(secret, 'rot13')
print(message)</pre>
      `,
      question: "What word does 'clguba' decode to with ROT13?",
      answer: "python",
      hint: "ROT13 is its own inverse - applying it again reverses it."
    },
    {
      title: "Stacking encodings",
      points: 25,
      content: `
        <p>Real puzzles often stack several encodings. To crack one, work from the outside in:
        identify each layer's format, undo it, and repeat until you reach plain text.</p>
        <pre>import base64, codecs

secret = 'cGJxdmF0'
rot13_text = base64.b64decode(secret).decode()
plaintext = codecs.encode(rot13_text, 'rot13')
print(plaintext)</pre>
      `,
      question: "What is the final decoded word after undoing both layers?",
      answer: "coding",
      hint: "First undo the Base64 layer, then undo the ROT13 layer."
    },
    {
      title: "Hex encoding",
      points: 20,
      content: `
        <p>Bytes are sometimes shown as hexadecimal instead of Base64. Python's bytes objects
        can convert to and from hex directly with <code class="inline">bytes.fromhex()</code>
        and <code class="inline">.hex()</code>.</p>
        <pre>secret = '666c6167'
message = bytes.fromhex(secret).decode()
print(message)</pre>
      `,
      question: "What word does the hex string 666c6167 decode to?",
      answer: "flag",
      hint: "Convert each pair of hex digits back to a byte, then to text."
    }
  ]
},
{
  id: "intro-to-tkinter",
  title: "Intro to Tkinter",
  icon: "🖥️",
  difficulty: "Medium",
  tags: ["gui", "tkinter"],
  description: "Build your first desktop window with Tkinter, adding labels and buttons using Python's built-in GUI toolkit.",
  tasks: [
    {
      title: "Your first window",
      points: 0,
      content: `
        <p>Tkinter is Python's built-in library for building simple desktop GUI applications.
        It comes included with Python, so no extra installation is needed. A GUI app starts
        with a main window called the <b>root</b>.</p>
        <pre>import tkinter as tk

root = tk.Tk()
root.title('My First App')
root.geometry('300x150')

root.mainloop()</pre>
        <p><code class="inline">mainloop()</code> starts the event loop that keeps the window
        open and responsive until the user closes it.</p>
      `
    },
    {
      title: "Adding a label",
      points: 15,
      content: `
        <p>A <code class="inline">Label</code> widget displays text or an image. You create it,
        then call <code class="inline">pack()</code> (or another layout method) to actually
        place it in the window.</p>
        <pre>import tkinter as tk

root = tk.Tk()
label = tk.Label(root, text='Hello, Tkinter!')
label.pack()

root.mainloop()</pre>
      `,
      question: "Which method places a widget into the window using automatic layout?",
      answer: "pack",
      hint: "It's one of Tkinter's layout managers."
    },
    {
      title: "Buttons and commands",
      points: 15,
      content: `
        <p>A <code class="inline">Button</code> widget runs a function when clicked, passed
        through its <code class="inline">command</code> parameter. Note that you pass the
        function itself, not the result of calling it.</p>
        <pre>import tkinter as tk

def say_hello():
    print('Hello!')

root = tk.Tk()
button = tk.Button(root, text='Click me', command=say_hello)
button.pack()

root.mainloop()</pre>
      `,
      question: "Which Button parameter connects it to a function to run when clicked?",
      answer: "command",
      hint: "It's passed as a keyword argument when creating the Button."
    },
    {
      title: "The event loop",
      points: 15,
      content: `
        <p><code class="inline">mainloop()</code> continuously waits for events like clicks
        and key presses, and dispatches them to the right widget. Nothing after
        <code class="inline">mainloop()</code> in your script runs until the window is
        closed.</p>
        <pre>root = tk.Tk()
root.mainloop()
print('This prints only after the window closes')</pre>
      `,
      question: "Which method starts Tkinter's event loop?",
      answer: "mainloop",
      hint: "It's called once, at the very end of setup."
    },
    {
      title: "Layout with grid",
      points: 20,
      content: `
        <p><code class="inline">grid()</code> is an alternative layout manager that places
        widgets in rows and columns, which is often easier than <code class="inline">pack()</code>
        for forms with multiple fields.</p>
        <pre>import tkinter as tk

root = tk.Tk()
tk.Label(root, text='Name:').grid(row=0, column=0)
tk.Entry(root).grid(row=0, column=1)

root.mainloop()</pre>
      `,
      question: "Which layout manager places widgets using row and column numbers?",
      answer: "grid",
      hint: "Think of a spreadsheet-like layout."
    }
  ]
},
{
  id: "building-gui-app",
  title: "Building a Simple GUI App",
  icon: "🧰",
  difficulty: "Medium",
  tags: ["gui", "tkinter"],
  description: "Wire up Tkinter buttons and text inputs to real Python logic, building a small working desktop application.",
  tasks: [
    {
      title: "Reading user input",
      points: 0,
      content: `
        <p>A GUI becomes useful once widgets are wired to real logic — reading what a user
        typed, and reacting to it. The <code class="inline">Entry</code> widget collects a
        single line of text input, read with its <code class="inline">get()</code> method.</p>
        <pre>import tkinter as tk

root = tk.Tk()
entry = tk.Entry(root)
entry.pack()

def show_value():
    print(entry.get())

tk.Button(root, text='Show', command=show_value).pack()
root.mainloop()</pre>
        <p>Reading input like this lets you connect what the user types to whatever your
        program needs to do with it.</p>
      `
    },
    {
      title: "Updating a label from a button",
      points: 15,
      content: `
        <p>To make a widget change based on user action, update its text using
        <code class="inline">config()</code> inside a callback function tied to a button.</p>
        <pre>import tkinter as tk

root = tk.Tk()
label = tk.Label(root, text='Waiting...')
label.pack()

def update():
    label.config(text='Clicked!')

tk.Button(root, text='Go', command=update).pack()
root.mainloop()</pre>
      `,
      question: "Which method updates a widget's options, like its text, after creation?",
      answer: "config",
      hint: "It's short for 'configure'."
    },
    {
      title: "A simple calculator",
      points: 15,
      content: `
        <p>Combine two <code class="inline">Entry</code> widgets and a button to build simple
        logic, like adding two numbers the user types in.</p>
        <pre>import tkinter as tk

root = tk.Tk()
a = tk.Entry(root)
b = tk.Entry(root)
a.pack()
b.pack()

result = tk.Label(root, text='')
result.pack()

def add():
    total = int(a.get()) + int(b.get())
    result.config(text=str(total))

tk.Button(root, text='Add', command=add).pack()
root.mainloop()</pre>
      `,
      question: "Which Entry method reads the text currently typed into it?",
      answer: "get",
      hint: "The same name is used to read the Entry's value."
    },
    {
      title: "Handling bad input",
      points: 20,
      content: `
        <p>If a user types something that isn't a number, <code class="inline">int()</code>
        raises a <code class="inline">ValueError</code>. Wrap the conversion in
        <code class="inline">try</code>/<code class="inline">except</code> so the app shows a
        message instead of crashing.</p>
        <pre>def add():
    try:
        total = int(a.get()) + int(b.get())
        result.config(text=str(total))
    except ValueError:
        result.config(text='Enter valid numbers')</pre>
      `,
      question: "Which exception does int() raise when given text that is not a number?",
      answer: "ValueError",
      hint: "It's the same exception raised by int('abc')."
    },
    {
      title: "Clearing widgets",
      points: 15,
      content: `
        <p><code class="inline">delete(0, tk.END)</code> clears an Entry's contents, which is
        useful after a form has been submitted and you want it ready for the next input.</p>
        <pre>def clear_fields():
    a.delete(0, tk.END)
    b.delete(0, tk.END)</pre>
      `,
      question: "Which Entry method removes its current text?",
      answer: "delete",
      hint: "It takes a start and end position, like a slice."
    }
  ]
},
{
  id: "automating-tasks",
  title: "Automating Tasks with Python",
  icon: "🤖",
  difficulty: "Medium",
  tags: ["automation", "scripting"],
  description: "Write Python scripts that automate repetitive everyday tasks, from renaming files to organizing folders automatically.",
  tasks: [
    {
      title: "Why automate with Python?",
      points: 0,
      content: `
        <p>Python is well suited to automating repetitive computer tasks: renaming batches of
        files, organizing folders, or running the same operation on many items without manual
        clicking.</p>
        <pre>import os

for filename in os.listdir('photos'):
    if filename.endswith('.jpeg'):
        new_name = filename.replace('.jpeg', '.jpg')
        os.rename('photos/' + filename, 'photos/' + new_name)</pre>
        <p>A script like this can process hundreds of files in a fraction of a second.</p>
      `
    },
    {
      title: "Listing directory contents",
      points: 15,
      content: `
        <p><code class="inline">os.listdir()</code> returns the names of everything in a
        folder, which you can then filter, rename, or process one by one.</p>
        <pre>import os

files = os.listdir('.')
for name in files:
    print(name)</pre>
      `,
      question: "Which os function lists the contents of a directory?",
      answer: "listdir",
      hint: "It combines 'list' and 'directory'."
    },
    {
      title: "Moving and copying files",
      points: 15,
      content: `
        <p>The <code class="inline">shutil</code> module handles higher-level file operations
        like copying and moving that <code class="inline">os</code> doesn't provide
        directly.</p>
        <pre>import shutil

shutil.copy('report.txt', 'backup/report.txt')
shutil.move('draft.txt', 'archive/draft.txt')</pre>
      `,
      question: "Which module provides copy and move functions for files?",
      answer: "shutil",
      hint: "Think 'shell utilities'."
    },
    {
      title: "Finding files with glob patterns",
      points: 15,
      content: `
        <p><code class="inline">glob</code> finds files matching a wildcard pattern, which is
        handy for selecting only files of a certain type across a folder.</p>
        <pre>import glob

for path in glob.glob('data/*.csv'):
    print(path)</pre>
      `,
      question: "Which module lets you find files using wildcard patterns like *.csv?",
      answer: "glob",
      hint: "Named after the classic wildcard matching term."
    },
    {
      title: "Testing safely with a dry run",
      points: 20,
      content: `
        <p>Before running an automation on real files, test it on a copy of the data, and
        print what it would do before actually doing it — a habit called a <b>dry run</b>.</p>
        <pre>import os

for filename in os.listdir('photos'):
    if filename.endswith('.jpeg'):
        print('Would rename:', filename)
        # os.rename(...) commented out until verified</pre>
      `,
      question: "What is the term for testing an automation by only printing planned actions first?",
      answer: "dry run",
      hint: "Two words meaning a rehearsal without real effects."
    }
  ]
},
{
  id: "working-with-excel",
  title: "Working with Excel Files (openpyxl)",
  icon: "📊",
  difficulty: "Medium",
  tags: ["automation", "excel"],
  description: "Read and write real Excel spreadsheet files from Python using the openpyxl library, without opening Excel at all.",
  tasks: [
    {
      title: "Creating a workbook",
      points: 0,
      content: `
        <p><code class="inline">openpyxl</code> lets you read and write real Excel
        <code class="inline">.xlsx</code> files from Python — useful for generating reports
        or processing spreadsheet data automatically.</p>
        <pre>from openpyxl import Workbook

wb = Workbook()
sheet = wb.active
sheet['A1'] = 'Name'
sheet['B1'] = 'Score'
sheet['A2'] = 'Ada'
sheet['B2'] = 95

wb.save('scores.xlsx')</pre>
        <p>Cells are addressed the same way you'd see them in Excel, like
        <code class="inline">A1</code> or <code class="inline">B2</code>.</p>
      `
    },
    {
      title: "Reading an existing workbook",
      points: 15,
      content: `
        <p>Use <code class="inline">load_workbook()</code> to open an existing file, then
        access its active sheet the same way as when creating one.</p>
        <pre>from openpyxl import load_workbook

wb = load_workbook('scores.xlsx')
sheet = wb.active
print(sheet['A2'].value)</pre>
      `,
      question: "Which openpyxl function opens an existing .xlsx file?",
      answer: "load_workbook",
      hint: "Its name describes exactly what it does."
    },
    {
      title: "Iterating over rows",
      points: 15,
      content: `
        <p><code class="inline">sheet.iter_rows()</code> lets you loop through many rows at
        once, optionally returning just the values instead of cell objects.</p>
        <pre>for row in sheet.iter_rows(min_row=2, values_only=True):
    name, score = row
    print(name, score)</pre>
      `,
      question: "Which sheet method loops through multiple rows at once?",
      answer: "iter_rows",
      hint: "It combines 'iterate' and 'rows'."
    },
    {
      title: "Creating new sheets",
      points: 15,
      content: `
        <p>A workbook can hold multiple sheets. <code class="inline">create_sheet()</code>
        adds a new one, which you can then fill in the same way as the default sheet.</p>
        <pre>summary = wb.create_sheet('Summary')
summary['A1'] = 'Total students'
summary['B1'] = 25</pre>
      `,
      question: "Which workbook method adds a new sheet?",
      answer: "create_sheet",
      hint: "It's named exactly for what it does."
    },
    {
      title: "Saving changes",
      points: 15,
      content: `
        <p>Nothing is written to disk until you call <code class="inline">save()</code> —
        always call it after making the changes you want to keep.</p>
        <pre>wb.save('scores.xlsx')</pre>
      `,
      question: "Which method writes workbook changes to disk?",
      answer: "save",
      hint: "The same word used to save any document."
    }
  ]
},
{
  id: "sending-emails",
  title: "Sending Emails with smtplib",
  icon: "📧",
  difficulty: "Medium",
  tags: ["automation", "email"],
  description: "Send emails programmatically from a Python script using smtplib, including authentication and a secure connection.",
  tasks: [
    {
      title: "Sending your first email",
      points: 0,
      content: `
        <p>Python's built-in <code class="inline">smtplib</code> module can send email through
        an SMTP server, which is how automated notifications, reports, and alerts get
        delivered from a script.</p>
        <pre>import smtplib
from email.message import EmailMessage

msg = EmailMessage()
msg['Subject'] = 'Report ready'
msg['From'] = 'bot@example.com'
msg['To'] = 'team@example.com'
msg.set_content('The daily report has finished generating.')

with smtplib.SMTP('smtp.example.com', 587) as server:
    server.starttls()
    server.login('bot@example.com', 'app-password')
    server.send_message(msg)</pre>
        <p>Never hardcode real passwords like this in shared code — load them from environment
        variables instead.</p>
      `
    },
    {
      title: "Building an email message",
      points: 15,
      content: `
        <p><code class="inline">EmailMessage</code> is the modern way to construct an email in
        Python, with headers set like dictionary keys and a body set with
        <code class="inline">set_content()</code>.</p>
        <pre>from email.message import EmailMessage

msg = EmailMessage()
msg['Subject'] = 'Hello'
msg.set_content('This is the body of the email.')</pre>
      `,
      question: "Which method sets the plain text body of an EmailMessage?",
      answer: "set_content",
      hint: "It's called on the message object before sending."
    },
    {
      title: "Securing the connection",
      points: 15,
      content: `
        <p><code class="inline">starttls()</code> upgrades a plain connection to an encrypted
        one before sending any credentials or message content, protecting them from being
        read in transit.</p>
        <pre>with smtplib.SMTP('smtp.example.com', 587) as server:
    server.starttls()
    server.login('bot@example.com', 'app-password')</pre>
      `,
      question: "Which SMTP method upgrades the connection to an encrypted one?",
      answer: "starttls",
      hint: "It stands for 'start Transport Layer Security'."
    },
    {
      title: "Authenticating",
      points: 15,
      content: `
        <p><code class="inline">server.login()</code> authenticates with the SMTP server using
        an account's credentials, which should always come from environment variables or a
        secrets manager, never a literal string in your script.</p>
        <pre>import os

password = os.environ.get('EMAIL_PASSWORD')
server.login('bot@example.com', password)</pre>
      `,
      question: "Which SMTP method authenticates with a username and password?",
      answer: "login",
      hint: "Same word used for logging into most services."
    },
    {
      title: "Sending the message",
      points: 15,
      content: `
        <p><code class="inline">send_message()</code> takes a fully built
        <code class="inline">EmailMessage</code> and delivers it through the connected
        server.</p>
        <pre>server.send_message(msg)</pre>
      `,
      question: "Which method actually sends a built EmailMessage through the server?",
      answer: "send_message",
      hint: "It takes the message object as its argument."
    }
  ]
},
{
  id: "task-scheduling",
  title: "Task Scheduling Concepts",
  icon: "⏰",
  difficulty: "Easy",
  tags: ["automation", "scheduling"],
  description: "Understand how to schedule Python scripts to run automatically, comparing cron-based and in-script scheduling approaches.",
  tasks: [
    {
      title: "Why schedule tasks?",
      points: 0,
      content: `
        <p>Many automations need to run repeatedly without anyone starting them by hand — a
        daily backup, a weekly report, an hourly check. <b>Task scheduling</b> means telling
        the operating system (or a library) to run your script automatically at set times.</p>
        <pre># a simple script meant to run every morning
import datetime

print('Backup ran at', datetime.datetime.now())</pre>
        <p>How that script gets triggered depends on the platform: Linux and macOS use
        <code class="inline">cron</code>, Windows uses <b>Task Scheduler</b>, and Python has
        libraries like <code class="inline">schedule</code> for scheduling within a running
        program.</p>
      `
    },
    {
      title: "Cron syntax basics",
      points: 10,
      content: `
        <p>A cron schedule uses five fields — minute, hour, day of month, month, and day of
        week — to describe when a job runs. A <code class="inline">*</code> means 'every
        value' for that field.</p>
        <pre># run every day at 2:30 AM
30 2 * * *</pre>
      `,
      question: "How many time fields does a standard cron schedule use?",
      answer: "5",
      hint: "Minute, hour, day of month, month, and day of week."
    },
    {
      title: "The schedule library",
      points: 15,
      content: `
        <p>The third-party <code class="inline">schedule</code> library lets you define
        recurring jobs in plain Python, without touching the operating system's own
        scheduler.</p>
        <pre>import schedule
import time

def job():
    print('Running scheduled task')

schedule.every(1).hours.do(job)

while True:
    schedule.run_pending()
    time.sleep(60)</pre>
      `,
      question: "Which function inside the loop actually checks and runs due jobs?",
      answer: "run_pending",
      hint: "It's called repeatedly inside a while loop."
    },
    {
      title: "Cron vs in-script scheduling",
      points: 15,
      content: `
        <p>Cron (or Task Scheduler) keeps running even if your script isn't, and is more
        reliable for jobs that must run at exact times. In-script scheduling like the
        <code class="inline">schedule</code> library is simpler to set up but only runs while
        your program stays alive.</p>
        <ul>
          <li>Cron: reliable, survives reboots, managed by the OS</li>
          <li>schedule library: simple, but requires your script to keep running</li>
        </ul>
      `,
      question: "Which approach keeps working even when your Python script is not running?",
      answer: "cron",
      hint: "It's managed by the operating system, not your script."
    }
  ]
},

  /* ---- batch-12.js ---- */
  {
  id: "challenge-fizzbuzz",
  title: "Challenge: FizzBuzz",
  icon: "🔢",
  difficulty: "Easy",
  tags: ["challenge", "practice", "loops"],
  description: "Solve the classic FizzBuzz interview problem by printing numbers 1 to 100 while swapping multiples of 3 and 5 for words.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p>FizzBuzz is one of the most common warm-up interview questions, and it is a great test of basic control flow.</p>
        <p><b>The challenge:</b> print every number from 1 to 100, one per line. But:</p>
        <ul>
          <li>If the number is divisible by 3, print <code class="inline">Fizz</code> instead of the number.</li>
          <li>If the number is divisible by 5, print <code class="inline">Buzz</code> instead of the number.</li>
          <li>If the number is divisible by both 3 and 5, print <code class="inline">FizzBuzz</code> instead of the number.</li>
          <li>Otherwise, print the number itself.</li>
        </ul>
        <p>For example, the first sixteen lines of correct output look like this:</p>
        <pre>1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16</pre>
      `
    },
    {
      title: "The Approach",
      points: 10,
      content: `
        <p>The trick is to check the more specific condition first. If you check 'divisible by 3' before
        'divisible by both 3 and 5', you will print <code class="inline">Fizz</code> for 15 and never reach
        the FizzBuzz case.</p>
        <p>So the order of checks matters: test 'divisible by 15' (both 3 and 5) first, then 3, then 5, then
        fall back to the number.</p>
        <pre>for num in range(1, 101):
    if num % 15 == 0:
        print("FizzBuzz")
    elif num % 3 == 0:
        # ...
    elif num % 5 == 0:
        # ...
    else:
        # ...</pre>
        <p>Fill in the missing branches to complete the loop.</p>
      `,
      question: "Why must the check for divisible by 15 come before the separate checks for 3 and 5?",
      answer: "Because elif stops at the first true condition, so checking 3 or 5 first would never let the FizzBuzz case run",
      hint: "elif branches are checked in order, and only one of them ever runs."
    },
    {
      title: "The Solution",
      points: 10,
      content: `
        <p>Here is a complete, working solution:</p>
        <pre>def fizzbuzz(n):
    for num in range(1, n + 1):
        if num % 15 == 0:
            print("FizzBuzz")
        elif num % 3 == 0:
            print("Fizz")
        elif num % 5 == 0:
            print("Buzz")
        else:
            print(num)

fizzbuzz(15)</pre>
        <p>Since 15 is divisible by both 3 and 5, the num % 15 == 0 check catches it before the other
        branches run.</p>
      `,
      question: "In the call fizzbuzz(15) above, what exact text is printed for the last line (the number 15)?",
      answer: "FizzBuzz",
      hint: "15 is divisible by 3 and 5 at the same time."
    }
  ]
},
{
  id: "challenge-palindrome",
  title: "Challenge: Palindrome Checker",
  icon: "🔁",
  difficulty: "Easy",
  tags: ["challenge", "practice", "strings"],
  description: "Write a function that determines whether a given string reads the same forwards and backwards, ignoring case and spaces.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p>A palindrome is a string that reads the same forwards and backwards, like
        <code class="inline">racecar</code> or <code class="inline">level</code>.</p>
        <p><b>The challenge:</b> write a function <code class="inline">is_palindrome(s)</code> that returns
        <code class="inline">True</code> if the string <code class="inline">s</code> is a palindrome, and
        <code class="inline">False</code> otherwise. Your function should ignore letter case and spaces, so
        phrases count too.</p>
        <p>For example:</p>
        <pre>is_palindrome("racecar")                      # True
is_palindrome("hello")                        # False
is_palindrome("A man a plan a canal Panama")  # True</pre>
      `
    },
    {
      title: "The Approach",
      points: 10,
      content: `
        <p>The simplest approach is to clean the string first (lowercase it and remove spaces), then compare
        it with its own reverse. If the cleaned string equals its reverse, it's a palindrome.</p>
        <pre>def is_palindrome(s):
    cleaned = s.lower().replace(" ", "")
    reversed_version = cleaned[::-1]
    return cleaned == reversed_version</pre>
        <p>Note this uses slicing to reverse, which is fine for the design step, but the final solution below
        also shows a two-pointer style so you can compare both approaches.</p>
      `,
      question: "Why do we call .lower() before comparing the string with its reverse?",
      answer: "So that differences in letter case do not cause a true palindrome to be marked false",
      hint: "Think about comparing 'Panama' character by character against its reverse without lowercasing first."
    },
    {
      title: "The Solution",
      points: 10,
      content: `
        <p>Here is a complete solution that also strips out non-letter characters, so punctuation does not
        break the check:</p>
        <pre>def is_palindrome(s):
    cleaned = "".join(ch.lower() for ch in s if ch.isalnum())
    left, right = 0, len(cleaned) - 1
    while left &lt; right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1
    return True

print(is_palindrome("A man a plan a canal Panama"))</pre>
        <p>This version walks two pointers inward from both ends, which avoids building a reversed copy of
        the string.</p>
      `,
      question: "What does the print statement above output?",
      answer: "True",
      hint: "Once punctuation and case are removed, this phrase mirrors itself perfectly."
    }
  ]
},
{
  id: "challenge-prime-checker",
  title: "Challenge: Prime Number Checker",
  icon: "🔎",
  difficulty: "Easy",
  tags: ["challenge", "practice", "math"],
  description: "Write a function that determines whether a given integer is a prime number using an efficient divisibility check.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p>A prime number is a whole number greater than 1 that has no divisors other than 1 and itself.</p>
        <p><b>The challenge:</b> write a function <code class="inline">is_prime(n)</code> that returns
        <code class="inline">True</code> if <code class="inline">n</code> is prime, and
        <code class="inline">False</code> otherwise.</p>
        <p>For example:</p>
        <pre>is_prime(2)    # True
is_prime(17)   # True
is_prime(1)    # False
is_prime(91)   # False (7 x 13)</pre>
      `
    },
    {
      title: "The Approach",
      points: 10,
      content: `
        <p>The naive approach checks every number from 2 up to n - 1 as a possible divisor. But you don't need
        to go that far: if n has a divisor bigger than its square root, it must also have a matching divisor
        smaller than the square root. So you only need to check up to the square root of n.</p>
        <pre>import math

def is_prime(n):
    if n &lt; 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    # ...</pre>
        <p>What should the function return if the loop finishes without finding a divisor?</p>
      `,
      question: "If the for loop completes without ever returning False, what should the function return, and why?",
      answer: "True, because no divisor was found so the number must be prime",
      hint: "If the loop never triggers the n % i == 0 branch, no factor smaller than the square root exists."
    },
    {
      title: "The Solution",
      points: 10,
      content: `
        <p>Here is the complete solution:</p>
        <pre>import math

def is_prime(n):
    if n &lt; 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

print(is_prime(91))</pre>
        <p>Even though 91 looks prime at a glance, it factors as 7 x 13, so the loop finds 7 as a divisor and
        returns False.</p>
      `,
      question: "What does print(is_prime(91)) output?",
      answer: "False",
      hint: "91 is not actually prime, even though it isn't an obvious multiple of small numbers like 2, 3, or 5."
    }
  ]
},
{
  id: "challenge-fibonacci",
  title: "Challenge: Fibonacci Sequence",
  icon: "🌀",
  difficulty: "Medium",
  tags: ["challenge", "practice", "recursion"],
  description: "Generate the Fibonacci sequence using both an iterative loop and a recursive function, and compare how each approach behaves.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p>The Fibonacci sequence starts with 0 and 1, and each following number is the sum of the two before
        it: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...</p>
        <p><b>The challenge:</b> write two functions that both return the n-th Fibonacci number (with
        <code class="inline">fib(0) = 0</code> and <code class="inline">fib(1) = 1</code>):</p>
        <ul>
          <li><code class="inline">fibonacci_iterative(n)</code> using a loop</li>
          <li><code class="inline">fibonacci_recursive(n)</code> using recursion</li>
        </ul>
        <p>For example:</p>
        <pre>fibonacci_iterative(10)   # 55
fibonacci_recursive(10)   # 55</pre>
      `
    },
    {
      title: "The Approach",
      points: 15,
      content: `
        <p>The iterative version just keeps two running values, <code class="inline">a</code> and
        <code class="inline">b</code>, and slides them forward n times.</p>
        <pre>def fibonacci_iterative(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a</pre>
        <p>The recursive version mirrors the mathematical definition directly:
        <code class="inline">fib(n) = fib(n - 1) + fib(n - 2)</code>, with base cases for 0 and 1.</p>
        <pre>def fibonacci_recursive(n):
    if n &lt; 2:
        return n
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)</pre>
      `,
      question: "Why does the recursive version get noticeably slower than the iterative one as n grows?",
      answer: "Because it recomputes the same smaller Fibonacci values many times instead of reusing them",
      hint: "Draw out the recursive calls for fibonacci_recursive(5) and notice how many times fibonacci_recursive(2) gets called."
    },
    {
      title: "The Solution",
      points: 15,
      content: `
        <p>Both complete solutions together:</p>
        <pre>def fibonacci_iterative(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

def fibonacci_recursive(n):
    if n &lt; 2:
        return n
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)

sequence = [fibonacci_iterative(i) for i in range(10)]
print(sequence)</pre>
        <p>The list comprehension builds the first ten Fibonacci numbers, starting at index 0.</p>
      `,
      question: "What does print(sequence) output?",
      answer: "[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]",
      hint: "Index 0 gives fib(0) = 0, and the list has exactly 10 entries (indices 0 through 9)."
    }
  ]
},
{
  id: "challenge-factorial",
  title: "Challenge: Factorial Calculator",
  icon: "❗",
  difficulty: "Easy",
  tags: ["challenge", "practice", "recursion"],
  description: "Compute the factorial of a number using both an iterative loop and a recursive function.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p>The factorial of a non-negative integer n, written n!, is the product of all positive integers
        from 1 up to n. By definition, 0! = 1.</p>
        <p><b>The challenge:</b> write a function <code class="inline">factorial(n)</code> that returns n!.</p>
        <pre>factorial(0)   # 1
factorial(5)   # 120  (5 x 4 x 3 x 2 x 1)
factorial(6)   # 720</pre>
      `
    },
    {
      title: "The Approach",
      points: 10,
      content: `
        <p>An iterative solution just multiplies a running total by every number from 1 to n.</p>
        <pre>def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result = result * i
    return result</pre>
        <p>A recursive version instead defines factorial in terms of a smaller factorial:
        <code class="inline">n! = n * (n - 1)!</code>, stopping at the base case
        <code class="inline">0! = 1</code>.</p>
      `,
      question: "What is the base case that stops the recursive version of factorial from calling itself forever?",
      answer: "When n equals 0, the function returns 1 without recursing further",
      hint: "Every recursive function needs a condition where it stops calling itself."
    },
    {
      title: "The Solution",
      points: 10,
      content: `
        <p>Here is the complete recursive solution:</p>
        <pre>def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

print(factorial(6))</pre>
        <p>This expands as 6 x factorial(5), which expands as 6 x 5 x factorial(4), and so on down to the base
        case.</p>
      `,
      question: "What does print(factorial(6)) output?",
      answer: "720",
      hint: "6 x 5 x 4 x 3 x 2 x 1."
    }
  ]
},
{
  id: "challenge-reverse-string",
  title: "Challenge: Reverse a String",
  icon: "🔄",
  difficulty: "Easy",
  tags: ["challenge", "practice", "strings"],
  description: "Write a function that reverses a string manually, using a loop instead of Python's slicing shortcut.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p><b>The challenge:</b> write a function <code class="inline">reverse_string(s)</code> that returns
        the characters of <code class="inline">s</code> in reverse order. To make it a real exercise, don't
        use the <code class="inline">s[::-1]</code> slicing shortcut or the built-in
        <code class="inline">reversed()</code> function — build the result yourself.</p>
        <pre>reverse_string("hello")   # "olleh"
reverse_string("Python")  # "nohtyP"</pre>
      `
    },
    {
      title: "The Approach",
      points: 10,
      content: `
        <p>One approach is to walk through the original string from the last character to the first,
        appending each character to a new string as you go.</p>
        <pre>def reverse_string(s):
    result = ""
    index = len(s) - 1
    while index &gt;= 0:
        result = result + s[index]
        # ...
    return result</pre>
        <p>Each pass through the loop needs to move <code class="inline">index</code> one step closer to the
        start of the string, or it will loop forever.</p>
      `,
      question: "What statement is missing inside the while loop to make sure it eventually stops?",
      answer: "index = index - 1 (or index -= 1), to move toward the start of the string",
      hint: "Without updating index on every pass, the loop condition would never become false."
    },
    {
      title: "The Solution",
      points: 10,
      content: `
        <p>Here is the complete solution:</p>
        <pre>def reverse_string(s):
    result = ""
    index = len(s) - 1
    while index &gt;= 0:
        result = result + s[index]
        index -= 1
    return result

print(reverse_string("Python"))</pre>
        <p>The loop appends 'n', then 'o', then 't', and so on, building the reversed word one character at a
        time.</p>
      `,
      question: "What does print(reverse_string('Python')) output?",
      answer: "nohtyP",
      hint: "Read 'Python' backwards, letter by letter."
    }
  ]
},
{
  id: "challenge-anagram",
  title: "Challenge: Anagram Checker",
  icon: "🔤",
  difficulty: "Medium",
  tags: ["challenge", "practice", "strings"],
  description: "Write a function that checks whether two strings are anagrams of each other, ignoring case and spaces.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p>Two strings are anagrams if they contain exactly the same letters, just rearranged, ignoring case
        and spaces. For example, <code class="inline">listen</code> and <code class="inline">silent</code>
        are anagrams, and so are <code class="inline">Dormitory</code> and <code class="inline">Dirty Room</code>.</p>
        <p><b>The challenge:</b> write a function <code class="inline">are_anagrams(a, b)</code> that returns
        <code class="inline">True</code> if the two strings are anagrams of each other, and
        <code class="inline">False</code> otherwise.</p>
        <pre>are_anagrams("listen", "silent")           # True
are_anagrams("Dormitory", "Dirty Room")    # True
are_anagrams("hello", "world")             # False</pre>
      `
    },
    {
      title: "The Approach",
      points: 15,
      content: `
        <p>If two strings are anagrams, then once you strip out spaces, lowercase everything, and sort the
        remaining letters, both strings should produce the exact same sequence of characters.</p>
        <pre>def are_anagrams(a, b):
    cleaned_a = a.lower().replace(" ", "")
    cleaned_b = b.lower().replace(" ", "")
    # sort the letters of each and compare them
    # ...</pre>
        <p>Sorting turns any arrangement of the same letters into one canonical order, which makes comparison
        a single equality check.</p>
      `,
      question: "Once both strings are cleaned, what single Python built-in turns each one into a comparable, ordered sequence of letters?",
      answer: "sorted(), applied to each cleaned string",
      hint: "It's the same function you'd use to put a list of numbers in order."
    },
    {
      title: "The Solution",
      points: 15,
      content: `
        <p>Here is the complete solution:</p>
        <pre>def are_anagrams(a, b):
    cleaned_a = sorted(a.lower().replace(" ", ""))
    cleaned_b = sorted(b.lower().replace(" ", ""))
    return cleaned_a == cleaned_b

print(are_anagrams("Dormitory", "Dirty Room"))</pre>
        <p>After cleaning and sorting, both strings reduce to the same list of letters: d, i, m, o, o, r, r,
        t, y.</p>
      `,
      question: "What does the print statement above output?",
      answer: "True",
      hint: "Dormitory and Dirty Room use exactly the same set of letters."
    }
  ]
},
{
  id: "challenge-dedup-list",
  title: "Challenge: List Deduplication",
  icon: "🧹",
  difficulty: "Easy",
  tags: ["challenge", "practice", "lists"],
  description: "Remove duplicate values from a list while preserving the original order of first appearance.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p><b>The challenge:</b> write a function <code class="inline">dedupe(items)</code> that returns a
        new list containing only the first occurrence of each value, in the same order they first appeared.
        A plain <code class="inline">set()</code> won't work on its own because sets don't preserve order.</p>
        <pre>dedupe([1, 2, 2, 3, 1, 4])          # [1, 2, 3, 4]
dedupe(["a", "b", "a", "c", "b"])   # ["a", "b", "c"]</pre>
      `
    },
    {
      title: "The Approach",
      points: 10,
      content: `
        <p>The approach is to walk through the list once, keeping track of which values you've already seen
        in a set (for fast lookups), and only add a value to the result list the first time you see it.</p>
        <pre>def dedupe(items):
    seen = set()
    result = []
    for item in items:
        if item not in seen:
            # add item to result and mark it as seen
            # ...
    return result</pre>
        <p>The <code class="inline">seen</code> set is what lets each check be fast, while
        <code class="inline">result</code> keeps the original order intact.</p>
      `,
      question: "Why use a set for seen instead of just checking if item not in result?",
      answer: "Checking membership in a set is much faster than scanning a growing list each time",
      hint: "Think about how 'in' works differently for a set versus a list as the collection grows larger."
    },
    {
      title: "The Solution",
      points: 10,
      content: `
        <p>Here is the complete solution:</p>
        <pre>def dedupe(items):
    seen = set()
    result = []
    for item in items:
        if item not in seen:
            result.append(item)
            seen.add(item)
    return result

print(dedupe([3, 1, 2, 3, 4, 1, 5]))</pre>
        <p>Each number is added to <code class="inline">result</code> the first time it appears, and later
        repeats are skipped because they are already in <code class="inline">seen</code>.</p>
      `,
      question: "What does the print statement above output?",
      answer: "[3, 1, 2, 4, 5]",
      hint: "Walk through the list left to right and only keep each number's first appearance."
    }
  ]
},
{
  id: "challenge-matrix-transpose",
  title: "Challenge: Matrix Transpose",
  icon: "🔲",
  difficulty: "Medium",
  tags: ["challenge", "practice", "lists"],
  description: "Write a function that flips a matrix's rows and columns to produce its transpose.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p>A matrix can be represented in Python as a list of lists, where each inner list is a row. The
        transpose of a matrix flips it over its diagonal, turning rows into columns and columns into rows.</p>
        <p><b>The challenge:</b> write a function <code class="inline">transpose(matrix)</code> that returns
        the transposed matrix.</p>
        <pre>matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

transpose(matrix)
# [[1, 4], [2, 5], [3, 6]]</pre>
      `
    },
    {
      title: "The Approach",
      points: 15,
      content: `
        <p>The transposed matrix's row <code class="inline">i</code> is made up of the i-th element from
        every row of the original matrix. So you can build each new row by picking out column
        <code class="inline">i</code> across all the original rows.</p>
        <pre>def transpose(matrix):
    num_cols = len(matrix[0])
    result = []
    for col in range(num_cols):
        new_row = []
        for row in matrix:
            # pick out the element at position col from this row
            # ...
        result.append(new_row)
    return result</pre>
        <p>Python also has a much shorter way to do this using <code class="inline">zip(*matrix)</code>,
        which pairs up elements across all rows automatically.</p>
      `,
      question: "In the nested-loop version, what expression grabs the element at position col from a given row list?",
      answer: "row[col]",
      hint: "You already have the row as a list, and col is just an index into it."
    },
    {
      title: "The Solution",
      points: 15,
      content: `
        <p>Here is a compact, complete solution using <code class="inline">zip</code>:</p>
        <pre>def transpose(matrix):
    return [list(row) for row in zip(*matrix)]

matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

print(transpose(matrix))</pre>
        <p><code class="inline">zip(*matrix)</code> unpacks the matrix's rows as separate arguments to
        <code class="inline">zip</code>, which then groups together the first elements of every row, then the
        second elements, and so on.</p>
      `,
      question: "What does the print statement above output?",
      answer: "[[1, 4], [2, 5], [3, 6]]",
      hint: "The original matrix has 2 rows and 3 columns, so the transpose has 3 rows and 2 columns."
    }
  ]
},
{
  id: "challenge-word-count",
  title: "Challenge: Word Count",
  icon: "📝",
  difficulty: "Easy",
  tags: ["challenge", "practice", "strings"],
  description: "Count the number of words in a block of text, handling multiple spaces and line breaks correctly.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p><b>The challenge:</b> write a function <code class="inline">count_words(text)</code> that returns
        the number of words in <code class="inline">text</code>. Words are separated by whitespace (spaces,
        tabs, or newlines), and there might be extra spaces between them.</p>
        <pre>count_words("Python is fun")             # 3
count_words("  hello    world  ")        # 2
count_words("one two three")             # 3</pre>
      `
    },
    {
      title: "The Approach",
      points: 10,
      content: `
        <p>You might be tempted to use <code class="inline">text.split(" ")</code>, but that breaks when
        there are multiple spaces in a row, because it produces empty strings for each extra gap.</p>
        <pre>text = "  hello    world  "
text.split(" ")
# ["", "", "hello", "", "", "", "world", "", ""]</pre>
        <p>Calling <code class="inline">.split()</code> with no arguments instead splits on any amount of
        whitespace and automatically ignores leading and trailing gaps.</p>
      `,
      question: "What Python method call splits on any run of whitespace and skips empty pieces automatically?",
      answer: "text.split() with no arguments",
      hint: "It's the same method as before, just called differently."
    },
    {
      title: "The Solution",
      points: 10,
      content: `
        <p>Here is the complete solution:</p>
        <pre>def count_words(text):
    words = text.split()
    return len(words)

sample = "  The quick brown  fox jumps over the lazy dog  "
print(count_words(sample))</pre>
        <p><code class="inline">split()</code> collapses all the extra spaces into single separators,
        producing a clean list of 9 words.</p>
      `,
      question: "What does the print statement above output?",
      answer: "9",
      hint: "Count the words: The, quick, brown, fox, jumps, over, the, lazy, dog."
    }
  ]
},
{
  id: "challenge-temp-converter",
  title: "Challenge: Temperature Converter",
  icon: "🌡️",
  difficulty: "Easy",
  tags: ["challenge", "practice", "math"],
  description: "Write functions that convert temperatures between Celsius and Fahrenheit using the standard conversion formulas.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p><b>The challenge:</b> write two functions:</p>
        <ul>
          <li><code class="inline">celsius_to_fahrenheit(c)</code> — converts Celsius to Fahrenheit</li>
          <li><code class="inline">fahrenheit_to_celsius(f)</code> — converts Fahrenheit to Celsius</li>
        </ul>
        <pre>celsius_to_fahrenheit(0)     # 32.0
celsius_to_fahrenheit(25)    # 77.0
fahrenheit_to_celsius(98.6)  # 37.0</pre>
      `
    },
    {
      title: "The Approach",
      points: 10,
      content: `
        <p>The formulas are fixed by physics: Fahrenheit equals Celsius times 9/5, plus 32. To go the other
        way, you undo those same steps in reverse order — subtract 32 first, then multiply by 5/9.</p>
        <pre>def celsius_to_fahrenheit(c):
    return c * 9 / 5 + 32

def fahrenheit_to_celsius(f):
    # subtract 32 first, then multiply by 5/9
    # ...</pre>
      `,
      question: "In fahrenheit_to_celsius, which operation must happen first: subtracting 32, or multiplying by 5/9?",
      answer: "Subtracting 32 must happen first, before multiplying by 5/9",
      hint: "You're undoing the Celsius-to-Fahrenheit formula, so the steps reverse in the opposite order."
    },
    {
      title: "The Solution",
      points: 10,
      content: `
        <p>Here is the complete solution:</p>
        <pre>def celsius_to_fahrenheit(c):
    return c * 9 / 5 + 32

def fahrenheit_to_celsius(f):
    return (f - 32) * 5 / 9

print(celsius_to_fahrenheit(25))</pre>
        <p>25 times 9/5 is 45, and adding 32 gives 77.</p>
      `,
      question: "What does the print statement above output?",
      answer: "77.0",
      hint: "25 x 9 / 5 = 45, then add 32."
    }
  ]
},
{
  id: "challenge-calculator",
  title: "Challenge: Build a Calculator",
  icon: "🧮",
  difficulty: "Medium",
  tags: ["challenge", "practice", "functions"],
  description: "Build a simple command-line calculator that performs addition, subtraction, multiplication, and division on two numbers.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p><b>The challenge:</b> write a function <code class="inline">calculate(a, b, operator)</code> that
        takes two numbers and an operator string (<code class="inline">"+"</code>, <code class="inline">"-"</code>,
        <code class="inline">"*"</code>, or <code class="inline">"/"</code>), and returns the result of applying
        that operation. Dividing by zero should return the string
        <code class="inline">"Error: division by zero"</code> instead of crashing.</p>
        <pre>calculate(4, 2, "+")   # 6
calculate(4, 2, "-")   # 2
calculate(4, 2, "*")   # 8
calculate(4, 2, "/")   # 2.0
calculate(4, 0, "/")   # "Error: division by zero"</pre>
      `
    },
    {
      title: "The Approach",
      points: 20,
      content: `
        <p>The approach is a straightforward chain of conditions checking which operator string was passed
        in, doing the matching arithmetic for each one. Division needs an extra check first, since dividing by
        zero is not allowed.</p>
        <pre>def calculate(a, b, operator):
    if operator == "+":
        return a + b
    elif operator == "-":
        return a - b
    elif operator == "*":
        return a * b
    elif operator == "/":
        # handle division by zero, then divide
        # ...
    else:
        return "Error: unknown operator"</pre>
      `,
      question: "What condition should be checked before performing the division, to avoid crashing the program?",
      answer: "Check if b equals 0, and if so return an error message instead of dividing",
      hint: "Dividing any number by zero raises an exception in Python."
    },
    {
      title: "The Solution",
      points: 20,
      content: `
        <p>Here is the complete solution:</p>
        <pre>def calculate(a, b, operator):
    if operator == "+":
        return a + b
    elif operator == "-":
        return a - b
    elif operator == "*":
        return a * b
    elif operator == "/":
        if b == 0:
            return "Error: division by zero"
        return a / b
    else:
        return "Error: unknown operator"

print(calculate(9, 3, "/"))</pre>
        <p>Since 3 is not zero, the function skips the error branch and simply returns 9 divided by 3.</p>
      `,
      question: "What does the print statement above output?",
      answer: "3.0",
      hint: "Division in Python 3 with / always produces a float, even when the result is a whole number."
    }
  ]
},
{
  id: "challenge-number-guess",
  title: "Challenge: Number Guessing Game",
  icon: "🎯",
  difficulty: "Medium",
  tags: ["challenge", "practice", "loops"],
  description: "Build a number guessing game where the player keeps guessing a secret number until they get it right, with hints along the way.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p><b>The challenge:</b> build a guessing game around a secret number. The player keeps entering
        guesses, and after each one the program tells them whether their guess was too low, too high, or
        correct. When the player guesses correctly, the program reports how many tries it took and stops.</p>
        <p>For example, if the secret number is 7 and the player guesses 3, then 9, then 7, the output should
        look like this:</p>
        <pre>Too low
Too high
Correct! You guessed it in 3 tries.</pre>
      `
    },
    {
      title: "The Approach",
      points: 15,
      content: `
        <p>The core of the game is a loop that keeps asking for a guess until it matches the secret number.
        Each time through the loop, you compare the guess to the secret number and print the right message,
        and you keep a counter of how many attempts have been made.</p>
        <pre>secret = 7
attempts = 0
guess = None

while guess != secret:
    guess = int(input("Guess a number: "))
    attempts += 1
    if guess &lt; secret:
        print("Too low")
    elif guess &gt; secret:
        print("Too high")
    else:
        # print the success message using attempts
        # ...</pre>
      `,
      question: "What variable needs to be included in the final success message so the player knows how many tries it took?",
      answer: "attempts",
      hint: "It's the counter that gets incremented by 1 on every pass through the loop."
    },
    {
      title: "The Solution",
      points: 15,
      content: `
        <p>Here is a complete solution, using a fixed list of guesses instead of
        <code class="inline">input()</code> so it can run without a real player and still produce the same
        behavior:</p>
        <pre>def play(secret, guesses):
    attempts = 0
    for guess in guesses:
        attempts += 1
        if guess &lt; secret:
            print("Too low")
        elif guess &gt; secret:
            print("Too high")
        else:
            print("Correct! You guessed it in " + str(attempts) + " tries.")
            break

play(7, [3, 9, 7])</pre>
        <p>The loop stops as soon as a guess matches the secret number, thanks to the
        <code class="inline">break</code> statement.</p>
      `,
      question: "What is the exact text of the last line printed when play(7, [3, 9, 7]) runs?",
      answer: "Correct! You guessed it in 3 tries.",
      hint: "Count how many guesses from the list are tried before 7 is reached, including 7 itself."
    }
  ]
},
{
  id: "challenge-rock-paper-scissors",
  title: "Challenge: Rock Paper Scissors",
  icon: "✂️",
  difficulty: "Medium",
    premium: true,
  tags: ["challenge", "practice", "functions"],
  description: "Build a rock-paper-scissors game that compares the player's choice against the computer's and decides the winner.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p><b>The challenge:</b> write a function <code class="inline">play_round(player, computer)</code>
        that takes the player's choice and the computer's choice (each one of <code class="inline">"rock"</code>,
        <code class="inline">"paper"</code>, or <code class="inline">"scissors"</code>) and returns a message
        announcing the winner. Remember the rules: rock beats scissors, scissors beats paper, and paper beats
        rock. A matching choice is a tie.</p>
        <pre>play_round("rock", "scissors")   # "You win! Rock beats Scissors."
play_round("paper", "paper")     # "It's a tie!"
play_round("scissors", "rock")   # "You lose! Rock beats Scissors."</pre>
      `
    },
    {
      title: "The Approach",
      points: 20,
      content: `
        <p>Instead of writing out every combination by hand, it helps to store the rule 'what beats what' in
        a dictionary: each choice maps to the choice it defeats. Then you just check whether the player's
        choice beats the computer's, whether it's the reverse, or whether they match.</p>
        <pre>beats = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
}

def play_round(player, computer):
    if player == computer:
        return "It's a tie!"
    elif beats[player] == computer:
        # the player's choice beats the computer's choice
        # ...
    else:
        return "You lose! " + computer.capitalize() + " beats " + player.capitalize() + "."</pre>
      `,
      question: "What does the beats dictionary's value for a given key represent?",
      answer: "The choice that the key's choice defeats, for example beats of rock is scissors, meaning rock beats scissors",
      hint: "Look at how beats[player] is used in the elif condition."
    },
    {
      title: "The Solution",
      points: 20,
      content: `
        <p>Here is the complete solution:</p>
        <pre>beats = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
}

def play_round(player, computer):
    if player == computer:
        return "It's a tie!"
    elif beats[player] == computer:
        return "You win! " + player.capitalize() + " beats " + computer.capitalize() + "."
    else:
        return "You lose! " + computer.capitalize() + " beats " + player.capitalize() + "."

print(play_round("rock", "scissors"))</pre>
        <p>Since <code class="inline">beats["rock"]</code> is <code class="inline">"scissors"</code>, which
        matches the computer's choice, the player wins this round.</p>
      `,
      question: "What does the print statement above output?",
      answer: "You win! Rock beats Scissors.",
      hint: "Rock beats scissors, and .capitalize() makes the first letter of each word uppercase."
    }
  ]
},
{
  id: "challenge-todo-cli",
  title: "Challenge: To-Do List CLI App",
  icon: "✅",
  difficulty: "Medium",
    premium: true,
  tags: ["challenge", "practice", "lists"],
  description: "Build a command-line to-do list that supports adding tasks, removing tasks, and listing everything that's left.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p><b>The challenge:</b> build a simple to-do list manager backed by a list. It should support three
        operations:</p>
        <ul>
          <li><code class="inline">add_task(tasks, name)</code> — adds a new task to the end of the list</li>
          <li><code class="inline">remove_task(tasks, name)</code> — removes a task by name, if it exists</li>
          <li><code class="inline">list_tasks(tasks)</code> — returns the tasks as a numbered list of strings</li>
        </ul>
        <pre>tasks = []
add_task(tasks, "Buy milk")
add_task(tasks, "Walk dog")
remove_task(tasks, "Buy milk")
list_tasks(tasks)
# ["1. Walk dog"]</pre>
      `
    },
    {
      title: "The Approach",
      points: 20,
      content: `
        <p>Since <code class="inline">tasks</code> is a plain list, adding a task is just
        <code class="inline">.append()</code>. Removing one needs a check first, in case the task name isn't
        in the list at all, so it doesn't crash. Listing them just needs to pair each task with its
        position.</p>
        <pre>def add_task(tasks, name):
    tasks.append(name)

def remove_task(tasks, name):
    if name in tasks:
        # remove the task from the list
        # ...

def list_tasks(tasks):
    result = []
    for i, task in enumerate(tasks):
        result.append(str(i + 1) + ". " + task)
    return result</pre>
      `,
      question: "What list method removes a specific value from a list by that value, rather than by its index?",
      answer: "tasks.remove(name)",
      hint: "It's different from del or pop, which work by position instead of by value."
    },
    {
      title: "The Solution",
      points: 20,
      content: `
        <p>Here is the complete solution:</p>
        <pre>def add_task(tasks, name):
    tasks.append(name)

def remove_task(tasks, name):
    if name in tasks:
        tasks.remove(name)

def list_tasks(tasks):
    result = []
    for i, task in enumerate(tasks):
        result.append(str(i + 1) + ". " + task)
    return result

tasks = []
add_task(tasks, "Buy milk")
add_task(tasks, "Walk dog")
add_task(tasks, "Read book")
remove_task(tasks, "Walk dog")
print(list_tasks(tasks))</pre>
        <p>After removing 'Walk dog', only 'Buy milk' and 'Read book' remain, and
        <code class="inline">enumerate</code> renumbers them starting from 1.</p>
      `,
      question: "What does the print statement above output?",
      answer: "['1. Buy milk', '2. Read book']",
      hint: "The remaining two tasks get renumbered starting at 1, in their original relative order."
    }
  ]
},
{
  id: "challenge-password-generator",
  title: "Challenge: Password Generator",
  icon: "🔐",
  difficulty: "Medium",
    premium: true,
  tags: ["challenge", "practice", "strings"],
  description: "Generate secure random passwords of a configurable length, mixing letters, digits, and symbols.",
  tasks: [
    {
      title: "The Challenge",
      points: 0,
      content: `
        <p><b>The challenge:</b> write a function <code class="inline">generate_password(length)</code> that
        returns a random password of exactly <code class="inline">length</code> characters, made up of a mix
        of uppercase letters, lowercase letters, digits, and punctuation symbols.</p>
        <pre>generate_password(12)
# a random string such as "aK9$mZ2!qLp7" -- a different result every time,
# but always exactly 12 characters long</pre>
      `
    },
    {
      title: "The Approach",
      points: 20,
      content: `
        <p>Python's <code class="inline">string</code> module already provides ready-made character sets:
        <code class="inline">string.ascii_letters</code>, <code class="inline">string.digits</code>, and
        <code class="inline">string.punctuation</code>. You combine them into one pool of allowed characters,
        then pick <code class="inline">length</code> characters from that pool at random using
        <code class="inline">random.choice</code>.</p>
        <pre>import random
import string

def generate_password(length):
    pool = string.ascii_letters + string.digits + string.punctuation
    password = ""
    for _ in range(length):
        # pick one random character from pool and add it to password
        # ...
    return password</pre>
      `,
      question: "Which function from the random module picks a single random element out of a sequence like a string?",
      answer: "random.choice()",
      hint: "It takes one sequence as an argument and returns one item from it."
    },
    {
      title: "The Solution",
      points: 20,
      content: `
        <p>Here is the complete solution:</p>
        <pre>import random
import string

def generate_password(length):
    pool = string.ascii_letters + string.digits + string.punctuation
    password = ""
    for _ in range(length):
        password += random.choice(pool)
    return password

pw = generate_password(12)
print(len(pw))</pre>
        <p>Since the loop runs exactly <code class="inline">length</code> times, adding one character each
        time, the resulting password always has exactly that many characters — even though the characters
        themselves are random and different every run.</p>
      `,
      question: "What does print(len(pw)) output when generate_password(12) is used, regardless of which random characters are chosen?",
      answer: "12",
      hint: "The randomness affects which characters appear, not how many of them there are."
    }
  ]
},

  /* ---- ai-ml-batch.js ---- */
  {
  id: "ai-ml-intro",
  title: "What Is Machine Learning?",
  icon: "🤖",
  difficulty: "Easy",
  tags: ["ai", "machine-learning", "concepts"],
  description: "Understand what machine learning actually is, how it differs from traditional programming, and where it quietly powers apps you already use.",
  tasks: [
    {
      title: "Two Ways to Solve a Problem",
      points: 0,
      content: `
    <p>Machine learning (ML) is a way of getting computers to perform tasks without being
    explicitly told every rule for how to do it. Instead of a programmer writing out every
    'if this, then that' rule, the computer looks at lots of examples and works out the
    pattern for itself.</p>
    <p>You already use ML every day: the spam filter in your inbox, the recommendations on a
    video app, the autocomplete on your phone's keyboard, and the face-tagging in your photo
    app are all powered by models that learned from data rather than from hand-written
    instructions.</p>
    <p>This course walks through hands-on rooms using entirely free tools — no paid signups,
    no expensive hardware — so you can build real intuition for how AI works under the hood.</p>
  `
    },
    {
      title: "Rules vs. Examples",
      points: 10,
      content: `
    <p>In traditional programming, a human writes the exact rules: <code class="inline">if
    temperature &gt; 30, say 'hot'</code>. The computer just follows the instructions it was
    given, step by step.</p>
    <p>In machine learning, you flip that around. You give the computer lots of examples (the
    data) along with the correct answers, and the model itself works out the rule that best
    fits those examples. Once trained, it can apply that learned rule to new examples it has
    never seen before.</p>
  `,
      question: "In machine learning, what does a model learn its rules from instead of hand-written instructions?",
      answer: "data",
      hint: "It's the examples you feed the model, not code a programmer typed out."
    },
    {
      title: "Supervised, Unsupervised, Reinforcement",
      points: 10,
      content: `
    <p>Machine learning comes in a few main flavors. In <b>supervised learning</b>, the model
    trains on labeled examples where the correct answer is already known — like photos already
    tagged 'cat' or 'dog'. In <b>unsupervised learning</b>, the model looks for structure or
    groupings in data that has no labels at all. In <b>reinforcement learning</b>, an agent
    learns by trial and error, getting rewards or penalties for its actions.</p>
    <p>Most of the tools in this course, including Teachable Machine, are examples of
    supervised learning: you show the model examples of each category you care about, and it
    learns to tell them apart.</p>
  `,
      question: "Which type of machine learning trains on labeled examples where the correct answer is already known?",
      answer: "supervised learning",
      hint: "The name describes a teacher checking the model's answers as it learns."
    },
    {
      title: "Training vs. Using a Model",
      points: 15,
      content: `
    <p>Building a machine learning system generally happens in two stages. <b>Training</b> is
    the stage where the model looks at example data and adjusts its internal settings to
    reduce its mistakes. This can take anywhere from seconds to weeks, depending on how big
    the model and dataset are.</p>
    <p>Once training is done, you can use the finished model to make predictions on brand-new
    data it has never seen. Using an already-trained model this way is called
    <b>inference</b> — it's the fast, lightweight step that happens every time a spam filter
    checks a new email or a phone unlocks with your face.</p>
  `,
      question: "What is the term for using an already-trained model to make a prediction on new data?",
      answer: "inference",
      hint: "It's the opposite stage of training — using the model rather than teaching it."
    }
  ]
},
{
  id: "teachable-machine-image",
  title: "Teachable Machine: Train an Image Classifier",
  icon: "📷",
  difficulty: "Easy",
  tags: ["ai", "teachable-machine", "no-code"],
  description: "Use Google's free, no-code Teachable Machine to train your own webcam-based image classifier and watch it recognize objects live.",
  tasks: [
    {
      title: "Meet Teachable Machine",
      points: 0,
      content: `
    <p>Teachable Machine is a free tool from Google that lets you train real machine learning
    models directly in your browser — no coding, no installs, and no account required. It
    offers three project types: <b>Image</b>, <b>Audio</b>, and <b>Pose</b>.</p>
    <p>In this room you'll use the Image project type to train a model that tells apart
    different things you show it through your webcam. Head to
    teachablemachine.withgoogle.com and click 'Get Started' to try it yourself.</p>
  `
    },
    {
      title: "Start a New Image Project",
      points: 10,
      content: `
    <p>Click 'New Project' and choose <b>Image Project</b>, then pick the 'Standard image
    model'. You'll land on a screen with two empty class boxes. A <b>class</b> is simply a
    category you want the model to learn to recognize — for example 'Mug' and 'Nothing'.</p>
    <p>Rename the two default classes to whatever objects you want to tell apart, and add a
    third class if you like. Every project needs at least two classes, because the model has
    to have at least two things to choose between.</p>
  `,
      question: "In Teachable Machine, what do you call each category you want the model to recognize?",
      answer: "a class",
      hint: "It's the box you rename before recording any samples."
    },
    {
      title: "Record Webcam Samples",
      points: 10,
      content: `
    <p>Under each class, click 'Webcam' and hold the recording button to capture a burst of
    images for that class. Try to vary the angle, distance, and background a little between
    samples — this helps the model generalize instead of just memorizing one exact pose.</p>
    <p>Record samples for every class before moving on. The more varied and plentiful your
    samples are, the better the model will perform on situations it hasn't seen before.</p>
  `,
      question: "What input device does Teachable Machine's Image project use to collect samples?",
      answer: "webcam",
      hint: "It's the same camera you'd use for a video call."
    },
    {
      title: "Train and Test Live",
      points: 15,
      content: `
    <p>Once every class has samples, click <b>Train Model</b>. Training happens right there in
    your browser using TensorFlow.js — none of your images are uploaded to a server. Behind
    the scenes, the model adjusts its internal parameters over and over to get better at
    telling your classes apart.</p>
    <p>When training finishes, the Preview panel turns your webcam back on and shows a live
    probability for each class as you move around. Try triggering each class and watch the
    percentages update in real time.</p>
  `,
      question: "What does Teachable Machine's Image project use to run training directly in your browser?",
      answer: "TensorFlow.js",
      hint: "It's a JavaScript version of a well-known machine learning framework."
    }
  ]
},
{
  id: "teachable-machine-sound",
  title: "Teachable Machine: Train a Sound Classifier",
  icon: "🎙️",
  difficulty: "Medium",
  tags: ["ai", "teachable-machine", "audio"],
  description: "Train a model that recognizes different sounds or spoken words using Teachable Machine's free, browser-based Audio project type.",
  tasks: [
    {
      title: "Meet the Audio Project",
      points: 0,
      content: `
    <p>Besides Image, Teachable Machine also offers an <b>Audio</b> project type, which trains
    a model to recognize short sound clips — a spoken word, a clap, a whistle, or any distinct
    noise picked up by your microphone.</p>
    <p>Head back to teachablemachine.withgoogle.com, click 'New Project', and this time choose
    'Audio Project' to get started.</p>
  `
    },
    {
      title: "Record Background Noise First",
      points: 15,
      content: `
    <p>Every Audio project starts with a special class called <b>Background Noise</b>. Click
    its microphone button and record a sample of the ordinary quiet or ambient sound in your
    room. This gives the model a baseline of 'nothing interesting is happening' to compare
    everything else against.</p>
    <p>Skipping this step, or recording it in a totally different environment than your real
    sounds, is one of the most common reasons an audio model performs poorly.</p>
  `,
      question: "Which special class should you record first in a Teachable Machine Audio project?",
      answer: "Background Noise",
      hint: "It captures silence and ambient sound so the model can tell real sounds apart from nothing."
    },
    {
      title: "Add Your Own Sound Classes",
      points: 15,
      content: `
    <p>Add one or more new classes and give each one a name, such as 'Clap' or 'Yes'. Click
    the microphone button and record several short samples of that sound, leaving the
    Background Noise class as your baseline for comparison. Then click <b>Train Model</b>.</p>
    <p>Just like the Image project, everything runs locally in your browser using your
    computer's built-in audio input, with nothing sent to a server.</p>
  `,
      question: "What device does Teachable Machine's Audio project use to capture your samples?",
      answer: "a microphone",
      hint: "It's the audio equivalent of the webcam used in Image projects."
    },
    {
      title: "How the Model 'Hears' Sound",
      points: 20,
      content: `
    <p>Under the hood, an audio classifier doesn't listen to raw sound waves directly. It
    typically converts short slices of audio into a <b>spectrogram</b> — an image-like chart
    that plots frequency against time — and then treats that picture almost like a computer
    vision problem.</p>
    <p>Test your trained model live: talk, clap, or make your target sound near the microphone
    and watch the class probabilities shift in the Preview panel as new audio streams in.</p>
  `,
      question: "What visual, image-like representation of sound do audio machine learning models commonly analyze?",
      answer: "a spectrogram",
      hint: "It plots frequency against time, turning sound into something that looks like a picture."
    }
  ]
},
{
  id: "teachable-machine-pose",
  title: "Teachable Machine: Train a Pose Classifier",
  icon: "🕺",
  difficulty: "Medium",
  tags: ["ai", "teachable-machine", "pose-estimation"],
  description: "Train a model that recognizes body poses through your webcam using Teachable Machine's Pose project type and see pose estimation in action.",
  tasks: [
    {
      title: "Meet the Pose Project",
      points: 0,
      content: `
    <p>Teachable Machine's third project type, <b>Pose</b>, trains a model to recognize the
    position of a person's body, such as 'arms raised' versus 'sitting down', using nothing
    more than your webcam.</p>
    <p>Pose projects work in two steps under the hood: a pose-estimation model first finds
    points on your body, and then Teachable Machine trains a much simpler classifier on top of
    those points. Visit teachablemachine.withgoogle.com and start a new 'Pose Project' to try
    it.</p>
  `
    },
    {
      title: "What the Model Actually Sees",
      points: 15,
      content: `
    <p>Before it can classify anything, the underlying pose-estimation model locates specific
    points on your body — shoulders, elbows, wrists, hips, knees, and so on. These points are
    called <b>keypoints</b>, and together they form a rough skeleton.</p>
    <p>Teachable Machine's Pose classifier never actually looks at your raw webcam pixels for
    training — it learns from the arrangement of these keypoints instead, which is part of
    why it can train so quickly.</p>
  `,
      question: "In Teachable Machine's Pose project, what points on the body does the underlying model detect before classifying a pose?",
      answer: "keypoints",
      hint: "It's the same term used for the skeletal points in general pose-estimation models."
    },
    {
      title: "Record Poses From Several Angles",
      points: 15,
      content: `
    <p>Create at least two classes, such as 'Arms Up' and 'Neutral', and record webcam samples
    for each. Try stepping closer and farther from the camera, and varying your position
    slightly, so the model doesn't just memorize one exact spot in the room. Then click
    <b>Train Model</b>.</p>
    <p>Notice that, like the Image project, Pose also relies entirely on your webcam feed for
    input — it's the Audio project that swaps in a microphone instead.</p>
  `,
      question: "Which two Teachable Machine project types both rely on your webcam as the input source?",
      answer: "Image and Pose",
      hint: "Audio is the odd one out — it listens instead of watching."
    },
    {
      title: "Test Live and Think of Uses",
      points: 15,
      content: `
    <p>Test your trained model in the Preview panel by physically striking each pose in front
    of your webcam and watching the probabilities update. Pose classifiers like this one show
    up in fitness apps that count reps, games that use full-body controls, and accessibility
    tools that recognize gestures.</p>
    <p>If you wanted to build a webcam app that recognizes yoga positions, this is exactly the
    project type built for the job.</p>
  `,
      question: "Which Teachable Machine project type would you choose to recognize yoga poses from a webcam?",
      answer: "Pose",
      hint: "It's named for exactly what it detects."
    }
  ]
},
{
  id: "teachable-machine-export",
  title: "Exporting & Understanding Your Teachable Machine Model",
  icon: "📦",
  difficulty: "Medium",
  tags: ["ai", "teachable-machine", "deployment"],
  description: "Export a trained Teachable Machine model and learn what each export format is actually for, from web pages to mobile apps.",
  tasks: [
    {
      title: "Three Ways to Take Your Model Home",
      points: 0,
      content: `
    <p>A model trained in Teachable Machine doesn't have to stay inside the Teachable Machine
    website. From the <b>Export Model</b> tab you can download or host it in three different
    formats, each suited to a different kind of project: <b>TensorFlow.js</b>,
    <b>TensorFlow (Keras)</b>, and <b>TensorFlow Lite</b>.</p>
    <p>Open any model you've trained (or train a quick throwaway one now) at
    teachablemachine.withgoogle.com and click over to the Export Model tab to follow along.</p>
  `
    },
    {
      title: "Exporting for the Web",
      points: 15,
      content: `
    <p>In the Export tab, select <b>Tensorflow.js</b>. This format is built to run inside a
    web page, using JavaScript in the visitor's own browser rather than on a server. Teachable
    Machine even gives you a ready-to-copy code snippet, plus an option to upload the model to
    Google's servers so you get a shareable URL instead of downloading files.</p>
    <p>This is the format you'd use if you wanted to embed your model in a website using a
    library like ml5.js.</p>
  `,
      question: "Which export format would you choose to run your Teachable Machine model inside a web page?",
      answer: "TensorFlow.js",
      hint: "It's the JavaScript flavor of the export options."
    },
    {
      title: "Exporting for Mobile and Embedded Devices",
      points: 15,
      content: `
    <p>Select the <b>Tensorflow Lite</b> option instead. This format is compressed and
    optimized to run on devices with limited processing power and memory, such as Android
    phones, Raspberry Pi boards, and other embedded hardware.</p>
    <p>Because it trades a little accuracy for a much smaller footprint, TensorFlow Lite is
    the format you'd reach for when your model needs to run fast on a small, low-power
    device.</p>
  `,
      question: "Which Teachable Machine export format is designed for mobile and embedded devices?",
      answer: "TensorFlow Lite",
      hint: "The word 'Lite' is a strong clue here."
    },
    {
      title: "Exporting for Python",
      points: 20,
      content: `
    <p>Finally, select the <b>Tensorflow</b> option, which exports your model in the Keras
    SavedModel format. This is the format to grab if you want to keep working with your model
    in Python — for example, loading it in a Google Colab notebook to run further tests or
    combine it with other code.</p>
    <p>Choosing the right export format is really just about matching the model to where it
    needs to run next: browser, phone, or Python environment.</p>
  `,
      question: "Which export format would you use to continue working with your model in Python, e.g. in Google Colab?",
      answer: "TensorFlow (Keras)",
      hint: "It's named after the popular deep learning framework and its high-level API."
    }
  ]
},
{
  id: "neural-networks-playground",
  title: "Visualizing Neural Networks with TensorFlow Playground",
  icon: "🧠",
  difficulty: "Medium",
  tags: ["ai", "neural-networks", "tensorflow-playground"],
  description: "Experiment with a live neural network right in your browser and see how layers, neurons, and learning rate change what it learns.",
  tasks: [
    {
      title: "A Neural Network You Can Poke At",
      points: 0,
      content: `
    <p>TensorFlow Playground is a free, interactive visualization of a small neural network
    running entirely in your browser. It classifies simple 2D toy datasets — like two
    clusters or a spiral — and lets you watch, in real time, how changing the network's
    structure changes what it learns. No coding is required.</p>
    <p>Open playground.tensorflow.org in your browser to follow along with each step below.</p>
  `
    },
    {
      title: "Reading the Dataset",
      points: 15,
      content: `
    <p>In the top-left panel, pick one of the four sample datasets — the simplest is two
    separate blobs of dots. Each dot is colored either orange or blue.</p>
    <p>Those colors aren't decoration: they represent the two categories the network is trying
    to learn to separate. This is the same idea as the classes you created in Teachable
    Machine, just drawn as points on a 2D plane instead of images or sounds.</p>
  `,
      question: "In TensorFlow Playground, what do the orange and blue dots on the dataset represent?",
      answer: "two classes",
      hint: "Think back to what a 'class' meant in the Teachable Machine rooms."
    },
    {
      title: "Watching It Learn",
      points: 15,
      content: `
    <p>Click the play button in the top-left corner to start training. As it runs, notice the
    colored background shading spreading across the plot, and the loss number ticking down in
    the top-right corner.</p>
    <p>That background shading is the network's current decision boundary: it shows which
    regions of the plane the model would currently classify as orange versus blue, updating
    live as training continues.</p>
  `,
      question: "What does the colored background shading in TensorFlow Playground represent once training starts?",
      answer: "the model's decision boundary",
      hint: "It shows how the network would currently classify every point on the plane, not just the dots you can see."
    },
    {
      title: "Turning Up the Learning Rate",
      points: 20,
      content: `
    <p>Reset the network, then find the <b>Learning rate</b> dropdown near the top and set it
    to a very high value like 10. Click play and watch the loss — instead of smoothly
    decreasing, it will likely bounce around wildly or blow up.</p>
    <p>The learning rate controls how big a step the network takes each time it updates its
    internal weights. Too small and training crawls; too large and it can overshoot and never
    settle down. Set it back to a small value like 0.03 and try again to see the difference.</p>
  `,
      question: "What hyperparameter in TensorFlow Playground controls how big a step the network takes when updating its weights?",
      answer: "the learning rate",
      hint: "It's the dropdown you changed right before the loss started misbehaving."
    }
  ]
},
{
  id: "quick-draw-ai",
  title: "How AI Recognizes Doodles: Google Quick, Draw!",
  icon: "✏️",
  difficulty: "Easy",
  tags: ["ai", "google", "quick-draw"],
  description: "Play Google's free Quick, Draw! game to watch a neural network guess your doodles in real time, then learn what's happening behind the scenes.",
  tasks: [
    {
      title: "A Doodle-Guessing Neural Network",
      points: 0,
      content: `
    <p>Quick, Draw! is a free experiment from Google Creative Lab. You're given a word and a
    short time limit to sketch it, while a neural network watches your strokes and tries to
    guess what you're drawing — often before you've even finished.</p>
    <p>Visit quickdraw.withgoogle.com and click 'Let's Draw!' to play a round yourself before
    continuing.</p>
  `
    },
    {
      title: "Guessing Before You Finish",
      points: 10,
      content: `
    <p>Play a full round and pay attention to the guesses appearing above the canvas while you
    are still drawing, not just at the end. The model re-evaluates your sketch continuously as
    new strokes are added, updating its top guesses on the fly.</p>
    <p>This shows that the model isn't waiting for a 'finished' picture — it's doing the same
    kind of pattern recognition you saw in Teachable Machine's Image project, just applied
    frame by frame as your doodle grows.</p>
  `,
      question: "What company created Quick, Draw!?",
      answer: "Google",
      hint: "It's the same company behind Teachable Machine and Colab."
    },
    {
      title: "Trained on Millions of Doodles",
      points: 10,
      content: `
    <p>Quick, Draw!'s recognizer wasn't trained on a handful of example sketches — it learned
    from millions of doodles submitted by other players around the world, all playing the
    same game before you.</p>
    <p>That huge, varied collection of doodles is actually released publicly as one of the
    largest open doodle datasets around, and researchers use it to train and test other
    sketch-recognition models.</p>
  `,
      question: "What is Quick, Draw!'s neural network trained on?",
      answer: "millions of doodles",
      hint: "The answer is basically in the previous paragraph — think about where the training examples came from."
    },
    {
      title: "Racing the Clock",
      points: 15,
      content: `
    <p>Notice that each doodle round is timed. That short window forces quick, messy,
    real-world sketches rather than careful drawings, which is exactly the kind of noisy input
    a recognizer needs to be trained and tested against to work well in practice.</p>
    <p>Play another round or two and see how the timer affects how confidently — and how
    quickly — the model locks onto the right guess.</p>
  `,
      question: "How many seconds do you get to draw each doodle in Quick, Draw!?",
      answer: "20 seconds",
      hint: "It's a short countdown you'll see ticking above the canvas."
    }
  ]
},
{
  id: "intro-to-colab",
  title: "Intro to Google Colab: Your Free ML Notebook",
  icon: "📓",
  difficulty: "Easy",
  tags: ["ai", "google-colab", "python"],
  description: "Create your first Google Colab notebook, a free, cloud-hosted place to write and run real Python machine learning code with no installs.",
  tasks: [
    {
      title: "A Notebook in the Cloud",
      points: 0,
      content: `
    <p>Google Colab is a free, hosted version of a Jupyter notebook that runs entirely in your
    browser. There's nothing to install: you write and run real Python code on Google's
    servers, and Colab even gives you free access to a GPU for heavier workloads.</p>
    <p>Colab is a favorite tool for real machine learning work with libraries like scikit-learn
    and pandas, because you can go from an empty page to running code in seconds. Head to
    colab.research.google.com to create your first notebook.</p>
  `
    },
    {
      title: "Code Cells and Text Cells",
      points: 10,
      content: `
    <p>Click 'New Notebook'. A Colab notebook is made of a sequence of cells you can run one
    at a time, in any order you like. There are two main types: <b>code cells</b>, which run
    actual Python, and <b>text cells</b>, which hold formatted notes and explanations using
    Markdown.</p>
    <p>Mixing the two is what makes notebooks great for learning and experimenting — you can
    explain what a piece of code does right above or below the code itself.</p>
  `,
      question: "What are the two main types of cells in a Colab notebook?",
      answer: "code and text",
      hint: "One type runs Python, the other holds formatted notes."
    },
    {
      title: "Running Your First Cell",
      points: 10,
      content: `
    <p>Click into the first empty code cell and type a simple line of Python:</p>
    <pre>print('Hello, ML!')</pre>
    <p>Press <code class="inline">Shift+Enter</code> to run the cell. Colab executes it on a
    remote machine and prints the output directly below the cell, then automatically moves you
    to the next one.</p>
  `,
      question: "What keyboard shortcut runs the current cell in Colab?",
      answer: "Shift+Enter",
      hint: "It's two keys pressed together, one of them the same one used to type a capital letter."
    },
    {
      title: "Turning On a Free GPU",
      points: 15,
      content: `
    <p>Open the <b>Runtime</b> menu at the top of the page and choose 'Change runtime type'.
    In the dialog that appears, set 'Hardware accelerator' to GPU and save. Colab now runs
    your code on a free graphics card, which can dramatically speed up heavier machine
    learning tasks.</p>
    <p>You won't need a GPU for tiny examples like the one above, but it's good to know it's
    there, free, the moment your notebook needs real horsepower.</p>
  `,
      question: "Which menu in Colab do you use to switch on a free GPU?",
      answer: "Runtime",
      hint: "It's the same menu you'd use to restart or manage your notebook's execution environment."
    }
  ]
},
{
  id: "colab-first-model",
  title: "Training Your First Model in Colab",
  icon: "🧪",
  difficulty: "Medium",
  tags: ["ai", "google-colab", "scikit-learn"],
  description: "Write and run a tiny real machine learning example in Google Colab using Python and scikit-learn, from raw data to a trained model.",
  tasks: [
    {
      title: "From No-Code to Real Code",
      points: 0,
      content: `
    <p>Everything so far in this course has been no-code. This room takes the same ideas —
    classes, training, prediction — and shows what they look like as a few lines of real
    Python, using <b>scikit-learn</b>, a free machine learning library that comes
    preinstalled in every Colab notebook.</p>
    <p>Open a fresh notebook at colab.research.google.com and follow along by typing each
    snippet into its own code cell.</p>
  `
    },
    {
      title: "Loading Data and Fitting a Model",
      points: 15,
      content: `
    <p>Type the following into a code cell and run it:</p>
    <pre>from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier

data = load_iris()
model = DecisionTreeClassifier()
model.fit(data.data, data.target)</pre>
    <p>This loads a small, built-in flower-measurement dataset, creates a decision tree
    classifier, and then calls <code class="inline">fit()</code> to train it. That single call
    is the training step: the model looks at the measurements (<code class="inline">data.data</code>)
    alongside the correct species (<code class="inline">data.target</code>) and learns the
    pattern between them.</p>
  `,
      question: "In scikit-learn, what is the name of the method used to train a model on data?",
      answer: "fit",
      hint: "It's the method call right after you create the model object."
    },
    {
      title: "Making a Prediction",
      points: 15,
      content: `
    <p>In a new cell, try asking the trained model to guess the species of a single new
    flower measurement:</p>
    <pre>print(model.predict([data.data[0]]))</pre>
    <p>The <code class="inline">predict()</code> method is inference in action: it hands a
    brand-new (or in this case borrowed) example to your already-trained model and returns its
    best guess, with no further training involved.</p>
  `,
      question: "What scikit-learn method do you call to get predictions from an already-trained model?",
      answer: "predict",
      hint: "It's the counterpart to fit — used after training, not during it."
    },
    {
      title: "Don't Grade Your Own Homework",
      points: 20,
      content: `
    <p>The example above tested the model on data it had already seen during training, which
    can make it look better than it really is. In real projects, you split your dataset into a
    training set and a separate testing set, so you can check performance on examples the
    model has never encountered.</p>
    <p>scikit-learn provides a ready-made helper for exactly this, found in
    <code class="inline">sklearn.model_selection</code>.</p>
  `,
      question: "What is the name of the scikit-learn function commonly used to split data into training and testing sets?",
      answer: "train_test_split",
      hint: "Its name literally describes what it does."
    }
  ]
},
{
  id: "intro-to-kaggle",
  title: "Intro to Kaggle: Datasets & Notebooks",
  icon: "📊",
  difficulty: "Easy",
  tags: ["ai", "kaggle", "datasets"],
  description: "Create a free Kaggle account and explore the public datasets and notebooks that other people around the world have shared.",
  tasks: [
    {
      title: "A Hub for Data and Code",
      points: 0,
      content: `
    <p>Kaggle is a free platform packed with public datasets, shared code notebooks, and
    friendly competitions, all built around real machine learning work. It's a great place to
    find data to practice on and to see how other people actually solve problems.</p>
    <p>Visit kaggle.com to create a free account before continuing.</p>
  `
    },
    {
      title: "Signing Up for Free",
      points: 10,
      content: `
    <p>Click 'Register' and create an account using an email address or an existing Google
    account. There's no payment information required and no paid tier needed for anything in
    this course — datasets, notebooks, and Kaggle Learn are all free.</p>
    <p>Once signed in, use the search bar to look for a beginner-friendly dataset, such as one
    about housing prices or the Titanic passenger list.</p>
  `,
      question: "What must you create for free on Kaggle before you can download datasets or run notebooks?",
      answer: "an account",
      hint: "It costs nothing and only needs an email address."
    },
    {
      title: "Reading a Dataset Page",
      points: 10,
      content: `
    <p>Open any dataset's page and look at its 'Data Card': a description of what the data
    contains, its license, and its file structure. Then click over to the 'Code' tab attached
    to that dataset to see notebooks other users have published using it.</p>
    <p>Kaggle's hosted, shareable notebooks are officially called Notebooks today, but you'll
    still often hear them called by their older, informal name.</p>
  `,
      question: "What are Kaggle's hosted, shareable code notebooks historically also known as?",
      answer: "kernels",
      hint: "This older nickname is still used casually even though the feature is now labeled 'Notebooks'."
    },
    {
      title: "Running Someone Else's Notebook",
      points: 15,
      content: `
    <p>Open one of the notebooks you found and look for a button that lets you make your own
    editable copy of it, rather than only viewing it. Kaggle provides free compute (including
    optional GPUs) to run your copy, similar to what Google Colab offers.</p>
    <p>This is one of the fastest ways to learn: start from someone else's working example and
    tweak it, instead of writing everything from a blank notebook.</p>
  `,
      question: "What button do you click on a Kaggle notebook to create your own editable copy of it?",
      answer: "Copy and Edit",
      hint: "It's the option that turns 'someone else's notebook' into 'your own notebook'."
    }
  ]
},
{
  id: "kaggle-learn-path",
  title: "Kaggle Learn: Free Micro-Courses",
  icon: "🎓",
  difficulty: "Easy",
  tags: ["ai", "kaggle", "kaggle-learn"],
  description: "Discover Kaggle Learn's free, bite-sized micro-courses for going deeper into machine learning with hands-on, in-browser exercises.",
  tasks: [
    {
      title: "Short Courses, Real Exercises",
      points: 0,
      content: `
    <p>Kaggle Learn is a collection of free micro-courses covering topics like Python, pandas,
    data visualization, and machine learning. Each course is broken into short lessons with a
    hands-on coding exercise at the end of every one.</p>
    <p>Go to kaggle.com/learn to see the full list of available courses.</p>
  `
    },
    {
      title: "Finding Intro to Machine Learning",
      points: 10,
      content: `
    <p>Browse the course list and open the one called 'Intro to Machine Learning'. Look at its
    outline: it walks through ideas like decision trees, model validation, underfitting and
    overfitting, and random forests, in a logical, beginner-friendly order.</p>
    <p>This course is a natural next step after the hands-on rooms in this track, since it puts
    real code behind concepts like 'training' and 'prediction' that you've already practiced
    with no-code tools.</p>
  `,
      question: "What is the name of Kaggle Learn's beginner course covering decision trees and model validation?",
      answer: "Intro to Machine Learning",
      hint: "Its title says exactly what it teaches."
    },
    {
      title: "Where the Exercises Actually Run",
      points: 10,
      content: `
    <p>Open the first lesson of any Kaggle Learn course and scroll to its exercise. You don't
    need to install anything or switch to a separate app — the exercise is an embedded
    notebook that runs right there in your browser, with instant feedback on your code.</p>
    <p>That tight loop of 'read a short lesson, then immediately try it' is what makes Kaggle
    Learn courses fast to get through compared to a traditional textbook.</p>
  `,
      question: "Where do you complete Kaggle Learn's hands-on exercises?",
      answer: "directly in the browser",
      hint: "No separate app or install is needed — think about what you've been using this whole course."
    },
    {
      title: "Finishing a Course",
      points: 15,
      content: `
    <p>Work through a course's lessons in order, completing each exercise as you go. When you
    finish the final lesson, Kaggle awards you something to mark the achievement and show
    others what you've learned.</p>
    <p>It's a small thing, but it's a nice, concrete way to track your own progress as you work
    through multiple free micro-courses over time.</p>
  `,
      question: "What do you receive after completing a Kaggle Learn course?",
      answer: "a certificate",
      hint: "It's a shareable proof of completion, similar to what many online courses offer."
    }
  ]
},
{
  id: "hugging-face-spaces",
  title: "Hugging Face: Trying a Pretrained Model",
  icon: "🤗",
  difficulty: "Medium",
  tags: ["ai", "hugging-face", "pretrained-models"],
  description: "Try a real pretrained AI model instantly using a free Hugging Face Space, with no training, installs, or account required.",
  tasks: [
    {
      title: "Thousands of Ready-Made Demos",
      points: 0,
      content: `
    <p>Hugging Face Spaces hosts thousands of free, shareable demo apps that let you try
    pretrained AI models — image classifiers, text generators, chatbots, and more — directly
    in your browser. Many Spaces work without creating an account at all.</p>
    <p>Browse to huggingface.co/spaces to see what's available before continuing.</p>
  `
    },
    {
      title: "Finding a Space",
      points: 15,
      content: `
    <p>Use the search or filters on the Spaces page to find one that matches a task you're
    curious about, such as image classification or text generation. Open one and look at its
    simple, ready-made interface: a box or upload area for input, and a result shown right
    below it.</p>
    <p>These interfaces are what Hugging Face calls Spaces — a hosted, interactive demo built
    on top of a real underlying model.</p>
  `,
      question: "What are Hugging Face's free hosted demo apps for trying models called?",
      answer: "Spaces",
      hint: "It's the same word used in the room title and the site's URL."
    },
    {
      title: "Trying a Pretrained Model",
      points: 15,
      content: `
    <p>Enter your own input into the Space — a sentence, a photo, whatever it accepts — and
    read the result it generates. Notice that you didn't train anything yourself; the model
    behind the Space was already trained by someone else on a large dataset before you ever
    arrived.</p>
    <p>A model that's ready to use as-is, without any training on your part, is called a
    <b>pretrained</b> model. It's the AI equivalent of buying a finished tool instead of
    forging one from scratch.</p>
  `,
      question: "What term describes a model that has already been trained by someone else and is ready to use as-is?",
      answer: "pretrained",
      hint: "The prefix tells you the training already happened, before you got involved."
    },
    {
      title: "What's Powering the Interface",
      points: 20,
      content: `
    <p>Most Hugging Face Spaces aren't built from scratch — creators commonly use one of two
    popular, beginner-friendly Python libraries to wrap a model in a simple web interface:
    <b>Gradio</b> or <b>Streamlit</b>. Both let someone go from a working model to a shareable
    web demo in a small amount of code.</p>
    <p>Next time you open a Space, look near the bottom of the page — it often quietly credits
    which of the two frameworks was used to build it.</p>
  `,
      question: "Name one of the two popular Python libraries commonly used to build the interactive UI of a Hugging Face Space.",
      answer: "Gradio",
      hint: "The other valid answer is Streamlit — either one counts."
    }
  ]
},
{
  id: "ml5js-in-browser",
  title: "ml5.js: Running Machine Learning in the Browser",
  icon: "🌐",
  difficulty: "Medium",
  tags: ["ai", "ml5js", "javascript"],
  description: "Learn how ml5.js lets you run machine learning models, including ones you trained yourself, directly on a web page in a few lines of code.",
  tasks: [
    {
      title: "Machine Learning for Web Developers",
      points: 0,
      content: `
    <p>ml5.js is a free, beginner-friendly JavaScript library built on top of TensorFlow.js. It
    wraps common machine learning tasks — like image classification, pose detection, or
    running your own exported model — into a handful of simple function calls, so you don't
    need a deep math or data science background to get started.</p>
    <p>Browse ml5js.org to see its documentation and examples before working through the steps
    below.</p>
  `
    },
    {
      title: "Loading a Built-In Model",
      points: 15,
      content: `
    <p>A basic ml5.js image classifier can be set up with just a few lines of JavaScript:</p>
    <pre>let classifier;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
}

function gotResult(error, results) {
  console.log(results);
}</pre>
    <p>Here, <code class="inline">'MobileNet'</code> refers to a well-known pretrained image
    classification model bundled with ml5.js, so you can recognize thousands of everyday
    objects without training anything yourself.</p>
  `,
      question: "What is the name of the pretrained image-classification model commonly bundled with ml5.js?",
      answer: "MobileNet",
      hint: "It's the string passed directly into ml5.imageClassifier() in the example above."
    },
    {
      title: "Loading Your Own Teachable Machine Model",
      points: 15,
      content: `
    <p>ml5.js isn't limited to built-in models. If you exported a Teachable Machine project as
    a shareable web link, you can load that exact link instead of a built-in name, and
    ml5.imageClassifier() will run your own custom-trained model instead of MobileNet.</p>
    <p>This is how a model you trained by showing your webcam a few objects turns into
    something that can run live on any web page you build.</p>
  `,
      question: "What must you pass to ml5.imageClassifier() to use a model you trained yourself in Teachable Machine, instead of the built-in model?",
      answer: "your exported model's URL",
      hint: "Think back to what Teachable Machine's Export tab can generate for you to share."
    },
    {
      title: "Getting a Prediction",
      points: 20,
      content: `
    <p>Once a classifier is loaded, you get its actual prediction by calling one more method on
    it, passing in an image or video element and a callback function to receive the results,
    such as the <code class="inline">gotResult</code> function shown earlier.</p>
    <p>That single method call is the entire inference step — everything about training and
    architecture is hidden away behind it, which is exactly the point of a beginner-friendly
    library like ml5.js.</p>
  `,
      question: "What method do you call on an ml5.js classifier object to get its prediction for an image?",
      answer: "classify",
      hint: "The method name is a simple verb describing exactly what it does."
    }
  ]
},
{
  id: "computer-vision-concepts",
  title: "Computer Vision Concepts",
  icon: "👁️",
  difficulty: "Medium",
  tags: ["ai", "computer-vision", "concepts"],
  description: "Understand how computers actually see images as grids of numbers, and how models learn to recognize edges, shapes, and objects within them.",
  tasks: [
    {
      title: "An Image Is Just Numbers",
      points: 0,
      content: `
    <p>To a computer, a photo isn't a picture at all — it's a grid of numbers. Each tiny square
    in that grid, called a pixel, stores a numeric brightness or color value. Computer vision
    is the branch of AI concerned with finding patterns in that grid of numbers well enough to
    recognize edges, shapes, and eventually whole objects.</p>
    <p>Every image classifier you've trained so far in this course, including Teachable
    Machine's webcam models, is really just learning patterns across grids of numbers like
    these.</p>
  `
    },
    {
      title: "Pixels and Color Channels",
      points: 15,
      content: `
    <p>A standard color photo is made of a grid of pixels, and each pixel usually stores three
    separate numbers, one each for red, green, and blue intensity. Mixing different amounts of
    those three colors produces every shade you see on screen.</p>
    <p>Stack the height, width, and these color values together, and a single photo is really
    just a large block of numbers waiting to be processed.</p>
  `,
      question: "How many color channels does a standard RGB image have?",
      answer: "3",
      hint: "Each letter in 'RGB' stands for one channel."
    },
    {
      title: "How CNNs Find Patterns",
      points: 15,
      content: `
    <p>Most modern computer vision models are built as <b>convolutional neural networks</b>
    (CNNs). Instead of looking at an entire image at once, a CNN scans small patches across
    it using filters that detect simple features like edges and textures.</p>
    <p>Deeper layers of the network then combine those simple features into more complex ones —
    edges into shapes, shapes into parts, and parts into whole recognizable objects.</p>
  `,
      question: "What is the name of the neural network architecture most commonly used for computer vision tasks like image classification?",
      answer: "convolutional neural network",
      hint: "Its abbreviation is three letters, starting with C."
    },
    {
      title: "Back to Pixels",
      points: 20,
      content: `
    <p>Every time your webcam feeds a frame into a Teachable Machine Image project, or ml5.js
    runs MobileNet on a photo, all of this is happening under the hood: the raw grid of pixel
    numbers is what the model actually processes, long before anything resembling 'seeing' an
    object happens.</p>
    <p>Recognizing this helps demystify computer vision: it's pattern-finding across numbers,
    not literal sight.</p>
  `,
      question: "In computer vision, what is the smallest unit of an image that a model actually processes as a number?",
      answer: "a pixel",
      hint: "It's the term used at the very start of this room."
    }
  ]
},
{
  id: "nlp-concepts",
  title: "Natural Language Processing Concepts",
  icon: "💬",
  difficulty: "Medium",
  tags: ["ai", "nlp", "concepts"],
  description: "Understand how AI models process and generate human language, from breaking text into tokens to how modern chatbots actually work.",
  tasks: [
    {
      title: "Teaching Computers Language",
      points: 0,
      content: `
    <p>Natural language processing (NLP) is the branch of AI focused on understanding and
    generating human language. It powers spam filters, machine translation, search engines,
    voice assistants, and the chatbots so many people use every day.</p>
    <p>Because computers only work with numbers, every NLP system needs a way to turn text
    into something numeric before it can do anything useful with it.</p>
  `
    },
    {
      title: "Breaking Text Into Pieces",
      points: 15,
      content: `
    <p>Before any model can process a sentence, the text is broken into smaller units called
    tokens — often whole words, or sometimes smaller word-pieces. This step is called
    <b>tokenization</b>, and it's the very first thing that happens to your text before a
    language model sees it.</p>
    <p>Different models split text slightly differently, but the underlying idea is the same:
    turn a long stream of characters into a manageable sequence of discrete pieces.</p>
  `,
      question: "What is the term for breaking a piece of text into smaller units before feeding it into an NLP model?",
      answer: "tokenization",
      hint: "The units it produces are called tokens."
    },
    {
      title: "From Tokens to Meaning",
      points: 15,
      content: `
    <p>Once text is tokenized, each token gets converted into a list of numbers called an
    <b>embedding</b>. A good embedding captures meaning: tokens with similar meanings end up
    numerically close to each other, so 'cat' and 'kitten' sit nearer each other than 'cat'
    and 'bicycle' do.</p>
    <p>These numeric embeddings are what a language model actually computes with — not the
    letters or words themselves.</p>
  `,
      question: "What term describes the numeric, vector representation of a word or token that captures its meaning?",
      answer: "an embedding",
      hint: "It's the step that turns tokens into numbers a model can actually compute with."
    },
    {
      title: "How Chatbots Actually Learn",
      points: 20,
      content: `
    <p>Modern large language models, the kind behind popular AI chatbots, are trained on huge
    amounts of text with a surprisingly simple core task: given everything so far, predict the
    single next token. Doing that well, over and over across enormous datasets, turns out to
    require learning an enormous amount about grammar, facts, and reasoning along the way.</p>
    <p>After this core training, models are typically fine-tuned further so they follow
    instructions and hold conversations more naturally, rather than just continuing text.</p>
  `,
      question: "What do large language models fundamentally learn to predict, one step at a time, during training?",
      answer: "the next token",
      hint: "It's the same unit of text produced by the tokenization step."
    }
  ]
},
{
  id: "prompt-engineering-basics",
  title: "Prompt Engineering Basics",
  icon: "✍️",
  difficulty: "Easy",
  tags: ["ai", "prompt-engineering", "chatbots"],
  description: "Learn practical, no-cost techniques for writing clearer, more effective prompts to get better answers out of any AI chatbot.",
  tasks: [
    {
      title: "Talking to an AI Well",
      points: 0,
      content: `
    <p>Prompt engineering is simply the practice of crafting your input to an AI chatbot so it
    gives you a better, more useful response. It doesn't require any special tool or paid
    subscription — just a free chatbot and a bit of technique, which is what this room
    covers.</p>
    <p>A vague prompt tends to get a vague answer, while a clear, specific one steers the model
    toward exactly what you need.</p>
  `
    },
    {
      title: "Giving the AI a Role",
      points: 10,
      content: `
    <p>One simple, effective trick is asking the AI to respond as if it were a specific role,
    such as 'You are an experienced Python tutor explaining this to a beginner.' Framing the
    conversation this way often shifts the tone, vocabulary, and depth of the response to
    match that persona.</p>
    <p>This technique is commonly called <b>role prompting</b> (also known as persona
    prompting), and it's one of the fastest ways to change how an answer feels without
    changing the underlying question much at all.</p>
  `,
      question: "What is the technique called when you ask an AI to respond as if it were a specific role or persona?",
      answer: "role prompting",
      hint: "The name describes exactly what you're assigning the AI to play."
    },
    {
      title: "Showing Examples First",
      points: 10,
      content: `
    <p>Instead of only describing what you want in words, you can include one or two example
    input-output pairs directly in your prompt before asking your real question. Seeing a
    couple of worked examples helps the model pattern-match the exact format, tone, or style
    you're after.</p>
    <p>This technique is known as <b>few-shot prompting</b>, since you're giving the model a
    small ('few') number of example 'shots' to learn the pattern from.</p>
  `,
      question: "What is the term for including a couple of example input-output pairs in your prompt to guide the AI's response format?",
      answer: "few-shot prompting",
      hint: "The name refers to the small number of examples you provide."
    },
    {
      title: "Refining Instead of Restarting",
      points: 15,
      content: `
    <p>If a chatbot's first answer isn't quite right, you don't need to start a new
    conversation from scratch. Simply reply asking it to shorten the answer, add more detail,
    change the tone, or fix a specific mistake — the AI keeps the earlier conversation as
    context for the revision.</p>
    <p>This back-and-forth process of asking the AI to improve its own previous answer is
    called <b>iterative refinement</b>, and it's often faster than trying to write the perfect
    prompt on the very first try.</p>
  `,
      question: "What is the term for asking an AI to improve its own previous answer instead of starting from scratch?",
      answer: "iterative refinement",
      hint: "The word 'iterative' is a big clue — think of it as looping back to improve."
    }
  ]
},
{
  id: "ai-ethics-bias",
  title: "AI Ethics: Bias & Fairness",
  icon: "⚖️",
  difficulty: "Medium",
  tags: ["ai", "ethics", "bias"],
  description: "Understand how bias creeps into training data and models, and why testing, transparency, and documentation matter for responsible AI.",
  tasks: [
    {
      title: "Models Inherit Their Data's Flaws",
      points: 0,
      content: `
    <p>A machine learning model doesn't invent its own values — it learns patterns from the
    data it's trained on. If that data reflects historical inequalities or only represents
    part of the population, the model can reproduce, or even amplify, that bias in its
    predictions.</p>
    <p>This has real consequences: biased hiring tools and facial recognition systems that
    perform worse on some groups than others are well-documented, real-world examples. Building
    fairer AI starts with understanding where these problems come from.</p>
  `
    },
    {
      title: "Garbage In, Bias Out",
      points: 15,
      content: `
    <p>Imagine training a face-recognition model almost entirely on photos of one demographic
    group. It will likely perform noticeably worse on people outside that group, not because
    the algorithm is flawed, but because the training data never gave it enough examples to
    learn from.</p>
    <p>This kind of dataset, which overrepresents some groups and underrepresents others, is
    usually the root cause of biased model behavior — often more so than the specific
    algorithm chosen.</p>
  `,
      question: "What term describes a training dataset that overrepresents some groups and underrepresents others?",
      answer: "an imbalanced dataset",
      hint: "It's the data-side root cause of most model bias, not the algorithm itself."
    },
    {
      title: "Documenting a Model Honestly",
      points: 15,
      content: `
    <p>Responsible AI teams don't just publish a model and hope for the best. Many now publish
    a short, standardized document alongside the model that discloses its intended uses, known
    limitations, the data it was trained on, and its evaluation results across different
    conditions.</p>
    <p>You'll find one of these attached to nearly every model page on Hugging Face — a quick,
    honest summary that helps users decide whether a model is appropriate for their use case.</p>
  `,
      question: "What is the name for a short, standardized document that discloses a model's intended use, limitations, and evaluation results?",
      answer: "a model card",
      hint: "You'll find one on nearly every Hugging Face model page."
    },
    {
      title: "Being Upfront With Users",
      points: 20,
      content: `
    <p>Beyond fixing data and testing across subgroups, responsible AI also means being open
    with the people affected by a system: telling them clearly when they're interacting with
    an AI rather than a human, and being honest about how a model works and what data trained
    it.</p>
    <p>This principle of openness about how and when AI is being used is a core pillar of most
    responsible AI guidelines published by major tech companies and researchers alike.</p>
  `,
      question: "What term describes being open with users about when they're interacting with an AI system and how it works?",
      answer: "transparency",
      hint: "It's the opposite of hiding how a system works from the people using it."
    }
  ]
},
{
  id: "orange-no-code-ml",
  title: "Orange: No-Code Machine Learning Pipelines",
  icon: "🍊",
  difficulty: "Hard",
  tags: ["ai", "orange", "no-code"],
  description: "Build a full, drag-and-drop machine learning workflow, from loading data to evaluating a classifier, using the free Orange Data Mining tool.",
  tasks: [
    {
      title: "Wiring Up Machine Learning Visually",
      points: 0,
      content: `
    <p>Orange is a free, open-source visual data mining and machine learning tool. Instead of
    writing code, you build a workflow by dragging widgets — like File, Data Table, and
    classifiers — onto a canvas and connecting them with wires, so data flows visually from
    one step to the next.</p>
    <p>Browse to orangedatamining.com and download the free desktop application (available
    for Windows, macOS, and Linux) to follow along with the steps below.</p>
  `
    },
    {
      title: "Loading Data With Widgets",
      points: 20,
      content: `
    <p>Open Orange and drag a <b>File</b> widget onto the empty canvas. Double-click it and
    select one of Orange's built-in sample datasets, such as 'iris', which it ships with by
    default.</p>
    <p>Every step in an Orange workflow — loading data, transforming it, training a model, or
    evaluating results — is represented by one of these draggable, connectable boxes, which
    Orange calls a <b>widget</b>.</p>
  `,
      question: "In Orange, what is the visual, connectable building block used to represent a data-processing step called?",
      answer: "a widget",
      hint: "It's the box you drag from the sidebar onto the canvas."
    },
    {
      title: "Previewing Your Data",
      points: 20,
      content: `
    <p>Drag a <b>Data Table</b> widget onto the canvas, then connect it to your File widget by
    dragging a wire from one to the other. Double-click the Data Table widget to open it, and
    you'll see your dataset laid out as familiar rows and columns.</p>
    <p>Checking your data this way, before building anything else, is a quick sanity check
    that helps you catch obviously wrong or missing values early.</p>
  `,
      question: "Which Orange widget lets you preview your loaded dataset as rows and columns?",
      answer: "Data Table",
      hint: "Its name describes exactly what it shows you."
    },
    {
      title: "Adding a Classifier",
      points: 25,
      content: `
    <p>Drag a classifier widget onto the canvas, such as <b>Tree</b> or <b>Naive Bayes</b>, and
    connect your File widget to it. This represents the model you want to train on your
    data — with zero lines of code written so far.</p>
    <p>Now drag a <b>Test and Score</b> widget onto the canvas and connect both your data
    widget and your classifier widget into it. Test and Score runs the classifier on your
    data and reports metrics like accuracy and AUC, letting you evaluate performance visually.</p>
  `,
      question: "Which Orange widget do you use to evaluate and compare classifier performance, such as accuracy and AUC?",
      answer: "Test and Score",
      hint: "Its name describes exactly what it measures."
    },
    {
      title: "Seeing the Whole Pipeline",
      points: 25,
      content: `
    <p>Zoom out and look at your canvas: File connected to Data Table, File connected to a
    classifier, and both feeding into Test and Score. This connected arrangement of widgets and
    wires is exactly the same kind of process you wrote as code in the Colab rooms — load data,
    train a model, evaluate it — just represented visually instead of in Python.</p>
    <p>You could keep extending this same canvas with widgets like Confusion Matrix or ROC
    Analysis further downstream, without writing a single line of code.</p>
  `,
      question: "What overall term describes the connected set of widgets you build on Orange's canvas?",
      answer: "a workflow",
      hint: "It's the same word used to describe the whole connected pipeline, and it appears in this room's own title."
    }
  ]
},
{
  id: "ai-capstone-challenge",
  title: "Capstone: Train, Export, and Ship Your Own Model",
  icon: "🚀",
  difficulty: "Hard",
  tags: ["ai", "capstone", "ml5js"],
  description: "Combine everything you have learned to train a Teachable Machine model and bring it to life on a real, working web page using ml5.js.",
  tasks: [
    {
      title: "From Idea to Shipped Demo",
      points: 0,
      content: `
    <p>This capstone strings together the whole journey from this course: train a model in
    Teachable Machine, export it, and load it into a real web page with ml5.js so it runs
    live for anyone who visits, using only free tools the entire way.</p>
    <p>You'll need teachablemachine.withgoogle.com for training and export, and a basic grasp
    of the ml5.js snippets from the earlier ml5.js room, so revisit that room first if it's
    been a while.</p>
  `
    },
    {
      title: "Train (or Reuse) a Model",
      points: 20,
      content: `
    <p>Open Teachable Machine and either reuse an Image project from an earlier room or start a
    fresh one. Make sure it has at least two classes with recorded webcam samples, then click
    <b>Train Model</b> and confirm it works correctly in the live Preview panel.</p>
    <p>This is exactly the same requirement every Teachable Machine project shares, no matter
    which project type: Image, Audio, or Pose.</p>
  `,
      question: "What must every Teachable Machine project have at least two of before you can train it?",
      answer: "classes",
      hint: "It's the category boxes you name and record samples for."
    },
    {
      title: "Getting a Shareable Model URL",
      points: 20,
      content: `
    <p>On the Export Model tab, choose the TensorFlow.js option and select 'Upload (shareable
    link)' instead of downloading files to your computer. Teachable Machine hosts your model
    on Google's servers and hands you back a link.</p>
    <p>That link is exactly what a piece of ml5.js code needs to load your custom-trained
    model, instead of a built-in one like MobileNet.</p>
  `,
      question: "What does Teachable Machine's export tab generate when you choose to upload and host your model?",
      answer: "a shareable model URL",
      hint: "It's a link you can paste straight into code, rather than a file you download."
    },
    {
      title: "Loading It With ml5.js",
      points: 25,
      content: `
    <p>In an HTML page that has ml5.js included, your model's shared URL slots straight into
    the image classifier function you saw earlier:</p>
    <pre>classifier = ml5.imageClassifier(modelURL, videoElement, modelReady);

function modelReady() {
  console.log('Model loaded!');
}</pre>
    <p>Here, <code class="inline">videoElement</code> can be a live webcam feed on the page,
    so your custom-trained model classifies what it sees in real time, exactly like Teachable
    Machine's own Preview panel — except now it's running on a page you built yourself.</p>
  `,
      question: "What ml5.js method is called to run your custom Teachable Machine model on a live input and get a prediction?",
      answer: "classify",
      hint: "It's the same method you used earlier to get predictions from MobileNet."
    },
    {
      title: "Publishing It for Free",
      points: 25,
      content: `
    <p>A finished HTML page like this doesn't need expensive hosting to go live. A free
    static-hosting service, tied directly to a GitHub repository, can publish it as a real
    website with its own URL that anyone can open in a browser — no installs, no accounts, and
    no cost.</p>
    <p>In fact, this exact kind of free hosting is how sites like this very learning platform
    are commonly published.</p>
  `,
      question: "What is the name of the free static-hosting service that publishes sites straight from a GitHub repository?",
      answer: "GitHub Pages",
      hint: "Its name combines the platform hosting your code with the word for a published web page."
    }
  ]
},
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
  },
  {
    id: "language-internals",
    title: "Language Internals & Idioms",
    icon: "🧠",
    description: "Go beyond the basics with operators, scoping rules, copying semantics, and other core-language idioms.",
    rooms: ["operators-precedence","number-systems","type-casting","boolean-logic","multiple-assignment","string-formatting","escape-sequences","naming-conventions","walrus-operator","ternary-expressions","chained-comparisons","packing-unpacking","swapping-variables","none-and-falsy","identity-vs-equality","mutable-vs-immutable","shallow-deep-copy","variable-scope-legb"]
  },
  {
    id: "collections-data-wrangling",
    title: "Collections & Data Wrangling",
    icon: "🧺",
    description: "Master lists, dicts, sets, tuples, and the collections module for organizing real data.",
    rooms: ["list-methods","list-comprehensions","nested-lists","dict-comprehensions","dict-methods","nested-dictionaries","set-operations","set-comprehensions","named-tuples","collections-counter","collections-defaultdict","collections-deque","collections-chainmap","sorting-data","sorting-custom-objects","zip-and-enumerate"]
  },
  {
    id: "functional-python",
    title: "Functional Python",
    icon: "🧩",
    description: "Write cleaner, more powerful functions with recursion, closures, decorators, and generators.",
    rooms: ["recursion-basics","recursion-practice","map-filter-reduce","closures","decorators-basics","decorators-with-arguments","functools-wraps","functools-lru-cache","generators","generator-expressions","first-class-functions","higher-order-functions","partial-functions","type-hints","scope-in-closures"]
  },
  {
    id: "object-oriented-python",
    title: "Object-Oriented Python",
    icon: "🏗️",
    description: "Go deep on classes: properties, inheritance, dunder methods, dataclasses, and design patterns.",
    rooms: ["class-vs-instance-attrs","classmethods-staticmethods","encapsulation-properties","multiple-inheritance-mro","abstract-base-classes","polymorphism","operator-overloading","eq-and-hash","repr-vs-str","composition-vs-inheritance","mixins","dataclasses","enums","slots","custom-exceptions","singleton-pattern"]
  },
  {
    id: "errors-debugging-logging",
    title: "Errors, Debugging & Logging",
    icon: "🪲",
    description: "Handle failures gracefully and diagnose problems with context managers, pdb, and the logging module.",
    rooms: ["exception-chaining","context-managers","custom-context-managers","assert-debugging","python-debugger-pdb","logging-basics","logging-handlers","warnings-module","traceback-module"]
  },
  {
    id: "text-regex-mastery",
    title: "Text & Regex Mastery",
    icon: "🔤",
    description: "Process and pattern-match text with regular expressions and the string-processing standard library.",
    rooms: ["regex-basics","regex-groups","re-module-functions","string-encoding","text-alignment","template-strings","textwrap-module","difflib-module","string-algorithms-palindrome","anagram-detection","caesar-cipher","word-frequency-counter","csv-string-parsing"]
  },
  {
    id: "files-and-the-os",
    title: "Files & the OS",
    icon: "📁",
    description: "Read, write, and manage files, paths, and archives using Python's OS-facing standard library.",
    rooms: ["pathlib-basics","os-module-basics","csv-files","json-files","pickle-serialization","binary-files","temporary-files","directory-walking","shutil-operations","zip-files"]
  },
  {
    id: "modules-packaging-tooling",
    title: "Modules, Packaging & Tooling",
    icon: "📦",
    description: "Organize code into modules and packages, and use pip, venv, and argparse like a professional.",
    rooms: ["importing-modules","creating-modules","packages-init","pip-and-pypi","virtual-environments","requirements-txt","argparse-cli","sys-module","stdlib-tour"]
  },
  {
    id: "data-structures-algorithms",
    title: "Data Structures & Algorithms",
    icon: "🌳",
    description: "Implement classic data structures and algorithms from scratch — stacks, trees, graphs, and sorting.",
    rooms: ["big-o-notation","arrays-vs-lists","stacks","queues","linked-lists","doubly-linked-lists","binary-trees","binary-search-trees","tree-traversals","heaps-priority-queues","hash-tables-internals","graphs-intro","graph-bfs","graph-dfs","linear-search","binary-search","bubble-sort","selection-sort","insertion-sort","merge-sort","quick-sort","dynamic-programming-intro"]
  },
  {
    id: "testing-python-code",
    title: "Testing Python Code",
    icon: "✅",
    description: "Write reliable code with unittest, pytest, mocking, and test-driven development.",
    rooms: ["intro-to-testing","unittest-basics","pytest-basics","mocking","tdd-concepts","pep8-style","type-checking-mypy"]
  },
  {
    id: "concurrency-performance",
    title: "Concurrency & Performance",
    icon: "⚡",
    description: "Speed things up with threading, multiprocessing, asyncio, profiling, and caching.",
    rooms: ["threading-basics","multiprocessing-basics","gil-explained","asyncio-basics","async-await-syntax","race-conditions","profiling-python","optimizing-performance","caching-strategies"]
  },
  {
    id: "data-analysis-python",
    title: "Data Analysis with Python",
    icon: "📊",
    description: "Analyze and visualize data using NumPy, Pandas, Matplotlib, and the statistics module.",
    rooms: ["intro-to-numpy","numpy-arrays","intro-to-pandas","pandas-dataframes","filtering-with-pandas","groupby-pandas","reading-csv-pandas","data-cleaning-basics","intro-to-matplotlib","plotting-basic-charts","datetime-module","random-module","statistics-module"]
  },
  {
    id: "web-development-apis",
    title: "Web Development & APIs",
    icon: "🌐",
    description: "Consume and build web APIs, scrape pages, and create your first Flask application.",
    rooms: ["http-basics","requests-library","consuming-rest-api","json-apis","web-scraping-basics","intro-to-flask","flask-routes","flask-templates","building-simple-api","sockets-basics","url-parsing","web-scraping-ethics"]
  },
  {
    id: "databases-with-python",
    title: "Databases with Python",
    icon: "🗄️",
    description: "Store and query data with SQL and sqlite3, and understand ORMs and transactions.",
    rooms: ["intro-to-sql","sqlite3-basics","crud-with-sqlite","orm-concepts","database-design-basics","transactions-commits"]
  },
  {
    id: "security-fundamentals",
    title: "Security Fundamentals",
    icon: "🔐",
    description: "Learn defensive security practices in Python: hashing, secrets, validation, and safe file handling.",
    rooms: ["hashing-hashlib","password-hashing","secrets-module","input-validation","secure-file-handling","env-secrets-management","basic-python-ctf"]
  },
  {
    id: "automation-and-gui",
    title: "Automation & GUI",
    icon: "🤖",
    description: "Build desktop GUIs and automate everyday tasks: spreadsheets, emails, and scheduled scripts.",
    rooms: ["intro-to-tkinter","building-gui-app","automating-tasks","working-with-excel","sending-emails","task-scheduling"]
  },
  {
    id: "ai-and-machine-learning",
    title: "AI & Machine Learning",
    icon: "🤖",
    premium: true,
    description: "A hands-on, no-backend-required tour of AI/ML using free tools: Teachable Machine, TensorFlow Playground, Colab, Kaggle, Hugging Face, ml5.js, and Orange.",
    rooms: ["ai-ml-intro","teachable-machine-image","teachable-machine-sound","teachable-machine-pose","teachable-machine-export","neural-networks-playground","quick-draw-ai","intro-to-colab","colab-first-model","intro-to-kaggle","kaggle-learn-path","hugging-face-spaces","ml5js-in-browser","computer-vision-concepts","nlp-concepts","prompt-engineering-basics","ai-ethics-bias","orange-no-code-ml","ai-capstone-challenge"]
  }
];

/* Paths must be completed in this order — a path is locked until every room in
   the previous path is complete. Rooms inside an unlocked path can be tackled
   in any order (they're independent hands-on challenges). */
const PATH_ORDER = [
  "python-fundamentals",
  "practical-python",
  "language-internals",
  "collections-data-wrangling",
  "functional-python",
  "object-oriented-python",
  "errors-debugging-logging",
  "text-regex-mastery",
  "files-and-the-os",
  "modules-packaging-tooling",
  "data-structures-algorithms",
  "testing-python-code",
  "concurrency-performance",
  "data-analysis-python",
  "web-development-apis",
  "databases-with-python",
  "security-fundamentals",
  "automation-and-gui",
  "ai-and-machine-learning"
];

/* Challenges are a SEPARATE feature from paths — always open, never gated,
   pick any of them in any order regardless of path progress. They are not
   listed in any path's `rooms` array, so getPathForRoom() returns null for
   them and isRoomUnlocked() treats them as permanently unlocked. */
const CHALLENGE_ROOM_IDS = ["challenge-fizzbuzz","challenge-palindrome","challenge-prime-checker","challenge-fibonacci","challenge-factorial","challenge-reverse-string","challenge-anagram","challenge-dedup-list","challenge-matrix-transpose","challenge-word-count","challenge-temp-converter","challenge-calculator","challenge-number-guess","challenge-rock-paper-scissors","challenge-todo-cli","challenge-password-generator"];

function getChallengeRooms() {
  return CHALLENGE_ROOM_IDS.map(getRoom).filter(Boolean);
}

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

/* ---- Sequential path locking ---- */
function getPathForRoom(roomId) {
  return PATHS.find(p => p.rooms.includes(roomId)) || null;
}

/* ---- Premium (independent of sequential locking) ----
   A room is premium if it's flagged directly, or its whole path is (like
   ai-and-machine-learning). Premium rooms are always excluded from the
   "must finish everything to unlock the next path" requirement, so a free
   user is never trapped behind paywalled content mixed into a path. */
function isRoomPremium(roomId) {
  const room = getRoom(roomId);
  if (!room) return false;
  if (room.premium) return true;
  const path = getPathForRoom(roomId);
  return !!(path && path.premium);
}

function isUserPremium() {
  return !!getProgress().isPremium;
}

/* The rooms in a path that a FREE user is actually required to finish to
   advance to the next path — i.e. every room except the premium ones. */
function pathFreeRoomIds(path) {
  return path.rooms.filter(rid => !isRoomPremium(rid));
}

function isPathUnlocked(pathId) {
  const idx = PATH_ORDER.indexOf(pathId);
  if (idx <= 0) return true; // first path (or an unlisted/legacy path) is always open
  const prevPath = getPath(PATH_ORDER[idx - 1]);
  if (!prevPath) return true;
  const freeIds = pathFreeRoomIds(prevPath);
  if (freeIds.length === 0) return true; // an all-premium path blocks nothing for free users
  return freeIds.every(rid => roomIsComplete(getRoom(rid)));
}

function isRoomUnlocked(roomId) {
  const path = getPathForRoom(roomId);
  if (!path) return true; // room isn't part of any tracked path — never gated
  return isPathUnlocked(path.id);
}

/* Full access = past the sequential gate AND (not premium, or premium but paid). */
function isRoomAccessible(roomId) {
  return isRoomUnlocked(roomId) && (!isRoomPremium(roomId) || isUserPremium());
}

/* The first path in PATH_ORDER whose FREE rooms aren't all complete yet —
   used for "continue where you left off" CTAs. A path stuck on a premium
   room a free user hasn't bought doesn't count as "still active" forever.
   Returns null once every path's free content is done. */
function currentActivePath() {
  for (const id of PATH_ORDER) {
    const path = getPath(id);
    if (!path) continue;
    const freeIds = pathFreeRoomIds(path);
    if (freeIds.length === 0) continue; // fully premium path — not a "next up for free users" stop
    if (freeIds.some(rid => !roomIsComplete(getRoom(rid)))) return path;
  }
  return null;
}
