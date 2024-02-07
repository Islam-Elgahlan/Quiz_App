import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRole } from '../../model/role.enum';
import { AuthService } from '../../services/auth.service';
import { IRegister } from '../../model/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  message: string = '"Welcome In QuizWiz!"';
  verifyEmail:any;
  
  hide: boolean = true;
  // public RoleEnum = Role;
  // public Role = Role.instructor;

  userRoles = Object.values(UserRole);
  selectedRole: UserRole | undefined;
  // public RoleEnum = Role;
  // public Role = Role.instructor;
  // role1: string = this.RoleEnum[0]

  // get isInstructor() {
  //   return this.Role === Role.instructor;
  // }

    constructor(private _AuthService:AuthService, private toastr:ToastrService, private _Router:Router){}

    ngOnInit(): void {
      console.log(this.userRoles);
    }


  registerForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.pattern('([a-zA-Z]){3,12}([0-9]{1,3})')
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.pattern('([a-zA-Z]){3,12}([0-9]{1,3})')
    ]),
    email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),

    role: new FormControl(null, [
      Validators.required
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')
    ]),
  });


  onSubmit(data: FormGroup) {
    console.log(data.value);
    let myData = new FormData();
    myData.append('userName', data.value.userName);
    myData.append('email', data.value.email);
    myData.append('country', data.value.country);
    myData.append('phoneNumber', data.value.phoneNumber);
    myData.append('password', data.value.password);
    myData.append('confirmPassword', data.value.confirmPassword);

    this._AuthService.onRegister(myData).subscribe({
      next: (res: IRegister) => {
        console.log(res);
        this.verifyEmail = localStorage.setItem('email', res.email);

      },
      error: (err: any) => {
        console.log(err);
        this.toastr.error(err.error.message, 'Error!');
      },
      complete: () => {
        this.toastr.success(this.message, 'Succeded');
        this._Router.navigate(['/auth/login'])
      },
    });
  }





}
