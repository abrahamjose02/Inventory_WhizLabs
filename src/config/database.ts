// Database connection String Established

import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
      // Attempt to connect to MongoDB using the connection string from environment variables
      const conn = await mongoose.connect(process.env.MONGO_URI as string);
      console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
      // Attempt to connect to MongoDB using the connection string from environment variables
      console.error("Error Connecting to MongoDB:", error);
      process.exit(1);
    }
}