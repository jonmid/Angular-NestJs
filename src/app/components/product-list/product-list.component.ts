import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (res) => (this.products = res),
      (err) => console.log(err)
    );
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(
      (res) => {
        this.getProducts();
      },
      (err) => console.log(err)
    );
  }
}
