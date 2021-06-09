import {Product} from './product';
import {Order} from './order';

export class Cart {
  id: number;
  productName: string;
  productId: number;
  quantity: number;
  price: number;
  product: Product;
  order: Order;
  totalPrice: number;

  constructor(id: number, productId: number,
              productName: string, quantity: number, product: Product, totalPrice: number, order: Order) {
    this.id = id;
    this.quantity = quantity;
    this.productId = product.id;
    this.productName = product.name;
    this.price = product.price;
    this.totalPrice = quantity * product.price;
    this.id = order.id;
  }


}
