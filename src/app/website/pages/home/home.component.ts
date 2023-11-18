import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  productId: string | null = null;

  constructor( 
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.productId = params.get('product');      
    });
  }

  onLoadMore(): void {
    this.productsService.getAll().subscribe((products) => {
      this.products = this.products.concat(products);
    });
  }

}
