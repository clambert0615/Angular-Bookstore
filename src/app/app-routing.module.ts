import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookinventoryComponent } from './bookinventory/bookinventory.component';
import {AddbookComponent } from './addbook/addbook.component';
import {AppComponent } from './app.component';
import {AdminmenuComponent} from './adminmenu/adminmenu.component';
import {BookdetailsComponent } from './bookdetails/bookdetails.component';
import {EditbookComponent } from './editbook/editbook.component';


const routes: Routes = [
 { path: 'bookinventory', component: BookinventoryComponent},
 { path: 'addbook', component: AddbookComponent},
 { path: 'adminmenu', component: AdminmenuComponent},
 { path: 'bookdetails/:id', component: BookdetailsComponent},
 { path: 'editbook/:id', component: EditbookComponent},
 {path: '', redirectTo: 'adminmenu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
