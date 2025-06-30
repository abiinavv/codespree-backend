const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  teamName: String,
  members: [String], // emails or names
  projectIdea: String,
});

module.exports = mongoose.model('Team', teamSchema);
