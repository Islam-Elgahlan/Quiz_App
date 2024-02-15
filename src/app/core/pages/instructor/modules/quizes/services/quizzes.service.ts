import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

constructor(private _HttpClient:HttpClient) { }

getAllQuizze():Observable<any>{
  return this._HttpClient.get('quiz')
}

createQuizze(data:any):Observable<any>{
  return this._HttpClient.post('quiz', data)
}

}
