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
      routeName: routeName,
      name: pet.name,
      number: pet.number,
      address: pet.address,
      petType: pet.petType,
      petColor: pet.petColor,
      petSize: pet.petSize
    });

    res.status(204).end();
  });
}

// Dependencies
// =============================================================
var LostPet = require("../models/lostpets.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:lostpets?", function(req, res) {
    if (req.params.Lostpet) {
      // Display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      LostPet.findOne({
        where: {
          routeName: req.params.Lostpet,
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      LostPet.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  

  // If a user sends data to add a new character...
  app.post("/api/newLost", function(req, res) {
    // Take the request...
    var Lostpet = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = Lostpet.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    LostPet.create({
      petImgUrl: pet.petImgUrl,
      routeName: routeName,
      name: pet.name,
      number: pet.number,
      address: pet.address,
      petType: pet.petType,
      petColor: pet.petColor,
      petSize: pet.petSize
    });

    res.status(204).end();
  });
}

// Dependencies
// =============================================================
var FoundPet = require("../models/foundpet.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:foundpet?", function(req, res) {
    if (req.params.Lostpet) {
      // Display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      FoundPet.findOne({
        where: {
          routeName: req.params.FoundPet,
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      FoundPet.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  

  // If a user sends data to add a new character...
  app.post("/api/newLost", function(req, res) {
    // Take the request...
    var FoundPet = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = FoundPet.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    FoundPet.create({
      petImgUrl: pet.petImgUrl,
      routeName: routeName,
      name: pet.name,
      number: pet.number,
      address: pet.address,
      petType: pet.petType,
      petColor: pet.petColor,
      petSize: pet.petSize
    });

    res.status(204).end();
  });
}
  

  