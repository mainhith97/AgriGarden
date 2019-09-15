import { Injectable } from '@angular/core';
import { ILogin} from '../shared/interface';
import { Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment as config } from '../../environments/environment';

const adminToken = localStorage.getItem('adminToken');
console.log(adminToken);
const userToken = localStorage.getItem('userToken');
console.log(userToken);

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: `Bearer ${adminToken}`
    })
  };

@Injectable()
export class DataService {

    // apiUrl = "http://localhost:1994";

   constructor(
       private http: HttpClient
   ) {}
// tslint:disable-next-line: member-ordering
    apiUrl = config.apiUrl;

// tslint:disable-next-line: member-ordering
    adminPrefix = 'admin';
    userPrefix = 'user';
    s3Prefix = 's3';

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

   handleError(error: HttpErrorResponse) {
    return throwError(error.error);
 }
}
