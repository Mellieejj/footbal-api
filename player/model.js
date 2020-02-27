const Sequelize = require("sequelize");
const db = require("../db.js");

const Player = db.define("player", {
  name: Sequelize.STRING,
  number: Sequelize.INTEGER
});

module.exports = Player;
