import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Day} from '../../../shared/models/Day';
import {Booking} from '../../../shared/models/Booking';
import {ClockService} from '../../../services/clock.service';
import {BookingDialogComponent} from '../../../shared/component/booking-dialog/booking-dialog.component';
import {MatDialog} from '@angular/material';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {Product} from '../../../../../models/Product';
import {User} from 'src/app/models/User';
import {BookingOrder} from '../../../../../models/BookingOrder';

const headerRows: number = 3;

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit, OnDestroy {
  @Input() day: Day;
  @Input() user: User;
  @Input() product: Product;
  @Input() openingHours: number[];
  @Input() bookings: BookingOrder[];

  public bookingsObv: Observable<Array<BookingOrder>>;
  public isTodayObv: Observable<boolean>;
  public currentMinObv: Observable<number>;
  public currentHourObv: Observable<number>;
  currentTime: Date;
  private headerRows: number = 3;
  private bookingsBehave: BehaviorSubject<Array<BookingOrder>>;
  private isTodayBehave: BehaviorSubject<boolean>;
  private currentMinBehave: BehaviorSubject<number>;
  private currentHourBehave: BehaviorSubject<number>;
  private clock: Subscription;

  constructor(public clockService: ClockService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.bookingsBehave = new BehaviorSubject<Array<BookingOrder>>(this.bookings);
    this.bookingsObv = this.bookingsBehave.asObservable();

    this.isTodayBehave = new BehaviorSubject<boolean>(false);
    this.isTodayObv = this.isTodayBehave.asObservable();

    this.currentMinBehave = new BehaviorSubject<number>(0);
    this.currentMinObv = this.currentMinBehave.asObservable();

    this.currentHourBehave = new BehaviorSubject<number>(0);
    this.currentHourObv = this.currentHourBehave.asObservable();

    this.clock = this.clockService.time.subscribe(time => {
      if (this.currentMinBehave.getValue() < time.getHours()) {
        this.isTodayBehave.next((time.getDate() === this.day.date.getDate() && time.getMonth() === this.day.date.getMonth())
          && (this.openingHours[0] <= time.getHours() && time.getHours() <= this.openingHours[this.openingHours.length - 1]));
        this.currentHourBehave.next(time.getHours());
        this.currentMinBehave.next(time.getMinutes());
      }
      if (this.currentMinBehave.getValue() < time.getMinutes()) {
        this.currentMinBehave.next(time.getMinutes());
      }
      this.currentTime = time;
    });
  }

  ngOnDestroy(): void {
    this.clock.unsubscribe();
  }

  getBooking(numb: number) {
    this.openDialog(numb);
  }

  openDialog(numb: number): void {
    const dialogRef = this.dialog.open(BookingDialogComponent, {
      data: {
        userId: 1,
        prodId: 1,
        start: numb
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== null) {
        console.log(result);
        this.addBooking(result);
        console.log(this.bookings);
      }
    });
  }

  addBooking(booking: BookingOrder) {
    this.bookings.push(booking);
    this.bookingsBehave.next(this.bookings);
  }
}
