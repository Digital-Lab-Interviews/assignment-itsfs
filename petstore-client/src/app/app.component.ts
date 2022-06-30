import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  isAdd: boolean;

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
      .subscribe(selectedPet => {
        if (selectedPet !== null) {
          this.isAdd = false;
          this.cdRef.detectChanges();
        }
      });
  }

  addNewPet() {
    this.petService.clearSelectedPet();
    this.isAdd = true;
  }
}
