# Demo Guide — Module 11, Topic 1: Adding Event Listeners
**Module 11 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `index.html`, `demo/script.js`

---

## What This Demo Teaches

Students see event listeners firing in real time. The four parts cover: a click listener that updates text and disables a button, the reference-vs-call mistake demonstrated live, an input listener providing a live character preview, and `{ once: true }` demonstrating one-shot listener behaviour.

---

## Setup (Before Class)

1. Open `index.html` in Chrome
2. Open DevTools Console (F12)
3. Have `script.js` visible in VS Code

---

## Demo Steps

### Part 1 — Basic click Listener

> *"We have a button and a status paragraph. When the button is clicked, the status should update and the button should disable. Ask: what are the three things we need for any event listener?"*

Run Part 1. Note: the `handleEnroll()` call in the console demo will trigger the handler immediately — warn students this is intentional to show the difference.

> *"handleEnroll is a function. handleEnroll() calls it right now. typeof handleEnroll returns 'function'. typeof handleEnroll() returns the type of whatever the function returns — and the function itself ran. This is the reference vs call mistake."*

Click the button manually to show it works. Show the disabled state.

---

### Part 2 — input Event — Live Preview

> *"Type something in the name field. Ask: how many times does the input event fire when you type 'Amara'?"*

Type "Amara" slowly. Show the preview updating character by character. Show the counter incrementing.

> *"Five times — once per character. input is for live feedback. The value property holds whatever is in the field right now."*

---

### Part 3 — change Event

> *"Click in the email field, type an email, then click somewhere else on the page. Ask: when does the change event fire?"*

Type in the email field, then click outside. Show the console log firing once.

> *"change fires once when the input loses focus (blur). Not on every keystroke. Good for validation that shouldn't run while the user is still typing."*

---

### Part 4 — once:true

> *"The script re-enables the button and replaces the permanent listener with a once listener. Ask: what happens when I click the button a second time?"*

Click the button once — show "Fired once" in console and status update. Click again — nothing happens.

> *"{ once: true } auto-removes the listener after the first fire. No removeEventListener needed. Useful for confirm dialogs, first-load prompts, one-time submissions."*

---

## Teaching Tips

- **The reference vs call demo in Part 1** is worth slowing down on — show the typeof comparison in the console before running the file, then show what happens when the file runs the `handleEnroll()` call
- **Type slowly in Part 2** so students see each character triggering the preview update — this makes the input event's behaviour obvious
- Students should add their own listeners in DevTools console after the demo — `document.querySelector('button').addEventListener('click', () => console.log('my listener'))` is a good exercise

---

## What's Next

**Topic 2** → The Event Object and Event Types — the `event` parameter that JavaScript passes to every handler
