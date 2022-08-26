import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [BudgetComponent],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    DragDropModule,
    NgCircleProgressModule.forRoot({}),
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BudgetModule { }
