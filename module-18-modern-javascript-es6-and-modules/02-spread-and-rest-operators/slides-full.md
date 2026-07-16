# Module 18 — Topic 2: Spread & Rest Operators
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Spread & Rest Operators
**Subheadline:** Module 18, Topic 2 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Topic 1 taught destructuring — pulling values out. Topic 2 teaches spread (expanding outward) and rest (collecting inward). Both use the same `...` syntax but in opposite directions. Students have already used spread: `[...students].sort()` in Module 12 and `{ ...student, grade: "Pass" }` in Module 13's map examples. Now they'll understand the full picture.

---

### SLIDE 2 — Spread with Arrays
**Type:** Code
**Headline:** Spread (...) Expands an Array into Individual Elements
**Content:**

```js
const scores = [88, 72, 91];
const copy = [...scores];
const all = [...js, ...html];
const sorted = [...scores].sort((a, b) => b - a);
```

- `...array` spreads elements into a new context
- Creates a **shallow copy** — use to avoid mutation
- Critical for sort: `[...arr].sort()` prevents mutation

**Visual:** Array "exploding" into individual values placed into a new array

**Speaker Notes:**
The Module 12 sort warning comes full circle here. `arr.sort()` mutates the original — `[...arr].sort()` creates a copy first, sorts the copy, leaves the original intact. Spread is also how you merge arrays without concat: `[...arr1, ...arr2]` is cleaner and more flexible than `arr1.concat(arr2)`. And adding items: `[...arr, newItem]` creates a new array with the item appended — no push needed if you want immutability.

---

### SLIDE 3 — Spread with Objects
**Type:** Code
**Headline:** Spread Objects to Copy, Merge, and Override Properties
**Content:**

```js
const defaults = { theme: "light", language: "en", fontSize: 14 };
const userPrefs = { theme: "dark", fontSize: 16 };
const settings = { ...defaults, ...userPrefs };
// { theme: "dark", language: "en", fontSize: 16 }

const updated = { ...student, score: 92, grade: "Pass" };
```

- `{ ...obj }` copies all properties into a new object
- Later keys override earlier ones (right wins)
- Does NOT deep clone — nested objects are shared

**Visual:** Two objects merging with right-side overrides highlighted

**Speaker Notes:**
The "right wins" rule is the key: spread defaults first, then user preferences. Any key in userPrefs overrides the same key in defaults. This is the config merge pattern used in every library. The immutable update pattern (`{ ...student, score: 92 }`) creates a new object with one property changed — the original student is untouched. This is fundamental in React and state management.

---

### SLIDE 4 — Rest in Destructuring
**Type:** Code
**Headline:** Rest (...) Collects Remaining Elements into an Array or Object
**Content:**

```js
const [first, second, ...rest] = [88, 72, 91, 65, 77];
// rest = [91, 65, 77]

const { name, ...other } = { name: "Amara", score: 88, course: "JS" };
// other = { score: 88, course: "JS" }
```

- `...rest` must be the **last** element
- Arrays: remaining elements → array
- Objects: remaining properties → object

**Visual:** Array split into named variables and a `rest` collection

**Speaker Notes:**
Rest is the opposite of spread. Spread expands; rest collects. The pattern `{ name, ...other }` is very common for separating one property from "everything else" — useful when you want to pass remaining props to a child component or separate known data from dynamic data.

---

### SLIDE 5 — Rest in Function Parameters
**Type:** Code
**Headline:** Rest Parameters — Accept Any Number of Arguments
**Content:**

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

function enroll(course, ...students) {
  console.log(course + ": " + students.join(", "));
}
```

- `...paramName` collects remaining arguments into a real array
- Must be the last parameter
- Replaces the old `arguments` object with a proper Array

**Visual:** Function call with arguments flowing into named param and rest array

**Speaker Notes:**
Rest parameters give you a real array — unlike the old `arguments` object which was array-like but didn't have .map, .filter, etc. The pattern `(first, ...rest)` is common: take the first argument as a named parameter, collect the rest into an array for processing.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Spread & Rest Operators
**Content:**

| Operator | Context | What it does |
|----------|---------|-------------|
| **Spread** | `[...arr]`, `{...obj}` | Expands outward |
| **Rest** | `[a, ...rest]`, `(...args)` | Collects inward |

**The rule:** Spread on the right (providing). Rest on the left (receiving).

**Up Next:** Topic 3 — ES6 Modules: import & export

**Visual:** Spread expanding outward vs Rest collecting inward

**Speaker Notes:**
Same three dots, opposite directions. Spread is on the right side of `=` (providing values to a new array/object). Rest is on the left side (receiving values into a variable). Topic 3 introduces ES6 modules — splitting code across files with import/export — the last major feature of the course.
