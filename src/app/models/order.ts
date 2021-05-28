import {User} from './user';
import {Cart} from './cart';

export class Order {
  id: number;
  user: User;
  grandTotalPrice: number;
  createDateTime: string;
  cart: Cart;



  constructor(id: number, user: User, grandTotalPrice: number, createDateTime: string, cart: Cart) {
    this.id = id;
    this.user = user;
    this.grandTotalPrice = grandTotalPrice;
    this.createDateTime = createDateTime;
    this.cart =  cart;
  }
}
