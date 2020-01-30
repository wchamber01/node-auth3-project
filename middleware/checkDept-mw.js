function checkDept(dept) {
  return function(req, res, next) {
    console.log(req.user);
    if (
      req.user &&
      req.user.department &&
      req.user.department.toLowerCase() === dept
    ) {
      next();
    } else {
      res.status(403).json({ message: "Authorized users only!" });
    }
  };
}

module.exports = checkDept;
