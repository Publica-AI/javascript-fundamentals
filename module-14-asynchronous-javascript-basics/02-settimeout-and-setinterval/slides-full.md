# Module 14 — Topic 2: setTimeout & setInterval
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** setTimeout & setInterval
**Subheadline:** Module 14, Topic 2 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Topic 1 established the mental model: async code gets scheduled and runs later when the stack clears. Topic 2 gives students the tools to actually schedule work: setTimeout for one-off delayed tasks, setInterval for repeating tasks. These are the simplest async APIs in JavaScript and the building blocks for everything else — animations, polling, debouncing, countdowns.

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

**Speaker Notes:**
Connect to Topic 1: this is the same A/C/B pattern. "Order placed" is A, "You can keep browsing" is C — both run synchronously. The setTimeout callback is B — it gets scheduled and runs later. The 2000 means "at least 2000ms later, when the stack is empty." Ask students: what if there was a 3-second blocking loop after the setTimeout call? The callback would wait more than 2 seconds — because the delay is a minimum, and the stack must clear first.

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

**Speaker Notes:**
The return value of setTimeout is often ignored, but it's essential when you need cancellation. Real use cases: a user starts typing in a search box — you setTimeout to search after 300ms of inactivity. If they type another character, you clearTimeout the previous one and set a new one. This is called debouncing. Another: a notification banner that auto-dismisses after 5 seconds, but the user can click "dismiss" early — that click calls clearTimeout. Always store the ID if there's any chance you'll want to cancel.

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

**Speaker Notes:**
The countdown timer is the canonical setInterval example. Point out the pattern: store the ID, check a condition inside the callback, clear when the condition is met. Ask students: what happens if we forget the `clearInterval` line? The counter goes negative: -1, -2, -3, forever. The interval never stops on its own. In a browser, this means a function runs every second for the entire lifetime of the page — wasting CPU and memory. In the demo, we'll actually show this bug happening and then fix it. The "must clear" rule is the most important takeaway from this slide.

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

**Speaker Notes:**
This is the number one interval bug students will encounter. They put setInterval inside a click handler or inside a function that gets called multiple times. Each call creates a brand new interval — the old one doesn't stop. After 5 clicks, you have 5 intervals all logging "Tick" every second — 5 ticks per second. After 10 clicks, 10 ticks per second. The fix is simple: store the ID in a variable outside the handler, and always call clearInterval before starting a new one. Even if intervalId is null (first click), clearInterval(null) does nothing — it's safe.

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

**Speaker Notes:**
Two functions, two cancel functions, one critical rule: always store the ID and always clear when done. The delay being a minimum (not exact) connects back to Topic 1 — the event loop only processes callbacks when the stack is clear. If you set an interval of 1000ms but a synchronous operation takes 1500ms, the first callback waits 1500ms, not 1000ms. For most UI work this doesn't matter, but it's important to understand that timers are approximations, not guarantees. Topic 3 zooms out to the bigger picture: callbacks as a pattern (not just for timers), and the readability problems that emerge when you nest them.
