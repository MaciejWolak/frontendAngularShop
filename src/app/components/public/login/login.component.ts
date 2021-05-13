import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  model: any = {username: 'Admin', password: '12345678'};

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login() {
    this.loginService.login(this.model.username, this.model.password).subscribe(() => this.router.navigate(['/shop']),
      console.error);
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['']);
  }
}

