import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  data: any;
  id: any;
  BookForm: FormGroup;
  constructor(private ServiceService: ServiceService, private _router: Router,
              private actRoute: ActivatedRoute, private fb: FormBuilder) {
                this.BookForm = this.fb.group({
                 id: [null],
                 title: ['', Validators.required],
                 author: ['', Validators.required],
                 publishDate: ['', Validators.required],
                 pages: ['', Validators.required],
                 genre: ['', Validators.required],
                 price: ['', Validators.required],
                 image: ['', Validators.required],
                 description: ['', Validators.required],
                 quantity: ['', Validators.required],
                });

              }


  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params.id;
    this.loadBook(this.id);
  }
loadBook(id){
  this.ServiceService.getOnebook(id).subscribe(book => {
    this.data = book;
    this.BookForm.controls.title.setValue(this.data.title);
    this.BookForm.controls.author.setValue(this.data.author);
    this.BookForm.controls.publishDate.setValue(this.data.publishDate);
    this.BookForm.controls.pages.setValue(this.data.pages);
    this.BookForm.controls.genre.setValue(this.data.genre);
    this.BookForm.controls.price.setValue(this.data.price);
    this.BookForm.controls.image.setValue(this.data.image);
    this.BookForm.controls.description.setValue(this.data.description);
    this.BookForm.controls.quantity.setValue(this.data.quantity);
  });
}
editData(values){

  this.BookForm.controls.id.setValue(parseInt(this.id));
  console.log(this.BookForm.value);
  this.ServiceService.putData(this.id, this.BookForm.value).subscribe(result => {
    this._router.navigate(['/bookinventory']);
  });
}

  navigation(link){
    this._router.navigate([link]);
  }

}
