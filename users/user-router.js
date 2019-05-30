const express = require("express");

const router = express.Router();

const users = [
  {
    id: 1,
    name: "John Smith",
    height: 70,
    weight: 135,
    age: 22,
    gender: "male",
    exercise: 2,
    goal: "aggressive-loss"
  },

  {
    id: 2,
    name: "Jane Smith",
    height: 65,
    weight: 125,
    age: 20,
    gender: "female",
    exercise: 2,
    goal: "aggressive-loss"
  },
  {
    id: 3,
    name: "Terry Smith",
    height: 73,
    weight: 145,
    age: 26,
    gender: "male",
    exercise: 4,
    goal: "aggressive-gain"
  },

  {
    id: 4,
    name: "Tina Smith",
    height: 65,
    weight: 135,
    age: 29,
    gender: "female",
    exercise: 4,
    goal: "moderate-loss"
  }
];

// /api/users
router.get("/", (req, res) => {
  const userPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(users);
      }, 300);
    });
  };

  userPromise()
    .then(user => res.status(200).json(user))
    .catch(err => {
      res.status(500).json({ message: "error retrieving user" });
    });
});

function findUser(arr, id) {
  return arr.find(user => user.id === parseInt(id));
}

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const userPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(users);
      }, 300);
    });
  };
  userPromise()
    .then(users => {
      let user = findUser(users, id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "No user with that id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "error retrieving user" });
    });
});

module.exports = router;
