# Module 18 — Topic 2: Spread & Rest Operators
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Spread & Rest Operators
**Subheadline:** Module 18, Topic 2 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — Spread with Arrays
**Type:** Code
**Headline:** Spread (...) Expands an Array into Individual Elements
**Content:**

```js
// Copy an array (shallow)
const scores = [88, 72, 91];
const copy = [...scores];
console.log(copy);  // [88, 72, 91] — independent copy

// Merge arrays
const js = ["Amara", "Chidi"];
const html = ["Funmi", "Gbenga"];
const all = [...js, ...html];
console.log(all);  // ["Amara", "Chidi", "Funmi", "Gbenga"]

// Add elements while copying
const withNew = [...scores, 95, 80];
console.log(withNew);  // [88, 72, 91, 95, 80]

// Clone before sort (sort mutates!)
const sorted = [...scores].sort((a, b) => b - a);
console.log(sorted);  // [91, 88, 72] — original unchanged
```

- `...array` spreads elements into a new context
- Creates a **shallow copy** (nested objects are still shared)
- Use to: copy arrays, merge arrays, add items without mutating
- Critical for sort: `[...arr].sort()` prevents mutation

**Visual:** Array [88, 72, 91] "exploding" into individual values 88, 72, 91 being placed into a new array

---

### SLIDE 3 — Spread with Objects
**Type:** Code
**Headline:** Spread Objects to Copy, Merge, and Override Properties
**Content:**

```js
// Copy an object
const student = { name: "Amara", score: 88 };
const copy = { ...student };

// Merge objects (later properties override earlier ones)
const defaults = { theme: "light", language: "en", fontSize: 14 };
const userPrefs = { theme: "dark", fontSize: 16 };
const settings = { ...defaults, ...userPrefs };
console.log(settings);
// { theme: "dark", language: "en", fontSize: 16 }

// Add/override a property without mutating
const updated = { ...student, score: 92, grade: "Pass" };
console.log(updated);  // { name: "Amara", score: 92, grade: "Pass" }
console.log(student);  // { name: "Amara", score: 88 } — unchanged!
```

- `{ ...obj }` copies all properties into a new object
- Later keys override earlier ones (right wins)
- Use to: copy objects, merge configs, update properties immutably
- Does NOT deep clone — nested objects are shared references

**Visual:** Two objects merging: defaults (3 keys) + userPrefs (2 keys) → settings (3 keys, with overrides highlighted)

---

### SLIDE 4 — Rest in Destructuring
**Type:** Code
**Headline:** Rest (...) Collects Remaining Elements into an Array or Object
**Content:**

```js
// Rest with arrays — collect remaining items
const [first, second, ...rest] = [88, 72, 91, 65, 77];
console.log(first);  // 88
console.log(rest);   // [91, 65, 77]

// Rest with objects — collect remaining properties
const { name, ...other } = { name: "Amara", score: 88, course: "JS" };
console.log(name);   // "Amara"
console.log(other);  // { score: 88, course: "JS" }
```

- `...rest` must be the **last** element in the pattern
- Arrays: collects remaining elements into a new array
- Objects: collects remaining properties into a new object
- Useful for separating known fields from "everything else"

**Visual:** Array split: [first | second | ...rest] with first two going to variables, the remaining grouped into `rest`

---

### SLIDE 5 — Rest in Function Parameters
**Type:** Code
**Headline:** Rest Parameters — Accept Any Number of Arguments
**Content:**

```js
// Collect all arguments into an array
function sum(...numbers) {
  return numbers.reduce(function(total, n) { return total + n; }, 0);
}

console.log(sum(10, 20, 30));       // 60
console.log(sum(5, 10, 15, 20));    // 50

// First argument separate, rest collected
function enroll(course, ...students) {
  console.log(course + ": " + students.join(", "));
}

enroll("JavaScript", "Amara", "Chidi", "Funmi");
// "JavaScript: Amara, Chidi, Funmi"
```

- `...paramName` collects all (or remaining) arguments into a real array
- Unlike the old `arguments` object — rest gives you a proper Array with .map, .filter, etc.
- Must be the last parameter in the function signature

**Visual:** Function call with 5 arguments → first goes to `course`, remaining 4 collected into `students` array

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Spread & Rest Operators
**Content:**

Both use `...` but do opposite things:

| Operator | Context | What it does |
|----------|---------|-------------|
| **Spread** | `[...arr]`, `{...obj}` | Expands elements/properties outward |
| **Rest** | `[a, ...rest]`, `function(...args)` | Collects elements/properties inward |

**Spread uses:** copy, merge, add items, sort without mutation
**Rest uses:** collect remaining elements, variadic functions, separate known from unknown

**The rule:** Spread is on the **right** side (providing values). Rest is on the **left** side (receiving values).

**Up Next:** Topic 3 — ES6 Modules: import & export

**Visual:** Two arrows: Spread → (expanding outward), Rest → (collecting inward)
