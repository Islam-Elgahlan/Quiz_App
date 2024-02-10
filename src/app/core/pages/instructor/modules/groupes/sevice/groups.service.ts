import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGroup } from '../model/groups';

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
  onAddGroup(data:any):Observable<any>{
    return this._HttpClient.post('group',data)
  }
  onDeleteGroup(id:string):Observable<any>{
    return this._HttpClient.delete(`group/${id}`)
  }
  onGetGroupById(id:string):Observable<any>{
    return this._HttpClient.get(`group/${id}`)
  }
  onUpdateGroup(id:string,data:IGroup):Observable<any>{
    return this._HttpClient.put(`group/${id}`,data)
  }
  

}
