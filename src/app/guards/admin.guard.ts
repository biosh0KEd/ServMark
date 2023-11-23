import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';


export const adminGuard: CanActivateFn = (route, state) => {
  console.log(route, state);
  const authService = inject(AuthService);
  const router = inject(Router);  
  return authService.user$.pipe(
    map(user => {
      if (user && user.role === 'admin') {
        return true;
      } else {
        router.navigate(['/home']);
        return false;
      }
    })
  );
};
