import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from 'src/app/components/shared/back-button/back-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisitComponent } from '../visits-module/visit/visit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BackButtonComponent,
    VisitComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    VisitComponent,
    BackButtonComponent
  ]
})
export class BackButtonModule {}
