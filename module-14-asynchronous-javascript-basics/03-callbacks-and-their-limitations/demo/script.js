// Module 14, Topic 3 Demo — Callbacks & Their Limitations
// Context: Publica Academy enrolment pipeline
// Run in Node

// ---- Part 1: Callbacks you already know ----
console.log("--- Part 1: Callbacks You Already Know ---");

const courses = ["JavaScript", "HTML & CSS", "Git & GitHub"];

// forEach callback
courses.forEach(function(course) {
  console.log("Course: " + course);
});

// map callback
const upper = courses.map(function(course) {
  return course.toUpperCase();
});
console.log("Uppercase:", upper);

// setTimeout callback
setTimeout(function() {
  console.log("(This ran after a 1s delay — also a callback!)");
}, 1000);

console.log("All of those functions are callbacks.\n");


// ---- Part 2: Sequential async with callbacks ----
setTimeout(function() {
  console.log("--- Part 2: Sequential Async ---");

  function verifyStudent(email, callback) {
    setTimeout(function() {
      console.log("✓ Step 1: Student verified — " + email);
      callback(email);
    }, 1000);
  }

  function fetchEnrolledCourses(email, callback) {
    setTimeout(function() {
      const enrolled = ["JavaScript Fundamentals", "HTML & CSS Basics"];
      console.log("✓ Step 2: Fetched " + enrolled.length + " courses");
      callback(enrolled);
    }, 1000);
  }

  function sendWelcomeEmail(courses, callback) {
    setTimeout(function() {
      console.log("✓ Step 3: Welcome email sent with " + courses.length + " courses");
      callback();
    }, 1000);
  }

  // Run sequentially — each step inside the previous callback
  verifyStudent("amara@publica.ng", function(email) {
    fetchEnrolledCourses(email, function(courses) {
      sendWelcomeEmail(courses, function() {
        console.log("✓ All steps complete!\n");

        // After this finishes, run Part 3
        runPart3();
      });
    });
  });
}, 2000);


// ---- Part 3: Callback hell — the pyramid of doom ----
function runPart3() {
  console.log("--- Part 3: Callback Hell (Pyramid of Doom) ---");
  console.log("Adding more steps makes it worse:\n");

  function step(name, delay, callback) {
    setTimeout(function() {
      console.log("  ✓ " + name);
      callback();
    }, delay);
  }

  // 5 sequential steps — watch the nesting grow
  step("Verify student identity", 500, function() {
    step("Check payment status", 500, function() {
      step("Fetch course materials", 500, function() {
        step("Grant platform access", 500, function() {
          step("Send confirmation SMS", 500, function() {
            console.log("\n  All 5 steps done!");
            console.log("  But look at the code — 5 levels deep.");
            console.log("  Adding step 6 means nesting even deeper.");
            console.log("  This is callback hell.\n");

            runPart4();
          });
        });
      });
    });
  });
}


// ---- Part 4: Why this is a problem ----
function runPart4() {
  console.log("--- Part 4: The Problems ---");
  console.log("1. Hard to read — indentation grows with every step");
  console.log("2. Hard to debug — which level caused the error?");
  console.log("3. Hard to extend — step 6 means deeper nesting");
  console.log("4. Error handling is repetitive (if err, return at every level)");
  console.log("");
  console.log("Solution preview (Module 16 — async/await):");
  console.log("  const student = await verifyStudent(email);");
  console.log("  const courses = await fetchCourses(student);");
  console.log("  const result  = await sendWelcome(courses);");
  console.log("  // Flat, readable, same functionality!");
}
