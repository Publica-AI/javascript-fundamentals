# Module 5 — Topic 2: switch Statements
## Slide Deck (Full) — 6 Slides with Speaker Notes

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** switch Statements
**Subheadline:** Module 5, Topic 2 of 3 — JavaScript Fundamentals

**Speaker Notes:**
In Topic 1 we built if/else chains to check ranges — score >= 80, >= 70, etc. But not every decision is a range check. Sometimes you have one variable and a fixed list of possible values: Monday, Tuesday, Wednesday... or "success", "pending", "failed". For these situations, switch is cleaner and easier to read. The core idea is the same — check a condition, run a matching block — but the structure is different. And there's one important gotcha: the break keyword. Miss it once and you'll understand immediately why it exists.

---

### SLIDE 2 — switch Anatomy
**Type:** Concept
**Headline:** switch Checks One Value Against Multiple Cases
**Content:**

```js
const day = "Monday";

switch (day) {           // ← the value to test
  case "Monday":         // ← if day === "Monday"
    console.log("Start of the work week");
    break;               // ← exit the switch
  case "Friday":
    console.log("Last day — Eko bridge traffic ahead");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend — rest day");
    break;
  default:               // ← runs if no case matched
    console.log("Regular work day");
}
```

| Part | Role |
|------|------|
| `switch (value)` | The value being tested |
| `case "X":` | "If value === X, run this" |
| `break` | Exit the switch block |
| `default:` | Runs if no case matches |

**Visual:** Annotated code block with labelled callout arrows pointing to each part — "switch (day)" labeled "the variable being tested"; "case 'Monday':" labeled "if day exactly equals 'Monday'"; "break;" labeled "exit the switch — without this, execution falls through"; "default:" labeled "runs when no case matched — like else"

**Speaker Notes:**
Point to each labeled part in the code as you name it. Then ask: what does the Saturday/Sunday grouping at the bottom do? Wait for an answer. It means both Saturday and Sunday show the "Weekend" message — you'll explain this fully in Slide 5. For now, just note that it's possible. Before running, ask: what do you predict the output will be? Run it. Then change the day to "Friday" and predict again before running. Then "Wednesday" — that hits the default.

---

### SLIDE 3 — switch Uses Strict Equality
**Type:** Code
**Headline:** switch Always Uses === — Exact Match Required
**Content:**

```js
const status = "success";

switch (status) {
  case "success":
    console.log("Payment confirmed");    // ← runs
    break;
  case "pending":
    console.log("Awaiting confirmation");
    break;
  case "failed":
    console.log("Payment failed — try again");
    break;
  default:
    console.log("Unknown status");
}
```

```js
// switch also works with numbers
const errorCode = 404;

switch (errorCode) {
  case 200: console.log("OK");         break;
  case 404: console.log("Not found");  break;  // ← runs
  case 500: console.log("Server error"); break;
}
```

- `switch` compares using **strict equality (===)** — types must match
- A string `"success"` will NOT match a number `0` even if they could loosely convert
- Works cleanly with string values (payment statuses, user roles, command names) and numbers (error codes, menu choices)

**Visual:** Two annotated code blocks side by side — left shows the string status example with "success" case highlighted green with a checkmark; right shows the number errorCode example with "404" highlighted; a label between them reads "switch uses === for both"

**Speaker Notes:**
The payment status example is very realistic — in Module 15 when we fetch from an API, the response will often have a status field with string values like "success", "pending", "failed". Switch is the cleanest way to handle those cases. Ask: why does switch use === instead of ==? Because it's consistent with Module 2's recommendation to always use strict equality. A string "1" and a number 1 are different values — === correctly treats them as not equal. If you accidentally pass a number into a switch that expects strings, the default case will fire. That's a bug but also a clear signal — which is better than silent wrong behavior.

---

### SLIDE 4 — The Fall-Through Bug
**Type:** Warning
**Headline:** Missing break = Fall-Through — Code Runs Into the Next Case
**Content:**

```js
const day = "Monday";

// ❌ Missing break — fall-through bug
switch (day) {
  case "Monday":
    console.log("Start of the work week");
    // ← no break here!
  case "Tuesday":
    console.log("Second day");             // ← ALSO runs
  case "Wednesday":
    console.log("Midweek");               // ← ALSO runs
    break;
  case "Friday":
    console.log("Last day");
    break;
}
// Output: "Start of the work week" + "Second day" + "Midweek"
// Expected: just "Start of the work week"
```

- Without `break`, execution **falls through** into the next case automatically
- This is one of the most common bugs in switch statements
- **Every case must end with `break`** — unless you intentionally want fall-through

**Visual:** Flow diagram of the buggy switch — an arrow labeled "day is Monday" enters the "Monday" case box; because there is no break, a dashed arrow continues downward into the "Tuesday" case box, then again into the "Wednesday" case box; all three boxes are highlighted in red with the label "all three run" — contrasted by a corrected version on the right where each case has a break arrow exiting the switch entirely

**Speaker Notes:**
Run the buggy version live. Show output: "Start of the work week", "Second day", "Midweek". Ask: why three lines for Monday? Let students look. Then explain: without break, JavaScript continues executing every line until it hits a break or reaches the end of the switch. It does not check if the case matches again — it just keeps running. This is JavaScript's default behavior — an unusual design decision that surprises everyone the first time. The demo for this topic shows this bug live and asks students to predict the output before revealing it.

---

### SLIDE 5 — Intentional Fall-Through: Grouping Cases
**Type:** Code
**Headline:** Stack Multiple Cases to Share the Same Code
**Content:**

```js
const day = "Saturday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Work day — offices open");
    break;

  case "Saturday":
  case "Sunday":
    console.log("Weekend — offices closed");  // ← Saturday and Sunday both run this
    break;

  default:
    console.log("Invalid day");
}
```

- Stack empty cases on top of each other to make multiple values share one block
- This is **intentional fall-through** — the first case just has no code, so it falls to the next
- Common use: grouping days of the week, grouping similar status codes

**Visual:** The switch block with the five weekday cases stacked vertically with a single set of braces connecting them to the shared "Work day" output; the Saturday and Sunday cases are similarly grouped and connected to the "Weekend" output; bracket annotations on the right label each group "weekdays" and "weekend"

**Speaker Notes:**
Ask: "Saturday" falls through to what? It falls through to the "Sunday" case — which has the code and the break. So both Saturday and Sunday run the "Weekend" block. This is intentional: the empty case has no code, so it naturally falls to the next case that does. This is a clean pattern. You'll also see it used for grouping HTTP error codes — 400-series all display "Client Error", 500-series all display "Server Error". One last distinction to make: if you find yourself writing many complex conditions, range checks, or combined && / || conditions — use if/else. If you have a single variable and a finite list of exact values — switch is cleaner and easier to read.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — switch Statements
**Content:**

| Feature | Detail |
|---------|--------|
| `switch (value)` | Tests one value against multiple cases using === |
| `case "X":` | Runs if value exactly equals X |
| `break` | Exits the switch — **required to prevent fall-through** |
| `default:` | Runs if no case matched (like `else`) |
| Stacked cases | Multiple cases sharing one block = intentional grouping |

**When to use switch vs if/else:**
- `switch` → single variable checked against fixed string or number values
- `if/else if` → range checks (`>= 80`), complex conditions, combining `&&` / `||`

**Up Next:** Topic 3 — Ternary Operator & Truthy/Falsy

**Speaker Notes:**
The summary table is worth having students copy. "When do I use switch?" is a question they will ask. The decision rule is simple: if you're checking one variable against a list of fixed exact values — use switch. If you're doing range comparisons or combining multiple conditions — use if/else if. In practice, many developers use if/else exclusively and only reach for switch when the list is very long (6+ cases). Either approach is fine — the important thing is that the code is readable and the break statements are never forgotten.