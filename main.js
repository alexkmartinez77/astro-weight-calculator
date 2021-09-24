
// Multi-Level array of planets and their respective relative surface gravity
var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];

// Target the select element that has the 'planets id
var planetsList = document.getElementById('planets');

// Populate the dropdown menu with planet names in the planets array
planets.forEach(function(option) {
  var newOption = document.createElement('option');

  newOption.value = option[0];
  newOption.innerHTML = option[0];
  planetsList.appendChild(newOption);
})

// Returns planet's multiplier
function relativeSurfaceGravity(planetChosen){
    for (var i = 0; i < planets.length; i++) {
        if(planetChosen == planets[i][0]){
            return planets[i][1];
        }
    }
}

//Returns planet weight given earth weight and planet name
function calculateWeight(weight, planetName){    
    return (weight * relativeSurfaceGravity(planetName));
} 

function handleClickEvent(e) {
//Creates a variable called userWeight and assigns the value of the user's weight. 
var userWeight = document.getElementById('user-weight').value;
//Creates a variable called planetName and assigns the name of the selected planet from the drop down. 
var planetName = document.getElementById('planets').value;
//Creates a variable called result and assigns the value of the new calculated weight. 
var result = calculateWeight(userWeight, planetName).toFixed(2);
//Displays message indicating new weight on seledted planet
document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result +'lbs!';
} 



    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.