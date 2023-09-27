import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[] = [];

  constructor() { }

  getMyShoppingCart(): Product[] {
    return this.myShoppingCart;
  }

  addProduct(product: Product): void {
    this.myShoppingCart.push(product);
  }

  getTotal(): number {
    return this.myShoppingCart.reduce((sum, prod) => sum + prod.price, 0);
  }
}
