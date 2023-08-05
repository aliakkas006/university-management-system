const Employee = require('./Employee');

class Teacher extends Employee {
  #subject;

  constructor(id, name, subject, employeeID) {
    super(id, name, employeeID);
    this.#subject = subject;
  }

  get subject() {
    return this.#subject;
  }

  set subject(value) {
    this.#subject = value;
  }

  toString() {
    return `${super.toString()} Subject -> ${this.#subject}`;
  }
}

module.exports = Teacher;
