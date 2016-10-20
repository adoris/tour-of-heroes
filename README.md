# Heroes

**I'm submitting a ...**  (check one with "x")
```
[x ] bug report => search github for a similar issue or PR before submitting
[ ] feature request
[ ] support request => Please do not submit support request here, instead see https://github.com/angular/angular/blob/master/CONTRIBUTING.md#question
```

**Current behavior**
I try to implement simple app with silent login via auth token (sessionId). If no sessionId provided- fallback to login via username/password.
Router or ActivatedRoute contains no query parameter from address 

**Expected behavior**
If I call app with this links:
http://localhost:4200/hero/13?SessionId=98765&Extras1=testextras
http://localhost:4200/heroes;id=13;SessionId=98765;Extras1=testextras
i expect, that query  parameters "SessionId" and "Extras1" are available in Router or ActivatedRoute.
i expect, that NO login page will be showed, i see page with Hero "Bombasto" or admin dashboard.

If I call app with this links:
http://localhost:4200/hero/13
http://localhost:4200/admin
i see, as expected, that login page will be showed, after login i see page with Hero "Bombasto" or admin dashboard.


**Minimal reproduction of the problem with instructions**
http://plnkr.co has no possibility to use many html pages -> i have prepared modified sample of heroes app from tutorial https://angular.io/docs/ts/latest/guide/router.html.
Modified sample can be found at https://github.com/adoris/tour-of-heroes

1. load and prepare app from: https://github.com/adoris/tour-of-heroes.git
2. ng serve
3. call browser http://localhost:4200/index_angular2.html
4. use any link. I expect, that all links works.



**Please tell us about your environment:**
angular-cli, windows, vs code.

* **Angular version:** 2.1.0


This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
