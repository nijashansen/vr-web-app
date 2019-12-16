import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {FilterPageUserList} from '../../models/FilterPageUserList';
import {Observable} from 'rxjs';
import {User} from '../../models/User';
import {GenerateAuthenticationHeader} from '../../Functions/GenerateAuthenticationHeader';
import {AuthenticationService} from '../Authentication/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  userApiUrl = environment.apiUrl + 'UserInfo';

  constructor(private http: HttpClient, private as: AuthenticationService) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userApiUrl,  GenerateAuthenticationHeader(this.as.Token));
  }

  getUsersWithFilterPage(filter: FilterPageUserList): Observable<FilterPageUserList> {
    return this.http.get<FilterPageUserList>(this.userApiUrl + '?' +
      'pageIndex=' + filter.pageIndex +
      '&itemsPrPage=' + filter.itemsPrPage,
      GenerateAuthenticationHeader(this.as.Token));
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.userApiUrl + '/' + id, GenerateAuthenticationHeader(this.as.Token));
  }

  createUser(user: any): Observable<User> {
    return this.http.post<User>(this.userApiUrl, user, GenerateAuthenticationHeader(this.as.Token));
  }

  updateUser(user: User): Observable<any> {
    console.log(user);
    return this.http.put(this.userApiUrl, user, GenerateAuthenticationHeader(this.as.Token));
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<User>(this.userApiUrl + '/' + id, GenerateAuthenticationHeader(this.as.Token));
  }
}
