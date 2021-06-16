import {Component, Input, OnInit} from '@angular/core';
import {MessengerService} from '../../../../services/messenger.service';
import {Product} from '../../../../models/product';
import {User} from '../../../../models/user';
import {Cart} from '../../../../models/cart';
import {OrderService} from '../../../../services/order.service';
import {UserService} from '../../../../services/user.service';
import {CartService} from '../../../../services/cart.service';
import {Basket} from '../../../../models/basket';

@Component({
  selector: 'app-carts-list',
  templateUrl: './carts-list.component.html',
  styleUrls: ['./carts-list.component.css']
})
export class CartsListComponent implements OnInit {

  @Input() cart: Cart;
  @Input() user: User;

  carts  = [];
  itemCarts = [];




  thisCarts = this.carts;
  request = {
    itemCarts : this.thisCarts
  };




  cartTotal = 0;

  currentUser: number;

  num: number;

/*  private val: any = {
    "itemCarts": []
  };*/

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
/*    this.getDetails();
    console.log(this.currentUser);


    this.cart1.userId = this.currentUser;
    this.cart1.productId = 5;
    this.cart1.quantity = 1;*/
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


/*  onAddedToCart = (item) => {
    this.val.itemCarts.push({
      "quantity": item.quantity,
      "product": {
        "id": item.id
      }
    });
  }*/

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

    //this.onAddedToCart(this.val);
    // @ts-ignore
   // this.order.order.productId = this.carts.push({productId});
    // @ts-ignore
  //  this.order.itemCarts = this.carts;
    console.log(this.request);
// @ts-ignore
  this.orderService.addOrder(this.request).subscribe();
//console.log(localStorage.getItem(String(this.user.id)));
//this.orderService.addOrder(11).subscribe(() => console.log('Done'));
  }

  getDetails(): void {
    this.userService.getDetails().subscribe(user => {
      this.currentUser = user.id;
    });
  }
}
