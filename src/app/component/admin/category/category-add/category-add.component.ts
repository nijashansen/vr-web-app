import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CategoryService} from "../../../../services/category.service";
import {Category} from "../../../../models/category";
import {BehaviorSubject, Observable} from "rxjs";
import {AdminPageServiceService} from "../../../../services/admin-page-service.service";
import {Location} from "@angular/common";

const placeholderImage: string = 'https://1001freedownloads.s3.amazonaws.com/vector/thumb/63319/Placeholder.png';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  category: Category;
  categoryForm: FormGroup;
  usedImageUrl: string;
  tempImageUrl: string;
  private currentImageBehave: BehaviorSubject<string>;
  private currentImageObv: Observable<string>;

  constructor(private categoryService: CategoryService, private productService: AdminPageServiceService, private location: Location) {
    this.usedImageUrl = placeholderImage;
    this.currentImageBehave = new BehaviorSubject<string>(placeholderImage);
    this.currentImageObv = this.currentImageBehave.asObservable();
    this.categoryForm = new FormGroup({
      imgUrl: new FormControl(''),
      name: new FormControl( ''),
      description: new FormControl(''),
    });
  }

  get formImgUrl() {
    return this.categoryForm.get('imgUrl');
  }

  get formName() {
    return this.categoryForm.get('name');
  }

  get formDescription() {
    return this.categoryForm.get('description');
  }

  ngOnInit() {

  }

  onSetImage() {
    this.currentImageBehave.next(this.tempImageUrl);
    this.usedImageUrl = this.tempImageUrl;
    this.formImgUrl.setValue(this.usedImageUrl);
  }

  setDefault() {
    this.currentImageBehave.next(placeholderImage);
    this.tempImageUrl = '';
    this.formImgUrl.setValue('');
  }

  onCancel() {
    this.location.back();
  }

  onAdd() {
    if (this.categoryForm.valid) {
      console.log(this.categoryForm);
      this.categoryService.createCategory({
        name: this.formName.value,
        description: this.formDescription.value,
        imgUrl: this.formImgUrl.value,
      })
        .subscribe(() => {
          this.location.back();
        });
    }
  }
}
