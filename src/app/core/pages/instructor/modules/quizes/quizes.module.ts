import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { SetupComponent } from './components/setup/setup.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';

@NgModule({
  declarations: [
    QuizzesComponent,
    SetupComponent,
    QuizDetailsComponent,
  ],
  imports: [
    CommonModule,
    QuizesRoutingModule
  ]
})
export class QuizesModule { }
