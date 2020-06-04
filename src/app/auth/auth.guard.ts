import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsUserSignedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot | any, state: RouterStateSnapshot): boolean | UrlTree {
    // actually, the parameter `next` is an ActivatedRouteSnapshot
    // but using any stops ts from complaining that it doesn't have the
    // property _routerState (it's a private propery, you know)
    if (!this.authService.isUserSignedIn()) {
      const q = { next: next._routerState.url };
      return this.router.createUrlTree(['/sign-in'], { queryParams: q });
    }
    return true;
  }
}
