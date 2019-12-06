import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../../models/User';
import {Product} from '../../models/Product';
import {BookingOrder} from '../../models/BookingOrder';
import {Week} from './shared/models/Week';


const DAY_UNIX = 86400000;
const WEEK_UNIX = 604800000;

@Component({
  selector: 'app-calender',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingCalenderComponent implements OnInit {

  @Input() currentUser: User;
  @Input() product: Product;
  @Input() bookings: BookingOrder[];
  @Input() OpeningHour: number;
  @Input() ClosingHour: number;
  private weekNo: number;
  private chosenWeek: Date;
  private chosenWeekObv: Observable<Date>;
  private chosenWeekBehave: BehaviorSubject<Date>;

  constructor() {
  }

  ngOnInit() {
    const date = new Date();
    this.weekNo = this.getWeekNumber(date);
    this.chosenWeek = new Date(Math.floor(date.valueOf() / WEEK_UNIX) * WEEK_UNIX - (3 * DAY_UNIX));
    this.chosenWeekBehave = new BehaviorSubject<Date>(this.chosenWeek);
    this.chosenWeekObv = this.chosenWeekBehave.asObservable();
  }

  private getWeekNumber(d: Date): number {
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((d.valueOf() - yearStart.valueOf()) / DAY_UNIX) + 1) / 7);
    return weekNo;
  }

  private changeWeek(change: number): void {
    this.chosenWeek = new Date(Math.floor((this.chosenWeek.valueOf()) / WEEK_UNIX) * WEEK_UNIX + ((4 + 7 * change) * DAY_UNIX));
    console.log(this.chosenWeek);
    this.weekNo = this.getWeekNumber(new Date(this.chosenWeek.valueOf() + 4 * DAY_UNIX));
  }

  private toCurrent(): void {
    this.weekNo = this.getWeekNumber(new Date());
    this.chosenWeek = new Date(Math.floor(Date.now().valueOf() / WEEK_UNIX) * WEEK_UNIX - (3 * DAY_UNIX));
  }

}
