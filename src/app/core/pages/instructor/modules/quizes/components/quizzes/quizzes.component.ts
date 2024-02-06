import { SetupComponent } from './../setup/setup.component';
import { Component } from '@angular/core';
import { SetupEndComponent } from '../setup-end/setup-end.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent {
  constructor(private dialog:MatDialog){}
  openSetupEndDialog(): void{
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

//setup dialog
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SetupComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  


>>>>>>> 8af9df43e2bfb22b959dabd1b43b51f4d76a07df
}
