import { Component, OnInit } from '@angular/core';
import {AdminPageServiceService} from "../../../../services/admin-page-service.service";
import {Observable} from "rxjs";
import {Product} from "../../../Shared/models/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {take} from "rxjs/operators";
import {Category} from "../../../Shared/models/Category";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  id: number;
  categories: Category[];

  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    categoryId: new FormControl('')
  });

  constructor(private productsService: AdminPageServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(this.id)
      .subscribe(productFromRest => {
        this.productForm.patchValue({
          name: productFromRest.name,
          description: productFromRest.description,
          categoryId: productFromRest.category.id
        });
      });
    this.getCategories();
  }

  getCategories() {
    return this.productsService.getCategories().pipe(take(1))
      .subscribe(listOfCategories =>
        this.categories = listOfCategories);
  }

  save() {
    const product = this.productForm.value;
    product.id = this.id;
    this.productsService.updateProduct(product)
      .subscribe(() => {
        this.router.navigateByUrl('admin-equipment-list');
      });
  }

}
