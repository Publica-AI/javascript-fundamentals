# Module 5 — Topic 3: Ternary Operator & Truthy/Falsy
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Ternary Operator & Truthy/Falsy
**Subheadline:** Module 5, Topic 3 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — Ternary Syntax
**Type:** Concept
**Headline:** The Ternary Operator — if/else in One Line
**Content:**

```
condition ? valueIfTrue : valueIfFalse
```

```js
const score  = 74;
const isPremium = true;

// if/else version (4 lines)
let grade;
if (score >= 50) {
  grade = "Pass";
} else {
  grade = "Fail";
}

// ternary version (1 line — same result)
const grade2 = score >= 50 ? "Pass" : "Fail";

console.log(grade);   // Pass
console.log(grade2);  // Pass

// More examples
const label  = isPremium ? "Premium Member" : "Free Member";
const status = score > 0  ? "scored" : "absent";
```

- The ternary operator is **JavaScript's only three-part operator**: condition, true value, false value
- It **returns a value** — so you can assign it directly to a variable
- Use it only for **simple two-way decisions** — one short value on each side
- If you need to run multiple statements or have logic on either side, use `if/else`

**Visual:** Side-by-side code comparison — left shows a 4-line if/else block that assigns to a let variable; right shows the same logic compressed into a single const ternary assignment; a bracket under the ternary labels the three parts: "condition", "? value if true", ": value if false"; the outputs are shown as identical

---

### SLIDE 3 — When to Use Ternary
**Type:** Code
**Headline:** Use Ternary for Short, Simple Decisions Only
**Content:**

```js
const balance  = 4200;
const minOrder = 5000;
const username = "Ngozi";

// ✅ Good use — short, readable, one value per side
const deliveryMsg = balance >= minOrder ? "Free delivery!" : "₦500 delivery fee";
const greeting    = username ? `Welcome back, ${username}!` : "Welcome, guest!";

console.log(deliveryMsg);  // ₦500 delivery fee  (4200 < 5000)
console.log(greeting);     // Welcome back, Ngozi!
```

```js
// ❌ Bad use — nested ternary (unreadable)
const grade = score >= 80 ? "A" : score >= 70 ? "B" : score >= 60 ? "C" : "F";
// Use if/else if instead — much easier to read and debug
```

**The rule:**
- ✅ Ternary → short condition, two short values, assigned to a variable
- ❌ Ternary → when you need multiple lines, complex logic, or nesting

**Visual:** Two code sections divided by a line — upper section labeled "✅ Use ternary here" with the two clean examples highlighted green; lower section labeled "❌ Not here" with the nested ternary highlighted red and an annotation pointing to it reading "hard to read, hard to debug — use if/else if"

---

### SLIDE 4 — The Six Falsy Values
**Type:** Concept
**Headline:** Falsy Values Fail an if Check Without === false
**Content:**

JavaScript has exactly **six falsy values** — any value that behaves like `false` in a condition:

| Value | Type | Notes |
|-------|------|-------|
| `false` | boolean | The literal false |
| `0` | number | Zero — including `-0` |
| `""` | string | Empty string |
| `null` | null | Intentionally empty |
| `undefined` | undefined | Not yet set |
| `NaN` | number | Not a Number |

**Everything else is truthy** — including `[]`, `{}`, `"0"`, `" "` (space), and negative numbers.

```js
if (0)         { console.log("runs"); }  // does not run — 0 is falsy
if ("")        { console.log("runs"); }  // does not run — empty string is falsy
if (null)      { console.log("runs"); }  // does not run — null is falsy
if ([])        { console.log("runs"); }  // RUNS — empty array is truthy
if ({})        { console.log("runs"); }  // RUNS — empty object is truthy
if ("0")       { console.log("runs"); }  // RUNS — non-empty string is truthy
```

**Visual:** A two-column table — left column "Falsy (fails if check)" lists the 6 values in red: false, 0, "", null, undefined, NaN; right column "Truthy (passes if check)" lists surprising truthy values in green: [], {}, "0", " ", -1, "false"; a callout box highlights "[] and {} are TRUTHY — many beginners expect them to be falsy"

---

### SLIDE 5 — Truthy/Falsy in Practice
**Type:** Code
**Headline:** Use Truthy/Falsy to Check If a Value Exists
**Content:**

```js
const username = "";           // empty string — falsy
const balance  = 0;            // zero — falsy
const cartItems = [];          // empty array — truthy!
const user     = null;         // null — falsy

// Checking if a value exists (the truthy/falsy pattern)
if (username) {
  console.log("Logged in as:", username);
} else {
  console.log("No user — show login page");   // ← runs (empty string)
}

if (balance) {
  console.log("Balance: ₦", balance);
} else {
  console.log("Account is empty");            // ← runs (0 is falsy)
}

if (cartItems) {
  console.log("Cart exists:", cartItems);     // ← RUNS ([] is truthy)
}

// Common pattern: default value using ||
const displayName = username || "Guest";      // "Guest" (username is falsy)
console.log("Hello,", displayName);           // Hello, Guest
```

**Visual:** Four code blocks with their conditions highlighted — the username and balance checks show the else branch firing (red highlight) with labels "falsy — else runs"; the cartItems check shows the if branch firing (green highlight) with label "truthy — if runs despite being empty"; the || pattern is shown with an annotation "returns right side when left is falsy — common for default values"

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Ternary Operator & Truthy/Falsy
**Content:**

**Ternary operator:**
- `condition ? trueValue : falseValue` — returns a value in one line
- Use for simple two-way assignments
- Avoid nesting — use `if/else if` for complex decisions

**The six falsy values:**
`false`, `0`, `""`, `null`, `undefined`, `NaN`

**Everything else is truthy — including `[]` and `{}`**

**Common patterns:**
```js
const label = isLoggedIn ? "My Account" : "Sign In";  // ternary assignment
const name  = rawName || "Guest";                      // default value with ||
if (value) { ... }                                     // truthy check
```

**Up Next:** Module 5 Combined Demo