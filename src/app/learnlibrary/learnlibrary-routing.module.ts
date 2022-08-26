import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnLibraryComponent } from './learnlibrary.component';

const routes: Routes = [{ path: '', component: LearnLibraryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnLibraryRoutingModule { }
