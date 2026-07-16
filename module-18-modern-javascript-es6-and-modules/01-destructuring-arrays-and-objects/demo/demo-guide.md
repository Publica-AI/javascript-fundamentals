# Demo Guide — Module 18, Topic 1: Destructuring Arrays & Objects
**Module 18 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node or browser)

---

## What This Demo Teaches

Students see array destructuring (by position, skipping, defaults, swapping), object destructuring (by name, renaming, defaults), destructuring in function parameters, nested destructuring with API-style data, and destructuring inside .map/.filter callbacks.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`

---

## Demo Steps

### Part 1 — Array Destructuring
Show position-based extraction, skipping with `, ,`, defaults, and the swap trick.

### Part 2 — Object Destructuring
Show name-based extraction, renaming with `:`, and defaults for missing keys.

### Part 3 — Function Parameters
Show destructuring directly in the parameter list — forEach calls displayStudent which destructures each object.

### Part 4 — Nested Destructuring
Show one-shot nested extraction, then contrast with the more readable two-step approach.

### Part 5 — With Array Methods
Show destructuring in .map and .filter callbacks — connects Module 12 HOFs to Module 18 syntax.

---

## Teaching Tips

- **Position vs name** — arrays match by position (index 0, 1, 2); objects match by key name. Repeat this distinction.
- **Start simple** — don't jump to nested destructuring. Build from single variables to params to nested.
- **The swap trick** — `[a, b] = [b, a]` impresses students and demonstrates a practical use.
- **Two-step nested** — acknowledge that one-shot nested destructuring can be hard to read. Two steps is often clearer.

---

## What's Next

**Topic 2** → Spread & Rest Operators — copying, merging, and collecting.
