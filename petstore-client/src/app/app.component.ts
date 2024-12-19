import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/model/pet';
import { Subject, takeUntil, finalize } from 'rxjs';

type PetAction = 'none' | 'add';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  private readonly destroyed$ = new Subject<void>();

  petAction: PetAction = 'none';

  pets: Pet[] = [];

  selectedPet: Pet | null = null;

  constructor(
    private readonly petService: PetService,
    private readonly cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getPets();
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

  addPet(pet: Pet) {
    this.petService
      .addPet(pet)
      .pipe(
        takeUntil(this.destroyed$),
        finalize(() => this.closeAddPet())
      )
      .subscribe();
  }

  deletePet(pet: Pet) {
    this.petService
      .deletePet(pet)
      .pipe(
        takeUntil(this.destroyed$),
        finalize(() => this.clearSelectedPet())
      )
      .subscribe();
  }

  openAddPet() {
    this.clearSelectedPet();
    this.petAction = 'add';
  }

  closeAddPet() {
    if (this.petAction === 'add') {
      this.petAction = 'none';
    }
  }

  selectPet(pet: Pet) {
    this.selectedPet = pet;
  }

  clearSelectedPet() {
    this.selectedPet = null;
  }
}
