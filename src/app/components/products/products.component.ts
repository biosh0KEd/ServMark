import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  total = 0;
  @Input() products: Product[] = [];
  showProductDetail = false;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService    
    ) {
    this.myShoppingCart = this.storeService.getMyShoppingCart();    
  }  

  onAddToShoppingCart(product: Product): void {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();    
  }

  toggleProductDetail(): void {
    this.showProductDetail = !this.showProductDetail;
  }
}
