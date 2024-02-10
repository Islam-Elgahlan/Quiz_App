import { Component } from '@angular/core';
import { AddUpdateQuestionComponent } from '../add-update-question/add-update-question.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  constructor(
    private dialog:MatDialog,
  ){}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddUpdateQuestionComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
