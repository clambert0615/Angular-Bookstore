import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm: FormGroup;
  subTotal;
  tax;
  Total;
  constructor(private ServiceService: ServiceService, private_router: Router,
              private actRoute: ActivatedRoute, private cartService: CartService)
              { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    document.getElementById('subtotal').innerText = this.getSubtotal().toString();
    document.getElementById('total').innerText = this.getTotal().toString();
    document.getElementById('tax').innerText = this.getTax().toString();

    this.checkoutForm = new FormGroup({
      creditNumber: new FormControl(''),
      expirMonth: new FormControl(''),
      expirYear: new FormControl(''),
      ccvNumber: new FormControl(''),
      name: new FormControl(''), 
      streetAddress: new FormControl(''), 
      city: new FormControl(''), 
      state: new FormControl(''), 
      zip: new FormControl(''), 
      email: new FormControl(''),

    });
  }
    public getSubtotal(): number
    {
      let subTotal = 0;
      this.items.forEach((x: any) => {subTotal = subTotal + Number(x.price); });
      subTotal = Math.round((subTotal + Number.EPSILON) * 100) / 100;
      return subTotal;
    }
    public getTax(): number
    {
      let tax = 0;
      tax = this.getSubtotal() * 0.06;
      tax = Math.round((tax + Number.EPSILON) * 100) / 100;
      return tax;
    }
    public getTotal(): number
    {
      let Total = 0;
      Total =  this.getSubtotal() * 1.06;
      Total = Math.round((Total + Number.EPSILON) * 100) / 100;
      return Total;
    }
    onSubmit(customerData)
    {
      document.getElementById('subtotal').innerText = '0';
      document.getElementById('total').innerText = '0';
      document.getElementById('tax').innerText = '0';
      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
      window.alert('Your order has been submitted!');
    }
    }

