import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [PlanComponent],
  imports: [
    CommonModule,
    PlanRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
  ]
})
export class PlanModule { } 
