import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetsComponent } from './components/pets/pets.component';
import { MedicalRecordComponent } from './components/medical-record/medical-record.component';
import { PetRecordComponent } from './components/pet-record/pet-record.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetsComponent, canActivate: [AuthGuard] },
  { path: 'medicalRecord', component: MedicalRecordComponent, canActivate: [AuthGuard] },
  { path: 'petRecord/:id', component: PetRecordComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
