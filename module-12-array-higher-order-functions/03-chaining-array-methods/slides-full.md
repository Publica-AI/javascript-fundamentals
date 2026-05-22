# Module 12 — Topic 3: Chaining Array Methods
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Chaining Array Methods
**Subheadline:** Module 12, Topic 3 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Topics 1 and 2 introduced each method individually. This topic puts them together into multi-step pipelines. Chaining is how real JavaScript code is written — you filter the data, sort it, transform it, and reduce it in a single readable expression. We also add sort, which completes the toolkit. By the end of this topic you'll be able to take any array of data and write a pipeline that answers any question about it.

---

### SLIDE 2 — Why Chain?
**Type:** Concept
**Headline:** Chaining Transforms Data in Stages — Each Method Gets a Cleaner Array to Work With
**Content:**

```js
// Without chaining — intermediate variables, more code
const paidOrders  = orders.filter(o => o.status === "paid");
const paidAmounts = paidOrders.map(o => o.amount);
const paidTotal   = paidAmounts.reduce((acc, n) => acc + n, 0);

// With chaining — one expression, reads like a pipeline
const paidTotal = orders
  .filter(o => o.status === "paid")
  .map(o => o.amount)
  .reduce((acc, n) => acc + n, 0);

console.log(paidTotal);  // 25000
```

**Why chaining works:**
- `filter` returns a new array — you can call `.map` on it immediately
- `map` returns a new array — you can call `.reduce` on it immediately
- The original `orders` array is never changed at any step
- Each method gets the output of the previous one as its input

**Visual:** Three boxes in a row — filter (5→3 items), map (3 amounts), reduce (single sum 25000); arrows connecting each output to the next input; "orders" labeled at the start, "25000" at the end

**Speaker Notes:**
Chaining works because each method returns a value you can call the next method on. Filter returns an array, so you can immediately call .map on it. Map returns an array, so you can immediately call .reduce on it. The two versions are equivalent — chaining just removes the intermediate variable names. The chained version is more concise and, once you read it fluently, more readable: "filter to paid orders, extract the amounts, sum them." The style of putting each method on its own indented line is conventional — it makes the pipeline stages explicit and easy to trace.

---

### SLIDE 3 — Common Chaining Patterns
**Type:** Code
**Headline:** Three Patterns You Will Use in Every Project
**Content:**

```js
const payments = [
  { id: "P001", amount: 5000,  type: "deposit",  month: "Jan" },
  { id: "P002", amount: 2000,  type: "withdrawal", month: "Jan" },
  { id: "P003", amount: 8000,  type: "deposit",  month: "Feb" },
  { id: "P004", amount: 3500,  type: "deposit",  month: "Jan" },
  { id: "P005", amount: 12000, type: "withdrawal", month: "Feb" }
];

// Pattern 1: Filter → map (get labels for deposits)
const depositLabels = payments
  .filter(p => p.type === "deposit")
  .map(p => p.id + " — ₦" + p.amount.toLocaleString());
// ["P001 — ₦5,000", "P003 — ₦8,000", "P004 — ₦3,500"]

// Pattern 2: Filter → reduce (sum deposits in January)
const janDeposits = payments
  .filter(p => p.type === "deposit" && p.month === "Jan")
  .reduce((acc, p) => acc + p.amount, 0);
// 8500

// Pattern 3: Filter → map → sort
const sortedDeposits = payments
  .filter(p => p.type === "deposit")
  .map(p => p.amount)
  .sort((a, b) => b - a);  // descending
// [8000, 5000, 3500]
```

**Visual:** Three parallel pipelines, one per pattern — each showing the input array and the step-by-step transformation with the final result labeled

**Speaker Notes:**
These three patterns cover the majority of data transformations you'll write. Pattern 1 — filter then map — is the display pattern: get the items you want, format them for showing. Pattern 2 — filter then reduce — is the calculation pattern: get the relevant items, compute a total. Pattern 3 — filter, extract, sort — is the ranking pattern: get the relevant items, pull out one value, sort it. Walk through janDeposits: deposits in Jan are P001 (5000) and P004 (3500) = 8500. Ask students to predict before running.

---

### SLIDE 4 — Sorting Arrays
**Type:** Code
**Headline:** sort — Sort an Array with a Comparator Function
**Content:**

```js
const scores = [88, 45, 72, 91, 63];

// Ascending — a - b
const asc = [...scores].sort((a, b) => a - b);
console.log(asc);   // [45, 63, 72, 88, 91]

// Descending — b - a
const desc = [...scores].sort((a, b) => b - a);
console.log(desc);  // [91, 88, 72, 63, 45]

// Sort objects by a property
const students = [
  { name: "Amara",  score: 88 },
  { name: "Chidi",  score: 45 },
  { name: "Funmi",  score: 72 }
];

const byScoreDesc = [...students].sort((a, b) => b.score - a.score);
console.log(byScoreDesc.map(s => s.name));
// ["Amara", "Funmi", "Chidi"]

// Alphabetical
const byName = [...students].sort((a, b) => a.name.localeCompare(b.name));
console.log(byName.map(s => s.name));
// ["Amara", "Chidi", "Funmi"]
```

**Important:** `sort` mutates the original array — use spread `[...array]` to sort a copy

**Visual:** An unsorted scores array on the left; an arrow through sort with comparator `a - b`; the sorted ascending array on the right; a warning label "sort mutates — spread to copy"

**Speaker Notes:**
Sort is powerful but has one gotcha: it mutates the original array, unlike map, filter, and reduce which all return new arrays. So always spread first: `[...scores].sort(...)`. The comparator function: if it returns negative, `a` comes before `b`. If positive, `b` comes before `a`. For numbers, `a - b` gives ascending (small numbers first), `b - a` gives descending. For strings, `localeCompare` handles alphabetical order correctly — it's language-aware and handles characters like accents, which matters for names like "Ngozi" or "Adeyemi". Ask: what does sort return without a comparator? It converts elements to strings and sorts lexicographically — so `[10, 2, 1]` sorts to `[1, 10, 2]` which is wrong for numbers. Always provide a comparator for numbers.

---

### SLIDE 5 — Building a Complete Data Pipeline
**Type:** Code
**Headline:** Real-World Pipeline — Filter, Sort, Map, and Render
**Content:**

```js
const students = [
  { name: "Amara Obi",    score: 88, course: "JavaScript", passed: true  },
  { name: "Chidi Nwosu",  score: 45, course: "HTML & CSS", passed: false },
  { name: "Funmi Adeyemi", score: 72, course: "JavaScript", passed: true  },
  { name: "Gbenga Lawal", score: 91, course: "JavaScript", passed: true  },
  { name: "Ngozi Eze",    score: 63, course: "HTML & CSS", passed: false }
];

// Top JavaScript passers — sorted by score, formatted for display
const topJS = students
  .filter(s => s.course === "JavaScript" && s.passed)
  .sort((a, b) => b.score - a.score)
  .map(s => s.name + " — " + s.score + "%");

console.log(topJS);
// ["Gbenga Lawal — 91%", "Amara Obi — 88%", "Funmi Adeyemi — 72%"]

// Dashboard stats
const stats = {
  total:   students.length,
  passed:  students.filter(s => s.passed).length,
  failed:  students.filter(s => !s.passed).length,
  average: Math.round(
    students.reduce((acc, s) => acc + s.score, 0) / students.length
  )
};

console.log(stats);
// { total: 5, passed: 3, failed: 2, average: 72 }
```

**Visual:** The students array flowing through a three-stage pipeline: filter (5→3) → sort (3, reordered) → map (3 strings); the stats object computed in parallel using separate reduce/filter calls

**Speaker Notes:**
This is the closest thing to real-world code in the whole module. The topJS pipeline: filter to JavaScript passers (3 students), sort by score descending (Gbenga 91, Amara 88, Funmi 72), map to formatted strings. The stats object uses multiple separate operations in parallel — each one is a clean single-purpose expression. This is how dashboards are built: calculate each stat independently from the same data source, not with a single massive complex function. Ask: why do we sort before map in the topJS pipeline, not after? Because once we map to strings, we lose the numeric score — you can't sort "91%" correctly as a number.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Chaining Array Methods
**Content:**

- Chain methods by calling them on the result of the previous: `array.filter().map().reduce()`
- Each method returns a new array (or value) — the original is never mutated
- `sort((a, b) => a - b)` sorts ascending; `(a, b) => b - a` sorts descending
- `sort` mutates — use `[...array].sort()` to avoid modifying the original
- A complete pipeline: `filter → sort → map` for display, `filter → reduce` for totals

**Quick reference:**
```js
// Filter → map → reduce
const total = items
  .filter(x => x.active)
  .map(x => x.price)
  .reduce((acc, p) => acc + p, 0);

// Filter → sort → map
const labels = items
  .filter(x => x.active)
  .sort((a, b) => b.price - a.price)
  .map(x => x.name + " — ₦" + x.price);
```

**Up Next:** Module 13 — Classes and Object-Oriented Programming

**Visual:** Summary pipeline diagram with the three-stage flow and a "sort caution" callout reminding to use spread before sort

**Speaker Notes:**
You now have the complete array method toolkit: map, filter, reduce, find, findIndex, some, every, sort — and the ability to chain them in any combination. The mental model is a data pipeline: raw array in, transformed data out. In Module 13 we shift to object-oriented programming — classes and constructors. The array methods you've learned here will be essential when working with arrays of class instances.
