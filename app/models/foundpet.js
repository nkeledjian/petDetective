// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var FoundPet = sequelize.define("foundpet", {
  petImgUrl: Sequelize.STRING,
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the character (a string)
  name: Sequelize.STRING,
  // the character's role (a string)
  number: Sequelize.STRING,

  address:Sequelize.STRING, 
  // the character's age (a string)
  petType: Sequelize.STRING,
  
  // and the character's force points (an int)
  petColor: Sequelize.STRING,

  petSize: Sequelize.STRING,
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
FoundPet.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = FoundPet;
