import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ordersUrl} from '../config/api';
import {Order} from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(ordersUrl);
  }

  addOrder(order: number): Observable<Order> {
    return this.http.post<Order>(ordersUrl, order);
  }

  // tslint:disable-next-line:typedef
  removeOrder(id: number) {
    return this.http.delete<Order>(ordersUrl + '/' + id);
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(ordersUrl + '/' + id);
  }

  updateOrder(id: number, order: Order): Observable<Order> {
    return this.http.put<Order>(ordersUrl + '/' + id, order);
  }
}
