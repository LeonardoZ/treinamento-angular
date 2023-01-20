import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponseDto } from './product.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ProductResponseDto> {
    return this.httpClient.get<ProductResponseDto>(
      'https://dummyjson.com/products'
    );
  }
}
