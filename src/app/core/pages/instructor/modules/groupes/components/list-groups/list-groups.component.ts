import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../sevice/groups.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateGroupComponent } from '../add-update-group/add-update-group.component';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.scss']
})
export class ListGroupsComponent implements OnInit {
  token: string | null = localStorage.getItem('userToken');
  constructor(
    private _GroupsService:GroupsService,
    private dialog:MatDialog
  ){}
  ngOnInit(){
    this.getAllGroups()
  }

  getAllGroups(){
    let params = {

    }
    this._GroupsService.onGetAllGroups(params).subscribe({
      next:(res)=>{
        console.log(res);
        
      }
    })
  }
  
  //setup dialog
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddUpdateGroupComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
