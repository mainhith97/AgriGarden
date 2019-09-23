import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User, ILogin } from '../shared/interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { environment as config } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // currentUser: User;
  apiUrl = config.apiUrl;
  adminPrefix = 'admin';
  userPrefix = 'user';

  // constructor(private http: HttpClient, private tokenService: TokenService) {}

  // async getOwnUserInfo(token): Promise<User> {
  //   console.log('vaoday');
  //   const response = await this.http.get<any>('http://localhost:3000/user/info').toPromise();
  //   if (response.success) {
  //     console.log('success', response.success);
  //     this.currentUser = response.result;
  //   }

  //   return this.currentUser;
  // }

  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('userToken')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    postLogin(userLogin: ILogin) {
      return this.http.post<any>(`${this.apiUrl}/${this.userPrefix}/login`, userLogin)
          .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('userToken', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
          }));
  }
}
