# Demo Guide — Module 16, Topic 1: Promise States & Creating Promises
**Module 16 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node 18+ or browser console)

---

## What This Demo Teaches

Students see that a Promise is a real object (not magic), inspect its pending state, create custom Promises with resolve/reject, observe that state settles once and is final, and learn the delay() helper pattern for wrapping setTimeout in a Promise.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js` (requires Node 18+ for fetch)
3. Alternatively open browser console and paste parts individually

---

## Demo Steps

### Part 1 — A Promise is an Object

> *"fetch returns something. Let's store it and log it immediately."*

Show console: `Promise { <pending> }`. Then the fulfilled log appears after the response arrives.

> *"It's an object. In the pending state. It transitions to fulfilled when the server responds. .then() fires at that moment. This is what's been happening under the hood since Module 15."*

---

### Part 2 — Creating a Promise

> *"Now we build our own. verifyStudent returns a new Promise."*

Show output: "Verifying student 42..." then "✓ Verified" after 1 second. Show "Verifying student -1..." then "✗ Error: Invalid student ID".

> *"resolve(value) fulfills the Promise — .then() fires with that value. reject(error) rejects it — .catch() fires. The setTimeout simulates an async operation. In real code, you'd wrap a database call or file read."*

---

### Part 3 — States Are Final

> *"What if you call resolve twice? Or resolve then reject?"*

Show output: "first value" — only the first resolve counts.

> *"Once settled, a Promise ignores further resolve or reject calls. No errors, no warnings — just ignored. This guarantees that .then() fires exactly once. You never get double callbacks."*

---

### Part 4 — delay() Helper

> *"A clean way to wrap setTimeout in a Promise."*

Show "Starting 1.5s delay..." then "Done!" after 1.5 seconds.

> *"This is a common utility: delay(ms) returns a Promise that resolves after ms milliseconds. No callback nesting. In Topic 2, you'll chain these: delay(1000).then(...).then(...) — flat and readable."*

---

## Teaching Tips

- **Log the Promise itself** — `console.log(promise)` showing `<pending>` is the key visual. It's proof that Promises are objects with observable state.
- **Success + failure** — always demo both paths (resolve AND reject) so students see .then() and .catch() fire in response to their respective states.
- **"Only once" rule** — the Part 3 demo prevents a class of bugs: students won't accidentally resolve twice and wonder why .then() fires multiple times (it doesn't).
- **delay() utility** — students will reuse this pattern throughout Modules 16–18 for simulating async work in exercises.

---

## What's Next

**Topic 2** → .then(), .catch() & Chaining Promises — building sequential pipelines with flat Promise chains.
