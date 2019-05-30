const express = require("express");

const router = express.Router();

const user = {
  name: "John Smith",
  height: 70,
  weight: 135,
  age: 22,
  gender: "male",
  exercise: 2,
  goal: "aggressive-loss"
};

// /api/user
router.get("/", (req, res) => {
  var userPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(user);
    }, 300);
  });

  userPromise
    .then(user => res.status(200).json(user))
    .catch(err => {
      res.status(500).json({ message: "error retrieving user" });
    });
});

module.exports = router;
