# Module 15 — Topic 3: Handling Errors & Checking response.ok
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Handling Errors & Checking response.ok
**Subheadline:** Module 15, Topic 3 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — The Problem: fetch() Doesn't Throw on 404 or 500
**Type:** Code
**Headline:** fetch() Only Rejects on Network Failure — Not on HTTP Errors (404, 500)
**Content:**

```js
// This URL returns 404 — but fetch does NOT throw an error!
fetch("https://jsonplaceholder.typicode.com/users/9999")
  .then(function(response) {
    console.log(response.status);  // 404
    console.log(response.ok);      // false
    return response.json();        // still tries to parse!
  })
  .then(function(data) {
    console.log(data);  // {} — empty object, no crash
  });
```

- `fetch` only rejects (triggers .catch) when the **network itself fails** (offline, DNS error)
- A 404, 500, or any HTTP error status is considered a "successful fetch" — the server responded
- You MUST check `response.ok` manually to detect HTTP errors
- `response.ok` is `true` for status 200–299, `false` for everything else

**Visual:** A decision tree: fetch() → "Did the server respond?" → Yes (even 404/500) → .then() fires / No (network down) → .catch() fires

---

### SLIDE 3 — Checking response.ok
**Type:** Code
**Headline:** Always Check response.ok — Throw an Error for Non-2xx Responses
**Content:**

```js
fetch("https://jsonplaceholder.typicode.com/users/9999")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }
    return response.json();
  })
  .then(function(data) {
    console.log("Success:", data.name);
  })
  .catch(function(error) {
    console.log("Failed:", error.message);
  });

// Output: Failed: HTTP error: 404
```

- Check `response.ok` in the first `.then()`
- If false, `throw new Error(...)` — this skips to `.catch()`
- `.catch()` handles BOTH network errors AND your thrown HTTP errors
- This is the **safe fetch pattern** — always use it

**Visual:** The fetch chain with a checkpoint after .then(response): if ok → continue to .json(); if NOT ok → throw → jumps to .catch()

---

### SLIDE 4 — .catch() Handles All Errors
**Type:** Code
**Headline:** .catch() — One Place for Network Errors AND HTTP Errors
**Content:**

```js
function loadUser(id) {
  fetch("https://jsonplaceholder.typicode.com/users/" + id)
    .then(function(response) {
      if (!response.ok) {
        throw new Error("User not found (status " + response.status + ")");
      }
      return response.json();
    })
    .then(function(user) {
      console.log("Loaded: " + user.name + " — " + user.email);
    })
    .catch(function(error) {
      console.log("Error: " + error.message);
    });
}

loadUser(1);     // Loaded: Leanne Graham — Sincere@april.biz
loadUser(9999);  // Error: User not found (status 404)
// loadUser with no internet → Error: Failed to fetch
```

Two error types caught by `.catch()`:
1. **Network failure** — `"Failed to fetch"` (offline, DNS, CORS)
2. **HTTP error** — your thrown error (`"User not found (status 404)"`)

**Visual:** Two error paths both flowing into the same .catch() block: "Network down → TypeError: Failed to fetch" and "404 response → Error: User not found"

---

### SLIDE 5 — Complete Safe Fetch Pattern
**Type:** Code
**Headline:** The Full Pattern — Loading State, Success, and Error Handling
**Content:**

```js
const output = document.querySelector("#output");
output.textContent = "Loading...";

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("Server error: " + response.status);
    }
    return response.json();
  })
  .then(function(users) {
    output.textContent = users.length + " users loaded";
    // render users...
  })
  .catch(function(error) {
    output.textContent = "Something went wrong: " + error.message;
  });
```

The three states of a fetch call:
1. **Loading** — show indicator before fetch starts
2. **Success** — render data in second `.then()`
3. **Error** — display message in `.catch()`

**Visual:** Three UI states shown as cards: "Loading..." (grey), "10 users loaded" (green), "Something went wrong" (red) — representing the three possible outcomes

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Handling Errors & Checking response.ok
**Content:**

- `fetch` only rejects on **network failure** — NOT on 404/500
- `response.ok` is `true` for status 200–299, `false` for 400+
- Always check `if (!response.ok) throw new Error(...)` in the first `.then()`
- `.catch()` handles both network errors and thrown HTTP errors
- Always manage three states: **loading**, **success**, **error**

**The safe fetch pattern:**
```js
fetch(url)
  .then(response => {
    if (!response.ok) throw new Error("HTTP " + response.status);
    return response.json();
  })
  .then(data => { /* use data */ })
  .catch(error => { /* handle error */ });
```

**Up Next:** Module 16 — Promises, Async/Await & Error Handling

**Visual:** The complete fetch chain as a pipeline with three exits: success (green), HTTP error (orange, via throw), network error (red, direct to catch)
