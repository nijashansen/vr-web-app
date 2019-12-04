import {MatDialog} from '@angular/material';
import {LoginDialogComponent} from '../component/Shared/login-dialog/login-dialog.component';


export function openLoginWindow(dialog: MatDialog): void {
  const dialogRef = dialog.open(LoginDialogComponent, {
    width: '350px', height: '300px', data: 'login'
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Yes clicked');
    }
  });
}
