import {Component, Input, OnInit} from '@angular/core';
import {Cart} from '../../../../../models/cart';
import {Product} from '../../../../../models/product';
import {UserService} from '../../../../../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() product: Product;
  @Input() cart: Cart;


  public removeOne(): void{
    this.cart.quantity = this.cart.quantity - 1;
    if (this.cart.quantity === 0){
      this.cart == null;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
