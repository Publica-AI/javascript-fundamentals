# Module 8 — Topic 2: push, pop, shift, unshift, splice & slice
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** push, pop, shift, unshift, splice & slice
**Subheadline:** Module 8, Topic 2 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — push and pop: End of Array
**Type:** Concept
**Headline:** push Adds to the End | pop Removes from the End
**Content:**

```js
const cart = ["Wireless Earbuds", "Phone Case"];

// push — add one or more items to the end, returns new length
cart.push("USB-C Cable");
console.log(cart);         // ['Wireless Earbuds', 'Phone Case', 'USB-C Cable']
console.log(cart.length);  // 3

cart.push("Keyboard", "Mouse");  // push multiple at once
console.log(cart);         // ['Wireless Earbuds', 'Phone Case', 'USB-C Cable', 'Keyboard', 'Mouse']

// pop — remove and return the last item
const removed = cart.pop();
console.log(removed);  // Mouse — the removed item
console.log(cart);     // ['Wireless Earbuds', 'Phone Case', 'USB-C Cable', 'Keyboard']
```

- `push(item)` → adds to the end, returns the **new length**
- `pop()` → removes the last item, returns the **removed item**
- Both methods **mutate** (change) the original array

**Visual:** A horizontal array with push and pop arrows — a "push" arrow enters the right end with new items labeled with their values; a "pop" arrow exits the right end with the last item labeled "removed + returned"; the array length counter changes at each step

---

### SLIDE 3 — shift and unshift: Start of Array
**Type:** Concept
**Headline:** shift Removes from the Start | unshift Adds to the Start
**Content:**

```js
const queue = ["Amara", "Bayo", "Chidi"];

// shift — remove and return the first item
const first = queue.shift();
console.log(first);  // Amara — the removed item
console.log(queue);  // ['Bayo', 'Chidi']

// unshift — add one or more items to the start, returns new length
queue.unshift("Dami");
console.log(queue);  // ['Dami', 'Bayo', 'Chidi']

queue.unshift("Emeka", "Funmi");
console.log(queue);  // ['Emeka', 'Funmi', 'Dami', 'Bayo', 'Chidi']
```

- `shift()` → removes the first item, returns the **removed item**
- `unshift(item)` → adds to the start, returns the **new length**
- Both methods re-index all existing elements (slower than push/pop for large arrays)

**Visual:** The same queue array with shift and unshift arrows at the left end — "shift" arrow exits the left end with "Amara" labeled "removed"; "unshift" arrow enters the left end with new items; arrows below show all existing indices shifting right when unshift is used, with a label "all other elements re-indexed"

---

### SLIDE 4 — splice: Insert, Remove, or Replace Anywhere
**Type:** Code
**Headline:** splice Modifies an Array In Place at Any Position
**Content:**

```js
const products = ["Earbuds", "Phone Case", "USB Cable", "Keyboard"];

// splice(startIndex, deleteCount) — remove elements
const removed = products.splice(1, 2);
console.log(removed);   // ['Phone Case', 'USB Cable'] — removed items
console.log(products);  // ['Earbuds', 'Keyboard']

// splice(startIndex, deleteCount, ...items) — remove and insert
const products2 = ["Earbuds", "Phone Case", "USB Cable", "Keyboard"];
products2.splice(1, 1, "Laptop Bag", "Mouse");
console.log(products2);  // ['Earbuds', 'Laptop Bag', 'Mouse', 'USB Cable', 'Keyboard']

// splice(startIndex, 0, ...items) — insert without removing
const products3 = ["Earbuds", "Keyboard"];
products3.splice(1, 0, "Phone Case");
console.log(products3);  // ['Earbuds', 'Phone Case', 'Keyboard']
```

- `splice(start, deleteCount)` — removes `deleteCount` items starting at `start`
- `splice(start, 0, item)` — inserts without removing (deleteCount = 0)
- Returns the array of removed items
- **Mutates** the original array

**Visual:** Three examples shown as array diagrams — first shows two middle items removed with a bracket labeled "splice(1, 2)"; second shows one item replaced by two with annotations; third shows an item inserted at index 1 with a "splice(1, 0, ...)" label and an arrow showing the new item slotting in between existing items

---

### SLIDE 5 — slice: Copy a Portion
**Type:** Code
**Headline:** slice Returns a New Array — the Original Is Not Changed
**Content:**

```js
const orders = ["ORD-001", "ORD-002", "ORD-003", "ORD-004", "ORD-005"];

// slice(startIndex, endIndex) — end is exclusive (not included)
const recent = orders.slice(2, 4);
console.log(recent);  // ['ORD-003', 'ORD-004']
console.log(orders);  // ['ORD-001', 'ORD-002', 'ORD-003', 'ORD-004', 'ORD-005'] — unchanged

// slice from a position to the end
const lastThree = orders.slice(2);
console.log(lastThree);  // ['ORD-003', 'ORD-004', 'ORD-005']

// slice with negative index — count from the end
const lastTwo = orders.slice(-2);
console.log(lastTwo);  // ['ORD-004', 'ORD-005']
```

- `slice(start, end)` — returns a **new array** with elements from `start` up to (but not including) `end`
- Does **not** mutate the original array
- Negative index counts from the end: `-1` is last, `-2` is second-to-last

**Visual:** The orders array with two highlighted sections — `slice(2, 4)` shows indices 2 and 3 highlighted with a copy arrow going to a new array labeled "new array: ['ORD-003', 'ORD-004']"; the original array remains unchanged below; a separate "end is exclusive" annotation shows index 4 grayed out with label "not included"

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — push, pop, shift, unshift, splice & slice
**Content:**

| Method | Where | Mutates? | Returns |
|--------|-------|----------|---------|
| `push(item)` | End | Yes | New length |
| `pop()` | End | Yes | Removed item |
| `unshift(item)` | Start | Yes | New length |
| `shift()` | Start | Yes | Removed item |
| `splice(i, n)` | Anywhere | Yes | Removed items array |
| `slice(start, end)` | Anywhere | **No** | New array copy |

**Memory trick:**
- **splice** = modify **in place** (changes original)
- **slice** = make a copy (safe read, original untouched)

**Up Next:** Topic 3 — Iterating Arrays: for, for...of & forEach
