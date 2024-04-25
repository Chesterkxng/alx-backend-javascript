export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * get the code
   */
  get code() {
    return this._code;
  }

  /**
   * set the currency's code
   */
  set code(code) {
    this._code = code;
  }

  /**
   * get the currency's name
   */
  get name() {
    return this._name;
  }

  /**
   * set the currency's name
   */
  set name(name) {
    this._name = name;
  }

  /**
   * display information name (code) format
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
