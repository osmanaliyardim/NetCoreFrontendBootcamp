import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any = { productId: 1, productName: 'Bardak', categoryId: 1, unitsInStock: 10, unitPrice: 15 };
  product2 = { productId: 2, productName: 'Laptop', categoryId: 1, unitsInStock: 10, unitPrice: 15 };
  product3 = { productId: 3, productName: 'Mouse', categoryId: 1, unitsInStock: 10, unitPrice: 15 };
  product4: any = { productId: 4, productName: 'Keyboard', categoryId: 1, unitsInStock: 10, unitPrice: 15 };
  product5 = { productId: 5, productName: 'Camera', categoryId: 1, unitsInStock: 10, unitPrice: 15 };

  products = [this.product, this.product2, this.product3, this.product4, this.product5];

  constructor() { }

  ngOnInit(): void {
  }

}
