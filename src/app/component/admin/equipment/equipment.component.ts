import {Component, OnInit} from '@angular/core';
import {Category} from '../../../models/category';
import {FilterPageProductList} from '../../../models/FilterPageProductList';
import {ProductService} from '../../../services/product.service';
import {CategoryService} from '../../../services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent implements OnInit {
  categories: Category[];
  currentPage: FilterPageProductList;
  pageSize: number;
  pageIndex: number;
  length: number;

  pageSizes: number[];
  filter: Category;
  all: Category;

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {
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

  delete(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadPage(this.pageIndex, this.pageSize, this.filter);
    });
  }

  onPageDataChange($event) {
    this.loadPage($event.pageIndex, $event.pageSize, this.filter);
  }

  private onFilterChange($event) {
    this.loadPage(this.currentPage.pageIndex, this.currentPage.itemsPrPage, $event.value);
  }

  private loadPage(pageIndex: number, pageSize: number, filter: Category) {
    if (filter.id === this.all.id) {
      this.productService.getProductsWithFilterPage({pageIndex: pageIndex, itemsPrPage: pageSize}).subscribe(result => {
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
      }).subscribe(result => {
        this.currentPage = result;
        this.pageSize = result.itemsPrPage;
        this.pageIndex = result.pageIndex;
        this.length = result.itemsTotal;
      });
    }
  }

  public onNavigate(id: number) {
    this.router.navigate(['admin/equipment/' + id]);
  }
}
