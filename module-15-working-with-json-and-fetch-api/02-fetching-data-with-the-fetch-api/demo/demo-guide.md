# Demo Guide — Module 15, Topic 2: Fetching Data with the Fetch API
**Module 15 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/index.html`, `demo/script.js` (open in browser)

---

## What This Demo Teaches

Students make their first real API call, see data arrive from the internet, parse it with `.json()`, render it to the DOM, and apply Module 12 array methods (map, filter, find, reduce) on real API data — connecting multiple previous modules into one workflow.

---

## Setup (Before Class)

1. Open `index.html` in a browser (Live Server or double-click)
2. Open DevTools Console to see the log output alongside the rendered page
3. Ensure internet connection (the demo calls jsonplaceholder.typicode.com)

---

## Demo Steps

### Part 1 — Basic Fetch (Single Item)

> *"We're calling fetch with a URL. Predict: will the console.log at the bottom run before or after the API data?"*

Show console: "(This logs FIRST)" appears before the user data. Then name/email/city appear.

> *"fetch is async — same as setTimeout. Code after it runs immediately. The .then() fires when the response arrives from the internet. Two .then() calls: first parses JSON, second uses the data."*

---

### Part 2 — Fetch Array + Render to DOM

> *"Now we fetch ALL users and put them on the page."*

Show the page: "Loading users..." disappears, replaced by a styled list of 10 users with names, emails, cities.

> *"The pattern: fetch → .json() → map to build HTML → innerHTML. The page loaded first (you saw 'Loading...'), then the data arrived and filled in. This is how every modern web app works."*

---

### Part 3 — Fetch + Filter + Render

> *"100 posts from the API — but we only want the first 5."*

Show 5 post cards appearing in the "Recent Posts" section.

> *"After .json() gives us the array, we filter it — same .filter() from Module 12. Then map to build HTML. fetch gives us raw data; array methods shape it; innerHTML displays it."*

---

### Part 4 — Array Methods on API Data

> *"map, filter, find, reduce — all working on data that came from the internet."*

Show console output: names joined, org users counted, Bret found, city frequency object.

> *"This is Modules 12 and 15 working together. The data source changed from a hardcoded array to an API — but the array methods are exactly the same. That's the power of learning these patterns."*

---

## Teaching Tips

- **Live page + console** — show both simultaneously. The page rendering makes it tangible; the console explains the mechanics.
- **"Loading" state** — point out the brief "Loading users..." text. This is a real UX pattern — always show something while data is loading.
- **Async order** — the "logs FIRST" proof in Part 1 connects back to Module 14. Reinforce: fetch is non-blocking.
- **API choice** — jsonplaceholder.typicode.com is free, reliable, requires no API key, and returns predictable data. Perfect for teaching.
- **If offline** — have a backup: hardcode a JSON string and use JSON.parse instead. The pattern is the same minus the network call.

---

## What's Next

**Topic 3** → Handling Errors & Checking response.ok — what happens when the API returns 404, or the network fails.
