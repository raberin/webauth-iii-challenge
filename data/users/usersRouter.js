const express = require("express");
const router = express.Router();

const Users = require("./usersModel.js");
// const restricted = require('../../auth/authRouter')

//async await get request
router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json();
  } catch (err) {
    res.status(500).json({ message: "Error retrieving users" });
  }
});

//Promise get request
// router.get("/", (req, res) => {
//   Users.find()
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => res.send(err));
// });

module.exports = router;
