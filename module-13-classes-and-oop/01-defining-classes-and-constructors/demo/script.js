// Module 13, Topic 1 Demo — Defining Classes and Constructors
// Context: Publica Academy course and student system
// Run in Node or browser console

// ---- Part 1: Define and instantiate a class ----
console.log("--- Part 1: Class Definition + Instantiation ---");

class Course {
  constructor(title, price, level) {
    this.title    = title;
    this.price    = price;
    this.level    = level;
    this.enrolled = 0;  // default
  }

  getLabel() {
    return this.title + " — ₦" + this.price.toLocaleString() + " [" + this.level + "]";
  }

  enroll() {
    this.enrolled += 1;
    return "Enrolled! Total: " + this.enrolled;
  }
}

const jsCourse   = new Course("JavaScript Fundamentals", 15000, "Beginner");
const htmlCourse = new Course("HTML & CSS Basics",       12000, "Beginner");
const gitCourse  = new Course("Git & GitHub",            10000, "Beginner");

console.log(jsCourse.getLabel());
// JavaScript Fundamentals — ₦15,000 [Beginner]

console.log(jsCourse.enroll());   // Enrolled! Total: 1
console.log(jsCourse.enroll());   // Enrolled! Total: 2
console.log(htmlCourse.enrolled); // 0 — independent instance


// ---- Part 2: Methods accessing this ----
console.log("\n--- Part 2: Methods + this ---");

class Student {
  constructor(name, score, course) {
    this.name   = name;
    this.score  = score;
    this.course = course;
  }

  getGrade() {
    if (this.score >= 70) return "Pass";
    if (this.score >= 50) return "Borderline";
    return "Fail";
  }

  getSummary() {
    return this.name + " — " + this.score + "% — " + this.getGrade();
  }
}

const amara = new Student("Amara Obi",    88, "JavaScript");
const chidi = new Student("Chidi Nwosu",  45, "HTML & CSS");
const funmi = new Student("Funmi Adeyemi", 72, "JavaScript");

console.log(amara.getSummary());  // Amara Obi — 88% — Pass
console.log(chidi.getSummary());  // Chidi Nwosu — 45% — Fail
console.log(funmi.getSummary());  // Funmi Adeyemi — 72% — Pass


// ---- Part 3: instanceof ----
console.log("\n--- Part 3: instanceof ---");

console.log(amara instanceof Student); // true
console.log(amara instanceof Course);  // false
console.log(jsCourse instanceof Course); // true


// ---- Part 4: Arrays of instances + HOFs ----
console.log("\n--- Part 4: Arrays of Instances + HOFs ---");

const students = [
  new Student("Amara Obi",    88, "JavaScript"),
  new Student("Chidi Nwosu",  45, "HTML & CSS"),
  new Student("Funmi Adeyemi", 72, "JavaScript"),
  new Student("Gbenga Lawal", 91, "JavaScript"),
  new Student("Ngozi Eze",    63, "HTML & CSS")
];

// filter — passing students
const passers = students.filter(s => s.getGrade() === "Pass");
console.log("Passers:", passers.length);  // 3

// map — summaries
const summaries = passers.map(s => s.getSummary());
summaries.forEach(s => console.log(" ", s));

// reduce — average
const total   = students.reduce((acc, s) => acc + s.score, 0);
const average = Math.round(total / students.length);
console.log("Class average:", average);   // 72

// sort by score
const ranked = [...students].sort((a, b) => b.score - a.score);
console.log("Top scorer:", ranked[0].name, ranked[0].score);  // Gbenga 91
