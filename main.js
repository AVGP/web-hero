angular.module("hero", []).config(function($routeProvider) {
    $routeProvider
    .when('/your-ship', { templateUrl: 'partials/1-your-ship.part.html' })
    .when('/space-topography', { templateUrl: 'partials/2-space-topography.html' })
    .when('/the-orbit', { templateUrl: 'partials/3-html-1.part.html' })
    .when('/the-solar-system', { templateUrl: 'partials/4-css-1.part.html' })
    .otherwise({
        templateUrl: 'partials/start.part.html'
    });
});