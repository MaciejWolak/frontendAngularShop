import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {

  userTable: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.userTable = users;
    });
  }

  removeUser(id: number): void{
    this.userService.removeUser(id).subscribe(user => {
      console.log(user);
    });
    console.log('ok');
    this.userTable = this.userTable.filter(user => user.id !== id);
  }

  getUser(id: number): void{
    this.userService.getUser(id).subscribe(user => {
      console.log(user);
    });

  }

}
