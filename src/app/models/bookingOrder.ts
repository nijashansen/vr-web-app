import {Product} from './product';
import {User} from './User';

export interface BookingOrder {
  id?: number;
  user: User;
  product: Product;
  startTimeOfBooking: Date;
  endTimeOfBooking?: Date;
}
