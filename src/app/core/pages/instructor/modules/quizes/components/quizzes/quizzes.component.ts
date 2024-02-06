import { Component } from '@angular/core';
import { SetupEndComponent } from '../setup-end/setup-end.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent {
  constructor(private dialog:MatDialog){}
  openDialog(): void{
      const dialogRef = this.dialog.open(SetupEndComponent, {
        data: {},
        width: '30%'
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          console.log(result.id);
        }
      });
    }  
}
