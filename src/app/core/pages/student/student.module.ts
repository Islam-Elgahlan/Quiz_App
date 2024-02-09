import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardStudentComponent } from './components/dashboard-student/dashboard-student.component';


@NgModule({
  declarations: [
    DashboardStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
