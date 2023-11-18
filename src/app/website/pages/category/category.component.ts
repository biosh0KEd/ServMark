import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';

import { ProductsService } from 'src/app/services/products.service'; 
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit{
  categoryId: number | null = null;
  limit = 10;
  offset = 0;
  products: Product[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {    
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
    .pipe(
      switchMap(params => {
        this.categoryId = parseInt(params.get('id') ?? '0');
        if (this.categoryId !== 0) {        
          return this.productsService.getByCategory(this.categoryId, this.limit, this.offset)          
        } else {
          return [];
        }
      })
    )    
    .subscribe(data => {
      this.products = data;          
    });          
  }


}
