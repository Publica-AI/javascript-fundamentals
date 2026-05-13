# Module 8 — Topic 1: Creating Arrays and Accessing Elements
## Slide Deck (Full) — 6 Slides with Speaker Notes

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Creating Arrays and Accessing Elements
**Subheadline:** Module 8, Topic 1 of 3 — JavaScript Fundamentals

**Speaker Notes:**
Module 7 gave students functions. Module 8 gives them arrays — the fundamental data structure for lists. Nearly every real JavaScript program works with arrays: a shopping cart is an array of items, an API response is an array of records, a dropdown menu is an array of options. Understanding how to create, access, and manipulate arrays is the skill that connects the rest of the course. Module 8 builds the foundation (Topic 1), teaches the mutation methods (Topic 2), and moves to iteration and higher-order methods (Topic 3).

---

### SLIDE 2 — What Is an Array?
**Type:** Concept
**Headline:** An Array Is an Ordered List of Values
**Content:**

```js
// Array of prices — 5 items, indices 0 to 4
const prices = [4500, 1200, 8000, 600, 3300];

// Array of strings
const cities = ["Lagos", "Abuja", "Kano", "PH"];

// Array of mixed types (allowed but uncommon)
const mixed = ["Amara", 88, true, null];

// Empty array
const cart = [];

console.log(prices.length);  // 5
console.log(cities.length);  // 4
```

- An array is created with square brackets `[ ]`
- Items (elements) are separated by commas
- Arrays can hold any data type — numbers, strings, booleans, objects
- `array.length` gives the number of elements

**Visual:** A horizontal row of 5 boxes labeled with values (4500, 1200, 8000, 600, 3300); below each box, an index number (0, 1, 2, 3, 4) in gray; an annotation below reads "index: 0-based — first item is at position 0, last is at position length-1 (4)"

**Speaker Notes:**
Ask: "We've seen arrays before — in the loops module and the functions module. What are they used for?" To hold lists. "Why would you store 5 prices in an array rather than 5 separate variables?" Because you can loop over the array, pass it to a function, process all 5 at once. Five separate variables can't be iterated. Point out that arrays in JavaScript are zero-indexed — index 0 is the first element. This is universal across most programming languages (Python, C, Java) — only a few (Lua, MATLAB) start at 1. The `.length` property is always one more than the last valid index: 5 elements means valid indices 0–4.

---

### SLIDE 3 — Accessing Elements
**Type:** Code
**Headline:** Access Elements with Square Bracket Notation and an Index
**Content:**

```js
const items = ["Wireless Earbuds", "Phone Case", "Tecno Spark", "USB-C Cable", "Screen Protector"];

// Access by index
console.log(items[0]);  // Wireless Earbuds — first element
console.log(items[2]);  // Tecno Spark — third element
console.log(items[4]);  // Screen Protector — last element

// Access the last element dynamically
console.log(items[items.length - 1]);  // Screen Protector

// Out of bounds — returns undefined
console.log(items[10]);  // undefined — no element at index 10
console.log(items[-1]);  // undefined — negative indices not supported in JS
```

- First element is always at index `0`
- Last element is at index `array.length - 1`
- Accessing a non-existent index returns `undefined` (not an error)

**Visual:** The items array shown as 5 labeled boxes with indices 0–4; three access arrows point to specific boxes: [0] → "Wireless Earbuds", [2] → "Tecno Spark", [items.length - 1] = [4] → "Screen Protector"; a separate faded box labeled "index 10" with a return arrow labeled "undefined" shows out-of-bounds access

**Speaker Notes:**
The `items[items.length - 1]` pattern is important and worth memorising. It gives you the last element of any array regardless of how long it is — you don't need to know the length in advance. Ask: "What is items[-1]?" Undefined — JavaScript doesn't support negative indices the way Python does. If students come from Python, this is a common gotcha. Also reinforce: accessing out-of-bounds returns undefined, not an error. This is different from many languages (Java, C) which throw an exception. JavaScript being silent about out-of-bounds access means the off-by-one bug produces undefined output, not a visible crash — which can be harder to find.

---

### SLIDE 4 — Modifying Elements
**Type:** Code
**Headline:** Arrays Are Mutable — You Can Change Elements After Creation
**Content:**

```js
const cart = ["Wireless Earbuds", "Phone Case", "USB-C Cable"];
console.log(cart);  // ['Wireless Earbuds', 'Phone Case', 'USB-C Cable']

// Update an element by assigning to its index
cart[1] = "Laptop Bag";
console.log(cart);  // ['Wireless Earbuds', 'Laptop Bag', 'USB-C Cable']

// Add a new element at the end by assigning to length
cart[cart.length] = "Screen Protector";
console.log(cart);  // ['Wireless Earbuds', 'Laptop Bag', 'USB-C Cable', 'Screen Protector']
console.log(cart.length);  // 4
```

- Arrays declared with `const` are still **mutable** — elements can change
- `const` prevents reassigning the array variable itself (`cart = []` would fail)
- `const` does NOT prevent modifying the array's contents

**Visual:** Three snapshots of the cart array — first shows the initial 3 items; second shows index 1 updated from "Phone Case" to "Laptop Bag" with a red strikethrough on old value and green highlight on new; third shows a fourth item added; the `const` keyword is circled with an annotation "const means the variable can't be reassigned — not that the array is frozen"

**Speaker Notes:**
The const-but-mutable point often surprises students. Ask: "If you declare `const cart = []`, can you do `cart = ['a', 'b']`?" No — that reassigns the variable, which const prevents. "Can you do `cart[0] = 'a'`?" Yes — that modifies the array's contents, which const allows. The distinction: const protects the binding (which box the variable points to), not the contents of that box. This is the same reason `const student = {}` lets you do `student.name = "Amara"` — you're changing what's inside the object, not the variable itself. In practice, use const for arrays and objects unless you need to reassign the variable — which is rare.

---

### SLIDE 5 — Arrays of Objects
**Type:** Code
**Headline:** Arrays of Objects Are the Most Common Data Structure in Real Applications
**Content:**

```js
const orders = [
  { id: "ORD-001", customer: "Amara Obi",   amount: 4500  },
  { id: "ORD-002", customer: "Bayo Ade",    amount: 1200  },
  { id: "ORD-003", customer: "Chidi Nweke", amount: 8000  }
];

// Access the second order
console.log(orders[1]);
// → { id: 'ORD-002', customer: 'Bayo Ade', amount: 1200 }

// Access a property of the second order
console.log(orders[1].customer);  // Bayo Ade
console.log(orders[1].amount);    // 1200

// Access a nested property via chain
console.log(orders[0].id);  // ORD-001
```

- `orders[1]` gives you the whole object at index 1
- `orders[1].customer` chains bracket notation and dot notation
- This is the structure returned by APIs: arrays of records

**Visual:** Three stacked rows representing the orders array — each row is a box with its index (0, 1, 2) on the left and an object shape with id/customer/amount inside; two chained access arrows show: first arrow to `orders[1]` highlighting the whole second row, then a second arrow from that object to `.customer` highlighting "Bayo Ade" specifically

**Speaker Notes:**
This is the slide that makes students say "oh, this is what API data looks like." When you fetch orders from Konga's backend, or users from a database, you get an array of objects just like this. The chained access syntax `orders[1].customer` reads: "go to index 1 in the orders array, get the object there, then access its customer property." Work through it step by step: `orders[1]` → `{ id: 'ORD-002', customer: 'Bayo Ade', amount: 1200 }`, then `.customer` → `'Bayo Ade'`. This pattern is fundamental — students will use it in every module from here through Module 18.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Creating Arrays and Accessing Elements
**Content:**

| Syntax | What it does |
|--------|-------------|
| `[a, b, c]` | Create an array |
| `array[0]` | Access first element |
| `array[array.length - 1]` | Access last element |
| `array[i] = value` | Update element at index i |
| `array.length` | Number of elements |
| `array[i].property` | Access property of an object at index i |

**Key rules:**
- Indices start at 0, not 1
- Accessing out-of-range indices returns `undefined`
- `const` arrays are mutable — contents can change, variable can't be reassigned

**Up Next:** Topic 2 — push, pop, shift, unshift, splice & slice

**Speaker Notes:**
The summary table is a quick reference. Ask students to recite: "What does `orders[2].amount` give you?" The amount property of the object at index 2. "What does `orders[orders.length - 1]` give you?" The last order in the array. Topic 2 moves from reading arrays to modifying them: push/pop for the end, shift/unshift for the beginning, splice for anywhere in the middle, and slice for copying a portion.
