const express = require("express");
const router = express.Router();
const petService = require("../services/petService");
const utilService = require("../services/utilService");
const Pet = require("../models/pet");

// Helper to validate and create Pet instance
function toPet(data) {
  if (!data.name) {
    throw new Error("Missing required pet fields");
  }
  return new Pet({ id: data.id, name: data.name, status: data.status });
}

// Get all pets
router.get("/", async (req, res) => {
  const pets = await petService.getAllPets();
  res.json(pets.map((p) => new Pet(p)));
});

// Get pet by ID
router.get("/:id", async (req, res) => {
  const pet = await petService.getPetById(req.params.id);
  if (pet) res.json(new Pet(pet));
  else res.status(404).json({ message: "Pet not found" });
});

// Add new pet
router.post("/", async (req, res) => {
  try {
    const id = utilService.generateUUID();
    const reqData = { ...req.body, id };
    const pet = toPet(reqData);
    const newPet = await petService.addPet(pet);
    res.status(201).json(new Pet(newPet));
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = router;
