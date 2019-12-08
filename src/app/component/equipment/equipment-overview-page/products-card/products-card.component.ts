import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../../models/product';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {

  @Input() product: Product;
  @Output() navigateEvent: EventEmitter<number>;

  constructor() {
    this.navigateEvent = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  private onClick() {
    this.navigateEvent.emit(this.product.id);
  }

}
