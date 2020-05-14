import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetsRoutingModule } from './pets-routing.module';

import { PetsComponent } from './pet-list/pet-list.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import { PetRecordComponent } from './pet-record/pet-record.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { CommonModule } from '@angular/common';
import { VisitsModule } from '../visits-module/visits.module';
import { BackButtonModule } from '../back-button/back-button.module';

@NgModule({
  declarations: [
    PetsComponent,
    PetCardComponent,
    MedicalRecordComponent,
    PetRecordComponent,
    NewPetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BackButtonModule,
    PetsRoutingModule
  ],
})
export class PetsModule { }
