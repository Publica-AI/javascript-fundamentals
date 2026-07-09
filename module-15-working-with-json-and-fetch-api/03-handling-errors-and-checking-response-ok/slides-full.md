# Module 15 — Topic 3: Handling Errors & Checking response.ok
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Handling Errors & Checking response.ok
**Subheadline:** Module 15, Topic 3 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Topic 2 taught students to fetch and use data — the happy path. Topic 3 adds the reality check: what happens when things go wrong? Servers return 404, APIs go down, users lose internet. Without error handling, the page just stays blank and the user has no idea why. This topic teaches the safe fetch pattern that handles all failure modes in one .catch() block.

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

**Speaker Notes:**
This is the biggest surprise about fetch. Students expect that fetching a URL that returns 404 would trigger .catch() — it doesn't. fetch considers any server response a "success" — it successfully talked to the server and got a response back. It only rejects when the network itself fails: you're offline, the domain doesn't exist, CORS blocks the request. A 404 means "the server said no" — but it DID respond. A 500 means "the server crashed" — but it DID respond. From fetch's perspective: response received = success. This is counterintuitive and the source of many bugs in production code where developers forget to check response.ok.

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

**Speaker Notes:**
This is the fix. In the first .then(), before calling .json(), check response.ok. If it's false, throw an Error with the status code. Throwing inside a .then() causes the promise chain to skip all subsequent .then() calls and jump straight to .catch(). This means your .catch() now handles TWO types of errors: network failures (fetch rejects naturally) and HTTP errors (you throw manually). One error handler for everything. Make students write this check every single time they use fetch — it should become automatic. The pattern is: if (!response.ok) throw → then parse → then use → catch errors.

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

**Speaker Notes:**
Wrap the pattern in a reusable function — this is what production code looks like. Call it with a valid ID (works), an invalid ID (404 error caught), or with no internet (network error caught). All errors flow to the same .catch(). The error message is descriptive: "User not found (status 404)" tells the developer exactly what happened. In the DOM version (next slide), this message gets shown to the user. Demonstrate by turning off WiFi and calling the function — "Failed to fetch" appears in .catch(). This proves that .catch() really does handle both types.

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

**Speaker Notes:**
This is the complete real-world pattern. Before fetch: show "Loading...". In the success .then(): show the data. In .catch(): show an error message. These three states — loading, success, error — are universal in web development. Every app you've ever used has these states: the spinner, the content, the error page. Make students identify them in apps they use daily. The specific text ("Something went wrong") should be user-friendly — not "TypeError: Failed to fetch" which means nothing to a non-developer.

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

**Speaker Notes:**
This pattern should be muscle memory. Every fetch call in their code from now on should have: response.ok check, .catch at the end. Topic 3 closes Module 15. Students can now: understand JSON format, parse and stringify, fetch data from APIs, and handle errors gracefully. Module 16 introduces the underlying mechanism — Promises — and the cleaner async/await syntax that replaces the .then() chains with flat, readable code.
