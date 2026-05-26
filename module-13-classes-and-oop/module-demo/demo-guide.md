# Demo Guide — Module 13 Combined: Classes and OOP
**Module 13 — JavaScript Fundamentals**
**Type:** Module demo (combined)
**Duration:** 12–15 minutes
**Files:** `module-demo/script.js` (run in Node)

---

## What This Demo Teaches

Students see every OOP concept from Module 13 working together in a single cohesive system: a User base class with private email and a static counter, a Student subclass with private score, validated setter, computed grade getter, a static factory method, an Instructor subclass demonstrating polymorphism, and a final section integrating array HOFs from Module 12 with class instances.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`

---

## Demo Steps

### Part 1 — Static Factory + Private Fields

> *"We're building from a CSV import — real scenario. Ask: why would we make fromCSV a static method instead of a regular function?"*

Run Part 1. Show `Student.fromCSV(...)` parsing the CSV line and creating a proper Student instance. Show `amara.getInfo()` calling the Student version (which calls `super.getInfo()`). Show that `amara.score` works (getter) but `amara.#score` would throw.

> *"The factory belongs to the class conceptually — it creates Students. It doesn't need an existing instance. The #score and #email fields are locked down; you read them through getters only."*

---

### Part 2 — Getter + Setter with Validation

> *"Ask: what happens if we try to set score to 110?"*

Run Part 2. Show `chidi.grade` returning "Fail" at score 45. Show `chidi.score = 55` updating successfully — grade changes to "Borderline". Show the try/catch: setting `chidi.score = 110` throws "Score must be 0–100".

> *"The setter is the gatekeeper. It looks like a property assignment — `chidi.score = 55` — but code runs behind the scenes. Invalid values never reach the private field. This is the power of combining private fields with setters."*

---

### Part 3 — Inheritance + Polymorphism

> *"Watch what happens when we call getInfo() on an array of mixed types."*

Run Part 3. Show each user calling its own `getInfo()` — Students show course and grade, Instructor shows subject.

> *"Same method name, different behaviour depending on the class. The forEach doesn't care what type each user is — it just calls getInfo(). This is polymorphism."*

---

### Part 4 — Static Properties

> *"How many users have we created total?"*

Run Part 4. Show `User.count` is 5 (4 students + 1 instructor). Show `User.getCount()`.

> *"Every subclass constructor calls `super(...)` which calls User's constructor — where `User.count++` lives. The static counter tracks all users regardless of subclass. This is shared state on the class itself."*

---

### Part 5 — HOF Integration

> *"Classes create objects. HOFs process arrays of those objects. They work together naturally."*

Run Part 5. Show the class average calculation with reduce. Show filter finding passing students. Show the sorted leaderboard using spread + sort + map.

> *"Notice `[...students].sort(...)` — we spread first because sort mutates. The getter `s.score` and `s.grade` work seamlessly inside callbacks. This is Modules 12 and 13 working together — exactly how real applications are built."*

---

## Teaching Tips

- **Connect to Module 12** — explicitly name the HOF methods used: reduce for totals, filter for subsets, sort+map for ranked output. Students should see these aren't separate topics — they compose.
- **Static counter tracks all subclasses** — point out that `User.count` increments from Student and Instructor constructors because both call `super()`.
- **Setter looks like assignment** — repeat this: `chidi.score = 55` triggers code. Students confuse it with plain property writes at first.
- **Polymorphism payoff** — the forEach loop in Part 3 is the clearest demo of why inheritance matters. One loop handles all types correctly.

---

## What's Next

**Module 14** → Asynchronous JavaScript Basics — timers, callbacks, and the event loop.
