import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {productsAuthUrl, productsUrl} from '../config/api';
import {Product} from '../models/product';
import {Observable} from 'rxjs';

const HTTP_OPTIONS = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(productsAuthUrl, product, this.getAuthTokenHeader());
  }


  removeProduct(id: number): Observable<void> {
    return this.http.delete<void>(productsAuthUrl + '/' + id, this.getAuthTokenHeader());
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(productsUrl + '/' + id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(productsAuthUrl + '/' + id, product, this.getAuthTokenHeader());
  }
  getAuthTokenHeader(): object {
    const authToken = localStorage.getItem('authToken');
    return {headers: HTTP_OPTIONS.headers.append('Authorization', authToken)};
  }
}
