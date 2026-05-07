# Module 6 — Topic 4: break, continue & Avoiding Infinite Loops
## Slide Deck (Full) — 6 Slides with Speaker Notes

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** break, continue & Avoiding Infinite Loops
**Subheadline:** Module 6, Topic 4 of 4 — JavaScript Fundamentals

**Speaker Notes:**
This is the final topic in the loops module. Students now have four loop types. Topic 4 adds two control keywords — break and continue — that give fine-grained control over loop execution, and closes with the safety net pattern for while loops. After this topic, students have a complete toolkit: which loop to use, how to exit early, how to skip items, and how to prevent infinite loops from crashing their programs.

---

### SLIDE 2 — break: Exit a Loop Early
**Type:** Concept
**Headline:** break Stops the Loop Immediately and Exits
**Content:**

```js
const orders = [
  { id: "ORD-001", status: "delivered" },
  { id: "ORD-002", status: "delivered" },
  { id: "ORD-003", status: "cancelled" },
  { id: "ORD-004", status: "pending"   },
  { id: "ORD-005", status: "delivered" }
];

// Find the first cancelled order — stop as soon as it's found
for (const order of orders) {
  if (order.status === "cancelled") {
    console.log("First cancelled order:", order.id);
    break;  // ← exit loop immediately
  }
  console.log("Checked:", order.id);
}

// Output:
// Checked: ORD-001
// Checked: ORD-002
// First cancelled order: ORD-003
// (ORD-004 and ORD-005 are never checked)
```

- `break` exits the loop entirely — no more iterations run
- Useful when you only need the **first** matching item
- Once `break` runs, execution continues with the line after the loop

**Visual:** A vertical list of 5 order boxes; a loop arrow progresses down through ORD-001 (checkmark), ORD-002 (checkmark), ORD-003 (red stop — "cancelled found — break!"); a thick horizontal line is drawn after ORD-003 labeled "loop exits here"; ORD-004 and ORD-005 are grayed out with label "never reached"

**Speaker Notes:**
Ask before running: "Without break, how many orders would be checked?" All 5. "With break, how many?" 3 — it exits after finding the first cancelled. This is efficient: if you have 500 orders and find a cancelled one at position 3, you don't need to check the other 497. Point out where execution goes after break: the first line after the closing brace of the loop — not inside the loop body anymore. Ask: "What would happen if no order had status 'cancelled'?" The if block never triggers, break never runs, the loop completes normally after checking all 5. Break only fires when the condition is met.

---

### SLIDE 3 — continue: Skip One Iteration
**Type:** Concept
**Headline:** continue Skips the Rest of the Current Iteration and Moves to the Next
**Content:**

```js
const scores = [88, 45, 72, 31, 95, 60];

// Print only passing scores (>= 50) — skip the failing ones
for (const score of scores) {
  if (score < 50) {
    continue;  // ← skip this iteration, move to next
  }
  console.log("Pass:", score);
}

// Output:
// Pass: 88
// Pass: 72
// Pass: 95
// Pass: 60
// (45 and 31 were skipped)
```

- `continue` skips **the rest of the current iteration** — it does not exit the loop
- The loop carries on with the next element
- Useful for filtering out items you don't want to process

**Visual:** A vertical list of the 6 score values; a loop arrow processes each in order; boxes for 88, 72, 95, 60 show a green "Pass: X" label; boxes for 45 and 31 show a yellow "continue — skip" label with a curved arrow jumping to the next item; the loop arrow continues normally past the skipped items

**Speaker Notes:**
The critical distinction from break: continue does not exit the loop. It only skips the rest of the current iteration. After the continue, the loop moves on to the next element — 45 is skipped, then 72 processes normally. Ask: "How many 'Pass:' lines do we expect?" 4 — 88, 72, 95, 60. The two failing scores (45 and 31) produce no output because the `console.log("Pass:", score)` line is never reached for those iterations. An alternative way to write this: put the console.log in an `if (score >= 50)` block without continue. Both approaches work — continue is preferred when the "skip" case would otherwise cause the code after the if to be deeply nested.

---

### SLIDE 4 — break vs continue: The Difference
**Type:** Comparison
**Headline:** break Exits the Loop | continue Skips One Iteration
**Content:**

```js
const payments = [1500, 2800, 0, 4200, 1100];

// break — stop processing if a zero payment is found
console.log("--- break example ---");
for (const amount of payments) {
  if (amount === 0) {
    console.log("Zero payment found — stopping");
    break;
  }
  console.log("Processed: ₦" + amount);
}
// Output: Processed 1500, Processed 2800, Zero payment found — stopping

// continue — skip zero payments, process the rest
console.log("--- continue example ---");
for (const amount of payments) {
  if (amount === 0) {
    console.log("Skipping zero payment");
    continue;
  }
  console.log("Processed: ₦" + amount);
}
// Output: Processed 1500, Processed 2800, Skipping zero, Processed 4200, Processed 1100
```

| | `break` | `continue` |
|-|---------|-----------|
| **Effect** | Exits the loop entirely | Skips only the current iteration |
| **Remaining items** | Never processed | Still processed |
| **Use when** | First match is enough | Want to skip certain items |

**Visual:** Two parallel flow diagrams using the payments array — left ("break"): arrow progresses through 1500, 2800, then hits 0 and a thick EXIT arrow leaves the loop with all remaining items grayed; right ("continue"): arrow progresses through 1500, 2800, hits 0 and a curved SKIP arrow jumps past the current item back to the loop start, then continues to 4200, 1100

**Speaker Notes:**
Run both blocks and compare the outputs side by side. The break example stops at 0 — 4200 and 1100 are never processed because the loop exited. The continue example skips 0 but processes 4200 and 1100 — the loop kept going. The business logic question: "Which behavior do you actually want?" If a zero payment means "something is wrong with this batch — abort everything," use break. If a zero payment means "this item has nothing to process — skip it and continue with the rest," use continue. The same condition, same data, completely different outcomes — this is why students need to know both keywords and choose deliberately.

---

### SLIDE 5 — Safety Net: Maximum Iteration Limit
**Type:** Code
**Headline:** Add a Maximum Iteration Counter as a Safety Net for while Loops
**Content:**

```js
// ❌ Risky — depends entirely on external state changing
let isConnected = false;
let attempts = 0;

while (!isConnected) {
  attempts++;
  console.log("Attempt:", attempts);
  // if isConnected never becomes true → infinite loop
}

// ✅ Safe — add a maximum limit as a safety net
let safeAttempts = 0;
const MAX_ATTEMPTS = 5;

while (!isConnected && safeAttempts < MAX_ATTEMPTS) {
  safeAttempts++;
  console.log("Attempt:", safeAttempts);
  if (safeAttempts === 3) isConnected = true;  // simulate success
}

if (isConnected) {
  console.log("Connected after", safeAttempts, "attempts");
} else {
  console.log("Failed after", MAX_ATTEMPTS, "attempts");
}
```

**Three-part safety checklist:**
1. The condition will eventually become false
2. Something inside the loop moves toward that false state
3. A maximum iteration counter guards against unexpected infinite loops

**Visual:** Two while loop diagrams side by side — left ("Risky") has a single condition diamond with a circular red arrow indicating potential infinite looping and a question mark labeled "will isConnected ever change?"; right ("Safe") adds a second condition `safeAttempts < MAX_ATTEMPTS` to the diamond and shows a downward exit arrow labeled "guaranteed exit at attempt 5 even if isConnected never changes"

**Speaker Notes:**
Do NOT run the risky version — just show it. Ask: "What happens if isConnected never becomes true?" The loop runs forever. The browser or Node process freezes. The safe version adds a second condition: even if the first condition never becomes false, the counter hits MAX_ATTEMPTS and the loop exits. The `&&` means both must be true to continue — so either condition becoming false ends the loop. The constant MAX_ATTEMPTS is named in UPPER_SNAKE_CASE — a convention for constants that represent hard limits or configuration values. After the loop, the if/else checks which condition caused the exit — was it success or the limit? This pattern is production code. Students writing login retry logic, API polling, or user input retry loops should always use this pattern.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — break, continue & Loop Safety
**Content:**

| Keyword | What it does | When to use it |
|---------|-------------|----------------|
| `break` | Exits the loop entirely | Found what you need — stop searching |
| `continue` | Skips the current iteration | Skip invalid or unwanted items |

**Full loop decision framework:**
| Need to... | Use |
|-----------|-----|
| Iterate array with index | `for` |
| Iterate array values cleanly | `for...of` |
| Iterate object keys | `for...in` |
| Repeat until condition changes | `while` |
| Run at least once, then check | `do...while` |
| Exit loop early | `break` |
| Skip one item | `continue` |

**Up Next:** Module 7 — Functions

**Speaker Notes:**
The full loop decision framework is the deliverable for the entire Module 6. Walk through it row by row and prompt students to name a scenario where they'd use each. "You have an array of product objects and want to print each one — for...of. You have a settings object and want to print every field — for...in. You're waiting for payment confirmation — while. You're processing orders but want to skip cancelled ones — for...of with continue. You're searching for the first overdue account — for...of with break." This module gave students five loop structures and two control keywords — more than enough to write all the iteration logic in any real web project. Module 7 moves to functions: how to package logic into reusable, named blocks.
