import { Component, OnInit } from '@angular/core';
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
  userRoles = Object.values(UserRole);
  selectedRole: UserRole | undefined;
  // public RoleEnum = Role;
  // public Role = Role.instructor;
  // role1: string = this.RoleEnum[0]
  
  // get isInstructor() {
  //   return this.Role === Role.instructor;
  // }

}
