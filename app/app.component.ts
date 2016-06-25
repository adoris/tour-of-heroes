import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroListComponent }   from './heroes/hero-list.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroService }         from './heroes/hero.service';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['/dashboard']">Dashboard</a>
      <a [routerLink]="['/heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService]
})

export class AppComponent {
    title = 'Tour of Heroes';
}