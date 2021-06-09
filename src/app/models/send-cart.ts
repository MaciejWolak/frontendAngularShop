import {Product} from './product';
import {Order} from './order';
import {Cart} from './cart';
import {User} from './user';

export class SendCart {
  productId: number;
  userId: number;
  quantity: number;
  product: Product;
  order: Order;
  cart: Cart[];
  user: User;

  constructor(product: Product, order: Order, cart: Cart ) {

    this.productId = cart.product.id;
    this.userId = order.user.id;
    this.quantity = cart.id;
  }
}
