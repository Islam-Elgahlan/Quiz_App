export interface IStudents {
    _id: string,
    first_name: string,
    last_name: string,
    email: string,
    status: string,
    role: string,
    group: IStudentsGroups,
    length: number,
    avg_score: number
}

export interface IStudentsGroups {
    _id: string,
    instructor: string,
    max_students: number,
    name: string,
    status: string,
    updatedAt: string,
    createdAt: string
    length: number
}