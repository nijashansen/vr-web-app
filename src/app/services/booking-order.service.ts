import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BookingOrder} from '../models/BookingOrder';
import {WeekFilter} from '../component/booking-calendar/shared/models/WeekFilter';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingOrderService {
  bookingApiUrl = environment.apiUrl + 'bookings';

  constructor(private http: HttpClient) {
  }

  getBookings(): Observable<BookingOrder[]> {
    return this.http.get<BookingOrder[]>(this.bookingApiUrl).pipe(map(bookings => {
      for (const booking of bookings) {
        booking.startTimeOfBooking = new Date(booking.startTimeOfBooking.valueOf());
        booking.endTimeOfBooking = new Date(booking.endTimeOfBooking.valueOf());
      }
      return bookings;
    }));
  }

  getBookingsFromWeek(week: WeekFilter): Observable<BookingOrder[]> {
    return this.http.post<BookingOrder[]>(this.bookingApiUrl + 'byweek', week).pipe(map(bookings => {
      for (const booking of bookings) {
        booking.startTimeOfBooking = new Date(booking.startTimeOfBooking.valueOf());
        booking.endTimeOfBooking = new Date(booking.endTimeOfBooking.valueOf());
      }
      return bookings;
    }));
  }

  getBooking(id: number): Observable<BookingOrder> {
    return this.http.get<BookingOrder>(this.bookingApiUrl + '/' + id).pipe(map(booking => {
      booking.startTimeOfBooking = new Date(booking.startTimeOfBooking.valueOf());
      booking.endTimeOfBooking = new Date(booking.endTimeOfBooking.valueOf());
      return booking;
    }));
  }

  createBooking(order: BookingOrder): Observable<BookingOrder> {
    return this.http.post<BookingOrder>(this.bookingApiUrl, order).pipe(map(booking => {
      booking.startTimeOfBooking = new Date(booking.startTimeOfBooking.valueOf());
      booking.endTimeOfBooking = new Date(booking.endTimeOfBooking.valueOf());
      return booking;
    }));
  }

  updateBooking(order: BookingOrder): Observable<any> {
    return this.http.put(this.bookingApiUrl, order);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete<Product>(this.bookingApiUrl + '/' + id);
  }
}
