import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SettingModule { } 
