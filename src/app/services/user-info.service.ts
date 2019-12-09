import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FilterPageUserList} from "../models/FilterPageUserList";
import {Observable} from "rxjs";
import {User} from "../models/User";



@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  userApiUrl = environment.apiUrl + 'UsersInfo';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.userApiUrl);
    }

    getUsersWithFilterPage(filter: FilterPageUserList): Observable<FilterPageUserList> {
      return this.http.post<FilterPageUserList>(this.userApiUrl + 'Withfilter', filter);
    }

    getUser(id: number): Observable<User> {
      return this.http.get<User>(this.userApiUrl + '/' + id);
    }

  createProduct(user: User): Observable<User> {
    return this.http.post<User>(this.userApiUrl, user);
  }

  updateProduct(user: User): Observable<any> {
    return this.http.put(this.userApiUrl, user);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<User>(this.userApiUrl + '/' + id);
  }
}
