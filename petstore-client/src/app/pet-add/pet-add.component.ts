import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/model/pet';
import { Status, STATUSES } from 'src/app/model/status';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css'],
})
export class PetAddComponent implements OnInit {

  @Output()
  onCancel: EventEmitter<any> = new EventEmitter();

  @Output()
  onSubmit: EventEmitter<Pet> = new EventEmitter();

  model: Pet;

  readonly statuses: Status[] = STATUSES;

  constructor() {
  }

  ngOnInit() {
    this.reset();
  }

  cancel() {
    this.onCancel.emit();
  }

  reset() {
    this.model = new Pet();
  }

  submit() {
    this.onSubmit.emit(this.model);
  }
}
