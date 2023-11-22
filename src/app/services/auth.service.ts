import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, switchMap, tap } from 'rxjs';

import { User } from '../models/user.model';
import { TokenService } from './token.service';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _apiUrl = 'http://localhost:5116/api/auth';
  private _user = new BehaviorSubject<User | null>(null);
  user$ = this._user.asObservable();

  constructor(
    private _http: HttpClient,
    private _tokenService: TokenService
  ) { } 
  
  login(email: string, password: string){
    return this._http.post<Auth>(`${this._apiUrl}/login`, { email, password })
      .pipe(
        tap(response => this._tokenService.saveToken(response.access_token))
      )
  }

  getProfile() {
    return this._http.get<User>(`${this._apiUrl}/profile`)
      .pipe(
        tap(user => this._user.next(user))
      )
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
      .pipe(
        switchMap(() => this.getProfile())
      )
  }

  logout() {
    this._tokenService.removeToken();    
  }
}
