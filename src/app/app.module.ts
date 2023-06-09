import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ProductListComponent} from '../app/component/product-list/product-list.component';
import {ProductService} from '../app/service/product.service';
import { Routes,RouterModule } from '@angular/router';
import { ProductCategoryMenuComponent } from './component/product-category-menu/product-category-menu.component';
import { SearchComponent } from './component/search/search.component';
import { ProductDeatilsComponent } from './component/product-deatils/product-deatils.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardStatusComponent } from './component/cart-status/cart-status.component';
import { CartDeatilsComponent } from './component/cart-deatils/cart-deatils.component';

const routes: Routes = [
  {path: 'cart-details', component: CartDeatilsComponent},
 {path: 'products/:id', component: ProductDeatilsComponent},
  {path:'search/:keyword',component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDeatilsComponent,
    CardStatusComponent,
    CartDeatilsComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
