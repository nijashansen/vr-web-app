import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';
import {CategoryService} from '../../../services/Category/category.service';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.categoryService.getCategories().pipe(take(1))
      .subscribe(categoriesFromRest =>
        this.categories = categoriesFromRest);
  }

  delete(id: number) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.refresh();
    });
  }
}
