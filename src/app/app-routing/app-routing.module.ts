import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductManagerComponent} from '../components/admin/product-manager/product-manager.component';
import {UserManagerComponent} from '../components/admin/user-manager/user-manager.component';
import {OrderManagerComponent} from '../components/admin/order-manager/order-manager.component';
import {PageNotFoundComponent} from '../components/public/shered/page-not-found/page-not-found.component';
import {ShoppingCartComponent} from '../components/public/shopping-cart/shopping-cart.component';

import {LoginComponent} from '../components/public/login/login.component';
import {RegisterComponent} from '../components/public/register/register.component';

import {CartManagerComponent} from '../components/admin/cart-manager/cart-manager.component';
import {AuthGuard} from '../auth.guard';

const  routes: Routes = [
  {path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: 'product-manager', component: ProductManagerComponent, canActivate: [AuthGuard]},
  {path: 'user-manager', component: UserManagerComponent, canActivate: [AuthGuard]},
  {path: 'order-manager', component: OrderManagerComponent, canActivate: [AuthGuard]},
  {path: 'cart-manager', component: CartManagerComponent, canActivate: [AuthGuard]},
  {path: 'shop', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PageNotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
