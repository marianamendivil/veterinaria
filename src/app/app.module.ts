import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { MedicalRecordComponent } from './components/medical-record/medical-record.component';
import { PetRecordComponent } from './components/pet-record/pet-record.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PetsComponent,
    PetCardComponent,
    MedicalRecordComponent,
    PetRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
