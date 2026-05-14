// Module 9 Combined Demo — Objects
// Context: Publica Academy student management system
// Covers: create/access, methods, this, nested, bracket notation, destructuring, iteration, lookup

// ---- Setup: student record ----
const student = {
  id:      "STU-001",
  name:    "Amara Obi",
  score:   88,
  course:  "JavaScript Fundamentals",
  contact: {
    email: "amara@example.com",
    city:  "Lagos",
    phone: "080-1234-5678"
  },
  modules: [
    { id: "M01", title: "Intro to JavaScript", passed: true  },
    { id: "M02", title: "Variables & Types",   passed: true  },
    { id: "M03", title: "Control Flow",        passed: true  },
    { id: "M04", title: "Functions",           passed: false }
  ],

  // Method: get grade
  getGrade() {
    if (this.score >= 70) return "Pass";
    if (this.score >= 50) return "Borderline";
    return "Fail";
  },

  // Method: count passed modules
  passedModuleCount() {
    return this.modules.filter(m => m.passed).length;
  },

  // Method: generate summary
  getSummary() {
    return this.name + " — " + this.course + " — Score: " + this.score + " — " + this.getGrade();
  }
};


// ---- Part 1: Basic access and methods ----
console.log("=== Part 1: Access + Methods ===");

console.log(student.name);
console.log(student.score);
console.log(student.getGrade());
console.log(student.getSummary());
console.log("Passed modules:", student.passedModuleCount(), "of", student.modules.length);


// ---- Part 2: Nested object and array access ----
console.log("\n=== Part 2: Nested Access ===");

console.log("City:", student.contact.city);
console.log("Email:", student.contact.email);
console.log("First module:", student.modules[0].title);
console.log("Last module passed?", student.modules[student.modules.length - 1].passed);


// ---- Part 3: Dynamic access and destructuring ----
console.log("\n=== Part 3: Dynamic Access ===");

// Bracket notation with variable
const field = "score";
console.log("Dynamic field '" + field + "':", student[field]);

// Destructuring
const { name, score, course } = student;
console.log("Destructured:", name, "|", score, "|", course);

const { email, city } = student.contact;
console.log("Contact:", email, "|", city);


// ---- Part 4: Iterate object properties ----
console.log("\n=== Part 4: Object Iteration ===");

// for...in
console.log("Flat properties:");
for (const key in student) {
  if (typeof student[key] !== "object" && typeof student[key] !== "function") {
    console.log("  " + key + ": " + student[key]);
  }
}

// Object.entries
console.log("Contact details via entries:");
Object.entries(student.contact).forEach(([key, value]) => {
  console.log("  " + key + ": " + value);
});


// ---- Part 5: Lookup table — grade descriptors ----
console.log("\n=== Part 5: Lookup Table ===");

const gradeDescriptions = {
  Pass:        "Excellent — you have a strong grasp of the material",
  Borderline:  "Almost there — review the topics and retake",
  Fail:        "Keep practising — revisit the fundamentals"
};

const grade = student.getGrade();
const description = gradeDescriptions[grade] || "Grade not recognised";
console.log("Grade:", grade);
console.log("Feedback:", description);


// ---- Part 6: Add and update properties ----
console.log("\n=== Part 6: Modify Object ===");

student.enrollmentDate = "2024-01-15";
student.score = 91;  // update after retake
console.log("Updated score:", student.score);
console.log("New grade:", student.getGrade());
console.log("Enrollment date:", student.enrollmentDate);
