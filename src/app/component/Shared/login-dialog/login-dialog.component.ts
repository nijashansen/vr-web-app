import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AuthenticationService} from '../../../services/authentication.service';
import {delay} from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';

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

  constructor(
    private authenticationService: AuthenticationService,
    public dialogRef: MatDialogRef<LoginDialogComponent>, @Inject(MAT_DIALOG_DATA) public message: string,
  ) {
  }


  login() {
    this.loading = true;

    // sleep(3000);
    this.authenticationService.login(this.username, this.password).subscribe((result) => {

      if (result) {
          this.dialogRef.close();
          this.loading = false;
        } else {
          this.loading = false;

        }

      });

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
