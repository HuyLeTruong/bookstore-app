import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse,
} from '@angular/common/http';

@Injectable()
export class CategoryServices {
  constructor(private http: HttpClient) {}

  getCategory() {
    //option
    let options = {
      hearders: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };

    return this.http.post(
      'https://huyle-bookstore.herokuapp.com/api/cate',
      options
    );

    //body
  }
}
