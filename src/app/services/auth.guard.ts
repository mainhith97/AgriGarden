import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService, private userService: UserService) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(async resolve => {
      const token = this.tokenService.getUserToken();
      console.log('tfthgfhgfhgf', token);
      if (!token) {
        this.router.navigate(['login']);
        console.log('fail');
        return resolve(false);
      }

      const currentUser = await this.userService.getOwnUserInfo(token);
      if (currentUser) {
        return resolve(true);
      }

      this.router.navigate(['user']);
      console.log('true');
      return resolve(false);
    });
  }
}
