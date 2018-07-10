import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from "src/app/services/pet.service";

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  private pet: Pet;

  constructor(
    private petService: PetService) { }

  ngOnInit() {
    this.getPet();
  }

  getPet() {
    this.petService.getSelectedPet()
      .subscribe(pet => this.pet = pet);
  }
}
