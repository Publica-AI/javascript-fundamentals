// Module 13, Topic 3 Demo — Static Methods and Private Fields
// Context: Publica Academy course and bank account systems
// Run in Node

// ---- Part 1: static methods ----
console.log("--- Part 1: static Methods ---");

class Student {
  constructor(name, score) {
    this.name  = name;
    this.score = score;
  }

  getGrade() {
    return this.score >= 70 ? "Pass" : this.score >= 50 ? "Borderline" : "Fail";
  }

  // Factory — create from CSV string
  static fromCSV(csvLine) {
    const [name, score] = csvLine.split(",");
    return new Student(name.trim(), Number(score.trim()));
  }

  // Utility — compute class average
  static getAverage(students) {
    const total = students.reduce((acc, s) => acc + s.score, 0);
    return Math.round(total / students.length);
  }
}

const amara  = Student.fromCSV("Amara Obi, 88");
const chidi  = Student.fromCSV("Chidi Nwosu, 45");
const funmi  = Student.fromCSV("Funmi Adeyemi, 72");
const gbenga = Student.fromCSV("Gbenga Lawal, 91");

console.log(amara.name, amara.score, amara.getGrade());

const allStudents = [amara, chidi, funmi, gbenga];
console.log("Class average:", Student.getAverage(allStudents));  // 74


// ---- Part 2: private fields ----
console.log("\n--- Part 2: Private Fields ---");

class BankAccount {
  #balance;
  #pin;

  constructor(owner, balance, pin) {
    this.owner    = owner;
    this.#balance = balance;
    this.#pin     = pin;
  }

  getBalance() {
    return "₦" + this.#balance.toLocaleString();
  }

  withdraw(amount, pin) {
    if (pin !== this.#pin)      return "Wrong PIN";
    if (amount > this.#balance) return "Insufficient funds";
    this.#balance -= amount;
    return "Withdrawn ₦" + amount.toLocaleString() + " — " + this.getBalance();
  }

  deposit(amount) {
    this.#balance += amount;
    return "Deposited ₦" + amount.toLocaleString() + " — " + this.getBalance();
  }
}

const account = new BankAccount("Amara Obi", 50000, 1234);
console.log(account.getBalance());            // ₦50,000
console.log(account.withdraw(5000, 1234));    // Withdrawn — ₦45,000
console.log(account.withdraw(5000, 9999));    // Wrong PIN
console.log(account.withdraw(100000, 1234));  // Insufficient funds
console.log(account.deposit(10000));          // ₦55,000

// Direct access blocked by JS engine
// console.log(account.#balance);  // SyntaxError — uncomment to show students


// ---- Part 3: getters + setters ----
console.log("\n--- Part 3: Getters + Setters ---");

class Course {
  static count    = 0;
  static VAT_RATE = 0.075;

  #price;
  #enrolled;

  constructor(title, price) {
    this.title     = title;
    this.#price    = price;
    this.#enrolled = 0;
    Course.count++;
  }

  get price() {
    return "₦" + this.#price.toLocaleString();
  }

  set price(newPrice) {
    if (newPrice < 0) throw new Error("Price must be >= 0");
    this.#price = newPrice;
  }

  get priceWithVAT() {
    return Math.round(this.#price * (1 + Course.VAT_RATE));
  }

  get enrolled() {
    return this.#enrolled;
  }

  enroll() {
    this.#enrolled += 1;
    return "Enrolled — total: " + this.#enrolled;
  }

  static getCount() {
    return "Total courses: " + Course.count;
  }
}

const jsCourse   = new Course("JavaScript Fundamentals", 15000);
const htmlCourse = new Course("HTML & CSS Basics",       12000);

console.log(Course.count);           // 2
console.log(Course.getCount());      // Total courses: 2

console.log(jsCourse.price);         // ₦15,000
console.log(jsCourse.priceWithVAT);  // 16125

jsCourse.price = 13000;
console.log(jsCourse.price);         // ₦13,000

console.log(jsCourse.enroll());      // Enrolled — total: 1
console.log(jsCourse.enroll());      // Enrolled — total: 2
console.log(jsCourse.enrolled);      // 2 (via getter)
console.log(htmlCourse.enrolled);    // 0 (independent instance)
