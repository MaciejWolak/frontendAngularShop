import {Component, Input, OnInit} from '@angular/core';
import {Cart} from '../../../../../models/cart';
import {Product} from '../../../../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() product: Product;
  @Input() cart: Cart;


  public removeOne(): void {
    this.cart.quantity -= 1;
    this.product.currentTotalUnitsInStock += 1;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
