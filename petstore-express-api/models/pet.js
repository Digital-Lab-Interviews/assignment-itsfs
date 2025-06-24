/**
 * @typedef {Object} Pet
 * @property {string} id
 * @property {string} name
 * @property {string} status
 */

class Pet {
  /**
   * @param {Object} data
   * @param {string} data.id
   * @param {string} data.name
   * @param {string} data.status
   */
  constructor({ id, name, status }) {
    this.id = id;
    this.name = name;
    this.status = status;
  }
}

module.exports = Pet;
