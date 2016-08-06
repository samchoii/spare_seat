'use strict';

(function() {

class TripController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.trips = [];

    $http.get('/api/trips').then(response => {
      this.trips = response.data;
      socket.syncUpdates('trip', this.trips);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('trip');
    });
  }

  addTrip() {
    if (this.newTrip) {
      this.$http.post('/api/trips', { destination: this.newTrip });
      this.newTrip = '';
    }
  }

  deleteTrip(trip) {
    this.$http.delete('/api/trips/' + trip._id);
  }
}

angular.module('spareSeatApp')
  .controller('TripController', TripController);

})();
