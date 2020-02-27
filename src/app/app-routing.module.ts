import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetRecordComponent } from './components/pet-record/pet-record.component';
import { VisitComponent } from './components/visit/visit.component';
import { AuthGuard } from './services/auth.guard';
import { MedicalRecordsComponent } from './components/medical-records/medical-records.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pets', component: PetsComponent, canActivate: [AuthGuard] },
  { path: 'visit', component: VisitComponent, canActivate: [AuthGuard] },
  { path: 'medicalRecords', component: MedicalRecordsComponent, canActivate: [AuthGuard] },
  { path: 'petRecord/:id', component: PetRecordComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
