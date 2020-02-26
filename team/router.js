const { Router } = require("express");
const Team = require("./model");

const router = new Router();

router.get("/team", (request, response, next) => {
  Team.findAll()
    .then(list => response.json(list))
    .catch(error => next(error));
});

router.post("/team", (request, response, next) => {
  Team.create(request.body)
    .then(team => response.json(team))
    .catch(next);
});

module.exports = router;
