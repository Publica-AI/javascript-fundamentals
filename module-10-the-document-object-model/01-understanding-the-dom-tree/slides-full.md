# Module 10 — Topic 1: Understanding the DOM Tree
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Understanding the DOM Tree
**Subheadline:** Module 10, Topic 1 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Welcome to Module 10. Up to now, all the JavaScript you've written has lived in its own bubble — variables, functions, objects, arrays. You've run everything in Node or a plain script file and seen output in the console. This module changes that. We're going to connect JavaScript to an actual webpage. The bridge between JavaScript and the HTML page is called the DOM — the Document Object Model. By the end of this topic you'll understand exactly what the DOM is, why it's structured as a tree, and how JavaScript reads properties off any element on the page.

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

**Speaker Notes:**
Ask the class: when the browser reads an HTML file, what does it actually do with it? It doesn't just display pixels — it parses every tag and builds an internal JavaScript representation of the whole page. That representation is the DOM. Think of it as a live map. If you change something on the map — move a node, update its text — the browser immediately redraws that part of the page. This is how every interactive website works: JavaScript reads user input, updates the DOM, and the browser reflects the change visually. The four bullet points here are not theoretical — these are the four operations you will perform in every frontend project you ever build.

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

**Speaker Notes:**
Why a tree? Because HTML is inherently nested — elements contain other elements. A tree is the natural data structure for that. Every node except the root has exactly one parent. The root is `document` — it's the global object you access in JavaScript to reach any element on the page. Point to the three code lines: these aren't new methods — `document.body` and `document.title` are just properties you access with dot notation, exactly like properties on any object we've worked with. The terminology — parent, child, sibling — you'll use this constantly when talking about DOM manipulation. Burn it in now.

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

**Speaker Notes:**
Most of the time you'll work with element nodes — the ones that correspond to HTML tags. But it's useful to know the DOM is more granular than that: the attributes (`id`, `class`) are their own nodes, and the visible text is a text node. The properties we focus on here — tagName, id, className, textContent — are the ones you'll read in every project. Note that `tagName` returns uppercase: `H1`, not `h1`. That's just how the DOM spec works — good to know before you write a comparison and wonder why it doesn't match. `document.querySelector('h1')` is a preview of Topic 2 — we'll go deep on selecting elements there.

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

**Speaker Notes:**
This is a practical rule, not a theoretical one. If you put your script in the `<head>` and try to do `document.getElementById('title')`, you get null — the element hasn't been parsed yet. This is one of the most common beginner mistakes, and you'll see it in every forum when someone asks "why is my DOM query returning null?" The fix is simple: script goes at the bottom of body. There's a more modern alternative — the `defer` attribute on the script tag — but for now the bottom-of-body pattern is clear, predictable, and what you should use. It will never fail you.

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

**Visual:** Summary card with five bullet points and the four key properties listed in a two-column reference layout

**Speaker Notes:**
Quick check: what does the DOM stand for? Document Object Model. What is `document`? The root of the tree — the entry point for everything. If I call `document.title`, what do I get? The text content of the `<title>` tag in the head. If I put my script in the head before the body elements, what happens when I try to query one of them? I get null — the element doesn't exist yet. These are the four questions worth asking before moving on. In Topic 2 we go deeper on selecting elements — querySelector, getElementById, querySelectorAll — which is how you'll grab specific nodes from the tree in every real project.
