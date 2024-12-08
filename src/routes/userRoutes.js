const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  getUserById,
  updateUserById,
  deleteUserById,
  protect,
} = require("../controllers/authController");

const router = express.Router();

// Register user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Get user profile (protected)
router.get("/profile", protect, getUserProfile);

// Get user by ID (protected)
router.get("/:id", protect, getUserById);

// Update user by ID (protected)
router.patch("/:id", protect, updateUserById);

// Delete user by ID (protected)
router.delete("/:id", protect, deleteUserById);

module.exports = router;
