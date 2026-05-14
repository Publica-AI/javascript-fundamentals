# Demo Guide — Iterating Objects: for...in and Object.keys
**Module 9, Topic 3 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see all four iteration approaches: for...in, then the three Object static methods. Part 3 combines Object.entries with destructuring — the cleanest modern pattern. Part 4 introduces the lookup table pattern, and Part 5 demonstrates the frequency counter — a classic object-as-accumulator pattern that appears in analytics and reporting code.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all five parts output correctly

---

## Demo Steps

### Part 1 — for...in

> *"for...in gives us each key as a string. We use bracket notation `student[key]` to get the value. Ask: why can't we use dot notation here?"*

Run Part 1. Show all four key-value pairs.

> *"Because `key` is a variable. `student.key` looks for a property literally named 'key' — which doesn't exist. `student[key]` evaluates key, gets the string ('name', 'score', etc.), then looks up that property."*

---

### Part 2 — Object Static Methods

> *"Three methods, three different outputs. What does each return?"*

Run Part 2. Show: array of strings, array of values, array of pairs.

> *"Keys: array of strings. Values: array of values in the same order. Entries: array of two-element arrays, each containing [key, value]. The key advantage: these return real arrays, so we can use .map(), .filter(), .length on them."*

---

### Part 3 — entries + Destructuring

> *"Object.entries returns pairs. We destructure each pair to get key and value directly. Ask: what would `entry[0]` and `entry[1]` give us without destructuring?"*

Run Part 3. Show both forEach and for...of versions.

> *"Both produce the same output. The destructuring `[key, value]` is array destructuring in the callback parameter — it unwraps the pair directly. The for...of version with `const [key, value]` reads very naturally: 'for each key-value pair of the entries of order'."*

---

### Part 4 — Lookup Table

1. **Ask before running:**

> *"getStatusMessage takes a status string and looks it up in the object. What happens when the status isn't in the object — like 'shipped'?"*

2. Run Part 4. Show: three messages including "Unknown status" for 'shipped'.

> *"The `|| 'Unknown status'` fallback handles missing keys. `statusMessages['shipped']` is undefined, and `undefined || 'Unknown status'` gives the fallback string. This is cleaner than a switch with a default case — and adding a new status is just one line in the object."*

---

### Part 5 — Frequency Counter

1. **Ask before running:**

> *"orders has 6 status strings. counts starts empty. What does `counts[status] = (counts[status] || 0) + 1` do when the status is new vs when it already exists?"*

2. Run Part 5. Show: `{ delivered: 3, pending: 2, cancelled: 1 }`.

> *"When the status is new: `counts[status]` is undefined, `undefined || 0` gives 0, +1 = 1. When it already exists: `counts[status]` is the current count (e.g., 1), +1 = 2. This pattern — object as accumulator — works for any frequency counting, grouping by category, or aggregating data."*

---

## Teaching Tips

- **Part 5 frequency counter** is worth walking through manually on the first two or three iterations before running — seeing the increments is more instructive than just seeing the final result
- **The Object.entries + destructuring pattern** (Part 3) is widely used in real code; encourage students to practise it
- **If students ask about Object.assign or spread operator** — `Object.assign(target, source)` and `{...obj}` are object copying patterns covered briefly in later modules; don't go deep here

---

## What's Next

**Task 73** → Module 9 combined demo (module-demo)
