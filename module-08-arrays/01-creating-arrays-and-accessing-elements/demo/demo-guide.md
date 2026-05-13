# Demo Guide — Creating Arrays and Accessing Elements
**Module 8, Topic 1 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see arrays created and accessed: basic indexing, the out-of-bounds undefined behavior, element modification, the array-of-objects pattern that dominates real data structures, and the important const-but-mutable distinction. Part 2's out-of-bounds demonstration is the critical teaching moment — making the "indices start at 0, last index is length-1" rule concrete through a visible undefined output.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all five parts output correctly

---

## Demo Steps

### Part 1 — Array Basics

> *"items has 5 strings. prices has 5 numbers. What does items.length return?"*

Run Part 1. Show: length is 5.

> *"Length tells you how many elements exist. With 5 elements, the valid indices are 0, 1, 2, 3, 4 — always one less than the length."*

---

### Part 2 — Accessing Elements

1. **Ask before running:**

> *"items[0] is the first element. items[2] is the third. What does items[items.length - 1] give us? And what about items[10] and items[-1]?"*

2. Run Part 2. Show: Wireless Earbuds, Tecno Spark 20 Pro, Screen Protector, undefined, undefined.

> *"items[items.length - 1] is 5 - 1 = 4. items[4] is 'Screen Protector' — the last element. This pattern works on any array regardless of length. And items[10]? undefined — no error, just undefined. That's why the off-by-one bug from Module 6 shows undefined rather than crashing."*

---

### Part 3 — Modifying Elements

1. **Ask before running:**

> *"cart starts with 3 items. We assign to cart[1]. What changes? Then we assign to cart[cart.length]. What happens?"*

2. Run Part 3. Show: update replaces index 1, second assignment appends.

> *"Assigning to an existing index replaces that element. Assigning to index 3 (which equals cart.length) adds a new element. Length updates automatically."*

---

### Part 4 — Arrays of Objects

1. **Ask before running:**

> *"orders[1] gives us the whole object. orders[1].customer goes one level deeper. What will each log?"*

2. Run Part 4. Show: full object, then customer string, amount, etc.

> *"This is what real data looks like. Database rows, API responses, spreadsheet imports — all come as arrays of objects. The pattern `array[index].property` is one of the most common things you'll write in JavaScript."*

---

### Part 5 — const is Mutable

1. **Ask before running:**

> *"productList is declared with const. We're changing productList[0] and adding a new element. Will either of these throw an error?"*

2. Run Part 5. Show: both operations succeed.

> *"No error. const prevents reassigning the variable — `productList = ['new', 'array']` would fail. But const does NOT freeze the array's contents. You can change elements, add elements, remove elements. const just means this variable will always point to this same array."*

---

## Teaching Tips

- **The undefined from out-of-bounds** connects back to the Module 6 off-by-one bug — if students saw that error before, this explains why it produced undefined
- **Part 5 const mutation** often causes confusion in exercises — make it clear: reassigning fails, modifying contents succeeds
- **Preview arrays of objects**: tell students every module from here through Module 18 uses arrays of objects as the primary data structure — this slide is the foundation

---

## What's Next

**Task 61** → Slides for push, pop, shift, unshift, splice & slice
