import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {User} from '../../../../../models/User';
import {Product} from '../../../../../models/Product';
import {BookingOrder} from '../../../../../models/BookingOrder';
import {Week} from '../../../shared/models/Week';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeekComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Input() product: Product;
  @Input() week: Week;
  @Output() pendingBooking = new EventEmitter<BookingOrder>();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  parseBooking(booking) {
    this.pendingBooking.emit(booking);
  }
}
