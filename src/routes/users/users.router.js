const { Router } = require("express");
const getAllUsers = require("./getController/getAllUsers.controller");
const users = Router();

users.route("/").get(getAllUsers);

module.exports = users;
