import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentsGroupComponent } from './components/students-group/students-group.component';

const routes: Routes = [
  {path:'', component:StudentsComponent},
  {path:'student', component:StudentsComponent},
  {path:'student/:_id', component:StudentsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
