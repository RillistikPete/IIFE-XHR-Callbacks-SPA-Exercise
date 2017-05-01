//MAIN IIFE

var Predator = (function () {
  //private arrays
  var carnivores = [];
  var herbivores = [];

  return {
    //return exposes the public functions to the interface/webpage
    //two public functions are loadCarnivores and loadHerbivores
    loadCarnivores: function (callbackToInvoke) {
      //value of callbackToInvoke = showCarnivores!!!
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        //putting the carnivores.json stuff into (var carnivores = [])
        //.carnivores is the key/property of json file carnivores
        carnivores = JSON.parse(this.responseText).carnivores;
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.
        callbackToInvoke(carnivores);
      });

      loader.open("GET", "carnivores.JSON");
      loader.send();
    },

    loadHerbivores: function(callbackToInvoke){
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array

        //putting the carnivores.json stuff into (var carnivores = [])
        //.carnivores is the key/property of json file carnivores
        herbivores = JSON.parse(this.responseText).herbivores;

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the
        // carnivore array as an argument.
        callbackToInvoke(herbivores);
      });

      loader.open("GET", "herbivores.JSON");
      loader.send();
    },
  }

})();
