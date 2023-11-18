import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { CategoriesService } from '../../../services/categories.service';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  activeMenu = false;
  counter = 0;
  categories: Category[] = [];

  constructor(
    public storeService: StoreService,
    public categoriesService: CategoriesService
    ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
    this.getAllCategories();
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  getAllCategories() {
    this.categoriesService.getAll().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories);
    });
  }
}