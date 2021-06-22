import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../../models/order';
import {OrderService} from '../../../../services/order.service';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  authority: string;
  @Input() order: Order;

  constructor(private orderService: OrderService, private userService: UserService) { }

  ngOnInit(): void {
    this.getDetails();
  }

    removeOrder(id: number): void{
      this.orderService.removeOrder(id).subscribe(order => {
        console.log(order);
      });
      location.reload();
    }

  public onOpenModal(order: Order, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'delete') {
      this.order = order;
      button.setAttribute('data-target', '#deleteOrderModal');
    }
    if (mode === 'details') {
      this.order = order;
      button.setAttribute('data-target', '#detailsOrderModal');
      console.log(this.order);
    }
    container.appendChild(button);
    button.click();
  }

  getDetails(): void {
    this.userService.getDetails().subscribe(user => {
      this.authority = user.authority.toString();
    });
  }

}
