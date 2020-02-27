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

router.get("/team/:teamId", (request, response, next) => {
  console.log(request.params.teamId);
  Team.findByPk(request.params.teamId)
    .then(team => {
      if (!team) {
        response.status(404).end();
      } else {
        response.json(team);
      }
    })
    .catch(next);
});

router.put("/team/:teamId", (request, response, next) => {
  Team.findByPk(request.params.teamId)
    .then(team => {
      if (team) {
        team.update(request.body).then(user => response.json(team));
      } else {
        response.status(404).end();
      }
    })
    .catch(next);
});
module.exports = router;
