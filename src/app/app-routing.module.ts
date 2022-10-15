import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'restaurant/:restaurantId', component: RestaurantComponent},
  {path: 'orders/:userId', component: OrdersComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
