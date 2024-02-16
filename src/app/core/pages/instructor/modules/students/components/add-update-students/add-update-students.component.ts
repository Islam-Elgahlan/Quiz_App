import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-update-students',
  templateUrl: './add-update-students.component.html',
  styleUrls: ['./add-update-students.component.scss'],
})
export class AddUpdateStudentsComponent {
  isUpdatePage: boolean = false;
  studentId: any;
  groupId: any;
  // studentList:IStudents|any;

  constructor(
    public dialogRef: MatDialogRef<AddUpdateStudentsComponent>,
    private dialog: MatDialog,
    private _studentService: StudentsService,
    private _ActivatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private _Router: Router
  ) {
    this.studentId = _ActivatedRoute.snapshot.params['id'];
    console.log(this.studentId);

    if (this.studentId) {
      this.isUpdatePage = true;
      this.getStudentById(this.studentId);
    } else {
      this.isUpdatePage = false;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  studentForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
  });

  // groups: IGroupDetails[]= [];

  onSubmit(data: FormGroup) {
    if (this.studentId) {
      // Update
      this._studentService
        .updateStudentGroup(this.studentId, this.groupId, data.value)
        .subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (err) => {
            this.toastr.error('upate failed');
          },
          complete: () => {
            this._Router.navigate(['/dashboard/student']);
            this.toastr.success('Student Updateed Successfully');
          },
        });
    } else {
      // Add
      // console.log(data.value);
      this._studentService.addToGroup(this.studentId, this.groupId).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          this.toastr.error(err.error.message, 'Error');
        },
        complete: () => {
          this._Router.navigate(['dashboard/student']);
          this.toastr.success('Student Added Successfully');
        },
      });
    }
  }

  getStudentById(id: string) {
    this._studentService.getStudentById(id).subscribe({
      next: (res) => {
        // this.studentList = res;
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Error!');
      },
      complete: () => {
        this.studentForm.patchValue({
          // name: this.studentList?.name,
          // phone: this.studentList?.phone
        });
      },
    });
  }

  ngOnInit() {}
}
