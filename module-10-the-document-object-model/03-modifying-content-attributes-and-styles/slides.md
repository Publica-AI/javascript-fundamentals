# Module 10 — Topic 3: Modifying Content, Attributes, and Styles
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Modifying Content, Attributes, and Styles
**Subheadline:** Module 10, Topic 3 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — Changing Text Content
**Type:** Code
**Headline:** textContent and innerHTML — Two Ways to Change What a User Sees
**Content:**

```html
<h1 id="greeting">Welcome</h1>
<p id="status">Loading...</p>
<div id="card"></div>
```

```js
const greeting = document.getElementById("greeting");
const status = document.getElementById("status");
const card = document.getElementById("card");

// textContent — plain text only (safe)
greeting.textContent = "Welcome, Amara!";
status.textContent = "Enrolled in JavaScript Fundamentals";

// innerHTML — parses HTML tags
card.innerHTML = "<strong>Course:</strong> JavaScript Fundamentals";

// Reading current content
console.log(greeting.textContent);  // Welcome, Amara!
```

| Property | Sets | Parses HTML? | Use for |
|----------|------|-------------|---------|
| `textContent` | Plain text | No | Most cases — safe, fast |
| `innerHTML` | HTML string | Yes | When you need tags in content |

- **Prefer `textContent`** when the content is plain text — it's faster and safer
- Use `innerHTML` only when you need to insert HTML structure
- Never set `innerHTML` to user-supplied input — this is an XSS vulnerability

**Visual:** Two panels — left shows `textContent` setting "Welcome, Amara!" with the rendered page; right shows `innerHTML` inserting bold text inside a div with the rendered output; a warning icon next to innerHTML with "don't use for user input"

---

### SLIDE 3 — Modifying Attributes
**Type:** Code
**Headline:** getAttribute, setAttribute, and removeAttribute Control Any HTML Attribute
**Content:**

```html
<img id="hero-img" src="placeholder.jpg" alt="Course banner">
<a id="enroll-link" href="/enroll">Enroll Now</a>
<input id="email-input" type="email" placeholder="Enter email">
```

```js
const img = document.getElementById("hero-img");
const link = document.getElementById("enroll-link");
const input = document.getElementById("email-input");

// Get an attribute value
console.log(img.getAttribute("src"));       // placeholder.jpg
console.log(link.getAttribute("href"));     // /enroll

// Set an attribute
img.setAttribute("src", "javascript-course.jpg");
img.setAttribute("alt", "JavaScript Fundamentals course");

link.setAttribute("href", "/courses/javascript");

// Remove an attribute
input.removeAttribute("placeholder");

// Short-cut: direct property for common attributes
input.disabled = true;
link.href = "/courses/javascript";  // same as setAttribute
```

- `getAttribute("name")` — reads any attribute
- `setAttribute("name", "value")` — sets any attribute
- `removeAttribute("name")` — removes the attribute entirely
- Common attributes (`src`, `href`, `disabled`, `value`) can also be set as properties directly

**Visual:** The HTML markup on the left; arrows pointing from each method call to the attribute it modifies; the rendered state of the img and link before and after the changes shown in two columns

---

### SLIDE 4 — Modifying Classes
**Type:** Code
**Headline:** classList — Add, Remove, and Toggle CSS Classes Without Replacing Them All
**Content:**

```html
<button id="enroll-btn" class="btn">Enroll</button>
<div id="alert-box" class="alert hidden">Payment failed</div>
```

```js
const btn = document.getElementById("enroll-btn");
const alertBox = document.getElementById("alert-box");

// Add a class
btn.classList.add("btn-primary");
// btn now has class="btn btn-primary"

// Remove a class
btn.classList.remove("btn");
// btn now has class="btn-primary"

// Toggle — adds if absent, removes if present
alertBox.classList.toggle("hidden");
// hidden removed → alert now visible

alertBox.classList.toggle("hidden");
// hidden added back → alert hidden again

// Check if a class exists
console.log(btn.classList.contains("btn-primary"));  // true
```

**Why classList over className?**
- `element.className = "new-class"` — **replaces all classes**
- `element.classList.add("new-class")` — **adds without removing others**
- Always use `classList` for adding, removing, or toggling individual classes

**Visual:** The button element showing its class list before and after each classList call; a callout box comparing className assignment (replaces) vs classList.add (appends)

---

### SLIDE 5 — Modifying Inline Styles
**Type:** Code
**Headline:** element.style Sets Inline CSS — Use classList for Persistent Styling
**Content:**

```js
const heading = document.getElementById("page-title");
const card = document.querySelector(".course-card");

// Set inline styles
heading.style.color = "navy";
heading.style.fontSize = "2rem";

card.style.backgroundColor = "#f0f4ff";
card.style.border = "2px solid navy";
card.style.padding = "16px";

// Read a style
console.log(heading.style.color);   // navy

// Remove a style (set to empty string)
heading.style.color = "";
```

**CSS property names in JS:**
- Hyphenated CSS names become camelCase in JavaScript
- `background-color` → `backgroundColor`
- `font-size` → `fontSize`
- `border-radius` → `borderRadius`

**Best practice:**
- Use `element.style` for **dynamic, one-off changes** (e.g., setting a calculated width)
- Use `classList` + CSS classes for **state-based changes** (active, hidden, error) — easier to maintain

**Visual:** A CSS property name on the left (background-color, font-size, border-radius) with an arrow to the JS equivalent (backgroundColor, fontSize, borderRadius); the card element shown with and without the applied inline styles

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Modifying Content, Attributes, and Styles
**Content:**

- `element.textContent = "..."` — change visible text (safe)
- `element.innerHTML = "<b>...</b>"` — insert HTML structure (never use with user input)
- `element.getAttribute("attr")` / `element.setAttribute("attr", "val")` — read/write any attribute
- `element.classList.add/remove/toggle/contains` — manage CSS classes individually
- `element.style.propertyName = "value"` — set inline styles (camelCase for hyphenated names)

**Quick reference:**
```js
el.textContent = "text";             // change text
el.innerHTML = "<b>bold</b>";        // insert HTML
el.setAttribute("href", "/page");    // set attribute
el.classList.add("active");          // add class
el.classList.toggle("hidden");       // toggle class
el.style.backgroundColor = "navy";   // inline style
```

**Up Next:** Module 11 — DOM Events

**Visual:** Summary reference card with all six operations listed with example snippets and a reminder note: "classList over className, textContent over innerHTML for plain text"
