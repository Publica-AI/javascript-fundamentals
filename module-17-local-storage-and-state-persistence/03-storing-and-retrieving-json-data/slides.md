# Module 17 — Topic 3: Storing & Retrieving JSON Data
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Storing & Retrieving JSON Data
**Subheadline:** Module 17, Topic 3 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — The Pattern: stringify to Save, parse to Load
**Type:** Code
**Headline:** JSON.stringify to Save — JSON.parse to Load — The Universal Pattern
**Content:**

```js
// Save an object
const student = { name: "Amara Obi", score: 88, enrolled: true };
localStorage.setItem("student", JSON.stringify(student));

// Load it back
const loaded = JSON.parse(localStorage.getItem("student"));
console.log(loaded.name);     // "Amara Obi"
console.log(loaded.score);    // 88 (number, not string!)
console.log(loaded.enrolled); // true (boolean, not string!)
```

- `JSON.stringify(value)` converts objects/arrays to a JSON string for storage
- `JSON.parse(string)` converts the stored JSON string back to a JavaScript value
- Types are preserved: numbers stay numbers, booleans stay booleans
- This is how ALL real applications store complex data in localStorage

**Visual:** Object → JSON.stringify → "{"name":"Amara",...}" → localStorage → getItem → JSON.parse → Object (full circle)

---

### SLIDE 3 — Storing Arrays
**Type:** Code
**Headline:** Store Arrays of Objects — The Todo List Pattern
**Content:**

```js
// Save an array of todos
const todos = [
  { id: 1, text: "Complete Module 17", done: false },
  { id: 2, text: "Start Module 18", done: false },
  { id: 3, text: "Review promises", done: true }
];

localStorage.setItem("todos", JSON.stringify(todos));

// Load and use
const loaded = JSON.parse(localStorage.getItem("todos"));
console.log(loaded.length);          // 3
console.log(loaded[0].text);         // "Complete Module 17"
console.log(loaded[2].done);         // true

// Filter, map — everything works after parsing
const pending = loaded.filter(function(t) { return !t.done; });
console.log(pending.length);         // 2
```

- Arrays stringify into `[{...}, {...}]` format
- After parsing, you get a real JavaScript array — all methods work
- This is the pattern for persisting lists: todos, cart items, notes, bookmarks

**Visual:** Array of objects → JSON string in localStorage → parse back → array with .filter, .map available

---

### SLIDE 4 — Safe Loading with a Fallback
**Type:** Code
**Headline:** Always Handle the Case Where Nothing Is Stored Yet
**Content:**

```js
// WRONG — crashes if key doesn't exist
const todos = JSON.parse(localStorage.getItem("todos"));
// If "todos" key doesn't exist: JSON.parse(null) → SyntaxError!

// RIGHT — provide a fallback
const todos = JSON.parse(localStorage.getItem("todos")) || [];
// If null → null || [] → empty array (safe!)

// ALSO RIGHT — explicit check
const raw = localStorage.getItem("todos");
const todos = raw ? JSON.parse(raw) : [];
```

- `localStorage.getItem("missing")` returns `null`
- `JSON.parse(null)` returns `null` (not an error in most browsers, but unreliable)
- Always use `|| defaultValue` or an explicit null check
- The fallback pattern: `JSON.parse(getItem(key)) || defaultValue`

**Visual:** Decision tree: getItem → null? → use default / not null? → JSON.parse → use data

---

### SLIDE 5 — Complete Load/Save Pattern
**Type:** Code
**Headline:** The Full Pattern — Load on Start, Save on Change
**Content:**

```js
// 1. Load saved data (or use default)
var todos = JSON.parse(localStorage.getItem("todos")) || [];

// 2. Function to save current state
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 3. Modify and save
function addTodo(text) {
  todos.push({ id: Date.now(), text: text, done: false });
  saveTodos();  // persist after every change
}

function toggleTodo(id) {
  var todo = todos.find(function(t) { return t.id === id; });
  if (todo) {
    todo.done = !todo.done;
    saveTodos();  // persist after every change
  }
}

function deleteTodo(id) {
  todos = todos.filter(function(t) { return t.id !== id; });
  saveTodos();  // persist after every change
}

// Data survives page refresh!
```

The pattern:
1. **Load** — read from localStorage on page load (with fallback)
2. **Modify** — update the in-memory array/object normally
3. **Save** — write back to localStorage after every modification

**Visual:** Circular flow: Page Load → Read from localStorage → Work with data in memory → On change: write to localStorage → (Page refresh) → Read from localStorage...

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Storing & Retrieving JSON Data
**Content:**

- `JSON.stringify(value)` → store objects/arrays as strings in localStorage
- `JSON.parse(string)` → read them back as real JavaScript values
- Always use a fallback: `JSON.parse(getItem(key)) || defaultValue`
- Save after every modification to keep localStorage in sync
- This enables persistent: todos, preferences, cart items, bookmarks, notes

**The pattern:**
```js
// Load
var data = JSON.parse(localStorage.getItem("key")) || defaultValue;

// Save (call after every change)
function save() {
  localStorage.setItem("key", JSON.stringify(data));
}
```

**Up Next:** Module 18 — Modern JavaScript (ES6+ & Modules)

**Visual:** The load/save cycle shown as a loop: localStorage ↔ JSON.stringify/parse ↔ in-memory data ↔ DOM
