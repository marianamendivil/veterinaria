import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetsComponent } from './pets-module/pet-list/pet-list.component';
import { PetRecordComponent } from './pets-module/pet-record/pet-record.component';
import { VisitComponent } from './components/visit/visit.component';
import { AuthGuard } from './services/auth.guard';
import { NewPetComponent } from './pets-module/new-pet/new-pet.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'pets',
    component: PetsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'new', component: NewPetComponent, canActivate: [AuthGuard] },
      { path: 'pets/:id', component: PetRecordComponent }
    ]
  },
  { path: 'visit/:id', component: VisitComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
