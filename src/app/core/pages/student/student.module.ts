import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { JoinQuizComponent } from './components/join-quiz/join-quiz.component';
import { ResultsStudentComponent } from './components/results-student/results-student.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizzesStudentComponent } from './components/quizzes-student/quizzes-student.component';
import { ViewResultsComponent } from './components/view-results/view-results.component';


@NgModule({
  declarations: [
    JoinQuizComponent,
    ResultsStudentComponent,
    QuizzesStudentComponent,
    ViewResultsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
