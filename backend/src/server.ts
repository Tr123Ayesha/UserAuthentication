import express, { Request, Response } from 'express';
import cors from 'cors';
import connectDB from '../db';
import User from './userSchema';

const app = express();

// Middleware
app.use(cors()); // Use cors middleware to handle CORS issues
app.use(express.json()); // Use this to parse incoming JSON requests

// Connect to MongoDB
connectDB();

console.log("Server is running...");

// Signup Route
app.post('/signup', async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, phone, gender } = req.body;

  try {
    // Create a new User document
    const newUser = new User({ firstName, lastName, email, password, phone, gender });
    
    // Save the user in the database
    await newUser.save();
    
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
