const express = require("express");

const {
  createUser,
  getUserById,
  getAllUsers,
  deleteUserById,
} = require("../controllers/userControllerVersion2");

const { validateUserV2 } = require("../middlewares/validators");

modules.exports = (users) => {
  const router = express.Router();

  // Create a new user
  router.post("/users", validateUserV2, createUser.bind(null, users));
  // Get user by Id
  router.get("/users/:id", getUserById.bind(null, users));
  // Get all users
  router.get("/users", getAllUsers.bind(null, users));
  // Delete user by Id
  router.delete("/users/:id", deleteUserById.bind(null, users));
};
