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

    // get list type
    getListType(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/type`)
      .pipe(
          map(response => {
            return response;
          }),
          catchError(this.handleError)
      );
    }
  // get list product by category
  getListProductByType(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/category/${id}`)
    .pipe(
        map(response => {
            return response;
        }),
        catchError(this.handleError)
    );
  }

// lấy chi tiết sản phẩm
  getDetailProduct(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/product/${id}`)
    .pipe(
        map(response => {
            return response;
        }),
        catchError(this.handleError)
    );
  }
  // nhận từ khoá tìm kiếm
  search(searchItem: ISearch): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/search`, searchItem )
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  // lấy dữ liệu tìm kiếm đc
  getSearchResult(keyword: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/search?keyword=${keyword}`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }

  // lấy sản phâm mới nhất
  getListNewest(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-newest`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  // thêm vào giỏ hàng
  addProductToCart(products: any) {
    localStorage.setItem('product', JSON.stringify(products));
  }
  getProductFromCart() {
    return JSON.parse(localStorage.getItem('product'));
  }
  removeAllProductFromCart() {
    return localStorage.removeItem('product');
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }
}
