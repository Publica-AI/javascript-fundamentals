// Topic 1 Demo — if, else if & else
// Context: A Publica Academy grade calculator and WAEC-style result checker

// ---- The student data ----
const studentName = "Amara Obi";
let score = 74;    // change this value to test different grades


// ---- Part 1: Basic if/else ----
console.log("--- Part 1: Basic if/else ---");

if (score >= 50) {
  console.log(studentName + " passed!");
} else {
  console.log(studentName + " needs to retake the exam.");
}


// ---- Part 2: if / else if / else chain ----
console.log("--- Part 2: Grade Assignment ---");

if (score >= 80) {
  console.log("Grade: A — Distinction");
} else if (score >= 70) {
  console.log("Grade: B — Merit");          // 74 lands here
} else if (score >= 60) {
  console.log("Grade: C — Credit");
} else if (score >= 50) {
  console.log("Grade: D — Pass");
} else {
  console.log("Grade: F — Fail");
}


// ---- Part 3: Wrong order (demonstrate the bug, then fix it) ----
console.log("--- Part 3: Wrong Order Bug ---");

// Run this version first — score 74 incorrectly gets "Pass or higher"
if (score >= 50) {
  console.log("(Wrong order) Result: Pass or higher");
} else if (score >= 70) {
  console.log("(Wrong order) Result: Merit");   // never reached
} else if (score >= 80) {
  console.log("(Wrong order) Result: Distinction");  // never reached
}
// Then switch to the correct order (see Part 2) — show the difference


// ---- Part 4: Combined conditions ----
console.log("--- Part 4: Combined Conditions ---");

const attended = true;

if (score >= 50 && attended) {
  console.log("Certificate eligible: yes");
} else {
  console.log("Certificate eligible: no");
}

if (score < 50 || !attended) {
  console.log("Resit required: yes");
} else {
  console.log("Resit required: no");
}