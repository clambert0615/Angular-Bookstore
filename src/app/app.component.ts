import { Component } from '@angular/core';
import {ServiceService} from './service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookfrontend';
  constructor(public ServiceService: ServiceService) { }
  data: any;
  BookForm: FormGroup;
  submitted = false;
  EventValue: any = 'Save';
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.getdata();

    this.BookForm = new FormGroup({
      Id: new FormControl(''),
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
deleteData(id) {
  console.log("deleteData called");
  console.log(id);
  this.ServiceService.deleteData(id).subscribe((data: any[]) => {
    this.data = data;
    this.getdata();
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
Update() {
  this.submitted = true;

  if (this.BookForm.invalid) {
   return;
  }
  console.log(this.BookForm);
  this.ServiceService.putData(this.BookForm.value.Id, this.BookForm.value).subscribe((data: any[]) => {
    this.data = data;
    this.resetFrom();
  });
}

EditData(Id, Data) {
  console.log("Edit data called");
  console.log(Data);
  this.BookForm.controls['Id'].setValue(Id);
  this.BookForm.controls['Title'].setValue(Data.Title);
  this.BookForm.controls['Author'].setValue(Data.Author);
  this.BookForm.controls['PublishDate'].setValue(Data.PublishDate);
  this.BookForm.controls['Pages'].setValue(Data.Pages);
  this.BookForm.controls['Genre'].setValue(Data.Genre);
  this.BookForm.controls['Price'].setValue(Data.Price);
  this.BookForm.controls['Image'].setValue(Data.Image);
  this.BookForm.controls['Description'].setValue(Data.Description);
  this.BookForm.controls['Quantity'].setValue(Data.Quantity);
  this.EventValue = 'Update';
}

resetFrom()
{
  this.getdata();
  this.BookForm.reset();
  this.EventValue = 'Save';
  this.submitted = false;
}
}

