# Module 6 — Topic 3: for...of & for...in Loops
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** for...of & for...in Loops
**Subheadline:** Module 6, Topic 3 of 4 — JavaScript Fundamentals

---

### SLIDE 2 — for...of: Iterating Values
**Type:** Concept
**Headline:** for...of Gives You Each Value Directly — No Index Needed
**Content:**

```
for (const item of iterable) {
    // item is the current value
}
```

```js
const prices = [4500, 1200, 8000, 600, 3300];

// Classic for loop — index required
for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}

// for...of — cleaner when you only need the values
for (const price of prices) {
  console.log(price);
}
// Output: 4500, 1200, 8000, 600, 3300
```

- No counter, no index, no `i++` — just the values, one by one
- Works on arrays, strings, and any iterable
- Use `const` for the loop variable — it's reassigned each iteration, not mutated

**Visual:** A horizontal array diagram showing the 5 price boxes; a curved arrow labeled "for...of" sweeps from left to right with an arrow pointing into a box labeled "price" — each iteration the box shows the current value (4500, then 1200, etc.); below, the classic for loop version is shown with its index machinery grayed out to contrast the verbosity difference

---

### SLIDE 3 — for...of on Strings
**Type:** Code
**Headline:** for...of Also Iterates Characters in a String
**Content:**

```js
const courseName = "JavaScript";

for (const char of courseName) {
  console.log(char);
}
// Output:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t

// Practical example — count vowels in a student name
const name = "Amara";
let vowelCount = 0;
const vowels = "aeiouAEIOU";

for (const char of name) {
  if (vowels.includes(char)) {
    vowelCount++;
  }
}

console.log("Vowels in '" + name + "':", vowelCount);  // 3
```

- Strings are iterable — `for...of` steps through each character
- Useful for character-by-character inspection or transformation
- Combining `for...of` with string methods like `.includes()` is a common pattern

**Visual:** A string "Amara" shown as 5 individual character boxes labeled A, m, a, r, a with indices 0–4; a "for...of" arrow sweeps through each box; boxes containing vowels (A, a, a) are highlighted in green with a "+1" label; a counter box at the right shows the running vowelCount reaching 3

---

### SLIDE 4 — for...in: Iterating Object Keys
**Type:** Concept
**Headline:** for...in Gives You Each Key in an Object
**Content:**

```
for (const key in object) {
    // key is the current property name (a string)
    // object[key] is the value
}
```

```js
const student = {
  name: "Chidi Nweke",
  course: "JavaScript Fundamentals",
  score: 88,
  passed: true
};

for (const key in student) {
  console.log(key + ": " + student[key]);
}
// Output:
// name: Chidi Nweke
// course: JavaScript Fundamentals
// score: 88
// passed: true
```

- `key` is a string — the property name (`"name"`, `"score"`, etc.)
- Use `object[key]` (bracket notation) to get the value — dot notation won't work with a variable key
- Iterates **own enumerable** properties — the ones you defined directly on the object

**Visual:** An object box with four key-value pairs shown inside; a "for...in" arrow points to each key in turn (name → course → score → passed) with a label showing "key = 'name'" then "student[key] = 'Chidi Nweke'" side by side; the bracket notation `object[key]` is highlighted with an annotation "key is a variable — must use [ ] not ."

---

### SLIDE 5 — for...of vs for...in: Which to Use
**Type:** Comparison
**Headline:** for...of → Values from Arrays | for...in → Keys from Objects
**Content:**

```js
const cart = [
  { item: "Wireless Earbuds", price: 4500 },
  { item: "Phone Case",       price: 1200 },
  { item: "USB-C Cable",      price: 600  }
];

// for...of — iterate the array items (each object in the array)
for (const product of cart) {
  console.log(product.item + ": ₦" + product.price);
}
// Output: Wireless Earbuds: ₦4500 / Phone Case: ₦1200 / USB-C Cable: ₦600

// for...in — iterate the keys of a single object
const product = cart[0];
for (const key in product) {
  console.log(key + " → " + product[key]);
}
// Output: item → Wireless Earbuds / price → 4500
```

| | `for...of` | `for...in` |
|-|-----------|-----------|
| **Used on** | Arrays, strings, iterables | Objects |
| **Loop variable** | The value itself | The key (property name) |
| **Access value** | Directly: `item` | Via bracket notation: `object[key]` |
| **Don't use on** | Plain objects (not iterable) | Arrays (iterates index strings — unexpected) |

**Visual:** Two columns — left shows an array with three item boxes and a "for...of" arrow producing each full object value; right shows a single object with key-value pairs and a "for...in" arrow producing each key string; both columns show the corresponding code output below; a warning label on the right column reads "for...in on arrays gives index strings '0', '1', '2' — use for...of instead"

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — for...of & for...in Loops
**Content:**

| Loop | Best for | Loop variable gives you |
|------|---------|------------------------|
| `for` | Arrays when index is needed | Index `i` |
| `for...of` | Arrays and strings (no index needed) | The value directly |
| `for...in` | Objects | The key (property name) |

**Quick decision guide:**
- Need each **value** from an array → `for...of`
- Need each **key** from an object → `for...in`
- Need the **index** while iterating → classic `for`
- Condition-driven repetition → `while`

**Up Next:** Topic 4 — break, continue & Avoiding Infinite Loops
