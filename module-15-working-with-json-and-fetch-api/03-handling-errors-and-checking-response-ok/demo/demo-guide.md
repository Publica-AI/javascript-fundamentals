# Demo Guide — Module 15, Topic 3: Handling Errors & Checking response.ok
**Module 15 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/index.html`, `demo/script.js` (open in browser)

---

## What This Demo Teaches

Students see that fetch does NOT reject on 404/500, learn to check response.ok and throw manually, watch .catch() handle both HTTP errors and network failures, and interact with buttons that demonstrate all three states (loading, success, error) visually.

---

## Setup (Before Class)

1. Open `index.html` in a browser (Live Server recommended)
2. Open DevTools Console alongside the page
3. Ensure internet connection for the live API calls

---

## Demo Steps

### Part 1 — The Problem (No Error Handling)

> *"Watch the console. I'm fetching a user that doesn't exist — ID 9999."*

Show console: status 404, ok is false, .then() still ran, data is `{}`.

> *"No crash. No error. .catch() was never triggered. fetch considers a 404 a 'success' — the server responded. Your code silently fails. The user sees... nothing. This is a bug in most beginner code."*

---

### Part 2 — The Safe Pattern

> *"Three fetches: one valid, one 404, one to a domain that doesn't exist."*

Show console output: valid succeeds, 404 is caught with "HTTP 404", network error is caught with "Failed to fetch."

> *"Same .catch() handles both error types. The key line: `if (!response.ok) throw new Error(...)`. This converts a 'silent 404' into a thrown error that .catch() picks up. One line of defense saves you from silent failures."*

---

### Part 3 — Interactive Buttons

> *"Click each button and watch the visual state change."*

Click "Load User 1" — show loading (grey) → success (green). Click "Load User 9999" — show loading → error (red, "User not found"). Click "Bad URL" — show loading → error (red, "Network error"). Click "Load Posts" — show success with post titles.

> *"Three possible outcomes for every fetch: loading, success, error. Your UI should always show which state it's in. Never leave users staring at a blank page wondering what happened."*

---

## Teaching Tips

- **Show the bug first** — Part 1 deliberately has no error handling. Let students see the silent failure before introducing the fix.
- **response.ok is a boolean** — students sometimes try `response.ok === 200`. It's true/false, not a status code. The status code is `response.status`.
- **Throw skips to .catch** — explain that `throw` inside .then() is like hitting an emergency stop. All subsequent .then() calls are skipped.
- **Turn off WiFi** — if possible, disconnect briefly and click "Load User 1" to show a real network error. Then reconnect and click again — success.

---

## What's Next

**Module 15 Combined Demo** → Full workflow: fetch data, handle errors, render to DOM with loading states.
