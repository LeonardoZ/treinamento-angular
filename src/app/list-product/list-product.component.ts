import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { ProductResponseDto } from './product.dto';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent {
  productResponse: ProductResponseDto = {
    total: 0,
    skip: 0,
    limit: 0,
    products: [],
  };

  constructor(productService: ProductService) {
    productService.getProducts().subscribe({
      next: (productResponseDto: ProductResponseDto) => {
        this.productResponse = productResponseDto;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
