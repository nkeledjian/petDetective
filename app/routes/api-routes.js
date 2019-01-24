// api-routes.js - this file offers a set of routes for displaying and saving data to the db

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Searches for Specific pet (or all pets), and then provides JSON
  app.get("/api/:pet?", function(req, res) {
    if (req.params.pet) {
      // Display the JSON for ONLY that pet.
      // (Note how we're using the ORM here to run our searches)
      db.Pet.findOne({
        where: {
          routeName: req.params.pet,
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      db.Pet.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new pet...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var pet = req.body;

    // Create a routeName
    // Using a RegEx Pattern to remove spaces from pet.name
    var routeName = pet.name.replace(/\s+/g, "").toLowerCase();

    // Then add the pet to the database using sequelize
    db.Pet.create({
      petImgUrl: pet.petImgUrl,
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
