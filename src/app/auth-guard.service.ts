import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}                           from '@angular/router';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    console.log('canActivate:' + url);

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActivateChild: ' + state.url);
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    console.log('canLoad: ' + url);

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log('checkLogin: ' + url + ', isLoggedIn:' + this.authService.isLoggedIn);
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------
    //  !!! Expect here to get session id "98765" from queryParams 
    // or matrix params from url:
    // http://localhost:4200/hero/13?SessionId=98765&Extras1=testextras
    // 
    let sessionId = 123456789;
    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------

    // Set our navigation extras object
    // to preserve query params for login page
    let navigationExtras: NavigationExtras = {
      preserveQueryParams: true,
      preserveFragment: true,
    };

    // Navigate to the login page with extras
    console.log('Navigate to the login page with extras. Redirect:[' + url + ']');
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
}
