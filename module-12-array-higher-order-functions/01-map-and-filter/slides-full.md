# Module 12 — Topic 1: map and filter
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** map and filter
**Subheadline:** Module 12, Topic 1 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Module 12 steps back from the browser and goes deep on JavaScript's most powerful array tools: higher-order functions. These are the methods that make JavaScript concise and expressive for data transformation. You've already seen forEach and filter briefly — in this module we go deep: map, filter, reduce, find, and chaining them together. These tools are everywhere in real codebases — API responses, data dashboards, filtering UI, calculating totals. By the end of this module you'll have a complete toolkit for transforming any array of data.

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

**Speaker Notes:**
A higher-order function is any function that takes a function as an argument or returns a function. The array methods in JavaScript — map, filter, reduce — are all higher-order functions. They take a callback that you write, and they call your callback once per element. The pattern is always the same: describe what to do with each element, and the method handles the looping. The table is a reference — we'll cover map and filter today, reduce and find in Topic 2. The critical point: map and filter do not modify the original array. They return a new one. You can always recompute from the original. This makes your code predictable and easier to reason about.

---

### SLIDE 3 — map: Transform Every Element
**Type:** Code
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

**Speaker Notes:**
Map is the transformation tool. You give it a callback that describes how to convert each element, and it returns a new array where every element has been converted. Three common uses: extracting one field from an array of objects (the amounts example), creating formatted strings for display (the labels example), and adding computed properties to objects (the VAT example). The spread operator `...order` is worth explaining: it copies all properties from `order` into the new object, then `amountWithVAT` is added on top. Without the spread, you'd get an object with only `amountWithVAT` — the original properties would be lost. Ask: how many elements does `withVAT` have? Three — always the same as the input.

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

**Speaker Notes:**
Filter is the selection tool. The callback is a test — return true to keep, false to drop. `p => p.inStock` works because `inStock` is already a boolean — you don't need `p.inStock === true`. The combined condition `p.inStock && p.price < 2000` shows that you can use any boolean expression. Walk through the goodDeal example: Phone Case is under ₦2000 but out of stock (fails &&). USB Cable is under ₦2000 and in stock (passes). Fast Charger is in stock but over ₦2000 (fails). So only one passes both conditions. Ask: does filter change the original products array? No — it returns a new array.

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

**Speaker Notes:**
Chaining is where these methods become really powerful. `.filter().map()` reads almost like English: "from students, filter those who passed JavaScript, then map to formatted name-score strings." The result is clean and self-documenting. The indentation style — each chained method on its own line — is standard in real codebases. It makes each transformation step visible. The efficiency note: filter first reduces the array, then map only runs on the reduced set. If you map first and then filter, you've done extra work transforming elements you ultimately discard. In practice this rarely matters for small arrays, but for large data sets it adds up.

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

**Speaker Notes:**
Map and filter are the two most-used array methods in JavaScript. You'll use them constantly for displaying data from APIs, building filtered lists, formatting display strings. The mental model: map = transform every element, filter = keep matching elements. Neither touches the original. In Topic 2 we add reduce — for summing, counting, or accumulating anything — and find — for getting one specific element. In Topic 3 we chain all of them together in multi-step data pipelines.
