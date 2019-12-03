import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AuthenticationService} from '../../../services/authentication.service';
import {openLoginWindow} from '../../../Functions/OpenLoginDialog'
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {
  username: string;
  password: string;
  loading = false;

  constructor(
    //private as: AuthenticationService,
    public dialogRef: MatDialogRef<LoginDialogComponent>, @Inject(MAT_DIALOG_DATA) public message: string,
  ) {
  }

  /*
  login() {
    this.loading = true;
    this.as.login(this.username, this.password).subscribe((result) => {
      if (result) {
        console.log('check');
      } else {
        console.log('fail');
      }
      this.dialogRef.close();
      this.loading = false;
    });
  }
*/
  Cancel(): void {
    this.dialogRef.close();
  }



}
