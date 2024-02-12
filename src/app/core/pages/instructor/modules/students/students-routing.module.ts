import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  {path:'', component:StudentsComponent},
  {path:'student', component:StudentsComponent},
  // {path:'student/:id', component:StudentsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
