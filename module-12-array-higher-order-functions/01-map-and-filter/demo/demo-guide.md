# Demo Guide — Module 12, Topic 1: map and filter
**Module 12 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node or browser console)

---

## What This Demo Teaches

Students see map and filter applied to realistic student and order data. The four parts progress from simple extraction, to filtering with conditions, to chaining filter then map, to adding computed properties with spread.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run with Node: `node script.js`
3. Or open in browser console via a blank HTML file with `<script src="script.js"></script>`

---

## Demo Steps

### Part 1 — map

> *"We have a students array. Ask: if I want just the score numbers in a new array, what method do I use?"*

Run Part 1. Show scores array `[88, 45, 72, 91, 63]`. Show the formatted labels.

> *"map returns a new array of the same length — 5 students → 5 labels. The withGrade example adds a computed property using the conditional operator. The spread `...s` copies all existing properties first."*

---

### Part 2 — filter

> *"Ask: how many students have a score of 70 or above?"*

Run Part 2. Show 3 passed students. Show paidOrders count = 3. Show highValuePaid IDs.

> *"The callback returns a boolean expression — `s.score >= 70`. Items where the expression is true are kept. Items where false are dropped. The combined condition `&&` narrows it further."*

---

### Part 3 — filter then map

> *"Ask: in what order should we chain — filter then map, or map then filter? Why?"*

Pause for answers. Run Part 3. Show jsPassers names and paidSummaries.

> *"Filter first reduces the array — 5 students → 3 JavaScript passers. Then map only runs on those 3. If we mapped first, we'd do extra work on students we ultimately exclude."*

---

### Part 4 — map with Computed Property

> *"Ask: what does the spread `...o` do inside the map callback?"*

Run Part 4. Show each order with original and VAT-inclusive amounts.

> *"`...o` copies all properties from the order object into the new object. Without it, the result would only have amountWithVAT. With it, we get id, customer, amount, status, AND amountWithVAT — the original plus the new field."*

---

## Teaching Tips

- **Part 1 withGrade** — the nested ternary is a good review of conditional expressions; ask students what grade Chidi gets (score 45 → "Fail")
- **Part 3 chaining** — emphasise the line break style: each chained call on its own indented line; this is standard in production code
- Have students predict the output before running each part — "what will scores look like?" — then verify

---

## What's Next

**Topic 2** → reduce and find — accumulate totals and locate specific elements
