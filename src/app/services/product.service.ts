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

  // lấy danh sách sản phẩm cây ăn củ
  getListProduct1(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product1`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  // lấy danh sách sản phẩm cây ăn lá
  getListProduct2(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product2`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  // lấy danh sách sản phẩm cây ăn thân
  getListProduct3(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product3`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  // lấy danh sách sản phẩm hoa quả
  getListProduct4(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product4`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  // lấy danh sách sản phẩm hạt giống rau sạch
  getListProduct5(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product5`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  // lấy danh sách sản phẩm hạt giống hoa
  getListProduct6(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product6`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  // lấy danh sách sản phẩm trà các loại
  getListProduct7(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product7`)
    .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
    );
  }
  // lấy danh sách sản phẩm nấm các loại
  getListProduct8(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-list-product8`)
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
