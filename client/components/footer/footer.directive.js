'use strict';

angular.module('spareSeatApp')
  .directive('footer', function () {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
      link: function (scope, element) {
        element.addClass('footer');
      },
      controller: function ($scope) {
        $scope.year = (new Date()).getFullYear();
      }
    };
  });
