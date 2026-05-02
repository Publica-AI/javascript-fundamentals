// Topic 2 Demo — Reading Error Messages
// Context: A Publica Academy student record system with three intentional bugs
// Instruction: Uncomment one bug at a time, read the Console error, then fix it

// ---- The data we are working with ----
const studentName = "Amara Obi";
const score       = 88;
const courseInfo  = { title: "JavaScript Fundamentals", modules: 18 };


// ---- BUG 1: ReferenceError ----
// Uncomment the line below, run the file, read the Console error, then fix it

// console.log("Student:", studentname);
//                           ↑ misspelled — should be studentName (capital N)

// After fixing: console.log("Student:", studentName);


// ---- BUG 2: TypeError ----
// Uncomment the line below, run the file, read the Console error, then fix it

// console.log("Score:", score.toUpperCase());
//                              ↑ score is a number — toUpperCase() is a string method

// After fixing: console.log("Score:", score);


// ---- BUG 3: SyntaxError ----
// Uncomment the block below, run the file, read the Console error, then fix it

// const summary = {
//   student: studentName,
//   course: courseInfo.title
//   modules: courseInfo.modules
// };
// console.log("Summary:", summary);
//     ↑ missing comma after courseInfo.title — SyntaxError will prevent the whole file from running


// ---- Clean working code (runs when all bugs are commented out) ----
console.log("Student:", studentName);
console.log("Score:", score);
console.log("Course:", courseInfo.title);
console.log("Modules:", courseInfo.modules);