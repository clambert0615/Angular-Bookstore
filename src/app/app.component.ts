import { Component } from '@angular/core';
import {ServiceService} from './service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookfrontend';
  constructor(private ServiceService: ServiceService) { }
  data: any;
  BookForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";
}
