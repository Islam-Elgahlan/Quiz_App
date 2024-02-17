import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from '../../service/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-join-quiz',
  templateUrl: './join-quiz.component.html',
  styleUrls: ['./join-quiz.component.scss']
})
export class JoinQuizComponent {
  code: string = '';
  constructor(
    public dialogRef: MatDialogRef<JoinQuizComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _StudentService:StudentService,
    private toastr:ToastrService
  ){}
  joinQuiz(code:string){
    this._StudentService.onJoinQuiz(code).subscribe({
      next:(res)=>{
        console.log(res);
        
      },error:(err)=>{
        this.toastr.error(err.error.message,'Error!')
      },complete:()=>{
        this.onNoClick()
      }
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
