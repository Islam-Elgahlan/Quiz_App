import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './components/students/students.component';
import { AddUpdateStudentsComponent } from './components/add-update-students/add-update-students.component';


@NgModule({
  declarations: [
    StudentsComponent,
    AddUpdateStudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
