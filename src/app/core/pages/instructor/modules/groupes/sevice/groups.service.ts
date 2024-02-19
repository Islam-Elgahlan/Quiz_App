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
  onAddGroup(data:IGroup):Observable<IGroup>{
    return this._HttpClient.post<IGroup>('group',data)
  }
  onDeleteGroup(id:string):Observable<string>{
    return this._HttpClient.delete<string>(`group/${id}`)
  }
  onGetGroupById(id:string):Observable<IGroup>{
    return this._HttpClient.get<IGroup>(`group/${id}`)
  }
  onUpdateGroup(id:string,data:IGroup):Observable<IGroup>{
    return this._HttpClient.put<IGroup>(`group/${id}`,data)
  }

}
