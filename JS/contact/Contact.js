class Contact {
  #id;
  #email;
  #phone;
  #alternativPhone;
  #address;

  constructor({ id, email, phone, alternativPhone, address }) {
    this.#id = id;
    this.#email = email || '';
    this.#phone = phone || '';
    this.#alternativPhone = alternativPhone || '';
    this.#address = address || null;
  }

  get id() {
    return this.#id;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    this.roadNo = value;
  }

  get phone() {
    return this.#phone;
  }

  set phone(value) {
    this.#phone = value;
  }

  get alternativPhone() {
    return this.#alternativPhone;
  }

  set alternativPhone(value) {
    this.#alternativPhone = value;
  }

  get address() {
    return this.#address;
  }

  set address(value) {
    this.#address = value;
  }

  toString() {
    return `
      Contact ID: ${this.#id},
      Email: ${this.#email},
      Phone: ${this.#phone}, 
      Alternative phone: ${this.#alternativPhone}, 
      Address: ${this.#address}
    `;
  }
}

module.exports = Contact;
