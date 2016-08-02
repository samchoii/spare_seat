'use strict';

(function() {

class DashboardController {

  constructor($http, $scope, socket) {
    this.$http = $http;

    // $http.get('/api/things').then(response => {
    //   this.awesomeThings = response.data;
    //   socket.syncUpdates('thing', this.awesomeThings);
    // });

  }

}

angular.module('spareSeatApp')
  .controller('DashboardController', DashboardController);

})();
