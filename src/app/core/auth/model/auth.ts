export interface Auth {
}
//login
export interface ILogin {
  email: string,
  password: string,
  data:Data
}
export interface Data {
  accessToken:string,
  profile:IProfile
}
export interface IProfile {
  role: string,
  first_name:string,
  last_name:string,
  email:string,
  _id:string,
  status:string
}
//register
export interface IRegister {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  role: string
}
//change password
export interface IChangePassword {
  password: string,
  password_new: string
}
//reset password
export interface IResetPassword {
  otp: number,
  email: string,
  password: string
}
