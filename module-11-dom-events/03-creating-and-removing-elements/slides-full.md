# Module 11 — Topic 3: Creating and Removing Elements
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Creating and Removing Elements
**Subheadline:** Module 11, Topic 3 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
The last two topics covered selecting elements and responding to events. This topic adds the final DOM capability: creating new elements on the fly and removing elements the user is done with. These three skills together — select, respond, create/remove — are all you need to build any interactive UI. The canonical example is a to-do list: add an item on click, delete it when done. By the end of this topic you'll be able to build that entirely from scratch.

---

### SLIDE 2 — Creating Elements
**Type:** Concept
**Headline:** document.createElement — Build a New DOM Node in Three Steps
**Content:**

**Three steps to add an element:**
1. **Create** the element: `document.createElement("tag")`
2. **Configure** it: set textContent, className, attributes
3. **Append** it to the DOM: `parent.appendChild(newElement)`

```js
// Step 1: create
const newItem = document.createElement("li");

// Step 2: configure
newItem.textContent = "Module 4 — Arrays";
newItem.className   = "module-item";

// Step 3: append to a parent
const list = document.getElementById("module-list");
list.appendChild(newItem);
// The <li> is now visible on the page
```

- `document.createElement("tag")` creates the element but doesn't add it to the page
- `appendChild` adds it as the **last child** of the parent
- `prepend` adds it as the **first child**
- `insertBefore(newEl, referenceEl)` inserts before a specific element

**Visual:** Three-step diagram — (1) createElement box floating above the tree; (2) textContent and className set on the box; (3) appendChild connecting it to the parent list node at the bottom; the rendered list shown with the new item added

**Speaker Notes:**
The most important thing about step 1: `createElement` creates an element but it doesn't appear on the page. It's a detached node floating in memory. You have to explicitly append it somewhere. This is actually useful — you can build and configure the element fully before attaching it, so there's no flash of incomplete content. The three-step pattern is worth memorizing: create → configure → append. You'll follow it every time you create a new element from JavaScript.

---

### SLIDE 3 — innerHTML for Bulk Creation
**Type:** Code
**Headline:** innerHTML Can Build Multiple Elements at Once — Use for Trusted Data
**Content:**

```js
const courses = [
  { id: "js",   title: "JavaScript Fundamentals", price: 15000 },
  { id: "html", title: "HTML & CSS Basics",        price: 12000 },
  { id: "git",  title: "Git & GitHub",             price: 10000 }
];

const container = document.getElementById("course-grid");

// Build all cards from the array
container.innerHTML = courses.map(course => `
  <div class="course-card" data-id="${course.id}">
    <h3>${course.title}</h3>
    <p>₦${course.price.toLocaleString()}</p>
    <button class="enroll-btn">Enroll</button>
  </div>
`).join("");
```

**createElement vs innerHTML:**
| Approach | Best for | Notes |
|----------|---------|-------|
| `createElement` + `appendChild` | Single elements, complex setup | Fine-grained control, more code |
| `innerHTML` with template literal | Multiple elements from an array | Concise, but never use with user input |

- Template literals with `${}` expressions make HTML generation clean
- `array.map().join("")` is the standard pattern for rendering a list of items
- After setting innerHTML, existing event listeners on children are wiped out

**Visual:** The array on the left with an arrow through map/join to the rendered grid of three cards on the right; a side note comparing createElement (single, manual) vs innerHTML (batch, from array)

**Speaker Notes:**
When you have an array of data and want to render each item as HTML, `innerHTML` with `map().join("")` is the pattern. Map transforms each object into an HTML string, join concatenates them all, and innerHTML injects the result. Template literals with backticks make this readable — you can see the HTML structure clearly. The warning: this only works safely with your own data, not anything a user typed. User input goes through textContent. Also worth noting: after you set innerHTML, any event listeners you had attached to child elements are gone — you'd need to re-attach them. For that reason, event delegation on the parent (from Topic 2) is often better when you need to handle clicks on dynamically generated content.

---

### SLIDE 4 — Removing Elements
**Type:** Code
**Headline:** remove() and removeChild() — Delete Elements from the DOM
**Content:**

```html
<ul id="notification-list">
  <li id="notif-1" class="notification">Payment received — ₦5,000</li>
  <li id="notif-2" class="notification">New module available</li>
</ul>
```

```js
// Remove a specific element
const notif1 = document.getElementById("notif-1");
notif1.remove();  // removes itself from the DOM

// Remove a child from a parent
const list   = document.getElementById("notification-list");
const notif2 = document.getElementById("notif-2");
list.removeChild(notif2);

// Remove the last child
const lastItem = list.lastElementChild;
if (lastItem) {
  lastItem.remove();
}

// Clear all children at once
list.innerHTML = "";
```

- `.remove()` — removes the element itself (modern, simplest)
- `.removeChild(child)` — parent removes a specific child (older pattern)
- `.lastElementChild` — the last child element (not text nodes)
- `parent.innerHTML = ""` — removes all children instantly

**Visual:** The notification list before and after each removal operation; a sequence showing notif-1 removed, then notif-2, then the empty ul; a comparison of .remove() vs .removeChild()

**Speaker Notes:**
`.remove()` is the modern approach — call it on the element itself and it removes itself from its parent. `.removeChild()` is the older pattern — you call it on the parent. Both work; `.remove()` is simpler. The `lastElementChild` property is useful when you're maintaining an ordered list and want to remove the oldest or newest item. The null guard matters: if the list is empty, `lastElementChild` returns null, and calling `.remove()` on null throws a TypeError. `parent.innerHTML = ""` is the nuclear option — it clears everything in one line. Useful when you're about to re-render a whole list from fresh data.

---

### SLIDE 5 — Create and Delete with Events
**Type:** Code
**Headline:** Combining createElement and Events — A Dynamic Item List
**Content:**

```html
<input id="item-input" placeholder="Add a module...">
<button id="add-btn">Add</button>
<ul id="item-list"></ul>
```

```js
const input  = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const list   = document.getElementById("item-list");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;  // ignore empty input

  // Create new list item
  const li = document.createElement("li");
  li.textContent = text;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = "";  // clear input
});
```

- Each added item gets its own delete button
- The delete handler captures `li` via closure — it always removes the right element
- Clearing `input.value = ""` after adding keeps the UX clean

**Visual:** The UI mockup showing an input field, Add button, and a list with three items each having a × button; clicking × removes that specific row; the closure captured `li` reference shown with an arrow from the delete handler to its parent li

**Speaker Notes:**
This is the complete interactive pattern: create on add, delete on click. The closure is the clever part: `() => li.remove()` — the arrow function inside the click listener captures the `li` variable from the outer scope. Each time through the loop, `li` is a different element, and each delete button's closure captures its own specific `li`. So clicking × on the first item removes the first item, not the last one. This is why closures matter in practice. Ask: what happens if the user clicks Add with an empty input? The `if (!text) return` guard returns early — nothing is added.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Creating and Removing Elements
**Content:**

- `document.createElement("tag")` — create a new element (not yet on page)
- Set `.textContent`, `.className`, `.setAttribute` before appending
- `parent.appendChild(el)` — add element as last child
- `parent.innerHTML = template` — build multiple elements from an array with map/join
- `element.remove()` — remove an element from the DOM
- `parent.innerHTML = ""` — clear all children

**The full pattern — add item on click:**
```js
addBtn.addEventListener("click", () => {
  const el = document.createElement("li");
  el.textContent = input.value.trim();
  list.appendChild(el);
  input.value = "";
});
```

**Up Next:** Module 12 — Array Higher-Order Functions

**Visual:** Summary card with the add-item pattern and a three-column reference: create / configure / append steps shown side by side

**Speaker Notes:**
The three-step pattern — createElement, configure, appendChild — and the map/join innerHTML pattern for lists cover 95% of element creation in real projects. Combined with `.remove()` for deletion and events for triggering both, you now have the complete DOM toolkit. The module demo will combine everything: selecting, modifying, creating, removing, and events all working together in a Publica Academy course management interface. Module 12 steps away from the DOM and goes deep on array methods — map, filter, reduce — which you'll bring back to the DOM in later modules for rendering data.
