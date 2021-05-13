import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../models/order';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {

  orderTable: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => {
      this.orderTable = orders;
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

}
