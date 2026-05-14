# Module 9 — Topic 3: Iterating Objects — for...in and Object.keys
## Slide Deck (Full) — 6 Slides with Speaker Notes

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Iterating Objects — for...in and Object.keys
**Subheadline:** Module 9, Topic 3 of 3 — JavaScript Fundamentals

**Speaker Notes:**
Topics 1 and 2 covered creating and accessing objects. Topic 3 covers iterating them — looping over all key-value pairs. There are two main approaches: for...in (a loop statement from Module 6) and the Object static methods (Object.keys, Object.values, Object.entries). The static methods are generally preferred in modern JavaScript because they return arrays, which can then be processed with map, filter, and forEach. Topic 3 also introduces the lookup table pattern — one of the most practical uses of objects as data structures.

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

**Speaker Notes:**
Students saw for...in briefly in Module 6 (loops). Here it's in the proper context: iterating an object's properties. The bracket notation requirement is the recurring lesson: `student[key]` evaluates the variable `key` and uses its string value as the property name. `student.key` would look for a property literally named "key". Point out that for...in iterates in insertion order for most modern JavaScript engines — the order you defined the properties is the order you get them. Remind students that for...in should be used on objects, not arrays — on arrays it iterates index strings ("0", "1", "2"), which is usually not what you want.

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

**Speaker Notes:**
These three methods are used constantly in professional JavaScript. Ask: "Why would you want an array of keys or values instead of just using for...in?" Because once it's an array, you can use map, filter, sort, find — all the array methods from Module 8. For example: `Object.keys(config).filter(key => key.startsWith('api'))` — get all keys that start with 'api'. That's impossible with for...in alone. Object.entries is the most powerful of the three because each element contains both the key and value as a pair — you don't need bracket notation to get the value.

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

**Speaker Notes:**
The `([key, value])` syntax is array destructuring in a callback parameter — it's the same destructuring from Topic 2 but applied to an array element. Each entry is `['name', 'Amara Obi']`, and destructuring extracts index 0 into `key` and index 1 into `value`. Without destructuring, you'd write `entries.forEach(entry => console.log(entry[0] + ': ' + entry[1]))` — works but less readable. Show both forms and let students choose. The for...of version with `const [key, value]` is often preferred for clarity. The forEach version is more common in functional-style code. Both are correct — pick the one that reads better in context.

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

**Speaker Notes:**
The lookup table pattern is one of the most important object use cases. Compare `statusMessages[status]` to a switch or if/else chain with 4 cases — same result, much less code. Adding a new status? Add one line to the object. The `|| "Unknown status"` fallback handles missing keys cleanly. The frequency counter pattern (`counts[status] = (counts[status] || 0) + 1`) is a classic: if counts[status] already exists, add 1; if it doesn't exist yet, start at 0 and add 1. Walk through the loop manually: first "delivered" — counts.delivered starts as undefined, `undefined || 0` gives 0, then +1 = 1. Second "pending" — counts.pending is undefined → 1. Third "cancelled" → 1. Fourth "delivered" — counts.delivered is 1, +1 = 2. And so on.

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

**Speaker Notes:**
The four-row table is the iteration reference. In practice, Object.entries with destructuring is the cleanest pattern for iterating key-value pairs. Module 10 is the payoff for everything in Modules 7, 8, and 9: higher-order array functions (reduce, find, findIndex, sort, some, every) that combine functions and arrays in powerful ways. Students who understand map, filter, and for...of will find Module 10 a natural extension.
