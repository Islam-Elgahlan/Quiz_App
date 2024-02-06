import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent {

  constructor(public dialogRef: MatDialogRef<SetupComponent>,) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

}
