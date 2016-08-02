// 'use strict';
//
// (function() {
//
// function routerDecorator($stateProvider) {
//   var authDecorator = function(state) {
//     var auth = state.authenticate;
//     console.log("helllooooo:  " + auth);
//     if (auth) {
//       state.resolve = state.resolve || {};
//       state.resolve.user = function($state, $q, Auth) {
//         return Auth.getCurrentUser(true)
//           .then(function(user) {
//             console.log("here: " + user);
//             if ((typeof auth !== 'string' && user._id) ||
//               (typeof auth === 'string' && Auth.hasRole(auth))) {
//               return user;
//             }
//             $state.go((user._id) ? 'main' : 'login');
//             return $q.reject('not authorized');
//           });
//       };
//     }
//   };
//
//   $stateProvider.decorator('authenticate', function(state) {
//     authDecorator(state);
//     return state.authenticate;
//   });
// }
//
// angular.module('spareSeatApp.auth')
//   .config(routerDecorator);
//
// })();
//
// 'use strict';
//
// (function() {
//
// angular.module('spareSeatApp.auth')
//   .run(function($rootScope, $state, Auth) {
//     // Redirect to login if route requires auth and the user is not logged in, or doesn't have required role
//     $rootScope.$on('$stateChangeStart', function(event, next) {
//       if(!next.authenticate) {
//         return;
//       }
//
//       let query = typeof next.authenticate === 'string' ? Auth.hasRole : Auth.isLoggedIn;
//
//       query(1,2).then(good => {
//         if(!good) {
//           event.preventDefault();
//           Auth.isLoggedIn().then(is => {
//             $state.go(is ? 'main' : 'login');
//           });
//         }
//       });
//     });
//   });
//
// })();
