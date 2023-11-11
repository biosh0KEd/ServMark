import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http'
import { CreateProductDto, Product, UpdateProductDto } from '../models/product.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private _apiUrl = 'http://localhost:5116/api';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Product[]>(`${this._apiUrl}/product`);
  }

  getByCategory(categoryId: number, limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit) {
      params = params.set('limit', limit);
    }
    if (offset) {
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(`${this._apiUrl}/category/${categoryId}/products`, { params });
  }

  getOne(id: number){
    return this.http.get<Product>(`${this._apiUrl}/product/${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.Conflict) {
            return throwError(() => new Error('Product already exists'));
          }
          if (error.status === HttpStatusCode.NotFound) {
            return throwError(() => new Error('Product not found'));
          }
          if (error.status === HttpStatusCode.InternalServerError) {
            return throwError(() => new Error('Server error'));
          }
          if (error.status === HttpStatusCode.Unauthorized) {
            return throwError(() => new Error('Unauthorized'));
          }
          return throwError(() => new Error('Unknown error'));
        })
      )
  }

  create(dto: CreateProductDto) {
    return this.http.post<Product>(`${this._apiUrl}/product`, dto);
  }

  update(id: number, dto: UpdateProductDto) {
    return this.http.put<Product>(`${this._apiUrl}/product/${id}`, dto);
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this._apiUrl}/product/${id}`);
  }
}
