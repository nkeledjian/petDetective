// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.
// Code here handles what happens when a user submits a new pet on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.
//Declare global variables for Google Autocomplete 
var globalCity;
var globalState;

//Google Maps Autocomplete
var input = document.getElementById('location');
var autocomplete = new google.maps.places.Autocomplete(input, {
    types: ['(cities)']
});

google.maps.event.addListener(autocomplete, 'place_changed', function () {
    var place = autocomplete.getPlace();
    var city = place.address_components[0].short_name;
    var state = place.address_components[2].short_name;
    var lat = place.geometry.location.lat();
    var lng = place.geometry.location.lng();
    globalCity = city;
    globalState = state;
});

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newCharacter obj
  var foundPet = {
    petImgUrl: $("#petImgUrl").val().trim(),
    name: $("#name").val().trim(),
    petStatus: "Found",
    number: $("#number").val().trim(),
    location: $("#location").val().trim(),
    petType: $("#petType").val().trim(),
    petColor: $("#petColor").val().trim(),
    petSize: $("#petSize").val().trim(),
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", foundPet)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding information to database");
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#number").val("");
  $("#location").val("");
  $("#petType").val("");
  $("#petColor").val("");
  $("#petColor").val("");
  $("#petSize").val("");

});