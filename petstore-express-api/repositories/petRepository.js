/* * Pet Repository
 * Handles CRUD operations for pets in the database.
 * Uses JSON file as a simple database.
 */
const fs = require("fs-extra");
const path = require("path");

const dbPath = path.join(__dirname, "../data/db.json");

/** * Retrieves all pets from the database.
 * @returns {Promise<Array>} An array of pet objects.
 */
async function getAll() {
  const db = await fs.readJson(dbPath);
  return db.pets;
}

/** * Retrieves a pet by its ID from the database.
 * @param {string} id - The ID of the pet to retrieve.
 * @returns {Promise<Object|null>} The pet object if found, otherwise null.
 */
async function getById(id) {
  const db = await fs.readJson(dbPath);
  return db.pets.find((p) => p.id === id);
}

/** * Adds a new pet to the database.
 * @param {Object} pet - The pet object to add.
 * @returns {Promise<Object>} The added pet object with an assigned ID.
 */
async function add(pet) {
  const db = await fs.readJson(dbPath);
  db.pets.push(pet);
  await fs.writeJson(dbPath, db, { spaces: 2 });
  return pet;
}

module.exports = {
  getAll,
  getById,
  add,
};
