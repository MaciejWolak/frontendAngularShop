import {User} from './user';
import {Cart} from './cart';

export class Order {
  id: number;
  user: User;
  grandTotalPrice: number;
  createDateTime: string;
  itemCarts: Cart[];
  cart: Cart;
  userId: number;
  productId: number;
  quantity: number;


  constructor(id: number, user: User, grandTotalPrice: number, createDateTime: string, itemCart: Cart) {
    this.userId = user.id;
    this.productId = itemCart.product.id;
    this.quantity = itemCart.quantity;
  }
}
