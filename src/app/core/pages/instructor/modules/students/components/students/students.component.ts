import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IStudents } from '../../model/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{

  studentList:IStudents|any;
  studentGroups:IStudents|any;

  constructor(private _studentService: StudentsService, private toastr: ToastrService, private _Router: Router){}

  ngOnInit(): void {
    this.allStudents();
    this.allStudentsGroups();
  }

  allStudents(){
    this._studentService.getAllStudentsWithoutGroup().subscribe({
      next:(res)=>{
        console.log(res);
        this.studentList = res;
      }
    })
  }

  allStudentsGroups(){
    this._studentService.getAllStudents().subscribe({
      next:(res)=>{
        console.log(res);
        this.studentGroups = res;
      }
    })
  }

}
