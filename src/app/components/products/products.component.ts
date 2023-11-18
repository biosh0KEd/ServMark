import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {
  @Input() products: Product[] = [];
  @Input() set productId(id: string | null){
    if (id) {
      this.onShowDetail(Number(id));
    }
  }
  @Output() loadMore = new EventEmitter();

  myShoppingCart: Product[] = [];
  total = 0;
  showProductDetail = false;
  productChosen: Product | null = null;
  statusDetail: 'loading'| 'success' | 'error' | 'init' = 'init';

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

  onShowDetail(id: number) {
    this.statusDetail = 'loading';
    if (!this.showProductDetail){
      this.showProductDetail = true;
    }
    this.productsService.getOne(id).subscribe({
        next: (data) => { 
          this.productChosen = data;
          this.statusDetail = 'success';
        },
        error: (error) => { 
          window.alert(error.message);
          this.statusDetail = 'error';
        }
      }
    );
  }

  deleteProduct() {
    if (this.productChosen) {
      const id = this.productChosen.id;
      this.productsService.delete(id).subscribe(() => {
        const productIndex = this.products.findIndex((product) => product.id === id);
        this.products.splice(productIndex, 1);
        this.showProductDetail = false;
      });
    }
  }

  onLoadMore(): void {
    this.loadMore.emit();
  }
}
