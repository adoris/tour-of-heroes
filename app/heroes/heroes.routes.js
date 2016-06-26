"use strict";
var hero_list_component_1 = require('./hero-list.component');
var hero_detail_component_1 = require('./hero-detail.component');
exports.HeroesRoutes = [
    { path: 'heroes', component: hero_list_component_1.HeroListComponent },
    { path: 'hero', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent }
];
//# sourceMappingURL=heroes.routes.js.map