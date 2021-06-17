import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../../../services/login.service';
import {UserService} from '../../../../services/user.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router,
              private userService: UserService) { }

  authority: string;

  ngOnInit(): void {
    this.getDetails();
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['login']).then(r => console.log('logout'));
    location.reload();
  }

  readLocalStorageValue(key: string): string {
    return localStorage.getItem(key);
  }
  getDetails(): void {
     this.userService.getDetails().subscribe(user => {
       this.authority = user.authority.toString();
    });
  }

}
