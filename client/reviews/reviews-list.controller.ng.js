'use strict'

angular.module('spoutCastApp')
.controller('ReviewsListCtrl', function($scope, $ionicScrollDelegate) {

  $scope.awsBucket = Meteor.settings.public.amazonS3.AWSBucket;
  console.log($scope.awsBucket)

  if (Meteor.isCordova) {
    $scope.localPath = '/local-filesystem' + cordova.file.syncedDataDirectory.slice(7) + 'media/';
  }

  $scope.autorun(function() {
      $scope.latLng = Geolocation.latLng() || {lat: 0, lng: 0};
  });

  $scope.helpers({
    // reviews: function() {
    //   return Reviews.find({active: true});
    // }
    reviews: function() {
      return Reviews.find({
        loc: {
          $near: {
            $geometry: {
              type: 'Point', 
              coordinates: [$scope.getReactively('latLng.lng'), $scope.getReactively('latLng.lat')],
            }
          }
        }
      });
    },
  });
                  
  $scope.subscribe('reviews', function() {
    return [{}, $scope.getReactively('latLng')];
  });

  $scope.save = function() {
    if ($scope.form.$valid) {
      Reviews.insert($scope.newReview);
      $scope.newReview = undefined;
      $ionicScrollDelegate.resize();
    }
  };
                  
  $scope.remove = function(review) {
    console.log(review);
    Reviews.remove({_id:review._id});
    $ionicScrollDelegate.resize();
  };
});