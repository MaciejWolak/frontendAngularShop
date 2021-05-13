import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  productTable: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productTable = products;
    });
  }
  removeProduct(id: number): void{
    this.productService.removeProduct(id).subscribe(product => {
      console.log(product);
    });
    console.log('ok');
    this.productTable = this.productTable.filter(product => product.id !== id);
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe(product => {
      console.log(product);
    });
  }
}
