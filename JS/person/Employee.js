const UniPerson = require('./UniPerson');

class Employee extends UniPerson {
  #employeeID;
  #salary;

  constructor(id, name, employeeID) {
    super(id, name);
    this.#employeeID = employeeID;
    this.#salary = null;
  }

  get employeeID() {
    return this.#employeeID;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    this.#salary = value;
  }

  toString() {
    return `${super.toString()}, Employee ID -> ${this.#employeeID}`;
  }
}

module.exports = Employee;
