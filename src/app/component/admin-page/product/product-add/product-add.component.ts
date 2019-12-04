import { Component, OnInit } from '@angular/core';
import {Product} from "../../../Shared/models/Product";
import {Observable, pipe} from "rxjs";
import {AdminPageServiceService} from "../../../../services/admin-page-service.service";
import {Category} from "../../../Shared/models/Category";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  Categories: Category[];

  constructor(private productService: AdminPageServiceService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    return this.productService.getCategories().pipe(take(1))
      .subscribe(listOfCategories =>
        this.Categories = listOfCategories);
  }

  addProduct(prod: Product): Observable<Product>{
    return this.productService.createProduct(prod);
  }

}
