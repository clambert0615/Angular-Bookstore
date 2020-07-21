import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {

  constructor(public ServiceService: ServiceService, public _router: Router) { }

  ngOnInit(): void {
  }

}
