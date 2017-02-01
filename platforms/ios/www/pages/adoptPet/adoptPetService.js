angular.module('adoptPet.service', [
  'app.adoptPet',
])

  .factory('Adopt', ($http, $rootScope, $location) => {
    const data = {};
    const petTypes = [];
    const petImages = {
      1: '../img/pets/bear.png',
      2: '../img/pets/octopus.png',
      3: '../img/pets/dragon.png',
    };

    data.sliderOptions = {
      initialSlide: 0,
      direction: 'horizontal', // or vertical
      speed: 300, // 0.3s transition
      height: 150,
    };

    // create delegate reference to link with slider
    data.sliderDelegate = null;

    const getPets = () => {

      return $http.get('http://35.167.2.107:3000/v1/pet_types')
        .then(res => {
          res.data.data.forEach(type => {
            const types = {
              bear: 'fluffy bear',
              octopus: 'sly octopus',
              dragon: 'fiery dragon',
            };

            petTypes.push(type);
            for (let i = 0; i < petTypes.length; i++) {
              petTypes[i].img = petImages[petTypes[i].id];
            }
            petTypes.forEach(petty => {
              const pet = petty;
              pet.displayType = types[pet.name];
            });
          });
          return petTypes;
        }, err => {
          console.warn(err);
        });
    };

    const adoptNewPet = (newbie) => {
      const newpet = newbie;
      newpet.user_id = $rootScope.user;

      $http.post('http://35.167.2.107:3000/v1/pets', newpet)
        .then(() => {
          $location.path('/app/myPets');
        }, err => {
          console.warn(err);
        });
    };

    return {
      getPets,
      adoptNewPet,
      data,
    };
  });