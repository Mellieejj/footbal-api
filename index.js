const express = require("express");
const bodyParser = require("body-parser");

const teamRouter = require("./team/router");

const app = express();
const port = process.env.PORT || 4000;

const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(teamRouter);

app.listen(port, () => {
  console.log(`app listen on ${port}`);
});
