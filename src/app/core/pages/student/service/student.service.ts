import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJoin } from '../model/student';
import { IQuizzes } from '../../instructor/modules/quizes/model/quizzes';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
constructor(
  private _HttpClient:HttpClient
) { }

  onJoinQuiz(data:IJoin):Observable<any>{
    return this._HttpClient.post('quiz/join',data)
  }
  onGetCompletedQuiz():Observable<any>{
    return this._HttpClient.get('quiz/completed')
  }
}
