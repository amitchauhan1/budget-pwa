import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepRoutingModule } from './step-routing.module';
import { StepComponent } from './step.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [StepComponent],
  imports: [
    CommonModule,
    StepRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
  ]
})
export class StepModule { } 
