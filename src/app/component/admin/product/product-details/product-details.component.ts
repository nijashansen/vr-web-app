import { Component, OnInit } from '@angular/core';
import {AdminPageServiceService} from "../../../../services/admin-page-service.service";
import {Product} from "../../../../models/product";
import {map} from "rxjs/operators";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../../../models/category";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  editBool: boolean;
  product: Product;
  Categories: Category[];

  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
  });


  constructor(private productService: AdminPageServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.editBool = false;
    this.id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.id)
      .subscribe(productFromApi => {
        console.log(productFromApi);
        this.product = productFromApi
      });
    this.productService.getCategories();
  }

  switchToEdit(){
    this.editBool = !this.editBool;
    return this.editBool;
  }



  save() {
    const product = this.productForm.value;
    product.id = this.id;
    this.productService.updateProduct(product)
      .subscribe(() => {
        this.router.navigateByUrl('admin/equipment');
      });
  }

}
