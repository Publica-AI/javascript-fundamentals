# Demo Guide — Module 10, Topic 2: Selecting Elements
**Module 10 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `index.html`, `demo/script.js`

---

## What This Demo Teaches

Students practice all three selection methods against a real page with multiple cards, a list, and nested elements. The four parts cover: `getElementById` vs `querySelector` with nested selectors, `querySelectorAll` with NodeList index access and `forEach`, `Array.from` for map/filter, and null from a failed selection with a guard pattern.

---

## Setup (Before Class)

1. Open `index.html` in Chrome
2. Open DevTools → Console (F12)
3. Have `script.js` visible in VS Code

---

## Demo Steps

### Part 1 — getElementById vs querySelector

> *"We have three course cards on the page. Ask: if I call `querySelector('.course-card')`, which card do I get?"*

Run Part 1. Show: `pageTitle.textContent` = "Publica Academy", `firstCard.tagName` = "DIV", `firstCardTitle.textContent` = "JavaScript Fundamentals".

> *"querySelector('.course-card .card-title') — that's a nested selector. It finds an element with class card-title that is inside an element with class course-card. It still returns just the first match."*

---

### Part 2 — querySelectorAll and NodeList

> *"Now I want all three cards. Ask: what does `querySelectorAll` return — an array?"*

Run Part 2. Show: length = 3, index access to first and third card titles, then the forEach loop printing all three titles.

> *"It returns a NodeList — not an array but iterable. Index access and forEach both work. Notice: inside the forEach I call `card.querySelector('.card-title')` — querySelector can be called on any element, not just document. It searches inside that element."*

---

### Part 3 — Array.from for map/filter

> *"Ask: if I try `priceNodes.map(...)` directly, what happens?"*

Before running, briefly show that `priceNodes.map` is undefined by typing it in the console. Then run Part 3.

> *"`Array.from(priceNodes)` converts the NodeList to a real array. Now `.map` works. This gives us the prices as a clean array of strings."*

---

### Part 4 — null from a Failed Selection

> *"Ask: what does getElementById return when there's no element with that id?"*

Run Part 4. Show: `null` logged, then "Element not found — skipping" from the guard, then the 3 module items from the for...of loop.

> *"Null is normal — it just means the selection failed. The guard pattern (`if (missing !== null)`) is how you avoid crashing. Always think: could this selection return null? If there's any chance, guard it."*

---

## Teaching Tips

- **Nested querySelector** on a specific element (not `document`) is a technique students need early — it's how you work with repeated card components
- **The null crash** is worth demonstrating live: call `missing.textContent` directly in the console and show the TypeError so students associate the error message with the cause
- Keep `Array.from` brief — it's a bridge to the array methods they already know from Module 8

---

## What's Next

**Topic 3** → Modifying Content, Attributes, and Styles — now that we can select elements, we'll learn to change them
