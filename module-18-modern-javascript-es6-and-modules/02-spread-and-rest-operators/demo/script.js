// Module 18, Topic 2 Demo — Spread & Rest Operators
// Context: Publica Academy student and course data
// Run in Node or browser

// ---- Part 1: Spread with arrays ----
console.log("--- Part 1: Spread Arrays ---");

const jsStudents = ["Amara", "Chidi", "Funmi"];
const htmlStudents = ["Gbenga", "Ngozi", "Emeka"];

// Copy
const jsCopy = [...jsStudents];
jsCopy.push("Yetunde");
console.log("Original:", jsStudents);    // unchanged
console.log("Copy:", jsCopy);            // has Yetunde

// Merge
const allStudents = [...jsStudents, ...htmlStudents];
console.log("All:", allStudents);

// Sort without mutation
const scores = [88, 45, 72, 91, 65];
const sorted = [...scores].sort((a, b) => b - a);
console.log("Sorted:", sorted);
console.log("Original:", scores);  // unchanged!


// ---- Part 2: Spread with objects ----
console.log("\n--- Part 2: Spread Objects ---");

const defaults = { theme: "light", language: "en", fontSize: 14, sidebar: true };
const userPrefs = { theme: "dark", fontSize: 16 };

const settings = { ...defaults, ...userPrefs };
console.log("Settings:", settings);
// theme: "dark" (overridden), language: "en" (from defaults), fontSize: 16 (overridden)

// Immutable update
const student = { name: "Amara Obi", score: 88, course: "JavaScript" };
const updated = { ...student, score: 92, grade: "Pass" };
console.log("Updated:", updated);
console.log("Original:", student);  // unchanged


// ---- Part 3: Rest in destructuring ----
console.log("\n--- Part 3: Rest in Destructuring ---");

// Array rest
const [top, second, ...others] = [91, 88, 72, 65, 45];
console.log("Top:", top);
console.log("Second:", second);
console.log("Others:", others);  // [72, 65, 45]

// Object rest
const { name, ...studentData } = { name: "Amara", score: 88, course: "JS", city: "Lagos" };
console.log("Name:", name);
console.log("Rest:", studentData);  // { score: 88, course: "JS", city: "Lagos" }


// ---- Part 4: Rest in function parameters ----
console.log("\n--- Part 4: Rest Parameters ---");

function calculateStats(...scores) {
  const total = scores.reduce((sum, s) => sum + s, 0);
  const avg = Math.round(total / scores.length);
  const max = Math.max(...scores);  // spread inside Math.max!
  return { total, avg, max, count: scores.length };
}

console.log(calculateStats(88, 72, 91, 65));
console.log(calculateStats(45, 55, 60));

// Named first param + rest
function enrollStudents(course, ...students) {
  console.log(course + ":");
  students.forEach(s => console.log("  - " + s));
}

enrollStudents("JavaScript", "Amara", "Chidi", "Funmi", "Gbenga");


// ---- Part 5: Combining spread and rest ----
console.log("\n--- Part 5: Combined Patterns ---");

// Clone and add
function addStudent(list, newStudent) {
  return [...list, newStudent];
}

const roster = ["Amara", "Chidi"];
const newRoster = addStudent(roster, "Funmi");
console.log("New roster:", newRoster);
console.log("Old roster:", roster);  // unchanged

// Merge with override
function updateStudent(student, updates) {
  return { ...student, ...updates };
}

const amara = { name: "Amara", score: 88, course: "JS" };
const amaraUpdated = updateStudent(amara, { score: 95, grade: "Pass" });
console.log("Updated Amara:", amaraUpdated);
