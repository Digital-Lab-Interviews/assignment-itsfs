import { Component, OnInit, Output } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from "../services/pet.service";

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  private pets: Pet[];
  private selectedPet: Pet;

  constructor(
    private petService: PetService) { }

  ngOnInit() {
    this.getPets();
    this.getSelectedPet();
  }

  getPets() {
    this.petService.getPets()
      .subscribe(pets => this.pets = pets);
  }
  getSelectedPet() {
    this.petService.getSelectedPet()
      .subscribe(pet => this.selectedPet = pet);
  }

  onSelect(pet: Pet) {
    this.petService.setSelectedPet(pet);
  }

  delete(pet: Pet): void {
    this.petService
      .deletePet(pet)
      .subscribe(_ => this.selectedPet = null);
  }
}
