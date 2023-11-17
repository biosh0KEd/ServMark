import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  productId: number | null = null;
  product: Product | null = null;

  constructor(
    private location:Location,
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.productId = parseInt(params.get('id') ?? '0');
          if (this.productId !== 0 && !isNaN(this.productId)) {
            return this.productsService.getOne(this.productId);
          }
          return [null];
        })
      )
      .subscribe(product => {
        this.product = product;
      });
  }

  goToBack() {
    this.location.back();
  }
}
