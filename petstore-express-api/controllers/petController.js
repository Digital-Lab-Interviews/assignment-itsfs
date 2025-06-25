const express = require("express");
const router = express.Router();
const petService = require("../services/petService");
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
    const pet = toPet(req.body);
    const newPet = await petService.addPet(pet);
    res.status(201).json(new Pet(newPet));
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// Update pet
router.put("/:id", async (req, res) => {
  try {
    const pet = toPet({ ...req.body, id: req.params.id });
    const updatedPet = await petService.updatePet(req.params.id, pet);
    if (updatedPet) res.json(new Pet(updatedPet));
    else res.status(404).json({ message: "Pet not found" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// Delete pet
router.delete("/:id", async (req, res) => {
  const deleted = await petService.deletePet(req.params.id);
  if (deleted) res.json({ message: "Pet deleted" });
  else res.status(404).json({ message: "Pet not found" });
});

module.exports = router;
