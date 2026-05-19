# Module 10 — Topic 2: Selecting Elements
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Selecting Elements
**Subheadline:** Module 10, Topic 2 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — The Three Selection Methods
**Type:** Concept
**Headline:** Three Methods to Select Elements from the DOM
**Content:**

```js
// 1. By ID — returns one element or null
const heading = document.getElementById("page-title");

// 2. By CSS selector — returns first match or null
const intro = document.querySelector(".intro");
const button = document.querySelector("#submit-btn");

// 3. By CSS selector — returns all matches as NodeList
const items = document.querySelectorAll("li");
const cards = document.querySelectorAll(".card");
```

| Method | Returns | When to use |
|--------|---------|-------------|
| `getElementById("id")` | One element or `null` | You have a unique id |
| `querySelector("selector")` | First match or `null` | Any CSS selector, one result |
| `querySelectorAll("selector")` | NodeList (all matches) | Any CSS selector, multiple results |

- `getElementById` is the fastest — use it when you have an id
- `querySelector` accepts any CSS selector: `"h1"`, `".intro"`, `"#title"`, `"ul li"`
- `querySelectorAll` returns a NodeList — not an array, but iterable

**Visual:** Three code blocks side by side, each labeled with the method name — getElementById highlighted in green for "one element by id"; querySelector in blue for "first match by selector"; querySelectorAll in purple for "all matches as NodeList"; below each, a small DOM tree diagram with the matching node(s) highlighted

---

### SLIDE 3 — Selecting by ID and Class
**Type:** Code
**Headline:** getElementById Finds One — querySelectorAll Finds Many
**Content:**

```html
<h1 id="page-title" class="heading">Welcome</h1>
<p class="intro">Module 10</p>
<p class="intro">Module 11</p>
<button id="enroll-btn">Enroll Now</button>
```

```js
// getElementById — always one element
const title = document.getElementById("page-title");
console.log(title.textContent);    // Welcome

// querySelector — first match only
const firstIntro = document.querySelector(".intro");
console.log(firstIntro.textContent);  // Module 10

// querySelectorAll — all matches
const allIntros = document.querySelectorAll(".intro");
console.log(allIntros.length);     // 2
console.log(allIntros[0].textContent);  // Module 10
console.log(allIntros[1].textContent);  // Module 11
```

- If no element matches, `getElementById` and `querySelector` return `null`
- Accessing a property on `null` throws a `TypeError` — always check before use

**Visual:** The HTML on the left with each element highlighted by color; on the right, the matching result for each selection call with an arrow from the selector to the highlighted element

---

### SLIDE 4 — Working with NodeLists
**Type:** Code
**Headline:** querySelectorAll Returns a NodeList — Loop It with forEach or for...of
**Content:**

```html
<ul id="module-list">
  <li class="module-item">Module 1 — Intro</li>
  <li class="module-item">Module 2 — Variables</li>
  <li class="module-item">Module 3 — Control Flow</li>
</ul>
```

```js
const items = document.querySelectorAll(".module-item");

console.log(items.length);   // 3
console.log(items[0].textContent);  // Module 1 — Intro

// forEach — works on NodeList directly
items.forEach(item => {
  console.log(item.textContent);
});

// for...of — also works
for (const item of items) {
  console.log(item.textContent);
}
```

**NodeList is not an array:**
- Has `length` and `[index]` access — like an array
- Has `forEach` — works directly
- Does NOT have `map`, `filter`, `reduce`
- To use array methods: `Array.from(items).filter(...)`

**Visual:** The NodeList shown as a numbered sequence of nodes [0], [1], [2] with textContent labels; a side note shows "NodeList ≠ Array" with a checkmark next to forEach/for...of and an X next to map/filter

---

### SLIDE 5 — CSS Selector Power in querySelector
**Type:** Code
**Headline:** querySelector Accepts Any Valid CSS Selector
**Content:**

```html
<div class="course-card">
  <h2 class="card-title">JavaScript Fundamentals</h2>
  <p class="card-price">₦15,000</p>
  <button class="enroll-btn" data-course="js">Enroll</button>
</div>
```

```js
// Tag selector
const title = document.querySelector("h2");

// Class selector
const price = document.querySelector(".card-price");

// ID selector
const btn = document.querySelector("#submit");

// Nested selector — element inside element
const cardTitle = document.querySelector(".course-card h2");

// Attribute selector
const enrollBtn = document.querySelector("[data-course='js']");

// First of type
const firstBtn = document.querySelector("button");
```

- Any CSS selector that works in a stylesheet works here
- Nested selectors (`".course-card h2"`) limit the search to elements inside a parent
- Use the most specific selector needed — don't use `"div"` when you have a class

**Visual:** The HTML structure with each selector shown as a CSS rule pointing to the element it matches; a CSS rule-to-element arrow diagram matching each selector string to the highlighted node

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Selecting Elements
**Content:**

- `getElementById("id")` — returns one element or `null`
- `querySelector("selector")` — returns the first matching element or `null`
- `querySelectorAll("selector")` — returns a NodeList of all matches
- NodeList has `length`, index access, and `forEach` — use `Array.from()` for full array methods
- `querySelector` accepts any CSS selector: tag, class, id, nested, attribute

**Quick reference:**
```js
document.getElementById("id")        // → one element or null
document.querySelector(".class")      // → first match or null
document.querySelectorAll("li")       // → NodeList of all li elements
Array.from(nodeList)                  // → real array with map/filter
```

**Up Next:** Topic 3 — Modifying Content, Attributes, and Styles

**Visual:** Summary card with the three methods in a comparison table (method / returns / null if not found) and the quick reference block
