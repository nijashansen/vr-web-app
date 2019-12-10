import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookingOrderService} from '../../../../services/booking-order.service';
import {Category} from '../../../../models/category';
import {Location} from '@angular/common';
import {openingHours} from '../../../../../environments/const';

@Component({
  selector: 'app-bookings-add',
  templateUrl: './bookings-add.component.html',
  styleUrls: ['./bookings-add.component.scss']
})
export class BookingsAddComponent implements OnInit {
  openingHours: number[];
  category: Category;
  bookingForm: FormGroup;

  constructor(private bookingOrderService: BookingOrderService, private location: Location) {
    this.bookingForm = new FormGroup({
      user: new FormControl(''),
      product: new FormControl(''),
      bookingStartTime: new FormControl(''),
      bookingEndTime: new FormControl(''),
    });
    this.openingHours = [];
    const start = openingHours.openingHour;
    const end = openingHours.closingHour;
    for (let i = start; i <= end; i++) {
      this.openingHours.push(i);
    }
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

  public onValueChange($event: any): Date {
    return;
  }
}
