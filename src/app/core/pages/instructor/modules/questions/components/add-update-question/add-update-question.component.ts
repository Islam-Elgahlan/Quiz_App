import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-update-question',
  templateUrl: './add-update-question.component.html',
  styleUrls: ['./add-update-question.component.scss']
})
export class AddUpdateQuestionComponent {
  addMode: boolean = true;
  updateMode: boolean =true;
  questionForm = new FormGroup({

  })
  constructor(
    public dialogRef: MatDialogRef<AddUpdateQuestionComponent>,
    private dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
