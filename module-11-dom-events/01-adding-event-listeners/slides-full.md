# Module 11 — Topic 1: Adding Event Listeners
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Adding Event Listeners
**Subheadline:** Module 11, Topic 1 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Module 10 taught you to find and change DOM elements using JavaScript. But everything we've done so far runs immediately when the page loads — there's no interaction. Module 11 adds the piece that makes a page truly interactive: responding to what the user does. Clicks, typing, form submissions — all of these are events. An event listener is the code that says "when this happens, do that." After this topic you'll be able to wire up any button, input, or form to a JavaScript function.

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

**Speaker Notes:**
Everything a user does in a browser generates events. Every keystroke, mouse move, click, scroll — the browser fires an event for each. JavaScript can listen for any of these and respond. The table shows the most common ones. You'll use click and input in almost every project. Submit is essential for forms. The three-part pattern is the mental model: pick the element, pick the event type, write the function that runs when it fires. That's all there is to it.

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

**Speaker Notes:**
The most important rule on this slide: no parentheses. When you write `btn.addEventListener("click", handleEnroll)`, you are passing the function itself as an argument — giving addEventListener a reference it will call later when the click happens. If you write `handleEnroll()`, you are calling it right now, and passing whatever it returns to addEventListener — which is undefined. The listener never fires. This is one of the most common beginner mistakes. Ask: if handleEnroll has no return statement, what does `handleEnroll()` evaluate to? Undefined. That's what gets registered as the listener. The browser silently ignores it.

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

**Speaker Notes:**
`input.value` is the property you'll read constantly. It holds whatever the user has typed. The difference between `input` and `change` events is timing: `input` fires after every single character — it's what you use for live search or character count features. `change` fires once when the user leaves the field. In the example, clearing `nameInput.value = ""` after submit is a good pattern — it gives the user a clean form to fill again. Ask: if I type "Amara" in the input field, how many times does the `input` event fire? Five — once for each character.

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

**Speaker Notes:**
Why would you remove a listener? Common case: one-time actions. You want a confirmation button to work exactly once — after the user confirms, disable it so it can't be double-clicked. The self-removal pattern in `handleEnroll` works but is a bit noisy. The `{ once: true }` option does the same thing more cleanly — the browser removes the listener automatically after it fires once. The anonymous function problem is worth explaining: every time you write `() => { ... }`, JavaScript creates a new function object. The arrow function you pass to `removeEventListener` is a different object from the one you added — they just happen to have the same code. To remove, you need the exact same object reference.

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

**Speaker Notes:**
The single most important takeaway from this topic: no parentheses when passing a function to addEventListener. `handler` passes the function. `handler()` calls it. This will trip everyone up at least once — be ready for it. In Topic 2 we go deeper: the event object that JavaScript automatically passes to your handler, which tells you exactly what happened — which key was pressed, which element was clicked, whether to prevent a form from submitting. That's where event handling gets genuinely powerful.
