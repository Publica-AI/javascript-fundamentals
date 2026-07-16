# Module 17 — Topic 1: localStorage vs sessionStorage
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** localStorage vs sessionStorage
**Subheadline:** Module 17, Topic 1 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Module 16 covered async/await for fetching data from servers. Module 17 addresses a different problem: saving data locally in the browser. Every app students have built so far resets on page refresh. This module fixes that. Topic 1 introduces the two storage types and when to choose each.

---

### SLIDE 2 — The Problem: Data Disappears on Refresh
**Type:** Concept
**Headline:** JavaScript Variables Reset Every Time the Page Reloads
**Content:**

```js
let count = 0;
count++;
console.log(count);  // 1

// User refreshes the page...
// count is back to 0!
```

- All variables live in memory — they reset on page reload
- User preferences, form data, todos — all lost on refresh
- Solution: **Web Storage API** — save data in the browser itself
- Two storage types: `localStorage` and `sessionStorage`
- Data survives refreshes (and even browser restarts for localStorage)

**Visual:** A browser tab refreshing — variables in memory (gone) vs a storage box in the browser (persists)

**Speaker Notes:**
Start with the frustration: "You've built a todo list. You add 5 items. You refresh the page. They're gone." Every student has experienced this. Variables only exist while the page is loaded — the moment JavaScript re-runs on refresh, everything resets to initial values. The Web Storage API gives you a place to save data that survives refreshes. It's built into every browser — no libraries, no server, no database needed. Two flavors: localStorage (permanent) and sessionStorage (temporary). Same API, different lifetime.

---

### SLIDE 3 — localStorage
**Type:** Code
**Headline:** localStorage — Persists Until Explicitly Deleted (Survives Browser Restart)
**Content:**

```js
// Save a value
localStorage.setItem("username", "Amara Obi");

// Retrieve it (even after page refresh or browser restart!)
const name = localStorage.getItem("username");
console.log(name);  // "Amara Obi"

// Still there tomorrow, next week, next month...
// Only removed by: code, user clearing browser data, or storage full
```

Properties:
- Stores data with **no expiration** — persists indefinitely
- Available across all tabs/windows of the **same origin** (same domain)
- Capacity: ~5–10 MB per origin (varies by browser)
- Stores only **strings** — objects must be JSON.stringify'd first (Topic 3)
- Synchronous API — blocks the main thread (but fast for small data)

**Visual:** localStorage shown as a permanent file cabinet inside the browser — data stays even after closing and reopening the browser

**Speaker Notes:**
localStorage is the most commonly used. Data stays until YOUR code removes it, or the user manually clears their browser data. It survives page refreshes, browser restarts, even computer restarts. It's shared across all tabs of the same origin — if you set "theme" to "dark" in one tab, another tab on the same site can read it. The 5–10 MB limit is per origin (per website). It only stores strings — this is the key limitation that Topic 3 addresses with JSON.stringify/parse. Show DevTools: Application tab → Local Storage to see what's stored.

---

### SLIDE 4 — sessionStorage
**Type:** Code
**Headline:** sessionStorage — Persists Only Until the Tab Is Closed
**Content:**

```js
// Save a value
sessionStorage.setItem("currentStep", "3");

// Retrieve it
const step = sessionStorage.getItem("currentStep");
console.log(step);  // "3"

// Survives page refresh ✓
// Cleared when the tab/window closes ✗
```

Properties:
- Data lasts for the **session** (until the tab is closed)
- Survives page refreshes and navigation within the same tab
- **Not shared** between tabs (each tab has its own sessionStorage)
- Same capacity and string-only limitation as localStorage
- Good for: temporary form state, wizard progress, one-time messages

**Visual:** sessionStorage shown as a temporary sticky note on the tab — goes away when the tab closes

**Speaker Notes:**
sessionStorage is for data that's relevant to the current browsing session but shouldn't persist forever. Classic example: a multi-step signup form. The user fills in step 1, goes to step 2, then clicks back — the step 1 data should still be there. But if they close the tab and come back tomorrow, they should start fresh. sessionStorage is NOT shared between tabs — open two tabs of the same site, each has separate sessionStorage. This makes it ideal for per-tab state like "which filter is active" or "how far through the wizard."

---

### SLIDE 5 — Comparison Table
**Type:** Concept
**Headline:** Choose localStorage for Permanent Data, sessionStorage for Temporary
**Content:**

| Feature | localStorage | sessionStorage |
|---------|-------------|----------------|
| Lifetime | Until deleted by code or user | Until tab closes |
| Survives refresh | ✓ | ✓ |
| Survives browser close | ✓ | ✗ |
| Shared between tabs | ✓ (same origin) | ✗ (per tab) |
| Capacity | ~5–10 MB | ~5–10 MB |
| API | Identical | Identical |

**Use localStorage for:**
- User preferences (theme, language)
- Saved todos / notes
- Shopping cart items
- Authentication tokens

**Use sessionStorage for:**
- Multi-step form progress
- Temporary search filters
- "Don't show again" messages (per session)
- Wizard step tracking

**Visual:** Two columns: localStorage (permanent, shared, green) vs sessionStorage (temporary, per-tab, yellow)

**Speaker Notes:**
The decision is simple: "Should this data survive closing the browser?" Yes → localStorage. No → sessionStorage. In practice, localStorage is used about 90% of the time. The examples make it concrete: a user's dark mode preference should persist (localStorage). A form wizard's "you're on step 3" doesn't need to persist after the tab closes (sessionStorage). Both have the exact same API — the only difference is lifetime and scope. Students will use localStorage almost exclusively in this module.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — localStorage vs sessionStorage
**Content:**

- Variables reset on page refresh — Web Storage solves this
- `localStorage` — no expiration, survives browser restart, shared between tabs
- `sessionStorage` — clears when tab closes, isolated per tab
- Both store **strings only** (max ~5–10 MB)
- Both use the **same API** (setItem, getItem, removeItem, clear)
- Choose based on: "Should this data survive closing the browser?"

**Up Next:** Topic 2 — Storage API: setItem, getItem, removeItem & clear

**Visual:** Decision flowchart: "Should data persist after browser closes?" → Yes → localStorage / No → sessionStorage

**Speaker Notes:**
One decision question answers which to use. Topic 2 teaches the actual API methods: how to save, read, delete, and clear data. Topic 3 addresses the string-only limitation by combining localStorage with JSON.stringify/parse — enabling you to store objects and arrays.
