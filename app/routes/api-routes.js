// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Pet = require("../models/pet.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:pet?", function(req, res) {
    if (req.params.pet) {
      // Display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Pet.findOne({
        where: {
          routeName: req.params.pet,
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Pet.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var pet = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = pet.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    Pet.create({
      petImgUrl: pet.petImgUrl,
      petMapUrl: pet.petMapUrl,
      routeName: routeName,
      name: pet.name,
      petStatus: pet.petStatus,
      number: pet.number,
      address: pet.address,
      petType: pet.petType,
      petColor: pet.petColor,
      petSize: pet.petSize
    });

    res.status(204).end();
  });
};
