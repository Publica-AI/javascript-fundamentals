# Demo Guide — Module 14, Topic 1: Synchronous vs Asynchronous Execution
**Module 14 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node)

---

## What This Demo Teaches

Students see that JavaScript doesn't always execute code in the order it appears. The classic A/C/B surprise shows that `setTimeout(..., 0)` still runs after synchronous code. The blocking demo proves that callbacks wait for the call stack to empty — even a busy loop delays them. This builds the mental model for everything async that follows.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`

---

## Demo Steps

### Part 1 — Synchronous Execution

> *"This is what you've done for 13 modules — line by line, top to bottom, each waits for the one before it."*

Run Part 1. Show Steps 1–4 logging in exact order. Nothing surprising here.

> *"Synchronous means sequential and blocking. Step 3 can't start until Step 2 is done. If Step 2 took 5 seconds to fetch data from a server, everything would freeze for 5 seconds."*

---

### Part 2 — The Output Order Surprise

> *"Before I run this: what order will A, B, C print? Write your prediction down."*

Pause and let students commit to an answer. Most will say A → B → C.

Run Part 2. Show the actual output: A → C → B.

> *"B has 0 milliseconds delay — zero! But it still prints last. Why? Because setTimeout doesn't run the function inline. It hands it to the browser's timer system, which puts it in the callback queue. The queue only gets processed when the call stack is empty. So: A runs, B gets scheduled (off the stack), C runs, stack empties, THEN B runs from the queue. This is the fundamental rule of async JavaScript."*

---

### Part 3 — Multiple Timeouts

> *"If we have multiple timeouts with different delays, what's the order?"*

Run Part 3. Show output: 1 → 5 → 3 → 4 → 2.

> *"All synchronous code runs first (1 and 5). Then callbacks run in order of their delay: 0ms (3), 50ms (4), 100ms (2). The delay is a minimum — not an exact timer. If the stack is busy, callbacks wait longer than their stated delay."*

---

### Part 4 — Blocking Demonstration

> *"What happens to a scheduled callback when the main thread is busy?"*

Run Part 4. Show that the 0ms setTimeout callback only prints AFTER the 2-second blocking loop finishes.

> *"We scheduled the callback before the blocking work started. It had 0ms delay. But the callback waited over 2 seconds. Why? The event loop rule: callbacks only run when the call stack is empty. The while loop keeps the stack occupied for 2 seconds. The callback sits in the queue waiting. This is why you never do heavy computation on the main thread — it blocks everything, including user interactions."*

---

## Teaching Tips

- **Let students predict** — the prediction-then-reveal pattern makes the surprise stick. Give 10 seconds of silence for them to think.
- **Draw the event loop** — sketch Call Stack / Web APIs / Callback Queue on the board while explaining Part 2. Physically move a sticky note from "stack" to "queue" to "stack".
- **0ms ≠ immediate** — repeat this multiple times. "Zero delay means 'as soon as possible after the stack clears', not 'right now'."
- **Part 4 takes 2 seconds** — warn students the terminal will pause. The pause itself is the lesson.

---

## What's Next

**Topic 2** → setTimeout & setInterval — using timers deliberately to schedule work.
