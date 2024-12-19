import { Component, Input, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
})
export class PetListComponent {

  @Input()
  pets: Pet[] = [];

  @Input()
  selectedPet: Pet | null = null;

  @Output()
  onPetSelect: EventEmitter<Pet> = new EventEmitter();

  @Output()
  onPetDelete: EventEmitter<Pet> = new EventEmitter();

  constructor() {
  }

  select(pet: Pet) {
    this.onPetSelect.emit(pet);
  }

  delete(pet: Pet): void {
    this.onPetDelete.emit(pet);
  }
}
