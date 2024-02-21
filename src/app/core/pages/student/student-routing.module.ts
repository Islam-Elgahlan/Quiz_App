import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsStudentComponent } from './components/results-student/results-student.component';
import { QuizzesStudentComponent } from './components/quizzes-student/quizzes-student.component';
import { AnswerQuestionsComponent } from './components/answer-questions/answer-questions.component';

const routes: Routes = [
  {path:'',redirectTo:'quizzes',pathMatch:'full'},
  {path:'quizzes',component:QuizzesStudentComponent},
  {path:'answer/:id',component:AnswerQuestionsComponent},
  {path:'results',component:ResultsStudentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
