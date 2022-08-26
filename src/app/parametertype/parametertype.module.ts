import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParametertypeRoutingModule } from './parametertype-routing.module';
import { ParametertypeComponent } from './parametertype.component';
@NgModule({
  declarations: [ParametertypeComponent],
  imports: [
    CommonModule,
    ParametertypeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ParametertypeModule { } 
