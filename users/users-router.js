const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, onlyRole("admin"), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});
function onlyRole(role) {
  return function(req, res, next) {
    if (req.user && req.user.role && req.user.role.toLowerCase() === role) {
    } else {
      res.status(403).json({ you: "shall not pass" });
    }
  };
}

module.exports = router;
