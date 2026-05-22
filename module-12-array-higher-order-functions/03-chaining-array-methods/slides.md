# Module 12 — Topic 3: Chaining Array Methods
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Chaining Array Methods
**Subheadline:** Module 12, Topic 3 of 3 — JavaScript Fundamentals

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
