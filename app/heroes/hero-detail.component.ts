import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/heroes/hero-detail.component.html',
    styleUrls: ['app/heroes/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here
    private sub: any;

    constructor(
        private heroService: HeroService,
        private router: Router) {
    }

    ngOnInit() {
        console.info('HeroDetailComponent OnInit');
        this.sub = this.router
            .routerState
            .queryParams
            .subscribe(params => {
                console.info(params['id']);
                let id = +params['id']; // (+) converts string 'id' to a number
                this.navigated = true;
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    save() {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero; // saved hero, w/ id if new
                this.goBack(hero);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
    goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);
        if (this.navigated) { window.history.back(); }
    }
}