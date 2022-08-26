import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule,
  ]
})
export class NotificationModule { } 
