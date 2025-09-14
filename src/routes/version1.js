const express = require("express");

const {
  createUser,
  getUserById,
  getAllUsers,
  deleteUserById,
} = require("../controllers/userControllerVersion1");

const { validateUserV1 } = require("../middlewares/validators");

module.exports = (users) => {
  const router = express.Router();

  // Create a new user
  router.post("/users", validateUserV1, createUser.bind(null, users));
  // Get user by Id
  router.get("/users/:id", getUserById.bind(null, users));
  // Get all users
  router.get("/users", getAllUsers.bind(null, users));
  // Delete user by Id
  router.delete("/users/:id", deleteUserById.bind(null, users));

  return router;
};
