// Module 15, Topic 3 Demo — Handling Errors & Checking response.ok
// Context: Demonstrating the safe fetch pattern
// Open index.html in browser

// ---- Part 1: The problem — fetch doesn't reject on 404 ----
console.log("--- Part 1: fetch + 404 (no error handling) ---");

fetch("https://jsonplaceholder.typicode.com/users/9999")
  .then(function(response) {
    console.log("Status:", response.status);     // 404
    console.log("OK?", response.ok);             // false
    console.log("fetch didn't throw — .then() still ran!");
    return response.json();
  })
  .then(function(data) {
    console.log("Data:", data);  // {} — empty object, no crash
  });


// ---- Part 2: The safe pattern — check response.ok ----
console.log("\n--- Part 2: Safe Fetch Pattern ---");

function safeFetch(url, label) {
  fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw new Error("HTTP " + response.status + " — " + response.statusText);
      }
      return response.json();
    })
    .then(function(data) {
      console.log("[" + label + "] Success:", data.name || data.length + " items");
    })
    .catch(function(error) {
      console.log("[" + label + "] Error:", error.message);
    });
}

safeFetch("https://jsonplaceholder.typicode.com/users/1", "Valid user");
safeFetch("https://jsonplaceholder.typicode.com/users/9999", "Invalid user");
safeFetch("https://invalid-domain-xyz.com/data", "Network error");


// ---- Part 3: Interactive DOM demo ----
const userOutput  = document.querySelector("#user-output");
const postsOutput = document.querySelector("#posts-output");

function setStatus(element, text, type) {
  element.textContent = text;
  element.className = "status " + type;
}

// Load valid user
document.querySelector("#btn-valid").addEventListener("click", function() {
  setStatus(userOutput, "Loading...", "loading");

  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function(response) {
      if (!response.ok) {
        throw new Error("HTTP " + response.status);
      }
      return response.json();
    })
    .then(function(user) {
      setStatus(userOutput, "✓ " + user.name + " — " + user.email, "success");
    })
    .catch(function(error) {
      setStatus(userOutput, "✗ " + error.message, "error");
    });
});

// Load invalid user (404)
document.querySelector("#btn-404").addEventListener("click", function() {
  setStatus(userOutput, "Loading...", "loading");

  fetch("https://jsonplaceholder.typicode.com/users/9999")
    .then(function(response) {
      if (!response.ok) {
        throw new Error("User not found (status " + response.status + ")");
      }
      return response.json();
    })
    .then(function(user) {
      setStatus(userOutput, "✓ " + user.name, "success");
    })
    .catch(function(error) {
      setStatus(userOutput, "✗ " + error.message, "error");
    });
});

// Network error (bad URL)
document.querySelector("#btn-network").addEventListener("click", function() {
  setStatus(userOutput, "Loading...", "loading");

  fetch("https://this-domain-does-not-exist-xyz.com/users")
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Server error: " + response.status);
      }
      return response.json();
    })
    .then(function(data) {
      setStatus(userOutput, "✓ Loaded", "success");
    })
    .catch(function(error) {
      setStatus(userOutput, "✗ Network error: " + error.message, "error");
    });
});

// Load posts
document.querySelector("#btn-posts").addEventListener("click", function() {
  setStatus(postsOutput, "Loading posts...", "loading");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Failed to load posts (status " + response.status + ")");
      }
      return response.json();
    })
    .then(function(posts) {
      var first3 = posts.slice(0, 3).map(function(p) { return p.title; }).join(" | ");
      setStatus(postsOutput, "✓ " + posts.length + " posts: " + first3, "success");
    })
    .catch(function(error) {
      setStatus(postsOutput, "✗ " + error.message, "error");
    });
});
