import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),

  };
  // tslint:disable-next-line: typedef
  getOnebook(id: any){

    return this.http.get(`https://localhost:44335/api/books/${id}`);
  }
  // tslint:disable-next-line: typedef
  postData(formData){
    console.log(formData)
    return this.http.post('https://localhost:44335/api/books', formData);
  }
  // tslint:disable-next-line: typedef
  putData(id: any, formData: any){
    console.log(id);
    console.log(formData);
    return this.http.put(`https://localhost:44335/api/books/${id}`, formData);
  }
  // tslint:disable-next-line: typedef
  deleteData(id){
    return this.http.delete(`https://localhost:44335/api/books/${id}`);
  }

  getData(): any {

    return this.http.get( 'https://localhost:44335/api/books');
  }
}
