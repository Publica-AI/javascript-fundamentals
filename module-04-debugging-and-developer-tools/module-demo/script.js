// Module 4 — Combined Demo
// Topics: The Browser Console & Console Methods | Reading Error Messages | Breakpoints & Stepping Through Code
// Context: Debugging a Publica Academy student results system — three tools, one session

// ============================================================
// SETUP — Student data
// ============================================================

const courseName = "JavaScript Fundamentals";

const students = [
  { name: "Amara Obi",   score: 88, passed: true  },
  { name: "Bayo Ade",    score: 74, passed: true  },
  { name: "Chidi Nweke", score: 48, passed: false },
  { name: "Dami Lawal",  score: 91, passed: true  }
];

const minPassScore = 50;


// ============================================================
// PART 1 — Console Methods (Topic 1)
// All four methods on the student data
// ============================================================

console.log("=== PART 1: Console Methods ===");
console.log("Course:", courseName);
console.log("Enrolled:", students.length, "students");

// Check if any student failed
const failedCount = students.filter(s => !s.passed).length;
if (failedCount > 0) {
  console.warn(failedCount + " student(s) did not pass");
}

// Flag if minimum pass score is too low (defensive check)
if (minPassScore < 50) {
  console.error("minPassScore is below industry standard!");
}

// Show all students as a table
console.table(students);


// ============================================================
// PART 2 — Error Messages (Topic 2)
// Three commented-out bugs — uncomment one at a time
// ============================================================

console.log("=== PART 2: Error Messages ===");

// BUG 1 — ReferenceError: misspelled variable
// Uncomment to demonstrate, then fix
// console.log("Course:", coursename);
//                           ↑ should be courseName (capital N)

// BUG 2 — TypeError: wrong method for the type
// Uncomment to demonstrate, then fix
// console.log("Min pass:", minPassScore.toUpperCase());
//                                       ↑ minPassScore is a number, not a string

// BUG 3 — SyntaxError: missing comma in object literal
// Uncomment to demonstrate, then fix (note: this stops the whole file from running)
// const summary = {
//   course: courseName
//   count: students.length
// };

// Clean working logs for Part 2 (run when all bugs are commented out)
console.log("Course:", courseName);
console.log("Min pass score:", minPassScore);


// ============================================================
// PART 3 — Breakpoints (Topic 3)
// Set a breakpoint on line 72 and step through the score accumulation loop
// ============================================================

console.log("=== PART 3: Breakpoints ===");

let totalScore = 0;

// Set a breakpoint here in the Sources tab (line 72) then refresh
for (let i = 0; i < students.length; i++) {
  totalScore = totalScore + students[i].score;
}

const averageScore = totalScore / students.length;
console.log("Total score:", totalScore);
console.log("Average score:", averageScore);