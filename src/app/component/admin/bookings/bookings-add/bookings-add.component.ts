import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../../services/category.service";
import {Router} from "@angular/router";
import {BookingOrderService} from "../../../../services/booking-order.service";

@Component({
  selector: 'app-bookings-add',
  templateUrl: './bookings-add.component.html',
  styleUrls: ['./bookings-add.component.scss']
})
export class BookingsAddComponent implements OnInit {

  bookingForm = new FormGroup({
    product: new FormControl(''),
    user: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl(''),
  });


  constructor(private bookingService: BookingOrderService,
              private router: Router) {
  }

  ngOnInit() {
  }

  createBooking() {
    const booking = this.bookingForm.value;
    console.log(booking);
    this.bookingService.createBooking(booking)
      .subscribe(() => {
        this.router.navigateByUrl('/admin/bookings');
      });
  }
}
