![Astro Weight Calculator App](https://alexkmartinez77.github.io/astro-weight-calculator/images/astroApp.png)
# Astro Weight Calculator App

The Astro Weight Calculator is a simple App that shows the user what they would
weigh on a given planet or star. 
then selects a planet from a dropdown menu and then hits calculate to render the
person's equivalent weight on the selected planet or star. 

## How It Works

1. The user enters their weight in lbs into the input field on the left hand side
2. Next the user selects a planet or star from a drop down menu
3. The user then clicks on the `Calculate` button to render a message telling them
   what their weight would be on the selected planet or star

## How It was built

This app demonstrates the use of fundamental HTML, CSS and Javascript. Javascript
was used to dynamically populate the dropdown menu of planets from a nested array
of planet data. When pressed, the calculate button, invokes a function that uses
the user's selected planet choice to iterate over the nested array of planet data
and return the respective modifier when a matching planet name is found. The user's
weight is then multplied by this modifier to calculate the user's "planet weight".

## Credits

[Materialize] was the CSS framework used for this application and [Google Fonts] provided
the Orbitron font used in the header of this app.

[Google Fonts]: https://fonts.google.com/ 
[Materialize]: https://materializecss.com/

## Live App

This App is now live and can be visited at: https://alexkmartinez77.github.io/astro-weight-calculator/


