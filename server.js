const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// const authRouter = require('./auth/authRouter.js')
// const usersRouter = require('./data/users/usersRouter.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

//Routes
// server.use('/api/auth', authRouter)
// server.use('/api/users', usersRouter)

server.get("/", (req, res) => {
  res.send({ message: "Your API works" });
});

module.exports = server;
