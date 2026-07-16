# Demo Guide — Module 18, Topic 3: ES6 Modules — import & export
**Module 18 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/index.html`, `demo/script.js`, `demo/utils.js`, `demo/Student.js`

---

## What This Demo Teaches

Students see a multi-file project: utils.js exports named utilities (formatPrice, getGrade, constants), Student.js exports a default class that imports from utils.js, and script.js imports from both files and combines them. This demonstrates real project structure with modules.

---

## Setup (Before Class)

1. Open the demo folder in VS Code
2. Start Live Server (modules require HTTP — file:// won't work)
3. Open the page and DevTools Console

---

## Demo Steps

### File Tour

> *"Three files: utils.js (helper functions), Student.js (class), script.js (main logic). Each has its own scope."*

Open each file briefly. Show exports in utils.js and Student.js, imports in script.js.

### Part 1 — Named Imports

Show formatPrice, VAT_RATE, and COURSES being used from utils.js.

> *"Named exports use curly braces on import. The names must match exactly."*

### Part 2 — Default Import (Class)

Show Student class imported without curly braces and used to create instances.

> *"Default export — no braces needed. You choose the import name. Convention: match the class name."*

### Part 3 — Modules Working Together

Show Student.js importing getGrade from utils.js, and script.js using both.

> *"Modules can import from other modules. Student.js uses getGrade internally — script.js doesn't need to know. Each file handles its own dependencies."*

### Part 4 — DOM Rendering

Show students rendered in the browser from module code.

> *"Everything works together: modules for organization, classes for data modeling, array methods for transformation, DOM for display."*

---

## Teaching Tips

- **Live Server required** — modules don't work with `file://`. If a student gets a CORS error, they forgot the server.
- **`type="module"` in HTML** — point this out in index.html. Without it, import/export throws a syntax error.
- **File extensions required** — `"./utils.js"` not `"./utils"`. Browsers need the full path.
- **Show the Network tab** — in DevTools, modules load as separate requests. Students can see each file being fetched.

---

## What's Next

**Module 18 Combined Demo** → Full modular application using all ES6+ features together.
