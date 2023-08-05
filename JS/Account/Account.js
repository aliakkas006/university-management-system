class Account {
  #id;
  #type;
  #amount;
  #time;

  constructor(id, type, amount, time) {
    this.#id = id;
    this.#type = type || '';
    this.#amount = amount || 0;
    this.#time = time;
  }

  get id() {
    return this.#id;
  }

  get type() {
    return this.#type;
  }

  set type(value) {
    this.#type = value;
  }

  get amount() {
    return this.#amount;
  }

  set amount(value) {
    this.#amount = value;
  }

  get time() {
    return this.#time;
  }

  set time(value) {
    this.#time = value;
  }

  toString() {
    return `
        ID: ${this.#id},
        Type: ${this.#type},
        Amount: ${this.#amount},
        Time: ${this.#time},
        `;
  }
}

module.exports = Account;
