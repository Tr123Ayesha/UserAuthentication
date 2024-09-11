import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    // Connect to MongoDB (simplified for Mongoose 6.x+)
    await mongoose.connect('mongodb://localhost:27017/UserManagement');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
