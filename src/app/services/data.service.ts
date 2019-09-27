import { Injectable } from '@angular/core';
import { ILogin, IRegister, User } from '../shared/interface';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment as config } from '../../environments/environment';

const adminToken = localStorage.getItem('adminToken');
console.log(adminToken);
const userToken = localStorage.getItem('userToken');
console.log(userToken);
const farmerToken = localStorage.getItem('farmerToken');
console.log(farmerToken);

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userToken}`
  })
};

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl = config.apiUrl;
  adminPrefix = 'admin';
  userPrefix = 'user';
  farmerPrefix = 'farmer';

  postLogin(adminLogin: ILogin): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/${this.adminPrefix}/login`, adminLogin)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  postLogin2(userLogin: ILogin): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/${this.userPrefix}/login`, userLogin)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  postRegister(userRegister: IRegister): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/${this.userPrefix}/register`, userRegister)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }
  postRegister2(farmerRegister: IRegister): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/${this.farmerPrefix}/register`, farmerRegister)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  getProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${this.userPrefix}/getProfile`)
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
