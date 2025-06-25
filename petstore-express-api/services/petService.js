const petRepository = require("../repositories/petRepository");
const { v4: uuidv4 } = require("uuid");

async function getAllPets() {
  return await petRepository.getAll();
}

async function getPetById(id) {
  return await petRepository.getById(id);
}

async function addPet(pet) {
  pet.id = uuidv4();
  return await petRepository.add(pet);
}

async function deletePet(id) {
  return await petRepository.delete(id);
}

module.exports = {
  getAllPets,
  getPetById,
  addPet,
};
