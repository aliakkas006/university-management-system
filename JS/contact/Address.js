class Address {
  #id;
  #roadNo;
  #city;
  #postalCode;
  #region;
  #country;

  constructor({ id, roadNo, city, postalCode, region, country }) {
    this.#id = id;
    this.#roadNo = roadNo || '';
    this.#city = city || '';
    this.#postalCode = postalCode || null;
    this.#region = region || '';
    this.#country = country || '';
  }

  get id() {
    return this.#id;
  }

  get roadNo() {
    return this.#roadNo;
  }

  set roadNo(value) {
    this.roadNo = value;
  }

  get city() {
    return this.#city;
  }

  set city(value) {
    this.#city = value;
  }

  get postalCode() {
    return this.#postalCode;
  }

  set postalCode(value) {
    this.#postalCode = value;
  }

  get region() {
    return this.#region;
  }

  set region(value) {
    this.#region = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }

  toString() {
    return `
        Address ID: ${this.#id},
        Road no: ${this.#roadNo},
        City: ${this.#city},
        Postal Code: ${this.#postalCode}, 
        Region: ${this.#region},
        Country: ${this.#country},
     `;
  }
}

module.exports = Address;
