import { SetupComponent } from './../setup/setup.component';
import { Component, Inject, OnInit } from '@angular/core';
import { SetupEndComponent } from '../setup-end/setup-end.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QuizzesService } from '../../services/quizzes.service';
import { IQuizzes } from '../../model/quizzes';
import { ActivatedRoute } from '@angular/router';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
})
export class QuizzesComponent implements OnInit {

  quizzeList: IQuizzes | any;
  quizzes: any;

  constructor(private dialog: MatDialog, private _quizzesService: QuizzesService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.allQuizze();
  }

  allQuizze() {
    this._quizzesService.getAllQuizze().subscribe({
      next: (res) => {
        console.log(res);
        this.quizzeList = res;

      }
    })
  }

  //setup dialog
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
  ): void {
    this.dialog.open(SetupComponent, {
      width: '60%',
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
    this._quizzesService.deleteQuizze(id).subscribe({
      next: (res) => {
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Error!');
      },
      complete: () => {
        this.allQuizze();
        this.toastr.success('Quiz Deleted Successfully');
      },
    });
  }

  getUpcommingQuizzes() {
    this._quizzesService.onGetFiveUpcommingQuizzes().subscribe({
      next: (res) => {
        console.log(res);
        this.quizzes = res;
      },
    });
  }

}
