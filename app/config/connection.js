var Sequelize = require("sequelize");
var sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = Sequelize.createConnection(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("petdetective", "root", "eshface", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
}
// Exports the connection for other files to use
module.exports = sequelize;
