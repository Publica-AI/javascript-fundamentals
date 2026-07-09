// Module 15 Combined Demo — JSON + Fetch + Error Handling
// Context: Publica Academy Course Explorer
// Open index.html in browser

const grid       = document.querySelector("#grid");
const status     = document.querySelector("#status");
const jsonOutput = document.querySelector("#json-output");

var lastFetchedData = null;

function setStatus(text, type) {
  status.textContent = text;
  status.className = type;
}

function clearGrid() {
  grid.innerHTML = "";
  jsonOutput.style.display = "none";
}


// ---- Part 1: Safe fetch helper ----
function safeFetch(url) {
  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw new Error("HTTP " + response.status + " — " + response.statusText);
      }
      return response.json();
    });
}


// ---- Part 2: Load Users ----
document.querySelector("#btn-users").addEventListener("click", function() {
  clearGrid();
  setStatus("Loading users...", "loading");

  safeFetch("https://jsonplaceholder.typicode.com/users")
    .then(function(users) {
      lastFetchedData = users;
      setStatus("✓ Loaded " + users.length + " users", "success");

      var html = users.map(function(user) {
        return '<div class="card">' +
          "<h3>" + user.name + "</h3>" +
          "<p>" + user.email + "</p>" +
          '<p class="meta">' + user.address.city + " — " + user.company.name + "</p>" +
          "</div>";
      }).join("");

      grid.innerHTML = html;
      console.log("Users loaded:", users.length);
      console.log("First user:", users[0].name);
    })
    .catch(function(error) {
      setStatus("✗ " + error.message, "error");
      console.error("Fetch failed:", error.message);
    });
});


// ---- Part 3: Load Posts ----
document.querySelector("#btn-posts").addEventListener("click", function() {
  clearGrid();
  setStatus("Loading posts...", "loading");

  safeFetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(posts) {
      // Filter to first 8 and transform
      var recent = posts.filter(function(p) { return p.id <= 8; });
      lastFetchedData = recent;

      setStatus("✓ Showing " + recent.length + " of " + posts.length + " posts", "success");

      var html = recent.map(function(post) {
        return '<div class="card">' +
          "<h3>" + post.title.slice(0, 40) + "</h3>" +
          "<p>" + post.body.slice(0, 80) + "...</p>" +
          '<p class="meta">Post #' + post.id + " — User " + post.userId + "</p>" +
          "</div>";
      }).join("");

      grid.innerHTML = html;
      console.log("Posts loaded:", posts.length, "— showing", recent.length);
    })
    .catch(function(error) {
      setStatus("✗ " + error.message, "error");
    });
});


// ---- Part 4: Trigger 404 Error ----
document.querySelector("#btn-bad").addEventListener("click", function() {
  clearGrid();
  setStatus("Fetching invalid resource...", "loading");

  safeFetch("https://jsonplaceholder.typicode.com/users/9999")
    .then(function(data) {
      setStatus("✓ Loaded (unexpected)", "success");
    })
    .catch(function(error) {
      setStatus("✗ Error caught: " + error.message, "error");
      grid.innerHTML = '<div class="card"><h3>What happened?</h3>' +
        "<p>The server returned 404. Our response.ok check caught it and threw an error.</p>" +
        "<p>.catch() received it — no silent failure!</p></div>";
      console.log("404 handled correctly:", error.message);
    });
});


// ---- Part 5: Show Raw JSON ----
document.querySelector("#btn-json").addEventListener("click", function() {
  if (!lastFetchedData) {
    setStatus("Fetch data first, then click Show Raw JSON", "loading");
    return;
  }

  jsonOutput.style.display = "block";
  var pretty = JSON.stringify(lastFetchedData.slice(0, 2), null, 2);
  jsonOutput.textContent = "// First 2 items as JSON:\n" + pretty;
  console.log("Raw JSON (first 2 items):");
  console.log(pretty);
});


// ---- Part 6: Stringify & Parse roundtrip ----
document.querySelector("#btn-stringify").addEventListener("click", function() {
  clearGrid();

  var original = {
    name: "Amara Obi",
    email: "amara@publica.ng",
    courses: ["JavaScript Fundamentals", "HTML & CSS Basics"],
    score: 88,
    enrolled: true
  };

  console.log("\n--- Stringify & Parse Roundtrip ---");
  console.log("Original object:", original);
  console.log("typeof original:", typeof original);

  // Stringify
  var jsonStr = JSON.stringify(original);
  console.log("\nStringified:", jsonStr);
  console.log("typeof jsonStr:", typeof jsonStr);

  // Parse back
  var parsed = JSON.parse(jsonStr);
  console.log("\nParsed back:", parsed);
  console.log("parsed.name:", parsed.name);
  console.log("parsed.courses[0]:", parsed.courses[0]);

  // Show in UI
  jsonOutput.style.display = "block";
  jsonOutput.textContent =
    "// Original object → JSON.stringify → JSON.parse → Object\n\n" +
    "// Step 1: Object\n" +
    JSON.stringify(original, null, 2) + "\n\n" +
    "// Step 2: JSON.stringify() → string\n" +
    '"' + jsonStr.slice(0, 60) + '..."\n\n' +
    "// Step 3: JSON.parse() → back to object\n" +
    JSON.stringify(parsed, null, 2);

  setStatus("✓ Roundtrip complete — see console and panel below", "success");

  grid.innerHTML = '<div class="card"><h3>Roundtrip Summary</h3>' +
    "<p>Object → JSON.stringify → string (for storage/sending)</p>" +
    "<p>String → JSON.parse → object (for using in code)</p></div>";
});
