# Demo Guide — for...of & for...in Loops
**Module 6, Topic 3 of 4 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see the two modern loop syntaxes in context: for...of replacing the verbose classic for loop for array iteration, for...of applied to strings character by character, and for...in revealing an object's keys one by one. Part 5 runs both on related data simultaneously so students can directly compare what each produces — the clearest way to cement the distinction between "values from an array" vs "keys from an object."

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all five parts output correctly

---

## Demo Steps

### Part 1 — for...of on an Array

1. **Ask before running:**

> *"Compare the for...of loop to the classic for loop we used in Topic 1. What's missing from the for...of header? What do we gain?"*

2. Run Part 1. Show the prices printing cleanly.

> *"No i, no i < prices.length, no i++. We just said 'for each price in prices'. The loop knows how many items are in the array and handles the iteration. When would we still choose the classic for loop? When we need i — for example, to print 'Item 3 of 5' or to access both items[i] and prices[i] at the same index."*

---

### Part 2 — Accumulator with for...of

1. **Ask before running:**

> *"cartTotal is declared before the loop. The loop uses for...of on the cart array. What does each product give us — the string 'Wireless Earbuds', or the whole object?"*

2. Run Part 2. Show the running total building.

> *"The whole object — `{ item: 'Wireless Earbuds', price: 4500 }`. So we write `product.price` to get just the price. The accumulator pattern works exactly the same with for...of as it did with the classic for loop — the only change is the loop header."*

---

### Part 3 — for...of on a String

1. **Ask before running:**

> *"'Amara' has 5 characters. How many vowels? Predict before we run."*

2. Run Part 3. Show each character classified and final count of 3.

> *"Strings are iterable — for...of gives us one character at a time. The .includes() check on the vowels string is clean: rather than writing five comparisons with ||, we put all vowels in a string and check membership with .includes(). Character-by-character processing is a common interview pattern."*

---

### Part 4 — for...in on an Object

1. **Ask before running:**

> *"The student object has 4 keys. What will for...in give us as the loop variable — the key or the value?"*

2. Run Part 4. Show: `name: Chidi Nweke`, `course: JavaScript Fundamentals`, etc.

> *"The key — a string. And we use `student[key]` with bracket notation to get the value. Ask: why not `student.key`? Because key is a variable. `student.key` looks for a property literally called 'key', which doesn't exist. `student[key]` evaluates key first, getting the string 'name', then looks up `student['name']`."*

---

### Part 5 — Side-by-Side Comparison

1. **Ask before running:**

> *"We have the same cart data. for...of runs on the whole cart array. for...in runs on a single cart item. What's different about what they produce?"*

2. Run Part 5. Show: for...of gives the full objects; for...in gives "item →" and "price →" keys.

> *"for...of on an array gives you each element — each full object. for...in on an object gives you each key — the property names as strings. Two different tools, two different data structures, two different outputs. The decision: array → for...of, object → for...in."*

---

## Teaching Tips

- **The Part 5 comparison is the clearest teaching moment** — run both blocks and point to how the same data produces different output depending on which loop you use
- **Bracket notation confusion** is the most common stumbling block — if students ask why `object.key` doesn't work, write it out: `student.key` literally means "find property named 'key'"; `student[key]` means "evaluate key, then use that as the property name"
- **The for...of on string** surprises students — reinforce that anything iterable works, not just arrays

---

## What's Next

**Task 47** → Slides for break, continue & Avoiding Infinite Loops
