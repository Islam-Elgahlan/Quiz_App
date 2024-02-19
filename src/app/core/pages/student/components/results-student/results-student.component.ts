import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { ViewResultsComponent } from '../view-results/view-results.component';
import { MatDialog } from '@angular/material/dialog';
import { IAllResults } from '../../model/student';

@Component({
  selector: 'app-results-student',
  templateUrl: './results-student.component.html',
  styleUrls: ['./results-student.component.scss']
})
export class ResultsStudentComponent implements OnInit{

  resultsData:IAllResults[]|any;
  quizData:IAllResults|any

  constructor(private _StudentService:StudentService, private dialog: MatDialog,){}

  ngOnInit(): void {
    this.allResults()
  }

  allResults(){
    this._StudentService.getAllResults().subscribe({
      next:(res)=>{
        console.log(res);

        this.resultsData = res;
        console.log(this.resultsData);
        
      }
    })
  }

   // View
   openViewDialog(enterAnimationDuration: string, exitAnimationDuration: string, data: any, view:boolean): void {
    this.dialog.open(ViewResultsComponent, {
      width: '60%',
      data: {data,view},
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
