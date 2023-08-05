const UniPerson = require('./UniPerson');

class Student extends UniPerson {
  #studentID;
  #guardian;
  #exams;
  #fee;

  constructor(id, name, studentID, guardian) {
    super(id, name);
    this.#studentID = studentID;
    this.#guardian = guardian;
    this.#exams = [];
    this.#fee = null;
  }

  get studentID() {
    return this.#studentID;
  }

  get guardian() {
    return this.#guardian;
  }

  get exams() {
    return this.#exams;
  }

  set exams(value) {
    this.#exams = value;
  }

  get fee() {
    return this.#fee;
  }

  set fee(value) {
    this.#fee = value;
  }

  addExam(exam) {
    this.#exams.push(exam);
  }

  toString() {
    return `${super.toString()}, Student ID -> ${this.#studentID}`;
  }
}

module.exports = Student;
