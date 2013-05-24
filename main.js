angular.module("hero", []).config(function($routeProvider) {
    $routeProvider
    .when('/your-ship', { templateUrl: 'partials/1-your-ship.part.html' })
    .when('/rocket-science-basics', { templateUrl: 'partials/2-rocket-science.part.html' })
    .when('/our-ship', { templateUrl: 'partials/3-html-1.part.html' })
    .when('/the-cockpit', { templateUrl: 'partials/4-css-1.part.html' })
    .when('/decorate-our-ship', { templateUrl: 'partials/4-css-2.part.html' })
    .otherwise({
        templateUrl: 'partials/start.part.html'
    });
});