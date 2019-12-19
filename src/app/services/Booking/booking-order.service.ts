import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../models/product';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BookingOrder} from '../../models/bookingOrder';
import {WeekFilter} from '../../component/booking-calendar/shared/models/WeekFilter';
import {map} from 'rxjs/operators';
import {GenerateAuthenticationHeader} from '../../Functions/GenerateAuthenticationHeader';
import {AuthenticationService} from '../Authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BookingOrderService {
  bookingApiUrl = environment.apiUrl + 'bookings';

  constructor(private http: HttpClient, private as: AuthenticationService) {
  }

  getBookings(): Observable<BookingOrder[]> {
    return this.http.get<BookingOrder[]>(this.bookingApiUrl, GenerateAuthenticationHeader(this.as.Token)).pipe(map(bookings => {
      for (const booking of bookings) {
        booking.startTimeOfBooking = new Date(booking.startTimeOfBooking.valueOf());
        booking.endTimeOfBooking = new Date(booking.endTimeOfBooking.valueOf());
      }
      return bookings;
    }));
  }

  getBookingsFromWeek(week: WeekFilter): Observable<BookingOrder[]> {
    return this.http.get<BookingOrder[]>(this.bookingApiUrl + '?' +
      'start=' + week.weekStart.valueOf() +
      '&end=' + week.weekEnd.valueOf() +
      '&productId=' + week.productId,
      GenerateAuthenticationHeader(this.as.Token)).pipe(map(bookings => {
      for (const booking of bookings) {
        booking.startTimeOfBooking = new Date(booking.startTimeOfBooking.valueOf());
        booking.endTimeOfBooking = new Date(booking.endTimeOfBooking.valueOf());
      }
      return bookings;
    }));
  }

  getBooking(id: number): Observable<BookingOrder> {
    return this.http.get<BookingOrder>(this.bookingApiUrl + '/' + id, GenerateAuthenticationHeader(this.as.Token)).pipe(map(booking => {
      booking.startTimeOfBooking = new Date(booking.startTimeOfBooking.valueOf());
      booking.endTimeOfBooking = new Date(booking.endTimeOfBooking.valueOf());
      return booking;
    }));
  }

  createBooking(order: BookingOrder): Observable<BookingOrder> {
    return this.http.post<BookingOrder>(this.bookingApiUrl, order, GenerateAuthenticationHeader(this.as.Token))
      .pipe(map(booking => {
      booking.startTimeOfBooking = new Date(booking.startTimeOfBooking.valueOf());
      booking.endTimeOfBooking = new Date(booking.endTimeOfBooking.valueOf());
      return booking;
    }));
  }

  updateBooking(order: BookingOrder): Observable<any> {
    return this.http.put(this.bookingApiUrl, order, GenerateAuthenticationHeader(this.as.Token));
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete<Product>(this.bookingApiUrl + '/' + id, GenerateAuthenticationHeader(this.as.Token));
  }
}
