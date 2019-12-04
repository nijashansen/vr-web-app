import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../component/Shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = environment.apiUrl + 'products';

  constructor(private http: HttpClient) {}

  /*getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }*/

  getProduct(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/' + id);
  }

  /*createProduct(prod: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, prod);
  }

  updateProduct(prod: Product) {
    this.http.put(this.apiUrl, prod);
  }

  deleteProduct(id: number) {
    this.http.delete(this.apiUrl + '/' + id);
  }*/
}
