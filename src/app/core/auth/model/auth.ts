export interface Auth {

}

export interface IRegister {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  role: string
}
export interface IChangePassword {
  password: string,
  password_new: string
}
export interface IResetPassword {
  otp: number,
  email: string,
  password: string
}
