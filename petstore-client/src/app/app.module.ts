import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetAddComponent } from './pet-add/pet-add.component';
import { PetService } from 'src/app/services/pet.service';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetAddComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
