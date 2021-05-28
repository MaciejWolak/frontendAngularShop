import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {productsUrl, usersUrl} from '../config/api';
import {Observable} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  removeUser(id: number): Observable<User> {
    return this.http.delete<User>(usersUrl + '/' + id);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(usersUrl + '/' + id);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(usersUrl);
  }
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(usersUrl + '/' + id, user);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(usersUrl, user);
  }
}
