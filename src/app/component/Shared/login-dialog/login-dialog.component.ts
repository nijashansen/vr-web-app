import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AuthenticationService} from '../../../services/authentication.service';
import {delay} from 'rxjs/operators';
import {Observable, pipe} from "rxjs";

let loading: boolean = false;

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  username: string;
  password: string;
  loading: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    public dialogRef: MatDialogRef<LoginDialogComponent>, @Inject(MAT_DIALOG_DATA) public message: string,
  ) {
  }


  login() {
    this.loading = true;
    console.log('bef sub ', loading);
    //sleep(3000);
    this.authenticationService.login(this.username, this.password)
      /*.pipe(
        delay(3000)
      )*/
      .subscribe((result) => {
        console.log('result sub ', loading);
        if (result) {
          this.dialogRef.close();
          this.loading = false;
        } else {
          this.loading = false;

        }
    }, error => {
        this.loading = false;
        console.error('Error happened ', error);
      }, () => {
        this.loading = false;
        console.error('Complete happened ');
      });
    console.log('after sub ', loading);
  }

  Cancel(): void {
    this.dialogRef.close();
  }


}

function sleep(ms) {
  const dt = new Date();
  while (Date.now() - dt.getTime() <= ms) {}
  return true;
}
