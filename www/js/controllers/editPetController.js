angular.module('editPet', [])
.controller('editPetController', function($scope, $rootScope, $http, $location) {

  $scope.goal_amt = $rootScope.pet.goal_amt;
  $scope.petName = $rootScope.pet.name;
  $scope.goal = $rootScope.pet.goal_name;


  $scope.edit = function() {
    $rootScope.pet.goal_amt = $scope.goal_amt;
    $rootScope.pet.goal_name = $scope.goal_name;
    $rootScope.pet.name = $scope.petName;
    $http.put(`http://localhost:3000/v1/pets/${$rootScope.pet.id}`, $rootScope.pet)
      .then(function(res) {
        $location.path('/market/pet');
      }, function(err) {
        console.log(err);
      });
  }
})
