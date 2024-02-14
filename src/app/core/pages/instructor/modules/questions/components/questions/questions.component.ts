import { QuestionsService } from './../../services/questions.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateQuestionsComponent } from './../add-update-questions/add-update-questions.component';
import { Component, OnInit } from '@angular/core';
import { IQuestions } from '../../model/questions';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: IQuestions | any;
  constructor(private _questionService: QuestionsService, private dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.allQuestions();
  }

  allQuestions() {
    this._questionService.getAllQuestions().subscribe({
      next: (res) => {
        console.log(res);
        this.questions = res;

      }
    })
  }


  //add 
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddUpdateQuestionsComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  // update 
  openEditDialog(enterAnimationDuration: string, exitAnimationDuration: string, data: any): void {
    this.dialog.open(AddUpdateQuestionsComponent,
      {
        width: '60%',
        data: data._id,
        enterAnimationDuration,
        exitAnimationDuration,
      }
    );
  }
  // View
  openViewDialog(enterAnimationDuration: string, exitAnimationDuration: string, questions: IQuestions): void {
    this.dialog.open(AddUpdateQuestionsComponent, {
      width: '60%',
      data: questions,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  //delete group
  openDeleteDialog(questionData: any): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: questionData,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteRooms(result._id);
      }
    });
  }
  deleteRooms(id: string) {
    this._questionService.deleteQuestion(id).subscribe({
      next: (res) => {
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Error!');
      },
      complete: () => {
        this.allQuestions();
        this.toastr.success('Question Deleted Successfully');
      },
    });
  }

}
