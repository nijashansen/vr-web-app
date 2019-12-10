import {Component, OnInit} from '@angular/core';
import {AdminPageServiceService} from '../../../../services/admin-page-service.service';
import {Product} from '../../../../models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../../../models/category';
import {CategoryService} from '../../../../services/category.service';
import {BehaviorSubject, Observable} from 'rxjs';

const placeholderImage: string = 'https://1001freedownloads.s3.amazonaws.com/vector/thumb/63319/Placeholder.png';

@Component({
  selector: 'app-product-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.scss']
})
export class EquipmentDetailsComponent implements OnInit {


  id: number;
  editBool: boolean;
  product: Product;
  categories: Category[];
  productForm: FormGroup;
  usedImageUrl: string;
  tempImageUrl: string;
  privat;
  private currentImageBehave: BehaviorSubject<string>;
  private currentImageObv: Observable<string>;

  constructor(private productService: AdminPageServiceService, private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) {
    this.usedImageUrl = placeholderImage;
    this.currentImageBehave = new BehaviorSubject<string>(placeholderImage);
    this.currentImageObv = this.currentImageBehave.asObservable();
  }

  get formImgUrl() {
    return this.productForm.get('imgUrl');
  }

  get formName() {
    return this.productForm.get('name');
  }

  get formDescription() {
    return this.productForm.get('description');
  }

  get formShortDescription() {
    return this.productForm.get('shortDescription');
  }

  get formCategory() {
    return this.productForm.get('category');
  }

  ngOnInit() {
    this.editBool = false;
    this.id = +this.route.snapshot.paramMap.get('id');
    this.fetchData(this.id);
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result;
      if (this.product && this.formCategory.value !== '') {
        this.formCategory.setValue(this.product.category.id);
      }
    });

  }

  fetchData(id: number) {
    this.productService.getProduct(this.id)
      .subscribe(productFromApi => {
        this.product = productFromApi;
        this.productForm = new FormGroup({
          id: new FormControl({value: this.product.id}),
          imgUrl: new FormControl(''),
          name: new FormControl(this.product.name),
          description: new FormControl(this.product.description),
          shortDescription: new FormControl(this.product.description),
          category: new FormControl(''),
        });
        if (this.categories) {
          this.formCategory.setValue(this.product.category.id);
        }
        this.tempImageUrl = this.product.imgUrl;
        if (this.product.imgUrl) {
          this.currentImageBehave.next(this.product.imgUrl);
        }
        this.productForm.disable();
      });
  }

  onEdit() {
    this.productForm.enable();
  }

  onCommit() {
    this.productService.updateProduct({
      id: this.product.id,
      imgUrl: this.formImgUrl.value,
      category: this.categories.find(s => s.id === this.formCategory.value),
      description: this.formDescription.value,
      name: this.formName.value
    }).subscribe(() => this.fetchData(this.id));
    this.productForm.disable();
  }

  onCancel() {
    this.productForm.disable();
  }

  onSetImage() {
    this.currentImageBehave.next(this.tempImageUrl);
    this.usedImageUrl = this.tempImageUrl;
    this.formImgUrl.setValue(this.usedImageUrl);
  }

  setDefault() {
    this.currentImageBehave.next(placeholderImage);
    this.tempImageUrl = this.product.imgUrl;
    this.formImgUrl.setValue('');
  }
}
