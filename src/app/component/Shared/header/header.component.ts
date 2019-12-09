import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {openLoginWindow} from '../../../Functions/OpenLoginDialog';
import {Router} from '@angular/router';
import {StateService} from '../../../services/state.service';
import {User} from '../../../models/User';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  toggleUserCard: boolean;
  currentUser: User;

  constructor(public dialog: MatDialog, private router: Router, private state: StateService, private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.state.loggedInStatusEvent.subscribe(result => {
      this.isLoggedIn = result;
      if (this.isLoggedIn) {
        this.currentUser = this.authService.User;
      }
    });
  }

  public select(event) {
    const elements = document.getElementsByClassName('header-cell');
    this.clearSelection();
    if (event.target.classList.contains('cell-text')) {
      event.target.parentElement.classList.add('selected');
    }
    event.target.classList.add('selected');
  }

  public clearSelection() {
    const elements = document.getElementsByClassName('header-cell');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('selected')) {
        elements[i].classList.remove('selected');
      }
    }
  }

  public goToHome() {
    const element = document.getElementById('home');
    this.clearSelection();
    element.classList.add('selected');
  }

  logout() {
    this.toggleUsercard();
    this.router.navigate(['/index']);
    this.authService.logout();
  }

  toggleUsercard() {
    this.toggleUserCard = !this.toggleUserCard;
  }

  openLoginWindow(event) {
    this.select(event);
    openLoginWindow(this.dialog).afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigate(['/index']);
        this.goToHome();
      }
    });
  }
}
