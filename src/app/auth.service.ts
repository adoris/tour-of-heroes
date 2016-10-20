import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  sessionId: string;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(userLogin: string, userPassword: string): Observable<boolean> {
    if (userLogin && userLogin == 'test' && userPassword && userPassword == 'test'){
      return Observable.of(true).delay(1000).do(val => {
        this.isLoggedIn = true;
        this.sessionId = '123';
      });
    }
    return Observable.of(false).delay(1000).do(val => this.isLoggedIn = false);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.sessionId = null;
  }

  loginBySessionId(sessionId: string): Observable<boolean> {
    if (sessionId && (sessionId == '12345' || sessionId == '98765')){
      return Observable.of(true).delay(1000).do(val => {
        this.isLoggedIn = true;
        this.sessionId = sessionId;
      });
    }
    return Observable.of(false).delay(1000).do(val => this.isLoggedIn = false);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/