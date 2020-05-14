import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PetsModule } from './modules/pets-module/pets.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VisitsModule } from './modules/visits-module/visits.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/shared/search/search.component';
import { BackButtonModule } from './modules/back-button/back-button.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BackButtonModule,
    PetsModule,
    VisitsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
