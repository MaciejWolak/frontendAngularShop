import {User} from './user';
import {Cart} from './cart';

export class Order {
  id: number;
  user: User;
  grandTotalPrice: number;
  createDateTime: string;
  cart: Cart[];
  userId: number;
  productId: number;
  quantity: number;



  constructor(id: number, user: User, grandTotalPrice: number, createDateTime: string, cart: Cart) {
    this.userId = user.id;
    this.productId = cart.product.id;
    this.quantity = cart.quantity;
  }
}
