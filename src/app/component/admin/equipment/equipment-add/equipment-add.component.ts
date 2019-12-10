import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../models/product';
import {Observable, pipe} from 'rxjs';
import {AdminPageServiceService} from '../../../../services/admin-page-service.service';
import {Category} from '../../../../models/category';
import {take} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './equipment-add.component.html',
  styleUrls: ['./equipment-add.component.scss']
})
export class EquipmentAddComponent implements OnInit {

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

  createProduct() {
    const product = this.productForm.value;
    console.log(product);
    this.productService.createProduct(product)
      .subscribe(() => {
        this.router.navigateByUrl('/admin/equipment');
      });
  }

}
