// Code here handles what happens when a user submits a new pet on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // make a newPet obj
  var newPet = {
    petImgUrl: $("#petImgUrl").val().trim(),
    // petStatus: $("#pet-status").val("Lost"),
    name: $("#name").val().trim(),
    number: $("#number").val().trim(),
    address: $("#address").val().trim(),
    petType: $("#petType").val().trim(),
    petColor: $("#petColor").val().trim(),
    petSize: $("#petSize").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newPet)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding information to database");
    });

  // empty each input box by replacing the value with an empty string
  // $("pet-status").val("");
  $("#name").val("");
  $("#number").val("");
  $("#address").val("");
  $("#petType").val("");
  $("#petColor").val("");
  $("#petColor").val("");
  $("#petSize").val("");
});
