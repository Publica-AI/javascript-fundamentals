# Demo Guide — Module 14 Combined: Asynchronous JavaScript Basics
**Module 14 — JavaScript Fundamentals**
**Type:** Module demo (combined)
**Duration:** 12–15 minutes
**Files:** `module-demo/script.js` (run in Node)

---

## What This Demo Teaches

A single continuous narrative: a live class notification system that starts with sync vs async execution order, uses setInterval for a countdown, schedules delayed notifications with setTimeout, performs a 4-step sequential enrolment pipeline using nested callbacks, and ends with a visual representation of the callback hell problem — motivating Promises in Module 16.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`
3. Full demo runs ~15 seconds end-to-end (all parts are sequenced automatically)

---

## Demo Steps

### Part 1 — Execution Order

> *"Five lines of code — two sync, three async. Predict the output order."*

Show output: 1 → 5 → 4 → 2 → 3. All sync runs first, then async by delay.

> *"Line 4 has 0ms delay but still runs after line 5. Why? Because 'async' means 'after the stack clears' — not 'immediately'. This is the event loop at work."*

---

### Part 2 — Countdown Timer

> *"A class countdown using setInterval — one tick per second."*

Show countdown from 5 to 0, then "Class is now LIVE!".

> *"Pattern: store the interval ID, decrement a counter, clear when it hits zero. Without clearInterval, this would tick forever into negative numbers."*

---

### Part 3 — Timed Notifications

> *"Four notifications scheduled at different delays. They all fire in delay order, independent of each other."*

Show notifications appearing at 500ms, 800ms, 1200ms, 1500ms.

> *"Each setTimeout is independent — they don't wait for each other. But what if step 2 needed step 1's result? You'd have to nest."*

---

### Part 4 — Enrolment Pipeline (Sequential Callbacks)

> *"Four steps that MUST run in order: check slots → process payment → confirm → send receipt."*

Show each step completing sequentially with ~600ms gaps.

> *"Look at the code. Each step is nested inside the previous step's callback. That's the only way to guarantee order. Step 3 can't start until step 2 finishes. This works — but the nesting is already 4 levels deep."*

Open the code and trace the indentation.

---

### Part 5 — The Callback Problem Visualised

> *"This is what 5 sequential async steps look like in callback style."*

Show the pyramid diagram printed to console.

> *"Each arrow is a level of nesting. Adding step 6 means one more level. Adding error handling doubles the lines. This is callback hell — readable for 2-3 steps, painful for 5+, unmanageable for 10. Promises and async/await solve this by letting you write flat, sequential-looking code. That's Module 16."*

---

## Teaching Tips

- **Run the whole thing once first** — let students see the full output, then go back and explain each part.
- **Part 1 prediction** — pause before running. The 0ms timeout printing last is the key insight from Topic 1.
- **Part 4 is Topic 3 in action** — connect it explicitly: "This is the nesting pattern from the slides. Feel the indentation growing."
- **End on motivation, not solution** — resist solving callback hell here. The teaser creates anticipation for Module 16.
- **Timing** — parts auto-sequence using setTimeout. If you need to pause between parts for teaching, add longer delays.

---

## What's Next

**Module 15** → Working with JSON & Fetch API — data formats and making HTTP requests from JavaScript.
