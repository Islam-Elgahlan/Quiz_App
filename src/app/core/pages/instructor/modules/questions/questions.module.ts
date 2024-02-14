import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './components/questions/questions.component';
import { AddUpdateQuestionsComponent } from './components/add-update-questions/add-update-questions.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    AddUpdateQuestionsComponent,
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
