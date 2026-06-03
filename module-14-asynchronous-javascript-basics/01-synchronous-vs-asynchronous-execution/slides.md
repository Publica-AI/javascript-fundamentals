# Module 14 — Topic 1: Synchronous vs Asynchronous Execution
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Synchronous vs Asynchronous Execution
**Subheadline:** Module 14, Topic 1 of 3 — JavaScript Fundamentals

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
