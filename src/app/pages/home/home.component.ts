import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor( 
    private productsService: ProductsService 
  ) { }


  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  onLoadMore(): void {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = this.products.concat(products);
    });
  }

}
