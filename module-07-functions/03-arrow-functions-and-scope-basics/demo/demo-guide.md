# Demo Guide — Arrow Functions & Scope Basics
**Module 7, Topic 3 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see the arrow function syntax transformation from full expression down to the shortest implicit-return form (Part 1), then see arrow functions used as practical one-liners (Part 2). Part 3 is the critical teaching moment: braces with no return produces undefined — the most common arrow function mistake. Parts 4 and 5 demonstrate local vs global scope and why two functions can safely use the same variable name.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all five parts output correctly
3. The `console.log(studentName)` in Part 4 is intentionally commented out — uncomment it live to show the ReferenceError

---

## Demo Steps

### Part 1 — Arrow Syntax Progression

1. **Ask before running:**

> *"All four versions of calculateTax do the same thing. What do we remove at each step?"*

2. Run Part 1. Show: all four log 750.

> *"Step 1: remove `function`, add `=>`. Step 2: one param — parentheses are optional. Step 3: one expression — braces and `return` optional, the expression's value is returned implicitly. All four are identical. In real codebases you'll see all four — especially the shortest form."*

---

### Part 2 — One-Liners

> *"These four utilities are all single-expression arrow functions. Point out the pattern: each takes one input, produces one output. They read almost like English: 'double n is n times 2'."*

Run Part 2. Show all four outputs.

> *"These are the kinds of functions you'll write constantly — quick transformations and checks. They're also the exact syntax used inside .map() and .filter() in Module 8."*

---

### Part 3 — Braces Need Return

1. **Ask before running:**

> *"addNoBraceReturn has braces but doesn't use return. What does it return?"*

2. Run Part 3. Show: undefined, 7, 7.

> *"undefined. The braces tell JavaScript 'this is a block of statements — you need an explicit return.' Without the return keyword, the function runs the addition but throws away the result. This is the most common arrow function bug. Rule: if you use braces, you need return. If you remove the braces, return is implicit."*

---

### Part 4 — Scope

1. **Ask before running:**

> *"platformName is declared outside the function. studentName is declared inside. Which one can showEnrollment access? Which one can the outside code access?"*

2. Run Part 4. Show: showEnrollment runs correctly using both variables; platformName logs fine after.

3. Uncomment `console.log(studentName)`. Run.

> *"ReferenceError — studentName is local to showEnrollment. Once the function finishes, its local variables are gone. The outer code has no access to them. This is scope: inner can see outer, outer cannot see inner."*

4. Re-comment the line.

---

### Part 5 — No Collision

> *"Both functions use a variable named `total`. Ask: do they interfere with each other?"*

Run Part 5. Show: both return different, correct values.

> *"They don't. Each function call creates its own scope — its own private copy of `total`. The `total` in `calculateCartTotal` and the `total` in `calculateTaxTotal` are completely separate variables. Scope is what makes this safe."*

---

## Teaching Tips

- **Part 3 is the critical moment** — the undefined output from braces-without-return is memorable and students will refer back to it when debugging their own arrow functions
- **The uncomment in Part 4** is high-impact: students see the ReferenceError live, which makes the concept stick far better than just describing it
- **Preview for Module 8**: briefly mention that arrow functions will be passed to `.map()`, `.filter()`, and `.find()` — e.g., `prices.map(price => price * 1.075)` — so this syntax will become second nature

---

## What's Next

**Task 57** → Module 7 combined demo (module-demo)
