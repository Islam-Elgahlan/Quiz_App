import { IStudents } from "../../students/model/students";

export interface IGroup {
    _id: string,
    name: string,
    max_students: number,
    students: IStudents
}

// export interface IGroupDetails {
//     _id: string,
//     name: string,
//     status: string,
//     instructor: string,
//     students: IStudent[]

// }

// export interface IStudent {
//     _id: string,
//     first_name: string,
//     last_name: string,
//     email: string
// }