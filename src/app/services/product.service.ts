import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {productsUrl} from '../config/api';
import {Product} from '../models/product';
import {Observable} from 'rxjs';

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
    return this.http.post<Product>(productsUrl, product);
  }

  // tslint:disable-next-line:typedef
  removeProduct(id: number) {
    return this.http.delete<Product>(productsUrl + '/' + id);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(productsUrl + '/' + id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(productsUrl + '/' + id, product);
  }
}
