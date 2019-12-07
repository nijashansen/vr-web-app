import {MatDialog, MatDialogRef} from '@angular/material';
import {LoginDialogComponent} from '../component/Shared/login-dialog/login-dialog.component';


export function openLoginWindow(dialog: MatDialog): MatDialogRef<LoginDialogComponent> {
  const dialogRef = dialog.open(LoginDialogComponent, {
    width: '300px', data: 'login'
  });
  return dialogRef;
}
