import { SetupComponent } from './../setup/setup.component';
import { Component, OnInit } from '@angular/core';
import { SetupEndComponent } from '../setup-end/setup-end.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QuizzesService } from '../../services/quizzes.service';
import { IQuizzes } from '../../model/quizzes';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit{

  quizzeList:IQuizzes|any;

  constructor(private dialog:MatDialog, private _quizzesService:QuizzesService,){}

  ngOnInit(): void {
    this.allQuizze();
  }

  allQuizze(){
    this._quizzesService.getAllQuizze().subscribe({
      next:(res)=>{
        console.log(res);
        this.quizzeList = res;
        
      }
    })
  }

//setup dialog
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SetupComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
