import {Component, OnInit} from '@angular/core';
import {Product} from "../../../Shared/models/Product";
import {Observable, pipe} from "rxjs";
import {AdminPageServiceService} from "../../../../services/admin-page-service.service";
import {Category} from "../../../Shared/models/Category";
import {take} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    categoryId: new FormControl('')
  });

  Categories: Category[];

  constructor(private productService: AdminPageServiceService,
              private router: Router) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    return this.productService.getCategories().pipe(take(1))
      .subscribe(listOfCategories =>
        this.Categories = listOfCategories);
  }

  createProduct(){
    const product = this.productForm.value;
    console.log(product)
    this.productService.createProduct(product)
      .subscribe(() => {
        this.router.navigateByUrl('/admin-equipment-list')
      });
  }

}
