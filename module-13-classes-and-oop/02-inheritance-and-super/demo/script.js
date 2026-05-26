// Module 13, Topic 2 Demo — Inheritance and super
// Context: Publica Academy user hierarchy
// Run in Node

// ---- Part 1: extends and super constructor ----
console.log("--- Part 1: extends + super ---");

class User {
  constructor(name, email) {
    this.name  = name;
    this.email = email;
  }

  greet() {
    return "Hello, " + this.name + "!";
  }

  getInfo() {
    return "User: " + this.name + " <" + this.email + ">";
  }
}

class Student extends User {
  constructor(name, email, course) {
    super(name, email);   // parent constructor first
    this.course = course;
  }

  getEnrolment() {
    return this.name + " → " + this.course;
  }
}

const amara = new Student("Amara Obi", "amara@example.com", "JavaScript");
console.log(amara.greet());        // Hello, Amara Obi!  (inherited)
console.log(amara.getInfo());      // User: Amara Obi <amara@example.com>  (inherited)
console.log(amara.getEnrolment()); // Amara Obi → JavaScript  (own)
console.log(amara instanceof Student); // true
console.log(amara instanceof User);    // true


// ---- Part 2: override and super.method() ----
console.log("\n--- Part 2: Override + super.method() ---");

class Admin extends User {
  constructor(name, email, role) {
    super(name, email);
    this.role = role;
  }

  // Override — replaces parent getInfo
  getInfo() {
    return "ADMIN [" + this.role + "] " + this.name;
  }
}

class Instructor extends User {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }

  // Override — extends parent getInfo
  getInfo() {
    return super.getInfo() + " | Teaches: " + this.subject;
  }
}

const admin = new Admin("Publica Team", "admin@publica.ng", "superadmin");
const inst  = new Instructor("Dr. Eze", "eze@publica.ng", "JavaScript");

console.log(admin.greet());     // Hello, Publica Team!  (inherited)
console.log(admin.getInfo());   // ADMIN [superadmin] Publica Team  (overridden)
console.log(inst.getInfo());    // User: Dr. Eze <eze@publica.ng> | Teaches: JavaScript


// ---- Part 3: Account hierarchy ----
console.log("\n--- Part 3: Account Hierarchy ---");

class Account {
  constructor(owner, balance) {
    this.owner   = owner;
    this.balance = balance;
  }

  getBalance() {
    return "₦" + this.balance.toLocaleString();
  }

  deposit(amount) {
    this.balance += amount;
    return "Deposited ₦" + amount.toLocaleString() + " → " + this.getBalance();
  }
}

class SavingsAccount extends Account {
  constructor(owner, balance, goal) {
    super(owner, balance);
    this.goal = goal;
  }

  getProgress() {
    const pct = Math.round((this.balance / this.goal) * 100);
    return this.getBalance() + " of ₦" + this.goal.toLocaleString() + " (" + pct + "%)";
  }
}

const savings = new SavingsAccount("Amara Obi", 18000, 50000);
console.log(savings.deposit(5000));   // inherited method
// Deposited ₦5,000 → ₦23,000

console.log(savings.getProgress());
// ₦23,000 of ₦50,000 (46%)

console.log(savings instanceof SavingsAccount); // true
console.log(savings instanceof Account);         // true


// ---- Part 4: Array of mixed types ----
console.log("\n--- Part 4: Array of Mixed Users ---");

const users = [
  new Student("Amara",  "amara@ex.com",  "JavaScript"),
  new Admin("Publica",  "admin@ex.com",  "superadmin"),
  new Student("Chidi",  "chidi@ex.com",  "HTML & CSS"),
  new Instructor("Dr. Eze", "eze@ex.com", "JavaScript")
];

users.forEach(u => console.log(u.getInfo()));
// Each calls its own version of getInfo()
