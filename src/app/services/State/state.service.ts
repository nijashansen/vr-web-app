import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly loggedInStatus$: EventEmitter<boolean>;
  private isLoggedIn = JSON.parse(localStorage.getItem('User')) !== null;

  constructor() {
    this.loggedInStatus$ = new EventEmitter();
    this.loggedInStatus$.emit(this.isLoggedIn);
  }

  get loggedInStatusEvent() {
    return this.loggedInStatus$;
  }

  get LoggedInState() {
    return this.isLoggedIn;
  }

  public loginEmit() {
    console.log('emit: log in');
    this.isLoggedIn = true;
    this.loggedInStatus$.emit(this.isLoggedIn);
  }

  public logoutEmit() {
    console.log('emit: log out');
    this.isLoggedIn = false;
    this.loggedInStatus$.emit(this.isLoggedIn);
  }

  public emit() {
    console.log('emit: isLoggedIn = ' + this.isLoggedIn);
    this.isLoggedIn = JSON.parse(localStorage.getItem('User')) !== null;
    this.loggedInStatus$.emit(this.isLoggedIn);
  }

  public IsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
