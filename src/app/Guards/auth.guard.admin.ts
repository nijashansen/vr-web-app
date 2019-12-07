
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class RoleGuard implements CanActivate {


  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const decodedToken = this.authService.decode();
    // console.log(decodedToken.http://schemas.microsoft.com/ws/2008/06/identity/claims/role)
      if (decodedToken.Role === next.data.role) {
      return true;
    } else {
      // navigate to not found page
      this.router.navigate(['/index']);
      return false;


    }

  }
}
