import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

constructor(
  private _HttpClient:HttpClient
) { }

  onJoinQuiz(data:string):Observable<any>{
    return this._HttpClient.post('quiz/join',data)
  }
}
