import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    // Use the connection string from environment variables
    const dbURI = process.env.DB as string; 

    await mongoose.connect(dbURI, {
      // These options are no longer necessary with Mongoose 6+
      // useNewUrlParser and useUnifiedTopology are defaults
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
