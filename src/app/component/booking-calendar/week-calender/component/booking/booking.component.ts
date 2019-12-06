import {Component, Input, OnInit} from '@angular/core';
import {Booking} from '../../../shared/models/Booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  @Input()  booking: Booking;
  @Input() OpeningHour: number;
  constructor() {
  }

  ngOnInit() {
  }

}
