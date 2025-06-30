const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');

// ✅ Example Protected Route
router.get('/', verifyToken, (req, res) => {
  res.json({ message: `Hello, user ${req.user.id}! This is a protected route.` });
});

module.exports = router;
