import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../model/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  UserInfoURL = 'http://localhost:8080/userinfo/';

  constructor(private httpClient: HttpClient) { }

  public get(username: string): Observable<UserInfo> {
    return this.httpClient.get<UserInfo>(this.UserInfoURL + `detailname/${username}`);
  }


  public update(username: String, UserInfo: UserInfo): Observable<any> {
    return this.httpClient.put<any>(this.UserInfoURL + `update/${username}`, UserInfo);
  }
}