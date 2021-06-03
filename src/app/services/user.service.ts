import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {detailsUrl, userAuthUrl, usersUrl} from '../config/api';
import {Observable} from 'rxjs';

const HTTP_OPTIONS = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })};


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  removeUser(id: number): Observable<User> {
    return this.http.delete<User>(userAuthUrl + '/' + id, this.getAuthTokenHeader());
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(usersUrl + '/' + id, this.getAuthTokenHeader());
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(usersUrl, this.getAuthTokenHeader());
  }
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(userAuthUrl + '/' + id, user, this.getAuthTokenHeader());
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(userAuthUrl, user, this.getAuthTokenHeader());
  }
  getAuthTokenHeader(): object {
    const authToken = localStorage.getItem('authToken');
    return {headers: HTTP_OPTIONS.headers.append('Authorization', authToken)};
  }
  getDetails(): Observable<User> {
    return this.http.get<User>(detailsUrl, this.getAuthTokenHeader());
  }
}
