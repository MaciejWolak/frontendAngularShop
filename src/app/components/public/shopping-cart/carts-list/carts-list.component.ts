import {Component, Input, OnInit} from '@angular/core';
import {MessengerService} from '../../../../services/messenger.service';
import {Product} from '../../../../models/product';
import {User} from '../../../../models/user';
import {Cart} from '../../../../models/cart';
import {OrderService} from '../../../../services/order.service';

@Component({
  selector: 'app-carts-list',
  templateUrl: './carts-list.component.html',
  styleUrls: ['./carts-list.component.css']
})
export class CartsListComponent implements OnInit {

  @Input() cart: Cart;
  @Input() user: User;

  carts = [];

  cartTotal = 0;

  constructor(private msg: MessengerService,
              private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.msg.getMessage().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
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
    console.log(this.carts);
  }
  addOrder(): void{
    this.orderService.addOrder(this.user.id).subscribe(() => console.log('Done'));
  }
}
