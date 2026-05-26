# Demo Guide — Module 13, Topic 3: Static Methods and Private Fields
**Module 13 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node)

---

## What This Demo Teaches

Students see three finishing features of JavaScript classes: static methods as factory and utility functions called on the class itself, private fields that block external access to sensitive data, and getters/setters that provide a controlled property-like interface to private state. The bank account and course examples show these features solving real problems rather than being used for their own sake.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`

---

## Demo Steps

### Part 1 — Static Methods

> *"Ask: if you have an array of Student objects, does it make sense for one student to compute the class average? Who does that belong to?"*

Run Part 1. Show `Student.fromCSV("Amara Obi, 88")` creating a real Student instance. Show `Student.getAverage(allStudents)` returning 74.

> *"`fromCSV` is a factory method — it builds a Student from a different data format. `getAverage` is a utility — it works with students in general, not one specific student. Both are called on the class, not an instance. Try `amara.fromCSV(...)` in your head — TypeError, because instances don't have static methods. Real-world examples: `Date.now()`, `Array.from()`, `Number.isInteger()` — all static."*

---

### Part 2 — Private Fields

> *"Ask: what stops someone from writing `account.balance = -1000000` outside the class?"*

Run Part 2. Show `getBalance()` returning `₦50,000`. Show `withdraw(5000, 1234)` succeeding. Show `withdraw(5000, 9999)` returning "Wrong PIN". Show `withdraw(100000, 1234)` returning "Insufficient funds".

> *"Without private fields, nothing stops `account.balance = -1000000` — valid JavaScript. The `#` makes it a SyntaxError outside the class. The PIN check and balance check in `withdraw` are the only authorised path. Point to the commented-out line — uncomment it and run; the engine rejects it immediately."*

Uncomment `console.log(account.#balance)` briefly to show the SyntaxError, then comment it back out.

---

### Part 3 — Getters, Setters, and Static Properties

> *"Notice `jsCourse.price` — no parentheses. It reads like a property. How?"*

Run Part 3. Show `Course.count` returning 2 after both instances are created. Show `jsCourse.price` returning `₦15,000`. Show `jsCourse.priceWithVAT` returning `16125`. Show the assignment `jsCourse.price = 13000` — then `jsCourse.price` returning `₦13,000`. Show `enroll()` incrementing, and `htmlCourse.enrolled` staying at 0.

> *"`Course.count` is shared — every `new Course(...)` increments the same counter on the class. `VAT_RATE` is a constant defined once and used anywhere. The `get price()` runs code when you read `jsCourse.price`. The `set price(newPrice)` runs when you assign `jsCourse.price = 13000` and validates before writing to `#price`. If you pass a negative number the setter throws — the private field is never corrupted."*

---

## Teaching Tips

- **Static vs instance confusion** — ask "does this operation belong to one instance, or to the class as a whole?" before writing static. If you need `this.name`, it's an instance method; if you only work with external data, it's a candidate for static.
- **Private field declaration requirement** — show that `#balance` must be declared at the top of the class body before use; skipping the declaration line is a SyntaxError.
- **Getter no parentheses** — emphasise this: `jsCourse.price` (no `()`), not `jsCourse.price()`. The `get` keyword removes the need.
- **Setter is triggered by assignment** — `jsCourse.price = 13000` *looks* like a simple property write but secretly runs the validation function. That's the power.

---

## What's Next

**Module 13 Combined Demo** → Everything together: a full OOP system using classes, inheritance, static methods, private fields, and getters/setters in a single cohesive example.
