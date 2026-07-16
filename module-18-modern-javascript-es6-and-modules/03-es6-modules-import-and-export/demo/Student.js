// Module 18, Topic 3 Demo — Student.js (default export)

import { getGrade } from "./utils.js";

export default class Student {
  constructor(name, email, score) {
    this.name = name;
    this.email = email;
    this.score = score;
  }

  get grade() {
    return getGrade(this.score);
  }

  getInfo() {
    return this.name + " — " + this.score + " (" + this.grade + ")";
  }
}
