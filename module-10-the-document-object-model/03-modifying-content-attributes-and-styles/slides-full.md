# Module 10 — Topic 3: Modifying Content, Attributes, and Styles
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Modifying Content, Attributes, and Styles
**Subheadline:** Module 10, Topic 3 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
In Topics 1 and 2 we learned what the DOM is and how to select elements from it. Now we get to the payoff: actually changing things. This topic covers the three categories of change you'll make to DOM elements in every project — changing their content (the text or HTML inside), changing their attributes (src, href, disabled), and changing their appearance (classes and inline styles). After this topic you'll be able to take a selected element and make it look and read however you want.

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

**Speaker Notes:**
Both properties let you change what's shown on the page. The difference: `textContent` treats everything you give it as plain text — if you write `"<b>Hello</b>"`, the user sees the literal angle brackets. `innerHTML` parses it as HTML, so `"<b>Hello</b>"` renders as bold text. Use `textContent` for 90% of cases — it's simpler and safer. The XSS warning on `innerHTML` is real: if you ever set `innerHTML` to something a user typed in, an attacker can inject script tags and steal data. This is a real-world security vulnerability. For user-generated content, always use `textContent`.

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

**Speaker Notes:**
Every HTML tag has attributes — `src`, `href`, `alt`, `class`, `disabled`, custom data attributes. The three methods — getAttribute, setAttribute, removeAttribute — give you full control over all of them. The shortcut for common attributes (setting `link.href` directly instead of `setAttribute`) is clean and readable for the properties you use most. But for less common attributes, especially custom data attributes like `data-course`, use `getAttribute` and `setAttribute`. A practical example: after a user submits a form, you might `setAttribute("disabled", "true")` on the submit button to prevent double submission, then `removeAttribute("disabled")` once the response comes back.

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

**Speaker Notes:**
`classList` is the cleanest way to manage visual state in JavaScript. The pattern you'll use constantly: CSS defines a `hidden` class that sets `display: none`, and JavaScript toggles it on or off. This separates concerns cleanly — CSS owns the appearance, JavaScript owns when to show or hide. The danger with `element.className = "new-class"` is that it wipes out all existing classes. If the element had three classes before, they're all gone. `classList.add` surgically adds one class while leaving the others untouched. Always use classList for manipulating individual classes.

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

**Speaker Notes:**
The camelCase conversion is mechanical — every hyphen in a CSS property name becomes a capital letter in JavaScript. `background-color` → `backgroundColor`. Just remember that when you type it. Inline styles are fine for dynamic values you calculate in JavaScript — setting a progress bar width to a percentage based on data, for example. But for state-based styling — active, error, disabled, hidden — use classList and CSS classes instead. The reason: CSS classes are in your stylesheet, visible to designers, easy to edit. Inline styles are scattered through JavaScript, harder to find, harder to override with media queries.

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

**Speaker Notes:**
Six tools. In practice you'll use textContent, classList.add/remove/toggle, and setAttribute most. The decision flow: changing text? textContent. Adding or removing a visual state? classList.toggle. Changing where a link goes or what image shows? setAttribute. Need an inline style for a calculated value? element.style. The pattern you've built across the three DOM topics is: select the element, then modify it. In Module 11 we add the third piece — responding to user actions with event listeners. That's where the DOM truly comes alive.
