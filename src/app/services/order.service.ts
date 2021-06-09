import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {cartsUrl, orderAuthUrl, ordersUrl} from '../config/api';
import {Order} from '../models/order';
import {Cart} from '../models/cart';

const HTTP_OPTIONS = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })};
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(ordersUrl, this.getAuthTokenHeader());
  }

  addOrder(order: number): Observable<Order> {
    return this.http.post<Order>(ordersUrl, order, this.getAuthTokenHeader());
  }

  // tslint:disable-next-line:typedef
  removeOrder(id: number) {
    return this.http.delete<Order>(orderAuthUrl + '/' + id, this.getAuthTokenHeader());
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(ordersUrl + '/' + id, this.getAuthTokenHeader());
  }

  updateOrder(id: number, order: Order): Observable<Order> {
    return this.http.put<Order>(ordersUrl + '/' + id, order, this.getAuthTokenHeader());
  }

  getCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(cartsUrl, this.getAuthTokenHeader());
  }
  getAuthTokenHeader(): object {
    const authToken = localStorage.getItem('authToken');
    return {headers: HTTP_OPTIONS.headers.append('Authorization', authToken)};
  }
}
