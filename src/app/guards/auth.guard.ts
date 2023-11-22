import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _tokenService: TokenService,
    private _router: Router,
    private _auth: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route);
    console.log(state);
    // const token = this._tokenService.getToken();
    // if (!token) {
    //   this._router.navigate(['/']);
    //   return false;
    // }
    // return true;
    return this._auth.user$
      .pipe(
        map(user => {
          if (!user) {
            this._router.navigate(['/']);
            return false;
          }
          return true;
        })
      )

  }

}