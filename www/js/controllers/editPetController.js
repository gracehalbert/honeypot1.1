angular.module('editPet', [])
.controller('editPetController', function($scope, $rootScope, $http, $location) {

  $http.get(`http://localhost:3000/v1/pets/${$rootScope.pet.id}`)
    .then(function(res) {
      console.log(res.data.data[0]);
      $scope.pet.goal_amt = res.data.data[0].goal_amt;
      $scope.pet.petName = res.data.data[0].name;
      $scope.pet.goal = res.data.data[0].goal_name;
    }, function(err) {
      console.log(err);
    });

  console.log($scope.pet.petName);

  $http.put(`http://localhost:3000/v1/pets/${$rootScope.pet.id}`, $scope.pet)
    .then(function(res) {
      console.log(res);
    }, function(err) {
      console.log(err);
    })
})
