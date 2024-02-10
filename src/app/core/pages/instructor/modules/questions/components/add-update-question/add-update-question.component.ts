import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-add-update-question',
  templateUrl: './add-update-question.component.html',
  styleUrls: ['./add-update-question.component.scss']
})
export class AddUpdateQuestionComponent {
  addMode: boolean = true;
  updateMode: boolean =true;
  questionForm = new FormGroup({
    title: new FormControl(null,Validators.required),
    description: new FormControl(null,Validators.required),
    // options:{
      A: new FormControl(null,Validators.required),
      B: new FormControl(null,Validators.required),
      C: new FormControl(null,Validators.required),
      D: new FormControl(null,Validators.required),
    // } ,
    answer: new FormControl(null,Validators.required),
    difficulty: new FormControl(null,Validators.required),
    type: new FormControl(null,Validators.required),
  })
  
  constructor(
    public dialogRef: MatDialogRef<AddUpdateQuestionComponent>,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _QuestionsService:QuestionsService
  ){}

  onSubmit(data:FormGroup){
    this._QuestionsService.addQuestion(data.value)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
