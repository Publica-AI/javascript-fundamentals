# Demo Guide — Module 16, Topic 2: .then(), .catch() & Chaining Promises
**Module 16 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node 18+ or browser)

---

## What This Demo Teaches

Students see that .then() returns a new Promise (enabling the chain), build a flat sequential pipeline from three async steps, watch .catch() skip remaining steps and handle an error thrown mid-chain, and experience the "forgot return" bug firsthand.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js` (Node 18+ required for fetch)
3. Full demo takes ~10 seconds

---

## Demo Steps

### Part 1 — .then() Chaining

> *"Four .then() calls — each receives what the previous returned."*

Show steps: response → user object → uppercased name → split array.

> *"Each .then() transforms the data and passes it forward. Response → user → string → array. The chain is flat — no nesting."*

---

### Part 2 — Sequential Async (Flat)

> *"Three async operations: verify, pay, grant access. Watch them run in sequence — flat, not nested."*

Show each ✓ appearing ~800ms apart, all at the same indentation.

> *"Compare this to Module 14's nested callbacks doing the same thing. Same result, flat code. The key: each function returns a Promise, and we return it from .then() so the chain waits."*

---

### Part 3 — .catch() Catches Any Error

> *"Steps 1 and 2 succeed. Step 3 throws. Watch what happens."*

Show: Step 1 OK, Step 2 OK, "Caught: Something broke at step 3!" — Steps 3 and 4 never run.

> *"The throw at step 3 rejects the Promise. The chain skips steps 3 and 4 and jumps straight to .catch(). One error handler for the entire pipeline."*

---

### Part 4 — The "Forgot Return" Bug

> *"Without return: the next .then() gets undefined. With return: it gets the real value."*

Show "undefined" from the first chain, "value from chain" from the second.

> *"This is the #1 Promise bug. You call a function that returns a Promise but forget to write 'return'. The chain continues immediately with undefined instead of waiting. Always return."*

---

## Teaching Tips

- **Highlight return keyword** — physically point to it every time. Make students say "return" aloud when reading chains.
- **"Chain flat, not nested"** — if students put .then() inside .then(), stop them and refactor to flat.
- **Error jump is visual** — draw the chain on the board. Show the arrow jumping from step 3 over step 4 directly to .catch().
- **Part 4 is debugging training** — students WILL hit this bug. Showing it now saves hours of confusion later.

---

## What's Next

**Topic 3** → async Functions & the await Keyword — the same logic with even cleaner syntax.
