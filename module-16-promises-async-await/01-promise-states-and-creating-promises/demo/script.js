// Module 16, Topic 1 Demo — Promise States & Creating Promises
// Context: Publica Academy enrolment system
// Run in Node 18+ or browser console

// ---- Part 1: A Promise is an object ----
console.log("--- Part 1: Promise Object ---");

const promise = fetch("https://jsonplaceholder.typicode.com/users/1");
console.log("Immediately after fetch:", promise);
// Promise { <pending> }

promise.then(function(response) {
  console.log("Fulfilled! Status:", response.status);
  console.log("The Promise is no longer pending.");
});


// ---- Part 2: Creating a Promise ----
console.log("\n--- Part 2: Creating Promises ---");

function verifyStudent(studentId) {
  return new Promise(function(resolve, reject) {
    console.log("  Verifying student " + studentId + "...");

    setTimeout(function() {
      if (studentId > 0) {
        resolve({ id: studentId, name: "Student #" + studentId, verified: true });
      } else {
        reject(new Error("Invalid student ID: " + studentId));
      }
    }, 1000);
  });
}

// Success case
verifyStudent(42)
  .then(function(student) {
    console.log("  ✓ Verified:", student.name);
  })
  .catch(function(error) {
    console.log("  ✗ Error:", error.message);
  });

// Failure case
verifyStudent(-1)
  .then(function(student) {
    console.log("  ✓ Verified:", student.name);
  })
  .catch(function(error) {
    console.log("  ✗ Error:", error.message);
  });


// ---- Part 3: Promise states are final ----
setTimeout(function() {
  console.log("\n--- Part 3: States Are Final ---");

  const settled = new Promise(function(resolve, reject) {
    resolve("first value");
    resolve("second value");  // ignored — already resolved
    reject("error");          // ignored — already resolved
  });

  settled.then(function(value) {
    console.log("Value:", value);  // "first value" — only the first resolve counts
  });
}, 2500);


// ---- Part 4: Wrapping setTimeout in a Promise ----
setTimeout(function() {
  console.log("\n--- Part 4: delay() Helper ---");

  function delay(ms) {
    return new Promise(function(resolve) {
      setTimeout(resolve, ms);
    });
  }

  console.log("Starting 1.5s delay...");
  delay(1500).then(function() {
    console.log("Done! (1.5 seconds later)");
  });
}, 3000);
