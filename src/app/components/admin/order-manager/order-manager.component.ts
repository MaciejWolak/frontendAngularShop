import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../models/order';
import {Product} from '../../../models/product';
import {Cart} from '../../../models/cart';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {

  @Input() cart: Cart;

  public orderTable: Order[];
  public deleteOrder: Order;
  public orderDetails: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }


  getOrders(): void{
    this.orderService.getOrders().subscribe((response: Order[]) => {
      this.orderTable = response;
    });
  }

  removeOrder(id: number): void{
    this.orderService.removeOrder(id).subscribe(order => {
      console.log(order);
    });
    console.log('ok');
    this.orderTable = this.orderTable.filter(order => order.id !== id);
  }

  getOrder(id: number): void {
    this.orderService.getOrder(id).subscribe(order => {
      console.log(order);
    });
  }

  public onOpenModal(order: Order, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'delete') {
      this.deleteOrder = order;
      button.setAttribute('data-target', '#deleteSongModal');
    }
    if (mode === 'details') {
      this.orderDetails = order;
      button.setAttribute('data-target', '#deleteSongModal');
    }
    container.appendChild(button);
    button.click();
  }

}
