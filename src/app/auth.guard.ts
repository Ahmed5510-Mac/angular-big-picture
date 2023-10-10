import { CanActivateFn, Router } from '@angular/router';
import {AuthService} from './services/auth.service'
import { inject } from '@angular/core';



export const authGuard: CanActivateFn = (route, state) => {
  const _AuthService = inject(AuthService)
  const _Router = inject(Router)
  const notnull:any=1 ;
  if (_AuthService.currentUser.getValue() != null) {
    _AuthService.gardstatus.next(null)
    return true
  }else{
    _Router.navigate(['/login'])
    _AuthService.gardstatus.next(notnull)
    return false
  }
};
