import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {Category} from '../models/category';

const categoryApiUrl = environment.apiUrl + 'categories';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(categoryApiUrl);
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(categoryApiUrl + '/' + id);
  }

  createCategory(prod: Category): Observable<Category> {
    return this.http.post<Category>(categoryApiUrl, prod);
  }

  updateCategory(prod: Category): Observable<any> {
    return this.http.put(categoryApiUrl, prod);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(categoryApiUrl + '/' + id);
  }
}
