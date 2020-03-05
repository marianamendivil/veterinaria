import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PetsComponent } from './pet-list/pets.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import { PetRecordComponent } from './pet-record/pet-record.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { BrowserModule } from '@angular/platform-browser';
import { VisitComponent } from '../components/visit/visit.component';

@NgModule({
  declarations: [
    PetsComponent,
    PetCardComponent,
    MedicalRecordComponent,
    PetRecordComponent,
    NewPetComponent,
    VisitComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule
  ],
})
export class PetsModule { }
