# Module 6 — Topic 2: while & do...while Loops
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** while & do...while Loops
**Subheadline:** Module 6, Topic 2 of 4 — JavaScript Fundamentals

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