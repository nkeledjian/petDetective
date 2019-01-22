// Code here handles queries for specific characters in the database
// In this case, the user submits a character's name... we then pass that character's name as a
// URL parameter. Our server then performs the search to grab that character from the Database.

// when user hits the search-btn
$("#search-btn").on("click", function() {
  // save the character they typed into the character-search input
  var searchedPet = $("#Pet-search")
    .val()
    .trim();

  // Using a RegEx Pattern to remove spaces from searchedCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  searchedPet = searchedPet.replace(/\s+/g, "").toLowerCase();

  // run an AJAX GET-request for our servers api,
  // including the user's character in the url
  $.get("/api/" + searchedPet, function(data) {
    // log the data to our console
    console.log(data);
    // empty to well-section before adding new content
    $("#well-section").empty();
    // if the data is not there, then return an error message
    if (!data) {
      $("#well-section").append("<h2> Pet Not Found</h2>");
    }
    else {
      // otherwise
      // append the pet photo
      $("#well-section").append("<div><img src=" + data.petImgUrl + " style='width: 250px;'></div>");
      // append the character name
      $("#well-section").append("<h2>Name: " + data.name + "</h2>");
      $("#well-section").append("<h3>Pet Status: " + data.petStatus + "</h3>");
      $("#well-section").append("<h3>Number: " + data.number + "</h3>");
      $("#well-section").append("<h3>Location: " + data.address + "</h3>");
      $("#well-section").append("<h3>Pet Type: " + data.petType + "</h3>");
      // pet's color
      $("#well-section").append("<h3>Pet Color: " + data.petColor + "</h3>");
      // relative size
      $("#well-section").append("<h3>Pet Size: " + data.petSize + "</h3>");
      
    }
  });
});
