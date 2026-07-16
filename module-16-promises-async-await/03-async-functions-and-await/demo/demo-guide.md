# Demo Guide — Module 16, Topic 3: async Functions & the await Keyword
**Module 16 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node 18+ or browser)

---

## What This Demo Teaches

Students see async/await in action: flat code that reads like synchronous but runs asynchronously, the A/D/B/C order proof showing the function pauses while the world keeps running, a direct refactoring of Module 15's .then() code to async/await, and demonstration that async functions always return Promises.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js` (Node 18+ required for fetch)
3. Full demo takes ~7 seconds

---

## Demo Steps

### Part 1 — Basic async/await

> *"Look: const user = await response.json(). Looks like a normal variable assignment. But it's async."*

Show user name logging after the "(non-blocking)" message.

> *"Two awaits: one for the fetch, one for .json(). Each pauses the function until the Promise resolves. The result is stored in a variable — no callbacks, no .then()."*

---

### Part 2 — Execution Order

> *"Predict: will D print before or after B?"*

Show output: A → D → B → C.

> *"D runs before B because the function is paused at the first await. Await pauses the FUNCTION — not the program. From outside, the async function is non-blocking. Same model as setTimeout — just cleaner syntax inside."*

---

### Part 3 — Refactored from .then()

> *"This is the exact Module 15 fetch code — rewritten with async/await."*

Show users loaded, names extracted, org emails filtered.

> *"response.ok check — same as before. Array methods — same as before. The only difference: await instead of .then(), variable assignments instead of callbacks. Everything you learned still applies."*

---

### Part 4 — async Always Returns a Promise

> *"What does getCourseName() return if I just write 'return string'?"*

Show: direct call returns a Promise, awaited returns the string.

> *"Any async function wraps its return value in a Promise. That's what makes composition work — you can await any async function from another async function. Chaining them is just: const a = await step1(); const b = await step2(a);"*

---

## Teaching Tips

- **Comparison is key** — show .then() and async/await side by side for the same operation. Make the 1:1 mapping explicit.
- **"Pauses the function, not the program"** — repeat this phrase every time a student asks "doesn't await block everything?"
- **Don't drop .then()** — students will encounter .then() in existing code, libraries, and Stack Overflow answers. Teach both, prefer await.
- **await only inside async** — students will try to use await at the top level without async. Show the error, explain the rule.

---

## What's Next

**Topic 4** → try/catch & Parallel Operations — error handling for async/await and running multiple fetches simultaneously.
