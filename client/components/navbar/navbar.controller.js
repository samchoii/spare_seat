'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];
  isCollapsed = true;
  //end-non-standard

  constructor(Auth, $scope) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.navbarClass = "navbar navbar-fixed-top navbar-default";
    angular.element($('[ui-view]')).on('scroll', function () {
      $scope.nav.navbarClass = 'navbar navbar-fixed-top ' + (($('[ui-view]').scrollTop() || 0) > 50 ? 'navbar-custom' : 'navbar-default');
      $scope.$apply();
    });
    /*
    function scrollHandler() {
      console.log('chris');
      $scope.scrollPos = $('[ui-view]').scrollTop() || 0;
      $scope.$apply();
    }
    window.addEventListener('scroll', scrollHandler, false);
    $(function () {
      window.onscroll = angular.bind(this, function () {
        console.log('chris2')
      $scope.$apply(function () {
        $scope.scrollPos = $('[ui-view]').scrollTop() || 0;
        $scope.$digest();
      });
    });
    */
  }

}

angular.module('spareSeatApp')
  .controller('NavbarController', NavbarController);
