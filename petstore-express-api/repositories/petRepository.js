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

/** * Updates an existing pet in the database.
 * @param {string} id - The ID of the pet to update.
 * @param {Object} pet - The updated pet object.
 * @returns {Promise<Object|null>} The updated pet object or null if not found.
 */
async function update(id, pet) {
  const db = await fs.readJson(dbPath);
  const idx = db.pets.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  db.pets[idx] = { ...db.pets[idx], ...pet, id };
  await fs.writeJson(dbPath, db, { spaces: 2 });
  return db.pets[idx];
}

/** * Deletes a pet from the database by its ID.
 * @param {string} id - The ID of the pet to delete.
 * @returns {Promise<boolean>} True if the pet was deleted, false if not found.
 */
async function deletePet(id) {
  const db = await fs.readJson(dbPath);
  const idx = db.pets.findIndex((p) => p.id === id);
  if (idx === -1) return false;
  db.pets.splice(idx, 1);
  await fs.writeJson(dbPath, db, { spaces: 2 });
  return true;
}

module.exports = {
  getAll,
  getById,
  add,
  update,
  delete: deletePet,
};
