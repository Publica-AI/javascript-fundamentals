# Module 8 — Topic 2: push, pop, shift, unshift, splice & slice
## Slide Deck (Full) — 6 Slides with Speaker Notes

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** push, pop, shift, unshift, splice & slice
**Subheadline:** Module 8, Topic 2 of 3 — JavaScript Fundamentals

**Speaker Notes:**
Topic 1 established how to create and read arrays. Topic 2 covers modification — the six methods every JavaScript developer uses constantly. Four of them mutate the array in place (push, pop, shift, unshift, splice). One of them doesn't (slice). The mutation vs. non-mutation distinction is important — confusing the two is a common source of bugs, especially as code gets more complex. The summary table at the end gives students a quick reference they'll use often.

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

**Speaker Notes:**
push and pop are the most used array methods. They work like a stack — last in, first out (LIFO). Cart items are the perfect mental model: add an item to the cart (push), undo the last item added (pop). Ask: "What does `cart.push('USB-C Cable')` return?" The new length — 3. Most developers don't capture the return value of push because they just want to add the item. "What does `cart.pop()` return?" The removed item — "Mouse". This is useful when you need to both remove the last item AND do something with it. Emphasise: both mutate the original. After `cart.pop()`, the array is permanently changed — "Mouse" is gone from cart.

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

**Speaker Notes:**
The naming is confusing — "shift" sounds like it should add, but it removes. The mnemonic: "shift" removes (shifts the first item out), "unshift" reverses that (un-does the shift by putting something back at the front). Together, push/shift implement a queue (FIFO — first in, first out): push adds to the back, shift removes from the front. This models a waiting list: Amara joined first, Amara leaves first. The performance note is worth mentioning briefly: shift and unshift are slower than push/pop because every element must be re-indexed. For small arrays this doesn't matter, but it's good to know.

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

**Speaker Notes:**
splice is the Swiss Army knife of array modification. The two required arguments are start index and delete count. "How many items are removed?" Zero, one, or many depending on deleteCount. When deleteCount is 0, nothing is removed — items are only inserted. When items are provided after deleteCount, they're inserted at start. Point out the return value: an array of the removed items (empty array if none were removed). This trips beginners up — splice returns what was removed, not the modified array. Walk through each example slowly. Ask students: "After `products.splice(1, 2)`, what's at products[1]?" Keyboard — which was at index 3 before. All elements shift to fill the gap.

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

**Speaker Notes:**
The critical distinction: slice does NOT modify the original. It's a copy operation. After `orders.slice(2, 4)`, `orders` still has all 5 elements. This is unlike splice, push, pop, shift, unshift — all of which change the original. Ask: "Why would you want a copy?" When you need to work with a subset of data without affecting the source. For example, showing "last 3 orders" in a UI without changing your data store. The exclusive end index is consistent with how JavaScript handles string .slice() and the for loop `i < array.length` pattern — the end boundary is always excluded. `slice(-2)` is a shorthand for "the last 2 elements" — negative indices count from the end.

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

**Speaker Notes:**
The summary table is the key reference — five of six methods mutate, slice does not. The memory trick (splice = in place, slice = safe copy) is worth spending a moment on because the names are so similar that students confuse them frequently. A practical tip: when in doubt whether a method mutates, check MDN and look for "mutates" or "modifies the array" in the first paragraph. Topic 3 covers forEach — the modern iteration method — alongside the loops from Module 6. It also introduces the three most important higher-order methods: map, filter, and find.
