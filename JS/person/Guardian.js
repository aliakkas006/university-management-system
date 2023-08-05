const Person = require('./Person');

class Guardian extends Person {
  #profession;
  #salary;
  constructor(id, name, profession, salary) {
    super(id, name);
    this.#profession = profession;
    this.#salary = salary;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    this.#salary = value;
  }

  get profession() {
    return this.#profession;
  }

  set profession(value) {
    this.#profession = value;
  }

  toString() {
    return `${super.toString()}
    Profession: ${this.#profession},
    Salary: ${this.#salary}`;
  }
}

module.exports = Guardian;
