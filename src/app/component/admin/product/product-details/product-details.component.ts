import { Component, OnInit } from '@angular/core';
import {AdminPageServiceService} from "../../../../services/admin-page-service.service";
import {Product} from "../../../../models/product";
import {map} from "rxjs/operators";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  editBool: boolean;
  product: Product;

  constructor(private productService: AdminPageServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.editBool = false;
    this.id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.id)
      .subscribe(productFromApi => {
        console.log(productFromApi);
        this.product = productFromApi
      });
  }

  switchToEdit(){
    this.editBool = !this.editBool;
    return this.editBool;
  }

}
