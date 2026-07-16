# Demo Guide — Module 17, Topic 2: Storage API Methods
**Module 17 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 8–10 minutes
**Files:** `demo/script.js` (run in browser console)

---

## What This Demo Teaches

Students practice all six storage methods (setItem, getItem, removeItem, clear, length, key), see overwriting in action, iterate stored data, and experience the "[object Object]" bug firsthand before seeing the JSON fix preview.

---

## Setup (Before Class)

1. Open any HTML page in the browser (or use the Topic 1 index.html)
2. Open DevTools Console
3. Open DevTools → Application → Local Storage (show side by side)
4. Clear localStorage before starting: `localStorage.clear()`

---

## Demo Steps

### Part 1 — setItem & getItem

> *"Four key-value pairs stored. Watch them appear in the Application tab."*

Run Part 1. Show values in console AND in DevTools Application tab.

> *"setItem saves. getItem retrieves. Missing keys return null — not undefined, not an error."*

---

### Part 2 — Overwriting

> *"What happens if I setItem with a key that already exists?"*

Show theme changing from "dark" to "light".

> *"setItem overwrites silently. No warning, no error. The old value is gone."*

---

### Part 3 — removeItem

> *"removeItem deletes one key. Check localStorage.length before and after."*

Show language disappearing, length decreasing.

> *"Surgical deletion. clear() would remove everything — we'll use that for cleanup at the end."*

---

### Part 4 — Iterating

> *"How do you see everything that's stored?"*

Show the for loop listing all keys and values.

> *"length gives the count, key(i) gives the key name. This is useful for debugging but rare in production code."*

---

### Part 5 — The Strings-Only Bug

> *"Watch what happens when I store an object directly."*

Show "[object Object]" appearing. The data is lost.

> *"This is the #1 localStorage bug. The object is converted to a useless string. The fix: JSON.stringify before saving, JSON.parse after reading. That's Topic 3."*

---

## Teaching Tips

- **DevTools Application tab** — keep it visible throughout. Students should see keys appear, change, and disappear in real time.
- **null not undefined** — emphasise this. `getItem("missing")` returns null. Students often check with `=== undefined` which fails.
- **Clear before demo** — start with empty storage so the demo is clean and predictable.

---

## What's Next

**Topic 3** → Storing & Retrieving JSON Data — the pattern for saving objects and arrays.
