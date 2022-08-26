import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LearnLibraryRoutingModule } from './learnlibrary-routing.module';
import { LearnLibraryComponent } from './learnlibrary.component';
import { DndDirective } from './learnlibrary.directive';

@NgModule({
  declarations: [LearnLibraryComponent,DndDirective],
  imports: [
    CommonModule,
    LearnLibraryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LearnLibraryModule { } 
