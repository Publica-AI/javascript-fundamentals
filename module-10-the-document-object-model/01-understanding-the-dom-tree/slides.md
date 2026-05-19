# Module 10 — Topic 1: Understanding the DOM Tree
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Understanding the DOM Tree
**Subheadline:** Module 10, Topic 1 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — What Is the DOM?
**Type:** Concept
**Headline:** The DOM Is JavaScript's Live Map of the HTML Page
**Content:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Publica Academy</title>
  </head>
  <body>
    <h1 id="title">Welcome</h1>
    <p class="intro">JavaScript Fundamentals</p>
    <ul>
      <li>Module 1</li>
      <li>Module 2</li>
    </ul>
  </body>
</html>
```

When the browser loads this HTML, it builds a **Document Object Model** (DOM):
- A tree of JavaScript objects, one per HTML element
- Each element becomes a **node** in the tree
- JavaScript can read, modify, add, or remove any node

**What JavaScript can do with the DOM:**
- Change text: `"Welcome"` → `"Welcome, Amara!"`
- Change styles: make a button red
- Add elements: append a new `<li>` to the list
- Remove elements: hide a notification

**Visual:** An HTML code block on the left with a tree diagram on the right — the tree shows the document root at the top, branching to html, which branches to head (→ title → "Publica Academy") and body (→ h1#title, → p.intro, → ul → two li nodes); arrows connect corresponding HTML tags to their tree node representations

---

### SLIDE 3 — The DOM Tree Structure
**Type:** Concept
**Headline:** The DOM Is a Tree — Every Element Is a Node with a Parent and Children
**Content:**

```
document
└── html
    ├── head
    │   └── title "Publica Academy"
    └── body
        ├── h1 #title "Welcome"
        ├── p .intro "JavaScript Fundamentals"
        └── ul
            ├── li "Module 1"
            └── li "Module 2"
```

**Key node relationships:**
- **Parent:** the element that directly contains this node (`body` is parent of `h1`)
- **Child:** an element directly inside this node (`h1` and `p` are children of `body`)
- **Sibling:** elements at the same level with the same parent (`h1` and `p` are siblings)
- **Root:** `document` — the entry point to the entire tree

```js
// Access the root
console.log(document);           // the document object
console.log(document.body);      // the body element
console.log(document.title);     // "Publica Academy"
```

**Visual:** The same tree diagram with three relationship labels added — a bracket around body-children labeled "siblings", an upward arrow from h1 to body labeled "parent", a downward arrow from body to h1 labeled "child"; document is labeled "root" at the top; the tree lines are color-coded by depth level

---

### SLIDE 4 — Element, Text, and Attribute Nodes
**Type:** Code
**Headline:** DOM Nodes Have Types — Elements, Text, and Attributes
**Content:**

```html
<h1 id="title" class="heading">Welcome to Publica</h1>
```

This one HTML line creates multiple nodes:

| Node type | Content | Access |
|-----------|---------|--------|
| Element node | `<h1>` tag | `document.querySelector('h1')` |
| Attribute node | `id="title"`, `class="heading"` | `.getAttribute('id')` |
| Text node | `"Welcome to Publica"` | `.textContent` |

```js
const heading = document.querySelector('h1');

console.log(heading.tagName);          // H1
console.log(heading.id);               // title
console.log(heading.className);        // heading
console.log(heading.textContent);      // Welcome to Publica
```

- `tagName` — the uppercase tag name
- `id` — the element's id attribute
- `className` — the element's class attribute
- `textContent` — the visible text inside the element

**Visual:** The HTML line `<h1 id="title" class="heading">Welcome to Publica</h1>` broken into three labeled sections — the `<h1>` tag highlighted with label "element node"; `id="title" class="heading"` highlighted with label "attribute nodes"; "Welcome to Publica" highlighted with label "text node"; arrows from each section point to the corresponding DOM property read in the code

---

### SLIDE 5 — How JavaScript Connects to the Page
**Type:** Code
**Headline:** JavaScript Runs Inside the Browser and Can Access document Immediately
**Content:**

```html
<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Welcome</h1>
  <p id="subtitle">JavaScript Fundamentals</p>

  <!-- Script at the bottom of body — HTML is loaded before JS runs -->
  <script src="script.js"></script>
</body>
</html>
```

```js
// script.js
console.log(document.title);   // Publica Academy
console.log(document.body);    // <body>...</body> element

const heading = document.getElementById("title");
console.log(heading.textContent);  // Welcome
```

**Why script goes at the bottom:**
- HTML is parsed top-to-bottom
- A script at the top runs before the elements below it exist
- A script at the bottom of `<body>` runs after all HTML has been parsed and all elements exist

**Visual:** Two versions of the HTML file — left shows `<script>` in the `<head>` with a red annotation "h1 doesn't exist yet when script runs"; right shows `<script>` at the bottom of `<body>` with a green annotation "all elements already parsed — script can access everything"

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Understanding the DOM Tree
**Content:**

- The DOM is the browser's JavaScript representation of an HTML page
- It's a **tree** — every element is a node with a parent, children, and siblings
- `document` is the root and entry point for all DOM access
- Nodes have types: element nodes, attribute nodes, text nodes
- Place `<script>` at the bottom of `<body>` so elements exist when the script runs

**Key properties on any DOM element:**
- `.tagName` — tag name (uppercase)
- `.id` — id attribute value
- `.className` — class attribute value
- `.textContent` — visible text content

**Up Next:** Topic 2 — Selecting Elements
