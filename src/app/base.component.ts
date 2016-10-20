import { Component } from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { AuthService }      from './auth.service';


@Component({
  selector: 'app-root',
  template: `
    <h1 class="title">Angular Router</h1>
    <h4>{{message}}</h4>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
    </nav>
  `
})
export class BaseComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out') + ', SessionId: [' + this.authService.sessionId + ']';
    console.log(this.message);
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/