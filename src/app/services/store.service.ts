import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();


  getMyShoppingCart(): Product[] {
    return this.myShoppingCart;
  }

  addProduct(product: Product): void {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getTotal(): number {
    return this.myShoppingCart.reduce((sum, prod) => sum + prod.price, 0);
  }
}
