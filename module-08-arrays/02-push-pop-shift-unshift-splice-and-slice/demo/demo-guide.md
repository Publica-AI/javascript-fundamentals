# Demo Guide — push, pop, shift, unshift, splice & slice
**Module 8, Topic 2 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see all six array methods in context: push/pop for cart management (end operations), shift/unshift for a waitlist (queue pattern), splice for removing and inserting in the middle, and slice for extracting a portion without touching the original. The slice demonstration (Part 5) is the critical teaching moment — showing `console.log(orders)` after the slice proves the original is untouched.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all five parts output correctly

---

## Demo Steps

### Part 1 — push and pop

1. **Ask before running:**

> *"cart starts with 2 items. We push one, then push two more, then pop. What does pop return? What does cart look like after?"*

2. Run Part 1. Show each step.

> *"push returns the new length — 3 after the first push. pop returns the removed item: 'Mouse'. After pop, cart has 4 items. Both mutate the original — cart is permanently changed."*

---

### Part 2 — shift and unshift

1. **Ask before running:**

> *"waitlist is ['Amara', 'Bayo', 'Chidi']. shift removes from the front. What does it return? What's left?"*

2. Run Part 2. Show: Amara is removed, Bayo and Chidi remain, then Dami is added to the front.

> *"shift returns 'Amara' — the first person in the queue leaves. unshift adds Dami to the front. This is a queue: first in, first out. Note: all existing elements had to shift right when Dami was added — indices 0 and 1 changed."*

---

### Part 3 — splice Remove

1. **Ask before running:**

> *"splice(1, 2) starts at index 1 and removes 2 items. Which items are removed from products?"*

2. Run Part 3. Show: 'Phone Case' and 'USB Cable' removed; products is now ['Earbuds', 'Keyboard'].

> *"splice returns the removed items as an array. The original products is permanently shorter — 'Earbuds' is still at index 0, but 'Keyboard' is now at index 1 (it was at 3 before)."*

---

### Part 4 — splice Insert and Replace

> *"We can also insert without removing: splice(1, 0, 'Laptop Bag') — delete count is 0, but we pass a new item. Then splice(2, 1, 'Mouse', 'Charger') — remove 1 at index 2, insert 2 in its place."*

Run Part 4. Walk through each log.

> *"splice is the most flexible mutation method: remove, insert, replace — at any position."*

---

### Part 5 — slice (No Mutation)

1. **Ask before running:**

> *"orders has 5 items. slice(2, 4) copies indices 2 and 3. Does the original change?"*

2. Run Part 5. Point specifically to `console.log("Original unchanged:", orders)`.

> *"The original is unchanged. slice creates a NEW array — it doesn't touch orders. This is the key difference from splice. Whenever you need a portion of an array without affecting the source, use slice."*

---

## Teaching Tips

- **Part 5's 'Original unchanged' log** is the moment to emphasise — run it slowly, point at the log, make it clear that orders still has 5 elements after slice
- **The splice naming confusion** (splice mutates, slice doesn't) is worth repeating: "splice edits in place, slice makes a copy"
- **If students ask about .concat()** — it's like slice (non-mutating) and can combine arrays; cover it briefly if they ask, but it's not required for this demo

---

## What's Next

**Task 63** → Slides for Iterating Arrays: for, for...of & forEach
