import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {ServiceService} from './service.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookinventoryComponent } from './bookinventory/bookinventory.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    BookinventoryComponent,
    AddbookComponent,
    AdminmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
