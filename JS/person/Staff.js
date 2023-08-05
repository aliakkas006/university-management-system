const Employee = require('./Employee.js');

class Staff extends Employee {
  #title;

  constructor(id, name, title) {
    super(id, name);
    this.#title = title;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  toString() {
    return `${super.toString()} Title -> ${this.#title}`;
  }
}

module.exports = Staff;
