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



  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
