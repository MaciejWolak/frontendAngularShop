import {Component, Input, OnInit} from '@angular/core';
import {MessengerService} from '../../../../services/messenger.service';
import {Product} from '../../../../models/product';
import {User} from '../../../../models/user';
import {Cart} from '../../../../models/cart';
import {OrderService} from '../../../../services/order.service';
import {UserService} from '../../../../services/user.service';
import {CartService} from '../../../../services/cart.service';

@Component({
  selector: 'app-carts-list',
  templateUrl: './carts-list.component.html',
  styleUrls: ['./carts-list.component.css']
})
export class CartsListComponent implements OnInit {

  @Input() cart: Cart;
  @Input() user: User;

  cart1: Cart;

  carts = [];

  cartTotal = 0;

  currentUser: number;

  num: number;

  constructor(private msg: MessengerService,
              private orderService: OrderService,
              private userService: UserService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.msg.getMessage().subscribe((product: Product) => {
      this.addProductToCart(product);
      console.log(product.quantity);
    });
    this.getDetails();
    console.log(this.currentUser);

/*
    this.cart1.order.user.id = this.currentUser;
    this.cart1.product.id = 35;
    this.cart1.quantity = 5;
    console.log(this.currentUser);*/
  }

  // tslint:disable-next-line:typedef
  addProductToCart(product: Product) {

    let productExists = false;

    for (const i in this.carts) {
      if (this.carts[i].productId === product.id) {
        this.carts[i].quantity++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.carts.push({
        productId: product.id,
        productName: product.name,
        quantity: 1,
        price: product.price
      });
    }


    this.cartTotal = 0;
    this.carts.forEach(item => {
      this.cartTotal += (item.quantity * item.price);
    });
  }




  showCarts(): void{
    console.log(this.cart);
  }
  addOrder(): void{
//this.cartService.addCart(this.carts, this.currentUser).subscribe();
//console.log(localStorage.getItem(String(this.user.id)));
console.log(this.carts);
console.log(this.currentUser);
window.alert('ok');
//this.orderService.addOrder(11).subscribe(() => console.log('Done'));
  }

  getDetails(): void {
    this.userService.getDetails().subscribe(user => {
      this.currentUser = user.id;
    });
  }
}
