const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/team", (request, response, next) => {
  Team.findAll()
    .then(list => response.json(list))
    .catch(error => next(error));
});

module.exports = router;
