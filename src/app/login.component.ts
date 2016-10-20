import { Component, OnInit }        from '@angular/core';
import { Router, ActivatedRoute,
         NavigationExtras, Params } from '@angular/router';
import { AuthService }              from './auth.service';

@Component({
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <button (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
      <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </p>`
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(public authService: AuthService, public router: Router, private route: ActivatedRoute) {
    this.setMessage();
  }

  ngOnInit() {
      this.route.params.forEach((params: Params) => {
        console.log('LoginComponent: params id:' + params['id']);
        console.log('LoginComponent: params SessionId:' + params['SessionId']);
      });
      this.route.queryParams.forEach((params: Params) => {
        console.log('LoginComponent: queryParams id:' + params['id']);
        console.log('LoginComponent: queryParams SessionId:' + params['SessionId']);
      });

      // -------------------------------------------
      // i found no 'SessionId' in Router or ActivatedRoute
      // where i find my queryParams?
      let sessionId = this.route.snapshot.params['SessionId'];
      console.log('LoginComponent: Expect here SessionId from queryParams, but get [' + sessionId + ']');
      // -------------------------------------------

      // if session id found in params - silently login
      if (sessionId){
        this.loginWithSessionId(sessionId);
      }
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    console.log(this.message);
  }

  loginWithSessionId(sessionId: string) {
    this.message = 'Trying to log in with SessionId[' + sessionId + '] ...';

    this.authService.loginBySessionId(sessionId).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {

        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/base';

        // here expected possibility to remove 'SessionId' from QueryParams
        // must preserve other QueryParams and Fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: false,
          preserveFragment: false
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  login() {
    this.message = 'Trying to log in with Login "test"...';

    this.authService.login('test', 'test').subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/base';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/