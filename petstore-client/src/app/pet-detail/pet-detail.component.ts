import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from 'src/app/services/pet.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css'],
})
export class PetDetailComponent implements OnInit, OnDestroy {

  pet: Pet;

  private readonly destroyed$ = new Subject<void>();

  constructor(
    private readonly petService: PetService,
    private readonly cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getPet();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getPet() {
    this.petService.getSelectedPet()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(pet => {
        this.pet = pet;
        this.cdRef.detectChanges();
      });
  }
}
