# Demo Guide — Module 17, Topic 1: localStorage vs sessionStorage
**Module 17 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/index.html`, `demo/script.js` (open in browser)

---

## What This Demo Teaches

Students interact with two counters — one saved to localStorage, one to sessionStorage — and perform three experiments to prove the persistence difference: refresh (both persist), close tab (only localStorage persists), new tab (localStorage shared, sessionStorage isolated).

---

## Setup (Before Class)

1. Open `index.html` in a browser
2. Open DevTools → Application tab → Local Storage and Session Storage sections
3. Clear both storages before starting (right-click → Clear)

---

## Demo Steps

### Experiment 1 — Both Persist on Refresh

> *"Increment both counters to 3. Now refresh the page."*

Both counters reload at 3. Both survive refresh.

> *"Both localStorage and sessionStorage survive page refreshes. This is how you solve the 'data disappears on refresh' problem."*

---

### Experiment 2 — Close Tab (Session Dies)

> *"Close this tab completely. Open the page again in a new tab."*

localStorage counter is still at 3. sessionStorage counter is 0.

> *"localStorage survives — it's permanent. sessionStorage is gone — its lifetime is tied to the tab. Closing the tab kills the session."*

---

### Experiment 3 — New Tab (Not Shared)

> *"Keep this tab open. Open the same page in a second tab side by side."*

In the new tab: localStorage shows the same count (shared). sessionStorage shows 0 (per-tab).

> *"localStorage is shared across all tabs of the same origin. sessionStorage is isolated per tab — each tab gets its own copy."*

---

### DevTools Inspection

> *"Open Application → Local Storage. You can see the key-value pairs we stored."*

Show the key "visitCount" with its current value. Show Session Storage with "sessionCount".

> *"DevTools lets you inspect, edit, and delete stored values directly. This is essential for debugging persistence issues."*

---

## Teaching Tips

- **Three experiments are essential** — don't skip any. Each proves a different property.
- **DevTools Application tab** — show students how to find it. They'll use it daily.
- **"Strings only"** — point out that `setItem` stores "3" not 3. We convert with `Number()` on read. Topic 3 goes deeper on this.
- **Clear before demo** — start fresh so counters begin at 0.

---

## What's Next

**Topic 2** → Storage API: setItem, getItem, removeItem & clear — the full set of methods.
