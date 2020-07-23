import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookinventoryComponent } from './bookinventory/bookinventory.component';
import {AddbookComponent } from './addbook/addbook.component';
import {AppComponent } from './app.component';
import {AdminmenuComponent} from './adminmenu/adminmenu.component';
import {BookdetailsComponent } from './bookdetails/bookdetails.component';
import {EditbookComponent } from './editbook/editbook.component';
import {CustomermenuComponent} from './customermenu/customermenu.component';
import { ShoppingdetailsComponent } from './shoppingdetails/shoppingdetails.component';
import {CartComponent } from './cart/cart.component';

const routes: Routes = [
 { path: 'bookinventory', component: BookinventoryComponent},
 { path: 'addbook', component: AddbookComponent},
 { path: 'adminmenu', component: AdminmenuComponent},
 { path: 'bookdetails/:id', component: BookdetailsComponent},
 { path: 'editbook/:id', component: EditbookComponent},
 { path: 'customermenu', component: CustomermenuComponent},
 { path: 'shoppingdetails/:id', component: ShoppingdetailsComponent},
 { path: 'cart', component: CartComponent},
 {path: '', redirectTo: 'customermenu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
