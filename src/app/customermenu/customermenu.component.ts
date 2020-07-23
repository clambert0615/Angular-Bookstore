import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customermenu',
  templateUrl: './customermenu.component.html',
  styleUrls: ['./customermenu.component.css']
})
export class CustomermenuComponent implements OnInit {

  constructor(public ServiceService: ServiceService, public _router: Router) {}
  data: any;

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.ServiceService.getData().subscribe((data: any[]) => {
      this.data = data;
      console.log(data);
   });
  }
    getNavigation(link, id){
    if(id === ''){
        this._router.navigate([link]);
    } else {
        this._router.navigate([link + '/' + id]);
    }
  }
}
  
