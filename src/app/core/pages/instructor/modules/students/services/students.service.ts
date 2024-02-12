import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudents } from '../model/students';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private _HttpClient: HttpClient) {}

  getAllStudents(): Observable<any> {
    return this._HttpClient.get('student');
  }
  getAllStudentsWithoutGroup(): Observable<any> {
    return this._HttpClient.get('student/without-group');
  }
  getStudentById(_id: string): Observable<IStudents> {
    return this._HttpClient.get<IStudents>(`student/${_id}`);
  }
  updateStudent(data: IStudents): Observable<IStudents> {
    return this._HttpClient.put<IStudents>('student', data);
  }
  deleteStudent(id: string): Observable<IStudents> {
    return this._HttpClient.delete<IStudents>(`student/${id}`);
  }
  // Group
  addToGroup(studentId: string, groupId: string): Observable<IStudents> {
    return this._HttpClient.get<IStudents>(`student/${studentId}/${groupId}`);
  }
  updateStudentGroup(studentId: string, groupId: string, data: IStudents): Observable<IStudents> {
    return this._HttpClient.put<IStudents>(`student/${studentId}/${groupId}`, data);
  }
  onGetTopFiveStudents(): Observable<any> {
    return this._HttpClient.get('student/top-five');
  }
}
