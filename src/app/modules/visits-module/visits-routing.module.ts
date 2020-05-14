import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { VisitComponent } from './visit/visit.component';
import { VisitListComponent } from './visit-list/visit-list.component';

const visitRoutes: Routes = [
  {
    path: '',
    component: VisitListComponent,
    canActivate: [AuthGuard]
  },
  { path: ':id', component: VisitComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(visitRoutes)],
  exports: [RouterModule]
})
export class VisitsRoutingModule { }
