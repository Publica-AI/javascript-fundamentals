# Module 18 — Topic 3: ES6 Modules — import & export
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** ES6 Modules: import & export
**Subheadline:** Module 18, Topic 3 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — Why Modules?
**Type:** Concept
**Headline:** Modules Split Code into Separate Files — Each with Its Own Scope
**Content:**

**Without modules (one big file):**
- All variables are global — naming conflicts
- Hard to find things — 500+ lines in one file
- Can't reuse code between projects easily
- Team members step on each other's changes

**With modules (multiple files):**
- Each file has its own scope — no global pollution
- Clear organization — each file has one responsibility
- Reusable — import only what you need
- Team-friendly — work on separate files without conflicts

To use modules in the browser, add `type="module"` to your script tag:
```html
<script type="module" src="main.js"></script>
```

**Visual:** Left: one giant file (chaotic). Right: multiple small focused files with arrows (imports) connecting them

---

### SLIDE 3 — Named Exports & Imports
**Type:** Code
**Headline:** Named Exports — Export Multiple Values by Name
**Content:**

```js
// --- utils.js ---
export function formatPrice(amount) {
  return "₦" + amount.toLocaleString();
}

export function getGrade(score) {
  return score >= 70 ? "Pass" : score >= 50 ? "Borderline" : "Fail";
}

export const VAT_RATE = 0.075;

// --- main.js ---
import { formatPrice, getGrade, VAT_RATE } from "./utils.js";

console.log(formatPrice(15000));      // ₦15,000
console.log(getGrade(88));            // "Pass"
console.log(15000 * (1 + VAT_RATE));  // 16125
```

- `export` before a declaration makes it available to other files
- `import { name1, name2 }` imports specific named exports
- Names must match exactly (or use `as` to rename)
- The file path must start with `./` or `../` (relative path)

**Visual:** utils.js file with three exports → arrows to main.js showing matching imports in curly braces

---

### SLIDE 4 — Default Exports
**Type:** Code
**Headline:** Default Export — One Main Export per File
**Content:**

```js
// --- Student.js ---
export default class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  getGrade() {
    return this.score >= 70 ? "Pass" : "Fail";
  }
}

// --- main.js ---
import Student from "./Student.js";  // no curly braces!

const amara = new Student("Amara Obi", 88);
console.log(amara.getGrade());  // "Pass"
```

- `export default` — one default export per file
- Import without curly braces: `import Name from "./file.js"`
- You can name it anything on import (it's the default, so the name is yours)
- Common for: classes, main component of a file, primary function

**Visual:** Student.js with one big default export arrow → main.js importing it with any chosen name

---

### SLIDE 5 — Combining Named and Default
**Type:** Code
**Headline:** A File Can Have One Default and Multiple Named Exports
**Content:**

```js
// --- courseUtils.js ---
export default class Course {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

export function formatPrice(amount) {
  return "₦" + amount.toLocaleString();
}

export const MAX_STUDENTS = 30;

// --- main.js ---
import Course, { formatPrice, MAX_STUDENTS } from "./courseUtils.js";

const js = new Course("JavaScript", 15000);
console.log(formatPrice(js.price));   // ₦15,000
console.log(MAX_STUDENTS);            // 30
```

- One default + multiple named exports in the same file
- Import default first (no braces), then named (in braces)
- Rename on import: `import { formatPrice as fp } from "./utils.js"`

**Visual:** courseUtils.js with one large default arrow and two smaller named arrows all going to main.js

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — ES6 Modules
**Content:**

| Feature | Export | Import |
|---------|--------|--------|
| Named | `export function fn() {}` | `import { fn } from "./file.js"` |
| Default | `export default class X {}` | `import X from "./file.js"` |
| Rename | N/A | `import { fn as myFn }` |
| Both | One default + many named | `import Default, { named }` |

- Add `type="module"` to `<script>` tag in HTML
- File paths must be relative (`./` or `../`)
- Each file is its own scope — no global pollution
- Modules enable: code organization, reusability, team collaboration

**Up Next:** Course complete! → Mini-Project: Interactive Task Manager

**Visual:** Architecture diagram: main.js importing from utils.js, Student.js, and courseUtils.js — showing module dependency graph
