# Module 12 — Topic 2: reduce and find
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** reduce and find
**Subheadline:** Module 12, Topic 2 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — reduce: Accumulate Into One Value
**Type:** Concept
**Headline:** reduce Collapses an Array Into a Single Value — Sum, Count, or Any Accumulation
**Content:**

```js
// reduce(callback, initialValue)
// callback receives: (accumulator, currentElement)

const amounts = [5000, 3200, 8000, 1500, 12000];

// Sum all amounts
const total = amounts.reduce((acc, amount) => acc + amount, 0);
console.log(total);  // 29700

// Count elements matching a condition
const count = amounts.reduce((acc, amount) => {
  return amount >= 5000 ? acc + 1 : acc;
}, 0);
console.log(count);  // 3
```

**How reduce works step by step:**

| Step | acc | amount | result |
|------|-----|--------|--------|
| 1    | 0   | 5000   | 5000   |
| 2    | 5000 | 3200  | 8200   |
| 3    | 8200 | 8000  | 16200  |
| 4    | 16200 | 1500 | 17700  |
| 5    | 17700 | 12000 | 29700 |

- `acc` starts at the initial value (second argument to `reduce`)
- Each call returns the new accumulator for the next iteration
- The final return value is the accumulated result

**Visual:** An array of five amounts feeding into a reduce box one by one; the accumulator shown updating after each element; the final value 29700 output from the box; the step table shown alongside

---

### SLIDE 3 — reduce with Objects
**Type:** Code
**Headline:** reduce Can Build Objects and Arrays — Not Just Numbers
**Content:**

```js
const orders = [
  { id: "ORD-001", amount: 5000,  status: "paid"    },
  { id: "ORD-002", amount: 3200,  status: "pending" },
  { id: "ORD-003", amount: 8000,  status: "paid"    },
  { id: "ORD-004", amount: 1500,  status: "failed"  },
  { id: "ORD-005", amount: 12000, status: "paid"    }
];

// Sum only paid orders
const paidTotal = orders.reduce((acc, order) => {
  return order.status === "paid" ? acc + order.amount : acc;
}, 0);
console.log("Paid total: ₦" + paidTotal.toLocaleString());  // ₦25,000

// Build a status count object (frequency counter)
const statusCounts = orders.reduce((acc, order) => {
  acc[order.status] = (acc[order.status] || 0) + 1;
  return acc;
}, {});
console.log(statusCounts);  // { paid: 3, pending: 1, failed: 1 }
```

- The initial value can be `0`, `{}`, `[]`, or anything that matches the expected output
- The callback must always **return** the accumulator — forgetting return gives `undefined`
- `reduce` is more flexible than `map` or `filter` but harder to read — use simpler methods when possible

**Visual:** The orders array flowing into reduce with initial value `{}`; the accumulator object growing after each element — step 1: `{paid:1}`, step 2: `{paid:1, pending:1}`, etc.; the final object shown

---

### SLIDE 4 — find and findIndex
**Type:** Code
**Headline:** find Returns the First Matching Element — findIndex Returns Its Position
**Content:**

```js
const students = [
  { id: "STU-001", name: "Amara Obi",    score: 88 },
  { id: "STU-002", name: "Chidi Nwosu",  score: 45 },
  { id: "STU-003", name: "Funmi Adeyemi", score: 72 },
  { id: "STU-004", name: "Gbenga Lawal", score: 91 }
];

// Find one student by id
const student = students.find(s => s.id === "STU-002");
console.log(student);
// { id: "STU-002", name: "Chidi Nwosu", score: 45 }

// Find first student who failed
const firstFail = students.find(s => s.score < 50);
console.log(firstFail.name);  // Chidi Nwosu

// If no match, returns undefined
const missing = students.find(s => s.id === "STU-999");
console.log(missing);  // undefined

// findIndex — returns the index, or -1 if not found
const idx = students.findIndex(s => s.id === "STU-003");
console.log(idx);  // 2

// Check if any element matches — some
const hasTopScorer = students.some(s => s.score >= 90);
console.log(hasTopScorer);  // true

// Check if all elements match — every
const allPassed = students.every(s => s.score >= 70);
console.log(allPassed);  // false (Chidi scored 45)
```

**Visual:** A list of students with a magnifying glass icon; find scans left-to-right and stops at the first match (highlighted); findIndex returns the position number; undefined shown for no match

---

### SLIDE 5 — Choosing the Right Method
**Type:** Concept
**Headline:** Pick the Right Method for the Job
**Content:**

| Goal | Method | Returns |
|------|--------|---------|
| Transform all elements | `map` | New array, same length |
| Keep matching elements | `filter` | New array, shorter |
| Sum or accumulate to one value | `reduce` | Single value |
| Get first match | `find` | Element or undefined |
| Get index of first match | `findIndex` | Number or -1 |
| Check if any match | `some` | true / false |
| Check if all match | `every` | true / false |
| Run code per element (no return value needed) | `forEach` | undefined |

```js
// "Give me the total paid amount" → reduce
const total = orders.filter(o => o.status === "paid")
                    .reduce((acc, o) => acc + o.amount, 0);

// "Give me the order with this id" → find
const order = orders.find(o => o.id === "ORD-003");

// "Does any order exceed ₦10,000?" → some
const hasLarge = orders.some(o => o.amount > 10000);
```

**Visual:** A decision tree: "How many results do you need?" → one value (reduce) → one element (find) → multiple elements (map/filter) → none, just side effects (forEach)

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — reduce and find
**Content:**

- `array.reduce((acc, el) => ..., initialValue)` — accumulate to one value
- Start with the right initial value: `0` for sum, `{}` for object, `[]` for array
- Always return the accumulator from the callback
- `array.find(fn)` — first element where callback is truthy, or `undefined`
- `array.findIndex(fn)` — index of first match, or `-1`
- `array.some(fn)` — `true` if any element matches
- `array.every(fn)` — `true` if all elements match

**Quick reference:**
```js
const total  = prices.reduce((acc, n) => acc + n, 0);
const byId   = items.find(x => x.id === targetId);
const hasAny = items.some(x => x.active);
const allOk  = items.every(x => x.valid);
```

**Up Next:** Topic 3 — Chaining Array Methods

**Visual:** Summary table with all seven methods, their return types, and a one-line example each
