# Demo Guide — break, continue & Avoiding Infinite Loops
**Module 6, Topic 4 of 4 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see break and continue applied to realistic order-processing and payment data, then see them directly contrasted on identical data to make the difference unmistakable. Part 4 demonstrates the max-iteration safety net pattern for while loops — the production-grade approach to preventing infinite loops when relying on an external condition.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all four parts output correctly

---

## Demo Steps

### Part 1 — break

1. **Ask before running:**

> *"There are 5 orders. How many will we check? What's the output after ORD-003?"*

2. Run Part 1. Show: ORD-001 and ORD-002 checked, ORD-003 triggers break, ORD-004 and ORD-005 never logged.

> *"The loop exits at ORD-003. Not skips — exits. ORD-004 and ORD-005 don't exist as far as this loop is concerned. If we had 5,000 orders and the cancelled one was third, we'd only check 3 of them. That efficiency matters."*

---

### Part 2 — continue

1. **Ask before running:**

> *"Scores are: 88, 45, 72, 31, 95, 60. Which ones are failing? How many 'Pass:' lines will we see?"*

2. Run Part 2. Show: 88 passes, 45 skipped, 72 passes, 31 skipped, 95 passes, 60 passes.

> *"Four 'Pass:' lines. continue didn't exit the loop — it just skipped the current item and moved on. The loop processed all 6 scores. Two were skipped, four were logged."*

---

### Part 3 — break vs continue Contrast

1. **Ask before running:**

> *"Payments are: 1500, 2800, 0, 4200, 1100. In the break version — how many payments get processed? In the continue version?"*

2. Run Part 3. Point to the outputs side by side.

> *"break: 2 payments processed (1500, 2800), then the loop exits at 0. 4200 and 1100 are never touched. continue: 4 payments processed (1500, 2800, 4200, 1100), zero is skipped. Same condition, same data, completely different business behavior. Ask yourself: does a zero payment mean 'abort the whole batch' or 'skip this one and carry on'? The choice between break and continue depends on that answer."*

---

### Part 4 — Safety Net

1. **Ask before running:**

> *"isConnected starts false. The loop runs while !isConnected AND attempts < 5. If isConnected becomes true on attempt 3, how many times will the loop run?"*

2. Run Part 4. Show: 3 attempts, connected.

> *"Three. The MAX_ATTEMPTS guard is a safety net — if the connection never succeeds, the loop exits after 5 attempts rather than running forever. Change `attempts === 3` to never be true and run again — you'll see 5 attempts and the 'Failed' message. This is how you write while loops in production: always add a counter that guarantees an exit path even if the primary condition never resolves."*

---

## Teaching Tips

- **The Part 3 contrast is the critical moment** — run both versions without changing anything and let the output make the case; students who see the same 5 payments produce different results remember it
- **For the safety net**, if students ask whether to always add a counter — yes, for any while loop that depends on external state (network, user input, hardware). For a simple countdown or balance drain, the math guarantees an exit and the counter is optional
- **Warn students**: the break keyword also works in switch statements (which they saw in Module 5) — same word, same concept: exit this block immediately

---

## What's Next

**Task 49** → Module 6 combined demo (module-demo)
