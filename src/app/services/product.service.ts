import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment as config } from '../../environments/environment';
import { throwError, Observable } from 'rxjs';
import {ISearch} from '../shared/interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  apiUrl = config.apiUrl;
  productPrefix = 'product';


  getListProduct1(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product1`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  getListProduct2(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product2`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  getListProduct3(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product3`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  getListProduct4(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product4`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  getListProduct5(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product5`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  getListProduct6(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product6`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  getListProduct7(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product7`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  getListProduct8(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product8`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }

  getDetailProduct(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/product/${id}`)
    .pipe(
        map(response => {
            return response;
        }),
        catchError(this.handleError)
    );
  }
  search(searchItem: ISearch): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/search`, searchItem )
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  // searchResult(searchItem: ISearch, name: string): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/search/${name}`, searchItem)
  //   .pipe(
  //       map(response => {
  //         return response;
  //       }),
  //       catchError(this.handleError)
  //   );
  // }
  handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }
}
