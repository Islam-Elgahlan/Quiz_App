import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJoin } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(
    private _HttpClient: HttpClient
  ) { }

  onJoinQuiz(data: IJoin): Observable<any> {
    return this._HttpClient.post('quiz/join', data)
  }
  getAllResults(): Observable<any> {
    return this._HttpClient.get('quiz/result')
  }
  onGetCompletedQuiz(): Observable<any> {
    return this._HttpClient.get('quiz/completed')
  }
  onGetQuestionsWithoutAnswers(id:string):Observable<any>{
    return this._HttpClient.get(`quiz/without-answers/${id}`)
  }
  onSubmitQuestion(data:any,id:string):Observable<any>{
    return this._HttpClient.post(`quiz/submit/${id}`,data)
  }
}
