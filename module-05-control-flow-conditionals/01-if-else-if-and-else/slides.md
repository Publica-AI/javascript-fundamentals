# Module 5 — Topic 1: if, else if & else
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** if, else if & else
**Subheadline:** Module 5, Topic 1 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — What is a Conditional?
**Type:** Concept
**Headline:** Conditionals Let Your Code Make Decisions
**Content:**

Every application makes decisions:
- Is the student's score high enough to pass?
- Is the user's account balance enough to place an order?
- Is the user logged in or not?

A conditional runs a **different block of code** depending on whether a condition is `true` or `false`.

```js
if (score >= 50) {
  console.log("You passed!");
} else {
  console.log("You need to retake the exam.");
}
```

- The condition inside `()` is evaluated — it produces `true` or `false`
- If `true` → the `if` block runs
- If `false` → the `else` block runs
- Only one branch runs — **never both**

**Visual:** A flow diagram with a diamond shape labeled "score >= 50?" — the left branch exits labeled "true" with a green box showing "You passed!"; the right branch exits labeled "false" with a red box showing "You need to retake the exam."; an arrow from each box leads back to a shared "continue" line at the bottom

---

### SLIDE 3 — if / else if / else Chain
**Type:** Code
**Headline:** Chain else if to Check Multiple Conditions in Order
**Content:**

```js
const score = 74;

if (score >= 80) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");     // ← this runs — 74 >= 70
} else if (score >= 60) {
  console.log("Grade: C");
} else if (score >= 50) {
  console.log("Grade: D");
} else {
  console.log("Grade: F — retake required");
}
```

- Conditions are checked **from top to bottom**
- JavaScript stops at the **first condition that is true** and runs that block only
- The final `else` is a catch-all — it runs only if no previous condition matched
- **The order matters** — put the most specific (highest) condition first

**Visual:** A vertical chain of five decision diamonds, each connected to the next by a "false" arrow going downward — the "true" exits point to labelled output boxes (A, B, C, D, F); the second diamond "score >= 70" has a highlighted "true" exit showing "Grade: B" because score is 74; a caption reads "conditions are checked top to bottom — first match wins"

---

### SLIDE 4 — Common Mistake: Wrong Condition Order
**Type:** Warning
**Headline:** Wrong Order = Unreachable Code
**Content:**

```js
const score = 74;

// ❌ WRONG ORDER — condition >= 50 catches everything >= 50 first
if (score >= 50) {
  console.log("Grade: D or higher");   // ← 74 matches this, stops here
} else if (score >= 60) {
  console.log("Grade: C");             // ← never reached
} else if (score >= 70) {
  console.log("Grade: B");             // ← never reached
} else if (score >= 80) {
  console.log("Grade: A");             // ← never reached
}

// ✅ CORRECT ORDER — most specific (highest) condition first
if (score >= 80) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");   // ← 74 correctly lands here
```

**The rule:** In an if/else if chain, place the **most specific** (most restrictive) condition first. Always.

**Visual:** Two side-by-side code blocks — left block labeled "❌ Wrong" with a red border; the >= 50 condition is highlighted and an arrow shows that score 74 stops there; the lines below are labeled "unreachable" in grey; right block labeled "✅ Correct" with a green border showing the reversed order working correctly

---

### SLIDE 5 — Combining Conditions with && and ||
**Type:** Code
**Headline:** Combine Conditions with Logical Operators
**Content:**

```js
const score   = 74;
const attended = true;

// Passes only if BOTH conditions are true
if (score >= 50 && attended) {
  console.log("Certified: Pass");           // runs — both true
}

// Eligible if EITHER condition is true
if (score >= 70 || attended) {
  console.log("Eligible for certificate");  // runs — score is 74
}

// Fails if NOT true
if (!attended) {
  console.log("Attendance required");       // does not run
}
```

- `&&` — **both** conditions must be true
- `||` — **at least one** condition must be true
- `!` — **flips** a boolean: `!true` → `false`, `!false` → `true`

**Visual:** Three rows each showing a condition expression — the && row shows two green circles both needing to be filled; the || row shows two circles where only one needs to be filled; the ! row shows a single boolean value with a flip arrow and the resulting negated value

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — if, else if & else
**Content:**
- `if (condition)` — runs the block when condition is `true`
- `else if (condition)` — checked only if all previous conditions were `false`
- `else` — catch-all that runs when nothing above matched
- **Order matters** — most specific condition must go first
- Combine conditions with `&&` (both), `||` (either), `!` (flip)

**Good habit:** When you have three or more fixed values to check against a single variable, consider `switch` instead — that's Topic 2.

**Up Next:** Topic 2 — switch Statements