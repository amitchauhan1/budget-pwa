import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnBudgetRoutingModule } from './learn-budget-routing.module';
import { LearnBudgetComponent } from './learn-budget.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [LearnBudgetComponent],
  imports: [
    CommonModule,
    LearnBudgetRoutingModule,
    DragDropModule,
  ]
})
export class LearnBudgetModule { }
