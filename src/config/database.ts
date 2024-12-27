// Database connection String Established

import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error('Error Connecting to MongoDB:',error)
        process.exit(1);
    }
}