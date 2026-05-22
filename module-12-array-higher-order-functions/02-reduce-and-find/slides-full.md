# Module 12 — Topic 2: reduce and find
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** reduce and find
**Subheadline:** Module 12, Topic 2 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Topic 1 covered map and filter — transform everything, or keep the ones that match. Now we add two more: reduce for when you need to collapse an array to a single value (totals, counts, objects), and find for when you need exactly one element from the array. Plus two quick-but-useful methods: some and every, for yes/no questions about the array. After this topic you'll have a method for every common array query pattern.

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

**Speaker Notes:**
Reduce is harder to read than map or filter, but it's the right tool when you need to boil an array down to one value. The two parameters to your callback are `acc` (accumulator) and the current element. Acc starts at your initial value and carries forward the running result after each element. The step table makes this concrete — walk through it: acc starts at 0. First element 5000 → acc becomes 5000. Second element 3200 → acc becomes 8200. And so on. The final value of acc after the last element is what reduce returns. The initial value is critical — always provide it. Without it, reduce uses the first element as the initial accumulator, which can produce unexpected results.

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

**Speaker Notes:**
The initial value shapes the output. Start with 0 to build a number, {} to build an object, [] to build an array. The frequency counter pattern is one of the most useful: `acc[order.status] = (acc[order.status] || 0) + 1`. Walk through this: first paid order — `acc.paid` is undefined, `undefined || 0` is 0, so `acc.paid = 0 + 1 = 1`. Second paid order — `acc.paid` is 1, `1 || 0` is 1, so `acc.paid = 1 + 1 = 2`. The most important warning: always return acc from the callback. If you forget the return statement — which is easy to do with a block body — the accumulator becomes undefined on the next iteration and the whole thing breaks.

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

**Speaker Notes:**
Find is the lookup tool — you know what you're looking for (a specific id, the first failure, the first occurrence of a condition), and you want that one element back. The undefined return when nothing matches is important: if you then call `.name` on undefined, you get a TypeError. Always guard: `if (student) { ... }`. FindIndex is useful when you need to know where in the array an item is — for updating or removing it by index. Some and every are fast yes/no questions: `some` stops as soon as it finds one true, `every` stops as soon as it finds one false. Both are more readable than a `reduce` for boolean checks.

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

**Speaker Notes:**
This decision table is the reference to burn in. The question is always: what does my goal produce? One value — reduce. One element — find. Multiple elements — map or filter. Yes/no boolean — some or every. Side effects only — forEach. In practice you'll chain them: filter then reduce for conditional sums, filter then find to narrow a search, map then filter for transformation then selection. The table won't solve every case, but it gets you to the right method 95% of the time. When in doubt: start with the output type and work backwards to the method.

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

**Speaker Notes:**
Seven methods now in your toolkit. The one to be careful with is reduce — powerful, but the "always return acc" rule trips up everyone. Set a reminder in your mental model: reduce callback = must return. In Topic 3 we chain all of these together in multi-step pipelines — filter the data, transform it, sum it, all in one expression. That's where the real power of these methods becomes obvious.
