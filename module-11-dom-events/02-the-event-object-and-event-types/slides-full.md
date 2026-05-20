# Module 11 — Topic 2: The Event Object and Event Types
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** The Event Object and Event Types
**Subheadline:** Module 11, Topic 2 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
In Topic 1 you learned to attach listeners and read input values. But event handlers can receive much more information than just "something happened." Every time an event fires, JavaScript creates an event object that describes the event in detail — which element was interacted with, what key was pressed, whether the shift key was held. This topic covers how to use that object and how to stop the browser's default behaviour when you need to handle things yourself.

---

### SLIDE 2 — The Event Object
**Type:** Concept
**Headline:** JavaScript Passes an Event Object to Every Handler — It Describes What Happened
**Content:**

```js
const btn = document.getElementById("enroll-btn");

btn.addEventListener("click", function(event) {
  console.log(event.type);       // click
  console.log(event.target);     // <button id="enroll-btn">...</button>
  console.log(event.target.id);  // enroll-btn
});

// Arrow function — same behaviour
btn.addEventListener("click", (e) => {
  console.log(e.type);    // click
  console.log(e.target);  // the button element
});
```

**Key event properties:**

| Property | What it holds |
|----------|--------------|
| `event.type` | The event name: `"click"`, `"input"`, `"keydown"` |
| `event.target` | The element that triggered the event |
| `event.target.id` | The id of the element that was clicked |
| `event.target.value` | The current value (for inputs) |
| `event.key` | The key pressed (for keyboard events) |

- The parameter name is conventionally `event` or `e` — the name doesn't matter
- `event.target` is the element the user interacted with
- Available in every event handler — just add the parameter

**Visual:** A click on a button element; an arrow from the click to the handler function; the event object shown as a box with its key properties listed; event.target highlighted pointing back to the button element

**Speaker Notes:**
The event object is automatically created by the browser and passed as the first argument to your handler. You just need to declare a parameter to receive it. The name is up to you — `event`, `e`, `evt` are all conventional. `event.target` is the most useful property: it's the actual DOM element the user interacted with. So `e.target.id` gives you the id of the clicked element, `e.target.value` gives the current input value, `e.target.textContent` gives the text inside the element. This is how a single handler can respond differently based on which element triggered it.

---

### SLIDE 3 — event.target for Dynamic Handlers
**Type:** Code
**Headline:** event.target Tells You Which Element Was Clicked — Essential for Dynamic Lists
**Content:**

```html
<ul id="course-list">
  <li data-course="js">JavaScript Fundamentals</li>
  <li data-course="html">HTML & CSS Basics</li>
  <li data-course="git">Git & GitHub</li>
</ul>
<p id="selected"></p>
```

```js
const list = document.getElementById("course-list");
const selected = document.getElementById("selected");

// One listener on the parent — handles all list items
list.addEventListener("click", (e) => {
  const course = e.target.getAttribute("data-course");
  const name   = e.target.textContent;
  selected.textContent = "Selected: " + name + " (" + course + ")";
});
```

**Event delegation — why one parent listener beats many child listeners:**
- Adding one listener to the parent catches clicks on all children
- Works for items added dynamically (after the listener is set up)
- Less memory than adding a listener to every list item

**Visual:** A list with three items; one listener bubble on the parent `<ul>`; click arrows from each `<li>` bubbling up to the parent; the event.target pointing to whichever li was clicked

**Speaker Notes:**
This is event delegation — one of the most important patterns in DOM programming. Instead of adding a listener to each list item, you add one listener to the parent. When a child item is clicked, the event bubbles up to the parent, and `e.target` tells you which child was the origin. The advantage: if you later add more items to the list (dynamically, from an API), the listener already handles them — no new listeners needed. The data attribute pattern with `data-course` is clean: it stores the machine-readable identifier separately from the display text. You'll use this constantly in real projects.

---

### SLIDE 4 — Keyboard Events
**Type:** Code
**Headline:** keydown and keyup — Use event.key to Detect Specific Keys
**Content:**

```html
<input id="search" type="text" placeholder="Search courses...">
<p id="search-result"></p>
```

```js
const search = document.getElementById("search");
const result = document.getElementById("search-result");

search.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);  // e.g., "a", "Enter", "Backspace"

  if (e.key === "Enter") {
    result.textContent = "Searching for: " + search.value;
  }

  if (e.key === "Escape") {
    search.value = "";
    result.textContent = "";
  }
});
```

**Common key values:**
- Letter keys: `"a"`, `"b"`, `"A"` (shift+a)
- Special keys: `"Enter"`, `"Escape"`, `"Backspace"`, `"Tab"`, `"ArrowUp"`, `"ArrowDown"`
- Modifier detection: `e.shiftKey`, `e.ctrlKey`, `e.metaKey` (boolean)

```js
// Ctrl + S pattern
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();  // prevent browser save dialog
    console.log("Save shortcut triggered");
  }
});
```

**Visual:** A keyboard with Enter and Escape highlighted; a code path showing `e.key === "Enter"` triggering the search and `e.key === "Escape"` clearing the input; a modifier key table showing ctrlKey, shiftKey booleans

**Speaker Notes:**
Keyboard listeners are essential for search bars, text editors, keyboard shortcuts. `e.key` gives a human-readable string for the key pressed — capital letters are distinct from lowercase, which lets you detect Shift. The most common use case: trigger a search on Enter, cancel on Escape. The modifier boolean properties (`ctrlKey`, `shiftKey`) let you detect key combinations. Ask: if I listen on `document` instead of an input, what does that mean for which key presses I capture? All of them — anywhere on the page. That's how you build keyboard shortcuts that work globally regardless of where the user's focus is.

---

### SLIDE 5 — preventDefault
**Type:** Code
**Headline:** preventDefault Stops the Browser's Default Behaviour for an Event
**Content:**

```html
<form id="enrol-form">
  <input id="email" type="email" placeholder="Email">
  <button type="submit">Enrol</button>
</form>
<p id="form-status"></p>
```

```js
const form   = document.getElementById("enrol-form");
const email  = document.getElementById("email");
const status = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();  // stop the page from reloading

  const emailValue = email.value.trim();

  if (!emailValue) {
    status.textContent = "Please enter an email address.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Enrolling " + emailValue + "...";
  status.style.color = "green";
});
```

**When to use `preventDefault`:**
- Form `submit` — prevents page reload/navigation (the default for form submission)
- Link `click` — prevents navigation to the href
- Drag events — prevents the browser's default drag behaviour
- `keydown` with Ctrl/Cmd combos — prevents browser shortcuts (Ctrl+S, etc.)

**Visual:** Two paths — left shows the default form submission (arrow to page reload); right shows preventDefault being called (arrow to JS function, no page reload); a red cross blocking the default path

**Speaker Notes:**
Every form, when submitted, triggers a full page reload by default — the browser sends the form data to the server and loads a new page. In modern web apps, you don't want that. `e.preventDefault()` cancels the default and lets your JavaScript handle it instead. This is the standard opening line of every form submit handler. Notice it comes first, before any validation — you call it unconditionally so the page never reloads regardless of what the validation finds. The `.trim()` call removes leading/trailing whitespace from the email value — good practice because users often accidentally type a space. Ask: what does `email.value.trim()` return if the input is empty? An empty string — which is falsy in a boolean context.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — The Event Object and Event Types
**Content:**

- Every handler receives an event object as its first parameter (`event` or `e`)
- `event.target` — the element that triggered the event
- `event.target.value` — the current input value
- `event.key` — the key pressed in keyboard events
- `event.preventDefault()` — stops the browser's default action
- Event delegation — one listener on a parent catches events from all children

**Quick reference:**
```js
el.addEventListener("click", (e) => {
  e.target          // the clicked element
  e.target.value    // input value
  e.key             // key name (keyboard events)
  e.preventDefault() // stop default behaviour
});
```

**Up Next:** Topic 3 — Creating and Removing Elements

**Visual:** Summary card with the event object property table and a callout: "e.preventDefault() on form submit — prevents page reload"

**Speaker Notes:**
Four properties, one method. `e.target` for which element, `e.target.value` for input text, `e.key` for keyboard, `e.preventDefault()` for stopping defaults. The event delegation pattern — one parent listener instead of many child listeners — is the professional approach for any list or repeated component. In Topic 3 we complete the picture: creating new DOM elements from JavaScript and removing them. Combined with events, this is how every to-do list, comment thread, and shopping cart is built.
