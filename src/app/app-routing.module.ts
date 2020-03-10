import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VisitComponent } from './components/visit/visit.component';
import { AuthGuard } from './services/auth.guard';
import { PetsRoutingModule } from './modules/pets-module/pets-routing.module';
import { PetsModule } from './modules/pets-module/pets.module';
import { BackButtonComponent } from './components/shared/back-button/back-button.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'visit/:id', component: VisitComponent, canActivate: [AuthGuard] },
  { path: 'pets', loadChildren: () => import('./modules/pets-module/pets.module').then(m => m.PetsModule)},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
