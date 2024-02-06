import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-setup-end',
  templateUrl: './setup-end.component.html',
  styleUrls: ['./setup-end.component.scss']
})
export class SetupEndComponent {
  constructor(public dialogRef: MatDialogRef<SetupEndComponent>){}
  onClose(){
    this.dialogRef.close();
  }
}
