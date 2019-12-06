import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {Day} from '../../../shared/models/Day';
import {User} from '../../../../../models/User';
import {Product} from '../../../../../models/Product';
import {BookingOrder} from '../../../../../models/BookingOrder';

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
  @Input() week: Date;
  @Input() user: User;
  @Input() product: Product;
  @Input() bookings: BookingOrder[];
  @Input() OpeningHour: number;
  @Input() ClosingHour: number;

  TimeZoneOffset: number;
  weekStart: Date;
  weekEnd: Date;
  OpeningHours: number[];
  OpeningDays: Day[];

  constructor() {
  }

  ngOnInit() {
    this.setUpWeek(this.week);
    this.OpeningDays = this.getOpeningDays();
    this.OpeningHours = this.getOpeningHours(this.OpeningHour, this.ClosingHour);
  }

  ngOnChanges() {
    this.setUpWeek(this.week);
    this.OpeningDays = this.getOpeningDays();
  }

  setUpWeek(date: Date): void {
    this.TimeZoneOffset = date.getTimezoneOffset() * -1 / 60;
    this.weekStart = new Date(Math.floor((date.valueOf()) / WEEK_UNIX) * WEEK_UNIX + (4 * DAY_UNIX));
    this.weekEnd = new Date(Math.ceil((date.valueOf()) / WEEK_UNIX) * WEEK_UNIX + (3 * DAY_UNIX));
  }

  private getOpeningHours(open: number, close: number): number[] {
    const n: number = close - open;
    const openingHours: number[] = [];
    for (let i = this.OpeningHour; i <= this.ClosingHour; i++) {
      openingHours.push(i);
    }
    return openingHours;
  }


  private getOpeningDays(): Day[] {
    const n = this.weekEnd.valueOf() / DAY_UNIX - this.weekStart.valueOf() / DAY_UNIX;
    const openingDays: Day[] = [];
    for (let i = 0; i <= n; i++) {
      const date: Date = new Date(this.weekStart.valueOf() + (i * DAY_UNIX));
      openingDays.push({
        date: new Date(this.weekStart.valueOf() + (i * DAY_UNIX)),
        name: WEEKDAY_NAMES[date.getDay()],
        bookings: []
        // bookings: this.bookings.find(booking => {
        //   return Math.floor(booking.startTimeOfBooking.valueOf() / DAY_UNIX) === date.valueOf() / DAY_UNIX;
        // });
      });
    }
    return openingDays;
  }

}
