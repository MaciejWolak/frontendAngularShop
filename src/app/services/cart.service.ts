import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {cartAuthUrl, cartsUrl} from '../config/api';
import {Cart} from '../models/cart';
const HTTP_OPTIONS = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(cartsUrl);
  }

  addCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(cartsUrl, cart, this.getAuthTokenHeader());
  }

  // tslint:disable-next-line:typedef
  removeCart(id: number) {
    return this.http.delete<Cart>(cartAuthUrl + '/' + id, this.getAuthTokenHeader());
  }

  getCart(id: number): Observable<Cart> {
    return this.http.get<Cart>(cartsUrl + '/' + id);
  }

  updateCart(id: number, cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(cartsUrl + '/' + id, cart, this.getAuthTokenHeader());
  }
  getAuthTokenHeader(): object {
    const authToken = localStorage.getItem('authToken');
    return {headers: HTTP_OPTIONS.headers.append('Authorization', authToken)};
  }
}
