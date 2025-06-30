const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load env variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Import Routes
const authRoutes = require('./routes/auth');

// ✅ Use Routes
app.use('/api/auth', authRoutes);

// ✅ Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.log('❌ MongoDB Error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
const protectedRoutes = require('./routes/protected');
app.use('/api/protected', protectedRoutes);
