import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CategoryService} from "../../../../services/category.service";

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  categoryForm = new FormGroup({
    name: new FormControl(''),
  });


  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
  }

  createCategory() {
    const category = this.categoryForm.value;
    console.log(category);
    this.categoryService.createCategory(category)
      .subscribe(() => {
        this.router.navigateByUrl('/admin/category');
      });
  }
}
