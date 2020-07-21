import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  constructor(public ServiceService: ServiceService, public _router: Router,
              private actRoute: ActivatedRoute) { }
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
  navigation(link){
    this._router.navigate([link]);
  }
  navigateToInventory(){
    this._router.navigateByUrl('/bookinventory');
  }
}
