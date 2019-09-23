import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment as config } from '../../environments/environment';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  apiUrl = config.apiUrl;
  productPrefix = 'product';


  getListProduct1(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/${this.productPrefix}get-list-product1`)
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
