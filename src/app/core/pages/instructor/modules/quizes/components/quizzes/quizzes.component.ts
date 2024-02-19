import { SetupComponent } from './../setup/setup.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizzesService } from '../../services/quizzes.service';
import { IQuizzes } from '../../model/quizzes';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { ToastrService } from 'ngx-toastr';
import { GroupsService } from '../../../groupes/sevice/groups.service';
import { IGroup } from '../../../groupes/model/groups';
import { StudentsService } from '../../../students/services/students.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
})
export class QuizzesComponent implements OnInit {

  quizzeList: IQuizzes | any;
  quizzes: IQuizzes | any;
  groups: IGroup[] = [];

  constructor(private dialog: MatDialog, private _quizzesService: QuizzesService,
    private toastr: ToastrService, private _GroupsService: GroupsService, private _studentService: StudentsService,) { }

  ngOnInit(): void {
    this.getUpcommingQuizzes();
    this.getCompletedQuizzes();
  }

  getUpcommingQuizzes() {
    this._quizzesService.onGetFiveUpcommingQuizzes().subscribe({
      next: (res) => {
        console.log(res);
        this.quizzes = res;
      },
    });
  }

  getCompletedQuizzes() {
    this._quizzesService.onGetlastFiveCompeletedQuizzes().subscribe({
      next: (res) => {
        console.log(res);
        this.quizzeList = res;
      },
    });
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
        this.getUpcommingQuizzes();
        this.toastr.success('Quiz Deleted Successfully');
      },
    });
  }

}
