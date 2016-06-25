import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router }                       from '@angular/router';

import { Hero }                         from './hero';
import { HeroService }                  from './hero.service';
import { HeroDetailComponent }          from './hero-detail.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes/hero-list.component.html',
    styleUrls: ['app/heroes/hero-list.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    addingHero = false;
    error: any;
    private sub: any;


    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes() {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes)
            .catch(error => this.error = error); // TODO: Display error message
    }

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }

    delete(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    ngOnInit() {
        this.sub = this.router
            .routerState
            .queryParams
            .subscribe(params => {
                //this.selectedId = +params['id'];
                this.getHeroes()
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
        this.addingHero = false;
    }

    gotoDetail() {
        this.router.navigate(['/hero'], { queryParams: { id: this.selectedHero.id } });
    }
}