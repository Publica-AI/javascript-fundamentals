# Module 14 — Topic 1: Synchronous vs Asynchronous Execution
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Synchronous vs Asynchronous Execution
**Subheadline:** Module 14, Topic 1 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
We're switching gears entirely from OOP. Module 14 introduces asynchronous JavaScript — the mechanism that makes web apps responsive. Without async, every API call, timer, and animation would freeze your entire page. This topic explains the mental model: what happens when JavaScript can't do something instantly? How does it "come back later" without a second thread?

---

### SLIDE 2 — Synchronous Execution
**Type:** Code
**Headline:** Synchronous Code Runs Line by Line — Each Line Waits for the Previous One
**Content:**

```js
console.log("Step 1: Check enrolment");
console.log("Step 2: Process payment");
console.log("Step 3: Send confirmation");

// Output:
// Step 1: Check enrolment
// Step 2: Process payment
// Step 3: Send confirmation
```

- Synchronous = sequential, blocking
- Each line must finish before the next one starts
- If one step takes 5 seconds, everything after it waits 5 seconds
- This is how all the JavaScript you've written so far works

**Visual:** Three boxes stacked vertically with arrows between them, each labeled Step 1 → Step 2 → Step 3. A clock icon on Step 2 showing "waiting…" with Step 3 greyed out below it

**Speaker Notes:**
Everything students have written up to now is synchronous. Line 1 finishes, line 2 starts. This is intuitive — it matches how we read code top to bottom. The problem comes when one of those steps takes time. Imagine Step 2 is "fetch student records from the database" and it takes 3 seconds. In synchronous mode, Step 3 (and the entire page) freezes for 3 seconds. No scrolling, no clicking, nothing. That's what we're solving.

---

### SLIDE 3 — The Problem with Blocking
**Type:** Concept
**Headline:** Blocking Code Freezes Everything — The Browser Can't Respond While Waiting
**Content:**

Real-world tasks that take time:
- Fetching data from an API (100ms – 3s)
- Loading an image from a server (200ms – 5s)
- Reading a file from disk (10ms – 500ms)
- Waiting for user input (indefinite)

If JavaScript ran these synchronously:
- The page would freeze — no scrolling, no clicking, no typing
- Users would think the app crashed
- Every slow operation would block the entire interface

**Solution:** JavaScript runs time-consuming tasks *asynchronously* — it starts the task, moves on, and comes back when the result is ready.

**Visual:** A browser window with a spinning/frozen cursor, a "Not Responding" title bar, and a frustrated user icon. Contrast with a responsive browser where a loading spinner shows progress while the user continues interacting

**Speaker Notes:**
This is the motivation slide. Ask students: "Have you ever seen a webpage freeze when it's loading something?" That's blocking in action. The browser is single-threaded for JavaScript — if your code is stuck waiting, the user interface can't update. You can't even show a loading spinner because the code that would update it is also blocked. The solution isn't multithreading (JavaScript doesn't have that) — it's the async model: hand the slow task to the browser, keep running your code, come back when the result arrives.

---

### SLIDE 4 — Asynchronous Execution
**Type:** Code
**Headline:** Asynchronous Code Doesn't Block — JavaScript Moves On and Comes Back Later
**Content:**

```js
console.log("A — Start");

setTimeout(function() {
  console.log("B — Delayed task");
}, 0);

console.log("C — End");

// Output:
// A — Start
// C — End
// B — Delayed task     ← runs AFTER C, even with 0ms delay!
```

- `setTimeout(..., 0)` doesn't mean "run immediately" — it means "run after the current code finishes"
- JavaScript runs A, schedules B, runs C, THEN comes back for B
- The delay is a *minimum* wait, not an exact timer
- This is the fundamental async pattern: schedule now, execute later

**Visual:** A timeline: main thread runs A then C (solid line); B is placed on a separate "callback queue" track below; after C completes, B moves back onto the main thread and executes

**Speaker Notes:**
This is the "aha" moment. Ask students to predict the output before you run it. Most will say A, B, C — because the delay is 0ms, so B should run "immediately". But the output is A, C, B. Why? Because setTimeout doesn't run its callback inline. It hands the callback to the browser's timer system, which puts it in the callback queue. The callback queue only gets processed when the current call stack is empty. So: A runs (on the stack), setTimeout schedules B (off the stack, into the browser), C runs (on the stack), stack empties, event loop picks up B from the queue. This is the single most important pattern in async JavaScript.

---

### SLIDE 5 — The Event Loop (Simplified)
**Type:** Concept
**Headline:** The Event Loop — How JavaScript Handles Async in a Single Thread
**Content:**

JavaScript has ONE thread (one line of code runs at a time). The event loop manages async work:

1. **Call Stack** — where your code runs, one function at a time
2. **Web APIs** — the browser handles timers, network requests, events (separate from JS)
3. **Callback Queue** — finished async tasks wait here
4. **Event Loop** — moves callbacks from queue → stack when the stack is empty

The rule: **callbacks only run when the call stack is empty.**

That's why `setTimeout(..., 0)` still runs after synchronous code — the stack must clear first.

**Visual:** A circular diagram: Call Stack (top) → Web APIs (right, with timer/fetch icons) → Callback Queue (bottom) → Event Loop arrow pointing back up to Call Stack with label "only when stack is empty"

**Speaker Notes:**
Keep this simplified — students don't need to know about microtask queues or requestAnimationFrame yet. The key takeaway is the one rule: callbacks only run when the call stack is empty. Draw this on the board if possible. Call Stack is like a plate stack — functions go on top, come off the top. When it's empty, the event loop checks the queue and puts the next callback on the stack. This explains why a setTimeout with 0ms delay still waits — the stack has to clear first. It also explains why a slow synchronous loop (like iterating 10 million items) will delay all callbacks — the stack never empties until the loop finishes.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Synchronous vs Asynchronous Execution
**Content:**

- **Synchronous** — line by line, blocking, each step waits for the previous
- **Asynchronous** — schedule now, execute later, non-blocking
- `setTimeout(..., 0)` still runs *after* synchronous code (A → C → B pattern)
- JavaScript is **single-threaded** — only one thing runs at a time on the call stack
- The **event loop** moves callbacks from the queue to the stack when the stack is empty
- Async exists to prevent blocking — keeps the UI responsive

**Up Next:** Topic 2 — setTimeout & setInterval

**Visual:** Side-by-side comparison: left column "Synchronous: A → B → C (in order, blocking)" vs right column "Asynchronous: A → C → B (non-blocking, B runs later)"

**Speaker Notes:**
Recap the three concepts: synchronous is blocking and sequential; asynchronous is non-blocking and deferred; the event loop is the mechanism that makes async work in a single-threaded language. The A/C/B pattern is the mental model students should carry forward. Every async feature they'll learn — setTimeout, setInterval, fetch, Promises, async/await — follows this same model: schedule the work, move on, come back when the stack is clear. Topic 2 dives into the two timer functions that let you explicitly schedule work with delays.
