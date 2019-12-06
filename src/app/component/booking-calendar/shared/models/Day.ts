import {Booking} from './Booking';
import {BookingOrder} from '../../../../models/BookingOrder';

export interface Day {
  name: string;
  date: Date;
  bookings: BookingOrder[];
}
