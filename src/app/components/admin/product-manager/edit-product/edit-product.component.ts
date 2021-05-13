import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Product} from '../../../../models/product';
import {ProductService} from '../../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {


  updateProductForm: FormGroup;

  @Input() product: Product;
  currentProduct: Product;
  private message: string;

  constructor(private builder: FormBuilder,
              private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }


  // tslint:disable-next-line:typedef
  getProduct(id) {
    this.productService.getProduct(id).subscribe(
      product => {
        this.currentProduct = product;
        console.log(product);
      },
      error => {
        console.log(error);
      });
  }

  // tslint:disable-next-line:typedef
  updateProduct() {
    console.log('ok');
    this.productService.updateProduct(this.currentProduct.id, this.currentProduct).subscribe(
      response => {
        console.log(response);
        this.message = 'The product was updated!';
      },
      error => {
        console.log(error);
      });
  }


}

