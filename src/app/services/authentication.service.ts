import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {User} from "../component/Shared/models/User";
import {LoginModel} from "../component/Shared/models/LoginModel";
import {Token} from "@angular/compiler";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }// ole123@easv365.dk

  login(loginModel: LoginModel): Observable<any> {

    return this.http.post<any>(environment.apiUrl + 'Token', loginModel)
      .pipe(map(response => {
        const token = response.token;
        const user = response.user

        if (token != null) {
          console.log(token)
          localStorage.setItem('User', JSON.stringify({Token: token, User: user}));

         //return true;
        } else {

          //return false;

        }
      }));
  }

  getToken(): string {
    const user = JSON.parse(localStorage.getItem('User'));
    console.log(user.Token)
    return user.Token;
  }

  getUsername(): string {
    const user = JSON.parse(localStorage.getItem('User'));
    return user && user.user.Firstname;
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('User');
  }
}
