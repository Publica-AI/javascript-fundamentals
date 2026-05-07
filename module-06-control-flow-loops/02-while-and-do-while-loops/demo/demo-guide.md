# Demo Guide — while & do...while Loops
**Module 6, Topic 2 of 4 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see condition-driven loops in contrast to the index-driven for loop from Topic 1. The demo builds from a simple balance drain (while) to a two-condition PIN retry (while with &&) to a connection retry that must run at least once (do...while). Part 4 is the critical teaching moment: running a while loop with a false-from-the-start condition shows zero executions, then immediately running a do...while with the same condition shows one execution — making the difference concrete and memorable.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all four parts output correctly — note that the "While ran" line in Part 4 does NOT appear (that's intentional)

---

## Demo Steps

### Part 1 — while Loop

1. **Ask before running:**

> *"balance starts at 10000, withdrawal is 2500. How many times will this loop run? What's the final balance?"*

2. Run Part 1. Show: 4 withdrawals, final balance 0.

> *"Four iterations — not because we counted to 4, but because the condition kept being true until the balance hit 0. If withdrawal were 3000, you'd get 3 iterations and a balance of 1000. The loop figured it out. That's why we use while instead of for here — we don't know the iteration count upfront, we just know the stopping condition."*

---

### Part 2 — PIN Retry

1. **Ask before running:**

> *"This loop has two conditions joined with &&. What are they? When does the loop stop?"*

2. Run Part 2. Show: Attempt 1 wrong, Attempt 2 correct, "Access granted".

> *"The loop exits as soon as EITHER condition becomes false — when pinCorrect flips to true, !pinCorrect becomes false, and the && fails. It doesn't wait for attempts to reach 3. Change attempts === 2 to attempts === 3 or remove the if block entirely — show what 'Account locked' looks like."*

---

### Part 3 — do...while

1. **Ask before running:**

> *"retries starts at 0. The condition is retries < 3. How many times will the do...while body run?"*

2. Run Part 3. Show: 3 attempts, total 3.

> *"The body runs, then the condition is checked. After retries becomes 3, retries < 3 is false and the loop exits. This pattern is common for retry logic — you always make at least one attempt before deciding whether to retry."*

---

### Part 4 — Zero vs One Execution

1. **Ask before running:**

> *"score is 0. The while condition is score > 50. Will the body run?"*

2. Run Part 4. Show: "While ran" does NOT appear — "While done" outputs immediately.

> *"Zero executions. The condition was false before the loop even started, so the body was skipped entirely. Now watch the do...while — same starting value, same condition. Will it run?"*

3. Point to the do...while block.

> *"It ran once. Not because the condition was true — it wasn't. But do...while always runs the body first and checks the condition after. This is the entire difference between while and do...while in one output line."*

---

## Teaching Tips

- **The Part 4 contrast is the key moment** — run both blocks and let the output speak: one says "While done" with no preceding "While ran", the other shows "do...while ran once" despite the same false condition
- **For Part 2**, if time allows, change `attempts === 2` to never be true to demonstrate the "Account locked" path — students need to see both branches
- **Warn students about infinite loops** before they practice independently — remind them: never run a while loop without something inside that changes the condition variable

---

## What's Next

**Task 45** → Slides for for...of & for...in Loops
