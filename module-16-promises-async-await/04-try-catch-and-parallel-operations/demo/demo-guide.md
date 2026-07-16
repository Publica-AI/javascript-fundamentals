# Demo Guide — Module 16, Topic 4: try/catch & Parallel Operations
**Module 16 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node 18+ or browser)

---

## What This Demo Teaches

Students see try/catch handling both success and error paths cleanly, observe the measurable speed difference between sequential awaits and Promise.all, understand the fail-fast behaviour where one rejection kills the batch, and learn the mixed pattern (sequential first, then parallel for independent operations).

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js` (Node 18+ required)
3. Full demo takes ~12 seconds (parts are staggered)

---

## Demo Steps

### Part 1 — try/catch Error Handling

> *"Three user loads: valid, invalid (404), valid. Watch try/catch handle both."*

Show output: ✓ loaded, ✗ failed (404), ✓ loaded. The function doesn't crash — catch handles the error and execution continues.

> *"try/catch is the async/await version of .catch(). Same error handling, control-flow syntax. The function recovers and keeps going."*

---

### Part 2 — Sequential (Slow)

> *"Three independent fetches — users, posts, todos — awaited one after another."*

Show the sequential time (e.g., ~600ms).

> *"Each await waits for the previous to finish. Three independent requests taking 200ms each = 600ms total. That's wasted time."*

---

### Part 3 — Parallel (Fast)

> *"Same three fetches — but using Promise.all."*

Show the parallel time (e.g., ~200ms).

> *"All three started simultaneously. Total time = the slowest request, not the sum. 3x faster for free. Use Promise.all whenever requests are independent."*

---

### Part 4 — Fail-Fast

> *"What happens if one of the Promises in Promise.all rejects?"*

Show: "Promise.all rejected: User not found: 404"

> *"One failure = entire batch fails. The successful requests are thrown away. This is by design — if you need ALL the data and one source fails, you can't proceed anyway. wrap Promise.all in try/catch to handle the failure."*

---

### Part 5 — Mixed Pattern

> *"Get user first (need the ID), then fetch their posts and todos in parallel."*

Show: user loaded, then posts + todos counts appear.

> *"Sequential where needed, parallel where possible. This is the real-world pattern for loading a profile page: get the user, then load their data in parallel."*

---

## Teaching Tips

- **console.time/timeEnd** — the timing proof makes the speed difference concrete. Students can see "300ms" vs "100ms" in their own console.
- **Fail-fast surprises students** — they expect partial results. Explain: if you're building a dashboard and one data source fails, showing partial data is often worse than showing an error.
- **Mixed pattern is most common** — the pure sequential and pure parallel cases are extremes. Real code usually needs "A first, then B and C together."
- **Destructuring** — `const [a, b, c] = await Promise.all([...])` uses array destructuring from Module 18 preview. Explain briefly if needed.

---

## What's Next

**Module 16 Combined Demo** → Full async application: parallel data loading, error handling, loading states, and DOM rendering.
