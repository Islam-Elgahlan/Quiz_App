import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRole } from '../../model/role.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.userRoles);
    

  }

  hide:boolean=true;
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



  registerForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.pattern('([a-zA-Z]){3,12}([0-9]{1,3})')
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.pattern('([a-zA-Z]){3,12}([0-9]{1,3})')
    ]),
    email: new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),  

    role: new FormControl(null, [
      Validators.required
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')
    ]),
});
  
 
}
