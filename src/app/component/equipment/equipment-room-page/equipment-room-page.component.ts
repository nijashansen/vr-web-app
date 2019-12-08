import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {Product} from '../../../models/Product';
import {AuthenticationService} from '../../../services/authentication.service';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-equipment-room-page',
  templateUrl: './equipment-room-page.component.html',
  styleUrls: ['./equipment-room-page.component.scss']
})
export class EquipmentRoomPageComponent implements OnInit {

  currentUser: User;
  product: Product;

  constructor(private auth: AuthenticationService, private prod: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.currentUser = this.auth.User;
    this.prod.getProduct(+this.route.snapshot.paramMap.get('id')).subscribe(result => {
      this.product = result;
    });
  }

}
