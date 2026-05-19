# Module 10 — Topic 2: Selecting Elements
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Selecting Elements
**Subheadline:** Module 10, Topic 2 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
In Topic 1 we established what the DOM is — a tree of JavaScript objects that the browser builds from your HTML. Now we need to answer the practical question: how do I grab a specific element from that tree so I can do something with it? That's what selecting elements is about. You'll use three methods constantly: `getElementById`, `querySelector`, and `querySelectorAll`. By the end of this topic you'll be able to select any element on any page using the right method for the job.

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

**Speaker Notes:**
These three methods are the front door to the DOM. You'll call one of them at the start of almost every DOM interaction. The decision tree is simple: do you have an id? Use `getElementById` — it's the fastest. Do you need one element but only have a class or a more complex selector? Use `querySelector`. Do you need multiple elements — every list item, every button, every card? Use `querySelectorAll`. Notice that `querySelector` and `querySelectorAll` both take a CSS selector string — the same syntax you use in a stylesheet. That's intentional. If you know CSS selectors, you already know how to use these.

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

**Speaker Notes:**
Walk through the HTML first. We have two paragraphs both with class `intro`. Ask: if I call `querySelector('.intro')`, which one do I get? The first one — `querySelector` always returns the first match in document order. If I want both, I need `querySelectorAll`. The key behavior to emphasize: when there's no match, you get `null`. This is why beginners crash their scripts — they select an element, get null because they misspelled the id or the class, and then immediately call `.textContent` on null. That throws a TypeError. The null check is a real pattern you'll use when you're not certain an element exists.

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

**Speaker Notes:**
A NodeList looks like an array but isn't. This trips people up. You can use `length`, index access (`[0]`, `[1]`), `forEach`, and `for...of` — those all work. What doesn't work: `map`, `filter`, `reduce`. If you call `items.map(...)` on a NodeList, you get `TypeError: items.map is not a function`. The fix is one line: wrap it in `Array.from()`. After that it's a real array and you have all the array methods. In practice, `forEach` and `for...of` cover 90% of what you need when working with NodeLists — you only need `Array.from` when you want `map` or `filter`.

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

**Speaker Notes:**
This is where `querySelector` becomes powerful. Any selector you've written in CSS works here — tag, class, id, descendant (`".course-card h2"`), attribute (`[data-course='js']`). The descendant selector is worth pausing on: `".course-card h2"` finds an h2 that is inside an element with class `course-card`. This is useful when you have multiple h2 elements on a page but only want the one inside the card. In practice you'll use class selectors most often. The attribute selector is less common but useful for custom data attributes. The rule of thumb: be specific enough to select exactly what you need, but no more complex than that.

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

**Speaker Notes:**
Three methods. That's the whole topic. `getElementById` for ids, `querySelector` for one element by any selector, `querySelectorAll` for multiple elements. The null risk is real — always be aware that a failed selection returns null, and calling a property on null crashes. NodeList is not an array — forEach and for...of work, map and filter don't. In Topic 3 we go from selecting to doing: changing text, changing attributes, changing styles. Everything you select in this topic becomes the target of modifications in the next one.
