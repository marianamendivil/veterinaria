import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitComponent } from './visit/visit.component';
import { VisitListComponent } from './visit-list/visit-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisitsRoutingModule } from './visits-routing.module';
import { BackButtonModule } from '../back-button/back-button.module';

@NgModule({
  declarations: [
    VisitListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BackButtonModule,
    VisitsRoutingModule
  ]
})
export class VisitsModule { }
