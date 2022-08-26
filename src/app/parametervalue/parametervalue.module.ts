import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParametervalueRoutingModule } from './parametervalue-routing.module';
import { ParametervalueComponent } from './parametervalue.component';
@NgModule({
  declarations: [ParametervalueComponent],
  imports: [
    CommonModule,
    ParametervalueRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ParametervalueModule { } 
