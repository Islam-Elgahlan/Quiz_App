import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuizzes } from '../model/quizzes';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(private _HttpClient: HttpClient) { }

  getAllQuizze(): Observable<any> {
    return this._HttpClient.get('quiz')
  }
  getQuizzeById(id:string): Observable<any> {
    return this._HttpClient.get(`quiz/${id}`)
  }

  createQuizze(data: any): Observable<any> {
    return this._HttpClient.post('quiz', data)
  }
  updateQuizze(data: IQuizzes, id:string): Observable<any> {
    return this._HttpClient.put(`quiz/${id}`, data)
  }
  deleteQuizze(id:string): Observable<any> {
    return this._HttpClient.delete(`quiz/${id}`)
  }

  onGetFiveUpcommingQuizzes(): Observable<any> {
    return this._HttpClient.get('quiz/incomming');
  }
  
}
