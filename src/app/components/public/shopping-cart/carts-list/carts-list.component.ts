import {Component, Input, OnInit} from '@angular/core';
import {MessengerService} from '../../../../services/messenger.service';
import {Product} from '../../../../models/product';
import {User} from '../../../../models/user';
import {Cart} from '../../../../models/cart';
import {OrderService} from '../../../../services/order.service';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-carts-list',
  templateUrl: './carts-list.component.html',
  styleUrls: ['./carts-list.component.css']
})
export class CartsListComponent implements OnInit {

  @Input() cart: Cart;
  @Input() user: User;


  authority: string;


  carts  = [];
  itemCarts = [];

  thisCarts = this.carts;
  request = {
    itemCarts : this.thisCarts
  };


  cartTotal = 0;

  currentUser: number;

  num: number;


  constructor(private msg: MessengerService,
              private orderService: OrderService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.msg.getMessage().subscribe((product: Product) => {
      this.addProductToCart(product);
      console.log(product.quantity);
    });
    this.getDetails();
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
        id: 0, product: undefined, totalPrice: 0,
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

    this.request = {
      itemCarts: this.carts.map(({ quantity, productId }) => ({
        quantity,
        product: {
          id: productId
        }
      }))
    };


    console.log(this.request);
// @ts-ignore
    this.orderService.addOrder(this.request).subscribe();

    window.location.reload();
  }

  getDetails(): void {
    this.userService.getDetails().subscribe(user => {
      this.authority = user.authority.toString();
    });
  }

}
