import { IStudents } from "../../students/model/students";

export interface IGroup {
    _id: string,
    name: string,
    max_students: number,
    students: IStudents[],
}
