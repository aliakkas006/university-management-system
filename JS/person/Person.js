class Person {
  #id;
  #name;
  #blood;
  #contact;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
    this.#blood = null;
    this.#contact = null;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get blood() {
    return this.#blood;
  }

  set blood(value) {
    this.#blood = value;
  }

  get contact() {
    return this.#contact;
  }

  set contact(value) {
    this.#contact = value;
  }

  toString() {
    return `
    ID: ${this.#id}, 
    Name: ${this.#name},
    Blood: ${this.#blood},
    Contact: ${this.#contact}
    `;
  }
}

module.exports = Person;
