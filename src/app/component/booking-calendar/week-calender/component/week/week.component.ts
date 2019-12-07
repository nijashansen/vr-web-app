import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Day} from '../../../shared/models/Day';
import {User} from '../../../../../models/User';
import {Product} from '../../../../../models/Product';
import {BookingOrder} from '../../../../../models/BookingOrder';
import {Week} from '../../../shared/models/Week';
import {Observable} from 'rxjs';

const DAY_UNIX = 86400000;
const WEEK_UNIX = 604800000;
const WEEKDAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeekComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Input() product: Product;
  @Input() w: Week;
  @Output() pendingBooking = new EventEmitter<BookingOrder>();

  constructor() {
    console.log(this.w);
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  parseBooking(b) {
    this.pendingBooking.emit(b);
  }
}
