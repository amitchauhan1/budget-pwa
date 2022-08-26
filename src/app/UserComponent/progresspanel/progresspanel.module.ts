import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgresspanelRoutingModule } from './progresspanel-routing.module';
import { ProgresspanelComponent } from './progresspanel.component';


@NgModule({
  declarations: [ProgresspanelComponent],
  imports: [
    CommonModule,
    ProgresspanelRoutingModule
  ]
})
export class ProgresspanelModule { }
