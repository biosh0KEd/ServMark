import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements  OnInit {
  title = 'serv-mark'; 
  constructor(
    private _auth: AuthService,
    private _tokenService: TokenService
  ) { }
  
  ngOnInit() {
    const token = this._tokenService.getToken();
    if (token) {
      this._auth.getProfile().subscribe();
    }
  }
}