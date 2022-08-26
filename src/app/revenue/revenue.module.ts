import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueComponent } from './revenue.component';
@NgModule({
  declarations: [RevenueComponent],
  imports: [
    CommonModule,
    RevenueRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class RevenueModule { } 
