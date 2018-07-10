import { Component } from '@angular/core';
import { PetService } from "src/app/services/pet.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to RBC Pet Store!';
  isAdd: boolean;

  constructor(
    private petService: PetService) { }

  ngOnInit() {
    this.getPets();
  }

  getPets() {
    this.petService.getSelectedPet()
      .subscribe(pet => this.isAdd = false);
  }  

  addNewPet() {
    this.petService.setSelectedPet(null);
    this.isAdd = true;
  }
}
