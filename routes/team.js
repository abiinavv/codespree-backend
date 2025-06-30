const express = require('express');
const router = express.Router();
const Team = require('../models/Team');
const verifyToken = require('../middleware/auth'); // if you're using auth

// Create a team
router.post('/create', verifyToken, async (req, res) => {
  const { teamName, members, projectIdea } = req.body;
  try {
    const team = await Team.create({ teamName, members, projectIdea });
    res.json({ message: '✅ Team created', team });
  } catch (err) {
    res.status(500).json({ error: '❌ Error creating team' });
  }
});

// View all teams
router.get('/all', verifyToken, async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (err) {
    res.status(500).json({ error: '❌ Error fetching teams' });
  }
});

module.exports = router; // ✅ THIS IS IMPORTANT
