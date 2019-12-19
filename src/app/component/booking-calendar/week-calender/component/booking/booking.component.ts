import {Component, Input, OnInit} from '@angular/core';
import {BookingOrder} from '../../../../../models/BookingOrder';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  @Input() booking: BookingOrder;
 @Input() OpeningHour: number;
  constructor() {
  }

  ngOnInit() {
  }

}
