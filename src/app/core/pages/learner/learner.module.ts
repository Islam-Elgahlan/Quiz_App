import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnerRoutingModule } from './learner-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LearnerRoutingModule,
    SharedModule
  ]
})
export class LearnerModule { }
