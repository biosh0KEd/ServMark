import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CreateProductDto, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private _apiUrl = 'http://fakestoreapi.com/products';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>('http://fakestoreapi.com/products')
  }

  getByCategory(categoryId: number, limit?: number, offset?: number) {
    let url = `${this._apiUrl}/category/${categoryId}`;
    if (limit) {
      url += `?limit=${limit}`;
    }
    if (offset) {
      url += `&offset=${offset}`;
    }
    return this.http.get<Product[]>(url);
  }

  create(dto: CreateProductDto) {
    return this.http.post<Product>(this._apiUrl, dto);
  }

}
