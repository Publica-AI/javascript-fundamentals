# Demo Guide — Module 12, Topic 3: Chaining Array Methods
**Module 12 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node)

---

## What This Demo Teaches

Students see multi-step array pipelines applied to PiggyVest payment data. The four parts progress from filter→map display labels, to filter→reduce totals, to filter→sort→map ranked lists, to a complete dashboard stats object built from multiple chained expressions.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`

---

## Demo Steps

### Part 1 — filter → map

> *"We want formatted labels for just the deposit payments. Ask: in what order do we chain — filter or map first?"*

Run Part 1. Show the 4 deposit labels.

> *"Filter first — we reduce the array before transforming. If we mapped first, we'd format all 6 payments and then discard 2 of them."*

---

### Part 2 — filter → reduce

> *"Ask: what are the two conditions for 'Jan deposits'?"*

Pause for answers (type === "deposit" AND month === "Jan"). Run Part 2.

> *"Combined conditions with &&. Chain filter to reduce — no intermediate variable needed. Ask: what is the Jan deposit total? P001 (5000) + P004 (3500) = 8500."*

---

### Part 3 — filter → sort → map

> *"Ask: why do we sort before map, not after?"*

Run Part 3. Show the sorted labels.

> *"Sort before map: we're sorting objects by a numeric property. After map we'd have strings and lose the number for sorting. Sort order: b.amount - a.amount = descending."*

---

### Part 4 — Dashboard Stats

> *"This is a real dashboard — all stats computed from one data source. Ask: how many chained operations does the stats object use?"*

Run Part 4. Show all stats and the net balance.

> *"Five separate expressions, each a clean pipeline. This is how dashboards work in production — compute each metric independently from the same array. Easy to test, easy to read."*

---

## Teaching Tips

- **Ask for predictions** before running each part — have students mentally trace the pipeline
- **Part 4 net balance** — total deposited = P001(5000) + P003(8000) + P004(3500) + P006(6500) = 23000; withdrawals = P002(2000) + P005(12000) = 14000; net = 9000
- Connect back to DOM: "in Module 11, you could call `container.innerHTML = depositLabels.map(l => '<p>' + l + '</p>').join('')` to render this directly on the page"

---

## What's Next

**Module Demo** → Combines all three topics in a Publica Academy student analytics dashboard
