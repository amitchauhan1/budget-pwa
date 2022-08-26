import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnBudgetComponent } from './learn-budget.component';

const routes: Routes = [{ path: '', component: LearnBudgetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnBudgetRoutingModule { }
