import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor() { }

  addToCart(book)
  {
    this.items.push(book);
  }
  getItems()
  {
    return this.items;
  }
  clearCart()
  {
    this.items = [];
    return this.items;
  }
}
