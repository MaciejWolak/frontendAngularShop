import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../../../services/login.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore

  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['login']).then(r => console.log('logout'));
  }

}
