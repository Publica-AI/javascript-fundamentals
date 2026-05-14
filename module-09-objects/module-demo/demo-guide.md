# Demo Guide — Module 9 Combined Demo: Objects
**Module 9 — JavaScript Fundamentals**
**Type:** End-of-module live walkthrough
**Duration:** 15–18 minutes
**Files:** `script.js`

---

## What This Demo Teaches

The module demo builds a complete Publica Academy student management system around a single rich object. Students see: methods with `this` computing and returning values (Part 1), chained nested access for contact details and module history (Part 2), bracket notation with a variable and destructuring (Part 3), for...in and Object.entries iteration filtering out methods and objects (Part 4), a lookup table for grade feedback (Part 5), and dynamic property addition and mutation (Part 6). No new concepts — all patterns from Topics 1–3 combined.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all six parts output correctly
3. Note: student.score starts at 88 (Pass grade) but is updated to 91 in Part 6

---

## Demo Steps

### Part 1 — Access + Methods

> *"The student object has data properties (id, name, score, course) and two nested structures (contact object, modules array). It also has 3 methods. Ask: what does getGrade() return for score 88?"*

Run Part 1. Show all five outputs.

> *"getGrade uses `this.score`. Inside a method, `this` refers to the object. passedModuleCount filters the modules array and returns the count. getSummary chains to getGrade() via `this.getGrade()`."*

---

### Part 2 — Nested Access

> *"Contact is an object inside student. Modules is an array of objects inside student. Ask: what does `student.modules[0].title` give us?"*

Run Part 2. Show: Lagos, email, first module title, whether last module passed.

> *"Chain: student → modules → [index] → property. This is the shape of real API data."*

---

### Part 3 — Dynamic Access

> *"field is the string 'score'. `student[field]` vs `student.field` — what's different?"*

Run Part 3. Show: correct value via brackets; destructuring extracts multiple at once.

> *"Destructuring the contact nested object: `const { email, city } = student.contact`. The same syntax, just applied to a nested object."*

---

### Part 4 — Object Iteration

> *"The for...in loop only logs flat, non-object, non-function properties. Ask: what does `typeof student.modules` return?"*

Run Part 4. Show: only id, name, score, course, contact (wait — contact is an object, filtered out). Then Object.entries on contact shows all three fields.

> *"We filter with `typeof student[key] !== 'object'` to skip nested objects and arrays. Methods are skipped with `!== 'function'`. Object.entries on the contact sub-object then shows all its key-value pairs cleanly."*

---

### Part 5 — Lookup Table

> *"grade is 'Pass'. The lookup table maps grade strings to feedback messages. What does `gradeDescriptions['Pass']` return?"*

Run Part 5. Show: grade + full feedback message.

> *"One bracket access instead of a switch or if/else. The `|| 'Grade not recognised'` fallback handles anything not in the table."*

---

### Part 6 — Modify Object

> *"We add enrollmentDate (new property) and update score to 91. What does getGrade() return now?"*

Run Part 6. Show: updated score 91, new grade still "Pass", enrollment date added.

> *"const doesn't freeze the object — we can add properties, update them, delete them. The method still works because it reads `this.score` at call time — not when defined."*

---

## Teaching Tips

- **Part 1 method chaining** (`this.getGrade()` inside `getSummary`) shows how methods can call each other — a powerful pattern students will use constantly
- **Part 4 typeof filter** is worth explaining in detail — in the real world you'd use a more robust approach, but the filter clearly shows the concept
- **Part 6 mutation effect on method output** is a key insight: methods read `this.score` when called, so they always use the current value — there's no stale data

---

## What's Next

**Task 74** → Module 9 Assessment & Project JSONs
