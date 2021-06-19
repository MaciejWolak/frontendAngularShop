import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../../models/product';
import {MessengerService} from '../../../../../services/messenger.service';
import {Cart} from '../../../../../models/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() cart: Cart;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  addProductToCart(): void {
    this.msg.sendMessage(this.product);
    this.product.currentTotalUnitsInStock = this.product.currentTotalUnitsInStock - 1;
  }
  removeProductFromCart(): void {
    this.cart.quantity = this.cart.quantity - 1;
    this.product.currentTotalUnitsInStock = this.product.currentTotalUnitsInStock + 1;
  }
}
