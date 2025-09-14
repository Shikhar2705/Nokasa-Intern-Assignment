const { stat } = require("fs");

const createUser = (users, req, res) => {
  const { id, password } = req.body;

  if (users.find((user) => user.id === id)) {
    return res
      .status(409)
      .json({ status: "error", message: "User with this email already exists." });
  }

  // Store the new user
  const newUser = { id, password }; // In a real world applications password is generally hashed but no such implications were asked in the doc so i avoided doing that.
  users.set(id, newUser);
  res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: {
      id: newUser.id,
    },
  });
};

const getUserById = (users, req, res) => {
  const { id } = req.params;
  const user = users.get(id);
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  res.status(200).json({
    status: "success",
    data: {
      id: user.id,
    },
  });
};

const getAllUsers = (users, req, res) => {
  const allUsers = Array.from(users.values()).map((user) => ({ id: user.id }));
  res.status(200).json({ status: "success", data: allUsers });
};

const deleteUserById = (users, req, res) => {
  const { id } = req.params;
  if (!users.has(id)) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }

  users.delete(id);
  res
    .status(200)
    .json({ status: "success", message: "User deleted successfully" });
};

modules.exports = {
    createUser,
    getUserById,
    getAllUsers,
    deleteUserById
};