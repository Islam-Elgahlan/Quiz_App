import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',title:'Quiz-Login', component: LoginComponent },
  { path: 'register',title:'Quiz-Register', component: RegisterComponent },
  { path: 'forgetPassword',title:'Staycation-ForgetPassword', component: ForgetPasswordComponent },
  { path: 'resetPassword',title:'Staycation-ResetPassword', component: ResetPasswordComponent },
  { path: 'change-password',title:'Staycation-ChangePassword', component: ChangePasswordComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
