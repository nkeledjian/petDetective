// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Pet" model that matches up with DB
var Pet = sequelize.define("pet", {
  petImgUrl: Sequelize.STRING,
  routeName: Sequelize.STRING,
  petStatus: Sequelize.STRING,
  name: Sequelize.STRING,
  number: Sequelize.STRING,
  location:Sequelize.STRING, 
  petType: Sequelize.STRING,
  petColor: Sequelize.STRING,
  petSize: Sequelize.STRING,
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
Pet.sync();

// Makes the Pet Model available for other files (will also create a table)
module.exports = Pet;
