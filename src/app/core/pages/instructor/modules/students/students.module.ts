import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './components/students/students.component';
import { AddUpdateStudentsComponent } from './components/add-update-students/add-update-students.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddToGroupComponent } from './components/add-to-group/add-to-group.component';


@NgModule({
  declarations: [
    StudentsComponent,
    AddUpdateStudentsComponent,
    AddToGroupComponent,
    
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ]
})
export class StudentsModule { }
