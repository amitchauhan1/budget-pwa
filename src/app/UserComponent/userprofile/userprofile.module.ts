import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { UserprofileComponent } from './userprofile.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserprofileComponent],
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserprofileModule { }
