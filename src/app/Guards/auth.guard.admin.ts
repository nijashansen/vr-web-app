import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class RoleGuard implements CanActivate {


  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    /*const decodedToken = this.authService.decode();
    console.log(decodedToken.'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name');
    if (decodedToken.Role === next.data.Role) {
      return true;
    } else {
      // navigate to not found page
      this.router.navigate(['/index']);
      return false;


    }*/
    return this.authService.IsAdmin;
  }
}
