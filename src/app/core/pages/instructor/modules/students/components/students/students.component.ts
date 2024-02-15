import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateStudentsComponent } from '../add-update-students/add-update-students.component';
import { IStudents, IStudentsGroups } from '../../model/students';
import { GroupsService } from '../../../groupes/sevice/groups.service';
import { IGroup } from '../../../groupes/model/groups';
import { id_ID } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  studentList: IStudents | any;
  groupStudents: IStudents[] = [];
  groupDetails: IGroup | any;

  constructor(private _studentService: StudentsService, private dialog: MatDialog, private _GroupsService: GroupsService) { }

  ngOnInit(): void {
    // this.allStudentsWithoutGroups();
    this.allStudents();
  }

  // allStudentsWithoutGroups() {
  //   this._studentService.getAllStudentsWithoutGroup().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.studentList = res;
  //     }
  //   })
  // }


  allStudents() {
    this._studentService.getAllStudents().subscribe({
      next: (res) => {
        console.log(res);
        this.studentList = res;       
      }
    })
  }

  getGroupById(id: string) {
    this._GroupsService.onGetGroupById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.groupDetails = res;
        this.groupStudents = res.students;

      }
    })
  }




  //add update dialog
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddUpdateStudentsComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}

