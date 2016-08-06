'use strict';

angular.module('spareSeatApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('trip', {
        url: '/trips',
        templateUrl: 'app/trip/trip.html',
        controller: 'TripController',
        controllerAs: 'trip'
      });
  });
