import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubCategoryRoutingModule } from './subcategory-routing.module';
import { SubCategoryComponent } from './subcategory.component';
@NgModule({
  declarations: [SubCategoryComponent],
  imports: [
    CommonModule,
    SubCategoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SubCategoryModule { } 
