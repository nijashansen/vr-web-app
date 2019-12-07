import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {ProductService} from '../../../services/product.service';
import {Category} from '../../../models/category';
import {FilterPageProductList} from '../../../models/FilterPageProductList';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-equipment-overview-page',
  templateUrl: './equipment-overview-page.component.html',
  styleUrls: ['./equipment-overview-page.component.scss']
})
export class EquipmentOverviewPageComponent implements OnInit {
  categories: Category[];
  products: Product[];
  currentPage: FilterPageProductList;
  pageSize: number;
  pageIndex: number;
  length: number;

  pageSizes: number[];
  filter: Category;
  all: Category;

  constructor(private categoryService: CategoryService, private productService: ProductService) {
    this.pageSizes = [6, 12, 18];
    this.all = {id: 0, name: 'all'};
    this.filter = this.all;
    this.pageIndex = 0;
    this.pageSize = this.pageSizes[1];
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;
    });
    this.loadPage(this.pageIndex, this.pageSize, this.filter);
  }

  onPageDataChange(event) {
    this.loadPage(event.pageIndex, event.pageSize, this.filter);
  }

  private onFilterChange(event) {
    this.loadPage(this.currentPage.pageIndex, this.currentPage.itemsPrPage, event);
  }

  private loadPage(pageIndex: number, pageSize: number, filter: Category) {
    if (filter.id === this.all.id) {
      this.productService.getProductsWithFilterPage({pageIndex: pageIndex, itemsPrPage: pageSize}).subscribe(result => {
        console.log(result);
        this.currentPage = result;
        this.pageSize = result.itemsPrPage;
        this.pageIndex = result.pageIndex;
        this.length = result.itemsTotal;
      });
    } else {
      this.productService.getProductsWithFilterPage({
        pageIndex: pageIndex,
        itemsPrPage: pageSize,
        filter: this.filter
      })
        .subscribe(result => {
          console.log(result);
          this.currentPage = result;
          this.pageSize = result.itemsPrPage;
          this.pageIndex = result.pageIndex;
          this.length = result.itemsTotal;
        });
    }
  }
}
