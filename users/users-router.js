const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../middleware/restricted-mw.js");

router.get("/", restricted, (req, res) => {
  //console.log(req.user);
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/bydept", restricted, (req, res) => {
  //console.log(req.user);
  Users.findBy(req.user.department)
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
