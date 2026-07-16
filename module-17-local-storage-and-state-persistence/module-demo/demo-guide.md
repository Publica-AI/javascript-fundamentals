# Demo Guide — Module 17 Combined: Local Storage & State Persistence
**Module 17 — JavaScript Fundamentals**
**Type:** Module demo (combined)
**Duration:** 12–15 minutes
**Files:** `module-demo/index.html`, `module-demo/script.js` (open in browser)

---

## What This Demo Teaches

A complete persistent study tracker that uses localStorage for goals, theme preference, and lifetime visit count; sessionStorage for per-session page loads; JSON stringify/parse for the goals array; and DOM events for interaction. Students see data survive page refreshes, theme preference persist, and the contrast between localStorage (permanent) and sessionStorage (per-tab).

---

## Setup (Before Class)

1. Open `index.html` in a browser
2. Open DevTools → Application → Local Storage and Session Storage
3. Clear both storages before the demo: `localStorage.clear(); sessionStorage.clear()`

---

## Demo Steps

### Step 1 — Add Goals

> *"Add 3 study goals. Watch them appear in the list and in DevTools → Local Storage."*

Add goals. Show them in the UI and in the Application tab as a JSON string.

> *"Each add calls saveGoals() which stringifies the array. The entire goals list is one JSON string under one key."*

---

### Step 2 — Toggle and Delete

> *"Check off a goal. Delete another. Watch localStorage update immediately."*

Toggle and delete. Show the JSON in DevTools updating after each action.

> *"Every mutation saves. There's no 'save' button — the data is always in sync."*

---

### Step 3 — Refresh the Page

> *"The moment of truth — refresh."*

Refresh. Goals are still there. Theme is still the same. Visit counter incremented.

> *"Goals: persisted via localStorage + JSON. Theme: persisted as a simple string. Visit count: incremented on every page load. All survived the refresh."*

---

### Step 4 — Toggle Theme

> *"Click Toggle Theme. Refresh. It remembers."*

Switch to dark, refresh — still dark.

> *"One localStorage.setItem('theme', 'dark'). On page load, we read it and apply the class. Simplest persistence pattern: save a preference, read it on load."*

---

### Step 5 — Close Tab and Reopen

> *"Close this tab completely. Open the page again."*

Goals persist, theme persists, visit count increments. Session loads reset to 1.

> *"localStorage survives tab close. sessionStorage resets. The visit counter proves localStorage, the session loads counter proves sessionStorage."*

---

## Teaching Tips

- **DevTools visible throughout** — keep Application → Local Storage open. Students should see the JSON updating live.
- **The three experiments from Topic 1** — this demo naturally demonstrates all three (refresh, close tab, new tab).
- **JSON in DevTools** — expand the stored JSON string and show it's just text. Click to edit it manually — show that DevTools lets you modify stored data.
- **Connect to prior modules** — name them: "Module 11 events for the click handlers, Module 12 filter/find for CRUD, Module 15 JSON for persistence."

---

## What's Next

**Module 18** → Modern JavaScript (ES6+ & Modules) — destructuring, spread/rest, and import/export.
