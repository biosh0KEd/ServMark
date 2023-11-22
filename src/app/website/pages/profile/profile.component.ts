import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this._authService.getProfile()
      .subscribe((data) => {
        this.user = data;
      });
  }
}
