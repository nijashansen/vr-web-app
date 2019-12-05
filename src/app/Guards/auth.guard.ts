import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';


@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) {
  }

  canActivate() {
    console.log('debug3');
    if (this.authService.getToken()) {
      console.log('debug6');
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/index']);
    console.log('debug5');
    return false;
  }
}
