import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../../models/User';
import {Product} from '../../models/Product';
import {BookingOrderService} from '../../services/Booking/booking-order.service';
import {Week} from './shared/models/Week';
import {Day} from './shared/models/Day';
import {BookingOrder} from '../../models/BookingOrder';


const DAY_UNIX = 86400000;
const WEEK_UNIX = 604800000;
const WEEKDAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

@Component({
  selector: 'app-calender',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingCalenderComponent implements OnInit {

  @Input() currentUser: User;
  @Input() product: Product;
  @Input() OpeningHour: number;
  @Input() ClosingHour: number;
  private w: Week;
  private WeekObv: Observable<Week>;
  private WeekBehave: BehaviorSubject<Week>;
  private bookings: BookingOrder[];

  constructor(public bookingservice: BookingOrderService) {
  }

  ngOnInit() {
    const date = new Date();
    this.setWeek(date);
    this.WeekBehave = new BehaviorSubject<Week>(this.w);
    this.WeekObv = this.WeekBehave.asObservable();
  }

  getKey(date: Date): number {
    const i = Math.floor(date.valueOf() / DAY_UNIX);
    return i;
  }

  private changeWeek(change: number): void {
    const date = new Date(this.w.weekStart.valueOf() + ((change * 7) * DAY_UNIX));
    this.setWeek(date);
  }

  private toCurrent(): void {
    this.setWeek(new Date());
  }

  private setWeek(date: Date) {
    const weekNumber = this.getWeekNumber(date);
    const weekstart = this.getWeekStart(date);
    const weekend = this.getWeekEnd(date);
    const openingH = this.getOpeningHours(this.OpeningHour, this.ClosingHour);

    this.bookingservice.getBookingsFromWeek({productId: this.product.id, weekStart: weekstart, weekEnd: weekend}).subscribe(result => {
      this.bookings = result;
      const map: Map<number, BookingOrder[]> = new Map<number, BookingOrder[]>();
      for (const booking of result) {
        const key: number = this.getKey(booking.startTimeOfBooking);
        if (map.has(key)) {
          map.get(key).push(booking);
        } else {
          map.set(key, [booking]);
        }
      }
      const openingD = this.getOpeningDays(weekstart, weekend, map);
      this.w = {
        days: openingD,
        openingHours: openingH,
        weekStart: weekstart,
        weekEnd: weekend,
        weekNumber
      };
      this.WeekBehave.next(this.w);
    });
  }

  private getWeekStart(date: Date): Date {
    return new Date(Math.floor((date.valueOf()) / WEEK_UNIX) * WEEK_UNIX - (3 * DAY_UNIX));
  }

  private getWeekEnd(date: Date): Date {
    return new Date(Math.floor((date.valueOf()) / WEEK_UNIX) * WEEK_UNIX + (3 * DAY_UNIX));
  }

  private getWeekNumber(d: Date): number {
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / DAY_UNIX) + 1) / 7);
    return weekNo;
  }

  private getOpeningHours(open: number, close: number): number[] {
    const n: number = close - open;
    const openingHours: number[] = [];
    for (let i = open; i <= close; i++) {
      openingHours.push(i);
    }
    return openingHours;
  }


  private getOpeningDays(start: Date, end: Date, bookings: Map<number, BookingOrder[]>): Day[] {
    const n = end.valueOf() / DAY_UNIX - start.valueOf() / DAY_UNIX;
    const openingDays: Day[] = [];
    for (let i = 0; i <= n; i++) {
      const date: Date = new Date(start.valueOf() + (i * DAY_UNIX));
      const key: number = this.getKey(date);
      openingDays.push({
        // tslint:disable-next-line:object-literal-shorthand
        date: date,
        name: WEEKDAY_NAMES[date.getDay()],
        bookings: bookings.has(key) ? bookings.get(key) : []
      });
    }
    return openingDays;
  }

  private catchBooking(b) {
    this.bookingservice.createBooking(b).subscribe(() => {
      this.setWeek(this.w.weekStart);
    });
  }
}
