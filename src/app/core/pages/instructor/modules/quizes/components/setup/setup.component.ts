import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SetupEndComponent } from '../setup-end/setup-end.component';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent {

  constructor(public dialogRef: MatDialogRef<SetupComponent>,
    private dialog:MatDialog
    ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
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
    this.onNoClick()
  }  

}
