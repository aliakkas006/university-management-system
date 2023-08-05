class Subject {
  #id;
  #name;
  #credit;

  constructor(id, name, credit) {
    this.#id = id;
    this.#name = name;
    this.#credit = credit || 0;
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

  get credit() {
    return this.#credit;
  }

  set credit(value) {
    this.#credit = value;
  }

  toString() {
    return `
    ID: ${this.#id},
    Name: ${this.#name},
    Credit: ${this.#credit},
    `;
  }
}

module.exports = Subject;
