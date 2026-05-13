# Module 8 — Topic 3: Iterating Arrays — for, for...of & forEach
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Iterating Arrays — for, for...of & forEach
**Subheadline:** Module 8, Topic 3 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — Three Ways to Iterate
**Type:** Concept
**Headline:** for, for...of, and forEach All Loop Over Arrays — Each Has a Use Case
**Content:**

```js
const prices = [4500, 1200, 8000, 600, 3300];

// 1. Classic for loop — when you need the index
for (let i = 0; i < prices.length; i++) {
  console.log("Item " + (i + 1) + ": ₦" + prices[i]);
}

// 2. for...of — when you only need the values
for (const price of prices) {
  console.log("₦" + price);
}

// 3. forEach — when you want a function-per-element style
prices.forEach(function(price) {
  console.log("₦" + price);
});

// forEach with arrow function (most common modern style)
prices.forEach(price => console.log("₦" + price));
```

- All three produce the same output for this case
- Use **for** when you need `i` (the index)
- Use **for...of** for clean value iteration
- Use **forEach** when you prefer function-style callbacks

**Visual:** Three code blocks stacked — each shows one of the three approaches with identical output arrows pointing to the same price list; labels on each block: "for: use when index matters", "for...of: cleanest syntax", "forEach: function per element"

---

### SLIDE 3 — forEach with Callback
**Type:** Code
**Headline:** forEach Calls a Function Once for Each Element
**Content:**

```js
const orders = [
  { id: "ORD-001", customer: "Amara Obi",   amount: 4500 },
  { id: "ORD-002", customer: "Bayo Ade",    amount: 1200 },
  { id: "ORD-003", customer: "Chidi Nweke", amount: 8000 }
];

// forEach with a named function
function printOrder(order) {
  console.log(order.id + " — " + order.customer + " — ₦" + order.amount);
}

orders.forEach(printOrder);

// forEach with an inline arrow function
orders.forEach(order => {
  console.log(order.id + " — " + order.customer + " — ₦" + order.amount);
});

// forEach also provides the index as second parameter
orders.forEach((order, index) => {
  console.log((index + 1) + ". " + order.customer);
});
```

- `forEach(callback)` — calls the callback with each element
- Callback receives `(element, index, array)` — only use what you need
- `forEach` does not return a value — use it for side effects (printing, logging)

**Visual:** An arrow diagram — the forEach arrow points into the orders array; from each element, a callback arrow fires into a function box labeled "printOrder(order)"; the output of each callback call lines up on the right showing the three log lines; a label "forEach fires callback once per element" sits at the top

---

### SLIDE 4 — forEach vs for...of: When to Choose
**Type:** Comparison
**Headline:** forEach for Function-Style Code | for...of When You Need break or await
**Content:**

```js
const scores = [88, 45, 72, 31, 95];

// forEach — clean, functional style — can't use break
scores.forEach(score => {
  if (score >= 70) console.log("Pass:", score);
  // break here would throw SyntaxError — can't break in forEach
});

// for...of — use when you need break or continue
for (const score of scores) {
  if (score < 50) continue;  // skip low scores
  if (score === 95) break;   // stop at this score
  console.log("Pass:", score);
}
```

| | `forEach` | `for...of` |
|-|-----------|-----------|
| Syntax style | Callback function | Loop statement |
| `break` / `continue` | ❌ Not supported | ✅ Supported |
| `return` inside | Returns from callback only | Returns from outer function |
| Async/await | ❌ Doesn't work as expected | ✅ Works correctly |
| Use for | Side effects (print, log) | When control flow is needed |

**Visual:** Two parallel code blocks — left (forEach) shows a forEach loop with a "❌ break not allowed here" annotation in red; right (for...of) shows the same iteration with green checkmarks next to the break and continue lines; a decision box between them reads "need break/continue? → for...of. Just processing each item? → forEach"

---

### SLIDE 5 — map and filter: Transforming Arrays
**Type:** Code
**Headline:** map Returns a New Array of Transformed Values | filter Returns a Subset
**Content:**

```js
const prices = [4500, 1200, 8000, 600, 3300];

// map — transform each element, returns new array of same length
const withVAT = prices.map(price => price * 1.075);
console.log(withVAT);
// [4837.5, 1290, 8600, 645, 3547.5]
console.log(prices);  // [4500, 1200, 8000, 600, 3300] — unchanged

// filter — keep only elements that match the test, returns shorter array
const expensive = prices.filter(price => price > 3000);
console.log(expensive);
// [4500, 8000, 3300]
console.log(prices);  // [4500, 1200, 8000, 600, 3300] — unchanged
```

- `map(callback)` — transforms each element, returns a **new array** of the same length
- `filter(callback)` — keeps only elements where callback returns `true`, returns a **new array**
- Neither mutates the original
- Both work with arrow functions naturally

**Visual:** Two transformation diagrams side by side — left (map): each input box has an arrow through a "×1.075" transform box to an output box; right (filter): each input box has an arrow to a test diamond "price > 3000?" — true goes to output, false is discarded; both show the original array unchanged below

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Iterating Arrays
**Content:**

| Method | Purpose | Returns | Mutates? |
|--------|---------|---------|----------|
| `for` loop | Iterate with index | — | No |
| `for...of` | Iterate values, use break | — | No |
| `forEach(fn)` | Side effect per element | `undefined` | No |
| `map(fn)` | Transform each element | New array (same length) | No |
| `filter(fn)` | Keep matching elements | New array (shorter) | No |

**Quick decision guide:**
- Need the index → `for`
- Need `break` or `continue` → `for...of`
- Side effects (print, log) per element → `forEach`
- Transform every element to new values → `map`
- Keep only elements matching a test → `filter`

**Up Next:** Module 9 — Objects
