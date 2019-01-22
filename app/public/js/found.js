// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newCharacter obj
  var foundPet = {
    petImgUrl: $("#petImgUrl").val().trim(),
    name: $("#name").val().trim(),
    petStatus: "Found",
    number: $("#number").val().trim(),
    address: $("#address").val().trim(),
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
  $("#address").val("");
  $("#petType").val("");
  $("#petColor").val("");
  $("#petColor").val("");
  $("#petSize").val("");

});