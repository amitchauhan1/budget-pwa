import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametervalueComponent } from './parametervalue.component';

const routes: Routes = [{ path: '', component: ParametervalueComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametervalueRoutingModule { }
