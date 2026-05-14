// Topic 1 Demo — Creating Objects with Properties and Methods
// Context: Publica Academy student profile and Konga order

// ---- Part 1: Creating an object ----
console.log("--- Part 1: Creating an Object ---");

const student = {
  name:    "Amara Obi",
  score:   88,
  course:  "JavaScript Fundamentals",
  passed:  true
};

console.log(student);
console.log(student.name);
console.log(student.score);
console.log(student.passed);


// ---- Part 2: Object methods ----
console.log("--- Part 2: Methods ---");

const studentWithMethods = {
  name:  "Amara Obi",
  score: 88,

  getGrade() {
    if (this.score >= 70) return "Pass";
    if (this.score >= 50) return "Borderline";
    return "Fail";
  },

  introduce() {
    return "Hi, I'm " + this.name + " and my grade is " + this.getGrade();
  }
};

console.log(studentWithMethods.getGrade());
console.log(studentWithMethods.introduce());


// ---- Part 3: Nested objects and arrays ----
console.log("--- Part 3: Nested Objects ---");

const order = {
  id: "ORD-001",
  customer: {
    name:  "Amara Obi",
    email: "amara@example.com",
    city:  "Lagos"
  },
  items: [
    { name: "Wireless Earbuds", price: 4500 },
    { name: "Phone Case",       price: 1200 }
  ],
  total: 5700
};

console.log(order.id);
console.log(order.customer.name);
console.log(order.customer.city);
console.log(order.items[0].name);
console.log(order.items[1].price);
console.log(order.items.length);


// ---- Part 4: Adding and deleting properties ----
console.log("--- Part 4: Add and Delete ---");

const profile = {
  username: "amara_js",
  level:    "beginner"
};

console.log("Initial:", profile);

profile.email = "amara@publica.ng";
profile.completedModules = 3;
console.log("After additions:", profile);

profile.level = "intermediate";
console.log("After update:", profile.level);

delete profile.completedModules;
console.log("After delete:", profile);
