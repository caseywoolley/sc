'use strict'

angular.module('spoutCastApp')
.config(function($stateProvider) {
  $stateProvider
  .state('map', {
    url: '/map',
    templateUrl: 'client/map/map.view.ng.html',
    controller: 'MapCtrl'
  });
});