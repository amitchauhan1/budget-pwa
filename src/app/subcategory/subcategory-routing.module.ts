import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubCategoryComponent } from './subcategory.component';

const routes: Routes = [{ path: '', component: SubCategoryComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoryRoutingModule { }
