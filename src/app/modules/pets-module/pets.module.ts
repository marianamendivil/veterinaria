import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetsRoutingModule } from './pets-routing.module';

import { PetsComponent } from './pet-list/pet-list.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import { PetRecordComponent } from './pet-record/pet-record.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { VisitComponent } from 'src/app/components/visit/visit.component';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from 'src/app/components/shared/back-button/back-button.component';

@NgModule({
  declarations: [
    PetsComponent,
    PetCardComponent,
    MedicalRecordComponent,
    PetRecordComponent,
    NewPetComponent,
    VisitComponent,
    BackButtonComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      PetsRoutingModule
  ],
})
export class PetsModule { }
