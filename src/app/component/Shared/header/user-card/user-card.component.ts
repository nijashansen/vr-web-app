import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../models/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  @Output() logoutButtonEvent = new EventEmitter();
  @Output() toggleEvent = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  onLogout() {
    this.logoutButtonEvent.emit();
  }

  public toggle() {
    this.toggleEvent.emit();
  }
}
