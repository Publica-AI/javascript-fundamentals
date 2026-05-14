# Demo Guide — Dot Notation and Bracket Notation
**Module 9, Topic 2 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see the two access syntaxes used side by side, then see the critical difference when a variable is used as a key (Part 2). Part 3 shows the practical payoff: a generic displayFields function that works on any object. Part 4 covers existence checking and destructuring — two patterns students will use constantly.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all four parts output correctly
3. The `product.sku-id` line is intentionally commented out — uncomment it live to show the SyntaxError, then re-comment

---

## Demo Steps

### Part 1 — Dot vs Bracket

> *"Both `product.name` and `product['name']` access the same property. What happens with `product['sku-id']`?"*

Run Part 1. Show both accessing "Wireless Earbuds", then SKU-001.

Uncomment `product.sku-id`. Run. Show SyntaxError.

> *"The hyphen is interpreted as subtraction. `product.sku-id` means 'product.sku minus id' — SyntaxError. Re-comment it. Whenever a key has special characters, you must use brackets."*

---

### Part 2 — Variable as Key

1. **Ask before running:**

> *"`field` is the string 'score'. What does `student[field]` give us? What about `student.field`?"*

2. Run Part 2. Show: 88, then undefined.

> *"Bracket evaluates the variable. 'score' → 88. Dot takes the literal text 'field' and looks for a property named 'field' — which doesn't exist → undefined. This distinction is the entire reason bracket notation exists for variables."*

---

### Part 3 — Dynamic Access

> *"displayFields takes any object and any array of keys. It prints each key-value pair. How does it know which property to access? It doesn't — it uses the variable `key` at runtime."*

Run Part 3. Show both calls producing different output from different key arrays.

> *"Same function, different input. This is only possible with bracket notation. With dot notation you'd need to hardcode every key name."*

---

### Part 4 — in and Destructuring

1. **Ask before running:**

> *"`'email' in student` — does the student object have an email property?"*

2. Run Part 4. Show: true/false from `in`, then destructuring outputs.

> *"`in` returns true/false — useful for checking before accessing. Destructuring `const { name, score } = student` extracts both properties at once — equivalent to two separate const assignments but in one line. The rename syntax `{ name: studentName }` extracts 'name' but stores it as 'studentName'. The default `{ email = 'no email' }` kicks in because email doesn't exist."*

---

## Teaching Tips

- **The `student.field` → undefined moment** is the most important demo point — make sure students see it clearly before you explain it
- **Destructuring** is worth spending extra time on because it's ubiquitous in modern JavaScript; practice saying "the value of `name` from `student`" to build the mental model
- **If students ask when to use `in` vs checking for undefined** — `in` is more precise: `"key" in obj` is true even if `obj.key === undefined`, whereas `obj.key !== undefined` would be false for both a missing key and an undefined value

---

## What's Next

**Task 71** → Slides for Iterating Objects: for...in and Object.keys
