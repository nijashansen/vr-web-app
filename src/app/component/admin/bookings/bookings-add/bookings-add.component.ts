import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../../services/category.service';
import {Router} from '@angular/router';
import {BookingOrderService} from '../../../../services/booking-order.service';
import {Category} from '../../../../models/category';
import {BehaviorSubject, Observable} from 'rxjs';
import {AdminPageServiceService} from '../../../../services/admin-page-service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-bookings-add',
  templateUrl: './bookings-add.component.html',
  styleUrls: ['./bookings-add.component.scss']
})
export class BookingsAddComponent implements OnInit {
  category: Category;
  bookingForm: FormGroup;

  constructor(private bookingOrderService: BookingOrderService, private location: Location) {
    this.bookingForm = new FormGroup({
      user: new FormControl(''),
      product: new FormControl( ''),
      bookingStartTime: new FormControl(''),
      bookingEndTime: new FormControl(''),
    });
  }

  get formUser() {
    return this.bookingForm.get('user');
  }

  get formProduct() {
    return this.bookingForm.get('product');
  }

  get formBookingStartTime() {
    return this.bookingForm.get('bookingStartTime');
  }

  get formBookingEndTime() {
    return this.bookingForm.get('bookingEndTime');
  }

  ngOnInit() {

  }

  onCancel() {
    this.location.back();
  }

  onAdd() {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm);
      this.bookingOrderService.createBooking({
        user: this.formUser.value,
        product: this.formProduct.value,
        startTimeOfBooking: this.formBookingStartTime.value,
        endTimeOfBooking: this.formBookingEndTime.value,
      })
        .subscribe(() => {
          this.location.back();
        });
    }
  }
}
