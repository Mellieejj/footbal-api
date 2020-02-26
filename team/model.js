const Sequelize = require("sequelize");
const db = require("../db.js");

const Team = db.define("team", {
  name: Sequelize.STRING
});

module.exports = Team;
