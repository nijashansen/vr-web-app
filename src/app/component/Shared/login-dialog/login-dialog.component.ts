import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AuthenticationService} from '../../../services/authentication.service';
import {catchError, delay} from 'rxjs/operators';
import {BehaviorSubject, Observable, pipe, throwError} from 'rxjs';
import {LoginModel} from '../../../models/LoginModel';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';


const loading = false;

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  username: string;
  password: string;
  loading = false;
  loadingBehave: BehaviorSubject<boolean>;
  loadingObv: Observable<boolean>;
  loginUnsuccBehave: BehaviorSubject<boolean>;
  loginUnsuccObs: Observable<boolean>;

  constructor(
    private authenticationService: AuthenticationService,
    public dialogRef: MatDialogRef<LoginDialogComponent>, @Inject(MAT_DIALOG_DATA) public message: string,
  ) {
    this.loadingBehave = new BehaviorSubject<boolean>(false);
    this.loadingObv = this.loadingBehave.asObservable();
    this.loginUnsuccBehave = new BehaviorSubject<boolean>(false);
    this.loginUnsuccObs = this.loginUnsuccBehave.asObservable();
  }


  login() {
    this.loading = true;
    this.loadingBehave.next(true);
    this.authenticationService.login({
      UserNameInput: this.username,
      PasswordInput: this.password
    })
      .pipe(catchError(error => this.checkResponse(error)
      ))
      .subscribe((result) => {
        this.dialogRef.close(true);
        this.loading = false;
        this.loadingBehave.next(false);
      });
  }

  checkResponse(error: HttpErrorResponse) {
    if (error.status !== 200) {
      this.loadingBehave.next(false);
      this.loginUnsuccBehave.next(true);
      console.log(this.loginUnsuccObs);
      return throwError(error);
    }
  }

  Cancel(): void {
    this.dialogRef.close(false);
  }


}

