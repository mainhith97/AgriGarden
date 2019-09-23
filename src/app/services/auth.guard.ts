import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // constructor(private router: Router, private tokenService: TokenService, private userService: UserService) {}
  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return new Promise(async resolve => {
  //     const token = this.tokenService.getUserToken();
  //     console.log(token);
  //     if (!token) {
  //       this.router.navigate(['login']);
  //       console.log('false');
  //       return resolve(false);
  //     }

  //     const currentUser = await this.userService.getOwnUserInfo(token);
  //     if (currentUser) {
  //       return resolve(true);
  //     }

  //     this.router.navigate(['user']);
  //     console.log('true');
  //     return resolve(false);
  //   });
  // }

  constructor(
    private router: Router, private tokenService: TokenService, private userService: UserService
) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.userService.currentUserValue;
    if (currentUser) {
        // logged in so return true
        console.log('true');
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    console.log('false');
    return false;
}
}
