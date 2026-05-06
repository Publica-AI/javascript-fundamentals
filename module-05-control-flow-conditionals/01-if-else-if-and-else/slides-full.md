# Module 5 — Topic 1: if, else if & else
## Slide Deck (Full) — 6 Slides with Speaker Notes

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** if, else if & else
**Subheadline:** Module 5, Topic 1 of 3 — JavaScript Fundamentals

**Speaker Notes:**
Welcome to Module 5 — Control Flow. So far, all the code we have written runs from top to bottom in a straight line. Every line executes, no matter what. Control flow changes that. It lets your code choose which lines to run based on conditions. That's what makes applications smart. A grade calculator that assigns A, B, C, D, F based on a score — that's control flow. A banking app that blocks a transfer if the balance is too low — that's control flow. Every real application you will ever build uses it. We start with the most fundamental tool: if, else if, else.

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

**Speaker Notes:**
Point to the diamond in the flow diagram and say: every conditional is a question with a yes or no answer. The code asks the question, evaluates the condition, and follows the appropriate path. Ask students: have you ever used conditional logic in Excel — like IF(A1>50, "Pass", "Fail")? It's the same idea. The condition always evaluates to a boolean: true or false. You never get "maybe". You never get "sometimes". True or false, pick a path, run the block, continue.

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

**Speaker Notes:**
Before running, ask students: score is 74. Which grade does it get? Let them work through it: is 74 >= 80? No. Is 74 >= 70? Yes — so Grade B. Now run it. Confirm. Then change the score to 90 and ask again before running. Then change it to 45. The key insight here is "first match wins, then stop." JavaScript does not keep checking after it finds a true condition. That's why the order matters so much — which leads directly to the next slide.

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

**Speaker Notes:**
Run the wrong-order version live. Score 74 produces "Grade: D or higher." Ask: is that correct? No — 74 should be a B. But because >= 50 was the first condition and 74 satisfies it, JavaScript stopped there. It never looked at >= 70. This is one of the most common bugs in conditional chains. Some code editors will warn you about unreachable code — show VS Code highlighting the lower conditions in the wrong-order version. The fix is always the same: most restrictive condition first.

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

**Speaker Notes:**
This connects back to Module 2 (operators) — these operators should already be familiar. But here they are now inside conditions. Ask: if score is 40 and attended is true — does the first if fire? No — 40 < 50, so && fails. What if score is 40 and attended is false? Then both conditions are false, so definitely not. What about || — if score is 40 and attended is true, does the second if fire? Yes — attended is true, and || only needs one. Let students work through these mentally before running to confirm.

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

**Speaker Notes:**
The grade calculator example is something students will build in the demo. Reinforce the mental model: every if/else if chain is a question cascade — JavaScript asks each question in order and runs the first matching answer. The else at the bottom is the safety net. Real-world applications use these constantly: is the user an admin? is the payment status "pending" or "complete" or "failed"? is the cart empty? All of these are conditional checks. Topic 2 introduces switch — a cleaner syntax for when you're checking a single variable against multiple fixed values.