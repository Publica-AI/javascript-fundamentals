# Demo Guide — Module 12 Combined Demo: Array Higher-Order Functions
**Module 12 — JavaScript Fundamentals**
**Type:** End-of-module live walkthrough
**Duration:** 15–18 minutes
**Files:** `script.js` (run in Node)

---

## What This Demo Teaches

The module demo builds a complete Publica Academy student analytics dashboard using all higher-order functions covered in the module. Students see map extract and transform (Part 1), filter with single and combined conditions (Part 2), reduce for totals and a frequency counter (Part 3), find/some/every for lookups and boolean questions (Part 4), and a complete chained leaderboard and stats object (Part 5).

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`
3. Consider having the students array visible throughout — reference it while explaining each part

---

## Demo Steps

### Part 1 — map

> *"Ask: if I call `students.map(s => s.score)`, what's the output type and length?"*

Run Part 1. Show scores array (7 numbers), name labels, and the first student with grade.

> *"map returns a new array of the same length — 7 in, 7 out. The spread `...s` copies all properties, then grade is added. Ask: what grade does Emeka get (score 55)? Borderline."*

---

### Part 2 — filter

> *"Ask: how many students are enrolled AND studying JavaScript AND passed?"*

Run Part 2. Show all four counts. jsAndPassed = 2 (Amara 88, Funmi 72 — Gbenga isn't enrolled).

> *"Ask: why is Gbenga not in the 'JS and passed' group despite having 91? Because `enrolled: false`. The combined filter requires both conditions to be true."*

---

### Part 3 — reduce

> *"Ask: what's the sum of all scores? Students calculate manually."*

Run Part 3. Show sum 493, average 70, pass count 4, course distribution.

> *"The frequency counter builds an object as the accumulator — same pattern as Module 9. JavaScript: 4 students, HTML & CSS: 3 students."*

---

### Part 4 — find, some, every

> *"Ask: which method do I use to get one specific student object?"*

Run Part 4. Show STU-003 found, topStudent (Gbenga 91), all boolean results.

> *"Top student — we find the student whose score equals the max. `Math.max(...students.map(x => x.score))` spreads the scores array into Math.max arguments. every(enrolled) is false because Gbenga and Yetunde have enrolled: false."*

---

### Part 5 — Chaining

> *"Ask: what order should the JS leaderboard pipeline use — filter, sort, map?"*

Run Part 5. Show the leaderboard (enrolled JS students sorted by score: Amara 88, Funmi 72, Emeka 55). Then show the dashboard object.

> *"The i+1 in map gives the ranking number. The dashboard object combines all the stats computed from the same data source. This is a real analytics pattern."*

---

## Teaching Tips

- **Part 2 enrolled condition** — Gbenga's non-enrolment is a key teaching moment; the data has subtle state that affects which students appear in different filters
- **Part 5 sort before map** — emphasise that sorting must happen before map converts to strings; ask "why not map then sort?"
- **Dashboard object** in Part 5 is worth pointing to as the output of a real API — many frontend dashboards consume exactly this shape of data

---

## What's Next

**Task 92** → Module 12 Assessment & Project JSONs
