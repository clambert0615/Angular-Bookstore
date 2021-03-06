import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';
import { FormGroup,} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookinventory',
  templateUrl: './bookinventory.component.html',
  styleUrls: ['./bookinventory.component.css']
})
export class BookinventoryComponent implements OnInit {

  constructor(public ServiceService: ServiceService, public _router: Router) { }
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
deleteData(id) {
  console.log("deleteData called");
  console.log(id);
  this.ServiceService.deleteData(id).subscribe((data: any[]) => {
    this.data = data;
    this.getdata();
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
