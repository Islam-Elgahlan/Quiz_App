import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuizzesService } from '../../services/quizzes.service';

@Component({
  selector: 'app-setup-end',
  templateUrl: './setup-end.component.html',
  styleUrls: ['./setup-end.component.scss'],
})
export class SetupEndComponent {

  constructor( 
    public dialogRef: MatDialogRef<SetupEndComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ){}
 

  onClose() {
    this.dialogRef.close();
  }

}
