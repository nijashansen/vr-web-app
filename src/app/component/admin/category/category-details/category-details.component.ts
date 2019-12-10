import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../services/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../../../models/category";
import {Form, FormControl, FormGroup} from "@angular/forms";
import {BehaviorSubject, Observable} from "rxjs";

const placeholderImage: string = 'https://1001freedownloads.s3.amazonaws.com/vector/thumb/63319/Placeholder.png';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  editBool: boolean;
  id: number;
  category: Category;
  categoryForm: FormGroup;
  usedImageUrl: string;
  tempImageUrl: string;
  private currentImageBehave: BehaviorSubject<string>;
  private currentImageObv: Observable<string>;

  get formImgUrl() {
    return this.categoryForm.get('imgUrl');
  }

  get formName() {
    return this.categoryForm.get('name');
  }

  get formDescription() {
    return this.categoryForm.get('description');
  }

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) {
    this.currentImageBehave = new BehaviorSubject<string>(placeholderImage);
    this.currentImageObv = this.currentImageBehave.asObservable();
  }

  ngOnInit() {
    this.editBool = false;
    this.id = +this.route.snapshot.paramMap.get('id');
    this.fetchData(this.id);
    this.categoryService.getCategory(this.id).subscribe((result) => {
      this.category = result;
    });
  }

  fetchData(id: number) {
    this.categoryService.getCategory(this.id)
      .subscribe(categoryFromApi => {
        this.category = categoryFromApi;
        this.categoryForm = new FormGroup({
          id: new FormControl({value: this.category.id}),
          name: new FormControl(this.category.name),
          imgUrl: new FormControl(this.category.imgUrl),
          description: new FormControl(this.category.description),
        });
        this.tempImageUrl = this.category.imgUrl;
        if (this.category.imgUrl) {
          this.currentImageBehave.next(this.category.imgUrl);
        }
        this.categoryForm.disable();
      });
  }

  onEdit() {
    this.categoryForm.enable();
  }

  onCommit() {
    this.categoryService.updateCategory({
      id: this.category.id,
      imgUrl: this.formImgUrl.value,
      description: this.formDescription.value,
      name: this.formName.value
    }).subscribe(() => this.fetchData(this.id));
    this.categoryForm.disable();
  }

  onCancel() {
    this.categoryForm.disable();
  }

  onSetImage() {
    this.currentImageBehave.next(this.tempImageUrl);
    this.usedImageUrl = this.tempImageUrl;
    this.formImgUrl.setValue(this.usedImageUrl);
  }

  setDefault() {
    this.currentImageBehave.next(placeholderImage);
    this.tempImageUrl = this.category.imgUrl;
    this.formImgUrl.setValue('');
  }


}
