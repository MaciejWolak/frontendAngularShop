import {Component, Input, OnInit} from '@angular/core';
import {Cart} from '../../../models/cart';
import {CartService} from '../../../services/cart.service';
import {Order} from '../../../models/order';

@Component({
  selector: 'app-cart-manager',
  templateUrl: './cart-manager.component.html',
  styleUrls: ['./cart-manager.component.css']
})
export class CartManagerComponent implements OnInit {

  public cartTable: Cart[];
  public deleteCart: Cart;
  public editCart: Cart;
  public detailsCart: Cart;

  @Input() order: Order;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCarts();
  }
  getCarts(): void{
    this.cartService.getCarts().subscribe((response: Cart[]) => {
      this.cartTable = response;
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

  updateCart(id: number, cart: Cart): void {
    this.cartService.updateCart(id, cart).subscribe(
      (response: Cart) => {
        console.log(response);
        this.getCarts();
      },
      error => {
        console.log(error);
      });
  }

  public onOpenModal(cart: Cart, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editCart = cart;
      button.setAttribute('data-target', '#updateCartModal');
    }
    if (mode === 'delete') {
      this.deleteCart = cart;
      button.setAttribute('data-target', '#deleteCartModal');
    }
    container.appendChild(button);
    button.click();
  }

}
