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
  getQuizzeById(id:string): Observable<IQuizzes> {
    return this._HttpClient.get<IQuizzes>(`quiz/${id}`)
  }
  createQuizze(data: IQuizzes): Observable<IQuizzes> {
    return this._HttpClient.post<IQuizzes>('quiz', data)
  }
  updateQuizze(data: IQuizzes, id:string): Observable<IQuizzes> {
    return this._HttpClient.put<IQuizzes>(`quiz/${id}`, data)
  }
  deleteQuizze(id:string): Observable<IQuizzes> {
    return this._HttpClient.delete<IQuizzes>(`quiz/${id}`)
  }
  onGetFiveUpcommingQuizzes(): Observable<any> {
    return this._HttpClient.get('quiz/incomming');
  }
  
}
