# Demo Guide — Module 14, Topic 2: setTimeout & setInterval
**Module 14 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node)

---

## What This Demo Teaches

Students see setTimeout scheduling one-off delayed tasks, clearTimeout cancelling a scheduled task before it fires, setInterval creating a countdown timer that clears itself when done, and the "goes forever" bug when clearInterval is forgotten. The demo is sequenced using nested timeouts so all parts run in order.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`
3. The full demo takes ~20 seconds to complete (parts are sequenced with delays)

---

## Demo Steps

### Part 1 — setTimeout Basics

> *"We submit an enrolment. The confirmation and welcome pack take time to prepare. Watch the order."*

Output appears: "Enrolment submitted!" and "You can continue browsing" immediately, then email after 2s, welcome after 3s.

> *"Both timeouts were set at the same time. The 2s fires first, the 3s fires second. The code after setTimeout ran immediately — it didn't wait. This is non-blocking."*

---

### Part 2 — clearTimeout

> *"What if the user completes their profile before the reminder fires?"*

Show output: reminder scheduled, then "Profile completed — reminder cancelled." The reminder callback never logs.

> *"We stored the timeout ID. Before the 2-second reminder could fire, we called clearTimeout at 1 second. The callback was removed from the queue — it never executes. This is how you cancel scheduled work."*

---

### Part 3 — setInterval Countdown

> *"A countdown from 5 to 0. Watch the clearInterval when it hits zero."*

Show output: "Starting class in 5...", 4, 3, 2, 1, then "Class started! Welcome."

> *"The pattern: store the interval ID, check a condition inside the callback, clear when done. Without the `if (seconds > 0)` check and the `clearInterval` call, this would count into negative numbers forever."*

---

### Part 4 — Without clearInterval (Bug Demo)

> *"This interval has no real stop condition — I've added one artificially at 5 ticks. Imagine this without any stop."*

Show 5 ticks at 500ms intervals, then the manual stop message.

> *"In a real webpage, an uncleared interval runs for the entire session. If it updates the DOM or makes network requests, that's wasted resources. The rule: if you start an interval, you must always have a plan to clear it."*

---

## Teaching Tips

- **The sequencing in this demo** — Parts are chained using setTimeout to run in order. Explain this if students ask about the structure.
- **Countdown pattern** — point out the three pieces: `let count = N` (state), `setInterval` (the loop), `if (count <= 0) clearInterval` (the exit). This is the recipe.
- **clearInterval(null) is safe** — mention this so students aren't afraid of calling it defensively before starting a new interval.
- **Real use cases** — toast notifications (auto-dismiss after 5s), live clocks, auto-saving, polling APIs for updates.

---

## What's Next

**Topic 3** → Callbacks & Their Limitations — what happens when you need sequential async steps.
