import {Component, OnInit} from '@angular/core';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {openLoginWindow} from '../../../Functions/OpenLoginDialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  public select(event) {
    const elements = document.getElementsByClassName('header-cell');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('selected')) {
        elements[i].classList.remove('selected');
      }
    }
    if (event.target.classList.contains('cell-text')) {
      event.target.parentElement.classList.add('selected');
    }
    event.target.classList.add('selected');
  }

  public clearSelection(event) {
    const elements = document.getElementsByClassName('header-cell');
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('selected')) {
        elements[i].classList.remove('selected');
      }
    }
  }



  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px', data: 'login'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openLoginWindow() {
    openLoginWindow(this.dialog);
  }





}
