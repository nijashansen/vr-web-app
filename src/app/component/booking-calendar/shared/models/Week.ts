import {Day} from './Day';
import {BookingOrder} from '../../../../models/BookingOrder';

export interface Week {
  weekNumber: number;
  days: Day[];
  bookings: BookingOrder[];
  openingHour: number;
  closingHour: number;
}
