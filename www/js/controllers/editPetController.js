angular.module('editPet', [])
.controller('editPetController', function($scope, $rootScope, $http, $location) {

  $scope.pet.name = $rootScope.pet.name;
  $scope.pet.goal_name = $rootScope.pet.goal_name;
  $scope.pet.goal_amt = $rootScope.pet.goal_amt;
  // $http.get(`http://localhost:3000/v1/pets/${$rootScope.pet.id}`)
  //   .then(function(res) {
  //     $scope.pet.goal_amt = res.data.data[0].goal_amt;
  //     $scope.pet.petName = res.data.data[0].name;
  //     $scope.pet.goal = res.data.data[0].goal_name;
  //   }, function(err) {
  //     console.log(err);
  //   });

  console.log($scope.pet);

  $scope.edit = function() {
    console.log($scope.pet);
    $http.put(`http://localhost:3000/v1/pets/${$rootScope.pet.id}`, $scope.pet)
      .then(function(res) {
        $rootScope.pet.name = res.data.data[0].name;
        $rootScope.pet.goal_name = res.data.data[0].goal_name;
        $rootScope.pet.goal_amt = res.data.data[0].goal_amt;
        $location.path('/app/myPets');
      }, function(err) {
        console.log(err);
      })
  }
  // $http.put(`http://localhost:3000/v1/pets/${$rootScope.pet.id}`, $scope.pet)
  //   .then(function(res) {
  //     console.log(res);
  //   }, function(err) {
  //     console.log(err);
  //   })
})
