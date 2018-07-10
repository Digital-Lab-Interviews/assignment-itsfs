import { Component, OnInit } from '@angular/core';
import { PetService } from "src/app/services/pet.service";
import { Pet } from "src/app/model/pet";

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {
  model: Pet;
  statuses: string[];

  constructor(
    private petService: PetService) { }

  ngOnInit() {
    this.model = new Pet();
    this.statuses = this.petService.getStatuses();
  }

  onSubmit() {
    this.petService
      .addPet(this.model)
      .subscribe(() => this.model = new Pet());
  }
}
