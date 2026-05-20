# Demo Guide — Module 11, Topic 2: The Event Object and Event Types
**Module 11 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `index.html`, `demo/script.js`

---

## What This Demo Teaches

Students see the event object's properties in the console for real interactions. The four parts cover: event delegation with `e.target` on a course list, keyboard events with Enter/Escape on a search field, `e.preventDefault()` preventing a form reload, and a global keyboard shortcut with modifier key detection.

---

## Setup (Before Class)

1. Open `index.html` in Chrome
2. Open DevTools Console (F12)
3. Have `script.js` visible in VS Code

---

## Demo Steps

### Part 1 — event.target + Event Delegation

> *"There are three list items but we have only one event listener — on the parent ul. Ask: when I click 'JavaScript Fundamentals', what is e.target?"*

Click "JavaScript Fundamentals". Show the console: event type = "click", target = the `<li>` element, course code = "js".

Click each item. Show that the selected paragraph updates.

> *"One listener handles all three items. e.target is whichever li was actually clicked. data-course is a custom attribute — getAttribute reads it. This is event delegation."*

---

### Part 2 — Keyboard Events

> *"Click the search field and type something. Watch the console — every key press logs. Then press Enter. Then press Escape."*

Run through the keyboard interactions. Show Enter triggering the search result, Escape clearing and showing "Search cleared".

> *"e.key gives the key name as a string. 'Enter' and 'Escape' are exact strings — capital first letter. ArrowUp, ArrowDown, Backspace — same pattern."*

---

### Part 3 — preventDefault on Form Submit

> *"Watch the address bar when I submit the form without preventDefault. Ask: what happens normally when a form submits?"*

First, comment out `e.preventDefault()` in script.js and reload. Try submitting — the page reloads. Restore `e.preventDefault()`.

> *"With preventDefault, the page stays put and our JavaScript handles it. Enter a valid email — works. Clear the field and submit — error message. The .trim() call removes accidental spaces."*

---

### Part 4 — Modifier Keys

> *"We've added a global keyboard shortcut. Press Ctrl+K anywhere on the page — the search field gets focus."*

Press Ctrl+K. Show the search field gaining focus and "Ctrl+K: search focused" in the console.

> *"e.ctrlKey is a boolean — true if Ctrl was held. Combined with e.key === 'k', this is a keyboard shortcut. The listener is on document, not an input — it fires for any key press regardless of what has focus."*

---

## Teaching Tips

- **Part 1 console logging** is very visual — log e.target before reading any properties, so students can expand the element in the console and see all its properties
- **Part 3 live reload demonstration** is worth doing — show the before/after with preventDefault commented out and restored
- Ask students to open DevTools and type `document.addEventListener("click", e => console.log(e.target))` in the console — then click anywhere on the page and watch every click log its target

---

## What's Next

**Topic 3** → Creating and Removing Elements — document.createElement, appendChild, and remove
