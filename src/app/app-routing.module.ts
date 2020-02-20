import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetsComponent } from './components/pets/pets.component';
import { MedicalRecordComponent } from './components/medical-record/medical-record.component';
import { PetRecordComponent } from './components/pet-record/pet-record.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'medicalRecord', component: MedicalRecordComponent },
  { path: 'petRecord/:id', component: PetRecordComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
