import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../shared/interface';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;
  // apiUrl = config.apiUrl;
  // adminPrefix = 'admin';
  // userPrefix = 'user';

  constructor(private http: HttpClient, private tokenService: TokenService) {}
//doing
  async getOwnUserInfo(token): Promise<User> {
    console.log('vaoday');
    const response = await this.http.get<any>('http://localhost:3000/user/info').toPromise();
    if (response.success) {
      console.log('success', response.success);
      this.currentUser = response.result;
    }

    return this.currentUser;
  }

  // getUserById(id: number): Observable<any> {
  //   return this.http.get(`${environment.API_URL}/users/${id}`);
  // }

  // settingNotifyEmail(isReceiveNotifyEmail: boolean): Observable<any> {
  //   return this.http.put(`${environment.API_URL}/users/notify/me`, {isReceiveNotifyEmail});
  // }

  // getOwnUserProjects(): Observable<any> {
  //   const body = {
  //     loginToken: this.tokenService.getLoginToken()
  //   }

  //   return this.http.post<any>(`${environment.API_URL}/users/me/projects`, body);
  // }

  // getListUsers(dataSearch): Observable<any> {
  //   let query = `username=${dataSearch.username}&role=${dataSearch.role}&deviceTypeId=${dataSearch.deviceTypeId}`

  //   return this.http.get<any>(`${environment.API_URL}/users?${query}`);
  // }

  // updateUserById(id: number, body: Object): Observable<any> {
  //   return this.http.put<any>(`${environment.API_URL}/users/${id}`, body);
  // }
}
