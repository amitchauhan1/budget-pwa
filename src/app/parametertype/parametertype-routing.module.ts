import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametertypeComponent } from './parametertype.component';

const routes: Routes = [{ path: '', component: ParametertypeComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametertypeRoutingModule { }
