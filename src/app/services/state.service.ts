import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private loggedInStatus$: EventEmitter<boolean>;
  private isLoggedin = JSON.parse(localStorage.getItem('User')) !== null;

  constructor() {
    this.loggedInStatus$ = new EventEmitter();
  }

  get loggedInStatusEvent() {
    return this.loggedInStatus$;
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
    this.isLoggedin = JSON.parse(localStorage.getItem('User')) !== null;
    this.loggedInStatus$.emit(this.isLoggedin);
  }

  public IsLoggedIn(): boolean {
    return this.isLoggedin;
  }
}
