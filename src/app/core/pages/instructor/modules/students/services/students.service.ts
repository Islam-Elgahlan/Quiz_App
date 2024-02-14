import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _HttpClient: HttpClient) { }

  getAllStudents(): Observable<any> {
    return this._HttpClient.get('student')
  }
  getAllStudentsWithoutGroup(): Observable<any> {
    return this._HttpClient.get('student/without-group')
  }
  getStudentById(_id: any): Observable<any> {
    return this._HttpClient.get(`student/${_id}`)
  }
  updateStudent(data: any): Observable<any> {
    return this._HttpClient.put('student', data)
  }
  deleteStudent(id: any): Observable<any> {
    return this._HttpClient.delete(`student/${id}`)
  }
  // Group
  addToGroup(studentId: any, groupId: any): Observable<any> {
    return this._HttpClient.get(`student/${studentId}/${groupId}`)
  }
  updateStudentGroup(studentId: any, groupId: any, data:any): Observable<any> {
    return this._HttpClient.put(`student/${studentId}/${groupId}`, data)
  }

}
