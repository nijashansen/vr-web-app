import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../models/product';
import {FilterPageProductList} from '../../models/FilterPageProductList';
import {GenerateAuthenticationHeader} from '../../Functions/GenerateAuthenticationHeader';
import {AuthenticationService} from '../Authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productApiUrl = environment.apiUrl + 'products';

  constructor(private http: HttpClient, private as: AuthenticationService) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productApiUrl, GenerateAuthenticationHeader(this.as.Token));
  }

  getProductsWithFilterPage(filter: FilterPageProductList): Observable<FilterPageProductList> {
    console.log(filter.filterCategory);
    return this.http.get<FilterPageProductList>(
      this.productApiUrl +
      '?pageIndex=' + filter.pageIndex +
      '&itemsPrPage=' + filter.itemsPrPage +
      '&filterID=' + (filter.filterCategory === undefined ? 0 : filter.filterCategory.id),
      GenerateAuthenticationHeader(this.as.Token));
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.productApiUrl + '/' + id, GenerateAuthenticationHeader(this.as.Token));
  }

  createProduct(prod: any): Observable<Product> {
    return this.http.post<Product>(this.productApiUrl, prod, GenerateAuthenticationHeader(this.as.Token));
  }

  updateProduct(prod: Product): Observable<any> {
    return this.http.put(this.productApiUrl, prod, GenerateAuthenticationHeader(this.as.Token));
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<Product>(this.productApiUrl + '/' + id, GenerateAuthenticationHeader(this.as.Token));
  }
}
