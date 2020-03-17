import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VisitComponent } from './components/visit/visit.component';
import { AuthGuard } from './services/auth.guard';
import { VisitListComponent } from './components/visit-list/visit-list.component';
import { SearchComponent } from './components/shared/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'visit/:id', component: VisitComponent, canActivate: [AuthGuard] },
  { path: 'pets', loadChildren: () => import('./modules/pets-module/pets.module').then(m => m.PetsModule)},
  { path: 'visits', component: VisitListComponent, canActivate: [AuthGuard] },
  { path: 'search/:id', component: SearchComponent, canActivate: [AuthGuard] },
  //{ path: 'pets/:keyword', component: SearchComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
