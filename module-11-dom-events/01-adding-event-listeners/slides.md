# Module 11 — Topic 1: Adding Event Listeners
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Adding Event Listeners
**Subheadline:** Module 11, Topic 1 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — What Is an Event?
**Type:** Concept
**Headline:** An Event Is Something That Happens in the Browser — JavaScript Responds
**Content:**

**Common browser events:**

| Event | Triggered when |
|-------|---------------|
| `click` | User clicks an element |
| `input` | User types in an input field |
| `submit` | User submits a form |
| `mouseover` | User hovers over an element |
| `keydown` | User presses a key |
| `load` | Page finishes loading |

**The pattern — three things every event interaction needs:**
1. **Which element** is being interacted with (`button`, `input`, `form`)
2. **Which event** to listen for (`"click"`, `"input"`, `"submit"`)
3. **What to do** when it happens (a callback function)

```js
// Pattern: element.addEventListener(eventType, callbackFunction)
button.addEventListener("click", handleClick);
```

**Visual:** A browser window showing a button being clicked; an arrow from the click action to a JavaScript function call; below, the three-part pattern highlighted: element → event type → callback

---

### SLIDE 3 — addEventListener
**Type:** Code
**Headline:** addEventListener — The Right Way to Attach Event Handlers
**Content:**

```html
<button id="enroll-btn">Enroll Now</button>
<p id="status">Not enrolled</p>
```

```js
const btn = document.getElementById("enroll-btn");
const status = document.getElementById("status");

// Named function handler
function handleEnroll() {
  status.textContent = "Enrolled in JavaScript Fundamentals!";
  btn.disabled = true;
}

btn.addEventListener("click", handleEnroll);

// Arrow function — same result
btn.addEventListener("click", () => {
  status.textContent = "Enrolled!";
});
```

**Key rules:**
- Pass the function **reference**, not a call: `handleEnroll` not `handleEnroll()`
- `handleEnroll()` would call it immediately and pass its return value — not a function
- One element can have **multiple listeners** for the same event — they all fire
- Prefer `addEventListener` over `onclick` — it supports multiple handlers

**Visual:** Two code blocks side by side — left shows `handleEnroll` (correct, no parentheses) labeled "passes the function"; right shows `handleEnroll()` (wrong) labeled "calls the function immediately and passes its return value undefined"; both with a red X / green checkmark

---

### SLIDE 4 — The click, input, and change Events
**Type:** Code
**Headline:** click, input, and change Are the Three Events You'll Use Most
**Content:**

```html
<input id="name-input" type="text" placeholder="Enter your name">
<p id="preview">Preview: </p>
<button id="submit-btn">Submit</button>
<p id="result"></p>
```

```js
const nameInput = document.getElementById("name-input");
const preview   = document.getElementById("preview");
const submitBtn = document.getElementById("submit-btn");
const result    = document.getElementById("result");

// input — fires on every keystroke
nameInput.addEventListener("input", () => {
  preview.textContent = "Preview: " + nameInput.value;
});

// click — fires when button is clicked
submitBtn.addEventListener("click", () => {
  result.textContent = "Submitted: " + nameInput.value;
  nameInput.value = "";  // clear the input
});

// change — fires when input loses focus with a new value
nameInput.addEventListener("change", () => {
  console.log("Final value:", nameInput.value);
});
```

- `input.value` — the current text in an input field
- `input` event fires on every character typed (live preview)
- `change` event fires once when the user leaves the field
- `click` fires on mouse click or Enter when a button is focused

**Visual:** A mockup of the input field with typing triggering the live preview; the button click triggering the result line; a timeline showing input firing multiple times vs change firing once on blur

---

### SLIDE 5 — Removing Event Listeners
**Type:** Code
**Headline:** removeEventListener Stops a Handler — But Only with a Named Function
**Content:**

```js
const btn = document.getElementById("enroll-btn");

function handleEnroll() {
  console.log("Enrolled!");
  btn.removeEventListener("click", handleEnroll);  // remove after one click
}

btn.addEventListener("click", handleEnroll);


// Common mistake — anonymous functions cannot be removed
btn.addEventListener("click", () => {
  console.log("This cannot be removed");
});

// Attempt to remove fails — different function object each time
btn.removeEventListener("click", () => {
  console.log("This cannot be removed");  // does nothing
});
```

**Run-once pattern — cleaner alternative:**
```js
// The { once: true } option removes the listener automatically
btn.addEventListener("click", handleEnroll, { once: true });
```

- To remove a listener, you must pass the **same function reference** used to add it
- Anonymous arrow functions have no reference — they can never be removed
- `{ once: true }` is the cleanest way to fire a handler exactly once

**Visual:** Named function shown with a reference label (a named pointer); anonymous function shown with no label (no reference to pass to removeEventListener); the once:true option shown as a third argument

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Adding Event Listeners
**Content:**

- `element.addEventListener("event", handler)` — the standard way to listen for events
- Pass the function **reference** (no parentheses) — not a call
- `input.value` — reads the current value of an input field
- Common events: `click`, `input`, `change`, `submit`, `keydown`
- To remove a listener: use a named function and `removeEventListener`; or use `{ once: true }`

**Quick reference:**
```js
btn.addEventListener("click", handler);         // add listener
btn.removeEventListener("click", handler);      // remove (named fn only)
btn.addEventListener("click", handler, { once: true }); // fire once
input.value                                     // read input text
```

**Up Next:** Topic 2 — The Event Object and Event Types

**Visual:** Summary card with the quick reference block and a warning callout: "handler vs handler() — no parentheses when adding a listener"
