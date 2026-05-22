// Module 12 Combined Demo — Array Higher-Order Functions
// Context: Publica Academy student analytics dashboard
// Covers: map, filter, reduce, find, some, every, sort, chaining

// ---- Setup: student data ----
const students = [
  { id: "STU-001", name: "Amara Obi",    score: 88, course: "JavaScript", enrolled: true  },
  { id: "STU-002", name: "Chidi Nwosu",  score: 45, course: "HTML & CSS", enrolled: true  },
  { id: "STU-003", name: "Funmi Adeyemi", score: 72, course: "JavaScript", enrolled: true  },
  { id: "STU-004", name: "Gbenga Lawal", score: 91, course: "JavaScript", enrolled: false },
  { id: "STU-005", name: "Ngozi Eze",    score: 63, course: "HTML & CSS", enrolled: true  },
  { id: "STU-006", name: "Emeka Okafor", score: 55, course: "JavaScript", enrolled: true  },
  { id: "STU-007", name: "Yetunde Bello", score: 79, course: "HTML & CSS", enrolled: false }
];


// ---- Part 1: map — extract and transform ----
console.log("=== Part 1: map ===");

// Extract scores
const allScores = students.map(s => s.score);
console.log("All scores:", allScores);

// Format display names
const nameLabels = students.map(s => s.name + " — " + s.score + "%");
console.log("Name labels:");
nameLabels.forEach(l => console.log(" ", l));

// Add computed grade property
const withGrade = students.map(s => ({
  ...s,
  grade: s.score >= 70 ? "Pass" : s.score >= 50 ? "Borderline" : "Fail"
}));
console.log("First student with grade:", withGrade[0]);


// ---- Part 2: filter ----
console.log("\n=== Part 2: filter ===");

const enrolled    = students.filter(s => s.enrolled);
const jsStudents  = students.filter(s => s.course === "JavaScript");
const passed      = students.filter(s => s.score >= 70);
const jsAndPassed = students.filter(s => s.course === "JavaScript" && s.score >= 70);

console.log("Enrolled:", enrolled.length);         // 5
console.log("JavaScript:", jsStudents.length);     // 4
console.log("Passed (>=70):", passed.length);      // 4
console.log("JS and passed:", jsAndPassed.length); // 2


// ---- Part 3: reduce ----
console.log("\n=== Part 3: reduce ===");

const totalScore = students.reduce((acc, s) => acc + s.score, 0);
const average    = Math.round(totalScore / students.length);
console.log("Average score:", average);  // 70

const passCount  = students.reduce((acc, s) => s.score >= 70 ? acc + 1 : acc, 0);
console.log("Pass count:", passCount);   // 4

const courseCounts = students.reduce((acc, s) => {
  acc[s.course] = (acc[s.course] || 0) + 1;
  return acc;
}, {});
console.log("Course distribution:", courseCounts);


// ---- Part 4: find, some, every ----
console.log("\n=== Part 4: find + some + every ===");

const student003 = students.find(s => s.id === "STU-003");
console.log("STU-003:", student003.name, "—", student003.score);

const topStudent = students.find(s => s.score === Math.max(...students.map(x => x.score)));
console.log("Top student:", topStudent.name, "—", topStudent.score);  // Gbenga 91

console.log("Any score > 90?",    students.some(s => s.score > 90));   // true
console.log("All enrolled?",      students.every(s => s.enrolled));    // false
console.log("All scored >= 40?",  students.every(s => s.score >= 40)); // true


// ---- Part 5: chaining — leaderboard and stats ----
console.log("\n=== Part 5: Chaining — Leaderboard + Stats ===");

// Top JavaScript students by score (enrolled only)
const jsLeaderboard = students
  .filter(s => s.course === "JavaScript" && s.enrolled)
  .sort((a, b) => b.score - a.score)
  .map((s, i) => (i + 1) + ". " + s.name + " — " + s.score + "%");

console.log("JavaScript Leaderboard:");
jsLeaderboard.forEach(l => console.log(" ", l));

// Complete dashboard stats
const dashboard = {
  totalStudents:   students.length,
  enrolled:        students.filter(s => s.enrolled).length,
  passRate:        Math.round(students.filter(s => s.score >= 70).length / students.length * 100),
  averageScore:    average,
  topScore:        Math.max(...students.map(s => s.score)),
  courseBreakdown: courseCounts
};

console.log("\nDashboard:", dashboard);
