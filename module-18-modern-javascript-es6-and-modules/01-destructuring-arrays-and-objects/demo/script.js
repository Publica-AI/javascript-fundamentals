// Module 18, Topic 1 Demo — Destructuring Arrays & Objects
// Context: Publica Academy student data
// Run in Node or browser

// ---- Part 1: Array destructuring ----
console.log("--- Part 1: Array Destructuring ---");

const scores = [88, 72, 91, 65, 77];

const [first, second, third] = scores;
console.log("Top 3:", first, second, third);

// Skip elements
const [best, , thirdBest] = scores;
console.log("Best and 3rd:", best, thirdBest);

// Default values
const [a, b, c, d, e, f = 0] = scores;
console.log("6th score (default):", f);  // 0

// Swap variables
let x = "JavaScript";
let y = "HTML";
[x, y] = [y, x];
console.log("After swap:", x, y);  // "HTML" "JavaScript"


// ---- Part 2: Object destructuring ----
console.log("\n--- Part 2: Object Destructuring ---");

const student = {
  name: "Amara Obi",
  email: "amara@publica.ng",
  score: 88,
  course: "JavaScript Fundamentals",
  city: "Lagos"
};

const { name, score, course } = student;
console.log(name, "—", course, "(" + score + ")");

// Rename
const { name: studentName, email: studentEmail } = student;
console.log("Renamed:", studentName, studentEmail);

// Default for missing property
const { grade = "Not graded" } = student;
console.log("Grade:", grade);


// ---- Part 3: Function parameters ----
console.log("\n--- Part 3: In Function Parameters ---");

function displayStudent({ name, course, score }) {
  const grade = score >= 70 ? "Pass" : "Fail";
  console.log("  " + name + " | " + course + " | " + score + " (" + grade + ")");
}

const students = [
  { name: "Amara Obi", course: "JavaScript", score: 88 },
  { name: "Chidi Nwosu", course: "HTML & CSS", score: 45 },
  { name: "Funmi Adeyemi", course: "JavaScript", score: 72 }
];

students.forEach(displayStudent);


// ---- Part 4: Nested destructuring ----
console.log("\n--- Part 4: Nested Destructuring ---");

const response = {
  status: 200,
  data: {
    user: { name: "Amara Obi", id: 42 },
    courses: ["JavaScript", "HTML & CSS", "Git"]
  }
};

const { data: { user: { name: userName }, courses: [firstCourse] } } = response;
console.log("User:", userName);
console.log("First course:", firstCourse);

// More readable: two-step
const { data } = response;
const { user, courses } = data;
console.log("User (2-step):", user.name);
console.log("Courses (2-step):", courses.length);


// ---- Part 5: Destructuring with array methods ----
console.log("\n--- Part 5: With Array Methods ---");

const courseList = [
  { title: "JavaScript", price: 15000, enrolled: 42 },
  { title: "HTML & CSS", price: 12000, enrolled: 67 },
  { title: "Git", price: 10000, enrolled: 31 }
];

// Destructuring in .map callback
const summaries = courseList.map(function({ title, enrolled }) {
  return title + " (" + enrolled + " students)";
});
console.log(summaries);

// Destructuring in .filter + .map chain
const popular = courseList
  .filter(function({ enrolled }) { return enrolled > 40; })
  .map(function({ title }) { return title; });
console.log("Popular:", popular);
