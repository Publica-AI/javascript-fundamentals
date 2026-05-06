// Module 5 — Combined Demo
// Topics: if/else if/else | switch Statements | Ternary Operator & Truthy/Falsy
// Context: A Publica Academy student result system — one continuous story

// ============================================================
// SETUP — Student data
// ============================================================

const studentName = "Amara Obi";
let score         = 74;       // change this to test different outcomes
const attended    = true;
const isPremium   = false;
const username    = "";       // empty — will test truthy/falsy


// ============================================================
// PART 1 — if, else if & else (Topic 1)
// Assign letter grade and check combined conditions
// ============================================================

console.log("=== PART 1: if / else if / else ===");

if (score >= 80) {
  console.log(studentName + " — Grade: A (Distinction)");
} else if (score >= 70) {
  console.log(studentName + " — Grade: B (Merit)");      // 74 lands here
} else if (score >= 60) {
  console.log(studentName + " — Grade: C (Credit)");
} else if (score >= 50) {
  console.log(studentName + " — Grade: D (Pass)");
} else {
  console.log(studentName + " — Grade: F (Fail)");
}

// Combined condition: both score AND attendance required for certificate
if (score >= 50 && attended) {
  console.log("Certificate status: Eligible");
} else {
  console.log("Certificate status: Not eligible");
}


// ============================================================
// PART 2 — switch (Topic 2)
// Assign a study recommendation based on grade band
// ============================================================

console.log("=== PART 2: switch ===");

// Derive a grade band (A/B/C/D/F) — used in switch
const gradeBand = score >= 80 ? "A"
                : score >= 70 ? "B"
                : score >= 60 ? "C"
                : score >= 50 ? "D"
                : "F";

switch (gradeBand) {
  case "A":
    console.log("Recommendation: Enrol in advanced module");
    break;
  case "B":
    console.log("Recommendation: Strong pass — review weak areas");
    break;
  case "C":
    console.log("Recommendation: Revision pack recommended");
    break;
  case "D":
    console.log("Recommendation: Attend tutoring sessions");
    break;
  case "F":
    console.log("Recommendation: Retake the module");
    break;
  default:
    console.log("Recommendation: Unknown grade — check score");
}


// ============================================================
// PART 3 — Ternary & Truthy/Falsy (Topic 3)
// Build the result display using ternary and default values
// ============================================================

console.log("=== PART 3: Ternary & Truthy/Falsy ===");

// Ternary for compact one-line labels
const passLabel    = score >= 50 ? "PASS" : "FAIL";
const memberLabel  = isPremium   ? "Premium" : "Standard";
const certLabel    = (score >= 50 && attended) ? "Issued" : "Pending";

console.log("Result:      " + passLabel);
console.log("Membership:  " + memberLabel);
console.log("Certificate: " + certLabel);

// Truthy/falsy — test username
const displayName = username || studentName;   // falls back to studentName
console.log("Welcome,", displayName);

// Truthy/falsy surprises
if (!username) {
  console.log("(username is empty — falsy — using student name as fallback)");
}

// Final confirmation message using everything
console.log("=== RESULT SUMMARY ===");
console.log(`
Student:     ${displayName}
Score:       ${score}
Grade:       ${gradeBand}
Result:      ${passLabel}
Certificate: ${certLabel}
Membership:  ${memberLabel}
`);