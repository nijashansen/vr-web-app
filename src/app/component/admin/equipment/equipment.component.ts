import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {AdminPageServiceService} from '../../../services/admin-page-service.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent implements OnInit {

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
