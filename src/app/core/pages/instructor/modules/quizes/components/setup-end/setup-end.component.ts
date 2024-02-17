import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IQuizzes } from '../../model/quizzes';

@Component({
  selector: 'app-setup-end',
  templateUrl: './setup-end.component.html',
  styleUrls: ['./setup-end.component.scss'],
})
export class SetupEndComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<SetupEndComponent>, @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
    // console.log(this.code);
    
  }

  // code:string=this.data;
  


  onClose() {
    this.dialogRef.close();
  }
  
}
