angular.module('myPets', [])
.controller('MyPetsCtrl', function($scope, $rootScope, $http, $location) {

  $http.get(`http://localhost:3000/v1/pets/?user_id__is=${$rootScope.user}`)
    .then(function(res) {
      $scope.pets = res.data.data;
    }, function(err) {
      console.log(err);
    })

  $scope.goToPet = function(pet) {
    $rootScope.pet = pet;
    $location.path('/app/pet');
  }

  $scope.editPet = function(pet) {
    $rootScope.pet = pet;
    $location.path('/app/editPet');
  }

})