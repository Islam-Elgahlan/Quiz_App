import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateStudentsComponent } from '../add-update-students/add-update-students.component';
import { IStudents, IStudentsGroups } from '../../model/students';
import { IGroup } from '../../../groupes/model/groups';
import { GroupsService } from '../../../groupes/sevice/groups.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})

export class StudentsComponent implements OnInit {
  studentList: IGroup[] | any;
  studentGroups: IStudents | any;
  groups: IGroup[] = [];
  groupName: string = '';
  // studentList: IStudents[] | any;

  constructor(
    private _studentService: StudentsService,
    private dialog: MatDialog,
    private _GroupsService: GroupsService
  ) {}

  ngOnInit(): void {
    // this.allStudentsWithoutGroups();
    this.allStudents();
    this.getAllGroups();
  }

  // allStudentsWithoutGroups() {
  //   this._studentService.getAllStudentsWithoutGroup().subscribe({
  //     next: (res) => {
  //       console.log(res);

  //     }
  //   })
  // }
  getAllGroups() {
    this._GroupsService.onGetAllGroups().subscribe({
      next: (res) => {
        this.groups = res;
      },
    });
  }
  getGroupById(id: string) {
    this._GroupsService.onGetGroupById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.groupName = res.name;
        this.studentList = res.students;
      },
    });
  }

  allStudents() {
    this._studentService.getAllStudents().subscribe({
      next: (res) => {
        console.log(res);
        this.studentGroups = res;
      },
    });
  }

  //add update dialog
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AddUpdateStudentsComponent, {
      width: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  // Pagination
  // handlePageEvent(e: PageEvent) {
  //   console.log(e);
  //   this.pageSize = e.pageSize
  //   this.pageNumber = e.pageIndex + 1
  //   this.allStudents()
  // }
}
