import { Component } from '@angular/core';
import {ServiceService} from './service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ServiceService: ServiceService, private _router: Router) { }

}

