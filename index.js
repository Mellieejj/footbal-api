const express = require("express");
const db = require("./db");
const Team = require("./team/model");

const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app listen on ${port}`);
});
