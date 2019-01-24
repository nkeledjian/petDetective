// Code here handles queries for specific pets in the database
// In this case, the user submits a pet's name... we then pass that pet's name as a
// URL parameter. Our server then performs the search to grab that pet from the Database.

// when user hits the search-btn
$("#search-btn").on("click", function() {
  // save the pet they typed into the pet-search input
  var searchedPet = $("#Pet-search")
    .val()
    .trim();

  // Using a RegEx Pattern to remove spaces from searchedPet
  searchedPet = searchedPet.replace(/\s+/g, "").toLowerCase();

  // run an AJAX GET-request for our servers api,
  // including the pet name in the url
  $.get("/api/" + searchedPet, function(data) {
    // log the data to our console
    console.log('data',data);
    // empty to well-section before adding new content
    $("#well-section").empty();
    // if the data is not there, then return an error message
    if (!data) {
      $("#well-section").append("<h2> Pet Not Found</h2>");
    }
    else {
      // otherwise
      // pet status as either lost or found
      for(var i in data){
        
        console.log('here2', data[i])
        $("#well-section").append("<h3>" + data[i].petStatus + "</h3>");
        // append the pet photo
        $("#well-section").append("<div><img src=" + data[i].petImgUrl + " style='width: 250px;'></div>");
        // append the pet name
        $("#well-section").append("<h2>Name: " + data[i].name + "</h2>");
        // a contact number for the lost or found poster
        $("#well-section").append("<h3>Number: " + data[i].number + "</h3>");
        // a location input for city, street info, etc.
        $("#well-section").append("<h3>Location: " + data[i].address + "</h3>");
        // what kind of pet
        $("#well-section").append("<h3>Pet Type: " + data[i].petType + "</h3>");
        // pet's color
        $("#well-section").append("<h3>Pet Color: " + data[i].petColor + "</h3>");
        // and relative size
        $("#well-section").append("<h3>Pet Size: " + data[i].petSize + "</h3>");
        

      }
    }
  });
});
