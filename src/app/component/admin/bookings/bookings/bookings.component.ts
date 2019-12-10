import { Component, OnInit } from '@angular/core';
import {Category} from "../../../../models/category";
import {CategoryService} from "../../../../services/category.service";
import {take} from "rxjs/operators";
import {Booking} from "../../../booking-calendar/shared/models/Booking";
import {BookingOrderService} from "../../../../services/booking-order.service";
import {BookingOrder} from "../../../../models/bookingOrder";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  bookings: BookingOrder[];

  constructor(private bookingService: BookingOrderService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.bookingService.getBookings().pipe(take(1))
      .subscribe(bookingsFromRes =>
        this.bookings = bookingsFromRes);
  }

  delete(id: number) {
    this.bookingService.deleteBooking(id).subscribe(() => {
      this.refresh();
    });
  }
}
