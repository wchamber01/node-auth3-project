const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../middleware/restricted-mw.js");

router.get("/", restricted, department(role), (req, res) => {
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
      res
        .status(403)
        .json({ message: "Must be an authorized user to continue" });
    }
  };
}

module.exports = router;
