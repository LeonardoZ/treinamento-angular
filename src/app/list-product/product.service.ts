import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponseDto } from './product.dto';
import { Observable } from 'rxjs';

// Declara serviço como Injetável
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Exemplo de como usar serviços - HttpClient
  constructor(private httpClient: HttpClient) {}

  // Método para buscar Produtos - DTO
  getProducts(): Observable<ProductResponseDto> {
    return this.httpClient.get<ProductResponseDto>(
      'https://dummyjson.com/products'
    );
  }
}
