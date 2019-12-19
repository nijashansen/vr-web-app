/* tslint:disable:object-literal-shorthand */
import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/Category/category.service';
import {ProductService} from '../../../services/Product/product.service';
import {Category} from '../../../models/category';
import {FilterPageProductList} from '../../../models/FilterPageProductList';
import {Router} from '@angular/router';

@Component({
  selector: 'app-equipment-overview-page',
  templateUrl: './equipment-overview-page.component.html',
  styleUrls: ['./equipment-overview-page.component.scss']
})
export class EquipmentOverviewPageComponent implements OnInit {
  categories: Category[];
  currentPage: FilterPageProductList;
  pageSize: number;
  pageIndex: number;
  length: number;

  pageSizes: number[];
  filter: Category;
  all: Category;

  constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router) {
    this.pageSizes = [6, 12, 18];
    this.all = {id: 0, name: 'all', imgUrl: 'all', description: 'all'};
    this.filter = this.all;
    this.pageIndex = 0;
    this.pageSize = this.pageSizes[0];
    this.currentPage = {
      pageIndex: this.pageIndex,
      itemsPrPage: this.pageSize
    };
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;
    });
    this.loadPage(this.pageIndex, this.pageSize, this.filter);
  }



  public navigateTo($event: number) {
    this.router.navigate(['/equipment/' + $event]);
  }

  onPageDataChange(event) {
    this.loadPage(event.pageIndex, event.pageSize, this.filter);
  }

  private onFilterChange(event) {
    this.loadPage(this.pageIndex, this.pageSize, event.value);
  }

  private loadPage(pageIndex: number, pageSize: number, filter: Category) {
    console.log(filter);
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
        filterCategory: this.filter
      }).subscribe(result => {
        this.currentPage = result;
        this.pageSize = result.itemsPrPage;
        this.pageIndex = result.pageIndex;
        this.length = result.itemsTotal;
      });
    }
  }
}
