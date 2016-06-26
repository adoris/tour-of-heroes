"use strict";
var router_1 = require('@angular/router');
var dashboard_routes_1 = require('./dashboard/dashboard.routes');
var heroes_routes_1 = require('./heroes/heroes.routes');
exports.routes = heroes_routes_1.HeroesRoutes.concat(dashboard_routes_1.DashboardRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
];
//# sourceMappingURL=app.routes.js.map