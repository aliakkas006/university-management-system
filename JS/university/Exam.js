class Exam {
  #id;
  #name;
  #subject;
  #passMark;

  constructor(id, name, subject, passMark) {
    this.#id = id;
    this.#name = name;
    this.#subject = subject;
    this.#passMark = passMark || 40;
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

  get subject() {
    return this.#subject;
  }

  set subject(value) {
    this.#subject = value;
  }

  get passMark() {
    return this.#passMark;
  }

  set passMark(value) {
    this.#passMark = value;
  }

  toString() {
    return `
      ID: ${this.#id},
      Name: ${this.#name},
      Subject: ${this.#subject},
      PassMark: ${this.#passMark},
      `;
  }
}

module.exports = Exam;
