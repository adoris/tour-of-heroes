import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        console.log('AppComponent: params id:' + params['id']);
        console.log('AppComponent: params SessionId:' + params['SessionId']);
      });
    this.route.queryParams.forEach((params: Params) => {
        console.log('AppComponent: queryParams id:' + params['id']);
        console.log('AppComponent: queryParams SessionId:' + params['SessionId']);
      });
    // -------------------------------------------
    // i found no 'SessionId' in Router or ActivatedRoute
    // where i find my queryParams?
    let sessionId = this.route.snapshot.params['SessionId'];
    console.log('AppComponent: Expect here SessionId from queryParams, but get [' + sessionId + ']');
    // -------------------------------------------
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/