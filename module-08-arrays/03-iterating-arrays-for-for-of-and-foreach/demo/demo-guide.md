# Demo Guide — Iterating Arrays: for, for...of & forEach
**Module 8, Topic 3 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 12–15 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see all three iteration approaches on the same data (Part 1), forEach on arrays of objects with and without the index parameter (Part 2), the break limitation of forEach demonstrated with for...of (Part 3), and then the two higher-order methods: map for transformation and filter for subsetting. Parts 4 and 5 are the high-value payoff — students see the power of map and filter over manual for loops.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all five parts output correctly
3. Note: prices.map(price => price * 1.075) gives [4837.5, 1290, 8600, 645, 3547.5]

---

## Demo Steps

### Part 1 — Three Iteration Styles

> *"Three versions, same prices array. They all produce the same output for basic iteration. Ask: which would you use and when?"*

Run Part 1. Show all three producing the same price list.

> *"for loop: use it when you need i for numbering or comparing two arrays. for...of: cleanest when you just need values. forEach: when you're working in a callback/functional style. In practice, for...of and forEach are most common for arrays."*

---

### Part 2 — forEach on Objects

1. **Ask before running:**

> *"The second forEach shows `(order, index)` as parameters. What does index give us?"*

2. Run Part 2. Show: first forEach prints full order lines; second prints "1. Amara Obi" etc.

> *"forEach always provides (element, index) — you can capture the index as the second parameter. Most of the time you only need the element. But when you need numbering without a for loop, this is how."*

---

### Part 3 — break in for...of

> *"Ask: can you put break inside a forEach callback?"*

Run Part 3. Show: for...of stops at ORD-003 (cancelled).

> *"break works in loop statements — for, while, for...of. forEach isn't a loop statement, it's a method call. break inside the callback would try to break out of the callback function itself, which doesn't work. Switch to for...of whenever you need break or continue."*

---

### Part 4 — map

1. **Ask before running:**

> *"prices.map(price => price * 1.075). What does map return? Is the original changed?"*

2. Run Part 4. Show: withVAT is a new array, prices unchanged.

> *"map transforms every element and returns a brand new array. Same length, new values. The original is never touched. Compare this to writing a for loop that builds withVAT manually — map does it in one line."*

Show orderSummaries: ask "how would you build this array without map?" A for loop with .push() — 5 lines. The map version is one.

---

### Part 5 — filter

1. **Ask before running:**

> *"prices.filter(price => price > 3000). Which prices pass? How long is the result?"*

2. Run Part 5. Show: [4500, 8000, 3300] — 3 items; original unchanged.

> *"filter keeps only the elements where the callback returns true. 1200 and 600 are discarded. 4500, 8000, and 3300 pass the test. Result is shorter than the original. And like map, the original is untouched."*

Run delivered orders filter. Show: 3 delivered customers listed.

---

## Teaching Tips

- **Part 4 is the moment students "get" map** — show the for-loop equivalent and let the brevity of map speak for itself
- **The `console.log("Original unchanged:", prices)` after each map/filter call** is intentional — point to it and say "this is why map and filter are safe: they never touch your source data"
- **If students ask about reduce** — it's a common third higher-order method that reduces an array to a single value (like a sum or max); it's in Module 10 (Array HOF) and doesn't need to be covered here

---

## What's Next

**Task 65** → Module 8 combined demo (module-demo)
