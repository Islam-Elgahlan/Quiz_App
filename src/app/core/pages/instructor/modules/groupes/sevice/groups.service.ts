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

  onGetAllGroups():Observable<any>{
    return this._HttpClient.get('group')
  }
  onGetGroupById(id:any):Observable<any>{
    return this._HttpClient.get(`group/${id}`)
  }

}
