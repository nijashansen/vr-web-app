import {Component, OnInit} from '@angular/core';
import {AdminPageServiceService} from '../../../../services/admin-page-service.service';
import {Product} from '../../../../models/Product';
import {take} from 'rxjs/operators';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: AdminPageServiceService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.productService.getProducts().pipe(take(1))
      .subscribe(listOfProducts =>
        this.products = listOfProducts);
  }

  delete(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.refresh();
    });

  }
}
