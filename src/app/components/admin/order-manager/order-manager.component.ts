import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../models/order';
import {Cart} from '../../../models/cart';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {

  @Input() cart: Cart;
  public cartTable: Cart[];
  public orderTable: Order[];
  public deleteOrder: Order;
  public orderDetails: Order;

  constructor(private orderService: OrderService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getOrders();
    this.getCarts();
  }
  getCarts(): void{
    this.cartService.getCarts().subscribe((response: Cart[]) => {
      this.cartTable = response;
    });
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
      button.setAttribute('data-target', '#deleteOrderModal');
    }
    if (mode === 'details') {
      this.orderDetails = order;
      button.setAttribute('data-target', '#detailsSongModal');
    }
    container.appendChild(button);
    button.click();
  }

}
