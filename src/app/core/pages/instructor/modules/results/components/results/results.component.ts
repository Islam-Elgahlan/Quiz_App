import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewResultsComponent } from 'src/app/core/pages/student/components/view-results/view-results.component';
import { IAllResults } from 'src/app/core/pages/student/model/student';
import { StudentService } from 'src/app/core/pages/student/service/student.service';
import { IGroup } from '../../../groupes/model/groups';
import { GroupsService } from '../../../groupes/sevice/groups.service';
import { QuizzesService } from '../../../quizes/services/quizzes.service';
import { IQuizzes } from '../../../quizes/model/quizzes';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {


  groupName: string = '';
  studentList: number | any;
  groupId: string |any

  quizzeList: IQuizzes | any;
  resultsInstructor: IAllResults | any;


  constructor(private dialog: MatDialog, private _quizzesService: QuizzesService, private _StudentService: StudentService,
    private _GroupsService: GroupsService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGroupById(this.groupId);
    // this.getCompletedQuizzes()
    this.allResults();
  }

     allResults() {
    this._StudentService.getAllResults().subscribe({
      next: (res) => {
        console.log(res);
        this.resultsInstructor = res;

      }
    })
  }

  getCompletedQuizzes() {
    this._quizzesService.onGetlastFiveCompeletedQuizzes().subscribe({
      next: (res) => {
        console.log(res);
        this.quizzeList = res;

        this.groupId = res.group;
       
        this.getGroupById(this.groupId)
      },
    });
  }

 

  getGroupById(id: string) {
    this._GroupsService.onGetGroupById(id).subscribe({
      next: (res) => {
        console.log(res);

        this.groupName = res.name;
        console.log(this.groupName);

        this.studentList = res.students?.length;
        console.log(this.studentList);



      },
    });
  }

  // View
  openViewDialog(enterAnimationDuration: string, exitAnimationDuration: string, data: any, view: boolean): void {
    this.dialog.open(ViewResultsComponent, {
      width: '60%',
      data: { data, view },
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


}
