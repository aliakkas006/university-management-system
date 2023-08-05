class Department {
  #id;
  #name;
  #subjects;
  #dean;
  #teachers;

  constructor({ id, name, subjects, dean, teachers }) {
    this.#id = id;
    this.#name = name;
    this.#subjects = subjects || [];
    this.#dean = dean || null;
    this.#teachers = teachers || [];
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

  get subjects() {
    return this.#subjects;
  }

  set subjects(value) {
    this.#subjects = value;
  }

  get dean() {
    return this.#dean;
  }

  set dean(value) {
    this.#dean = value;
  }

  get teachers() {
    return this.#teachers;
  }

  set teachers(value) {
    this.#teachers = value;
  }

  addTeacher(teacher) {
    this.#teachers.push(teacher);
  }

  toString() {
    return `
    ID: ${this.#id},
    Name: ${this.#name},
    Subjects: ${this.#subjects},
    Dean: ${this.#dean},
    Teachers: ${this.#teachers}
    `;
  }
}

module.exports = Department;
