// Module 13 Combined Demo — Classes and OOP
// Context: Publica Academy course platform
// Brings together: classes, inheritance, static methods, private fields, getters/setters
// Run in Node

// ---- Base Class ----
class User {
  static count = 0;

  #email;

  constructor(name, email) {
    this.name   = name;
    this.#email = email;
    User.count++;
  }

  get email() {
    return this.#email;
  }

  getInfo() {
    return "User: " + this.name + " <" + this.#email + ">";
  }

  static getCount() {
    return "Total users: " + User.count;
  }
}


// ---- Subclass: Student ----
class Student extends User {
  #score;

  constructor(name, email, course, score) {
    super(name, email);
    this.course = course;
    this.#score = score;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0 || newScore > 100) throw new Error("Score must be 0–100");
    this.#score = newScore;
  }

  get grade() {
    if (this.#score >= 70) return "Pass";
    if (this.#score >= 50) return "Borderline";
    return "Fail";
  }

  getInfo() {
    return super.getInfo() + " | " + this.course + " — " + this.grade;
  }

  static fromCSV(csvLine) {
    const [name, email, course, score] = csvLine.split(",");
    return new Student(name.trim(), email.trim(), course.trim(), Number(score.trim()));
  }
}


// ---- Subclass: Instructor ----
class Instructor extends User {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }

  getInfo() {
    return super.getInfo() + " | Teaches: " + this.subject;
  }
}


// ---- Part 1: Creating instances from CSV ----
console.log("--- Part 1: Static Factory + Private Fields ---");

const amara  = Student.fromCSV("Amara Obi,   amara@example.com,   JavaScript,  88");
const chidi  = Student.fromCSV("Chidi Nwosu, chidi@example.com,   HTML & CSS,  45");
const funmi  = Student.fromCSV("Funmi Adeyemi, funmi@example.com, JavaScript,  72");
const gbenga = Student.fromCSV("Gbenga Lawal, gbenga@example.com, JavaScript, 91");

console.log(amara.getInfo());
// User: Amara Obi <amara@example.com> | JavaScript — Pass

console.log(chidi.getInfo());
// User: Chidi Nwosu <chidi@example.com> | HTML & CSS — Fail

// Private field protected — access via getter only
console.log(amara.score);       // 88  (via getter)
console.log(amara.email);       // amara@example.com  (via getter)
// amara.#score = 99            // SyntaxError — blocked outside class


// ---- Part 2: Getter + Setter with validation ----
console.log("\n--- Part 2: Getter + Setter ---");

console.log(chidi.grade);       // Fail  (score 45)
chidi.score = 55;               // setter validates and updates
console.log(chidi.grade);       // Borderline  (score 55)

try {
  chidi.score = 110;            // setter rejects invalid value
} catch (e) {
  console.log(e.message);       // Score must be 0–100
}


// ---- Part 3: Inheritance + polymorphism ----
console.log("\n--- Part 3: Inheritance + Polymorphism ---");

const instructor = new Instructor("Dr. Eze", "eze@publica.ng", "JavaScript");

const users = [amara, chidi, funmi, gbenga, instructor];

users.forEach(u => console.log(u.getInfo()));
// Each type calls its own version of getInfo()
// User: Amara Obi ...    — Student version
// ...
// User: Dr. Eze ...      — Instructor version


// ---- Part 4: Static properties ----
console.log("\n--- Part 4: Static Properties ---");

console.log(User.getCount());   // Total users: 5  (4 students + 1 instructor)
console.log(User.count);        // 5


// ---- Part 5: Array + HOF integration ----
console.log("\n--- Part 5: HOF Integration ---");

const students = [amara, chidi, funmi, gbenga];

// Class average (static utility)
const total = students.reduce((acc, s) => acc + s.score, 0);
const avg   = Math.round(total / students.length);
console.log("Class average:", avg);   // 64  (88 + 55 + 72 + 91 = 306 / 4 ≈ 77)

// Filter passing students
const passing = students.filter(s => s.grade === "Pass");
console.log("Passing:", passing.map(s => s.name).join(", "));
// Passing: Amara Obi, Funmi Adeyemi, Gbenga Lawal

// Leaderboard
const leaderboard = [...students]
  .sort((a, b) => b.score - a.score)
  .map((s, i) => (i + 1) + ". " + s.name + " — " + s.score);

console.log("Leaderboard:");
leaderboard.forEach(line => console.log(" ", line));
// 1. Gbenga Lawal — 91
// 2. Amara Obi — 88
// 3. Funmi Adeyemi — 72
// 4. Chidi Nwosu — 55
