import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Progresspanel2Component } from './progresspanel2.component';

const routes: Routes = [{ path: '', component: Progresspanel2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Progresspanel2RoutingModule { }
