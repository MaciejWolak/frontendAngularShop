import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  public productTable: Product[];
  public editProduct: Product;
  public deleteProduct: Product;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void{
    this.productService.getProducts().subscribe((response: Product[]) => {
      this.productTable = response;
    });
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe(product => {
      console.log(product);
    });
  }

  removeProduct(id: number): void{
    this.productService.removeProduct(id).subscribe(product => {
      console.log(product);
    });
    console.log('ok');
    this.productTable = this.productTable.filter(product => product.id !== id);
  }

  addProduct(addForm: NgForm): void {
    this.productService.addProduct(addForm.value).subscribe((response: Product) => {
      console.log(response);
      this.getProducts();
      addForm.reset();
  },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
      }

  updateProduct(id: number, product: Product): void {
    this.productService.updateProduct(id, product).subscribe(
      (response: Product) => {
        console.log(response);
        this.getProducts();
      },
      error => {
        console.log(error);
      });
  }

  public onOpenModal(product: Product, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSongModal');
    }
    if (mode === 'edit') {
      this.editProduct = product;
      button.setAttribute('data-target', '#updateSongModal');
    }
    if (mode === 'delete') {
      this.deleteProduct = product;
      button.setAttribute('data-target', '#deleteSongModal');
    }
    container.appendChild(button);
    button.click();
  }

}
