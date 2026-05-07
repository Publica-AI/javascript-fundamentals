# Module 6 — Topic 3: for...of & for...in Loops
## Slide Deck (Full) — 6 Slides with Speaker Notes

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** for...of & for...in Loops
**Subheadline:** Module 6, Topic 3 of 4 — JavaScript Fundamentals

**Speaker Notes:**
We now have two loop tools — the classic for loop and the while/do...while family. Topic 3 adds two more: for...of and for...in. These are modern syntax additions to JavaScript that make iteration cleaner and more readable. The rule of thumb: for...of replaces the classic for loop whenever you don't need the index i, and for...in is specifically for iterating the keys of an object. By the end of this topic students will have a complete decision framework for choosing the right loop type.

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

**Speaker Notes:**
Show both versions side by side. Ask: "What's different between them?" The for loop has three parts in its header: `let i = 0`, `i < prices.length`, `i++`. The for...of has one: `const price of prices`. Same result, less machinery. The key question for choosing between them: "Do I need i?" If you need to access the index — to display "Item 3 of 5", to compare two elements, to update a specific position — use the classic for loop. If you just need the values, use for...of. Emphasise `const`: the variable price is reassigned to a new value each iteration, but it's not being mutated, so const is correct and communicates "this is a read-only reference to the current element."

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

**Speaker Notes:**
This slide demonstrates that for...of isn't just for arrays — strings are also iterable. Ask students to predict the vowelCount before running: A, m, a, r, a — A is a vowel, m is not, a is a vowel, r is not, a is a vowel — so 3. Point out the vowels string used with .includes() — this is a clean pattern for membership testing. An alternative is to use an array `["a","e","i","o","u"]` with .includes(), but the string approach works equally well. This pattern — loop over a string character by character and check each against a set — comes up in interview questions and input validation tasks.

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

**Speaker Notes:**
The critical syntax point is bracket notation. Ask: "Why can't we write `student.key`?" Because `key` is a variable that holds the string "name" — `student.key` would look for a property literally named "key", which doesn't exist. `student[key]` evaluates `key` first (gets "name"), then looks up `student["name"]`. This is the bracket notation from the Objects module — here it's essential. Also clarify what "own enumerable properties" means in plain language: the properties you defined when you wrote the object. You're not getting inherited methods from the prototype, just the keys you put there. For...in is perfect for logging, debugging, or building display templates from dynamic objects.

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

**Speaker Notes:**
The "Don't use on" row in the table is important. Ask: "What happens if you use for...in on an array?" The keys of an array are its index strings — "0", "1", "2". You'd get those as your loop variable, not the values. It technically works but produces unexpected string indices instead of the values you want. Conversely, if you try for...of on a plain object, you get a TypeError — objects are not iterable by default. So the rule is clean: for...of for arrays and strings, for...in for objects. The cart example on this slide is realistic: an array of product objects where you want to iterate the array items (for...of) and separately inspect an individual item's keys (for...in).

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

**Speaker Notes:**
The four-row decision guide is the takeaway to memorise. Walk through it: "I have an array of orders and I want to print each one — for...of. I have an object representing a user profile and I want to print every field — for...in. I'm iterating a price list and I need to print 'Item 3 of 5' — classic for, because I need i. I'm waiting for a network response — while." This framework means students never need to guess which loop to use. Topic 4 wraps up the loop module with break and continue — tools that give you fine-grained control over when a loop exits or skips an iteration.
