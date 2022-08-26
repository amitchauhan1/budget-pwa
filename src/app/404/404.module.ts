import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundRoutingModule } from './404-routing.module';
import { PagenotfoundComponent } from './404.component';

@NgModule({
  declarations: [PagenotfoundComponent],
  imports: [
    CommonModule,
    PagenotfoundRoutingModule,
  ]
})
export class PagenotfoundModule { } 
