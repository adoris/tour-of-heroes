import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard }          from './auth-guard.service';
import { BaseComponent }          from './base.component';
import { LoginComponent }          from './login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      // {
      //   path: '',
      //   redirectTo: '/base',
      //   pathMatch: 'full',
      //   canLoad: [AuthGuard]
      // },
      {
        path: 'crisis-center', loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule', canLoad: [AuthGuard]
      },
      {
        path: 'heroes', loadChildren: 'app/heroes/heroes.module#HeroesModule', canLoad: [AuthGuard]
      },
      {
        path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canLoad: [AuthGuard]
      },
      {
        path: 'base', component: BaseComponent, canActivate: [AuthGuard]
      },
      {
        path: '**',   component: LoginComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard
  ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/