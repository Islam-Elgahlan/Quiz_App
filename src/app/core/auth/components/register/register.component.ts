import { Component, OnInit } from '@angular/core';
import { Role } from '../../model/role.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    
    console.log(this.RoleEnum);

  }

  hide:boolean=true;
  public RoleEnum = Role;
  public Role = Role.instructor;
  
  

}
