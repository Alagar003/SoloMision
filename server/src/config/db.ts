import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables



const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI as string; // Access the URI from .env
    if (!uri) {
      console.log('MONGO_URI is not defined in the environment variables');
    }
    await mongoose.connect(uri);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log("Mongo connect error:", error);
  }
};

export default connectDB;
