/* global angular TweenMax */
/* eslint no-param-reassign: ["error", { "props": false }] */

angular.module('app.octo', [])
  .controller('OctoCtrl', function ($scope, $rootScope, $http, Octo) {
    Octo.getStats()
      .then(res => {
        $scope.stats = res;
        console.log($scope.stats, 'heres scope stats')
      });
    $scope.showHelp = () => Octo.showHelp();
  });
