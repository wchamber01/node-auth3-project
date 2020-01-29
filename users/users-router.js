const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../middleware/restricted-mw.js");

router.get("/", restricted, (req, res) => {
  // const dept = res.user.department;
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

function department(role) {
  return function(req, res, next) {
    if (req.user && req.user.role && req.user.role.toLowerCase() === role) {
    } else {
      res.status(403).json({ message: "Authorized users only!" });
    }
  };
}

module.exports = router;
