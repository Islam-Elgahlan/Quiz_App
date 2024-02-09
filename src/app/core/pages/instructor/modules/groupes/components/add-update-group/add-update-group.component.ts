import { Component } from '@angular/core';
import { SetupEndComponent } from '../../../quizes/components/setup-end/setup-end.component';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
DialogRef
@Component({
  selector: 'app-add-update-group',
  templateUrl: './add-update-group.component.html',
  styleUrls: ['./add-update-group.component.scss']
})
export class AddUpdateGroupComponent {
  constructor(
    public dialogRef: MatDialogRef<AddUpdateGroupComponent>,
    private dialog:MatDialog
  ){}
  onNoClick(): void {
    this.dialogRef.close();
  }
  openSetupEndDialog(): void{
    const dialogRef = this.dialog.open(SetupEndComponent, {
      data: {},
      width: '30%'
    });
    dialogRef.afterClosed().subscribe((result:any) => {
      if(result){
        console.log(result.id);
      }
    });
    this.onNoClick()
  }  
}
