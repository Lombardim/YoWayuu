import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {AuthStatus} from "../enum/auth-status";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) {
  }

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const {statusToEnter} = route.data;
    const isLogged = localStorage.getItem('loggedId');
    switch (statusToEnter) {
      case AuthStatus.NOT_LOGGED:
        if(isLogged !== null) {
          await this.router.navigateByUrl('/home');
        }
        break;
      case AuthStatus.LOGGED:
        if (isLogged === null) {
          await this.router.navigateByUrl('/auth');
        }
        break;
    }
    return true;
  }
}
