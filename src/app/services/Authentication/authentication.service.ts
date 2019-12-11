import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {LoginModel} from '../../models/LoginModel';
import {StateService} from '../State/state.service';
import {User} from '../../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private state: StateService) {
  }// ole123@easv365.dk

  get Token(): string {
    return JSON.parse(localStorage.getItem('User')).Token;
  }

  get User(): User {
    return JSON.parse(localStorage.getItem('User')).User;
  }

  get IsAdmin(): boolean {
    const jwt = this.Token;
    const jwtData = jwt.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    if (decodedJwtJsonData.toString().includes('role')) {
      const decodedJwtData = decodedJwtJsonData.toString().split(',')[1].split(':')[2];
      const role = decodedJwtData.replace(/"/g, '').replace(' ', '');
      return role === 'Administrator';
    }
    return false;
  }


  login(loginModel: LoginModel): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'Token', loginModel)
      .pipe(map(response => {
        const token = response.token;
        const user = response.user;
        console.log(user);
        if (token != null) {
          localStorage.setItem('User', JSON.stringify({Token: token, User: user}));
          this.state.loginEmit();
        }
      }));
  }

  logout(): void {
    localStorage.removeItem('User');
    this.state.logoutEmit();
  }

}
