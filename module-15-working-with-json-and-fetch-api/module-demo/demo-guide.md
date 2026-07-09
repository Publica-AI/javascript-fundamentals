# Demo Guide — Module 15 Combined: Working with JSON & Fetch API
**Module 15 — JavaScript Fundamentals**
**Type:** Module demo (combined)
**Duration:** 12–15 minutes
**Files:** `module-demo/index.html`, `module-demo/script.js` (open in browser)

---

## What This Demo Teaches

A complete data-driven application that ties together all three Module 15 topics: JSON format and parse/stringify (Topic 1), fetching data from a real API (Topic 2), and error handling with response.ok (Topic 3). Students interact with buttons to load users, load posts, trigger errors, inspect raw JSON, and perform a stringify/parse roundtrip — seeing all three states (loading, success, error) in a live UI.

---

## Setup (Before Class)

1. Open `index.html` in a browser (Live Server recommended)
2. Open DevTools Console alongside the page
3. Ensure internet connection for the live API calls

---

## Demo Steps

### Part 1 — The safeFetch Helper

> *"Before clicking anything — look at the code. I wrote a reusable safeFetch function."*

Show the `safeFetch` function in the code: it wraps fetch with the response.ok check and returns the parsed data. All button handlers use it.

> *"This is the pattern from Topic 3 extracted into a helper. Write it once, use everywhere. Every fetch in this app goes through this function — consistent error handling guaranteed."*

---

### Part 2 — Load Users

Click "Load Users". Show the loading state briefly, then cards appearing.

> *"Status: loading → success. The data came from jsonplaceholder.typicode.com/users — 10 users. We used .map() to build card HTML and .join() to combine them. Module 12 array methods on Module 15 API data."*

Point to console: users loaded count, first user name.

---

### Part 3 — Load Posts

Click "Load Posts". Show 8 posts rendered from a filtered 100.

> *"100 posts from the API, but we .filter() to the first 8. Same pattern: fetch → parse → transform → render. The filter and slice are Module 12 skills applied to live data."*

---

### Part 4 — Trigger 404 Error

Click "Trigger 404 Error". Show loading → red error state.

> *"The server returned 404. Our safeFetch checked response.ok, found it false, threw an error. .catch() received it. The UI shows a clear error message instead of silently failing. This is what Topic 3 was about."*

---

### Part 5 — Show Raw JSON

Click "Load Users" first, then click "Show Raw JSON".

> *"This is what the API actually sent — a JSON string. We're showing JSON.stringify with 2-space indentation. This is the raw format before your code can use it."*

---

### Part 6 — Stringify & Parse Roundtrip

Click "Stringify & Parse".

> *"Full circle: start with an object, stringify it (now it's a string — you'd store this or send it), parse it back (now it's an object again). Same data, different representations. Parse to use, stringify to store."*

Point to console showing typeof at each step.

---

## Teaching Tips

- **Interactive order** — let students click buttons in any order. The demo handles it gracefully.
- **Console + UI** — both show output. Use the console for "developer view" and the page for "user view."
- **safeFetch reuse** — explicitly point out that writing the error check once in a helper prevents bugs across the app.
- **Turn off WiFi** — if possible, disconnect and click "Load Users" to show a real network error caught by .catch().
- **Connect modules** — name the cross-references: "Module 12 map/filter, Module 10 innerHTML, Module 11 addEventListener, Module 15 fetch/JSON."

---

## What's Next

**Module 16** → Promises, Async/Await & Error Handling — cleaner syntax for everything we just did with .then() chains.
