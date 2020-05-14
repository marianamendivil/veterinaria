import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { SearchComponent } from './components/shared/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pets', loadChildren: () => import('./modules/pets-module/pets.module').then(m => m.PetsModule)},
  { path: 'visits', loadChildren: () => import('./modules/visits-module/visits.module').then(m => m.VisitsModule) },
  { path: 'search/:id', component: SearchComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
