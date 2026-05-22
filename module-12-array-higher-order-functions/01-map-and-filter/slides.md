# Module 12 — Topic 1: map and filter
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** map and filter
**Subheadline:** Module 12, Topic 1 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — What Are Higher-Order Functions?
**Type:** Concept
**Headline:** Higher-Order Functions Take a Function as an Argument — They Power Array Transformation
**Content:**

```js
// A higher-order function takes another function as an argument
function runTwice(fn) {
  fn();
  fn();
}

runTwice(() => console.log("Publica Academy"));
// Publica Academy
// Publica Academy
```

**Array methods that take a callback:**

| Method | What it does | Returns |
|--------|-------------|---------|
| `map` | Transform every element | New array, same length |
| `filter` | Keep elements that match | New array, shorter or equal |
| `reduce` | Accumulate into one value | Any single value |
| `find` | Return first match | One element or undefined |
| `forEach` | Run a function per element | Nothing (undefined) |

- The callback function is called once per element in the array
- The original array is **never modified** — map and filter always return a new array
- Arrow functions are the idiomatic style for callbacks

**Visual:** A pipeline diagram — an array enters a box labeled "map / filter / reduce"; a callback arrow feeds into the box; a new result exits on the right; "original array unchanged" labeled below

---

### SLIDE 3 — 
**Type:** Codemap: Transform Every Element
**Headline:** map Returns a New Array with Every Element Transformed
**Content:**

```js
const orders = [
  { id: "ORD-001", amount: 5000,  status: "paid" },
  { id: "ORD-002", amount: 3200,  status: "pending" },
  { id: "ORD-003", amount: 8000,  status: "paid" }
];

// Extract just the amounts
const amounts = orders.map(order => order.amount);
console.log(amounts);  // [5000, 3200, 8000]

// Add a formatted label to each order
const labels = orders.map(order =>
  order.id + " — ₦" + order.amount.toLocaleString()
);
console.log(labels);
// ["ORD-001 — ₦5,000", "ORD-002 — ₦3,200", "ORD-003 — ₦8,000"]

// Add a new property to each item (spread)
const withVAT = orders.map(order => ({
  ...order,
  amountWithVAT: Math.round(order.amount * 1.075)
}));
console.log(withVAT[0]);
// { id: "ORD-001", amount: 5000, status: "paid", amountWithVAT: 5375 }
```

- `map` always returns an array with the **same number of elements**
- The callback receives `(element, index, array)` — usually just `element` is needed
- Spread `...order` copies all existing properties before adding new ones

**Visual:** Three cards flowing through a map box — each order object entering on the left, the callback applying a transformation (shown as a formula), a new value exiting on the right; all three values collected into a new array

---

### SLIDE 4 — filter: Keep Only Matching Elements
**Type:** Code
**Headline:** filter Returns a New Array Containing Only Elements Where the Callback Returns true
**Content:**

```js
const products = [
  { name: "Wireless Earbuds", price: 4500, inStock: true  },
  { name: "Phone Case",       price: 1200, inStock: false },
  { name: "USB Cable",        price: 800,  inStock: true  },
  { name: "Fast Charger",     price: 3200, inStock: true  }
];

// Keep only in-stock items
const inStock = products.filter(p => p.inStock);
console.log(inStock.length);  // 3

// Keep items under ₦2000
const affordable = products.filter(p => p.price < 2000);
console.log(affordable.map(p => p.name));
// ["Phone Case", "USB Cable"]

// Combine conditions
const goodDeal = products.filter(p => p.inStock && p.price < 2000);
console.log(goodDeal.length);  // 1 (USB Cable only — Phone Case out of stock)
```

- The callback must return `true` to keep an element, `false` to exclude it
- Returning a truthy value (non-zero number, non-empty string) also keeps the element
- `filter` never changes the original array — it returns a new one

**Visual:** Four product cards entering a filter box — the callback shown as a test condition (p.inStock); cards where the condition is true pass through in green; cards where false are dropped in red; the resulting shorter array shown on the right

---

### SLIDE 5 — map and filter Together
**Type:** Code
**Headline:** Chain filter Then map — Filter First, Then Transform What Remains
**Content:**

```js
const students = [
  { name: "Amara Obi",   score: 88, course: "JavaScript" },
  { name: "Chidi Nwosu", score: 45, course: "HTML & CSS" },
  { name: "Funmi Adeyemi", score: 72, course: "JavaScript" },
  { name: "Gbenga Lawal", score: 91, course: "JavaScript" }
];

// Get names of students who passed (score >= 70)
const passedNames = students
  .filter(s => s.score >= 70)
  .map(s => s.name);

console.log(passedNames);
// ["Amara Obi", "Funmi Adeyemi", "Gbenga Lawal"]

// Get passing JavaScript students with formatted labels
const jsPassers = students
  .filter(s => s.course === "JavaScript" && s.score >= 70)
  .map(s => s.name + " — " + s.score + "%");

console.log(jsPassers);
// ["Amara Obi — 88%", "Funmi Adeyemi — 72%", "Gbenga Lawal — 91%"]
```

**Order matters:**
- `filter` then `map` — filter first (shorter array), then map (faster transformation)
- `map` then `filter` — transforms all first, then filters (wastes work on excluded items)

**Visual:** A two-stage pipeline — students array enters filter first (4 → 3 items for JavaScript passers), then the 3 items enter map (3 → 3 formatted strings); arrows show the data flowing through both stages

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — map and filter
**Content:**

- `array.map(fn)` — transforms every element, returns new array of same length
- `array.filter(fn)` — keeps elements where callback returns `true`, returns shorter array
- Neither method modifies the original array
- Chain them: `array.filter(...).map(...)` — filter first for efficiency

**Quick reference:**
```js
const prices = orders.map(o => o.amount);          // extract one field
const paid   = orders.filter(o => o.status === "paid");  // keep matching
const labels = orders
  .filter(o => o.status === "paid")
  .map(o => o.id + " — ₦" + o.amount);             // filter then format
```

**Up Next:** Topic 2 — reduce and find

**Visual:** Summary card with the quick reference and a side-by-side comparison table: map (same length, transforms) vs filter (shorter, keeps matching)
