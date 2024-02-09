import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

constructor(
  private _HttpClient:HttpClient
){}

  onGetAllGroups(params: any):Observable<any>{
    return this._HttpClient.get('student', {params : params})
  }

}
