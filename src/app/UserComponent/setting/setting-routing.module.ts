import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowdetailComponent } from './showdetail/showdetail.component';


import { EditprofileComponent } from './editprofile/editprofile.component';
import { PasswordComponent } from './password/password.component';

import { SettingComponent } from './setting.component';
import { TransacationlistComponent } from './transacationlist/transacationlist.component';

const routes: Routes = [{ path: '', component: SettingComponent ,
children :[
  {
    path : '',
    component : EditprofileComponent, 
  },
  {
    path : 'changepassword',
    component : PasswordComponent
  },
  {
    path : 'transacationlist',
    component : TransacationlistComponent
  },
  {
    path : 'transacation/:transaction_id',
    component : ShowdetailComponent
  }

]
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
