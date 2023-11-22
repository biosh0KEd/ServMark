import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../../services/store.service';
import { CategoriesService } from '../../../services/categories.service';
import { Category } from '../../../models/category.model';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  activeMenu = false;
  counter = 0;
  categories: Category[] = [];
  profile: User | null = null;

  constructor(
    public storeService: StoreService,
    public categoriesService: CategoriesService,
    private _authService: AuthService,
    private _router: Router,
    ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
    this.getAllCategories();
    this._authService.user$
      .subscribe(data => {
        this.profile = data;
      })
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

  login() {
    this._authService.loginAndGet('john@mail.com', 'changeme')
      .subscribe(() => {
        this._router.navigate(['/profile']);
      });
  }

  logout() {
    this._authService.logout();
    this.profile = null;
    this._router.navigate(['/']);
  }

}