import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStudents } from 'src/app/core/pages/instructor/modules/students/model/students';
import { StudentsService } from 'src/app/core/pages/instructor/modules/students/services/students.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  studentId:string='';
  student: IStudents|undefined;
  constructor(
    private _StudentsService:StudentsService,
    private ActivatedRoute:ActivatedRoute
  ){
    this.student = this.ActivatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.getStudentById()
  }
  getStudentById(){    
    this._StudentsService.getStudentById(this.ActivatedRoute.snapshot.params['id']).subscribe({
      next:(res)=>{
        console.log(res);
        this.student=res
      }
    })
  }
}
