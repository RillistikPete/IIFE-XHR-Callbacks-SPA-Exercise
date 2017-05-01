//MAIN JS PAGE

//this page loads last

//these functions are the "callbacktoInvoke" argument
var output = document.getElementById('domDiv');
var output2 = document.getElementById('domDiv2');

function showCarnivores (carnivores) {
	var outputString = "";
	for (var i=0; i < carnivores.length; i++){
		// longer way of putting it...
		// var currentCarnivore = carnivores[i];
		// outputString += `<h2>${currentCarnivore.species}</h2>`;
		// outputString += `<p>${currentCarnivore.locale}</p>`;
		outputString += `<h2>${carnivores[i].species}</h2>`;
		outputString += `<p>${carnivores[i].locale}</p>`
	}
	output.innerHTML = outputString;
}



function showHerbivores (herbivores) {
	var outputString = "";
	for (var i=0; i < herbivores.length; i++){
		//var currentCarnivore = carnivores[i];
		outputString += `<h2>${herbivores[i].species}</h2>`
		outputString += `<p>${herbivores[i].locale}</p>`
	}
	output2.innerHTML = outputString;
}

//call these in order to show your objects
Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);


