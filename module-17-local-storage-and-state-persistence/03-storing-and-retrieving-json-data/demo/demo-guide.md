# Demo Guide — Module 17, Topic 3: Storing & Retrieving JSON Data
**Module 17 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in browser console)

---

## What This Demo Teaches

Students see the full JSON-localStorage workflow: stringify to save objects/arrays, parse to restore them with types intact, handle first-visit fallbacks, and implement a complete CRUD pattern (Create, Read, Update, Delete) that persists across page refreshes.

---

## Setup (Before Class)

1. Open any page in the browser
2. Open DevTools → Console (to run the script) and Application → Local Storage (to watch data)
3. Clear localStorage first: `localStorage.clear()`
4. Paste the script or include it via a simple HTML page

---

## Demo Steps

### Part 1 — Save & Load Object

> *"An object with mixed types: string, number, boolean, array. Watch them survive the roundtrip."*

Show types preserved: score is 88 (number), enrolled is true (boolean).

> *"JSON.stringify converts the whole object to a string. JSON.parse brings it back — with correct types. Not 'string 88', but number 88."*

---

### Part 2 — Save & Load Array

> *"Three courses stored as one JSON array under one key."*

Show array loaded, .filter and .map working on parsed data.

> *"One key, one JSON string, entire array persisted. After parsing, it's a normal JavaScript array — all Module 12 methods work."*

---

### Part 3 — Safe Loading

> *"What if the key doesn't exist yet? First-time visitors have nothing stored."*

Show || [] producing an empty array on first access.

> *"JSON.parse(getItem('missing')) could give you null. The || [] ensures you always have a usable array. Add this to EVERY load from localStorage."*

---

### Part 4 — Complete CRUD Pattern

> *"Add, toggle, delete — and every operation calls saveTodos()."*

Show todos being added, toggled, deleted. Then: "Refresh the page — they persist!"

> *"The pattern: load once at the top, modify with normal array operations, save after every change. This is how real todo apps, carts, and settings panels work."*

---

## Teaching Tips

- **Refresh to prove** — after Part 4, actually refresh the page and reload the data. The proof is the payoff.
- **Types matter** — emphasise that score comes back as 88 (number) not "88" (string). This is the advantage over manual conversion.
- **One key per collection** — store the entire array under one key, not separate keys per item. Much simpler.
- **saveTodos() everywhere** — every mutation must save. Missing one save = data lost on refresh.

---

## What's Next

**Module 17 Combined Demo** → A full persistent application combining localStorage, JSON, DOM rendering, and user interaction.
