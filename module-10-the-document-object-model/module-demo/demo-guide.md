# Demo Guide — Module 10 Combined Demo: The Document Object Model
**Module 10 — JavaScript Fundamentals**
**Type:** End-of-module live walkthrough
**Duration:** 15–18 minutes
**Files:** `index.html`, `script.js`

---

## What This Demo Teaches

The module demo builds a Publica Academy course enrolment page interaction pipeline. Students see all three topic areas working together: selecting elements from the page (Part 1), updating textContent and innerHTML from a data object (Part 2), setting attributes and a calculated inline style (Part 3), toggling classList to show alerts and change a status badge (Part 4), and simulating a complete enrolment flow that disables a button, toggles classes, and reveals a confirmation section (Part 5). No new concepts — all patterns from Topics 1–3 combined.

---

## Setup (Before Class)

1. Open `index.html` in Chrome
2. Open DevTools with Elements panel visible (not just Console)
3. Have `script.js` open in VS Code
4. The page should show the course card with "Enrolment Open" badge before any JS runs

---

## Demo Steps

### Part 1 — Select and Read

> *"Before we change anything, let's read what's already on the page. Ask: what does getElementById return if you pass a string that doesn't match any id?"*

Run Part 1. Show all three console outputs — heading text, course title, button tagName (BUTTON, uppercase).

> *"We've selected 5 elements and read from 3 of them. Nothing on the page has changed yet. Selection is read-only until we assign to a property."*

---

### Part 2 — Update Content from Data

> *"We have a course object with the real data. Ask: why use textContent instead of innerHTML for the price?"*

Run Part 2. Point to the page — course title, price, and enrolment info all updated visually.

> *"textContent is safe and fast for plain strings. We used innerHTML for the heading to inject a small subtitle tag — but note: this is our own data. Never do this with user-typed input."*

Ask: what does `toLocaleString()` do to 15000? → Formats it as "15,000" with a comma separator.

---

### Part 3 — Modify Attributes

> *"The progress bar is at 0% in HTML — we calculate the percentage from the data. Ask: how many spots are taken out of 50?"*

Run Part 3. Point to the progress bar filling to 94% on the page.

> *"The progress width is a calculated value — it changes based on data. That's the right use case for inline style. We use setAttribute for the link href — reading it back confirms it was set correctly."*

---

### Part 4 — classList — Show Alert and Toggle State

> *"The alert box is hidden. Ask: what CSS property does the 'hidden' class set?"*

Run Part 4. Point to the alert appearing, the badge changing from green to red, and the card getting a highlight border.

> *"classList.remove('hidden') reveals the element. Two class swaps on the badge: remove badge-active, add badge-closed. The card gets a highlight class — both the border color and background change because CSS rules are already defined for it."*

---

### Part 5 — Simulate Enrolment

> *"This part combines everything. Ask: what three things should happen when a student clicks Enrol?"*

Pause for answers (button disabled, confirmation shown, badge updates). Then run Part 5. Point to the page — button greyed out, alert gone, confirmation section appeared, badge back to green showing "Enrolled".

> *"Five element changes in sequence: disable button, swap its classes, update badge, show confirmation, hide alert. This is a real interaction flow. Note that `enrollBtn.disabled = true` both greys the button visually and prevents it from being clicked — one property does both."*

---

## Teaching Tips

- **DevTools Elements panel** is essential for this demo — having it open alongside the page lets students see classList changes in real time as each part runs
- **Part 5 combined changes** shows that a single user action (enrolment) triggers multiple DOM updates — this is the mental model for all interactive UI: event → update multiple elements
- **Progress bar** with inline style is a deliberately good use case for `element.style` — it's a calculated value that can't be in a CSS class

---

## What's Next

**Task 82** → Module 10 Assessment & Project JSONs
