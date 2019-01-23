// Code here handles what how the page displays all of the pets
// It pings the server. The server then pings the database and displays all of the pets.

// make a get request to our api to grab every pet
$.get("/api", function (data) {

  // for each pet that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var wellSection = $("<div class='card bg-warning'>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "pet-well-" + i);
    // append the well to the well section
    $("#well-section").append(wellSection);
    $("#pet-well-" + i).append("<h1 class='bg-danger text-center'>" +data[i].petStatus+ " " + data[i].petType + "</h1>");
    $("#pet-well-" + i).append("<h5 class='float-right'>Name: " + data[i].name + "</h5>");
    // Now add all of our pet data to the well we just placed on the page
    $("#pet-well-" + i).append("<div ><img src=" + data[i].petImgUrl + " style='width: 400px;'></div>");
    $("#pet-well-" + i).append("<div ><img class='float-right' src=" + data[i].petMapUrl + " style='width: 200px;'></div>");
    
    // make the name an h2,
    
    // the role an h3,
    $("#pet-well-" + i).append("<p class='float-left'>Number: " + data[i].number + "</>");
    
    $("#pet-well-" + i).append("<h3>Address: " + data[i].address + "</h3>");

    $("#pet-well-" + i).append("<h3>petColor: " + data[i].petColor + "</h3>");
    // and the pet size an h3.
    $("#pet-well-" + i).append("<h3>petSize: " + data[i].petSize + "</h3>");
    
  }
});
