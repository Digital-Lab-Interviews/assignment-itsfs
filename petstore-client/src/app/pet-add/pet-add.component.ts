import { Component, OnDestroy, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/model/pet';
import { Status, STATUSES } from '../model/status';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css'],
})
export class PetAddComponent implements OnInit, OnDestroy {
  model: Pet;
  readonly statuses: Status[] = STATUSES;

  private readonly destroyed$ = new Subject<void>();

  constructor(private readonly petService: PetService) {
  }

  ngOnInit() {
    this.model = new Pet();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onReset() {
    this.model = new Pet();
  }

  onSubmit() {
    this.petService
      .addPet(this.model)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.model = new Pet());
  }
}
