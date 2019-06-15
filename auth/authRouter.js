const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const Users = require("../data/users/usersModel.js");
const tokenService = require("./token-service.js");

router.post("/register", async (req, res) => {
  let user = req.body;

  //hashes the password and saves password as hashed password in db
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  console.log(user);

  try {
    const addedUser = await Users.add(user);
    res.status(201).json(addedUser);
  } catch (err) {
    res.status(500).json({ message: "error in registration" });
  }
});

//Promise Login request -- try to do with async await
router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        //Generates token
        const token = tokenService.generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!, have a token...`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// router.post("/logout", async (req, res) => {});

module.exports = router;
