import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';

import { EditprofileComponent } from './editprofile/editprofile.component';
import { PasswordComponent } from './password/password.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ConfirmDialogService } from 'src/app/_helper/confirm-dialog/confirm-dialog.service';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { TransacationlistComponent } from './transacationlist/transacationlist.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [SettingComponent, EditprofileComponent, PasswordComponent, TransacationlistComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // 
    }),
    
  ],
  providers :[
    ConfirmDialogService
  ]
})
export class SettingModule { }
