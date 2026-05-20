# Demo Guide — Module 11 Combined Demo: DOM Events
**Module 11 — JavaScript Fundamentals**
**Type:** End-of-module live walkthrough
**Duration:** 15–18 minutes
**Files:** `index.html`, `script.js`

---

## What This Demo Teaches

The module demo builds a Publica Academy learning dashboard that combines all three topic areas: addEventListener and DOM modification to show a welcome message (Part 1), createElement with closure-captured delete and done buttons for a goal list (Part 2), keydown events and innerHTML/map/join for live course search (Part 3), and form submit with preventDefault for enrolment validation (Part 4). No new concepts — all patterns from Topics 1–3 combined in one cohesive interface.

---

## Setup (Before Class)

1. Open `index.html` in Chrome
2. Open DevTools Console (F12)
3. Have `script.js` open in VS Code
4. The welcome message should appear immediately when the page loads (Part 1 runs on load)

---

## Demo Steps

### Part 1 — addEventListener + DOM Modification

> *"The welcome message appears as soon as the page loads — no click needed. Ask: how is the message shown? It starts hidden."*

Point to the welcome alert visible on page load.

> *"We removed the 'hidden' class and set textContent in Part 1 code that runs immediately. No event needed for initialisation — just DOM modification on load."*

---

### Part 2 — Learning Goals with createElement

> *"Let's add some learning goals. Ask: what happens when I click Add with an empty input?"*

Click Add with empty input — nothing happens (guard returns early). Type "Master event listeners" and click Add.

> *"Three elements created: a span for the text, a Done button, a × button. Each button has a closure over the li and the text. Click Done — strikethrough. Click × — removes. Watch the counter update."*

Add two more goals. Mark one done. Delete one. Show the counter.

> *"doneBtn toggles the 'done' class (line-through). delBtn calls li.remove() — it always removes its own li because of the closure."*

---

### Part 3 — keydown Search

> *"Type 'JavaScript' in the search box. Ask: which key should I press to trigger the search?"*

Press Enter. Show "JavaScript Fundamentals" result appearing.

> *"renderResults filters allCourses, maps to HTML strings, joins and sets innerHTML. Event delegation on the results div handles clicks — .closest('.result-item') walks up to find the card ancestor."*

Type "intro" and press Enter — show two results. Press Escape — results and input clear.

> *"Escape clears everything. Try clicking a result — the console logs the course id and the enrolment name field gets focus."*

---

### Part 4 — Form Submit + preventDefault

> *"Submit the form with empty fields. Ask: without preventDefault, what would happen?"*

Submit empty — validation error shown. Fill in name only — error shown. Fill both fields and submit.

> *"e.preventDefault() on line 1 of the handler prevents page reload. We validate, show success, and call enrolForm.reset() which clears all inputs cleanly."*

---

## Teaching Tips

- **Part 2 Done button** with classList.toggle is a good callback to Module 10 — link the concepts explicitly
- **Part 3 .closest()** is worth explaining: it walks up the ancestor chain until it finds a match, so it works even if the user clicks inside a nested element (like the `<strong>` tag)
- **Part 4 form.reset()** is a convenient built-in — it resets all inputs to their default state, cleaner than manually clearing each one

---

## What's Next

**Task 87** → Module 11 Assessment & Project JSONs
