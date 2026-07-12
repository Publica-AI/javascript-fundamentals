# Module 16 — Topic 1: Promise States & Creating Promises
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Promise States & Creating Promises
**Subheadline:** Module 16, Topic 1 of 4 — JavaScript Fundamentals

---

### SLIDE 2 — What Is a Promise?
**Type:** Concept
**Headline:** A Promise Is an Object That Represents a Future Value
**Content:**

A Promise is like a receipt for a food order:
- You place the order → you get a receipt (Promise created)
- The kitchen is working → your food isn't ready yet (pending)
- Food arrives → order fulfilled (resolved/fulfilled)
- Kitchen ran out of ingredients → order can't be filled (rejected)

Three states of a Promise:
1. **Pending** — the operation is still in progress
2. **Fulfilled** (resolved) — the operation succeeded; the Promise holds a value
3. **Rejected** — the operation failed; the Promise holds an error

Once a Promise is fulfilled or rejected, it **never changes state again**.

**Visual:** A state diagram: Pending (yellow) → Fulfilled (green, with value) OR Rejected (red, with error). No arrows going backwards.

---

### SLIDE 3 — fetch() Returns a Promise
**Type:** Code
**Headline:** You Already Used Promises — fetch() Returns One
**Content:**

```js
// fetch returns a Promise
const promise = fetch("https://jsonplaceholder.typicode.com/users/1");

console.log(promise);  // Promise { <pending> }

// The Promise resolves when the response arrives
promise
  .then(function(response) {
    console.log("Fulfilled! Status:", response.status);
    return response.json();
  })
  .then(function(data) {
    console.log("Data:", data.name);
  });
```

- `fetch()` returns a Promise immediately (in pending state)
- `.then()` registers a callback that runs when the Promise fulfills
- The value passed to `.then()` is whatever the Promise resolved with
- You've been using Promises since Module 15 — now you understand what they are

**Visual:** Timeline: fetch() called → Promise (pending) → server responds → Promise (fulfilled) → .then() fires

---

### SLIDE 4 — Creating a Promise with new Promise()
**Type:** Code
**Headline:** new Promise(resolve, reject) — Create Your Own Promise
**Content:**

```js
function checkEnrolment(studentId) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (studentId > 0) {
        resolve({ id: studentId, status: "enrolled" });
      } else {
        reject(new Error("Invalid student ID"));
      }
    }, 1000);
  });
}

// Using the Promise:
checkEnrolment(42)
  .then(function(result) {
    console.log(result.status);  // "enrolled"
  })
  .catch(function(error) {
    console.log(error.message);
  });
```

- `new Promise(executor)` — the executor receives `resolve` and `reject` functions
- Call `resolve(value)` when the operation succeeds
- Call `reject(error)` when it fails
- The Promise transitions from pending → fulfilled (if resolve) or pending → rejected (if reject)

**Visual:** The executor function shown with two paths: resolve(value) → .then(value) and reject(error) → .catch(error)

---

### SLIDE 5 — Why Promises Over Callbacks?
**Type:** Concept
**Headline:** Promises Solve Callback Hell — They Enable Flat Chaining
**Content:**

**Callbacks (Module 14 — nested):**
```js
step1(function(result1) {
  step2(result1, function(result2) {
    step3(result2, function(result3) {
      // deeper and deeper...
    });
  });
});
```

**Promises (flat chain):**
```js
step1()
  .then(function(result1) { return step2(result1); })
  .then(function(result2) { return step3(result2); })
  .then(function(result3) { /* done */ })
  .catch(function(error)  { /* any error */ });
```

Advantages:
- **Flat structure** — no nesting, reads top to bottom
- **Single error handler** — one `.catch()` handles all errors in the chain
- **Composable** — Promises can be combined with `Promise.all()` (Topic 4)

**Visual:** Left: nested pyramid code (callback hell). Right: flat vertical chain (Promises). Arrow labeled "same result, readable code"

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Promise States & Creating Promises
**Content:**

- A **Promise** is an object representing a value that will exist in the future
- Three states: **pending** → **fulfilled** (with value) or **rejected** (with error)
- `fetch()` returns a Promise — you've been using them already
- `new Promise(function(resolve, reject) { ... })` creates a custom Promise
- Call `resolve(value)` for success, `reject(error)` for failure
- Promises enable flat chaining instead of nested callbacks

**Up Next:** Topic 2 — .then(), .catch() & Chaining Promises

**Visual:** Promise lifecycle diagram: new Promise → pending → resolve(value) → fulfilled → .then(value) // reject(error) → rejected → .catch(error)
