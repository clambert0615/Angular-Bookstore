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
  constructor(public ServiceService: ServiceService, public _router: Router,
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
    this.id = this.actRoute.snapshot.params['id'];
    this.loadBook(this.id);
  }
loadBook(id){
  this.ServiceService.getOnebook(id).subscribe(book => {
    this.data = book;
    this.BookForm.controls['title'].setValue(this.data['title']);
    this.BookForm.controls['author'].setValue(this.data['author']);
    this.BookForm.controls['publishDate'].setValue(this.data['publishDate']);
    this.BookForm.controls['pages'].setValue(this.data['pages']);
    this.BookForm.controls['genre'].setValue(this.data['genre']);
    this.BookForm.controls['price'].setValue(this.data['price']);
    this.BookForm.controls['image'].setValue(this.data['image']);
    this.BookForm.controls['description'].setValue(this.data['description']);
    this.BookForm.controls['quantity'].setValue(this.data['quantity']);
  });
}
editData(values){
  /*
  const data = new FormData();
  data.append('id', this.id);
  data.append('title', values.title);
  data.append('author', values.author);
  data.append('publishDate', values.publishDate);
  data.append('pages', values.pages);
  data.append('genre', values.genre);
  data.append('price', values.price);
  data.append('image', values.image);
  data.append('description', values.description);
  data.append('quantity', values.quantity);
  console.log(data);
  */
  
  this.BookForm.controls['id'].setValue(parseInt(this.id));
  console.log(this.BookForm.value);
  this.ServiceService.putData(this.id, this.BookForm.value).subscribe(result => {
    this._router.navigate(['']);
  });
}
    
  navigation(link){
    this._router.navigate([link]);
  }

}
