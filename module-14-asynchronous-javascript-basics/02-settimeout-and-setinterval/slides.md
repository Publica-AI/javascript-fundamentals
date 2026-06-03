# Module 14 — Topic 2: setTimeout & setInterval
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** setTimeout & setInterval
**Subheadline:** Module 14, Topic 2 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — setTimeout
**Type:** Code
**Headline:** setTimeout — Run Code Once After a Delay
**Content:**

```js
// Syntax: setTimeout(callback, delayInMs)

console.log("Order placed!");

setTimeout(function() {
  console.log("Payment confirmed — receipt sent.");
}, 2000);

console.log("You can keep browsing...");

// Output:
// Order placed!
// You can keep browsing...
// (2 seconds later) Payment confirmed — receipt sent.
```

- First argument: a function (callback) to run later
- Second argument: minimum delay in milliseconds (1000ms = 1 second)
- Code after setTimeout runs immediately — it doesn't wait
- The callback runs once and only once

**Visual:** A timeline showing "Order placed!" and "You can keep browsing..." on the main track immediately; a dashed arrow 2000ms later pointing to "Payment confirmed" appearing

---

### SLIDE 3 — Cancelling a Timeout
**Type:** Code
**Headline:** clearTimeout — Cancel a Scheduled Timeout Before It Fires
**Content:**

```js
// setTimeout returns an ID — store it to cancel later
const timerId = setTimeout(function() {
  console.log("This will NOT run — cancelled!");
}, 3000);

console.log("Timer scheduled:", timerId);

// Cancel before it fires
clearTimeout(timerId);
console.log("Timer cancelled.");

// Output:
// Timer scheduled: 1
// Timer cancelled.
// (nothing else — the callback never runs)
```

- `setTimeout` returns a numeric ID
- `clearTimeout(id)` cancels the scheduled callback
- If clearTimeout is called after the callback already ran, nothing happens (no error)

**Visual:** A timeline with a scheduled callback 3s in the future; a red "X" appears over it labeled "clearTimeout" before it reaches execution

---

### SLIDE 4 — setInterval
**Type:** Code
**Headline:** setInterval — Run Code Repeatedly on a Fixed Schedule
**Content:**

```js
// Syntax: setInterval(callback, intervalInMs)

let count = 10;

const intervalId = setInterval(function() {
  console.log("Countdown:", count);
  count--;

  if (count < 0) {
    clearInterval(intervalId);
    console.log("Done!");
  }
}, 1000);

// Output (one per second):
// Countdown: 10
// Countdown: 9
// ...
// Countdown: 0
// Done!
```

- Runs the callback every N milliseconds until cleared
- Returns an ID — store it so you can stop it with `clearInterval(id)`
- **Always clear your intervals** — an uncleaned interval runs forever (memory leak)
- Common pattern: check a condition inside the callback, clear when done

**Visual:** A repeating pulse on a timeline, each pulse labeled with the callback execution; the last pulse has a "clearInterval" stop marker

---

### SLIDE 5 — Stacking Intervals Warning
**Type:** Code
**Headline:** Danger — Intervals Stack If You Don't Clear Them
**Content:**

```js
// BAD — creates a NEW interval every click!
button.addEventListener("click", function() {
  setInterval(function() {
    console.log("Tick");
  }, 1000);
});

// Click 3 times → 3 intervals running simultaneously
// 3 "Tick" logs per second, growing with each click!

// GOOD — store the ID and clear before starting new
let intervalId = null;

button.addEventListener("click", function() {
  clearInterval(intervalId);       // clear any previous
  intervalId = setInterval(function() {
    console.log("Tick");
  }, 1000);
});
```

- Each `setInterval` call creates a separate repeating timer
- If you call it multiple times without clearing, timers stack
- Always store the interval ID and clear before starting a new one

**Visual:** Left side "BAD": three overlapping pulse tracks all firing simultaneously, creating chaos. Right side "GOOD": one clean pulse track, previous one stopped before new one starts

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — setTimeout & setInterval
**Content:**

| Function | Runs | Cancel with |
|----------|------|-------------|
| `setTimeout(fn, ms)` | Once after delay | `clearTimeout(id)` |
| `setInterval(fn, ms)` | Repeatedly every ms | `clearInterval(id)` |

- Both return a numeric ID — store it to cancel later
- The delay is a **minimum**, not exact (depends on call stack)
- Always `clearInterval` when done — uncleaned intervals run forever
- Never create intervals inside event handlers without clearing the previous one first

**Up Next:** Topic 3 — Callbacks & Their Limitations

**Visual:** A reference card with setTimeout (single arrow) and setInterval (repeating arrows) side by side, each with their cancel function shown
