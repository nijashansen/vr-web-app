import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../models/category';
import {GenerateAuthenticationHeader} from '../../Functions/GenerateAuthenticationHeader';
import {AuthenticationService} from '../Authentication/authentication.service';

const categoryApiUrl = environment.apiUrl + 'categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient, private as: AuthenticationService) {
  }

  getCategories(): Observable<Category[]> {
    console.log(GenerateAuthenticationHeader(this.as.Token));
    return this.http.get<Category[]>(categoryApiUrl, GenerateAuthenticationHeader(this.as.Token));
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(categoryApiUrl + '/' + id, GenerateAuthenticationHeader(this.as.Token));
  }

  createCategory(prod: any): Observable<Category> {
    return this.http.post<Category>(categoryApiUrl, prod, GenerateAuthenticationHeader(this.as.Token));
  }

  updateCategory(prod: Category): Observable<any> {
    return this.http.put(categoryApiUrl, prod, GenerateAuthenticationHeader(this.as.Token));
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(categoryApiUrl + '/' + id, GenerateAuthenticationHeader(this.as.Token));
  }
}
