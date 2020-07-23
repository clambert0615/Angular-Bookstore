import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shoppingdetails',
  templateUrl: './shoppingdetails.component.html',
  styleUrls: ['./shoppingdetails.component.css']
})
export class ShoppingdetailsComponent implements OnInit {

  constructor(public ServiceService: ServiceService, public _router: Router,
    private actRoute: ActivatedRoute, private cartService: CartService) { }
  
  data: any;
  id: any;
  ngOnInit(): void {
   this.id = this.actRoute.snapshot.params.id;
   this.getBook(this.id);
  }
  getBook(id) {
    this.ServiceService.getOnebook(id).subscribe((data: any[]) => {
      this.data = data;
      console.log(data);
   });
  }
  addToCart(book)
  {
    this.cartService.addToCart(book);
    window.alert('Your product has been added to the cart!');
  }
}
