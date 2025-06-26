const petRepository = require("../repositories/petRepository");

async function getAllPets() {
  return await petRepository.getAll();
}

async function getPetById(id) {
  return await petRepository.getById(id);
}

async function addPet(pet) {
  return await petRepository.add(pet);
}

module.exports = {
  getAllPets,
  getPetById,
  addPet,
};
