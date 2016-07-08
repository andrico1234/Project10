/**
 * Created by Home on 16/06/2016.
 */

var pokemonArrayOverlay = [];
var starWarsArrayOverlay = [];

// PokemonAPI

var pokemonIdArray = [1, 4, 7, 50, 74, 112, 141, 149];
$.each(pokemonIdArray, function (i, id) {
    var pokemonURL = "https://pokeapi.co/api/v2/pokemon/" + id + "/";
    $.getJSON(pokemonURL, function (pokemonData) {
        var pokemonDataOverlay = [pokemonData.name, pokemonData.id];
        pokemonArrayOverlay.push(pokemonDataOverlay);
        var pokemonType = pokemonData["types"][0]["type"]["name"];
        var $pokemonGalleryItem = "<li class='poke'>";
        $pokemonGalleryItem += "<a data-lightbox='image-pokemon' data-name='"+ pokemonData.name +"' data-id='"+ id +"' data-title='" + pokemonData.name + "</br>" +
            pokemonData.id + "</br>" + pokemonType + "' href='" + pokemonData.sprites.front_default + "'>";
        $pokemonGalleryItem += "<img class='gallery-image' alt='n/a' src='" + pokemonData.sprites.front_default + "'/></a>";
        $pokemonGalleryItem += "</li>";

        $(".ajax-gallery").append($pokemonGalleryItem);
    });
});


// Star Wars API
var starWarsIdArray = [1, 2, 3, 4, 5, 6, 7];
$.each(starWarsIdArray, function (i, id) {
    var starWarsURL = "https://swapi.co/api/people/" + id + "/";
    $.getJSON(starWarsURL, function (starWarsData) {
        var starWarsDataOverlay = [starWarsData.name, starWarsData.gender];
        starWarsArrayOverlay.push(starWarsDataOverlay);
        var starWarsGalleryItem = "<li class='star'>";

        starWarsGalleryItem += "<a data-lightbox='image-starwars' data-title='" + starWarsData.name + "</br>" +
            starWarsData.gender + "' href='img/starwars" + id + ".jpg'>";

        starWarsGalleryItem += "<img class='gallery-image' alt='n/a' src='img/starwars" + id + ".jpg' alt=''/>";
        starWarsGalleryItem += "</li>";
        // console.log(starWarsData.name, starWarsData.gender);
        $(".starwars-gallery").append(starWarsGalleryItem);
    });
});

// Tiny Sort

// when the name button is pressed, use tinysort to alphabetise the items
$("#name-button").click(function() {
    tinysort('.ajax-gallery>li',{selector:'a',attr:'data-name'});
});
// when the ID button is pressed, use tinysort to sort via data-iid
$("#id-button").click(function() {
    tinysort('.ajax-gallery>li',{selector:'a',attr:'data-id'});
});


// function closeArrows() {
//     $("#left-arrow, #right-arrow").hide();
// }
//
// function showOverlay() {
//     $("#left-arrow, #right-arrow").show();
//     $overlay.show();
//     // clicking an image will bring up the overlay and the arrows.
// }
//
// function closeOverlay() {
//     closeArrows();
//     $overlay.hide();
// }
//
// closeArrows();
// Ajax Requests

// var $overlay = $("<div id='overlay'></div>");
// var $overlayImage = $("<img id='overlayImage' src='' alt=''/>");
// var $itemName = $("<p id='itemName'></p>");
// var $itemID = $("<p id='itemID'></p>");
// var $itemTypes = $("<p id='itemTypes'></p>");
// var $itemGender = $("<p id='itemGender'></p>");

// $overlay.append($overlayImage).append($itemName).append($itemID).append($itemTypes).append($itemGender);
// $("body").append($overlay);
// $overlayImage.attr("src", "img/1.png");
// $itemName.text("Bulbasaur");
// $itemID.text("#1");
// $itemTypes.text("1. Grass 2. Poison");
// $overlay.hide();

// $overlay.click(function () {
//     closeOverlay();
// });


// $("body").on('click', '.gallery-image', function () {
//     showOverlay();
//     var imageUrl = $(this).attr('src'); // This is the link to the image.
//     $overlayImage.attr('src', imageUrl);
//     var pParent = document.getElementsByClassName("poke");
//     console.log( pParent.contains );
//     var sParent = document.querySelector(".starwars-gallery");
//     if ($(this).parent === "li.poke") {
//         $itemName.text(itemName);
//         $itemID.text(itemID);
//         $itemTypes.text();
//         console.log("hi!!");
//     } else {
//         $itemName.text(itemName);
//         $itemID.text(itemID);
//         $itemGender.text();
//         console.log("bye!!");
//     }
// });
