angular.module("hero", []).config(function($routeProvider) {
    $routeProvider
    .when('/your-ship', { templateUrl: 'partials/1-your-ship.part.html' })
    .when('/tech-trinity', { templateUrl: 'partials/2-tech-trinity.part.html' })
    .otherwise({
        templateUrl: 'partials/start.part.html'
    });
});