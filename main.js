
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

var planetsList = document.getElementById('planets');
//.forEach` `document.createElement` `document.getElementById` `.appendChild`

planets.forEach(function(option) {
  var newOption = document.createElement('option');

  newOption.value = option[0];
  newOption.innerHTML = option[0];
  planetsList.appendChild(newOption);
})
// Returns planet factor
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
console.log(userWeight);
//Creates a variable called planetName and assigns the name of the selected planet from the drop down. 
var planetName = document.getElementById('planets').value;
//Creates a variable called result and assigns the value of the new calculated weight. 
var result = calculateWeight(userWeight, planetName);
console.log(result);
//Displays message indicating new weight on seledted planet
document.getElementById('output').innerHTML = 'If you were on ' + planetName + ', you would weigh ' + result +'lbs!';
} 

    // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
    // feel free to add classes and id's to the HTML elements as you need, 
    // import.a google font and use it for some or all of the text on your page. 


    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.