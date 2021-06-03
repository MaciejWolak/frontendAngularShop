import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
import {UserService} from '../../../services/user.service';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {

  public userTable: User[];
  public deleteUser: User;
  public editUser: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void{
    this.userService.getUsers().subscribe((response: User[]) => {
      this.userTable = response;
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
  updateUser(id: number, user: User): void {
    this.userService.updateUser(id, user).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
      },
      error => {
        console.log(error);
      });
  }
  addProduct(addForm: NgForm): void {
    this.userService.addUser(addForm.value).subscribe((response: User) => {
        console.log(response);
        this.getUsers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onOpenModal(user: User, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUserModal');
    }
    if (mode === 'delete') {
      this.deleteUser = user;
      button.setAttribute('data-target', '#deleteUserModal');
    }
    if (mode === 'edit') {
      this.editUser = user;
      button.setAttribute('data-target', '#updateUserModal');
    }
    container.appendChild(button);
    button.click();
  }

}
