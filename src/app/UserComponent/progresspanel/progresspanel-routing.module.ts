import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgresspanelComponent } from './progresspanel.component';

const routes: Routes = [{ path: '', component: ProgresspanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgresspanelRoutingModule { }
