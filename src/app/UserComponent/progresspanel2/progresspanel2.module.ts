import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Progresspanel2RoutingModule } from './progresspanel2-routing.module';
import { Progresspanel2Component } from './progresspanel2.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [Progresspanel2Component],
  imports: [
    CommonModule,
    Progresspanel2RoutingModule,
    NgCircleProgressModule.forRoot({
    backgroundPadding: 8,
    radius: 20,
    space: -10,
    maxPercent: 100,
    unitsColor: "#ffffff",
    outerStrokeWidth: 7.5,
    outerStrokeColor: "white",
    innerStrokeWidth: 10,
    titleColor: "#ffffff",
    }),
  ]
})
export class Progresspanel2Module { }
