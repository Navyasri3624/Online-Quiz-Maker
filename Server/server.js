import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import quizRoutes from './router/route.js'; // Corrected this line

// Load environment variables
dotenv.config();

// Debugging log to check if ATLAS_URI is being loaded correctly
console.log('MONGO_URI:', process.env.MONGO_URI);

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
console.log('MONGO_URI:', process.env.MONGO_URI);
// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

connectDB();

// Define Routes
app.use('/api/quiz', quizRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
