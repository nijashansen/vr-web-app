import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getToken(): string {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }
}
