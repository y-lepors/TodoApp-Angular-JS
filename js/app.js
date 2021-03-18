var app = angular.module('app', ['ngRoute']);

/**
 * The rooter
 */
app.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: 'partials/list_task.html', controller:"TodoListController"})
        .when('/add', {templateUrl: 'partials/add_task.html', controller:"AddController"})
        .when('/edit/:id', {templateUrl: 'partials/edit_task.html', controller:"EditController"})
        .otherwise({redirectTo: ''});
});


/**
 * Used to setup the dark mode
 */
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
