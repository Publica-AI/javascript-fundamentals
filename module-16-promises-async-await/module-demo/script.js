// Module 16 Combined Demo — Promises, Async/Await & Error Handling
// Context: Publica Academy Dashboard Data Loader
// Run in Node 18+

// ---- Helper: simulate API with delays ----
function delay(ms) {
  return new Promise(function(resolve) { setTimeout(resolve, ms); });
}

function simulateAPI(name, data, ms, shouldFail) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (shouldFail) {
        reject(new Error(name + " failed: service unavailable"));
      } else {
        resolve(data);
      }
    }, ms);
  });
}


// ---- Part 1: Creating and consuming Promises ----
async function part1() {
  console.log("--- Part 1: Promise Creation + async/await ---");

  const student = await simulateAPI("getStudent", {
    name: "Amara Obi",
    email: "amara@publica.ng",
    courseId: 1
  }, 500);

  console.log("Student:", student.name, "—", student.email);

  const course = await simulateAPI("getCourse", {
    id: 1,
    title: "JavaScript Fundamentals",
    modules: 18
  }, 500);

  console.log("Course:", course.title, "(" + course.modules + " modules)");
}


// ---- Part 2: try/catch error handling ----
async function part2() {
  console.log("\n--- Part 2: try/catch Error Handling ---");

  async function loadWithRetry(name, data, maxAttempts) {
    for (var attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        var shouldFail = attempt < 3;
        var result = await simulateAPI(name, data, 300, shouldFail);
        console.log("  ✓ " + name + " succeeded on attempt " + attempt);
        return result;
      } catch (error) {
        console.log("  ✗ Attempt " + attempt + ": " + error.message);
        if (attempt === maxAttempts) throw error;
        await delay(200);
      }
    }
  }

  try {
    var result = await loadWithRetry("fetchGrades", { grade: "Pass", score: 88 }, 3);
    console.log("  Result:", result);
  } catch (error) {
    console.log("  Final failure:", error.message);
  }
}


// ---- Part 3: Sequential vs Parallel comparison ----
async function part3() {
  console.log("\n--- Part 3: Sequential vs Parallel ---");

  // Sequential
  console.time("  Sequential");
  await simulateAPI("users", [1, 2, 3], 400);
  await simulateAPI("courses", [4, 5, 6], 400);
  await simulateAPI("grades", [7, 8, 9], 400);
  console.timeEnd("  Sequential");

  // Parallel
  console.time("  Parallel");
  var [users, courses, grades] = await Promise.all([
    simulateAPI("users", [1, 2, 3], 400),
    simulateAPI("courses", [4, 5, 6], 400),
    simulateAPI("grades", [7, 8, 9], 400)
  ]);
  console.timeEnd("  Parallel");
  console.log("  Results:", users.length, courses.length, grades.length);
}


// ---- Part 4: Real fetch with Promise.all ----
async function part4() {
  console.log("\n--- Part 4: Real API + Promise.all ---");

  try {
    var [users, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(function(r) {
        if (!r.ok) throw new Error("Users: HTTP " + r.status);
        return r.json();
      }),
      fetch("https://jsonplaceholder.typicode.com/posts").then(function(r) {
        if (!r.ok) throw new Error("Posts: HTTP " + r.status);
        return r.json();
      })
    ]);

    console.log("  Users:", users.length);
    console.log("  Posts:", posts.length);

    // Combine data: find each user's post count
    var userStats = users.slice(0, 5).map(function(user) {
      var postCount = posts.filter(function(p) { return p.userId === user.id; }).length;
      return user.name + " — " + postCount + " posts";
    });

    console.log("  Stats:");
    userStats.forEach(function(s) { console.log("    " + s); });
  } catch (error) {
    console.log("  ✗ Error:", error.message);
  }
}


// ---- Part 5: Mixed sequential + parallel ----
async function part5() {
  console.log("\n--- Part 5: Mixed Pattern ---");

  try {
    // Sequential: need user first
    var userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
    var user = await userResponse.json();
    console.log("  User:", user.name);

    // Parallel: posts and todos are independent (both use user.id)
    var [posts, todos] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts?userId=" + user.id).then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/todos?userId=" + user.id).then(r => r.json())
    ]);

    var completedTodos = todos.filter(function(t) { return t.completed; });

    console.log("  Posts:", posts.length);
    console.log("  Todos:", todos.length + " total, " + completedTodos.length + " completed");
    console.log("\n--- Module 16 Demo Complete ---");
  } catch (error) {
    console.log("  ✗ Error:", error.message);
  }
}


// Run all parts in sequence
async function main() {
  await part1();
  await part2();
  await part3();
  await part4();
  await part5();
}

main();
