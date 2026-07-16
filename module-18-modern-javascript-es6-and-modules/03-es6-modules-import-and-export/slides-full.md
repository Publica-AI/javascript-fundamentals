# Module 18 — Topic 3: ES6 Modules — import & export
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** ES6 Modules: import & export
**Subheadline:** Module 18, Topic 3 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
The final topic of the course. Modules let you split code across files — each with its own scope, its own exports, and explicit imports. This is how every professional JavaScript project is organized. No more one giant file with 500 lines. Students will use modules in the mini-project to demonstrate proper code organization.

---

### SLIDE 2 — Why Modules?
**Type:** Concept
**Headline:** Modules Split Code into Separate Files — Each with Its Own Scope
**Content:**

Without modules: global conflicts, hard to navigate, can't reuse easily.
With modules: own scope, clear responsibility, reusable, team-friendly.

```html
<script type="module" src="main.js"></script>
```

**Visual:** One giant file vs multiple small focused files

**Speaker Notes:**
Before modules, all JavaScript loaded via `<script>` tags shared the global scope. Two files defining `function init()` would conflict. Variables leaked everywhere. Modules fix this: each file is its own scope. Nothing is visible outside unless explicitly exported. The `type="module"` attribute tells the browser to treat the script as a module — with its own scope and support for import/export syntax.

---

### SLIDE 3 — Named Exports & Imports
**Type:** Code
**Headline:** Named Exports — Export Multiple Values by Name
**Content:**

```js
// utils.js
export function formatPrice(amount) { return "₦" + amount.toLocaleString(); }
export function getGrade(score) { return score >= 70 ? "Pass" : "Fail"; }
export const VAT_RATE = 0.075;

// main.js
import { formatPrice, getGrade, VAT_RATE } from "./utils.js";
```

- `export` before a declaration makes it importable
- `import { name }` — names must match
- File path must start with `./` or `../`

**Visual:** utils.js exports → main.js imports with matching names

**Speaker Notes:**
Named exports are the most common type. You can export as many things as you want from one file. The importing file picks exactly what it needs with curly braces. Names must match — formatPrice in the export must be formatPrice in the import (or you rename with `as`). The file path MUST be relative — `./utils.js` not just `utils.js`. This is a common error for beginners coming from Node's require() where paths are looser.

---

### SLIDE 4 — Default Exports
**Type:** Code
**Headline:** Default Export — One Main Export per File
**Content:**

```js
// Student.js
export default class Student { ... }

// main.js
import Student from "./Student.js";  // no curly braces!
```

- `export default` — one per file
- Import without curly braces — you choose the name
- Common for: classes, main function of a module

**Visual:** One big arrow from Student.js to main.js

**Speaker Notes:**
Default exports are for the "main thing" a file provides. If a file defines one class, that class is the default export. The importer doesn't use curly braces and can name it whatever they want: `import Student`, `import MyStudent`, `import Foo` — all import the same default. Convention: name the import the same as the class/function. One file = one default. Use named exports for utilities and constants alongside it.

---

### SLIDE 5 — Combining Named and Default
**Type:** Code
**Headline:** A File Can Have One Default and Multiple Named Exports
**Content:**

```js
// courseUtils.js
export default class Course { ... }
export function formatPrice(amount) { ... }
export const MAX_STUDENTS = 30;

// main.js
import Course, { formatPrice, MAX_STUDENTS } from "./courseUtils.js";
```

- Default first (no braces), named second (in braces)
- Rename: `import { formatPrice as fp }`

**Visual:** One default + two named arrows from file to imports

**Speaker Notes:**
Real files often combine both: one primary export (default) and several helper exports (named). The import syntax reflects this: default first, then destructured named exports. The rename syntax with `as` is useful when two files export the same name — you can rename on import to avoid conflicts.

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

- Add `type="module"` to script tag
- File paths must be relative
- Each file has its own scope

**Up Next:** Course complete! → Mini-Project: Interactive Task Manager

**Visual:** Module dependency graph

**Speaker Notes:**
Module 18 — and the entire JavaScript Fundamentals course — is complete. Students have gone from variables and console.log to: DOM manipulation, events, array methods, classes, async/await, fetch, localStorage, destructuring, spread/rest, and modules. The mini-project (Interactive Task Manager) ties everything together. They'll use modules to organize code, localStorage to persist data, classes to model tasks, DOM events for interaction, and array methods for filtering and display.
