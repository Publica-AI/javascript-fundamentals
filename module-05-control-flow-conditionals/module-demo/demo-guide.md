# Module Demo Guide — Control Flow: Conditionals
**Module 5 — JavaScript Fundamentals**
**Topics covered:** if/else if/else · switch Statements · Ternary Operator & Truthy/Falsy
**Type:** Combined module walkthrough
**Duration:** 20–25 minutes
**Files:** `script.js`

---

## What This Demo Teaches

One student result is processed through all three conditional tools. Part 1 uses if/else if to assign a letter grade and check combined conditions. Part 2 uses switch to look up a study recommendation for that grade. Part 3 uses ternary expressions to build compact labels and demonstrates truthy/falsy with the empty username. The final result summary brings it all together — every output comes from one of the three conditional tools covered today.

---

## Setup (Before Class)

1. Open `script.js` in VS Code with `score = 74`, `attended = true`, `isPremium = false`, `username = ""`
2. Confirm the clean output:
```
=== PART 1: if / else if / else ===
Amara Obi — Grade: B (Merit)
Certificate status: Eligible
=== PART 2: switch ===
Recommendation: Strong pass — review weak areas
=== PART 3: Ternary & Truthy/Falsy ===
Result:      PASS
Membership:  Standard
Certificate: Issued
Welcome, Amara Obi
(username is empty — falsy — using student name as fallback)
=== RESULT SUMMARY ===
[multi-line summary]
```

---

## Demo Steps

### Opening — One Student, Three Tools

Point to the setup variables and say:

> *"This is Amara Obi's exam result — score 74, attended, not premium, no username stored. By the end of this session, three different conditional tools will have processed this data to produce a full result summary. Let's go."*

---

### Part 1 — if / else if / else

1. **Ask before running:**

> *"Score is 74. Five grade bands — A, B, C, D, F. Which grade does 74 get? Walk me through the checks."*

2. Run Part 1:
```
Amara Obi — Grade: B (Merit)
Certificate status: Eligible
```

3. **Change score to 45** and ask before running. Run — Grade: F, Certificate: Not eligible.

4. Reset to 74. Ask:

> *"The certificate check uses && — score >= 50 AND attended. If attended were false, would it still be eligible?"*

Change `attended` to `false` temporarily and show the result. Reset.

> *"Topic 1 in action: conditions checked top to bottom, first match wins, combined with &&."*

---

### Part 2 — switch

1. Point to the gradeBand derivation line (the chained ternary) and say:

> *"This line derives a single letter — A, B, C, D, or F — from the score. It's a chained ternary — harder to read, but acceptable for a simple lookup. The switch then uses that letter."*

2. Run Part 2:
```
Recommendation: Strong pass — review weak areas
```

3. Change score to **90** (Grade: A), run — "Enrol in advanced module". Then **45** (Grade: F) — "Retake the module".

> *"The switch picks one recommendation from a fixed list of grade letters. That's exactly what switch is for — one variable, a list of exact values."*

---

### Part 3 — Ternary & Truthy/Falsy

1. **Ask about each ternary before running:**

> *"score >= 50 ? 'PASS' : 'FAIL' — score is 74. What's the result? isPremium is false — what does 'Standard' vs 'Premium' produce?"*

2. Run Part 3 output up to `Welcome, Amara Obi`.

3. Point to the `displayName` line:

> *"username is an empty string. `username || studentName` — empty string is falsy, so || moves to the right side: studentName which is 'Amara Obi'. That's the || default value pattern."*

4. Run the full Part 3 including the `!username` check. Then show the final summary.

5. **Change score to 45, isPremium to true, attended to false** and run everything again:

> *"Same code, different values. Grade F, FAIL, Premium, certificate Pending, not eligible. One script — four outcomes just by changing the input."*

---

### Closing

Show the final summary output and say:

> *"Three tools. One student. Every piece of output was produced by a conditional: an if/else if chain, a switch, or a ternary. These are the building blocks of every real application. In Module 6 — Loops — we will apply these same conditions inside loops to process multiple students at once."*

---

## Teaching Tips

- **Run with score = 45 at the end** — seeing F, FAIL, and Not Eligible makes the contrast with 74's output dramatic and reinforces that the same code produces different results based on input
- **Point out the gradeBand derivation** — it's a chained ternary that feeds the switch. It shows how the two topics work together without being redundant
- **The `||` default value pattern** should feel like a natural extension of truthy/falsy — not a separate trick

---

## What's Next

**Task 40** → Module 5 Assessment & Project
The assessment tests if/else chains, switch statements, and ternary/truthy-falsy from different angles. The project gives students a starter Nigerian business page and asks them to add conditional logic.