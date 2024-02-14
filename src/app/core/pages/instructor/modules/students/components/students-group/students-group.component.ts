import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GroupsService } from '../../../groupes/sevice/groups.service';
import { IStudents, IStudentsGroups } from '../../model/students';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students-group',
  templateUrl: './students-group.component.html',
  styleUrls: ['./students-group.component.scss']
})
export class StudentsGroupComponent {

  studentList:IStudents[]|any;
  groups:IStudentsGroups|any;
  studentGroups:IStudents|any;

    constructor(private _studentService: StudentsService, private toastr: ToastrService, 
     private _GroupsService:GroupsService, private _Router: Router, private dialog:MatDialog){}

  allStudents(){
    this._studentService.getAllStudents().subscribe({
      next:(res)=>{
        console.log(res);
        this.groups = res;
      }
    })
  }

}
