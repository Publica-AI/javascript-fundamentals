# Module 6 — Topic 2: while & do...while Loops
## Slide Deck (Full) — 6 Slides with Speaker Notes

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** while & do...while Loops
**Subheadline:** Module 6, Topic 2 of 4 — JavaScript Fundamentals

**Speaker Notes:**
Topic 1 introduced the for loop — explicit, index-driven, great when you know exactly how many iterations you need. But sometimes you don't know. Maybe you keep retrying a network request until it succeeds. Maybe you keep withdrawing from an account until the balance runs out. For those cases, the while loop is the better tool. Topic 2 covers two condition-driven loops: while and do...while. The key difference from a for loop is that neither requires a counter — they just keep going as long as a condition is true. We'll also cover the most dangerous mistake with condition-driven loops: the infinite loop.

---

### SLIDE 2 — The while Loop
**Type:** Concept
**Headline:** while Loops Run as Long as a Condition is True
**Content:**

```
while (condition) {
    // code to run
    // update something to eventually make condition false
}
```

```js
let balance = 10000;
const withdrawal = 2500;

while (balance >= withdrawal) {
  balance = balance - withdrawal;
  console.log("Withdrew ₦" + withdrawal + " — Remaining: ₦" + balance);
}

console.log("Insufficient funds. Final balance: ₦" + balance);
// Output:
// Withdrew ₦2500 — Remaining: ₦7500
// Withdrew ₦2500 — Remaining: ₦5000
// Withdrew ₦2500 — Remaining: ₦2500
// Withdrew ₦2500 — Remaining: ₦0
// Insufficient funds. Final balance: ₦0
```

- The condition is checked **before** each iteration
- If the condition is already false on entry, the loop body **never runs**
- Use `while` when you don't know in advance how many iterations you'll need

**Visual:** A flow diagram — a diamond labeled "balance >= withdrawal?" at the top; the "true" path leads to the loop body box showing "balance = balance - withdrawal" and "console.log"; an arrow returns to the condition diamond; the "false" path exits downward to "Insufficient funds" — the entry arrow is labeled "check condition first" and the loop-back arrow is labeled "repeat"

**Speaker Notes:**
Walk through the first two iterations manually before running the code. "Balance starts at 10000. Is 10000 >= 2500? Yes — withdraw. Balance is now 7500. Is 7500 >= 2500? Yes — withdraw. Balance is now 5000." Ask: "How many total withdrawals will happen?" Let students count: 10000, 7500, 5000, 2500, 0 — four withdrawals. Notice we never reach a fifth because after the fourth, balance is exactly 0, and 0 >= 2500 is false. Now ask: "Why not use a for loop here?" Because you'd have to calculate in advance that there are 4 iterations. If the withdrawal amount changed, the loop count would change. The while loop figures it out automatically — it just keeps going until the balance can't cover a withdrawal anymore.

---

### SLIDE 3 — while vs for: When to Use Each
**Type:** Comparison
**Headline:** for → Known Count | while → Unknown Count
**Content:**

```js
// for loop — you know the count in advance (iterate 5 items)
for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}

// while loop — you keep going until something changes
let attempts = 0;
let pinCorrect = false;

while (!pinCorrect && attempts < 3) {
  attempts++;
  // simulate: correct pin is entered on attempt 2
  if (attempts === 2) pinCorrect = true;
  console.log("Attempt " + attempts + ": " + (pinCorrect ? "correct" : "wrong"));
}

if (pinCorrect) {
  console.log("Access granted");
} else {
  console.log("Account locked — too many attempts");
}
```

| Use `for` when | Use `while` when |
|----------------|-----------------|
| Iterating a known-length array | Running until a condition changes |
| Fixed number of iterations | Unknown number of repetitions |
| You need the index `i` | Condition depends on a changing value |

**Visual:** Two parallel columns showing the for loop example on the left (labeled "fixed: 5 items, 5 iterations") and the while loop on the right (labeled "variable: stops when pin is correct OR 3 attempts used"); arrows connect each to a box showing what drives the iteration count: "array.length (fixed)" vs "a condition (dynamic)"

**Speaker Notes:**
The comparison table is the key takeaway from this slide. The practical question is: "Do I know how many times this needs to run?" For a price list — yes, it's prices.length. For a PIN retry — no, it depends on whether the user gets it right. Point out the two conditions joined with &&: `!pinCorrect && attempts < 3`. Both must be true to keep looping. The loop exits when EITHER the pin is correct OR attempts hit 3. Ask: "What output do we get when attempts is 2 and pinCorrect becomes true?" The loop exits after logging "Attempt 2: correct" — it doesn't run a third time because `!pinCorrect` is now false. This is a realistic real-world pattern: ATM PIN systems, login forms, retry logic.

---

### SLIDE 4 — The Infinite Loop Warning
**Type:** Warning
**Headline:** Forgetting to Update the Condition Creates an Infinite Loop
**Content:**

```js
// ❌ INFINITE LOOP — balance never changes
let balance = 10000;

while (balance > 0) {
  console.log("Balance:", balance);
  // ← forgot: balance = balance - 1000;
}
// This runs forever and freezes the browser tab

// ✅ CORRECT — balance decreases each iteration
while (balance > 0) {
  console.log("Balance:", balance);
  balance = balance - 1000;  // ← update that eventually makes condition false
}
```

**The three requirements for a safe while loop:**
1. A condition that can become false
2. Code inside the loop that **changes the variable in the condition**
3. An exit path that will definitely be reached

**Never run an infinite loop in the browser** — it will freeze the tab and require a force-quit.

**Visual:** Two side-by-side code blocks — left labeled "❌ Infinite loop" with a red circular arrow symbol (no exit) and the missing update line highlighted in red; right labeled "✅ Safe loop" with a green forward arrow and the update line highlighted in green; a warning banner across the bottom of the left block reads "Browser will freeze — always update the loop variable"

**Speaker Notes:**
This is the danger slide — treat it seriously. Ask: "What happens if I remove `balance = balance - 1000` from this loop?" The condition is always true. The loop runs forever. In the browser, this causes the page to freeze and the tab to become unresponsive — you have to force-close it. If you're using Node.js, it will spin the CPU until you kill the process. Do NOT demonstrate a live infinite loop unless you're prepared to kill the tab. Instead, show the code side by side and let the logic make the case. The three-point checklist is the fix: can the condition become false? Is something inside the loop changing toward that false state? Is there a guaranteed exit? If the answer to any of these is no, you have an infinite loop.

---

### SLIDE 5 — do...while Loop
**Type:** Code
**Headline:** do...while Runs the Body at Least Once Before Checking
**Content:**

```js
// while — may never run if condition is false from the start
let score = 0;
while (score > 50) {
  console.log("While ran");  // ← never runs — 0 is not > 50
}
console.log("While done — score:", score);

// do...while — always runs the body at least once
let retries = 0;
do {
  retries++;
  console.log("Attempt:", retries, "— checking connection...");
} while (retries < 3);

console.log("Retry check complete. Total attempts:", retries);
// Output:
// Attempt: 1 — checking connection...
// Attempt: 2 — checking connection...
// Attempt: 3 — checking connection...
// Retry check complete. Total attempts: 3
```

**Key difference:**
- `while` — condition checked **before** body runs → may never execute
- `do...while` — body runs **first**, condition checked **after** → always executes at least once

**Use `do...while`** when you need at least one execution before deciding to continue.

**Visual:** Two parallel flow diagrams side by side — the while diagram shows the condition diamond at the top before the body; the do...while diagram shows the body at the top and the condition diamond below it with an arrow back up; arrows and labels clearly mark "check first" vs "run first, check after"

**Speaker Notes:**
Ask students to predict the output of the first while block before running. "score is 0. Is 0 > 50? No. Does the loop body ever run?" No — it's skipped entirely. That's a valid case: the while loop gives 0 executions when the condition is false from the start. Now contrast with do...while. The body runs first — no question, no condition check — then the condition is checked at the bottom. The retries loop runs once with retries=1, once with retries=2, once with retries=3. At that point retries < 3 is false and the loop ends. The classic real-world use case: "Make at least one network request, then keep retrying if it fails." Or: "Show the user the form at least once, then show it again if validation fails." `do...while` is rare compared to `while` and `for`, but when you need at least one execution, it's the cleanest way to express that intent.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — while & do...while Loops
**Content:**

| Loop | When the condition is checked | Minimum runs |
|------|------------------------------|--------------|
| `for` | Before each iteration | 0 |
| `while` | Before each iteration | 0 |
| `do...while` | After first run, then before each subsequent run | 1 |

**Safety checklist for every while loop:**
- [ ] Does the condition have a way to become false?
- [ ] Does something inside the loop change the value in the condition?
- [ ] Is there a maximum iteration limit as a safety net?

**Up Next:** Topic 3 — for...of & for...in Loops

**Speaker Notes:**
The loop comparison table is worth memorising. The practical rule: use `for` when you have an array or a known count, use `while` when you have a condition that changes dynamically, use `do...while` only when you explicitly need at least one execution. The infinite loop checklist should become second nature — before you run any while loop, mentally verify that something inside the loop is driving the condition toward false. Topic 3 introduces two more loop syntaxes: `for...of` for iterating values (the most readable option for arrays) and `for...in` for iterating object keys. Both are cleaner than the classic `for` loop for most modern use cases.
