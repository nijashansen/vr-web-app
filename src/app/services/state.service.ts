import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public loggedInStatus$: EventEmitter<boolean>;
  private isLoggedin = JSON.parse(localStorage.getItem('currentUser')) !== null;

  constructor() {
    this.loggedInStatus$ = new EventEmitter();
  }

  public loginEmit() {
    console.log('emit: log in');
    this.isLoggedin = true;
    this.loggedInStatus$.emit(this.isLoggedin);
  }

  public logoutEmit() {
    console.log('emit: log out');
    this.isLoggedin = false;
    this.loggedInStatus$.emit(this.isLoggedin);
  }

  public emit() {
    console.log('emit: isLoggedIn = ' + this.isLoggedin);
    this.isLoggedin = JSON.parse(localStorage.getItem('currentUser')) !== null;
    this.loggedInStatus$.emit(this.isLoggedin);
  }

  public IsLoggedIn(): boolean {
    return this.isLoggedin;
  }
}
