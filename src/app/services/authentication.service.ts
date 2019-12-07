import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {User} from '../models/User';
import {LoginModel} from '../models/LoginModel';
import {StateService} from './state.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private state: StateService, ) {
  }// ole123@easv365.dk

  login(loginModel: LoginModel): Observable<any> {

    return this.http.post<any>(environment.apiUrl + 'Token', loginModel)
      .pipe(map(response => {
        const token = response.token;
        const user = response.user;

        if (token != null) {
          localStorage.setItem('User', JSON.stringify({Token: token, User: user}));
          this.state.loginEmit();
        }
      }));
  }

  getToken(): string {
    const user = JSON.parse(localStorage.getItem('User'));
    return user.Token;
  }

  getUser(): User {
    const user = JSON.parse(localStorage.getItem('User'));
    return user && user.user;
  }

  logout(): void {
    localStorage.removeItem('User');
    this.state.logoutEmit();
  }
}
