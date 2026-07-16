# Module 17 — Topic 1: localStorage vs sessionStorage
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** localStorage vs sessionStorage
**Subheadline:** Module 17, Topic 1 of 3 — JavaScript Fundamentals

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
