# Demo Guide — Module 16 Combined: Promises, Async/Await & Error Handling
**Module 16 — JavaScript Fundamentals**
**Type:** Module demo (combined)
**Duration:** 12–15 minutes
**Files:** `module-demo/script.js` (run in Node 18+)

---

## What This Demo Teaches

A complete async application that ties all four Module 16 topics together: creating Promises, consuming them with async/await, handling errors with try/catch and a retry pattern, comparing sequential vs parallel timing, making real API calls with Promise.all, and mixing sequential and parallel patterns in one flow.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js` (requires Node 18+)
3. Full demo takes ~8 seconds

---

## Demo Steps

### Part 1 — Promise Creation + async/await

> *"Two simulated API calls, each taking 500ms. await makes the code flat and readable."*

Show student and course data logging sequentially.

> *"simulateAPI returns a new Promise that resolves after a delay. We await it — the function pauses until the data arrives. No .then(), no callbacks."*

---

### Part 2 — try/catch with Retry Logic

> *"What if an API call fails? We retry up to 3 times."*

Show attempts failing then succeeding on attempt 3.

> *"The for loop + try/catch creates a retry pattern. Each failure is caught, logged, and retried after a short delay. If all attempts fail, we re-throw and the outer try/catch gets it. This is a real production pattern."*

---

### Part 3 — Sequential vs Parallel

> *"Same three operations: sequential takes ~1200ms, parallel takes ~400ms."*

Show console.time output proving the speed difference.

> *"3x faster because all three started at the same time. The operations are independent — no reason to wait for one before starting another."*

---

### Part 4 — Real API + Promise.all

> *"Fetching real users and posts in parallel, then combining the data."*

Show user stats: each user's post count computed from the combined results.

> *"This is the dashboard pattern: load all the data you need, then compute derived values. The .filter() inside .map() connects back to Module 12."*

---

### Part 5 — Mixed Sequential + Parallel

> *"Get user first (need the ID), then fetch posts and todos in parallel."*

Show: user loaded, then posts + todos with completion stats.

> *"Sequential where dependencies exist, parallel where operations are independent. This is the most common real-world pattern."*

---

## Teaching Tips

- **Run top to bottom** — the main() function orchestrates all parts sequentially. Point out that main itself is async with sequential awaits.
- **Retry pattern** — highlight this as a real production technique. APIs fail transiently — retrying 2-3 times often succeeds.
- **console.time proof** — the timing numbers make the parallel advantage concrete and undeniable.
- **Connect to Module 12** — Part 4 uses map, filter, and slice on API data. Name the connection explicitly.

---

## What's Next

**Module 17** → Local Storage & State Persistence — saving data in the browser so it survives page reloads.
