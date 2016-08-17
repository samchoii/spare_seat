'use strict';

class SettingsController {

  constructor(Auth, $state) {
    this.getCurrentUser = Auth.getCurrentUser;
    /*
    this.$http = $http;
    this.user = $injector.get('Auth').getCurrentUser();
    this.user.firstName = this.user.name.split(' ').shift();
    */
  }

}


angular.module('spareSeatApp')
  .controller('SettingsController', SettingsController);
