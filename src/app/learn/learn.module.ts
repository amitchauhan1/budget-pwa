import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LearnRoutingModule } from './learn-routing.module';
import { LearnComponent } from './learn.component';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [LearnComponent],
  imports: [
    CommonModule,
    LearnRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule,
  ]
})
export class LearnModule { } 
