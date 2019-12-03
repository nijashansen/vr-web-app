import { Component, OnInit } from '@angular/core';
import {AdminPageServiceService} from "../../../../services/admin-page-service.service";
import {Product} from "../../../Shared/models/Product";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: AdminPageServiceService) { }

  ngOnInit() {
  }

  refresh(){
    this.productService.getProducts().pipe(take(1))
      .subscribe(listOfProducts =>
      this.products = listOfProducts);
  }

  delete(id: number) {
    this.productService.deleteProduct(id);
    console.log('product with id: ' + id + ' was deleted')
    this.refresh();
  }

}
