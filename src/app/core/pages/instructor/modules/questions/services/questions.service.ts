import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

constructor(private _HttpClient:HttpClient) { }

getAllQuestions():Observable<any>
{
  return this._HttpClient.get('question')
}
getQuestionById(id:any):Observable<any>
{
  return this._HttpClient.get(`question/${id}`)
}
addQuestion(data:any):Observable<any>
{
  return this._HttpClient.post(`question`, data)
}
updateQuestion(data:any):Observable<any>
{
  return this._HttpClient.put(`question`, data)
}
deleteQuestion(id:string):Observable<any>
{
  return this._HttpClient.delete(`question/${id}`)
}
searchQuestion(data:any):Observable<any>
{
  return this._HttpClient.post(`question`, data)
}

}
