# Demo Guide — The for Loop
**Module 6, Topic 1 of 4 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see the for loop built up step by step: basic counter → iterating an array → the off-by-one bug demonstrated live → accumulating a cart total. Every part asks for a prediction before running. The off-by-one bug is the critical teaching moment: students see the undefined output first, then understand why `<` is always the correct choice over `<=`.

---

## Setup (Before Class)

1. Open `script.js` in VS Code — confirm Part 3 still uses `<=` (the bug version)
2. Run once to confirm output for Parts 1, 2, 4 (Part 3 will show the bug)

---

## Demo Steps

### Part 1 — Basic for Loop

1. **Ask before running:**

> *"This loop: `for (let i = 0; i < 5; i++)`. How many times will it run? What values will i take?"*

2. Run Part 1. Show: 0, 1, 2, 3, 4.

> *"Five iterations. i went from 0 to 4. Why not 5? Because the condition is i < 5 — when i becomes 5, the condition is false and the loop stops."*

---

### Part 2 — Iterating the Array

1. **Ask before running:**

> *"prices.length is 5. The condition is `i < prices.length`. How many iterations? And what does `prices[i]` give us when i = 2?"*

2. Run Part 2. Show the numbered product list.

> *"Notice `i + 1` in the label — that converts from 0-based index to human-readable 'Item 1, 2, 3'. We use i for the index. We add 1 only for display."*

---

### Part 3 — Off-By-One Bug

1. **Ask before running (Part 3 uses `<=`):**

> *"This loop uses `i <= prices.length`. prices.length is 5. How many times will it run? What happens on the last iteration when i = 5?"*

2. Run Part 3 — the `undefined` appears at the end.

> *"There it is — undefined. `prices[5]` doesn't exist. The array only has indices 0 to 4. The `<=` let i reach 5, which is one past the end. This is the off-by-one error."*

3. Change `<=` to `<` and run again. No undefined.

> *"One character. <= vs <. Always use <. Put it in your muscle memory."*

---

### Part 4 — Accumulating Total

1. **Ask before running:**

> *"Where is `let cartTotal = 0` declared? Why outside the loop? What would happen if it were inside?"*

2. Run Part 4. Show the running total building up.

> *"The pattern: declare the accumulator before the loop, update inside, use after. You'll use this for cart totals, score sums, sales reports — any time you need to add up values from an array."*

---

## Teaching Tips

- **The off-by-one bug is the key moment** — don't skip it. Run the buggy version first and let students see the `undefined` before you fix it
- **If students ask why arrays start at 0** — this is a universal convention across most programming languages. Index 0 is the offset from the first element
- **Have students trace manually** for Part 4: "After i=0, cartTotal is 4500. After i=1 it's 5700. Verify." This builds the mental model

---

## What's Next

**Task 43** → Slides for while & do...while Loops
