module.exports = function (sequelize, DataTypes) {
// Creates a "Pet" model that matches up with DB
var Pet = sequelize.define("Pet", {
  petImgUrl: DataTypes.STRING,
  routeName: DataTypes.STRING,
  petStatus: DataTypes.STRING,
  name: DataTypes.STRING,
  number: DataTypes.STRING,
  address:DataTypes.STRING, 
  petType: DataTypes.STRING,
  petColor: DataTypes.STRING,
  petSize: DataTypes.STRING,
  }, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});
  return Pet;
}


