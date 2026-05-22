# Demo Guide — Module 12, Topic 2: reduce and find
**Module 12 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node or browser console)

---

## What This Demo Teaches

Students see reduce build a running total step by step, then build a frequency counter object. Parts 3 and 4 show find/findIndex for single-element lookup and some/every for boolean questions about the array.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`

---

## Demo Steps

### Part 1 — reduce: Sum

> *"We want the total of all order amounts. Ask: how would you do this with a for loop?"*

Let students describe the for loop (acc = 0, acc += order.amount). Then run Part 1.

> *"reduce does exactly that loop, but in one expression. grandTotal: 29700. The paid-only total uses the conditional: only add if paid. We can compute average from grandTotal and length."*

---

### Part 2 — reduce: Frequency Counter

> *"Ask: what should statusCounts look like after processing all 5 orders?"*

Pause for prediction (3 paid, 1 pending, 1 failed). Run Part 2. Confirm.

> *"The initial value is {} — an empty object. Each iteration: `acc[status] = (acc[status] || 0) + 1`. Walk through step by step for the first two orders."*

---

### Part 3 — find and findIndex

> *"Ask: if I want exactly one student object — the one with id STU-003 — which method do I use?"*

Run Part 3. Show found student, first non-passer, undefined for missing id, index 2 for findIndex.

> *"find returns the element, not an array. findIndex returns the position. The missing lookup returns undefined — always guard before calling properties on a find result."*

---

### Part 4 — some and every

> *"Ask: some checks if... every checks if... fill in the blank."*

Run Part 4. Show all four results.

> *"some: true if at least one matches. every: true if all match. Both are faster than reduce for boolean questions — they stop early once the result is known."*

---

## Teaching Tips

- **Trace Part 1 reduce manually** on a whiteboard with the step table from the slides — this makes the accumulator concept concrete
- **Part 2 frequency counter** — the `(acc[status] || 0) + 1` pattern is worth explaining slowly; it appears in many real codebases
- Contrast `find` vs `filter` explicitly: filter returns all matches as an array, find returns one match as an object

---

## What's Next

**Topic 3** → Chaining Array Methods — combining filter, map, reduce, and find in multi-step pipelines
