import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    SharedModule
  ]
})
export class InstructorModule { }
