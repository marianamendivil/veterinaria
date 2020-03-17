import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pet-list/pet-list.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { NewPetComponent } from './new-pet/new-pet.component';
import { PetRecordComponent } from './pet-record/pet-record.component';
import { SearchComponent } from 'src/app/components/shared/search/search.component';
import { VisitListComponent } from 'src/app/components/visit-list/visit-list.component';

const petRoutes: Routes = [
  {
    path: '',
    component: PetsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'new', component: NewPetComponent, canActivate: [AuthGuard] },
  //{ path: 'visits', component: VisitListComponent, canActivate: [AuthGuard] },
  { path: ':id', component: PetRecordComponent, canActivate: [AuthGuard] }

  // { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(petRoutes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
