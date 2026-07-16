# Demo Guide — Module 18, Topic 2: Spread & Rest Operators
**Module 18 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node or browser)

---

## What This Demo Teaches

Students see spread for copying/merging arrays and objects (without mutation), rest for collecting remaining elements in destructuring and function parameters, and combined patterns that create clean, immutable utility functions.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`

---

## Demo Steps

### Part 1 — Spread Arrays
Show copy (push to copy doesn't affect original), merge, and sort-without-mutation.

### Part 2 — Spread Objects
Show config merging (right wins), and immutable property update.

### Part 3 — Rest in Destructuring
Show array rest collecting remaining items, object rest collecting remaining properties.

### Part 4 — Rest Parameters
Show variadic function (calculateStats with any number of arguments), and named+rest pattern.

### Part 5 — Combined Patterns
Show addStudent (spread to append immutably) and updateStudent (spread to merge immutably).

---

## Teaching Tips

- **"Original unchanged"** — show this after every spread operation. The proof that spread creates a NEW array/object.
- **Right wins** — repeat for object spread. `{ ...defaults, ...user }` — user's keys override.
- **Spread inside Math.max** — `Math.max(...arr)` is an elegant real-world use that connects spread to a familiar function.
- **Opposite directions** — spread expands (right side), rest collects (left side). Same dots, opposite meaning.

---

## What's Next

**Topic 3** → ES6 Modules: import & export — organizing code across files.
