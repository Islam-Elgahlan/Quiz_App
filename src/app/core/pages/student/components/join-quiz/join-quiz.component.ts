import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from '../../service/student.service';
import { ToastrService } from 'ngx-toastr';
import { IJoin } from '../../model/student';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SetupEndComponent } from '../../../instructor/modules/quizes/components/setup-end/setup-end.component';

@Component({
  selector: 'app-join-quiz',
  templateUrl: './join-quiz.component.html',
  styleUrls: ['./join-quiz.component.scss']
})
export class JoinQuizComponent {
  // code: any;
  joinQuizForm=new FormGroup({
    code: new FormControl(null,Validators.required)
  })
  constructor(
    public dialogRef: MatDialogRef<JoinQuizComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _StudentService:StudentService,
    private toastr:ToastrService
  ){}

  joinQuiz(data:FormGroup){
    this._StudentService.onJoinQuiz(data.value).subscribe({
      next:(res)=>{
        console.log(res);
        this.openSetupEndDialog(res)
      },error:(err)=>{
        this.toastr.error(err.error.message,'Error!')
      },complete:()=>{
        this.onNoClick()
      }
    })
  }
  openSetupEndDialog(dataEnd: string): void {
    const dialogRef = this.dialog.open(SetupEndComponent, {
      data: dataEnd,
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result.id);
      }
    });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
