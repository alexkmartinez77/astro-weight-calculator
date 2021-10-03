// Multi-Level array of planets and their respective relative surface gravity
var planets = [
  ["Pluto", 0.06],
  ["Neptune", 1.148],
  ["Uranus", 0.917],
  ["Saturn", 1.139],
  ["Jupiter", 2.64],
  ["Mars", 0.3895],
  ["Moon", 0.1655],
  ["Earth", 1],
  ["Venus", 0.9032],
  ["Mercury", 0.377],
  ["Sun", 27.9],
];

// Target the select element that has the 'planets id
const planetsList = document.getElementById("planets");

// Populate the dropdown menu with planet names in the planets array
planets.forEach((option) => {

  const [planetName] = option;
  let newOption = document.createElement("option");

  newOption.value = planetName;
  newOption.innerHTML = planetName;
  planetsList.appendChild(newOption);
});

// Returns planet's multiplier
let relativeSurfaceGravity = (planetChosen) => {
  for (const planet of planets) {
    const [pName, pmultiplier] = planet;
    if (pName == planetChosen) {
      return pmultiplier;
    }
  }
};

//Returns planet weight given earth weight and planet name
let calculateWeight = (weight, planetName) => {
  return weight * relativeSurfaceGravity(planetName);
};

let handleClickEvent = (e) => {
  //Creates a variable called userWeight and assigns the value of the user's weight after converting it to a number type
  const userWeight = parseFloat(document.getElementById("user-weight").value);
  //Creates a variable called planetName and assigns the name of the selected planet from the drop down.
  const planetName = document.getElementById("planets").value;

  //Creates a variable called result and assigns the value of the new calculated weight.
  const result = calculateWeight(userWeight, planetName).toFixed(2);
  //Displays message indicating new weight on seledted planet
  if (result == 0 || result == undefined || result == "NaN") {
    document.getElementById("output").innerHTML =
      "Please enter your weight in lbs.";
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `If you were to live on <span class="planetNames">${planetName}</span>, you would weigh <span class="planetNames">${result}</span> lbs!`;
  }
};
