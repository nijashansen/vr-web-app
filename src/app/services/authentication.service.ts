import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<boolean> {

    return this.http.post<any>(environment.apiUrl + 'Token', {username, password})
      .pipe(map(response => {
        const Token = response.Token;

        if (Token) {

          localStorage.setItem('currentUser', JSON.stringify({username: username, Token: Token}));

          return true;
        } else {

          return false;

        }
      }));
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.Token;
  }

  getUsername(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.username;
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
