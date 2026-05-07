# Demo Guide — Module 6 Combined Demo: Control Flow: Loops
**Module 6 — JavaScript Fundamentals**
**Type:** End-of-module live walkthrough
**Duration:** 15–18 minutes
**Files:** `script.js`

---

## What This Demo Teaches

The module demo pulls every loop type and control keyword from Module 6 into a single Jumia order dataset. Students see the same orders processed in six different ways — which makes the choice between loop types concrete. The progression: classic for loop (index needed), for...of accumulator (values needed), for...of with continue (skip cancelled), for...of with break (find first), for...in (inspect keys), while loop with safety conditions (budget-constrained processing). No new concepts — only patterns from Topics 1–4 combined.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Review the orders array — 7 orders, mix of delivered/cancelled/pending statuses
3. Run once to confirm all 6 parts output correctly
4. Note: Part 2 total should be ₦29100 (4500 + 1200 + 600 + 3300 + 12000 + 7500 — excludes ORD-003 cancelled ₦8000)

---

## Demo Steps

### Part 1 — for Loop (Index Needed)

> *"Part 1 uses the classic for loop. Why not for...of? Because we need i to print 'Order 3 of 7'. We need the index for the display label."*

Run Part 1. Show the numbered list.

> *"Orders.length is 7. i goes from 0 to 6. We add 1 to i for the display. This is the one scenario where the classic for loop is still the right choice."*

---

### Part 2 — for...of Accumulator (Revenue Total)

> *"Part 2 totals revenue — but only for non-cancelled orders. Ask: which order gets skipped?"*

Run Part 2. Show: ORD-003 (cancelled, ₦8000) is excluded — total is ₦29100.

> *"The if inside the loop filters by status. We don't need i here — we just need each order object. for...of is the cleaner choice."*

---

### Part 3 — for...of with continue (Active Orders)

> *"Part 3 prints all active orders but skips cancelled ones using continue. Ask: how many lines do we expect?"*

Run Part 3. Show: ORD-003 skipped, 6 active orders printed.

> *"continue skips the current iteration and moves to the next. ORD-003 logs a skip message but never gets the full display line."*

---

### Part 4 — for...of with break (First Pending)

> *"Part 4 finds the first pending order and stops. Which order is it?"*

Run Part 4. Show: ORD-005 (Emeka Eze) is the first pending.

> *"break exits after finding it. ORD-006 and ORD-007 are never checked. We also used a variable `firstPending` to carry the found order out of the loop — a common pattern when you need to use the result after the loop ends."*

---

### Part 5 — for...in (Object Keys)

> *"Part 5 uses for...in to inspect the first order. Ask: what are the keys of an order object?"*

Run Part 5. Show: id, customer, item, amount, status.

> *"for...in gives us each key as a string. We use bracket notation `sampleOrder[key]` to get the value. This pattern is useful for logging, debugging, or building a display from a dynamic object without knowing its keys in advance."*

---

### Part 6 — while Loop with Safety Conditions

1. **Ask before running:**

> *"shippingBudget starts at ₦15,000. Each order costs ₦500 to ship. The loop has two conditions: budget >= cost AND shipped < orders.length. How many orders will be shipped?"*

2. Run Part 6. Show: All eligible orders shipped (cancelled ORD-003 doesn't consume budget), final budget shown.

> *"The while loop keeps going while both conditions are true. The cancelled order doesn't consume budget — we increment shipped but not the budget deduction. This is real logistics logic: process until money runs out or orders run out, whichever comes first."*

---

## Teaching Tips

- **Connect to the decision framework** from Slide 6 of Topic 4 — ask students which loop they would use before showing each part
- **Part 4's `firstPending = null` pattern** is important: setting a variable before the loop, updating it inside, using it after — students will use this constantly for search operations
- **The while loop in Part 6** uses two conditions with &&, which echoes the safety net pattern from Topic 4 — reinforce that `shipped < orders.length` is the max-iteration guard

---

## What's Next

**Task 50** → Module 6 Assessment & Project JSONs
