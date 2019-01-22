// Code here handles what how the page displays all of the pets
// It pings the server. The server then pings the database and displays all of the pets.

// make a get request to our api to grab every pet
$.get("/api", function (data) {

  // for each pet that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var wellSection = $("<div class='card'>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "pet-well-" + i);
    // append the well to the well section
    $("#well-section").append(wellSection);
    // Now add all of our pet data to the well we just placed on the page
    $("#pet-well-" + i).append("<div><img src=" + data[i].petImgUrl + " style='width: 250px;'></div>");
    // make the name an h2,
    $("#pet-well-" + i).append("<h2>Name: " + data[i].name + "</h2>");
    $("#pet-well-" + i).append("<h3>Pet Status: " + data[i].petStatus + "</h3>");
    // the role an h3,
    $("#pet-well-" + i).append("<h3>Number: " + data[i].number + "</h3>");
    $("#pet-well-" + i).append("<h3>Address: " + data[i].address + "</h3>");
    // the age an h3,
    $("#pet-well-" + i).append("<h3>Pet Type: " + data[i].petType + "</h3>");
    // the pet color an h3.
    $("#pet-well-" + i).append("<h3>Pet Color: " + data[i].petColor + "</h3>");
    // and the pet size an h3.
    $("#pet-well-" + i).append("<h3>Pet Size: " + data[i].petSize + "</h3>");
    
  }
});
