const { Router } = require("express");
const users = require("./users/users.router");
const router = Router();

router.use("/users", users);

module.exports = router;
