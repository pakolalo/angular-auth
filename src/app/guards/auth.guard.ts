import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '@services/token.service';


export const authGuard: CanActivateFn = () => {
  const isValidToken: string | unknown = inject(TokenService).isValidToken();
  if(!isValidToken) {
    inject(Router).navigate(['/login']);
    return false;
  }
  return true;
}
