const express = require("express");
const server = express();

const userRoutes = require("./users/user-router");

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("Welcome To User");
});

server.use("/api/users", userRoutes);

module.exports = server;
