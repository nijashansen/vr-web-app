import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {environment} from '../../environments/environment';
import {Category} from '../models/Category';

@Injectable({
  providedIn: 'root'
})

export class AdminPageServiceService {
  productApiUrl = environment.apiUrl + 'products';
  categoryApiUrl = environment.apiUrl + 'categories';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productApiUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.productApiUrl + '/' + id);
  }

  createProduct(prod: any): Observable<Product> {
    return this.http.post<Product>(this.productApiUrl, prod);
  }

  updateProduct(prod: Product): Observable<any> {
    return this.http.put(this.productApiUrl, prod);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<Product>(this.productApiUrl + '/' + id);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryApiUrl);
  }
}
