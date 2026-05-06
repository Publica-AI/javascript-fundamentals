# Module 5 — Topic 2: switch Statements
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** switch Statements
**Subheadline:** Module 5, Topic 2 of 3 — JavaScript Fundamentals

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