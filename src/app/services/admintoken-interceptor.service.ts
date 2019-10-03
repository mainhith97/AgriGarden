import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AdmintokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> | HttpResponse<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    const token = this.tokenService.getAdminToken();
    if (token) {

      // tslint:disable-next-line: no-string-literal
      headersConfig['Authorization'] = `${token}`;
    }


    // tslint:disable-next-line: variable-name
    const _req = req.clone({ setHeaders: headersConfig });
    return next.handle(_req).pipe(
      map((res: HttpResponse<any>) => {
        if (res.body && !res.body.success) {
          this.router.navigate(['main']);
        }
        return res;
      })
    );
  }

}
