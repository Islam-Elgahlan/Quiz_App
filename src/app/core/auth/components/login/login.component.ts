import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = true;
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
  })
  constructor(
    private _AuthService:AuthService,
    private toastr:ToastrService, private _Router:Router
  ){}
  onSubmit(data:FormGroup){
    this._AuthService.onLogIn(data.value).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        this.toastr.error(err.error.message,'Error!')
      },
      complete:()=>{
        this.toastr.success('loged in successfully')
        this._Router.navigate(['/dashboard'])
      }
    })
  }
}
