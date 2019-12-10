import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {FilterPageUserList} from '../models/FilterPageUserList';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {Category} from '../models/category';



@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  userApiUrl = environment.apiUrl + 'UserInfo';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.userApiUrl);
    }

  getUsersWithFilterPage(filter: FilterPageUserList): Observable<FilterPageUserList> {
      return this.http.post<FilterPageUserList>(this.userApiUrl + 'WithFilter', filter);
    }

    getUser(id: number): Observable<User> {
      return this.http.get<User>(this.userApiUrl + '/' + id);
    }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userApiUrl, user);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.userApiUrl, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<User>(this.userApiUrl + '/' + id);
  }
}
