import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { AuthGuard }            from '../auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'heroes',  component: HeroListComponent, canActivate: [AuthGuard], },
      { path: 'hero/:id', component: HeroDetailComponent, canActivate: [AuthGuard], }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/