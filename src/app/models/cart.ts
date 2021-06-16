import {Product} from './product';
import {Order} from './order';
import {Basket} from './basket';

export class Cart {
  id: number;
  productName: string;
  productId: number;
  quantity: number;
  price: number;
  product: Product;
  totalPrice: number;

  constructor(id: number, productId: number,
              productName: string, quantity: number, product: Product, totalPrice: number) {
    this.id = id;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
    this.productId = product.id;
    this.productName = product.name;
  }

}
