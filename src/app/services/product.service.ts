import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/Product';
import {FilterPageProductList} from '../models/FilterPageProductList';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productApiUrl = environment.apiUrl + 'products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productApiUrl);
  }

  getProductsWithFilterPage(filter: FilterPageProductList): Observable<FilterPageProductList> {
    return this.http.post<FilterPageProductList>(this.productApiUrl + 'withfilter', filter);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.productApiUrl + '/' + id);
  }

  createProduct(prod: Product): Observable<Product> {
    return this.http.post<Product>(this.productApiUrl, prod);
  }

  updateProduct(prod: Product): Observable<any> {
    return this.http.put(this.productApiUrl, prod);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<Product>(this.productApiUrl + '/' + id);
  }
}
