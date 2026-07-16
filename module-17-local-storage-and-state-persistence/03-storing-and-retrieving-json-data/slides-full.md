# Module 17 — Topic 3: Storing & Retrieving JSON Data
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Storing & Retrieving JSON Data
**Subheadline:** Module 17, Topic 3 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Topic 2 showed the strings-only limitation. Topic 3 solves it permanently. The pattern is simple: JSON.stringify before saving, JSON.parse after loading, always provide a fallback for the first-load case. This pattern is used in every single-page application that persists state locally. Students will use it immediately in their projects.

---

### SLIDE 2 — The Pattern: stringify to Save, parse to Load
**Type:** Code
**Headline:** JSON.stringify to Save — JSON.parse to Load — The Universal Pattern
**Content:**

```js
const student = { name: "Amara Obi", score: 88, enrolled: true };
localStorage.setItem("student", JSON.stringify(student));

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

**Speaker Notes:**
This connects Module 15 (JSON) to Module 17 (localStorage). Students already know stringify and parse — they used them with fetch. Now the same tools solve the localStorage limitation. Without stringify, storing {name: "Amara"} becomes "[object Object]". With stringify, it becomes '{"name":"Amara","score":88}' — a valid JSON string that parse can restore perfectly. Point out that types are preserved: score comes back as 88 (number), enrolled as true (boolean). The JSON roundtrip restores the original types.

---

### SLIDE 3 — Storing Arrays
**Type:** Code
**Headline:** Store Arrays of Objects — The Todo List Pattern
**Content:**

```js
const todos = [
  { id: 1, text: "Complete Module 17", done: false },
  { id: 2, text: "Start Module 18", done: false },
  { id: 3, text: "Review promises", done: true }
];

localStorage.setItem("todos", JSON.stringify(todos));

const loaded = JSON.parse(localStorage.getItem("todos"));
console.log(loaded.length);          // 3
console.log(loaded[0].text);         // "Complete Module 17"
console.log(loaded[2].done);         // true

const pending = loaded.filter(function(t) { return !t.done; });
console.log(pending.length);         // 2
```

- Arrays stringify into `[{...}, {...}]` format
- After parsing, you get a real JavaScript array — all methods work
- This is the pattern for persisting lists: todos, cart items, notes, bookmarks

**Visual:** Array of objects → JSON string in localStorage → parse back → array with .filter, .map available

**Speaker Notes:**
The todo list is the canonical example. You have an array of objects in memory. You stringify the entire array and store it under one key. When the page reloads, you getItem and parse — you get the full array back. All Module 12 methods work: filter, map, find, reduce. This one pattern — stringify an array, store it, parse it on load — is used for shopping carts (Konga), saved goals (PiggyVest), transaction history (Paystack), trip history (Bolt). It's universally applicable.

---

### SLIDE 4 — Safe Loading with a Fallback
**Type:** Code
**Headline:** Always Handle the Case Where Nothing Is Stored Yet
**Content:**

```js
// WRONG — unreliable on first visit
const todos = JSON.parse(localStorage.getItem("todos"));

// RIGHT — provide a fallback
const todos = JSON.parse(localStorage.getItem("todos")) || [];

// ALSO RIGHT — explicit check
const raw = localStorage.getItem("todos");
const todos = raw ? JSON.parse(raw) : [];
```

- `localStorage.getItem("missing")` returns `null`
- `JSON.parse(null)` returns `null` (not an error in most browsers, but unreliable)
- Always use `|| defaultValue` or an explicit null check
- The fallback pattern: `JSON.parse(getItem(key)) || defaultValue`

**Visual:** Decision tree: getItem → null? → use default / not null? → JSON.parse → use data

**Speaker Notes:**
First-time visitors have nothing in localStorage. getItem returns null. JSON.parse(null) technically returns null in most browsers, but this is fragile — and null isn't a useful array. The || [] pattern is defensive: if parse returns null (first visit) or the key doesn't exist, you get an empty array. This means your code always has a valid array to work with, whether it's the first visit or the hundredth. Make this automatic — every JSON.parse from localStorage should have || defaultValue.

---

### SLIDE 5 — Complete Load/Save Pattern
**Type:** Code
**Headline:** The Full Pattern — Load on Start, Save on Change
**Content:**

```js
var todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(text) {
  todos.push({ id: Date.now(), text: text, done: false });
  saveTodos();
}

function toggleTodo(id) {
  var todo = todos.find(function(t) { return t.id === id; });
  if (todo) {
    todo.done = !todo.done;
    saveTodos();
  }
}

function deleteTodo(id) {
  todos = todos.filter(function(t) { return t.id !== id; });
  saveTodos();
}
```

The pattern:
1. **Load** — read from localStorage on page load (with fallback)
2. **Modify** — update the in-memory array/object normally
3. **Save** — write back to localStorage after every modification

**Visual:** Circular flow: Page Load → Read from localStorage → Work with data in memory → On change: write to localStorage → (Page refresh) → Read from localStorage...

**Speaker Notes:**
This is the complete application persistence pattern. Three rules: (1) Load on page load — the first line of your script reads from localStorage. (2) Work in memory — your functions modify the array normally (push, filter, find). (3) Save after every change — every function that modifies data calls saveTodos() at the end. If the user refreshes between addTodo and deleteTodo, both changes are preserved because each saved immediately. This pattern scales to any data: preferences, notes, bookmarks, game state. One key, one array/object, load once, save on every mutation.

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
var data = JSON.parse(localStorage.getItem("key")) || defaultValue;

function save() {
  localStorage.setItem("key", JSON.stringify(data));
}
```

**Up Next:** Module 18 — Modern JavaScript (ES6+ & Modules)

**Visual:** The load/save cycle shown as a loop: localStorage ↔ JSON.stringify/parse ↔ in-memory data ↔ DOM

**Speaker Notes:**
Three topics, one goal: persist data across page reloads. Topic 1 chose the storage type. Topic 2 taught the API. Topic 3 solved the strings-only limitation. The combined pattern — load with fallback, modify, save — is the foundation of every todo app, settings panel, and cart feature students will build. Module 18 introduces modern JavaScript syntax: destructuring, spread/rest, and ES modules — the final productivity upgrades before the mini-project.
