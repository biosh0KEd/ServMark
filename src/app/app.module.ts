import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImgComponent } from './website/components/img/img.component';
import { ProductComponent } from './website/components/product/product.component';
import { ProductsComponent } from './website/components/products/products.component';
import { NavComponent } from './website/components/nav/nav.component';
import { ReversePipe } from './website/pipes/reverse.pipe';
import { HighlightDirective } from './website/directives/highlight.directive';
import { LoginComponent } from './website/components/auth/login/login.component';
import { SigninComponent } from './website/components/auth/signin/signin.component';
import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { MyCartComponent } from './website/pages/my-cart/my-cart.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';
import { LayoutComponent } from './website/components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ReversePipe,
    HighlightDirective,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    NotFoundComponent,
    CategoryComponent,
    MyCartComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
