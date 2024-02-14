import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateStudentsComponent } from '../add-update-students/add-update-students.component';
import { IStudents, IStudentsGroups } from '../../model/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  studentList: IStudents[] | any;
  studentGroups: IStudents | any

  constructor(private _studentService: StudentsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.allStudentsWithoutGroups();
    this.allStudents();
  }

  allStudentsWithoutGroups() {
    this._studentService.getAllStudentsWithoutGroup().subscribe({
      next: (res) => {
        console.log(res);

      }
    })
  }


  allStudents() {
    this._studentService.getAllStudents().subscribe({
      next: (res) => {
        console.log(res);
        this.studentGroups = res;
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

