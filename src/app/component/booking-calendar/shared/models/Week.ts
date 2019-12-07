import {Day} from './Day';
import {BookingOrder} from '../../../../models/BookingOrder';

export interface Week {
  weekNumber: number;
  days: Day[];
  openingHours: number[];
  weekStart: Date;
  weekEnd: Date;
}
