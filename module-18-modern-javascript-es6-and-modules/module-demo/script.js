// Module 18 Combined Demo — Modern JavaScript ES6+ Features
// Ties together: destructuring, spread/rest, and module patterns
// Run in Node (single file for demo — but structured as if modular)

// ---- Simulated module utilities ----
const formatPrice = (amount) => "₦" + amount.toLocaleString();
const getGrade = (score) => score >= 70 ? "Pass" : score >= 50 ? "Borderline" : "Fail";

// ---- Part 1: Destructuring in real scenarios ----
console.log("--- Part 1: Destructuring ---");

// API response simulation
const apiResponse = {
  status: 200,
  data: {
    students: [
      { name: "Amara Obi", email: "amara@publica.ng", score: 88, course: "JavaScript" },
      { name: "Chidi Nwosu", email: "chidi@publica.ng", score: 45, course: "HTML & CSS" },
      { name: "Funmi Adeyemi", email: "funmi@publica.ng", score: 72, course: "JavaScript" },
      { name: "Gbenga Lawal", email: "gbenga@publica.ng", score: 91, course: "Git" },
      { name: "Ngozi Eze", email: "ngozi@publica.ng", score: 55, course: "JavaScript" }
    ]
  }
};

// Nested destructuring of API response
const { data: { students } } = apiResponse;
console.log("Students loaded:", students.length);

// Destructuring in forEach
students.forEach(function({ name, score, course }) {
  console.log("  " + name + " | " + course + " | " + getGrade(score));
});


// ---- Part 2: Spread for immutable operations ----
console.log("\n--- Part 2: Spread (Immutable Operations) ---");

// Sort without mutation
const leaderboard = [...students]
  .sort((a, b) => b.score - a.score)
  .map(({ name, score }, i) => (i + 1) + ". " + name + " — " + score);

console.log("Leaderboard:");
leaderboard.forEach(line => console.log("  " + line));

// Add a student immutably
const newStudent = { name: "Yetunde Balogun", email: "yetunde@publica.ng", score: 80, course: "JavaScript" };
const updatedRoster = [...students, newStudent];
console.log("\nOriginal count:", students.length);
console.log("Updated count:", updatedRoster.length);

// Merge settings
const defaults = { theme: "light", language: "en", pageSize: 10, notifications: true };
const userPrefs = { theme: "dark", pageSize: 25 };
const settings = { ...defaults, ...userPrefs };
console.log("\nSettings:", settings);


// ---- Part 3: Rest for flexible functions ----
console.log("\n--- Part 3: Rest Parameters ---");

function createReport(title, ...studentList) {
  console.log("=== " + title + " ===");
  console.log("Students: " + studentList.length);

  const scores = studentList.map(({ score }) => score);
  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const max = Math.max(...scores);
  const min = Math.min(...scores);

  console.log("Average: " + avg + " | Max: " + max + " | Min: " + min);
  return { title, count: studentList.length, avg, max, min };
}

createReport("JavaScript Class", ...students.filter(s => s.course === "JavaScript"));
createReport("All Students", ...students);


// ---- Part 4: Object destructuring + spread for updates ----
console.log("\n--- Part 4: Immutable Updates ---");

function updateStudent(student, updates) {
  return { ...student, ...updates, updatedAt: new Date().toISOString() };
}

function addGrade(student) {
  const { score } = student;
  return { ...student, grade: getGrade(score) };
}

// Pipeline: add grade → update score → format
const [amara] = students;
const withGrade = addGrade(amara);
const withNewScore = updateStudent(withGrade, { score: 95 });
const final = addGrade(withNewScore);

console.log("Original:", amara.name, amara.score);
console.log("Final:", final.name, final.score, final.grade);
console.log("Original unchanged:", amara.score);  // still 88


// ---- Part 5: Destructuring in array method chains ----
console.log("\n--- Part 5: Full Pipeline ---");

const dashboard = students
  .map(student => ({ ...student, grade: getGrade(student.score) }))
  .filter(({ grade }) => grade !== "Fail")
  .map(({ name, course, score, grade }) => ({
    display: name + " — " + course,
    score,
    grade,
    tuition: formatPrice(15000)
  }));

console.log("Dashboard (passing students):");
dashboard.forEach(({ display, score, grade, tuition }) => {
  console.log("  " + display + " | " + score + " (" + grade + ") | " + tuition);
});

console.log("\n--- Module 18 Demo Complete ---");
console.log("Destructuring, spread, rest — modern JavaScript in action.");
