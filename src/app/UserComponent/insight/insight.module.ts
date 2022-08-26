import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { InsightRoutingModule } from './insight-routing.module';
import { InsightComponent } from './insight.component';


@NgModule({
  declarations: [InsightComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    InsightRoutingModule
  ]
})
export class InsightModule { }
