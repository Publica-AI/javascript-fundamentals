# Module 9 — Topic 3: Iterating Objects — for...in and Object.keys
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Iterating Objects — for...in and Object.keys
**Subheadline:** Module 9, Topic 3 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — for...in Loop
**Type:** Concept
**Headline:** for...in Iterates the Keys of an Object
**Content:**

```js
const student = {
  name:   "Amara Obi",
  score:  88,
  course: "JavaScript",
  passed: true
};

// for...in — loop over all keys
for (const key in student) {
  console.log(key + ": " + student[key]);
}
// Output:
// name: Amara Obi
// score: 88
// course: JavaScript
// passed: true
```

- `key` is a string on each iteration — the property name
- `student[key]` uses bracket notation to get the value (dot notation doesn't work with a variable)
- Iterates the object's own enumerable properties in insertion order

**Visual:** The student object shown as a four-row table (key | value); a for...in arrow moves down each row in order, with `key` labeling the property name column and `student[key]` labeling the value column; an annotation reads "key is a string: 'name', 'score', 'course', 'passed'"

---

### SLIDE 3 — Object.keys, Object.values, Object.entries
**Type:** Code
**Headline:** Object Static Methods Convert an Object into an Array
**Content:**

```js
const product = {
  name:     "Wireless Earbuds",
  price:    4500,
  category: "Electronics",
  inStock:  true
};

// Object.keys — array of keys
console.log(Object.keys(product));
// ['name', 'price', 'category', 'inStock']

// Object.values — array of values
console.log(Object.values(product));
// ['Wireless Earbuds', 4500, 'Electronics', true]

// Object.entries — array of [key, value] pairs
console.log(Object.entries(product));
// [['name', 'Wireless Earbuds'], ['price', 4500], ['category', 'Electronics'], ['inStock', true]]
```

- `Object.keys(obj)` → array of keys (strings)
- `Object.values(obj)` → array of values
- `Object.entries(obj)` → array of `[key, value]` pairs
- All three return arrays — so you can use map, filter, forEach on the result

**Visual:** The product object on the left with three arrows pointing to three result arrays on the right — the first arrow labeled "Object.keys" points to ['name', 'price', 'category', 'inStock']; the second "Object.values" points to ['Wireless Earbuds', 4500, 'Electronics', true]; the third "Object.entries" points to the nested pairs array with brackets showing each [key, value] pair

---

### SLIDE 4 — Combining Object.entries with Destructuring
**Type:** Code
**Headline:** Destructure entries to Get Both Key and Value in One Line
**Content:**

```js
const order = {
  id:       "ORD-001",
  customer: "Amara Obi",
  amount:   4500,
  status:   "delivered"
};

// Object.entries gives [key, value] pairs
// Destructure each pair in the forEach callback
Object.entries(order).forEach(([key, value]) => {
  console.log(key + ": " + value);
});
// Output:
// id: ORD-001
// customer: Amara Obi
// amount: 4500
// status: delivered

// Using for...of with Object.entries
for (const [key, value] of Object.entries(order)) {
  console.log(key.toUpperCase() + " → " + value);
}
// ID → ORD-001
// CUSTOMER → Amara Obi
// AMOUNT → 4500
// STATUS → delivered
```

- `Object.entries(obj).forEach(([key, value]) => ...)` — clean modern pattern
- `for (const [key, value] of Object.entries(obj))` — readable alternative
- Destructuring `[key, value]` from each entry avoids accessing `entry[0]` and `entry[1]`

**Visual:** An Object.entries output showing four `[key, value]` pair boxes; an arrow from each pair leads into a destructuring assignment where the pair splits into separate `key` and `value` variables; the loop arrow shows both being used in the console.log output

---

### SLIDE 5 — Practical: Object as a Lookup Table
**Type:** Code
**Headline:** Objects Are Efficient Lookup Tables — Key-Based Access Is O(1)
**Content:**

```js
// Status codes mapped to messages
const statusMessages = {
  delivered: "Your order has been delivered",
  pending:   "Your order is being processed",
  cancelled: "Your order has been cancelled",
  returned:  "Your return has been received"
};

// Look up a message directly — no if/else, no switch
function getStatusMessage(status) {
  return statusMessages[status] || "Unknown status";
}

console.log(getStatusMessage("delivered"));  // Your order has been delivered
console.log(getStatusMessage("pending"));    // Your order is being processed
console.log(getStatusMessage("shipped"));    // Unknown status

// Count status frequency from an orders array
const orders = ["delivered", "pending", "cancelled", "delivered", "pending", "delivered"];
const counts = {};

for (const status of orders) {
  counts[status] = (counts[status] || 0) + 1;
}

console.log(counts);
// { delivered: 3, pending: 2, cancelled: 1 }
```

- An object can act as a lookup table: key = the lookup term, value = the result
- Cleaner than if/else or switch for static mapping
- Dynamic key creation: `counts[status] = (counts[status] || 0) + 1`

**Visual:** Two diagrams — left: a statusMessages object with four arrows from each key to its message string, labeled "lookup: O(1) — direct access by key"; right: the counts accumulation loop showing the counts object building up as each status string from the orders array is processed — delivered counter increments to 3 in three steps

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Iterating Objects
**Content:**

| Method | Output | Best when |
|--------|--------|----------|
| `for...in` | Keys (strings) | Iterating with key access |
| `Object.keys(obj)` | Array of keys | Need to map/filter keys |
| `Object.values(obj)` | Array of values | Need to iterate values as array |
| `Object.entries(obj)` | Array of `[key, value]` | Need both key and value |

**Full module summary — three object skills:**
1. Create and access — `{ key: value }`, `obj.key`, methods, `this`
2. Notation — dot for known keys, brackets for variables and special chars, destructuring
3. Iterate — `for...in`, `Object.keys/values/entries`

**Up Next:** Module 10 — Array Higher-Order Functions
