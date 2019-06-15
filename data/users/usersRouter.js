const express = require("express");
const router = express.Router();

const Users = require("./usersModel.js");
// const restricted = require('../../auth/authRouter')

//async await get request
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving users" });
  }
});

module.exports = router;
