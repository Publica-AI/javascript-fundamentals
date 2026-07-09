// Module 15, Topic 2 Demo — Fetching Data with the Fetch API
// Context: Loading data from JSONPlaceholder API
// Run in browser (open index.html) or Node 18+

// ---- Part 1: Basic fetch — single item ----
console.log("--- Part 1: Fetch Single User ---");

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function(response) {
    console.log("Response received:", response.status);
    return response.json();
  })
  .then(function(user) {
    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("City:", user.address.city);
  });

console.log("(This logs FIRST — fetch is async!)");


// ---- Part 2: Fetch array + render to DOM ----
console.log("\n--- Part 2: Fetch Array + DOM ---");

const userList = document.querySelector("#user-list");
const loading  = document.querySelector("#loading");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(response) {
    return response.json();
  })
  .then(function(users) {
    console.log(users.length + " users loaded");

    // Build HTML from array (map + join from Module 12)
    const html = users.map(function(user) {
      return "<li><strong>" + user.name + "</strong> — " + user.email + " (" + user.address.city + ")</li>";
    }).join("");

    userList.innerHTML = html;
    loading.style.display = "none";
  });


// ---- Part 3: Fetch posts + filter + render ----
console.log("\n--- Part 3: Fetch + Filter + Render ---");

const postContainer = document.querySelector("#post-container");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    console.log(posts.length + " total posts");

    // Filter to first 5 posts only
    const recent = posts.filter(function(post) {
      return post.id <= 5;
    });

    // Render
    const html = recent.map(function(post) {
      return '<div class="post-card"><h3>' + post.title + '</h3><p>' + post.body.slice(0, 100) + '...</p></div>';
    }).join("");

    postContainer.innerHTML = html;
    console.log("Displayed " + recent.length + " posts");
  });


// ---- Part 4: Using fetched data with array methods ----
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(response) {
    return response.json();
  })
  .then(function(users) {
    console.log("\n--- Part 4: Array Methods on API Data ---");

    // map — extract names
    const names = users.map(function(u) { return u.name; });
    console.log("Names:", names.join(", "));

    // filter — users with .org emails
    const orgUsers = users.filter(function(u) {
      return u.email.toLowerCase().includes(".org");
    });
    console.log("Org email users:", orgUsers.length);

    // find — specific user
    const found = users.find(function(u) { return u.username === "Bret"; });
    console.log("Found Bret:", found ? found.name : "Not found");

    // reduce — count by city
    const cityCounts = users.reduce(function(acc, u) {
      const city = u.address.city;
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    }, {});
    console.log("Users per city:", cityCounts);
  });
