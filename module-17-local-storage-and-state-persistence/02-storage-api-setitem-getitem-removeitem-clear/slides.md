# Module 17 — Topic 2: Storage API — setItem, getItem, removeItem & clear
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Storage API: setItem, getItem, removeItem & clear
**Subheadline:** Module 17, Topic 2 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — setItem & getItem
**Type:** Code
**Headline:** setItem Saves a Key-Value Pair — getItem Retrieves It
**Content:**

```js
// Save values
localStorage.setItem("username", "Amara Obi");
localStorage.setItem("theme", "dark");
localStorage.setItem("score", "88");

// Retrieve values
const name  = localStorage.getItem("username");  // "Amara Obi"
const theme = localStorage.getItem("theme");     // "dark"
const score = localStorage.getItem("score");     // "88" (string!)

// Key doesn't exist? Returns null
const missing = localStorage.getItem("nonexistent");
console.log(missing);  // null
```

- `setItem(key, value)` — saves a string value under a string key
- `getItem(key)` — returns the stored string, or `null` if the key doesn't exist
- Both key and value must be **strings** (non-strings are converted automatically)
- If the key already exists, `setItem` **overwrites** the previous value

**Visual:** A key-value table: "username" → "Amara Obi", "theme" → "dark", "score" → "88"

---

### SLIDE 3 — removeItem & clear
**Type:** Code
**Headline:** removeItem Deletes One Key — clear Deletes Everything
**Content:**

```js
// Setup
localStorage.setItem("a", "1");
localStorage.setItem("b", "2");
localStorage.setItem("c", "3");

// Remove one key
localStorage.removeItem("b");
console.log(localStorage.getItem("b"));  // null (gone)
console.log(localStorage.getItem("a"));  // "1" (still there)

// Remove ALL keys for this origin
localStorage.clear();
console.log(localStorage.getItem("a"));  // null (everything gone)
```

- `removeItem(key)` — deletes one specific key-value pair
- `clear()` — deletes ALL stored data for this origin
- Neither method throws if the key doesn't exist — they just do nothing
- `clear()` is destructive — use with caution (no undo)

**Visual:** The key-value table with "b" being crossed out (removeItem), then all rows being crossed out (clear)

---

### SLIDE 4 — length and key()
**Type:** Code
**Headline:** Inspect Storage — length and key() for Iteration
**Content:**

```js
localStorage.setItem("course1", "JavaScript");
localStorage.setItem("course2", "HTML & CSS");
localStorage.setItem("course3", "Git");

// How many items?
console.log(localStorage.length);  // 3

// Access keys by index
console.log(localStorage.key(0));  // "course1" (order not guaranteed)
console.log(localStorage.key(1));  // "course2"

// Loop through all stored items
for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);
  console.log(key + " → " + localStorage.getItem(key));
}
```

- `localStorage.length` — number of stored key-value pairs
- `localStorage.key(index)` — returns the key at that index
- Key order is NOT guaranteed — don't rely on it
- The loop pattern: iterate by index, get key, get value

**Visual:** Numbered list of keys (0: course1, 1: course2, 2: course3) with arrows to their values

---

### SLIDE 5 — The "Strings Only" Limitation
**Type:** Code
**Headline:** localStorage Only Stores Strings — Everything Else Gets Converted
**Content:**

```js
// Numbers become strings
localStorage.setItem("count", 42);
console.log(localStorage.getItem("count"));       // "42" (string!)
console.log(typeof localStorage.getItem("count")); // "string"

// Booleans become strings
localStorage.setItem("enrolled", true);
console.log(localStorage.getItem("enrolled"));     // "true" (string!)

// Objects become "[object Object]" — WRONG!
localStorage.setItem("user", { name: "Amara" });
console.log(localStorage.getItem("user"));         // "[object Object]" — useless!

// Solution: JSON.stringify first (Topic 3)
localStorage.setItem("user", JSON.stringify({ name: "Amara" }));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Amara" } ✓
```

- Numbers/booleans are auto-converted to strings (usually fine — convert back on read)
- Objects/arrays are converted to `"[object Object]"` — **data is lost!**
- Solution: `JSON.stringify()` before saving, `JSON.parse()` after reading (Topic 3)

**Visual:** Three examples: 42 → "42" (OK), true → "true" (OK), {name:"Amara"} → "[object Object]" (BROKEN, with red X)

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Storage API Methods
**Content:**

| Method | Purpose |
|--------|---------|
| `setItem(key, value)` | Save a key-value pair (overwrites if exists) |
| `getItem(key)` | Read a value by key (returns null if missing) |
| `removeItem(key)` | Delete one key-value pair |
| `clear()` | Delete ALL data for this origin |
| `length` | Number of stored pairs |
| `key(index)` | Get the key name at a given index |

- All values stored and returned as **strings**
- getItem returns `null` for missing keys (not undefined)
- Objects must use JSON.stringify/parse — raw objects become "[object Object]"

**Up Next:** Topic 3 — Storing & Retrieving JSON Data

**Visual:** API reference card with all 6 methods listed with one-line descriptions
