const fs = require("fs");
const { Router } = require("express");
const router = Router();
const { checkAuth, timeStamp } = require("../middlewares/users.middleware");
const {getAllUsers, getUser, createUser} = require("../controllers/users.controllers")

let users = [];

fs.readFile("database.json", (err, data) => {
  if (err) throw err;

  users = JSON.parse(data);
});

// get all users
router.get("/", checkAuth, getAllUsers);

// get user by id
router.get("/:id", checkAuth, getUser);

// add new user
router.post("/", timeStamp, createUser);

module.exports = router;