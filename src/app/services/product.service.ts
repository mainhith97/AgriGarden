import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment as config } from '../../environments/environment';
import { throwError, Observable } from 'rxjs';

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

  getDetailProduct(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/product/${id}`)
    .pipe(
        map(response => {
            return response;
        }),
        catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }
}
