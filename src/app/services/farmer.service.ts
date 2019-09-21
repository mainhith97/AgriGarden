import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FarmerService implements CanActivate {
    constructor(
       private router: Router
    ) {}
    canActivate(): boolean {
        if (localStorage.getItem('farmerToken') != null) {
        return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
