import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private ServiceService: ServiceService, private _router: Router) { }
  data: any;
  BookForm: FormGroup;
  submitted = false;
  EventValue: any = 'Save';
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.getdata();

    this.BookForm = new FormGroup({
      Id: new FormControl(null),
      Title: new FormControl('', [Validators.required]),
      Author: new FormControl('', [Validators.required]),
      PublishDate: new FormControl('', [Validators.required]),
      Pages: new FormControl('', [Validators.required]),
      Genre: new FormControl('', [Validators.required]),
      Price: new FormControl('', [Validators.required]),
      Image: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      Quantity: new FormControl('', [Validators.required]),


    });
  }
   getdata() {
    this.ServiceService.getData().subscribe((data: any[]) => {
      this.data = data;
      console.log(data);
   });
  
 }


Save() {
  console.log("Save data called");
  
  this.submitted = true;

  if (this.BookForm.invalid) {
          return;
   }
  this.ServiceService.postData(this.BookForm.value).subscribe((data: any[]) => {
    this.data = data;
    this.resetFrom();

  });
}
resetFrom()
{
  this.getdata();
  this.BookForm.reset();
  this.EventValue = 'Save';
  this.submitted = false;
}

}