/**
 * Created by Home on 16/06/2016.
 */

// Create an overlay
var $overlay = $("<div id='overlay'></div>");
// Inside the overlay will be a container
// Inside the container will be the image, which the pokemon's name, ID and type(s)
var $overlayImage = $("<img id='overlayImage' src='' alt=''/>");
var $pokemonName = $("<p id='pokemonName'></p>");
var $pokemonId = $("<p id='pokemonId'></p>");
var $pokemonTypes = $("<p id='pokemonTypes'></p>");

$overlay.append($overlayImage).append($pokemonName).append($pokemonId).append($pokemonTypes);
$("body").append($overlay);

$overlayImage.attr("src", "img/1.png");
$pokemonName.text("Bulbasaur");
$pokemonId.text("#1");
$pokemonTypes.text("1. Grass 2. Poison");
$overlay.hide();

function closeArrows() {
    $("#left-arrow, #right-arrow").hide();
};
// Ajax Requests


var pokemonArrayOverlay = [];
// put the ids into an array
// this array will then be cycled through using a for loop to create our initial pokemon database.

// PokemonAPI

var pokemonIdArray = [1, 4, 7, 50, 74, 112, 141, 149];
$.each(pokemonIdArray, function (i, id) {
    var pokemonURL = "https://pokeapi.co/api/v2/pokemon/" + id + "/";
    var pokemonGalleryItem = "<ul>";
    $.getJSON(pokemonURL, function (pokemonData) {
        var pokemonDataOverlay = [pokemonData.name, pokemonData.id];
        pokemonArrayOverlay.push(pokemonDataOverlay);
        pokemonGalleryItem = "<li><div class='gallery-image'>";
        pokemonGalleryItem += "<img src='" + pokemonData.sprites.front_default + "' alt=''>";
        pokemonGalleryItem += "</div></li>";
        // console.log(pokemonArrayOverlay[i][0], pokemonArrayOverlay[i][1]);
        if (pokemonData["types"][1]) {
            console.log(pokemonData["types"][1]["type"]["name"]);
        }
        console.log(pokemonData["types"][0]["type"]["name"]);
        pokemonGalleryItem += "</ul>";
        $(".ajax-gallery").append(pokemonGalleryItem);
    });
});

var starWarsArrayOverlay = [];

// Star Wars API

var starWarsIdArray = [1, 2, 3, 4, 5, 6];
$.each(starWarsIdArray, function (i, id) {
    var starWarsURL = "http://swapi.co/api/people/" + id + "/";
    var starWarsGalleryItem = "<ul>";
    $.getJSON(starWarsURL, function(starWarsData) {
        var starWarsDataOverlay = [starWarsData.name, starWarsData.gender];
    })
})


// look in to tiny sort. Gallery items may need to be placed in to a list.
// create a lightbox. In this lightbox, we'll need a picture of the pokemon, it's name, ID and type(s).



// CSS for div boxes will be centered,
// Some pokemon only have one type, form a conditional statement that appropriately displays this.
// Clicking the overlay will close the overlay.

// store each pokemon's data into an array or object?
// Define an empty array, and push that pokemon's data to the array when during the $.each() function.

// do the exact same for the star wars API.


// API provide more than 6 items (Done)
// Pop-ups contain item details. (Working On)
// Navigate between popups
// Items can be sorted
// More than 1 api
// Validate.