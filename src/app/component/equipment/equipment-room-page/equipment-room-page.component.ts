import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {Product} from '../../../models/Product';
import {BookingOrder} from '../../../models/BookingOrder';

@Component({
  selector: 'app-equipment-room-page',
  templateUrl: './equipment-room-page.component.html',
  styleUrls: ['./equipment-room-page.component.scss']
})
export class EquipmentRoomPageComponent implements OnInit {

  currentUser: User;
  product: Product;
  bookings: BookingOrder[];

  constructor() {
  }

  ngOnInit() {
  }

}
