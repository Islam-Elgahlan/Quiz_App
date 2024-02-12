import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { IChangePassword } from '../model/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string | null = '';
  constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem('role') !== null) {
      this.getProfile();
    }
  }

  getProfile() {
    let encoded: any = localStorage.getItem('userToken');
    let decoded: any = jwtDecode(encoded);
    console.log(decoded);
    
    this.getRole();
  }
  getRole() {
    if (
      localStorage.getItem('userToken') !== null &&
      localStorage.getItem('role')
    ) {
      this.role = localStorage.getItem('role');
    }
  }

  onLogIn(data: any): Observable<any> {
    return this._HttpClient.post('auth/login', data);
  }
  onRegister(data: any):Observable<any>
  {
    return this._HttpClient.post('auth/register' , data)
  }
  onChangePassword(data: any):Observable<any>
  {
    return this._HttpClient.post('auth/change-password' , data)
  }
  onResetPassword(data:string):Observable<any>
  {
    return this._HttpClient.post('auth/forgot-password', {email: data})
  }
  onRestPassword(data:any)
 {
  return this._HttpClient.post('auth/reset-password', data)

 }
}
