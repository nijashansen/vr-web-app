import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';


@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService) {
  }

  canActivate() {
    return JSON.parse(localStorage.getItem('User')) != null && this.authService.Token != null;
  }
}
