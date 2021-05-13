import { Component, OnInit } from '@angular/core';
import {Cart} from '../../../models/cart';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-cart-manager',
  templateUrl: './cart-manager.component.html',
  styleUrls: ['./cart-manager.component.css']
})
export class CartManagerComponent implements OnInit {

  cartTable: Cart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCarts().subscribe((carts) => {
      this.cartTable = carts;
    });
  }

  removeCart(id: number): void{
    this.cartService.removeCart(id).subscribe(cart => {
      console.log(cart);
    });
    console.log('ok');
    this.cartTable = this.cartTable.filter(cart => cart.id !== id);
  }

  getCart(id: number): void {
    this.cartService.getCart(id).subscribe(cart => {
      console.log(cart);
    });
  }

}
