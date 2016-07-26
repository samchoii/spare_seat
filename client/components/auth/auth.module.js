'use strict';

angular.module('spareSeatApp.auth', [
  'spareSeatApp.constants',
  'spareSeatApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
