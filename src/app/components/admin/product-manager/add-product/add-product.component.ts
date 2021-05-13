import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;

  constructor(private builder: FormBuilder,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  // tslint:disable-next-line:typedef
  buildForm() {
    // @ts-ignore
    this.addProductForm = this.builder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        quantity: ['', Validators.required]
      }
    );
  }

  // tslint:disable-next-line:typedef
  addProduct() {
    this.productService.addProduct(this.addProductForm.value).subscribe(() => console.log('Done'),
      console.error);
    window.alert('Done');
    this.addProductForm.reset();
  }

}
