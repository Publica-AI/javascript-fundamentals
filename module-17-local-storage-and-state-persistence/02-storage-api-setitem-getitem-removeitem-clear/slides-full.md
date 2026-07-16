# Module 17 — Topic 2: Storage API — setItem, getItem, removeItem & clear
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Storage API: setItem, getItem, removeItem & clear
**Subheadline:** Module 17, Topic 2 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Topic 1 explained WHEN to use localStorage vs sessionStorage. Topic 2 teaches HOW — the actual API methods for saving, reading, deleting, and clearing data. These four methods (plus length and key()) are the entire Web Storage API. Students will use setItem and getItem in almost every project from now on.

---

### SLIDE 2 — setItem & getItem
**Type:** Code
**Headline:** setItem Saves a Key-Value Pair — getItem Retrieves It
**Content:**

```js
localStorage.setItem("username", "Amara Obi");
localStorage.setItem("theme", "dark");
localStorage.setItem("score", "88");

const name  = localStorage.getItem("username");  // "Amara Obi"
const theme = localStorage.getItem("theme");     // "dark"
const score = localStorage.getItem("score");     // "88" (string!)

const missing = localStorage.getItem("nonexistent");
console.log(missing);  // null
```

- `setItem(key, value)` — saves a string value under a string key
- `getItem(key)` — returns the stored string, or `null` if the key doesn't exist
- Both key and value must be **strings** (non-strings are converted automatically)
- If the key already exists, `setItem` **overwrites** the previous value

**Visual:** A key-value table: "username" → "Amara Obi", "theme" → "dark", "score" → "88"

**Speaker Notes:**
The API is intentionally simple: set a key-value pair, get it back by key. Think of it like a dictionary or a JavaScript object — but stored in the browser, not in memory. Two gotchas: (1) everything is a string — "88" not 88, so you need Number() when reading numbers; (2) missing keys return null, not undefined. Students often check `if (getItem(...))` which works fine because null is falsy. Point out that setItem is an overwrite, not an append — calling setItem with the same key replaces the old value.

---

### SLIDE 3 — removeItem & clear
**Type:** Code
**Headline:** removeItem Deletes One Key — clear Deletes Everything
**Content:**

```js
localStorage.setItem("a", "1");
localStorage.setItem("b", "2");
localStorage.setItem("c", "3");

localStorage.removeItem("b");
console.log(localStorage.getItem("b"));  // null (gone)
console.log(localStorage.getItem("a"));  // "1" (still there)

localStorage.clear();
console.log(localStorage.getItem("a"));  // null (everything gone)
```

- `removeItem(key)` — deletes one specific key-value pair
- `clear()` — deletes ALL stored data for this origin
- Neither method throws if the key doesn't exist — they just do nothing
- `clear()` is destructive — use with caution (no undo)

**Visual:** The key-value table with "b" being crossed out (removeItem), then all rows being crossed out (clear)

**Speaker Notes:**
removeItem is surgical — it deletes exactly one key. clear is nuclear — it deletes everything for this origin. Warn students that clear() wipes ALL localStorage for the entire website, not just what their script stored. If another part of the application saved authentication tokens, clear() removes those too. In production, prefer removeItem for specific keys rather than clear(). Both are safe to call on non-existent keys — no error, just a no-op.

---

### SLIDE 4 — length and key()
**Type:** Code
**Headline:** Inspect Storage — length and key() for Iteration
**Content:**

```js
localStorage.setItem("course1", "JavaScript");
localStorage.setItem("course2", "HTML & CSS");
localStorage.setItem("course3", "Git");

console.log(localStorage.length);  // 3

console.log(localStorage.key(0));  // "course1"
console.log(localStorage.key(1));  // "course2"

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

**Speaker Notes:**
The for loop pattern is useful for debugging: dump everything in localStorage. But in practice, you'll rarely iterate — you know your key names and use getItem directly. The key order is implementation-specific — Chrome usually maintains insertion order, but the spec doesn't guarantee it. If you need ordered data, store an array (as JSON, Topic 3) rather than relying on key order.

---

### SLIDE 5 — The "Strings Only" Limitation
**Type:** Code
**Headline:** localStorage Only Stores Strings — Everything Else Gets Converted
**Content:**

```js
localStorage.setItem("count", 42);
console.log(typeof localStorage.getItem("count")); // "string"

localStorage.setItem("enrolled", true);
console.log(localStorage.getItem("enrolled"));     // "true" (string!)

localStorage.setItem("user", { name: "Amara" });
console.log(localStorage.getItem("user"));         // "[object Object]" — useless!

// Solution: JSON.stringify first
localStorage.setItem("user", JSON.stringify({ name: "Amara" }));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Amara" } ✓
```

- Numbers/booleans are auto-converted to strings (usually fine — convert back on read)
- Objects/arrays are converted to `"[object Object]"` — **data is lost!**
- Solution: `JSON.stringify()` before saving, `JSON.parse()` after reading (Topic 3)

**Visual:** Three examples: 42 → "42" (OK), true → "true" (OK), {name:"Amara"} → "[object Object]" (BROKEN, with red X)

**Speaker Notes:**
This is the most common localStorage bug. Students will try to store an object directly: setItem("user", userObject). The value becomes "[object Object]" — a meaningless string. The original object data is completely lost. Numbers and booleans are recoverable (Number("42") → 42, "true" === "true" for comparison), but objects are not. The fix is JSON.stringify before saving and JSON.parse after reading. This is so common that Topic 3 is entirely dedicated to the pattern. Tease it here, teach it fully next.

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

**Speaker Notes:**
Six methods, one critical limitation (strings only). setItem and getItem are used 90% of the time. removeItem for cleanup, clear for debugging. length and key for inspection. Topic 3 solves the strings-only problem permanently with the JSON pattern — making localStorage usable for real application data.
