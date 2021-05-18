import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {loginUrl} from '../config/api';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  a: string;

  login(username: string, password: string): Observable<any>  {
    return this.http.post(loginUrl, {username, password}, this.httpOptions).pipe(tap(r => this.headAuthToken(r)));
  }
  private headAuthToken(r: any): string{
    localStorage.setItem('authToken', r.authToken);
    const a = r.authority;
    // localStorage.setItem('role', r.authority);
    return this.a;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  private getAuthTokenHeader(): object {
    const authToken = localStorage.getItem('authToken');
    return {headers: this.httpOptions.headers.append('Authorization', authToken)};
  }
  logout(): void {
    localStorage.clear();
  }

}
