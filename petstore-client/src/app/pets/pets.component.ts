import { Component, OnDestroy, OnInit } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from '../services/pet.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit, OnDestroy {
  pets: Pet[];
  selectedPet: Pet;

  private readonly destroyed$ = new Subject<void>();

  constructor(
    private petService: PetService) {
  }

  ngOnInit() {
    this.getPets();
    this.getSelectedPet();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getPets() {
    this.petService.getPets()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(pets => this.pets = pets);
  }

  getSelectedPet() {
    this.petService.getSelectedPet()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(pet => this.selectedPet = pet);
  }

  onSelect(pet: Pet) {
    this.petService.setSelectedPet(pet);
  }

  delete(pet: Pet): void {
    this.petService
      .deletePet(pet)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(_ => this.petService.clearSelectedPet());
  }
}
